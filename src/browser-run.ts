import { explore } from './index.ts'
import {samples} from './sample.ts'





explore({
  code: Buffer.from(samples.js),
  map: Buffer.from(JSON.stringify(samples.map))
}, { output: { format: 'html' } }).then(result => {
  const elem = document.querySelector('#output');
  if (!elem) return;
  elem.innerHTML = result.output;
}).catch(e => {
  if (!e.bundles) console.error(e);
  e.errors.forEach(console.error);
  if (e.bundles.length) console.warn(e.bundles);
});


