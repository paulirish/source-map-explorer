import { readFileSync } from 'fs';


export function samples() {
  const code = readFileSync('./tests/data/with-unmapped.js', 'binary');
  const map = readFileSync('./tests/data/with-unmapped.js.map', 'binary');
  return {
    code,
    map
  };
}


window.samples = samples;