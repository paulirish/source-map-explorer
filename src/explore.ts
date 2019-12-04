import convert from 'convert-source-map';
import path from 'path';
import { mapKeys } from 'lodash';

import { getBundleName } from './api';
import {
  getFileContent,
  getCommonPathPrefix,
  getFirstRegexMatch,
  getOccurrencesCount,
} from './helpers';
import { AppError } from './app-error';
import { File, Bundle, ExploreOptions, ExploreBundleResult, FileSizes, FileSizeMap } from './index';

export const UNMAPPED_KEY = '[unmapped]';
export const SOURCE_MAP_COMMENT_KEY = '[sourceMappingURL]';
export const NO_SOURCE_KEY = '[no source]';



const fs = require('fs');
const resolve = require('resolve');

// In order to maintain consistent global scope across the files,
// and share natives like Array, etc, We will eval things within our sandbox
function requireval(path) {
  const res = resolve.sync(path, {basedir: __dirname});
  const filesrc = fs.readFileSync(res, 'utf8');
  // eslint-disable-next-line no-eval
  eval(filesrc + '\n\n//# sourceURL=' + path);
}
global.window = global.self = global.global = global;
global.SDK = {};
global.Common = {};
requireval('../../source-map/cdt/common/Object.js');
requireval('../../source-map/cdt/common/Console.js');
requireval('../../source-map/cdt/platform/utilities.js');
requireval('../../source-map/cdt/sdk/SourceMap.js');


SDK.TextSourceMap.prototype.findExactEntry = function(line, column) {
    // findEntry takes compiled locations and returns original locations.
    const entry = this.findEntry(line, column);
    // without an exact hit, we return no match
    const hitMyBattleShip = entry && entry.lineNumber === line;
    if (!entry || !hitMyBattleShip) {
      return {
        sourceColumnNumber: null,
        sourceLineNumber: null,
        name: null,
        sourceURL: null,
      };
    }
    return entry;
}


SDK.TextSourceMap.prototype.computeLastGeneratedColumns = function() {
  const mappings = this.mappings();
  // @ts-ignore
  if (mappings.length && typeof mappings[0].lastColumnNumber !== 'undefined') return;

  for (let i = 0; i < mappings.length - 1; i++) {
    const mapping = mappings[i];
    const nextMapping = mappings[i + 1];
    if (mapping.lineNumber === nextMapping.lineNumber) {
      // @ts-ignore
      mapping.lastColumnNumber = nextMapping.columnNumber;
    }
  }
};


/**
 * Analyze a bundle
 */
export async function exploreBundle(
  bundle: Bundle,
  options: ExploreOptions
): Promise<ExploreBundleResult> {
  const { code, map } = bundle;

  const sourceMapData = await loadSourceMap(code, map);

  const sizes = computeFileSizes(sourceMapData, options);

  const files = adjustSourcePaths(sizes.files, options);

  const { totalBytes, unmappedBytes, eolBytes, sourceMapCommentBytes } = sizes;

  if (!options.excludeSourceMapComment) {
    files[SOURCE_MAP_COMMENT_KEY] = sourceMapCommentBytes;
  }

  if (!options.onlyMapped) {
    files[UNMAPPED_KEY] = unmappedBytes;
  }

  // Free Wasm data
  sourceMapData.sdkSourceMap.destroy && sourceMapData.sdkSourceMap.destroy();

  return {
    bundleName: getBundleName(bundle),
    totalBytes,
    unmappedBytes,
    eolBytes,
    sourceMapCommentBytes,
    files,
  };
}


interface SourceMapData {
  sdkSourceMap: Consumer;
  codeFileContent: string;
}

/**
 * Get source map
 */
async function loadSourceMap(codeFile: File, sourceMapFile?: File): Promise<SourceMapData> {
  const codeFileContent = getFileContent(codeFile);
  let sdkSourceMap: Consumer;

  if (sourceMapFile) {
    const sourceMapFileContent = getFileContent(sourceMapFile);
    const json = JSON.parse(sourceMapFileContent);
    sdkSourceMap = new SDK.TextSourceMap(`compiled.js`, `compiled.js.map`, json);
  } else {
    // Try to read a source map from a 'sourceMappingURL' comment.
    let converter = convert.fromSource(codeFileContent);

    if (!converter && !Buffer.isBuffer(codeFile)) {
      converter = convert.fromMapFileSource(codeFileContent, path.dirname(codeFile));
    }

    if (!converter) {
      throw new AppError({ code: 'NoSourceMap' });
    }

    sdkSourceMap = new SDK.TextSourceMap(`compiled.js`, `compiled.js.map`, converter.sourcemap);
  }

  if (!sdkSourceMap) {
    throw new AppError({ code: 'NoSourceMap' });
  }

  return {
    sdkSourceMap,
    codeFileContent,
  };
}

