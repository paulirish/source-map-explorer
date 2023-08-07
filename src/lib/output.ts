import os from 'os';
import path from 'path';
import fs from 'fs';

import { generateHtml } from './html';
import { AppError } from './app-error';

import type { ExploreBundleResult, ExploreOptions, ExploreResult } from './types';

export function formatOutput(
  results: ExploreBundleResult[],
  options: ExploreOptions
): string | undefined {
  if (!options.output) {
    return;
  }

  switch (options.output.format) {
    case 'json':
      return JSON.stringify({ results }, null, '  ');

    case 'tsv':
      return outputAsTsv(results);

    case 'html':
      return generateHtml(results, options);
  }
}

function outputAsTsv(results: ExploreBundleResult[]): string {
  const lines = ['Source\tSize'];

  results.forEach((bundle, index) => {
    if (index > 0) {
      // Separate bundles by empty line
      lines.push('');
    }

    Object.entries(bundle.files)
      .map<[string, number]>(([source, data]) => [source, data.size])
      .sort(sortFilesBySize)
      .forEach(([source, size]) => {
        lines.push(`${source}\t${size}`);
      });
  });

  return lines.join(os.EOL);
}

function sortFilesBySize([, aSize]: [string, number], [, bSize]: [string, number]): number {
  return bSize - aSize;
}


// Whatever this is its dumb.
function getViz(treemapHtml) {
  const js = fs.readFileSync('./evanw-viz/code.js', {encoding: 'utf-8'});
  const html = fs.readFileSync('./evanw-viz/index.html', {encoding: 'utf-8'});
  const css = fs.readFileSync('./evanw-viz/style.css', {encoding: 'utf-8'});

  const iframeHTML = `
    <style>${decodeURIComponent(css)}</style>
    ${decodeURIComponent(html)}
    <script>${decodeURIComponent(js)}</script>
  `;

  return treemapHtml.replace(
    '</html>',
    `
  <script>
    function injectViz() {
      const ifr = document.createElement('iframe');
      document.body.append(ifr);
      ifr.contentDocument.head.innerHTML = \`<script>
        document.body.innerHTML = '<style>${decodeURIComponent(css)}</style>
    
      </script>\`;
    };
    injectViz();
  </script>
  </html>
  `
  );
}

export function saveOutputToFile(result: ExploreResult, options: ExploreOptions): void {
  if (!options.output) {
    return;
  }

  const output = result.output;
  const filename = options.output.filename;

  if (output && filename) {
    try {
      const dir = path.dirname(filename);
      const html = getViz(output);

      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filename, html);
    } catch (error) {
      throw new AppError({ code: 'CannotSaveFile' }, error);
    }
  }
}
