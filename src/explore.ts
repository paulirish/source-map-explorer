import convert from 'convert-source-map';
import path from 'path';
import { BasicSourceMapConsumer, IndexedSourceMapConsumer, SourceMapConsumer } from 'source-map';
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



// Mirror of sourcemapconsumer API but using the CDT impl
class CDTSourceMapConsumer {
  constructor(payload) {
    if (typeof payload === 'string') {
      if (payload.slice(0, 3) === ')]}')
        payload = payload.substring(payload.indexOf('\n'));
      payload = JSON.parse(payload);
    }
    this._map = new SDK.TextSourceMap(`compiled.js`, `compiled.js.map`, payload);
    this._json = payload;
    // console.log(this._map);
    return Promise.resolve(this);
  }
  get sources() {
    return this._map.sourceURLs();
  }
  get sourceRoot() {
    return this._json.sourceRoot;
  }
  originalPositionFor({line, column, bias}) {
    // assert.equal(bias, null);
    const lineNumber0 = line - 1;
    // findEntry takes compiled locations and returns original locations.
    const entry = this._map.findEntry(lineNumber0, column);
    // without an exact hit, we return no match
    const hitMyBattleShip = entry && entry.lineNumber === lineNumber0;
    if (!entry || !hitMyBattleShip) {
      return {
        column: null,
        line: null,
        name: null,
        source: null,
      };
    }
    const res = {
      source: entry.sourceURL,
      line: entry.sourceLineNumber + 1,
      column: entry.sourceColumnNumber,
      name: entry.name
    };
    return res;
  }
  generatedPositionFor({source, line, column, bias}) {
    // assert.equal(bias, null);
    const lineNumber0 = line - 1;
    const entry = this._map.sourceLineMapping(source, lineNumber0, column);
    const res = { // generated source
      line: entry.lineNumber + 1,
      column: entry.columnNumber,
    };
    return res;
  }

  /**
   * @param {*} callback The function that is called with each mapping. Mappings have the form { source, generatedLine, generatedColumn, originalLine, originalColumn, name }
   * @param {*} context Optional. If specified, this object will be the value of this every time that callback is called.
   * @param {*} order Either SourceMapConsumer.GENERATED_ORDER or SourceMapConsumer.ORIGINAL_ORDER. Specifies whether you want to iterate over the mappings sorted by the generated file's line/column order or the original's source/line/column order, respectively. Defaults to SourceMapConsumer.GENERATED_ORDER.
   */
  eachMapping(callback, context, order) {
    this._map.mappings().forEach(mapping => {
      // TODO: change NaN's to nulls
      const ret = {
        generatedLine: mapping.lineNumber + 1,
        generatedColumn: mapping.columnNumber,
        source: mapping.sourceURL === undefined ? null : mapping.sourceURL,
        originalLine: mapping.sourceLineNumber  + 1,
        originalColumn: mapping.sourceColumnNumber,
        name: mapping.name,
      };
      callback.call(context, ret);
    });
  }


  allGeneratedPositionsFor({source, line, column}) {
    return this._map.findReverseEntries(source, line - 1, column).map(entry => ({
      line: entry.lineNumber + 1,
      column: entry.columnNumber
    }));
  }


  destroy () {}
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

  const sizes = computeGeneratedFileSizes(sourceMapData);

  const files = adjustSourcePaths(sizes.files, options);

  const { totalBytes, unmappedBytes } = sizes;

  if (!options.onlyMapped) {
    files[UNMAPPED_KEY] = unmappedBytes;
  }

  // Free Wasm data
  sourceMapData.consumer.destroy && sourceMapData.consumer.destroy();

  return {
    bundleName: getBundleName(bundle),
    totalBytes,
    unmappedBytes,
    files,
  };
}

type Consumer = BasicSourceMapConsumer | IndexedSourceMapConsumer;

interface SourceMapData {
  consumer: Consumer;
  codeFileContent: string;
}

/**
 * Get source map
 */
async function loadSourceMap(codeFile: File, sourceMapFile?: File): Promise<SourceMapData> {
  const useCDT = false;
  console.log({useCDT, codeFile});
  const codeFileContent = getFileContent(codeFile);
  const impl = useCDT ? CDTSourceMapConsumer : SourceMapConsumer;
  let consumer: Consumer;

  if (sourceMapFile) {
    const sourceMapFileContent = getFileContent(sourceMapFile);
    consumer = await new impl(sourceMapFileContent);
  } else {
    // Try to read a source map from a 'sourceMappingURL' comment.
    let converter = convert.fromSource(codeFileContent);

    if (!converter && !Buffer.isBuffer(codeFile)) {
      converter = convert.fromMapFileSource(codeFileContent, path.dirname(codeFile));
    }

    if (!converter) {
      throw new AppError({ code: 'NoSourceMap' });
    }

    consumer = await new impl(converter.toJSON());
  }

  if (!consumer) {
    throw new AppError({ code: 'NoSourceMap' });
  }

  return {
    consumer,
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
  const { consumer, codeFileContent } = sourceMapData;

  const lines = codeFileContent.split('\n');
  const spans: Span[] = [];
  let numChars = 0;

  let lastSource: string | null | undefined = undefined; // not a string, not null

  for (let line = 1; line <= lines.length; line++) {
    const lineText = lines[line - 1];
    const numCols = lineText.length;

    for (let column = 0; column < numCols; column++, numChars++) {
      const { source } = consumer.originalPositionFor({ line, column });

      if (source !== lastSource) {
        lastSource = source;
        spans.push({ source, numChars: 1 });
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
