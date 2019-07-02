(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.Lighthouse || (g.Lighthouse = {})).ReportGenerator = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"./html/html-report-assets.js":[function(require,module,exports){
/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview Instead of loading report assets form the filesystem, in Devtools we must load
 * them via Runtime.cachedResources. We use this module to shim
 * lighthouse-core/report/html/html-report-assets.js in Devtools.
 */

/* global Runtime */

// @ts-ignore: Runtime exists in Devtools.
const cachedResources = Runtime.cachedResources;

module.exports = {
  REPORT_CSS: cachedResources['audits/lighthouse/report.css'],
  REPORT_JAVASCRIPT: cachedResources['audits/lighthouse/report.js'],
  REPORT_TEMPLATE: cachedResources['audits/lighthouse/template.html'],
  REPORT_TEMPLATES: cachedResources['audits/lighthouse/templates.html'],
};

},{}],1:[function(require,module,exports){
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const htmlReportAssets = require('./html/html-report-assets.js');

class ReportGenerator {
  /**
   * Replaces all the specified strings in source without serial replacements.
   * @param {string} source
   * @param {!Array<{search: string, replacement: string}>} replacements
   * @return {string}
   */
  static replaceStrings(source, replacements) {
    if (replacements.length === 0) {
      return source;
    }

    const firstReplacement = replacements[0];
    const nextReplacements = replacements.slice(1);
    return source
        .split(firstReplacement.search)
        .map(part => ReportGenerator.replaceStrings(part, nextReplacements))
        .join(firstReplacement.replacement);
  }

  /**
   * Returns the report HTML as a string with the report JSON and renderer JS inlined.
   * @param {LH.Result} lhr
   * @return {string}
   */
  static generateReportHtml(lhr) {
    const sanitizedJson = JSON.stringify(lhr)
      .replace(/</g, '\\u003c') // replaces opening script tags
      .replace(/\u2028/g, '\\u2028') // replaces line separators ()
      .replace(/\u2029/g, '\\u2029'); // replaces paragraph separators
    const sanitizedJavascript = htmlReportAssets.REPORT_JAVASCRIPT.replace(/<\//g, '\\u003c/');

    return ReportGenerator.replaceStrings(htmlReportAssets.REPORT_TEMPLATE, [
      {search: '%%LIGHTHOUSE_JSON%%', replacement: sanitizedJson},
      {search: '%%LIGHTHOUSE_JAVASCRIPT%%', replacement: sanitizedJavascript},
      {search: '/*%%LIGHTHOUSE_CSS%%*/', replacement: htmlReportAssets.REPORT_CSS},
      {search: '%%LIGHTHOUSE_TEMPLATES%%', replacement: htmlReportAssets.REPORT_TEMPLATES},
    ]);
  }

  /**
   * Converts the results to a CSV formatted string
   * Each row describes the result of 1 audit with
   *  - the name of the category the audit belongs to
   *  - the name of the audit
   *  - a description of the audit
   *  - the score type that is used for the audit
   *  - the score value of the audit
   *
   * @param {LH.Result} lhr
   * @return {string}
   */
  static generateReportCSV(lhr) {
    // To keep things "official" we follow the CSV specification (RFC4180)
    // The document describes how to deal with escaping commas and quotes etc.
    const CRLF = '\r\n';
    const separator = ',';
    /** @param {string} value @return {string} */
    const escape = value => `"${value.replace(/"/g, '""')}"`;

    // Possible TODO: tightly couple headers and row values
    const header = ['category', 'name', 'title', 'type', 'score'];
    const table = Object.values(lhr.categories).map(category => {
      return category.auditRefs.map(auditRef => {
        const audit = lhr.audits[auditRef.id];
        // CSV validator wants all scores to be numeric, use -1 for now
        const numericScore = audit.score === null ? -1 : audit.score;
        return [category.title, audit.id, audit.title, audit.scoreDisplayMode, numericScore]
          .map(value => value.toString())
          .map(escape);
      });
    });

    return [header].concat(...table)
      .map(row => row.join(separator)).join(CRLF);
  }

  /**
   * Creates the results output in a format based on the `mode`.
   * @param {LH.Result} lhr
   * @param {LH.Config.Settings['output']} outputModes
   * @return {string|string[]}
   */
  static generateReport(lhr, outputModes) {
    const outputAsArray = Array.isArray(outputModes);
    if (typeof outputModes === 'string') outputModes = [outputModes];

    const output = outputModes.map(outputMode => {
      // HTML report.
      if (outputMode === 'html') {
        return ReportGenerator.generateReportHtml(lhr);
      }
      // CSV report.
      if (outputMode === 'csv') {
        return ReportGenerator.generateReportCSV(lhr);
      }
      // JSON report.
      if (outputMode === 'json') {
        return JSON.stringify(lhr, null, 2);
      }

      throw new Error('Invalid output mode: ' + outputMode);
    });

    return outputAsArray ? output : output[0];
  }
}

module.exports = ReportGenerator;

},{"./html/html-report-assets.js":"./html/html-report-assets.js"}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRzL2RldnRvb2xzLXJlcG9ydC1hc3NldHMuanMiLCJsaWdodGhvdXNlLWNvcmUvcmVwb3J0L3JlcG9ydC1nZW5lcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBJbnN0ZWFkIG9mIGxvYWRpbmcgcmVwb3J0IGFzc2V0cyBmb3JtIHRoZSBmaWxlc3lzdGVtLCBpbiBEZXZ0b29scyB3ZSBtdXN0IGxvYWRcbiAqIHRoZW0gdmlhIFJ1bnRpbWUuY2FjaGVkUmVzb3VyY2VzLiBXZSB1c2UgdGhpcyBtb2R1bGUgdG8gc2hpbVxuICogbGlnaHRob3VzZS1jb3JlL3JlcG9ydC9odG1sL2h0bWwtcmVwb3J0LWFzc2V0cy5qcyBpbiBEZXZ0b29scy5cbiAqL1xuXG4vKiBnbG9iYWwgUnVudGltZSAqL1xuXG4vLyBAdHMtaWdub3JlOiBSdW50aW1lIGV4aXN0cyBpbiBEZXZ0b29scy5cbmNvbnN0IGNhY2hlZFJlc291cmNlcyA9IFJ1bnRpbWUuY2FjaGVkUmVzb3VyY2VzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUkVQT1JUX0NTUzogY2FjaGVkUmVzb3VyY2VzWydhdWRpdHMvbGlnaHRob3VzZS9yZXBvcnQuY3NzJ10sXG4gIFJFUE9SVF9KQVZBU0NSSVBUOiBjYWNoZWRSZXNvdXJjZXNbJ2F1ZGl0cy9saWdodGhvdXNlL3JlcG9ydC5qcyddLFxuICBSRVBPUlRfVEVNUExBVEU6IGNhY2hlZFJlc291cmNlc1snYXVkaXRzL2xpZ2h0aG91c2UvdGVtcGxhdGUuaHRtbCddLFxuICBSRVBPUlRfVEVNUExBVEVTOiBjYWNoZWRSZXNvdXJjZXNbJ2F1ZGl0cy9saWdodGhvdXNlL3RlbXBsYXRlcy5odG1sJ10sXG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgaHRtbFJlcG9ydEFzc2V0cyA9IHJlcXVpcmUoJy4vaHRtbC9odG1sLXJlcG9ydC1hc3NldHMuanMnKTtcblxuY2xhc3MgUmVwb3J0R2VuZXJhdG9yIHtcbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCB0aGUgc3BlY2lmaWVkIHN0cmluZ3MgaW4gc291cmNlIHdpdGhvdXQgc2VyaWFsIHJlcGxhY2VtZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVxuICAgKiBAcGFyYW0geyFBcnJheTx7c2VhcmNoOiBzdHJpbmcsIHJlcGxhY2VtZW50OiBzdHJpbmd9Pn0gcmVwbGFjZW1lbnRzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyByZXBsYWNlU3RyaW5ncyhzb3VyY2UsIHJlcGxhY2VtZW50cykge1xuICAgIGlmIChyZXBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudHNbMF07XG4gICAgY29uc3QgbmV4dFJlcGxhY2VtZW50cyA9IHJlcGxhY2VtZW50cy5zbGljZSgxKTtcbiAgICByZXR1cm4gc291cmNlXG4gICAgICAgIC5zcGxpdChmaXJzdFJlcGxhY2VtZW50LnNlYXJjaClcbiAgICAgICAgLm1hcChwYXJ0ID0+IFJlcG9ydEdlbmVyYXRvci5yZXBsYWNlU3RyaW5ncyhwYXJ0LCBuZXh0UmVwbGFjZW1lbnRzKSlcbiAgICAgICAgLmpvaW4oZmlyc3RSZXBsYWNlbWVudC5yZXBsYWNlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVwb3J0IEhUTUwgYXMgYSBzdHJpbmcgd2l0aCB0aGUgcmVwb3J0IEpTT04gYW5kIHJlbmRlcmVyIEpTIGlubGluZWQuXG4gICAqIEBwYXJhbSB7TEguUmVzdWx0fSBsaHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdlbmVyYXRlUmVwb3J0SHRtbChsaHIpIHtcbiAgICBjb25zdCBzYW5pdGl6ZWRKc29uID0gSlNPTi5zdHJpbmdpZnkobGhyKVxuICAgICAgLnJlcGxhY2UoLzwvZywgJ1xcXFx1MDAzYycpIC8vIHJlcGxhY2VzIG9wZW5pbmcgc2NyaXB0IHRhZ3NcbiAgICAgIC5yZXBsYWNlKC9cXHUyMDI4L2csICdcXFxcdTIwMjgnKSAvLyByZXBsYWNlcyBsaW5lIHNlcGFyYXRvcnMgKClcbiAgICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csICdcXFxcdTIwMjknKTsgLy8gcmVwbGFjZXMgcGFyYWdyYXBoIHNlcGFyYXRvcnNcbiAgICBjb25zdCBzYW5pdGl6ZWRKYXZhc2NyaXB0ID0gaHRtbFJlcG9ydEFzc2V0cy5SRVBPUlRfSkFWQVNDUklQVC5yZXBsYWNlKC88XFwvL2csICdcXFxcdTAwM2MvJyk7XG5cbiAgICByZXR1cm4gUmVwb3J0R2VuZXJhdG9yLnJlcGxhY2VTdHJpbmdzKGh0bWxSZXBvcnRBc3NldHMuUkVQT1JUX1RFTVBMQVRFLCBbXG4gICAgICB7c2VhcmNoOiAnJSVMSUdIVEhPVVNFX0pTT04lJScsIHJlcGxhY2VtZW50OiBzYW5pdGl6ZWRKc29ufSxcbiAgICAgIHtzZWFyY2g6ICclJUxJR0hUSE9VU0VfSkFWQVNDUklQVCUlJywgcmVwbGFjZW1lbnQ6IHNhbml0aXplZEphdmFzY3JpcHR9LFxuICAgICAge3NlYXJjaDogJy8qJSVMSUdIVEhPVVNFX0NTUyUlKi8nLCByZXBsYWNlbWVudDogaHRtbFJlcG9ydEFzc2V0cy5SRVBPUlRfQ1NTfSxcbiAgICAgIHtzZWFyY2g6ICclJUxJR0hUSE9VU0VfVEVNUExBVEVTJSUnLCByZXBsYWNlbWVudDogaHRtbFJlcG9ydEFzc2V0cy5SRVBPUlRfVEVNUExBVEVTfSxcbiAgICBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgcmVzdWx0cyB0byBhIENTViBmb3JtYXR0ZWQgc3RyaW5nXG4gICAqIEVhY2ggcm93IGRlc2NyaWJlcyB0aGUgcmVzdWx0IG9mIDEgYXVkaXQgd2l0aFxuICAgKiAgLSB0aGUgbmFtZSBvZiB0aGUgY2F0ZWdvcnkgdGhlIGF1ZGl0IGJlbG9uZ3MgdG9cbiAgICogIC0gdGhlIG5hbWUgb2YgdGhlIGF1ZGl0XG4gICAqICAtIGEgZGVzY3JpcHRpb24gb2YgdGhlIGF1ZGl0XG4gICAqICAtIHRoZSBzY29yZSB0eXBlIHRoYXQgaXMgdXNlZCBmb3IgdGhlIGF1ZGl0XG4gICAqICAtIHRoZSBzY29yZSB2YWx1ZSBvZiB0aGUgYXVkaXRcbiAgICpcbiAgICogQHBhcmFtIHtMSC5SZXN1bHR9IGxoclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2VuZXJhdGVSZXBvcnRDU1YobGhyKSB7XG4gICAgLy8gVG8ga2VlcCB0aGluZ3MgXCJvZmZpY2lhbFwiIHdlIGZvbGxvdyB0aGUgQ1NWIHNwZWNpZmljYXRpb24gKFJGQzQxODApXG4gICAgLy8gVGhlIGRvY3VtZW50IGRlc2NyaWJlcyBob3cgdG8gZGVhbCB3aXRoIGVzY2FwaW5nIGNvbW1hcyBhbmQgcXVvdGVzIGV0Yy5cbiAgICBjb25zdCBDUkxGID0gJ1xcclxcbic7XG4gICAgY29uc3Qgc2VwYXJhdG9yID0gJywnO1xuICAgIC8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgQHJldHVybiB7c3RyaW5nfSAqL1xuICAgIGNvbnN0IGVzY2FwZSA9IHZhbHVlID0+IGBcIiR7dmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKX1cImA7XG5cbiAgICAvLyBQb3NzaWJsZSBUT0RPOiB0aWdodGx5IGNvdXBsZSBoZWFkZXJzIGFuZCByb3cgdmFsdWVzXG4gICAgY29uc3QgaGVhZGVyID0gWydjYXRlZ29yeScsICduYW1lJywgJ3RpdGxlJywgJ3R5cGUnLCAnc2NvcmUnXTtcbiAgICBjb25zdCB0YWJsZSA9IE9iamVjdC52YWx1ZXMobGhyLmNhdGVnb3JpZXMpLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnkuYXVkaXRSZWZzLm1hcChhdWRpdFJlZiA9PiB7XG4gICAgICAgIGNvbnN0IGF1ZGl0ID0gbGhyLmF1ZGl0c1thdWRpdFJlZi5pZF07XG4gICAgICAgIC8vIENTViB2YWxpZGF0b3Igd2FudHMgYWxsIHNjb3JlcyB0byBiZSBudW1lcmljLCB1c2UgLTEgZm9yIG5vd1xuICAgICAgICBjb25zdCBudW1lcmljU2NvcmUgPSBhdWRpdC5zY29yZSA9PT0gbnVsbCA/IC0xIDogYXVkaXQuc2NvcmU7XG4gICAgICAgIHJldHVybiBbY2F0ZWdvcnkudGl0bGUsIGF1ZGl0LmlkLCBhdWRpdC50aXRsZSwgYXVkaXQuc2NvcmVEaXNwbGF5TW9kZSwgbnVtZXJpY1Njb3JlXVxuICAgICAgICAgIC5tYXAodmFsdWUgPT4gdmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgICAubWFwKGVzY2FwZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbaGVhZGVyXS5jb25jYXQoLi4udGFibGUpXG4gICAgICAubWFwKHJvdyA9PiByb3cuam9pbihzZXBhcmF0b3IpKS5qb2luKENSTEYpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHJlc3VsdHMgb3V0cHV0IGluIGEgZm9ybWF0IGJhc2VkIG9uIHRoZSBgbW9kZWAuXG4gICAqIEBwYXJhbSB7TEguUmVzdWx0fSBsaHJcbiAgICogQHBhcmFtIHtMSC5Db25maWcuU2V0dGluZ3NbJ291dHB1dCddfSBvdXRwdXRNb2Rlc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd8c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgZ2VuZXJhdGVSZXBvcnQobGhyLCBvdXRwdXRNb2Rlcykge1xuICAgIGNvbnN0IG91dHB1dEFzQXJyYXkgPSBBcnJheS5pc0FycmF5KG91dHB1dE1vZGVzKTtcbiAgICBpZiAodHlwZW9mIG91dHB1dE1vZGVzID09PSAnc3RyaW5nJykgb3V0cHV0TW9kZXMgPSBbb3V0cHV0TW9kZXNdO1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gb3V0cHV0TW9kZXMubWFwKG91dHB1dE1vZGUgPT4ge1xuICAgICAgLy8gSFRNTCByZXBvcnQuXG4gICAgICBpZiAob3V0cHV0TW9kZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRHZW5lcmF0b3IuZ2VuZXJhdGVSZXBvcnRIdG1sKGxocik7XG4gICAgICB9XG4gICAgICAvLyBDU1YgcmVwb3J0LlxuICAgICAgaWYgKG91dHB1dE1vZGUgPT09ICdjc3YnKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRHZW5lcmF0b3IuZ2VuZXJhdGVSZXBvcnRDU1YobGhyKTtcbiAgICAgIH1cbiAgICAgIC8vIEpTT04gcmVwb3J0LlxuICAgICAgaWYgKG91dHB1dE1vZGUgPT09ICdqc29uJykge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobGhyLCBudWxsLCAyKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG91dHB1dCBtb2RlOiAnICsgb3V0cHV0TW9kZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3V0cHV0QXNBcnJheSA/IG91dHB1dCA6IG91dHB1dFswXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcG9ydEdlbmVyYXRvcjtcbiJdfQ==
