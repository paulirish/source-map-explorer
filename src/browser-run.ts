import { explore } from './index.ts';

export function renderSM(code, map) {
  console.assert(code);
  console.assert(map);

  explore(
    {
      code: Buffer.from(code), // Buffer.from(samples.js),
      map: Buffer.from(map), // Buffer.from(JSON.stringify(samples.map))
    },
    { output: { format: 'html' } }
  )
    .then(result => {
      document.write(result.output);
    })
    .catch(e => {
      if (!e.bundles) return console.error(e);

      if (e.bundles.length) console.warn(e.bundles);
      if (e.errors.length) e.errors.forEach(console.error);
    })
}


window.renderSM = renderSM;
