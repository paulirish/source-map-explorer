
import { explore } from './index.ts';

/**
 *
 * @param {string} code
 * @param {string} map
 */
export function exploreSM(code, map) {
  return explore({
    code: Buffer.from(code),
    map: Buffer.from(map),
  });
}
// Provide global for DevTools frontend
window.exploreSourceMap = exploreSM;