const COMMENT_REGEX = convert.commentRegex;
const MAP_FILE_COMMENT_REGEX = convert.mapFileCommentRegex;

/** Extract either source map comment from file content */
function getSourceMapComment(fileContent: string): string {
  const sourceMapComment =
    getFirstRegexMatch(COMMENT_REGEX, fileContent) ||
    getFirstRegexMatch(MAP_FILE_COMMENT_REGEX, fileContent) ||
    '';

  // Remove trailing EOLs
  return sourceMapComment.trim();
}

const LF = '\n';
const CR_LF = '\r\n';

function detectEOL(content: string): string {
  return content.includes(CR_LF) ? CR_LF : LF;
}

interface ComputeFileSizesContext {
  generatedLine: number;
  generatedColumn: number;
  line: string;
  eol: string;
}

function checkInvalidMappingColumn({
  generatedLine,
  generatedColumn,
  line,
  eol,
}: ComputeFileSizesContext): void {
  const maxColumnIndex = line.length - 1;

  // Ignore case when source map references EOL character (e.g. https://github.com/microsoft/TypeScript/issues/34695)
  if (generatedColumn > maxColumnIndex && `${line}${eol}`.lastIndexOf(eol) !== generatedColumn) {
    throw new AppError({
      code: 'InvalidMappingColumn',
      generatedLine,
      generatedColumn,
      maxColumn: line.length,
    });
  }
}

function computeFileSizes(sourceMapData: SourceMapData,   { excludeSourceMapComment }: ExploreOptions): Span[] {
  const { sdkSourceMap, codeFileContent: fileContent } = sourceMapData;

  const sourceMapComment = getSourceMapComment(fileContent);
  // Remove inline source map comment, source map file comment and trailing EOLs
  const source = fileContent.replace(sourceMapComment, '').trim();

  const eol = detectEOL(fileContent);
  // Assume only one type of EOL is used
  const lines = source.split(eol);

  const files: FileSizeMap = {};
  let mappedBytes = 0;

  sdkSourceMap.computeLastGeneratedColumns();

  for (const mapping of sdkSourceMap.mappings()) {
    const source = mapping.sourceURL;
    const generatedLine = mapping.lineNumber + 1;
    const generatedColumn = mapping.columnNumber;
    const lastGeneratedColumn = mapping.lastColumnNumber;

    // Webpack seems to sometimes emit null mappings.
    // https://github.com/mozilla/source-map/pull/303
    if (!source) continue;

    // Columns are 0-based, Lines are 1-based
    const line = lines[generatedLine - 1];
    if (line === undefined) {
      throw new AppError({
        code: 'InvalidMappingLine',
        generatedLine,
        maxLine: lines.length,
      });
    }

    checkInvalidMappingColumn({
      generatedLine,
      generatedColumn,
      line,
      eol,
    });

    let mappingLength = 0;
    if (lastGeneratedColumn !== undefined) {
      checkInvalidMappingColumn({
        generatedLine,
        generatedColumn: lastGeneratedColumn,
        line,
        eol,
      });

      mappingLength = lastGeneratedColumn - generatedColumn + 1;
    } else {
      mappingLength = Buffer.byteLength(line) - generatedColumn;
    }

    const filename = source === null ? NO_SOURCE_KEY : source;
    files[filename] = (files[filename] || 0) + mappingLength;
    mappedBytes += mappingLength;
  };

  const sourceMapCommentBytes = Buffer.byteLength(sourceMapComment);
  const eolBytes = getOccurrencesCount(eol, fileContent) * Buffer.byteLength(eol);
  const totalBytes = Buffer.byteLength(fileContent);

  return {
    files,
    unmappedBytes: totalBytes - mappedBytes - sourceMapCommentBytes - eolBytes,
    eolBytes,
    sourceMapCommentBytes,
    ...(excludeSourceMapComment
      ? { totalBytes: totalBytes - sourceMapCommentBytes }
      : { totalBytes }),
  };
}

export function adjustSourcePaths(fileSizeMap: FileSizeMap, options: ExploreOptions): FileSizeMap {
  if (!options.noRoot) {
    const prefix = getCommonPathPrefix(Object.keys(fileSizeMap));
    const length = prefix.length;

    if (length) {
      fileSizeMap = mapKeys(fileSizeMap, (size, source) => source.slice(length));
    }
  }

  if (options.replaceMap) {
    fileSizeMap = Object.entries(options.replaceMap).reduce((result, [before, after]) => {
      const regexp = new RegExp(before, 'g');

      return mapKeys(result, (size, source) => source.replace(regexp, after));
    }, fileSizeMap);
  }

  return fileSizeMap;
}
