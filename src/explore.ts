import convert from 'convert-source-map';
import path from 'path';
import { mapKeys } from 'lodash';

import { getBundleName } from './api';
import { getFileContent, getCommonPathPrefix } from './helpers';
import { AppError } from './app-error';
import { File, Bundle, ExploreOptions, ExploreBundleResult, FileSizes, FileSizeMap } from './index';

export const UNMAPPED_KEY = '<unmapped>';



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



/**
 * Analyze a bundle
 */
export async function exploreBundle(
  bundle: Bundle,
  options: ExploreOptions
): Promise<ExploreBundleResult> {
  const { code, map } = bundle;

  const sourceMapData = await loadSourceMap(code, map);

  const sizes = computeGeneratedFileSizes(sourceMapData);

  const files = adjustSourcePaths(sizes.files, options);

  const { totalBytes, unmappedBytes } = sizes;

  if (!options.onlyMapped) {
    files[UNMAPPED_KEY] = unmappedBytes;
  }

  // Free Wasm data
  sourceMapData.sdkSourceMap.destroy && sourceMapData.sdkSourceMap.destroy();

  return {
    bundleName: getBundleName(bundle),
    totalBytes,
    unmappedBytes,
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

/** Calculate the number of bytes contributed by each source file */
function computeGeneratedFileSizes(sourceMapData: SourceMapData): FileSizes {
  const spans = computeSpans(sourceMapData);
  const files: FileSizeMap = {};
  let unmappedBytes = 0;
  let totalBytes = 0;

  for (let i = 0; i < spans.length; i++) {
    const { numChars, source } = spans[i];

    totalBytes += numChars;

    if (source === null || source === undefined) {
      unmappedBytes += numChars;
    } else {
      files[source] = (files[source] || 0) + numChars;
    }
  }

  return {
    files,
    unmappedBytes,
    totalBytes,
  };
}

interface Span {
  source: string | null;
  numChars: number;
}

function computeSpans(sourceMapData: SourceMapData): Span[] {
  const { sdkSourceMap, codeFileContent } = sourceMapData;

  const lines = codeFileContent.split('\n');
  const spans: Span[] = [];
  let numChars = 0;

  let lastSource: string | null | undefined = undefined; // not a string, not null

  for (let line = 0; line < lines.length; line++) {
    const lineText = lines[line];
    const numCols = lineText.length;

    for (let column = 0; column < numCols; column++, numChars++) {
      const {sourceURL} = sdkSourceMap.findExactEntry(line, column);

      if (sourceURL !== lastSource) {
        lastSource = sourceURL;
        spans.push({ source: sourceURL, numChars: 1 });
      } else {
        spans[spans.length - 1].numChars += 1;
      }
    }
  }

  return spans;
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
