(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReportGenerator = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';



const REPORT_TEMPLATE = "<!--\n@license\nCopyright 2018 Google Inc. All Rights Reserved.\n\nLicensed under the Apache License, Version 2.0 (the \"License\");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an \"AS-IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n-->\n<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, minimum-scale=1\">\n  <link rel=\"icon\" href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAADjklEQVR4AWI08P/HQEvAQrxSQKvlECfLFYXx75xCY2qmh89GbNvOMjb3v9jOOlxnFWxj206ebQ3b7q6q+z1rNagu8/zvPSZACAABpeUAA0miMgU7SA7JjCraFGwZwECOwvL75dWjsKgWBKtx0jvWo+vkBAFbACCkByMP6nMn48+AVgXB2fzSCwsv22/lMGlUhmJ0AE7BH8dyUUDbUEgN6RzJRSeaPxhdRYR0Inel+7Hd5lBiFpkMAxACc0394//9C4voFHDiAAGLpuOXebdfdHfctgwJKaZRLRKy6ItrSis6RBnVBgGtbHyKTEmJHQoEXoBCE5BCrDeA2ogMUIGDAKEBDEhUqwgMqBYDjW4DQzmuffVdqff42/ZQYYqVcMXGZsMPyCsH3lyJSetxvEaxAQXdjR1HjfwCdIS7lo2DZke26Qe+MXO12OWkGT0O6oE7vMGkMnkYw4aN1KQgMKExhXqswfiov4+a7MQ11XPnbr/5qpKlgACAAQj94Lu271bN9DUecQasIZlNzG72llRAAKJiAi+/BSHrSFjRvQhg3DEKEqJh08tsmLTx597+f6enr4cc2Zpk57pihfX24dW7RHcOLLUbJYhJSl0ErQCI9BVXH/XrO97QasuvQQSiECa0BrQCIIJp6X9T/r8QG6L71WYSqCoIIGo2BZDUBnS/D9EA9Nun1iYvbM0MFExIDQRoKFatc1Z6zrm5uWeObJotq0BGV9FuQBWq5a4Fw3PPz848rZHstZSuA5FWAFSMP2nOppOOGpl6qh9PCSg0IFyHKjSQyDNQHTru2t75NOEe0fsf246oAmFkI6vCdnWvbQFQFCKx8vCswV8TrDLiDLgH4Nr7RAtNsrC9d8sfk7b8ls4igdNy8CQKAISlsB0FjZfd3Lfp155tf8fKI4BxZZIj/oTdVEAIAcJFOCmzauHG71I7/rdreUAgAqpDP05fDARCAQQARwEIBQSVxq0FyaLvZZtevpHa8WHw8cft6cpxlq8eAJtIhnSbWDf951yx3y13OqUuu5qyGgkxCgGFh9cDihDGbTa6BqvT1lWmrav3bmt2ZMJ4mU6TGgIC4DBzcv/JqAau1WhzSt3x9Ixk/4Jk/8J4ZrrViFMA4W6A7+WK8xcVjvyrOmVD0FbAXokcT48r+xVqLKvuJYbmpNadnlp3mpufJHOe/GXktM+r09bT8kEdq9BRYAbGSgzP7ll82U71Mc+ZFooXgwAAAABJRU5ErkJggg==\">\n  <title>Lighthouse Report</title>\n  <style>/*%%LIGHTHOUSE_CSS%%*/</style>\n</head>\n<body class=\"lh-root lh-vars\">\n  <noscript>Lighthouse report requires JavaScript. Please enable.</noscript>\n  <div hidden>%%LIGHTHOUSE_TEMPLATES%%</div>\n\n  <main><!-- report populated here --></main>\n\n  <div id=\"lh-log\"></div>\n\n  <script>%%LIGHTHOUSE_JAVASCRIPT%%\n  //# sourceURL=compiled-reportrenderer.js\n  </script>\n  <script>window.__LIGHTHOUSE_JSON__ = %%LIGHTHOUSE_JSON%%;</script>\n  <script>\n    function __initLighthouseReport__() {\n      const dom = new DOM(document);\n      const renderer = new ReportRenderer(dom);\n\n      const container = document.querySelector('main');\n      renderer.renderReport(window.__LIGHTHOUSE_JSON__, container);\n\n      // Hook in JS features and page-level event listeners after the report\n      // is in the document.\n      const features = new ReportUIFeatures(dom);\n      features.initFeatures(window.__LIGHTHOUSE_JSON__);\n    }\n    window.addEventListener('DOMContentLoaded', __initLighthouseReport__);\n\n    document.addEventListener('lh-analytics', e => {\n      if (window.ga) {\n        ga(e.detail.cmd, e.detail.fields);\n      }\n    });\n\n    document.addEventListener('lh-log', e => {\n      const logger = new Logger(document.querySelector('#lh-log'));\n\n      switch (e.detail.cmd) {\n        case 'log':\n          logger.log(e.detail.msg);\n          break;\n        case 'warn':\n          logger.warn(e.detail.msg);\n          break;\n        case 'error':\n          logger.error(e.detail.msg);\n          break;\n        case 'hide':\n          logger.hide();\n          break;\n      }\n    });\n  </script>\n</body>\n</html>\n";
const REPORT_JAVASCRIPT = [
  "/**\n * @license\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/* globals self, URL */\n\nconst ELLIPSIS = '\\u2026';\nconst NBSP = '\\xa0';\nconst PASS_THRESHOLD = 0.9;\nconst SCREENSHOT_PREFIX = 'data:image/jpeg;base64,';\n\nconst RATINGS = {\n  PASS: {label: 'pass', minScore: PASS_THRESHOLD},\n  AVERAGE: {label: 'average', minScore: 0.5},\n  FAIL: {label: 'fail'},\n  ERROR: {label: 'error'},\n};\n\n// 25 most used tld plus one domains (aka public suffixes) from http archive.\n// @see https://github.com/GoogleChrome/lighthouse/pull/5065#discussion_r191926212\n// The canonical list is https://publicsuffix.org/learn/ but we're only using subset to conserve bytes\nconst listOfTlds = [\n  'com', 'co', 'gov', 'edu', 'ac', 'org', 'go', 'gob', 'or', 'net', 'in', 'ne', 'nic', 'gouv',\n  'web', 'spb', 'blog', 'jus', 'kiev', 'mil', 'wi', 'qc', 'ca', 'bel', 'on',\n];\n\nclass Util {\n  static get PASS_THRESHOLD() {\n    return PASS_THRESHOLD;\n  }\n\n  static get MS_DISPLAY_VALUE() {\n    return `%10d${NBSP}ms`;\n  }\n\n  /**\n   * Returns a new LHR that's reshaped for slightly better ergonomics within the report rendereer.\n   * Also, sets up the localized UI strings used within renderer and makes changes to old LHRs to be\n   * compatible with current renderer.\n   * The LHR passed in is not mutated.\n   * TODO(team): we all agree the LHR shape change is technical debt we should fix\n   * @param {LH.Result} result\n   * @return {LH.ReportResult}\n   */\n  static prepareReportResult(result) {\n    // If any mutations happen to the report within the renderers, we want the original object untouched\n    const clone = /** @type {LH.ReportResult} */ (JSON.parse(JSON.stringify(result)));\n\n    // If LHR is older (≤3.0.3), it has no locale setting. Set default.\n    if (!clone.configSettings.locale) {\n      clone.configSettings.locale = 'en';\n    }\n\n    for (const audit of Object.values(clone.audits)) {\n      // Turn 'not-applicable' (LHR <4.0) and 'not_applicable' (older proto versions)\n      // into 'notApplicable' (LHR ≥4.0).\n      // @ts-ignore tsc rightly flags that these values shouldn't occur.\n      // eslint-disable-next-line max-len\n      if (audit.scoreDisplayMode === 'not_applicable' || audit.scoreDisplayMode === 'not-applicable') {\n        audit.scoreDisplayMode = 'notApplicable';\n      }\n\n      if (audit.details) {\n        // Turn `auditDetails.type` of undefined (LHR <4.2) and 'diagnostic' (LHR <5.0)\n        // into 'debugdata' (LHR ≥5.0).\n        // @ts-ignore tsc rightly flags that these values shouldn't occur.\n        if (audit.details.type === undefined || audit.details.type === 'diagnostic') {\n          audit.details.type = 'debugdata';\n        }\n\n        // Add the jpg data URL prefix to filmstrip screenshots without them (LHR <5.0).\n        if (audit.details.type === 'filmstrip') {\n          for (const screenshot of audit.details.items) {\n            if (!screenshot.data.startsWith(SCREENSHOT_PREFIX)) {\n              screenshot.data = SCREENSHOT_PREFIX + screenshot.data;\n            }\n          }\n        }\n      }\n    }\n\n    // Set locale for number/date formatting and grab localized renderer strings from the LHR.\n    Util.setNumberDateLocale(clone.configSettings.locale);\n    if (clone.i18n && clone.i18n.rendererFormattedStrings) {\n      Util.updateAllUIStrings(clone.i18n.rendererFormattedStrings);\n    }\n\n    // For convenience, smoosh all AuditResults into their auditRef (which has just weight & group)\n    if (typeof clone.categories !== 'object') throw new Error('No categories provided.');\n    for (const category of Object.values(clone.categories)) {\n      category.auditRefs.forEach(auditRef => {\n        const result = clone.audits[auditRef.id];\n        auditRef.result = result;\n\n        // attach the stackpacks to the auditRef object\n        if (clone.stackPacks) {\n          clone.stackPacks.forEach(pack => {\n            if (pack.descriptions[auditRef.id]) {\n              auditRef.stackPacks = auditRef.stackPacks || [];\n              auditRef.stackPacks.push({\n                title: pack.title,\n                iconDataURL: pack.iconDataURL,\n                description: pack.descriptions[auditRef.id],\n              });\n            }\n          });\n        }\n      });\n    }\n\n    return clone;\n  }\n\n\n  /**\n   * @param {LH.I18NRendererStrings} rendererFormattedStrings\n   */\n  static updateAllUIStrings(rendererFormattedStrings) {\n    // TODO(i18n): don't mutate these here but on the LHR and pass that around everywhere\n    for (const [key, value] of Object.entries(rendererFormattedStrings)) {\n      Util.UIStrings[key] = value;\n    }\n  }\n\n  /**\n   * Used to determine if the \"passed\" for the purposes of showing up in the \"failed\" or \"passed\"\n   * sections of the report.\n   *\n   * @param {{score: (number|null), scoreDisplayMode: string}} audit\n   * @return {boolean}\n   */\n  static showAsPassed(audit) {\n    switch (audit.scoreDisplayMode) {\n      case 'manual':\n      case 'notApplicable':\n        return true;\n      case 'error':\n      case 'informative':\n        return false;\n      case 'numeric':\n      case 'binary':\n      default:\n        return Number(audit.score) >= RATINGS.PASS.minScore;\n    }\n  }\n\n  /**\n   * Convert a score to a rating label.\n   * @param {number|null} score\n   * @param {string=} scoreDisplayMode\n   * @return {string}\n   */\n  static calculateRating(score, scoreDisplayMode) {\n    // Handle edge cases first, manual and not applicable receive 'pass', errored audits receive 'error'\n    if (scoreDisplayMode === 'manual' || scoreDisplayMode === 'notApplicable') {\n      return RATINGS.PASS.label;\n    } else if (scoreDisplayMode === 'error') {\n      return RATINGS.ERROR.label;\n    } else if (score === null) {\n      return RATINGS.FAIL.label;\n    }\n\n    // At this point, we're rating a standard binary/numeric audit\n    let rating = RATINGS.FAIL.label;\n    if (score >= RATINGS.PASS.minScore) {\n      rating = RATINGS.PASS.label;\n    } else if (score >= RATINGS.AVERAGE.minScore) {\n      rating = RATINGS.AVERAGE.label;\n    }\n    return rating;\n  }\n\n  /**\n   * Format number.\n   * @param {number} number\n   * @param {number=} granularity Number of decimal places to include. Defaults to 0.1.\n   * @return {string}\n   */\n  static formatNumber(number, granularity = 0.1) {\n    const coarseValue = Math.round(number / granularity) * granularity;\n    return coarseValue.toLocaleString(Util.numberDateLocale);\n  }\n\n  /**\n   * @param {number} size\n   * @param {number=} granularity Controls how coarse the displayed value is, defaults to .01\n   * @return {string}\n   */\n  static formatBytesToKB(size, granularity = 0.1) {\n    const kbs = (Math.round(size / 1024 / granularity) * granularity)\n      .toLocaleString(Util.numberDateLocale);\n    return `${kbs}${NBSP}KB`;\n  }\n\n  /**\n   * @param {number} ms\n   * @param {number=} granularity Controls how coarse the displayed value is, defaults to 10\n   * @return {string}\n   */\n  static formatMilliseconds(ms, granularity = 10) {\n    const coarseTime = Math.round(ms / granularity) * granularity;\n    return `${coarseTime.toLocaleString(Util.numberDateLocale)}${NBSP}ms`;\n  }\n\n  /**\n   * @param {number} ms\n   * @param {number=} granularity Controls how coarse the displayed value is, defaults to 0.1\n   * @return {string}\n   */\n  static formatSeconds(ms, granularity = 0.1) {\n    const coarseTime = Math.round(ms / 1000 / granularity) * granularity;\n    return `${coarseTime.toLocaleString(Util.numberDateLocale)}${NBSP}s`;\n  }\n\n  /**\n   * Format time.\n   * @param {string} date\n   * @return {string}\n   */\n  static formatDateTime(date) {\n    /** @type {Intl.DateTimeFormatOptions} */\n    const options = {\n      month: 'short', day: 'numeric', year: 'numeric',\n      hour: 'numeric', minute: 'numeric', timeZoneName: 'short',\n    };\n    let formatter = new Intl.DateTimeFormat(Util.numberDateLocale, options);\n\n    // Force UTC if runtime timezone could not be detected.\n    // See https://github.com/GoogleChrome/lighthouse/issues/1056\n    const tz = formatter.resolvedOptions().timeZone;\n    if (!tz || tz.toLowerCase() === 'etc/unknown') {\n      options.timeZone = 'UTC';\n      formatter = new Intl.DateTimeFormat(Util.numberDateLocale, options);\n    }\n    return formatter.format(new Date(date));\n  }\n  /**\n   * Converts a time in milliseconds into a duration string, i.e. `1d 2h 13m 52s`\n   * @param {number} timeInMilliseconds\n   * @return {string}\n   */\n  static formatDuration(timeInMilliseconds) {\n    let timeInSeconds = timeInMilliseconds / 1000;\n    if (Math.round(timeInSeconds) === 0) {\n      return 'None';\n    }\n\n    /** @type {Array<string>} */\n    const parts = [];\n    const unitLabels = /** @type {Object<string, number>} */ ({\n      d: 60 * 60 * 24,\n      h: 60 * 60,\n      m: 60,\n      s: 1,\n    });\n\n    Object.keys(unitLabels).forEach(label => {\n      const unit = unitLabels[label];\n      const numberOfUnits = Math.floor(timeInSeconds / unit);\n      if (numberOfUnits > 0) {\n        timeInSeconds -= numberOfUnits * unit;\n        parts.push(`${numberOfUnits}\\xa0${label}`);\n      }\n    });\n\n    return parts.join(' ');\n  }\n\n  /**\n   * @param {URL} parsedUrl\n   * @param {{numPathParts?: number, preserveQuery?: boolean, preserveHost?: boolean}=} options\n   * @return {string}\n   */\n  static getURLDisplayName(parsedUrl, options) {\n    // Closure optional properties aren't optional in tsc, so fallback needs undefined  values.\n    options = options || {numPathParts: undefined, preserveQuery: undefined,\n      preserveHost: undefined};\n    const numPathParts = options.numPathParts !== undefined ? options.numPathParts : 2;\n    const preserveQuery = options.preserveQuery !== undefined ? options.preserveQuery : true;\n    const preserveHost = options.preserveHost || false;\n\n    let name;\n\n    if (parsedUrl.protocol === 'about:' || parsedUrl.protocol === 'data:') {\n      // Handle 'about:*' and 'data:*' URLs specially since they have no path.\n      name = parsedUrl.href;\n    } else {\n      name = parsedUrl.pathname;\n      const parts = name.split('/').filter(part => part.length);\n      if (numPathParts && parts.length > numPathParts) {\n        name = ELLIPSIS + parts.slice(-1 * numPathParts).join('/');\n      }\n\n      if (preserveHost) {\n        name = `${parsedUrl.host}/${name.replace(/^\\//, '')}`;\n      }\n      if (preserveQuery) {\n        name = `${name}${parsedUrl.search}`;\n      }\n    }\n\n    const MAX_LENGTH = 64;\n    // Always elide hexadecimal hash\n    name = name.replace(/([a-f0-9]{7})[a-f0-9]{13}[a-f0-9]*/g, `$1${ELLIPSIS}`);\n    // Also elide other hash-like mixed-case strings\n    name = name.replace(/([a-zA-Z0-9-_]{9})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-_]{10,}/g,\n      `$1${ELLIPSIS}`);\n    // Also elide long number sequences\n    name = name.replace(/(\\d{3})\\d{6,}/g, `$1${ELLIPSIS}`);\n    // Merge any adjacent ellipses\n    name = name.replace(/\\u2026+/g, ELLIPSIS);\n\n    // Elide query params first\n    if (name.length > MAX_LENGTH && name.includes('?')) {\n      // Try to leave the first query parameter intact\n      name = name.replace(/\\?([^=]*)(=)?.*/, `?$1$2${ELLIPSIS}`);\n\n      // Remove it all if it's still too long\n      if (name.length > MAX_LENGTH) {\n        name = name.replace(/\\?.*/, `?${ELLIPSIS}`);\n      }\n    }\n\n    // Elide too long names next\n    if (name.length > MAX_LENGTH) {\n      const dotIndex = name.lastIndexOf('.');\n      if (dotIndex >= 0) {\n        name = name.slice(0, MAX_LENGTH - 1 - (name.length - dotIndex)) +\n          // Show file extension\n          `${ELLIPSIS}${name.slice(dotIndex)}`;\n      } else {\n        name = name.slice(0, MAX_LENGTH - 1) + ELLIPSIS;\n      }\n    }\n\n    return name;\n  }\n\n  /**\n   * Split a URL into a file, hostname and origin for easy display.\n   * @param {string} url\n   * @return {{file: string, hostname: string, origin: string}}\n   */\n  static parseURL(url) {\n    const parsedUrl = new URL(url);\n    return {\n      file: Util.getURLDisplayName(parsedUrl),\n      hostname: parsedUrl.hostname,\n      origin: parsedUrl.origin,\n    };\n  }\n\n  /**\n   * @param {string|URL} value\n   * @return {URL}\n   */\n  static createOrReturnURL(value) {\n    if (value instanceof URL) {\n      return value;\n    }\n\n    return new URL(value);\n  }\n\n  /**\n   * Gets the tld of a domain\n   *\n   * @param {string} hostname\n   * @return {string} tld\n   */\n  static getTld(hostname) {\n    const tlds = hostname.split('.').slice(-2);\n\n    if (!listOfTlds.includes(tlds[0])) {\n      return `.${tlds[tlds.length - 1]}`;\n    }\n\n    return `.${tlds.join('.')}`;\n  }\n\n  /**\n   * Returns a primary domain for provided hostname (e.g. www.example.com -> example.com).\n   * @param {string|URL} url hostname or URL object\n   * @returns {string}\n   */\n  static getRootDomain(url) {\n    const hostname = Util.createOrReturnURL(url).hostname;\n    const tld = Util.getTld(hostname);\n\n    // tld is .com or .co.uk which means we means that length is 1 to big\n    // .com => 2 & .co.uk => 3\n    const splitTld = tld.split('.');\n\n    // get TLD + root domain\n    return hostname.split('.').slice(-splitTld.length).join('.');\n  }\n\n  /**\n   * @param {LH.Config.Settings} settings\n   * @return {Array<{name: string, description: string}>}\n   */\n  static getEnvironmentDisplayValues(settings) {\n    const emulationDesc = Util.getEmulationDescriptions(settings);\n\n    return [\n      {\n        name: 'Device',\n        description: emulationDesc.deviceEmulation,\n      },\n      {\n        name: 'Network throttling',\n        description: emulationDesc.networkThrottling,\n      },\n      {\n        name: 'CPU throttling',\n        description: emulationDesc.cpuThrottling,\n      },\n    ];\n  }\n\n  /**\n   * @param {LH.Config.Settings} settings\n   * @return {{deviceEmulation: string, networkThrottling: string, cpuThrottling: string, summary: string}}\n   */\n  static getEmulationDescriptions(settings) {\n    let cpuThrottling;\n    let networkThrottling;\n    let summary;\n\n    const throttling = settings.throttling;\n\n    switch (settings.throttlingMethod) {\n      case 'provided':\n        cpuThrottling = 'Provided by environment';\n        networkThrottling = 'Provided by environment';\n        summary = 'No throttling applied';\n        break;\n      case 'devtools': {\n        const {cpuSlowdownMultiplier, requestLatencyMs} = throttling;\n        cpuThrottling = `${Util.formatNumber(cpuSlowdownMultiplier)}x slowdown (DevTools)`;\n        networkThrottling = `${Util.formatNumber(requestLatencyMs)}${NBSP}ms HTTP RTT, ` +\n          `${Util.formatNumber(throttling.downloadThroughputKbps)}${NBSP}Kbps down, ` +\n          `${Util.formatNumber(throttling.uploadThroughputKbps)}${NBSP}Kbps up (DevTools)`;\n        summary = 'Throttled Slow 4G network';\n        break;\n      }\n      case 'simulate': {\n        const {cpuSlowdownMultiplier, rttMs, throughputKbps} = throttling;\n        cpuThrottling = `${Util.formatNumber(cpuSlowdownMultiplier)}x slowdown (Simulated)`;\n        networkThrottling = `${Util.formatNumber(rttMs)}${NBSP}ms TCP RTT, ` +\n          `${Util.formatNumber(throughputKbps)}${NBSP}Kbps throughput (Simulated)`;\n        summary = 'Simulated Slow 4G network';\n        break;\n      }\n      default:\n        cpuThrottling = 'Unknown';\n        networkThrottling = 'Unknown';\n        summary = 'Unknown';\n    }\n\n    let deviceEmulation = 'No emulation';\n    if (settings.emulatedFormFactor === 'mobile') deviceEmulation = 'Emulated Nexus 5X';\n    if (settings.emulatedFormFactor === 'desktop') deviceEmulation = 'Emulated Desktop';\n\n    return {\n      deviceEmulation,\n      cpuThrottling,\n      networkThrottling,\n      summary: `${deviceEmulation}, ${summary}`,\n    };\n  }\n\n  /**\n   * Set the locale to be used for Util's number and date formatting functions.\n   * @param {LH.Locale} locale\n   */\n  static setNumberDateLocale(locale) {\n    Util.numberDateLocale = locale;\n\n    // When testing, use a locale with more exciting numeric formatting\n    if (Util.numberDateLocale === 'en-XA') Util.numberDateLocale = 'de';\n  }\n\n  /**\n   * Returns only lines that are near a message, or the first few lines if there are\n   * no line messages.\n   * @param {LH.Audit.Details.SnippetValue['lines']} lines\n   * @param {LH.Audit.Details.SnippetValue['lineMessages']} lineMessages\n   * @param {number} surroundingLineCount Number of lines to include before and after\n   * the message. If this is e.g. 2 this function might return 5 lines.\n   */\n  static filterRelevantLines(lines, lineMessages, surroundingLineCount) {\n    if (lineMessages.length === 0) {\n      // no lines with messages, just return the first bunch of lines\n      return lines.slice(0, surroundingLineCount * 2 + 1);\n    }\n\n    const minGapSize = 3;\n    const lineNumbersToKeep = new Set();\n    // Sort messages so we can check lineNumbersToKeep to see how big the gap to\n    // the previous line is.\n    lineMessages = lineMessages.sort((a, b) => (a.lineNumber || 0) - (b.lineNumber || 0));\n    lineMessages.forEach(({lineNumber}) => {\n      let firstSurroundingLineNumber = lineNumber - surroundingLineCount;\n      let lastSurroundingLineNumber = lineNumber + surroundingLineCount;\n\n      while (firstSurroundingLineNumber < 1) {\n        // make sure we still show (surroundingLineCount * 2 + 1) lines in total\n        firstSurroundingLineNumber++;\n        lastSurroundingLineNumber++;\n      }\n      // If only a few lines would be omitted normally then we prefer to include\n      // extra lines to avoid the tiny gap\n      if (lineNumbersToKeep.has(firstSurroundingLineNumber - minGapSize - 1)) {\n        firstSurroundingLineNumber -= minGapSize;\n      }\n      for (let i = firstSurroundingLineNumber; i <= lastSurroundingLineNumber; i++) {\n        const surroundingLineNumber = i;\n        lineNumbersToKeep.add(surroundingLineNumber);\n      }\n    });\n\n    return lines.filter(line => lineNumbersToKeep.has(line.lineNumber));\n  }\n\n  /**\n   * @param {string} categoryId\n   */\n  static isPluginCategory(categoryId) {\n    return categoryId.startsWith('lighthouse-plugin-');\n  }\n}\n\n/**\n * This value is updated on each run to the locale of the report\n * @type {LH.Locale}\n */\nUtil.numberDateLocale = 'en';\n\n/**\n * Report-renderer-specific strings.\n * @type {LH.I18NRendererStrings}\n */\nUtil.UIStrings = {\n  /** Disclaimer shown to users below the metric values (First Contentful Paint, Time to Interactive, etc) to warn them that the numbers they see will likely change slightly the next time they run Lighthouse. */\n  varianceDisclaimer: 'Values are estimated and may vary.',\n  /** Column heading label for the listing of opportunity audits. Each audit title represents an opportunity. There are only 2 columns, so no strict character limit.  */\n  opportunityResourceColumnLabel: 'Opportunity',\n  /** Column heading label for the estimated page load savings of opportunity audits. Estimated Savings is the total amount of time (in seconds) that Lighthouse computed could be reduced from the total page load time, if the suggested action is taken. There are only 2 columns, so no strict character limit. */\n  opportunitySavingsColumnLabel: 'Estimated Savings',\n\n  /** An error string displayed next to a particular audit when it has errored, but not provided any specific error message. */\n  errorMissingAuditInfo: 'Report error: no audit information',\n  /** A label, shown next to an audit title or metric title, indicating that there was an error computing it. The user can hover on the label to reveal a tooltip with the extended error message. Translation should be short (< 20 characters). */\n  errorLabel: 'Error!',\n  /** This label is shown above a bulleted list of warnings. It is shown directly below an audit that produced warnings. Warnings describe situations the user should be aware of, as Lighthouse was unable to complete all the work required on this audit. For example, The 'Unable to decode image (biglogo.jpg)' warning may show up below an image encoding audit. */\n  warningHeader: 'Warnings: ',\n  /** The tooltip text on an expandable chevron icon. Clicking the icon expands a section to reveal a list of audit results that was hidden by default. */\n  auditGroupExpandTooltip: 'Show audits',\n  /** Section heading shown above a list of passed audits that contain warnings. Audits under this section do not negatively impact the score, but Lighthouse has generated some potentially actionable suggestions that should be reviewed. This section is expanded by default and displays after the failing audits. */\n  warningAuditsGroupTitle: 'Passed audits but with warnings',\n  /** Section heading shown above a list of audits that are passing. 'Passed' here refers to a passing grade. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */\n  passedAuditsGroupTitle: 'Passed audits',\n  /** Section heading shown above a list of audits that do not apply to the page. For example, if an audit is 'Are images optimized?', but the page has no images on it, the audit will be marked as not applicable. This is neither passing or failing. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */\n  notApplicableAuditsGroupTitle: 'Not applicable',\n  /** Section heading shown above a list of audits that were not computed by Lighthouse. They serve as a list of suggestions for the user to go and manually check. For example, Lighthouse can't automate testing cross-browser compatibility, so that is listed within this section, so the user is reminded to test it themselves. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */\n  manualAuditsGroupTitle: 'Additional items to manually check',\n\n  /** Label shown preceding any important warnings that may have invalidated the entire report. For example, if the user has Chrome extensions installed, they may add enough performance overhead that Lighthouse's performance metrics are unreliable. If shown, this will be displayed at the top of the report UI. */\n  toplevelWarningsMessage: 'There were issues affecting this run of Lighthouse:',\n\n  /** String of text shown in a graphical representation of the flow of network requests for the web page. This label represents the initial network request that fetches an HTML page. This navigation may be redirected (eg. Initial navigation to http://example.com redirects to https://www.example.com). */\n  crcInitialNavigation: 'Initial Navigation',\n  /** Label of value shown in the summary of critical request chains. Refers to the total amount of time (milliseconds) of the longest critical path chain/sequence of network requests. Example value: 2310 ms */\n  crcLongestDurationLabel: 'Maximum critical path latency:',\n\n  /** Label for button that shows all lines of the snippet when clicked */\n  snippetExpandButtonLabel: 'Expand snippet',\n  /** Label for button that only shows a few lines of the snippet when clicked */\n  snippetCollapseButtonLabel: 'Collapse snippet',\n\n  /** Explanation shown to users below performance results to inform them that the test was done with a 4G network connection and to warn them that the numbers they see will likely change slightly the next time they run Lighthouse. 'Lighthouse' becomes link text to additional documentation. */\n  lsPerformanceCategoryDescription: '[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.',\n  /** Title of the lab data section of the Performance category. Within this section are various speed metrics which quantify the pageload performance into values presented in seconds and milliseconds. \"Lab\" is an abbreviated form of \"laboratory\", and refers to the fact that the data is from a controlled test of a website, not measurements from real users visiting that site.  */\n  labDataTitle: 'Lab Data',\n\n  /** This label is for a checkbox above a table of items loaded by a web page. The checkbox is used to show or hide third-party (or \"3rd-party\") resources in the table, where \"third-party resources\" refers to items loaded by a web page from URLs that aren't controlled by the owner of the web page. */\n  thirdPartyResourcesLabel: 'Show 3rd-party resources',\n};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = Util;\n} else {\n  self.Util = Util;\n}\n",
  "/**\n * @license\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/* globals URL self */\n\n/** @typedef {HTMLElementTagNameMap & {[id: string]: HTMLElement}} HTMLElementByTagName */\n\nclass DOM {\n  /**\n   * @param {Document} document\n   */\n  constructor(document) {\n    /** @type {Document} */\n    this._document = document;\n    /** @type {string} */\n    this._lighthouseChannel = 'unknown';\n  }\n\n  /**\n   * @template {string} T\n   * @param {T} name\n   * @param {string=} className\n   * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs.\n   *     Note: if an attribute key has an undefined value, this method does not\n   *     set the attribute on the node.\n   * @return {HTMLElementByTagName[T]}\n   */\n  createElement(name, className, attrs = {}) {\n    const element = this._document.createElement(name);\n    if (className) {\n      element.className = className;\n    }\n    Object.keys(attrs).forEach(key => {\n      const value = attrs[key];\n      if (typeof value !== 'undefined') {\n        element.setAttribute(key, value);\n      }\n    });\n    return element;\n  }\n\n  /**\n   * @return {DocumentFragment}\n   */\n  createFragment() {\n    return this._document.createDocumentFragment();\n  }\n\n  /**\n   * @template {string} T\n   * @param {Element} parentElem\n   * @param {T} elementName\n   * @param {string=} className\n   * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs.\n   *     Note: if an attribute key has an undefined value, this method does not\n   *     set the attribute on the node.\n   * @return {HTMLElementByTagName[T]}\n   */\n  createChildOf(parentElem, elementName, className, attrs) {\n    const element = this.createElement(elementName, className, attrs);\n    parentElem.appendChild(element);\n    return element;\n  }\n\n  /**\n   * @param {string} selector\n   * @param {ParentNode} context\n   * @return {DocumentFragment} A clone of the template content.\n   * @throws {Error}\n   */\n  cloneTemplate(selector, context) {\n    const template = /** @type {?HTMLTemplateElement} */ (context.querySelector(selector));\n    if (!template) {\n      throw new Error(`Template not found: template${selector}`);\n    }\n\n    const clone = this._document.importNode(template.content, true);\n\n    // Prevent duplicate styles in the DOM. After a template has been stamped\n    // for the first time, remove the clone's styles so they're not re-added.\n    if (template.hasAttribute('data-stamped')) {\n      this.findAll('style', clone).forEach(style => style.remove());\n    }\n    template.setAttribute('data-stamped', 'true');\n\n    return clone;\n  }\n\n  /**\n   * Resets the \"stamped\" state of the templates.\n   */\n  resetTemplates() {\n    this.findAll('template[data-stamped]', this._document).forEach(t => {\n      t.removeAttribute('data-stamped');\n    });\n  }\n\n  /**\n   * @param {string} text\n   * @return {Element}\n   */\n  convertMarkdownLinkSnippets(text) {\n    const element = this.createElement('span');\n\n    // Split on markdown links (e.g. [some link](https://...)).\n    const parts = text.split(/\\[([^\\]]*?)\\]\\((https?:\\/\\/.*?)\\)/g);\n\n    while (parts.length) {\n      // Pop off the same number of elements as there are capture groups.\n      const [preambleText, linkText, linkHref] = parts.splice(0, 3);\n      element.appendChild(this._document.createTextNode(preambleText));\n\n      // Append link if there are any.\n      if (linkText && linkHref) {\n        const url = new URL(linkHref);\n\n        const DEVELOPERS_GOOGLE_ORIGIN = 'https://developers.google.com';\n        if (url.origin === DEVELOPERS_GOOGLE_ORIGIN) {\n          url.searchParams.set('utm_source', 'lighthouse');\n          url.searchParams.set('utm_medium', this._lighthouseChannel);\n        }\n\n        const a = this.createElement('a');\n        a.rel = 'noopener';\n        a.target = '_blank';\n        a.textContent = linkText;\n        a.href = url.href;\n        element.appendChild(a);\n      }\n    }\n\n    return element;\n  }\n\n  /**\n   * @param {string} text\n   * @return {Element}\n   */\n  convertMarkdownCodeSnippets(text) {\n    const element = this.createElement('span');\n\n    const parts = text.split(/`(.*?)`/g); // Split on markdown code slashes\n    while (parts.length) {\n      // Pop off the same number of elements as there are capture groups.\n      const [preambleText, codeText] = parts.splice(0, 2);\n      element.appendChild(this._document.createTextNode(preambleText));\n      if (codeText) {\n        const pre = this.createElement('code');\n        pre.textContent = codeText;\n        element.appendChild(pre);\n      }\n    }\n\n    return element;\n  }\n\n  /**\n   * The channel to use for UTM data when rendering links to the documentation.\n   * @param {string} lighthouseChannel\n   */\n  setLighthouseChannel(lighthouseChannel) {\n    this._lighthouseChannel = lighthouseChannel;\n  }\n\n  /**\n   * @return {Document}\n   */\n  document() {\n    return this._document;\n  }\n\n  /**\n   * TODO(paulirish): import and conditionally apply the DevTools frontend subclasses instead of this\n   * @return {boolean}\n   */\n  isDevTools() {\n    return !!this._document.querySelector('.lh-devtools');\n  }\n\n  /**\n   * Guaranteed context.querySelector. Always returns an element or throws if\n   * nothing matches query.\n   * @param {string} query\n   * @param {ParentNode} context\n   * @return {HTMLElement}\n   */\n  find(query, context) {\n    /** @type {?HTMLElement} */\n    const result = context.querySelector(query);\n    if (result === null) {\n      throw new Error(`query ${query} not found`);\n    }\n    return result;\n  }\n\n  /**\n   * Helper for context.querySelectorAll. Returns an Array instead of a NodeList.\n   * @param {string} query\n   * @param {ParentNode} context\n   * @return {Array<HTMLElement>}\n   */\n  findAll(query, context) {\n    return Array.from(context.querySelectorAll(query));\n  }\n}\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = DOM;\n} else {\n  self.DOM = DOM;\n}\n",
  // COMPAT: Remove when Microsoft Edge supports <details>/<summary>
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/detailssummary/?q=details
  "/*\nDetails Element Polyfill 2.2.0\nCopyright © 2018 Javan Makhmali\n */\n(function() {\n  \"use strict\";\n  var element = document.createElement(\"details\");\n  element.innerHTML = \"<summary>a</summary>b\";\n  element.setAttribute(\"style\", \"position: absolute; left: -9999px\");\n  var support = {\n    open: \"open\" in element && elementExpands(),\n    toggle: \"ontoggle\" in element\n  };\n  function elementExpands() {\n    (document.body || document.documentElement).appendChild(element);\n    var closedHeight = element.offsetHeight;\n    element.open = true;\n    var openedHeight = element.offsetHeight;\n    element.parentNode.removeChild(element);\n    return closedHeight != openedHeight;\n  }\n  var styles = '\\ndetails, summary {\\n  display: block;\\n}\\ndetails:not([open]) > *:not(summary) {\\n  display: none;\\n}\\ndetails > summary::before {\\n  content: \"►\";\\n  padding-right: 0.3rem;\\n  font-size: 0.6rem;\\n  cursor: default;\\n}\\ndetails[open] > summary::before {\\n  content: \"▼\";\\n}\\n';\n  var _ref = [], forEach = _ref.forEach, slice = _ref.slice;\n  if (!support.open) {\n    polyfillStyles();\n    polyfillProperties();\n    polyfillToggle();\n    polyfillAccessibility();\n  }\n  if (support.open && !support.toggle) {\n    polyfillToggleEvent();\n  }\n  function polyfillStyles() {\n    document.head.insertAdjacentHTML(\"afterbegin\", \"<style>\" + styles + \"</style>\");\n  }\n  function polyfillProperties() {\n    var prototype = document.createElement(\"details\").constructor.prototype;\n    var setAttribute = prototype.setAttribute, removeAttribute = prototype.removeAttribute;\n    var open = Object.getOwnPropertyDescriptor(prototype, \"open\");\n    Object.defineProperties(prototype, {\n      open: {\n        get: function get() {\n          if (this.tagName == \"DETAILS\") {\n            return this.hasAttribute(\"open\");\n          } else {\n            if (open && open.get) {\n              return open.get.call(this);\n            }\n          }\n        },\n        set: function set(value) {\n          if (this.tagName == \"DETAILS\") {\n            return value ? this.setAttribute(\"open\", \"\") : this.removeAttribute(\"open\");\n          } else {\n            if (open && open.set) {\n              return open.set.call(this, value);\n            }\n          }\n        }\n      },\n      setAttribute: {\n        value: function value(name, _value) {\n          var _this = this;\n          var call = function call() {\n            return setAttribute.call(_this, name, _value);\n          };\n          if (name == \"open\" && this.tagName == \"DETAILS\") {\n            var wasOpen = this.hasAttribute(\"open\");\n            var result = call();\n            if (!wasOpen) {\n              var summary = this.querySelector(\"summary\");\n              if (summary) summary.setAttribute(\"aria-expanded\", true);\n              triggerToggle(this);\n            }\n            return result;\n          }\n          return call();\n        }\n      },\n      removeAttribute: {\n        value: function value(name) {\n          var _this2 = this;\n          var call = function call() {\n            return removeAttribute.call(_this2, name);\n          };\n          if (name == \"open\" && this.tagName == \"DETAILS\") {\n            var wasOpen = this.hasAttribute(\"open\");\n            var result = call();\n            if (wasOpen) {\n              var summary = this.querySelector(\"summary\");\n              if (summary) summary.setAttribute(\"aria-expanded\", false);\n              triggerToggle(this);\n            }\n            return result;\n          }\n          return call();\n        }\n      }\n    });\n  }\n  function polyfillToggle() {\n    onTogglingTrigger(function(element) {\n      element.hasAttribute(\"open\") ? element.removeAttribute(\"open\") : element.setAttribute(\"open\", \"\");\n    });\n  }\n  function polyfillToggleEvent() {\n    if (window.MutationObserver) {\n      new MutationObserver(function(mutations) {\n        forEach.call(mutations, function(mutation) {\n          var target = mutation.target, attributeName = mutation.attributeName;\n          if (target.tagName == \"DETAILS\" && attributeName == \"open\") {\n            triggerToggle(toggle);\n          }\n        });\n      }).observe(document.documentElement, {\n        attributes: true,\n        subtree: true\n      });\n    } else {\n      onTogglingTrigger(function(element) {\n        var wasOpen = element.getAttribute(\"open\");\n        setTimeout(function() {\n          var isOpen = element.getAttribute(\"open\");\n          if (wasOpen != isOpen) {\n            triggerToggle(element);\n          }\n        }, 1);\n      });\n    }\n  }\n  function polyfillAccessibility() {\n    setAccessibilityAttributes(document);\n    if (window.MutationObserver) {\n      new MutationObserver(function(mutations) {\n        forEach.call(mutations, function(mutation) {\n          forEach.call(mutation.addedNodes, setAccessibilityAttributes);\n        });\n      }).observe(document.documentElement, {\n        subtree: true,\n        childList: true\n      });\n    } else {\n      document.addEventListener(\"DOMNodeInserted\", function(event) {\n        setAccessibilityAttributes(event.target);\n      });\n    }\n  }\n  function setAccessibilityAttributes(root) {\n    findElementsWithTagName(root, \"SUMMARY\").forEach(function(summary) {\n      var details = findClosestElementWithTagName(summary, \"DETAILS\");\n      summary.setAttribute(\"aria-expanded\", details.hasAttribute(\"open\"));\n      if (!summary.hasAttribute(\"tabindex\")) summary.setAttribute(\"tabindex\", \"0\");\n      if (!summary.hasAttribute(\"role\")) summary.setAttribute(\"role\", \"button\");\n    });\n  }\n  function eventIsSignificant(event) {\n    return !(event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable);\n  }\n  function onTogglingTrigger(callback) {\n    addEventListener(\"click\", function(event) {\n      if (eventIsSignificant(event)) {\n        if (event.which <= 1) {\n          var element = findClosestElementWithTagName(event.target, \"SUMMARY\");\n          if (element && element.parentNode && element.parentNode.tagName == \"DETAILS\") {\n            callback(element.parentNode);\n          }\n        }\n      }\n    }, false);\n    addEventListener(\"keydown\", function(event) {\n      if (eventIsSignificant(event)) {\n        if (event.keyCode == 13 || event.keyCode == 32) {\n          var element = findClosestElementWithTagName(event.target, \"SUMMARY\");\n          if (element && element.parentNode && element.parentNode.tagName == \"DETAILS\") {\n            callback(element.parentNode);\n            event.preventDefault();\n          }\n        }\n      }\n    }, false);\n  }\n  function triggerToggle(element) {\n    var event = document.createEvent(\"Event\");\n    event.initEvent(\"toggle\", true, false);\n    element.dispatchEvent(event);\n  }\n  function findElementsWithTagName(root, tagName) {\n    return (root.tagName == tagName ? [ root ] : []).concat(typeof root.getElementsByTagName == \"function\" ? slice.call(root.getElementsByTagName(tagName)) : []);\n  }\n  function findClosestElementWithTagName(element, tagName) {\n    if (typeof element.closest == \"function\") {\n      return element.closest(tagName);\n    } else {\n      while (element) {\n        if (element.tagName == tagName) {\n          return element;\n        } else {\n          element = element.parentNode;\n        }\n      }\n    }\n  }\n})();\n",
  "/**\n * @license\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/* globals self CriticalRequestChainRenderer SnippetRenderer Util URL */\n\n/** @typedef {import('./dom.js')} DOM */\n\nconst URL_PREFIXES = ['http://', 'https://', 'data:'];\n\nclass DetailsRenderer {\n  /**\n   * @param {DOM} dom\n   */\n  constructor(dom) {\n    /** @type {DOM} */\n    this._dom = dom;\n    /** @type {ParentNode} */\n    this._templateContext; // eslint-disable-line no-unused-expressions\n  }\n\n  /**\n   * @param {ParentNode} context\n   */\n  setTemplateContext(context) {\n    this._templateContext = context;\n  }\n\n  /**\n   * @param {LH.Audit.Details} details\n   * @return {Element|null}\n   */\n  render(details) {\n    switch (details.type) {\n      case 'filmstrip':\n        return this._renderFilmstrip(details);\n      case 'list':\n        return this._renderList(details);\n      case 'table':\n        return this._renderTable(details);\n      case 'criticalrequestchain':\n        return CriticalRequestChainRenderer.render(this._dom, this._templateContext, details, this);\n      case 'opportunity':\n        return this._renderTable(details);\n\n      // Internal-only details, not for rendering.\n      case 'screenshot':\n      case 'debugdata':\n        return null;\n\n      default: {\n        // @ts-ignore tsc thinks this unreachable, but ts-ignore for error message just in case.\n        const detailsType = details.type;\n        throw new Error(`Unknown type: ${detailsType}`);\n      }\n    }\n  }\n\n  /**\n   * @param {{value: number, granularity?: number}} details\n   * @return {Element}\n   */\n  _renderBytes(details) {\n    // TODO: handle displayUnit once we have something other than 'kb'\n    const value = Util.formatBytesToKB(details.value, details.granularity);\n    return this._renderText(value);\n  }\n\n  /**\n   * @param {{value: number, granularity?: number, displayUnit?: string}} details\n   * @return {Element}\n   */\n  _renderMilliseconds(details) {\n    let value = Util.formatMilliseconds(details.value, details.granularity);\n    if (details.displayUnit === 'duration') {\n      value = Util.formatDuration(details.value);\n    }\n\n    return this._renderText(value);\n  }\n\n  /**\n   * @param {string} text\n   * @return {HTMLElement}\n   */\n  renderTextURL(text) {\n    const url = text;\n\n    let displayedPath;\n    let displayedHost;\n    let title;\n    try {\n      const parsed = Util.parseURL(url);\n      displayedPath = parsed.file === '/' ? parsed.origin : parsed.file;\n      displayedHost = parsed.file === '/' ? '' : `(${parsed.hostname})`;\n      title = url;\n    } catch (e) {\n      displayedPath = url;\n    }\n\n    const element = this._dom.createElement('div', 'lh-text__url');\n    element.appendChild(this._renderLink({text: displayedPath, url}));\n\n    if (displayedHost) {\n      const hostElem = this._renderText(displayedHost);\n      hostElem.classList.add('lh-text__url-host');\n      element.appendChild(hostElem);\n    }\n\n    if (title) {\n      element.title = url;\n      // set the url on the element's dataset which we use to check 3rd party origins\n      element.dataset.url = url;\n    }\n    return element;\n  }\n\n  /**\n   * @param {{text: string, url: string}} details\n   * @return {Element}\n   */\n  _renderLink(details) {\n    const allowedProtocols = ['https:', 'http:'];\n    let url;\n    try {\n      url = new URL(details.url);\n    } catch (_) {}\n\n    if (!url || !allowedProtocols.includes(url.protocol)) {\n      // Fall back to just the link text if invalid or protocol not allowed.\n      return this._renderText(details.text);\n    }\n\n    const a = this._dom.createElement('a');\n    a.rel = 'noopener';\n    a.target = '_blank';\n    a.textContent = details.text;\n    a.href = url.href;\n\n    return a;\n  }\n\n  /**\n   * @param {string} text\n   * @return {Element}\n   */\n  _renderText(text) {\n    const element = this._dom.createElement('div', 'lh-text');\n    element.textContent = text;\n    return element;\n  }\n\n  /**\n   * @param {string} text\n   * @return {Element}\n   */\n  _renderNumeric(text) {\n    const element = this._dom.createElement('div', 'lh-numeric');\n    element.textContent = text;\n    return element;\n  }\n\n  /**\n   * Create small thumbnail with scaled down image asset.\n   * @param {string} details\n   * @return {Element}\n   */\n  _renderThumbnail(details) {\n    const element = this._dom.createElement('img', 'lh-thumbnail');\n    const strValue = details;\n    element.src = strValue;\n    element.title = strValue;\n    element.alt = '';\n    return element;\n  }\n\n  /**\n   * Render a details item value for embedding in a table. Renders the value\n   * based on the heading's valueType, unless the value itself has a `type`\n   * property to override it.\n   * @param {LH.Audit.Details.TableItem[string] | LH.Audit.Details.OpportunityItem[string]} value\n   * @param {LH.Audit.Details.OpportunityColumnHeading} heading\n   * @return {Element|null}\n   */\n  _renderTableValue(value, heading) {\n    if (typeof value === 'undefined' || value === null) {\n      return null;\n    }\n\n    // First deal with the possible object forms of value.\n    if (typeof value === 'object') {\n      // The value's type overrides the heading's for this column.\n      switch (value.type) {\n        case 'code': {\n          return this._renderCode(value.value);\n        }\n        case 'link': {\n          return this._renderLink(value);\n        }\n        case 'node': {\n          return this.renderNode(value);\n        }\n        case 'url': {\n          return this.renderTextURL(value.value);\n        }\n        default: {\n          throw new Error(`Unknown valueType: ${value.type}`);\n        }\n      }\n    }\n\n    // Next, deal with primitives.\n    switch (heading.valueType) {\n      case 'bytes': {\n        const numValue = Number(value);\n        return this._renderBytes({value: numValue, granularity: 1});\n      }\n      case 'code': {\n        const strValue = String(value);\n        return this._renderCode(strValue);\n      }\n      case 'ms': {\n        const msValue = {\n          value: Number(value),\n          granularity: heading.granularity,\n          displayUnit: heading.displayUnit,\n        };\n        return this._renderMilliseconds(msValue);\n      }\n      case 'numeric': {\n        const strValue = String(value);\n        return this._renderNumeric(strValue);\n      }\n      case 'text': {\n        const strValue = String(value);\n        return this._renderText(strValue);\n      }\n      case 'thumbnail': {\n        const strValue = String(value);\n        return this._renderThumbnail(strValue);\n      }\n      case 'timespanMs': {\n        const numValue = Number(value);\n        return this._renderMilliseconds({value: numValue});\n      }\n      case 'url': {\n        const strValue = String(value);\n        if (URL_PREFIXES.some(prefix => strValue.startsWith(prefix))) {\n          return this.renderTextURL(strValue);\n        } else {\n          // Fall back to <pre> rendering if not actually a URL.\n          return this._renderCode(strValue);\n        }\n      }\n      default: {\n        throw new Error(`Unknown valueType: ${heading.valueType}`);\n      }\n    }\n  }\n\n  /**\n   * Get the headings of a table-like details object, converted into the\n   * OpportunityColumnHeading type until we have all details use the same\n   * heading format.\n   * @param {LH.Audit.Details.Table|LH.Audit.Details.Opportunity} tableLike\n   * @return {Array<LH.Audit.Details.OpportunityColumnHeading>} header\n   */\n  _getCanonicalizedTableHeadings(tableLike) {\n    if (tableLike.type === 'opportunity') {\n      return tableLike.headings;\n    }\n\n    return tableLike.headings.map(heading => {\n      return {\n        key: heading.key,\n        label: heading.text,\n        valueType: heading.itemType,\n        displayUnit: heading.displayUnit,\n        granularity: heading.granularity,\n      };\n    });\n  }\n\n  /**\n   * @param {LH.Audit.Details.Table|LH.Audit.Details.Opportunity} details\n   * @return {Element}\n   */\n  _renderTable(details) {\n    if (!details.items.length) return this._dom.createElement('span');\n\n    const tableElem = this._dom.createElement('table', 'lh-table');\n    const theadElem = this._dom.createChildOf(tableElem, 'thead');\n    const theadTrElem = this._dom.createChildOf(theadElem, 'tr');\n\n    const headings = this._getCanonicalizedTableHeadings(details);\n\n    for (const heading of headings) {\n      const valueType = heading.valueType || 'text';\n      const classes = `lh-table-column--${valueType}`;\n      const labelEl = this._dom.createElement('div', 'lh-text');\n      labelEl.textContent = heading.label;\n      this._dom.createChildOf(theadTrElem, 'th', classes).appendChild(labelEl);\n    }\n\n    const tbodyElem = this._dom.createChildOf(tableElem, 'tbody');\n    for (const row of details.items) {\n      const rowElem = this._dom.createChildOf(tbodyElem, 'tr');\n      for (const heading of headings) {\n        const value = row[heading.key];\n        const valueElement = this._renderTableValue(value, heading);\n\n        if (valueElement) {\n          const classes = `lh-table-column--${heading.valueType}`;\n          this._dom.createChildOf(rowElem, 'td', classes).appendChild(valueElement);\n        } else {\n          this._dom.createChildOf(rowElem, 'td', 'lh-table-column--empty');\n        }\n      }\n    }\n    return tableElem;\n  }\n\n  /**\n   * @param {LH.Audit.Details.List} details\n   * @return {Element}\n   */\n  _renderList(details) {\n    const listContainer = this._dom.createElement('div', 'lh-list');\n\n    details.items.forEach(item => {\n      const snippetEl = SnippetRenderer.render(this._dom, this._templateContext, item, this);\n      listContainer.appendChild(snippetEl);\n    });\n\n    return listContainer;\n  }\n\n  /**\n   * @param {LH.Audit.Details.NodeValue} item\n   * @return {Element}\n   * @protected\n   */\n  renderNode(item) {\n    const element = this._dom.createElement('span', 'lh-node');\n    if (item.nodeLabel) {\n      const nodeLabelEl = this._dom.createElement('div');\n      nodeLabelEl.textContent = item.nodeLabel;\n      element.appendChild(nodeLabelEl);\n    }\n    if (item.snippet) {\n      const snippetEl = this._dom.createElement('div');\n      snippetEl.classList.add('lh-node__snippet');\n      snippetEl.textContent = item.snippet;\n      element.appendChild(snippetEl);\n    }\n    if (item.selector) {\n      element.title = item.selector;\n    }\n    if (item.path) element.setAttribute('data-path', item.path);\n    if (item.selector) element.setAttribute('data-selector', item.selector);\n    if (item.snippet) element.setAttribute('data-snippet', item.snippet);\n\n    return element;\n  }\n\n  /**\n   * @param {LH.Audit.Details.Filmstrip} details\n   * @return {Element}\n   */\n  _renderFilmstrip(details) {\n    const filmstripEl = this._dom.createElement('div', 'lh-filmstrip');\n\n    for (const thumbnail of details.items) {\n      const frameEl = this._dom.createChildOf(filmstripEl, 'div', 'lh-filmstrip__frame');\n      this._dom.createChildOf(frameEl, 'img', 'lh-filmstrip__thumbnail', {\n        src: thumbnail.data,\n        alt: `Screenshot`,\n      });\n    }\n    return filmstripEl;\n  }\n\n  /**\n   * @param {string} text\n   * @return {Element}\n   */\n  _renderCode(text) {\n    const pre = this._dom.createElement('pre', 'lh-code');\n    pre.textContent = text;\n    return pre;\n  }\n}\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = DetailsRenderer;\n} else {\n  self.DetailsRenderer = DetailsRenderer;\n}\n",
  "/**\n * @license\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/**\n * @fileoverview This file contains helpers for constructing and rendering the\n * critical request chains network tree.\n */\n\n/* globals self Util */\n\n/** @typedef {import('./dom.js')} DOM */\n\nclass CriticalRequestChainRenderer {\n  /**\n   * Create render context for critical-request-chain tree display.\n   * @param {LH.Audit.SimpleCriticalRequestNode} tree\n   * @return {{tree: LH.Audit.SimpleCriticalRequestNode, startTime: number, transferSize: number}}\n   */\n  static initTree(tree) {\n    let startTime = 0;\n    const rootNodes = Object.keys(tree);\n    if (rootNodes.length > 0) {\n      const node = tree[rootNodes[0]];\n      startTime = node.request.startTime;\n    }\n\n    return {tree, startTime, transferSize: 0};\n  }\n\n  /**\n   * Helper to create context for each critical-request-chain node based on its\n   * parent. Calculates if this node is the last child, whether it has any\n   * children itself and what the tree looks like all the way back up to the root,\n   * so the tree markers can be drawn correctly.\n   * @param {LH.Audit.SimpleCriticalRequestNode} parent\n   * @param {string} id\n   * @param {number} startTime\n   * @param {number} transferSize\n   * @param {Array<boolean>=} treeMarkers\n   * @param {boolean=} parentIsLastChild\n   * @return {CRCSegment}\n   */\n  static createSegment(parent, id, startTime, transferSize, treeMarkers, parentIsLastChild) {\n    const node = parent[id];\n    const siblings = Object.keys(parent);\n    const isLastChild = siblings.indexOf(id) === (siblings.length - 1);\n    const hasChildren = !!node.children && Object.keys(node.children).length > 0;\n\n    // Copy the tree markers so that we don't change by reference.\n    const newTreeMarkers = Array.isArray(treeMarkers) ? treeMarkers.slice(0) : [];\n\n    // Add on the new entry.\n    if (typeof parentIsLastChild !== 'undefined') {\n      newTreeMarkers.push(!parentIsLastChild);\n    }\n\n    return {\n      node,\n      isLastChild,\n      hasChildren,\n      startTime,\n      transferSize: transferSize + node.request.transferSize,\n      treeMarkers: newTreeMarkers,\n    };\n  }\n\n  /**\n   * Creates the DOM for a tree segment.\n   * @param {DOM} dom\n   * @param {DocumentFragment} tmpl\n   * @param {CRCSegment} segment\n   * @param {DetailsRenderer} detailsRenderer\n   * @return {Node}\n   */\n  static createChainNode(dom, tmpl, segment, detailsRenderer) {\n    const chainsEl = dom.cloneTemplate('#tmpl-lh-crc__chains', tmpl);\n\n    // Hovering over request shows full URL.\n    dom.find('.crc-node', chainsEl).setAttribute('title', segment.node.request.url);\n\n    const treeMarkeEl = dom.find('.crc-node__tree-marker', chainsEl);\n\n    // Construct lines and add spacers for sub requests.\n    segment.treeMarkers.forEach(separator => {\n      if (separator) {\n        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert'));\n        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));\n      } else {\n        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));\n        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));\n      }\n    });\n\n    if (segment.isLastChild) {\n      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker up-right'));\n      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));\n    } else {\n      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert-right'));\n      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));\n    }\n\n    if (segment.hasChildren) {\n      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker horiz-down'));\n    } else {\n      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));\n    }\n\n    // Fill in url, host, and request size information.\n    const url = segment.node.request.url;\n    const linkEl = detailsRenderer.renderTextURL(url);\n    const treevalEl = dom.find('.crc-node__tree-value', chainsEl);\n    treevalEl.appendChild(linkEl);\n\n    if (!segment.hasChildren) {\n      const {startTime, endTime, transferSize} = segment.node.request;\n      const span = dom.createElement('span', 'crc-node__chain-duration');\n      span.textContent = ' - ' + Util.formatMilliseconds((endTime - startTime) * 1000) + ', ';\n      const span2 = dom.createElement('span', 'crc-node__chain-duration');\n      span2.textContent = Util.formatBytesToKB(transferSize, 0.01);\n\n      treevalEl.appendChild(span);\n      treevalEl.appendChild(span2);\n    }\n\n    return chainsEl;\n  }\n\n  /**\n   * Recursively builds a tree from segments.\n   * @param {DOM} dom\n   * @param {DocumentFragment} tmpl\n   * @param {CRCSegment} segment\n   * @param {Element} elem Parent element.\n   * @param {LH.Audit.Details.CriticalRequestChain} details\n   * @param {DetailsRenderer} detailsRenderer\n   */\n  static buildTree(dom, tmpl, segment, elem, details, detailsRenderer) {\n    elem.appendChild(CRCRenderer.createChainNode(dom, tmpl, segment, detailsRenderer));\n    if (segment.node.children) {\n      for (const key of Object.keys(segment.node.children)) {\n        const childSegment = CRCRenderer.createSegment(segment.node.children, key,\n          segment.startTime, segment.transferSize, segment.treeMarkers, segment.isLastChild);\n        CRCRenderer.buildTree(dom, tmpl, childSegment, elem, details, detailsRenderer);\n      }\n    }\n  }\n\n  /**\n   * @param {DOM} dom\n   * @param {ParentNode} templateContext\n   * @param {LH.Audit.Details.CriticalRequestChain} details\n   * @param {DetailsRenderer} detailsRenderer\n   * @return {Element}\n   */\n  static render(dom, templateContext, details, detailsRenderer) {\n    const tmpl = dom.cloneTemplate('#tmpl-lh-crc', templateContext);\n    const containerEl = dom.find('.lh-crc', tmpl);\n\n    // Fill in top summary.\n    dom.find('.crc-initial-nav', tmpl).textContent = Util.UIStrings.crcInitialNavigation;\n    dom.find('.lh-crc__longest_duration_label', tmpl).textContent =\n        Util.UIStrings.crcLongestDurationLabel;\n    dom.find('.lh-crc__longest_duration', tmpl).textContent =\n        Util.formatMilliseconds(details.longestChain.duration);\n\n    // Construct visual tree.\n    const root = CRCRenderer.initTree(details.chains);\n    for (const key of Object.keys(root.tree)) {\n      const segment = CRCRenderer.createSegment(root.tree, key, root.startTime, root.transferSize);\n      CRCRenderer.buildTree(dom, tmpl, segment, containerEl, details, detailsRenderer);\n    }\n\n    return dom.find('.lh-crc-container', tmpl);\n  }\n}\n\n// Alias b/c the name is really long.\nconst CRCRenderer = CriticalRequestChainRenderer;\n\n// Allow Node require()'ing.\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = CriticalRequestChainRenderer;\n} else {\n  self.CriticalRequestChainRenderer = CriticalRequestChainRenderer;\n}\n\n/** @typedef {{\n      node: LH.Audit.SimpleCriticalRequestNode[string],\n      isLastChild: boolean,\n      hasChildren: boolean,\n      startTime: number,\n      transferSize: number,\n      treeMarkers: Array<boolean>\n  }} CRCSegment\n */\n",
  "/**\n * @license Copyright 2019 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.\n */\n'use strict';\n\n/* globals self, Util */\n\n/** @typedef {import('./details-renderer')} DetailsRenderer */\n\n/** @enum {number} */\nconst LineVisibility = {\n  /** Show regardless of whether the snippet is collapsed or expanded */\n  ALWAYS: 0,\n  WHEN_COLLAPSED: 1,\n  WHEN_EXPANDED: 2,\n};\n\n/** @enum {number} */\nconst LineContentType = {\n  /** A line of content */\n  CONTENT_NORMAL: 0,\n  /** A line of content that's emphasized by setting the CSS background color */\n  CONTENT_HIGHLIGHTED: 1,\n  /** Use when some lines are hidden, shows the \"...\" placeholder */\n  PLACEHOLDER: 2,\n  /** A message about a line of content or the snippet in general */\n  MESSAGE: 3,\n};\n\n/** @typedef {{\n    content: string;\n    lineNumber: string | number;\n    contentType: LineContentType;\n    truncated?: boolean;\n    visibility?: LineVisibility;\n}} LineDetails */\n\nconst classNamesByContentType = {\n  [LineContentType.CONTENT_NORMAL]: ['lh-snippet__line--content'],\n  [LineContentType.CONTENT_HIGHLIGHTED]: [\n    'lh-snippet__line--content',\n    'lh-snippet__line--content-highlighted',\n  ],\n  [LineContentType.PLACEHOLDER]: ['lh-snippet__line--placeholder'],\n  [LineContentType.MESSAGE]: ['lh-snippet__line--message'],\n};\n\n/**\n * @param {LH.Audit.Details.SnippetValue['lines']} lines\n * @param {number} lineNumber\n * @return {{line?: LH.Audit.Details.SnippetValue['lines'][0], previousLine?: LH.Audit.Details.SnippetValue['lines'][0]}}\n */\nfunction getLineAndPreviousLine(lines, lineNumber) {\n  return {\n    line: lines.find(l => l.lineNumber === lineNumber),\n    previousLine: lines.find(l => l.lineNumber === lineNumber - 1),\n  };\n}\n\n/**\n * @param {LH.Audit.Details.SnippetValue[\"lineMessages\"]} messages\n * @param {number} lineNumber\n */\nfunction getMessagesForLineNumber(messages, lineNumber) {\n  return messages.filter(h => h.lineNumber === lineNumber);\n}\n\n/**\n * @param {LH.Audit.Details.SnippetValue} details\n * @return {LH.Audit.Details.SnippetValue['lines']}\n */\nfunction getLinesWhenCollapsed(details) {\n  const SURROUNDING_LINES_TO_SHOW_WHEN_COLLAPSED = 2;\n  return Util.filterRelevantLines(\n    details.lines,\n    details.lineMessages,\n    SURROUNDING_LINES_TO_SHOW_WHEN_COLLAPSED\n  );\n}\n\n/**\n * Render snippet of text with line numbers and annotations.\n * By default we only show a few lines around each annotation and the user\n * can click \"Expand snippet\" to show more.\n * Content lines with annotations are highlighted.\n */\nclass SnippetRenderer {\n  /**\n   * @param {DOM} dom\n   * @param {DocumentFragment} tmpl\n   * @param {LH.Audit.Details.SnippetValue} details\n   * @param {DetailsRenderer} detailsRenderer\n   * @param {function} toggleExpandedFn\n   * @return {DocumentFragment}\n   */\n  static renderHeader(dom, tmpl, details, detailsRenderer, toggleExpandedFn) {\n    const linesWhenCollapsed = getLinesWhenCollapsed(details);\n    const canExpand = linesWhenCollapsed.length < details.lines.length;\n\n    const header = dom.cloneTemplate('#tmpl-lh-snippet__header', tmpl);\n    dom.find('.lh-snippet__title', header).textContent = details.title;\n\n    const {\n      snippetCollapseButtonLabel,\n      snippetExpandButtonLabel,\n    } = Util.UIStrings;\n    dom.find(\n      '.lh-snippet__btn-label-collapse',\n      header\n    ).textContent = snippetCollapseButtonLabel;\n    dom.find(\n      '.lh-snippet__btn-label-expand',\n      header\n    ).textContent = snippetExpandButtonLabel;\n\n    const toggleExpandButton = dom.find('.lh-snippet__toggle-expand', header);\n    // If we're already showing all the available lines of the snippet, we don't need an\n    // expand/collapse button and can remove it from the DOM.\n    // If we leave the button in though, wire up the click listener to toggle visibility!\n    if (!canExpand) {\n      toggleExpandButton.remove();\n    } else {\n      toggleExpandButton.addEventListener('click', () => toggleExpandedFn());\n    }\n\n    // We only show the source node of the snippet in DevTools because then the user can\n    // access the full element detail. Just being able to see the outer HTML isn't very useful.\n    if (details.node && dom.isDevTools()) {\n      const nodeContainer = dom.find('.lh-snippet__node', header);\n      nodeContainer.appendChild(detailsRenderer.renderNode(details.node));\n    }\n\n    return header;\n  }\n\n  /**\n   * Renders a line (text content, message, or placeholder) as a DOM element.\n   * @param {DOM} dom\n   * @param {DocumentFragment} tmpl\n   * @param {LineDetails} lineDetails\n   * @return {Element}\n   */\n  static renderSnippetLine(\n      dom,\n      tmpl,\n      {content, lineNumber, truncated, contentType, visibility}\n  ) {\n    const clonedTemplate = dom.cloneTemplate('#tmpl-lh-snippet__line', tmpl);\n    const contentLine = dom.find('.lh-snippet__line', clonedTemplate);\n    const {classList} = contentLine;\n\n    classNamesByContentType[contentType].forEach(typeClass =>\n      classList.add(typeClass)\n    );\n\n    if (visibility === LineVisibility.WHEN_COLLAPSED) {\n      classList.add('lh-snippet__show-if-collapsed');\n    } else if (visibility === LineVisibility.WHEN_EXPANDED) {\n      classList.add('lh-snippet__show-if-expanded');\n    }\n\n    const lineContent = content + (truncated ? '…' : '');\n    const lineContentEl = dom.find('.lh-snippet__line code', contentLine);\n    if (contentType === LineContentType.MESSAGE) {\n      lineContentEl.appendChild(dom.convertMarkdownLinkSnippets(lineContent));\n    } else {\n      lineContentEl.textContent = lineContent;\n    }\n\n    dom.find(\n      '.lh-snippet__line-number',\n      contentLine\n    ).textContent = lineNumber.toString();\n\n    return contentLine;\n  }\n\n  /**\n   * @param {DOM} dom\n   * @param {DocumentFragment} tmpl\n   * @param {{message: string}} message\n   * @return {Element}\n   */\n  static renderMessage(dom, tmpl, message) {\n    return SnippetRenderer.renderSnippetLine(dom, tmpl, {\n      lineNumber: ' ',\n      content: message.message,\n      contentType: LineContentType.MESSAGE,\n    });\n  }\n\n  /**\n   * @param {DOM} dom\n   * @param {DocumentFragment} tmpl\n   * @param {LineVisibility} visibility\n   * @return {Element}\n   */\n  static renderOmittedLinesPlaceholder(dom, tmpl, visibility) {\n    return SnippetRenderer.renderSnippetLine(dom, tmpl, {\n      lineNumber: '…',\n      content: '',\n      visibility,\n      contentType: LineContentType.PLACEHOLDER,\n    });\n  }\n\n  /**\n   * @param {DOM} dom\n   * @param {DocumentFragment} tmpl\n   * @param {LH.Audit.Details.SnippetValue} details\n   * @return {DocumentFragment}\n   */\n  static renderSnippetContent(dom, tmpl, details) {\n    const template = dom.cloneTemplate('#tmpl-lh-snippet__content', tmpl);\n    const snippetEl = dom.find('.lh-snippet__snippet-inner', template);\n\n    // First render messages that don't belong to specific lines\n    details.generalMessages.forEach(m =>\n      snippetEl.append(SnippetRenderer.renderMessage(dom, tmpl, m))\n    );\n    // Then render the lines and their messages, as well as placeholders where lines are omitted\n    snippetEl.append(SnippetRenderer.renderSnippetLines(dom, tmpl, details));\n\n    return template;\n  }\n\n  /**\n   * @param {DOM} dom\n   * @param {DocumentFragment} tmpl\n   * @param {LH.Audit.Details.SnippetValue} details\n   * @return {DocumentFragment}\n   */\n  static renderSnippetLines(dom, tmpl, details) {\n    const {lineMessages, generalMessages, lineCount, lines} = details;\n    const linesWhenCollapsed = getLinesWhenCollapsed(details);\n    const hasOnlyGeneralMessages =\n      generalMessages.length > 0 && lineMessages.length === 0;\n\n    const lineContainer = dom.createFragment();\n\n    // When a line is not shown in the collapsed state we try to see if we also need an\n    // omitted lines placeholder for the expanded state, rather than rendering two separate\n    // placeholders.\n    let hasPendingOmittedLinesPlaceholderForCollapsedState = false;\n\n    for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {\n      const {line, previousLine} = getLineAndPreviousLine(lines, lineNumber);\n      const {\n        line: lineWhenCollapsed,\n        previousLine: previousLineWhenCollapsed,\n      } = getLineAndPreviousLine(linesWhenCollapsed, lineNumber);\n\n      const showLineWhenCollapsed = !!lineWhenCollapsed;\n      const showPreviousLineWhenCollapsed = !!previousLineWhenCollapsed;\n\n      // If we went from showing lines in the collapsed state to not showing them\n      // we need to render a placeholder\n      if (showPreviousLineWhenCollapsed && !showLineWhenCollapsed) {\n        hasPendingOmittedLinesPlaceholderForCollapsedState = true;\n      }\n      // If we are back to lines being visible in the collapsed and the placeholder\n      // hasn't been rendered yet then render it now\n      if (\n        showLineWhenCollapsed &&\n        hasPendingOmittedLinesPlaceholderForCollapsedState\n      ) {\n        lineContainer.append(\n          SnippetRenderer.renderOmittedLinesPlaceholder(\n            dom,\n            tmpl,\n            LineVisibility.WHEN_COLLAPSED\n          )\n        );\n        hasPendingOmittedLinesPlaceholderForCollapsedState = false;\n      }\n\n      // Render omitted lines placeholder if we have not already rendered one for this gap\n      const isFirstOmittedLineWhenExpanded = !line && !!previousLine;\n      const isFirstLineOverallAndIsOmittedWhenExpanded =\n        !line && lineNumber === 1;\n      if (\n        isFirstOmittedLineWhenExpanded ||\n        isFirstLineOverallAndIsOmittedWhenExpanded\n      ) {\n        // In the collapsed state we don't show omitted lines placeholders around\n        // the edges of the snippet\n        const hasRenderedAllLinesVisibleWhenCollapsed = !linesWhenCollapsed.some(\n          l => l.lineNumber > lineNumber\n        );\n        const onlyShowWhenExpanded =\n          hasRenderedAllLinesVisibleWhenCollapsed || lineNumber === 1;\n        lineContainer.append(\n          SnippetRenderer.renderOmittedLinesPlaceholder(\n            dom,\n            tmpl,\n            onlyShowWhenExpanded\n              ? LineVisibility.WHEN_EXPANDED\n              : LineVisibility.ALWAYS\n          )\n        );\n        hasPendingOmittedLinesPlaceholderForCollapsedState = false;\n      }\n\n      if (!line) {\n        // Can't render the line if we don't know its content (instead we've rendered a placeholder)\n        continue;\n      }\n\n      // Now render the line and any messages\n      const messages = getMessagesForLineNumber(lineMessages, lineNumber);\n      const highlightLine = messages.length > 0 || hasOnlyGeneralMessages;\n      const contentLineDetails = Object.assign({}, line, {\n        contentType: highlightLine\n          ? LineContentType.CONTENT_HIGHLIGHTED\n          : LineContentType.CONTENT_NORMAL,\n        visibility: lineWhenCollapsed\n          ? LineVisibility.ALWAYS\n          : LineVisibility.WHEN_EXPANDED,\n      });\n      lineContainer.append(\n        SnippetRenderer.renderSnippetLine(dom, tmpl, contentLineDetails)\n      );\n\n      messages.forEach(message => {\n        lineContainer.append(SnippetRenderer.renderMessage(dom, tmpl, message));\n      });\n    }\n\n    return lineContainer;\n  }\n\n  /**\n   * @param {DOM} dom\n   * @param {ParentNode} templateContext\n   * @param {LH.Audit.Details.SnippetValue} details\n   * @param {DetailsRenderer} detailsRenderer\n   * @return {Element}\n   */\n  static render(dom, templateContext, details, detailsRenderer) {\n    const tmpl = dom.cloneTemplate('#tmpl-lh-snippet', templateContext);\n    const snippetEl = dom.find('.lh-snippet', tmpl);\n\n    const header = SnippetRenderer.renderHeader(\n      dom,\n      tmpl,\n      details,\n      detailsRenderer,\n      () => snippetEl.classList.toggle('lh-snippet--expanded')\n    );\n    const content = SnippetRenderer.renderSnippetContent(dom, tmpl, details);\n    snippetEl.append(header, content);\n\n    return snippetEl;\n  }\n}\n\n// Allow Node require()'ing.\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = SnippetRenderer;\n} else {\n  self.SnippetRenderer = SnippetRenderer;\n}\n",
  "/**\n * @license Copyright 2017 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.\n */\n'use strict';\n\n/* global URL */\n\n/**\n * @fileoverview\n * @suppress {reportUnknownTypes}\n */\n\n/**\n * Generate a filenamePrefix of hostname_YYYY-MM-DD_HH-MM-SS\n * Date/time uses the local timezone, however Node has unreliable ICU\n * support, so we must construct a YYYY-MM-DD date format manually. :/\n * @param {{finalUrl: string, fetchTime: string}} lhr\n * @return {string}\n */\nfunction getFilenamePrefix(lhr) {\n  const hostname = new URL(lhr.finalUrl).hostname;\n  const date = (lhr.fetchTime && new Date(lhr.fetchTime)) || new Date();\n\n  const timeStr = date.toLocaleTimeString('en-US', {hour12: false});\n  const dateParts = date.toLocaleDateString('en-US', {\n    year: 'numeric', month: '2-digit', day: '2-digit',\n  }).split('/');\n  // @ts-ignore - parts exists\n  dateParts.unshift(dateParts.pop());\n  const dateStr = dateParts.join('-');\n\n  const filenamePrefix = `${hostname}_${dateStr}_${timeStr}`;\n  // replace characters that are unfriendly to filenames\n  return filenamePrefix.replace(/[/?<>\\\\:*|\"]/g, '-');\n}\n\n// don't attempt to export in the browser.\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = {getFilenamePrefix};\n}\n",
  "/**\n * @license\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/**\n * Logs messages via a UI butter.\n */\nclass Logger {\n  /**\n   * @param {Element} element\n   */\n  constructor(element) {\n    /** @type {Element} */\n    this.el = element;\n    this._id = undefined;\n  }\n\n  /**\n   * Shows a butter bar.\n   * @param {string} msg The message to show.\n   * @param {boolean=} autoHide True to hide the message after a duration.\n   *     Default is true.\n   */\n  log(msg, autoHide = true) {\n    this._id && clearTimeout(this._id);\n\n    this.el.textContent = msg;\n    this.el.classList.add('show');\n    if (autoHide) {\n      this._id = setTimeout(_ => {\n        this.el.classList.remove('show');\n      }, 7000);\n    }\n  }\n\n  /**\n   * @param {string} msg\n   */\n  warn(msg) {\n    this.log('Warning: ' + msg);\n  }\n\n  /**\n   * @param {string} msg\n   */\n  error(msg) {\n    this.log(msg);\n\n    // Rethrow to make sure it's auditable as an error, but in a setTimeout so page\n    // recovers gracefully and user can try loading a report again.\n    setTimeout(_ => {\n      throw new Error(msg);\n    }, 0);\n  }\n\n  /**\n   * Explicitly hides the butter bar.\n   */\n  hide() {\n    this._id && clearTimeout(this._id);\n    this.el.classList.remove('show');\n  }\n}\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = Logger;\n}\n",
  "/**\n * @license\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/* eslint-env browser */\n\n/**\n * @fileoverview Adds tools button, print, and other dynamic functionality to\n * the report.\n */\n\n/* globals getFilenamePrefix Util */\n\n/**\n * @param {HTMLTableElement} tableEl\n * @return {Array<HTMLTableRowElement>}\n */\nfunction getTableRows(tableEl) {\n  return Array.from(tableEl.tBodies[0].rows);\n}\n\nclass ReportUIFeatures {\n  /**\n   * @param {DOM} dom\n   */\n  constructor(dom) {\n    /** @type {LH.Result} */\n    this.json; // eslint-disable-line no-unused-expressions\n    /** @type {DOM} */\n    this._dom = dom;\n    /** @type {Document} */\n    this._document = this._dom.document();\n    /** @type {ParentNode} */\n    this._templateContext = this._dom.document();\n    /** @type {boolean} */\n    this._copyAttempt = false;\n    /** @type {HTMLElement} */\n    this.toolsButton; // eslint-disable-line no-unused-expressions\n    /** @type {HTMLElement} */\n    this.topbarEl; // eslint-disable-line no-unused-expressions\n    /** @type {HTMLElement} */\n    this.scoreScaleEl; // eslint-disable-line no-unused-expressions\n    /** @type {HTMLElement} */\n    this.stickyHeaderEl; // eslint-disable-line no-unused-expressions\n    /** @type {HTMLElement} */\n    this.highlightEl; // eslint-disable-line no-unused-expressions\n\n    this.onMediaQueryChange = this.onMediaQueryChange.bind(this);\n    this.onCopy = this.onCopy.bind(this);\n    this.onToolsButtonClick = this.onToolsButtonClick.bind(this);\n    this.onToolAction = this.onToolAction.bind(this);\n    this.onKeyDown = this.onKeyDown.bind(this);\n    this.onKeyUp = this.onKeyUp.bind(this);\n    this.onChevronClick = this.onChevronClick.bind(this);\n    this.collapseAllDetails = this.collapseAllDetails.bind(this);\n    this.expandAllDetails = this.expandAllDetails.bind(this);\n    this._toggleDarkTheme = this._toggleDarkTheme.bind(this);\n    this._updateStickyHeaderOnScroll = this._updateStickyHeaderOnScroll.bind(this);\n  }\n\n  /**\n   * Adds tools button, print, and other functionality to the report. The method\n   * should be called whenever the report needs to be re-rendered.\n   * @param {LH.Result} report\n   */\n  initFeatures(report) {\n    this.json = report;\n\n    this._setupMediaQueryListeners();\n    this._setupToolsButton();\n    this._setupThirdPartyFilter();\n    this._setUpCollapseDetailsAfterPrinting();\n    this._resetUIState();\n    this._document.addEventListener('keyup', this.onKeyUp);\n    this._document.addEventListener('copy', this.onCopy);\n\n    const topbarLogo = this._dom.find('.lh-topbar__logo', this._document);\n    topbarLogo.addEventListener('click', () => this._toggleDarkTheme());\n\n    let turnOffTheLights = false;\n    // Do not query the system preferences for DevTools - DevTools should only apply dark theme\n    // if dark is selected in the settings panel.\n    if (!this._dom.isDevTools() && window.matchMedia('(prefers-color-scheme: dark)').matches) {\n      turnOffTheLights = true;\n    }\n\n    // Fireworks.\n    const scoresAll100 = Object.values(report.categories).every(cat => cat.score === 1);\n    const hasAllCoreCategories =\n      Object.keys(report.categories).filter(id => !Util.isPluginCategory(id)).length >= 5;\n    if (scoresAll100 && hasAllCoreCategories) {\n      turnOffTheLights = true;\n      this._enableFireworks();\n    }\n\n    if (turnOffTheLights) {\n      this._toggleDarkTheme(true);\n    }\n\n    // There is only a sticky header when at least 2 categories are present.\n    if (Object.keys(this.json.categories).length >= 2) {\n      this._setupStickyHeaderElements();\n      const containerEl = this._dom.find('.lh-container', this._document);\n      const elToAddScrollListener = this._getScrollParent(containerEl);\n      elToAddScrollListener.addEventListener('scroll', this._updateStickyHeaderOnScroll);\n\n      // Use ResizeObserver where available.\n      // TODO: there is an issue with incorrect position numbers and, as a result, performance\n      // issues due to layout thrashing.\n      // See https://github.com/GoogleChrome/lighthouse/pull/9023/files#r288822287 for details.\n      // For now, limit to DevTools.\n      if (this._dom.isDevTools()) {\n        const resizeObserver = new window.ResizeObserver(this._updateStickyHeaderOnScroll);\n        resizeObserver.observe(containerEl);\n      } else {\n        window.addEventListener('resize', this._updateStickyHeaderOnScroll);\n      }\n    }\n\n    // Show the metric descriptions by default when there is an error.\n    const hasMetricError = report.categories.performance && report.categories.performance.auditRefs\n      .some(audit => Boolean(audit.group === 'metrics' && report.audits[audit.id].errorMessage));\n    if (hasMetricError) {\n      const toggleInputEl = /** @type {HTMLInputElement} */ (\n        this._dom.find('.lh-metrics-toggle__input', this._document));\n      toggleInputEl.checked = true;\n    }\n  }\n\n  /**\n   * Define a custom element for <templates> to be extracted from. For example:\n   *     this.setTemplateContext(new DOMParser().parseFromString(htmlStr, 'text/html'))\n   * @param {ParentNode} context\n   */\n  setTemplateContext(context) {\n    this._templateContext = context;\n  }\n\n  /**\n   * Finds the first scrollable ancestor of `element`. Falls back to the document.\n   * @param {HTMLElement} element\n   * @return {Node}\n   */\n  _getScrollParent(element) {\n    const {overflowY} = window.getComputedStyle(element);\n    const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';\n\n    if (isScrollable) {\n      return element;\n    }\n\n    if (element.parentElement) {\n      return this._getScrollParent(element.parentElement);\n    }\n\n    return document;\n  }\n\n  _enableFireworks() {\n    const scoresContainer = this._dom.find('.lh-scores-container', this._document);\n    scoresContainer.classList.add('score100');\n    scoresContainer.addEventListener('click', _ => {\n      scoresContainer.classList.toggle('fireworks-paused');\n    });\n  }\n\n  /**\n   * Fires a custom DOM event on target.\n   * @param {string} name Name of the event.\n   * @param {Node=} target DOM node to fire the event on.\n   * @param {*=} detail Custom data to include.\n   */\n  _fireEventOn(name, target = this._document, detail) {\n    const event = new CustomEvent(name, detail ? {detail} : undefined);\n    target.dispatchEvent(event);\n  }\n\n  _setupMediaQueryListeners() {\n    const mediaQuery = self.matchMedia('(max-width: 500px)');\n    mediaQuery.addListener(this.onMediaQueryChange);\n    // Ensure the handler is called on init\n    this.onMediaQueryChange(mediaQuery);\n  }\n\n  /**\n   * Handle media query change events.\n   * @param {MediaQueryList|MediaQueryListEvent} mql\n   */\n  onMediaQueryChange(mql) {\n    const root = this._dom.find('.lh-root', this._document);\n    root.classList.toggle('lh-narrow', mql.matches);\n  }\n\n  _setupToolsButton() {\n    this.toolsButton = this._dom.find('.lh-tools__button', this._document);\n    this.toolsButton.addEventListener('click', this.onToolsButtonClick);\n\n    const dropdown = this._dom.find('.lh-tools__dropdown', this._document);\n    dropdown.addEventListener('click', this.onToolAction);\n  }\n\n  _setupThirdPartyFilter() {\n    // Some audits should not display the third party filter option.\n    const thirdPartyFilterAuditExclusions = [\n      // This audit deals explicitly with third party resources.\n      'uses-rel-preconnect',\n    ];\n\n    // Get all tables with a text url column.\n    /** @type {Array<HTMLTableElement>} */\n    const tables = Array.from(this._document.querySelectorAll('.lh-table'));\n    const tablesWithUrls = tables\n      .filter(el => el.querySelector('td.lh-table-column--url'))\n      .filter(el => {\n        const containingAudit = el.closest('.lh-audit');\n        if (!containingAudit) throw new Error('.lh-table not within audit');\n        return !thirdPartyFilterAuditExclusions.includes(containingAudit.id);\n      });\n\n    tablesWithUrls.forEach((tableEl, index) => {\n      const urlItems = this._getUrlItems(tableEl);\n      const thirdPartyRows = this._getThirdPartyRows(tableEl, urlItems, this.json.finalUrl);\n      // If all or none of the rows are 3rd party, no checkbox!\n      if (thirdPartyRows.size === urlItems.length || !thirdPartyRows.size) return;\n\n      // create input box\n      const filterTemplate = this._dom.cloneTemplate('#tmpl-lh-3p-filter', this._templateContext);\n      const filterInput = this._dom.find('input', filterTemplate);\n      const id = `lh-3p-filter-label--${index}`;\n\n      filterInput.id = id;\n      filterInput.addEventListener('change', e => {\n        // Remove rows from the dom and keep track of them to re-add on uncheck.\n        // Why removing instead of hiding? To keep nth-child(even) background-colors working.\n        if (e.target instanceof HTMLInputElement && !e.target.checked) {\n          for (const row of thirdPartyRows.values()) {\n            row.remove();\n          }\n        } else {\n          // Add row elements back to original positions.\n          for (const [position, row] of thirdPartyRows.entries()) {\n            const childrenArr = getTableRows(tableEl);\n            tableEl.tBodies[0].insertBefore(row, childrenArr[position]);\n          }\n        }\n      });\n\n      this._dom.find('label', filterTemplate).setAttribute('for', id);\n      this._dom.find('.lh-3p-filter-count', filterTemplate).textContent =\n          `${thirdPartyRows.size}`;\n      this._dom.find('.lh-3p-ui-string', filterTemplate).textContent =\n          Util.UIStrings.thirdPartyResourcesLabel;\n\n      // Finally, add checkbox to the DOM.\n      if (!tableEl.parentNode) return; // Keep tsc happy.\n      tableEl.parentNode.insertBefore(filterTemplate, tableEl);\n    });\n  }\n\n  /**\n   * From a table with URL entries, finds the rows containing third-party URLs\n   * and returns a Map of those rows, mapping from row index to row Element.\n   * @param {HTMLTableElement} el\n   * @param {string} finalUrl\n   * @param {Array<HTMLElement>} urlItems\n   * @return {Map<number, HTMLTableRowElement>}\n   */\n  _getThirdPartyRows(el, urlItems, finalUrl) {\n    const finalUrlRootDomain = Util.getRootDomain(finalUrl);\n\n    /** @type {Map<number, HTMLTableRowElement>} */\n    const thirdPartyRows = new Map();\n    for (const urlItem of urlItems) {\n      const datasetUrl = urlItem.dataset.url;\n      if (!datasetUrl) continue;\n      const isThirdParty = Util.getRootDomain(datasetUrl) !== finalUrlRootDomain;\n      if (!isThirdParty) continue;\n\n      const urlRowEl = urlItem.closest('tr');\n      if (urlRowEl) {\n        const rowPosition = getTableRows(el).indexOf(urlRowEl);\n        thirdPartyRows.set(rowPosition, urlRowEl);\n      }\n    }\n\n    return thirdPartyRows;\n  }\n\n  /**\n   * From a table, finds and returns URL items.\n   * @param {HTMLTableElement} tableEl\n   * @return {Array<HTMLElement>}\n   */\n  _getUrlItems(tableEl) {\n    return this._dom.findAll('.lh-text__url', tableEl);\n  }\n\n  _setupStickyHeaderElements() {\n    this.topbarEl = this._dom.find('.lh-topbar', this._document);\n    this.scoreScaleEl = this._dom.find('.lh-scorescale', this._document);\n    this.stickyHeaderEl = this._dom.find('.lh-sticky-header', this._document);\n\n    // Highlighter will be absolutely positioned at first gauge, then transformed on scroll.\n    this.highlightEl = this._dom.createChildOf(this.stickyHeaderEl, 'div', 'lh-highlighter');\n  }\n\n  /**\n   * Handle copy events.\n   * @param {ClipboardEvent} e\n   */\n  onCopy(e) {\n    // Only handle copy button presses (e.g. ignore the user copying page text).\n    if (this._copyAttempt) {\n      // We want to write our own data to the clipboard, not the user's text selection.\n      e.preventDefault();\n      e.clipboardData.setData('text/plain', JSON.stringify(this.json, null, 2));\n\n      this._fireEventOn('lh-log', this._document, {\n        cmd: 'log', msg: 'Report JSON copied to clipboard',\n      });\n    }\n\n    this._copyAttempt = false;\n  }\n\n  /**\n   * Copies the report JSON to the clipboard (if supported by the browser).\n   */\n  onCopyButtonClick() {\n    this._fireEventOn('lh-analytics', this._document, {\n      cmd: 'send',\n      fields: {hitType: 'event', eventCategory: 'report', eventAction: 'copy'},\n    });\n\n    try {\n      if (this._document.queryCommandSupported('copy')) {\n        this._copyAttempt = true;\n\n        // Note: In Safari 10.0.1, execCommand('copy') returns true if there's\n        // a valid text selection on the page. See http://caniuse.com/#feat=clipboard.\n        if (!this._document.execCommand('copy')) {\n          this._copyAttempt = false; // Prevent event handler from seeing this as a copy attempt.\n\n          this._fireEventOn('lh-log', this._document, {\n            cmd: 'warn', msg: 'Your browser does not support copy to clipboard.',\n          });\n        }\n      }\n    } catch (/** @type {Error} */ e) {\n      this._copyAttempt = false;\n      this._fireEventOn('lh-log', this._document, {cmd: 'log', msg: e.message});\n    }\n  }\n\n  onChevronClick() {\n    const toggle = this._dom.find('.lh-config__settings-toggle', this._document);\n\n    if (toggle.hasAttribute('open')) {\n      toggle.removeAttribute('open');\n    } else {\n      toggle.setAttribute('open', 'true');\n    }\n  }\n\n  closeToolsDropdown() {\n    this.toolsButton.classList.remove('active');\n  }\n\n  /**\n   * Click handler for tools button.\n   * @param {Event} e\n   */\n  onToolsButtonClick(e) {\n    e.preventDefault();\n    this.toolsButton.classList.toggle('active');\n    this._document.addEventListener('keydown', this.onKeyDown);\n  }\n\n  /**\n   * Resets the state of page before capturing the page for export.\n   * When the user opens the exported HTML page, certain UI elements should\n   * be in their closed state (not opened) and the templates should be unstamped.\n   */\n  _resetUIState() {\n    this.closeToolsDropdown();\n    this._dom.resetTemplates();\n  }\n\n  /**\n   * Handler for tool button.\n   * @param {Event} e\n   */\n  onToolAction(e) {\n    e.preventDefault();\n\n    const el = /** @type {?Element} */ (e.target);\n\n    if (!el || !el.hasAttribute('data-action')) {\n      return;\n    }\n\n    switch (el.getAttribute('data-action')) {\n      case 'copy':\n        this.onCopyButtonClick();\n        break;\n      case 'print-summary':\n        this.collapseAllDetails();\n        this.closeToolsDropdown();\n        this._print();\n        break;\n      case 'print-expanded':\n        this.expandAllDetails();\n        this.closeToolsDropdown();\n        this._print();\n        break;\n      case 'save-json': {\n        const jsonStr = JSON.stringify(this.json, null, 2);\n        this._saveFile(new Blob([jsonStr], {type: 'application/json'}));\n        break;\n      }\n      case 'save-html': {\n        const htmlStr = this.getReportHtml();\n        try {\n          this._saveFile(new Blob([htmlStr], {type: 'text/html'}));\n        } catch (/** @type {Error} */ e) {\n          this._fireEventOn('lh-log', this._document, {\n            cmd: 'error', msg: 'Could not export as HTML. ' + e.message,\n          });\n        }\n        break;\n      }\n      case 'open-viewer': {\n        const viewerPath = '/lighthouse/viewer/';\n        ReportUIFeatures.openTabAndSendJsonReport(this.json, viewerPath);\n        break;\n      }\n      case 'save-gist': {\n        this.saveAsGist();\n        break;\n      }\n      case 'toggle-dark': {\n        this._toggleDarkTheme();\n        break;\n      }\n    }\n\n    this.closeToolsDropdown();\n    this._document.removeEventListener('keydown', this.onKeyDown);\n  }\n\n  _print() {\n    self.print();\n  }\n\n  /**\n   * Keydown handler for the document.\n   * @param {KeyboardEvent} e\n   */\n  onKeyDown(e) {\n    if (e.keyCode === 27) { // ESC\n      this.closeToolsDropdown();\n    }\n  }\n\n  /**\n   * Keyup handler for the document.\n   * @param {KeyboardEvent} e\n   */\n  onKeyUp(e) {\n    // Ctrl+P - Expands audit details when user prints via keyboard shortcut.\n    if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) {\n      this.closeToolsDropdown();\n    }\n  }\n\n  /**\n   * Opens a new tab to the online viewer and sends the local page's JSON results\n   * to the online viewer using postMessage.\n   * @param {LH.Result} reportJson\n   * @param {string} viewerPath\n   * @protected\n   */\n  static openTabAndSendJsonReport(reportJson, viewerPath) {\n    const VIEWER_ORIGIN = 'https://googlechrome.github.io';\n    // Chrome doesn't allow us to immediately postMessage to a popup right\n    // after it's created. Normally, we could also listen for the popup window's\n    // load event, however it is cross-domain and won't fire. Instead, listen\n    // for a message from the target app saying \"I'm open\".\n    const json = reportJson;\n    window.addEventListener('message', function msgHandler(messageEvent) {\n      if (messageEvent.origin !== VIEWER_ORIGIN) {\n        return;\n      }\n      if (popup && messageEvent.data.opened) {\n        popup.postMessage({lhresults: json}, VIEWER_ORIGIN);\n        window.removeEventListener('message', msgHandler);\n      }\n    });\n\n    // The popup's window.name is keyed by version+url+fetchTime, so we reuse/select tabs correctly\n    // @ts-ignore - If this is a v2 LHR, use old `generatedTime`.\n    const fallbackFetchTime = /** @type {string} */ (json.generatedTime);\n    const fetchTime = json.fetchTime || fallbackFetchTime;\n    const windowName = `${json.lighthouseVersion}-${json.requestedUrl}-${fetchTime}`;\n    const popup = window.open(`${VIEWER_ORIGIN}${viewerPath}`, windowName);\n  }\n\n  /**\n   * Expands all audit `<details>`.\n   * Ideally, a print stylesheet could take care of this, but CSS has no way to\n   * open a `<details>` element.\n   */\n  expandAllDetails() {\n    const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll(\n        '.lh-categories details', this._document));\n    details.map(detail => detail.open = true);\n  }\n\n  /**\n   * Collapses all audit `<details>`.\n   * open a `<details>` element.\n   */\n  collapseAllDetails() {\n    const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll(\n        '.lh-categories details', this._document));\n    details.map(detail => detail.open = false);\n  }\n\n  /**\n   * Sets up listeners to collapse audit `<details>` when the user closes the\n   * print dialog, all `<details>` are collapsed.\n   */\n  _setUpCollapseDetailsAfterPrinting() {\n    // FF and IE implement these old events.\n    if ('onbeforeprint' in self) {\n      self.addEventListener('afterprint', this.collapseAllDetails);\n    } else {\n      const win = /** @type {Window} */ (self);\n      // Note: FF implements both window.onbeforeprint and media listeners. However,\n      // it doesn't matchMedia doesn't fire when matching 'print'.\n      win.matchMedia('print').addListener(mql => {\n        if (mql.matches) {\n          this.expandAllDetails();\n        } else {\n          this.collapseAllDetails();\n        }\n      });\n    }\n  }\n\n  /**\n   * Returns the html that recreates this report.\n   * @return {string}\n   * @protected\n   */\n  getReportHtml() {\n    this._resetUIState();\n    return this._document.documentElement.outerHTML;\n  }\n\n  /**\n   * Save json as a gist. Unimplemented in base UI features.\n   * @protected\n   */\n  saveAsGist() {\n    throw new Error('Cannot save as gist from base report');\n  }\n\n  /**\n   * Downloads a file (blob) using a[download].\n   * @param {Blob|File} blob The file to save.\n   * @private\n   */\n  _saveFile(blob) {\n    const filename = getFilenamePrefix({\n      finalUrl: this.json.finalUrl,\n      fetchTime: this.json.fetchTime,\n    });\n\n    const ext = blob.type.match('json') ? '.json' : '.html';\n    const href = URL.createObjectURL(blob);\n\n    const a = this._dom.createElement('a');\n    a.download = `${filename}${ext}`;\n    a.href = href;\n    this._document.body.appendChild(a); // Firefox requires anchor to be in the DOM.\n    a.click();\n\n    // cleanup.\n    this._document.body.removeChild(a);\n    setTimeout(_ => URL.revokeObjectURL(href), 500);\n  }\n\n  /**\n   * @private\n   * @param {boolean} [force]\n   */\n  _toggleDarkTheme(force) {\n    const el = this._dom.find('.lh-vars', this._document);\n    // This seems unnecessary, but in DevTools, passing \"undefined\" as the second\n    // parameter acts like passing \"false\".\n    // https://github.com/ChromeDevTools/devtools-frontend/blob/dd6a6d4153647c2a4203c327c595692c5e0a4256/front_end/dom_extension/DOMExtension.js#L809-L819\n    if (typeof force === 'undefined') {\n      el.classList.toggle('dark');\n    } else {\n      el.classList.toggle('dark', force);\n    }\n  }\n\n  _updateStickyHeaderOnScroll() {\n    // Show sticky header when the score scale begins to go underneath the topbar.\n    const topbarBottom = this.topbarEl.getBoundingClientRect().bottom;\n    const scoreScaleTop = this.scoreScaleEl.getBoundingClientRect().top;\n    const showStickyHeader = topbarBottom >= scoreScaleTop;\n\n    // Highlight mini gauge when section is in view.\n    // In view = the last category that starts above the middle of the window.\n    const categoryEls = Array.from(this._document.querySelectorAll('.lh-category'));\n    const categoriesAboveTheMiddle =\n      categoryEls.filter(el => el.getBoundingClientRect().top - window.innerHeight / 2 < 0);\n    const highlightIndex =\n      categoriesAboveTheMiddle.length > 0 ? categoriesAboveTheMiddle.length - 1 : 0;\n\n    // Category order matches gauge order in sticky header.\n    const gaugeWrapperEls = this.stickyHeaderEl.querySelectorAll('.lh-gauge__wrapper');\n    const gaugeToHighlight = gaugeWrapperEls[highlightIndex];\n    const origin = gaugeWrapperEls[0].getBoundingClientRect().left;\n    const offset = gaugeToHighlight.getBoundingClientRect().left - origin;\n\n    // Mutate at end to avoid layout thrashing.\n    this.highlightEl.style.transform = `translate(${offset}px)`;\n    this.stickyHeaderEl.classList.toggle('lh-sticky-header--visible', showStickyHeader);\n  }\n}\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = ReportUIFeatures;\n} else {\n  self.ReportUIFeatures = ReportUIFeatures;\n}\n",
  "/**\n * @license\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/* globals self, Util */\n\n/** @typedef {import('./dom.js')} DOM */\n/** @typedef {import('./report-renderer.js')} ReportRenderer */\n/** @typedef {import('./details-renderer.js')} DetailsRenderer */\n/** @typedef {import('./util.js')} Util */\n/** @typedef {'failed'|'warning'|'manual'|'passed'|'notApplicable'} TopLevelClumpId */\n\nclass CategoryRenderer {\n  /**\n   * @param {DOM} dom\n   * @param {DetailsRenderer} detailsRenderer\n   */\n  constructor(dom, detailsRenderer) {\n    /** @type {DOM} */\n    this.dom = dom;\n    /** @type {DetailsRenderer} */\n    this.detailsRenderer = detailsRenderer;\n    /** @type {ParentNode} */\n    this.templateContext = this.dom.document();\n\n    this.detailsRenderer.setTemplateContext(this.templateContext);\n  }\n\n  /**\n   * Display info per top-level clump. Define on class to avoid race with Util init.\n   */\n  get _clumpTitles() {\n    return {\n      warning: Util.UIStrings.warningAuditsGroupTitle,\n      manual: Util.UIStrings.manualAuditsGroupTitle,\n      passed: Util.UIStrings.passedAuditsGroupTitle,\n      notApplicable: Util.UIStrings.notApplicableAuditsGroupTitle,\n    };\n  }\n\n  /**\n   * @param {LH.ReportResult.AuditRef} audit\n   * @return {Element}\n   */\n  renderAudit(audit) {\n    const tmpl = this.dom.cloneTemplate('#tmpl-lh-audit', this.templateContext);\n    return this.populateAuditValues(audit, tmpl);\n  }\n\n  /**\n   * Populate an DOM tree with audit details. Used by renderAudit and renderOpportunity\n   * @param {LH.ReportResult.AuditRef} audit\n   * @param {DocumentFragment} tmpl\n   * @return {Element}\n   */\n  populateAuditValues(audit, tmpl) {\n    const auditEl = this.dom.find('.lh-audit', tmpl);\n    auditEl.id = audit.result.id;\n    const scoreDisplayMode = audit.result.scoreDisplayMode;\n\n    if (audit.result.displayValue) {\n      this.dom.find('.lh-audit__display-text', auditEl).textContent = audit.result.displayValue;\n    }\n\n    const titleEl = this.dom.find('.lh-audit__title', auditEl);\n    titleEl.appendChild(this.dom.convertMarkdownCodeSnippets(audit.result.title));\n    this.dom.find('.lh-audit__description', auditEl)\n        .appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description));\n\n    if (audit.stackPacks) {\n      audit.stackPacks.forEach(pack => {\n        const packElm = this.dom.createElement('div');\n        packElm.classList.add('lh-audit__stackpack');\n\n        const packElmImg = this.dom.createElement('img');\n        packElmImg.classList.add('lh-audit__stackpack__img');\n        packElmImg.src = pack.iconDataURL;\n        packElmImg.alt = pack.title;\n        packElm.appendChild(packElmImg);\n\n        packElm.appendChild(this.dom.convertMarkdownLinkSnippets(pack.description));\n\n        this.dom.find('.lh-audit__stackpacks', auditEl)\n          .appendChild(packElm);\n      });\n    }\n\n    const header = /** @type {HTMLDetailsElement} */ (this.dom.find('details', auditEl));\n    if (audit.result.details) {\n      const elem = this.detailsRenderer.render(audit.result.details);\n      if (elem) {\n        elem.classList.add('lh-details');\n        header.appendChild(elem);\n      }\n    }\n\n    // Add chevron SVG to the end of the summary\n    this.dom.find('.lh-chevron-container', auditEl).appendChild(this._createChevron());\n    this._setRatingClass(auditEl, audit.result.score, scoreDisplayMode);\n\n    if (audit.result.scoreDisplayMode === 'error') {\n      auditEl.classList.add(`lh-audit--error`);\n      const textEl = this.dom.find('.lh-audit__display-text', auditEl);\n      textEl.textContent = Util.UIStrings.errorLabel;\n      textEl.classList.add('tooltip-boundary');\n      const tooltip = this.dom.createChildOf(textEl, 'div', 'tooltip tooltip--error');\n      tooltip.textContent = audit.result.errorMessage || Util.UIStrings.errorMissingAuditInfo;\n    } else if (audit.result.explanation) {\n      const explEl = this.dom.createChildOf(titleEl, 'div', 'lh-audit-explanation');\n      explEl.textContent = audit.result.explanation;\n    }\n    const warnings = audit.result.warnings;\n    if (!warnings || warnings.length === 0) return auditEl;\n\n    // Add list of warnings or singular warning\n    const warningsEl = this.dom.createChildOf(titleEl, 'div', 'lh-warnings');\n    this.dom.createChildOf(warningsEl, 'span').textContent = Util.UIStrings.warningHeader;\n    if (warnings.length === 1) {\n      warningsEl.appendChild(this.dom.document().createTextNode(warnings.join('')));\n    } else {\n      const warningsUl = this.dom.createChildOf(warningsEl, 'ul');\n      for (const warning of warnings) {\n        const item = this.dom.createChildOf(warningsUl, 'li');\n        item.textContent = warning;\n      }\n    }\n    return auditEl;\n  }\n\n  /**\n   * @return {HTMLElement}\n   */\n  _createChevron() {\n    const chevronTmpl = this.dom.cloneTemplate('#tmpl-lh-chevron', this.templateContext);\n    const chevronEl = this.dom.find('.lh-chevron', chevronTmpl);\n    return chevronEl;\n  }\n\n  /**\n   * @param {Element} element DOM node to populate with values.\n   * @param {number|null} score\n   * @param {string} scoreDisplayMode\n   * @return {Element}\n   */\n  _setRatingClass(element, score, scoreDisplayMode) {\n    const rating = Util.calculateRating(score, scoreDisplayMode);\n    element.classList.add(`lh-audit--${scoreDisplayMode.toLowerCase()}`);\n    if (scoreDisplayMode !== 'informative') {\n      element.classList.add(`lh-audit--${rating}`);\n    }\n    return element;\n  }\n\n  /**\n   * @param {LH.ReportResult.Category} category\n   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions\n   * @return {Element}\n   */\n  renderCategoryHeader(category, groupDefinitions) {\n    const tmpl = this.dom.cloneTemplate('#tmpl-lh-category-header', this.templateContext);\n\n    const gaugeContainerEl = this.dom.find('.lh-score__gauge', tmpl);\n    const gaugeEl = this.renderScoreGauge(category, groupDefinitions);\n    gaugeContainerEl.appendChild(gaugeEl);\n\n    if (category.description) {\n      const descEl = this.dom.convertMarkdownLinkSnippets(category.description);\n      this.dom.find('.lh-category-header__description', tmpl).appendChild(descEl);\n    }\n\n    return /** @type {Element} */ (tmpl.firstElementChild);\n  }\n\n  /**\n   * Renders the group container for a group of audits. Individual audit elements can be added\n   * directly to the returned element.\n   * @param {LH.Result.ReportGroup} group\n   * @return {Element}\n   */\n  renderAuditGroup(group) {\n    const groupEl = this.dom.createElement('div', 'lh-audit-group');\n\n    const auditGroupHeader = this.dom.createElement('div', 'lh-audit-group__header');\n\n    this.dom.createChildOf(auditGroupHeader, 'span', 'lh-audit-group__title')\n      .textContent = group.title;\n    if (group.description) {\n      const descriptionEl = this.dom.convertMarkdownLinkSnippets(group.description);\n      descriptionEl.classList.add('lh-audit-group__description');\n      auditGroupHeader.appendChild(descriptionEl);\n    }\n    groupEl.appendChild(auditGroupHeader);\n\n    return groupEl;\n  }\n\n  /**\n   * Takes an array of auditRefs, groups them if requested, then returns an\n   * array of audit and audit-group elements.\n   * @param {Array<LH.ReportResult.AuditRef>} auditRefs\n   * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions\n   * @return {Array<Element>}\n   */\n  _renderGroupedAudits(auditRefs, groupDefinitions) {\n    // Audits grouped by their group (or under notAGroup).\n    /** @type {Map<string, Array<LH.ReportResult.AuditRef>>} */\n    const grouped = new Map();\n\n    // Add audits without a group first so they will appear first.\n    const notAGroup = 'NotAGroup';\n    grouped.set(notAGroup, []);\n\n    for (const auditRef of auditRefs) {\n      const groupId = auditRef.group || notAGroup;\n      const groupAuditRefs = grouped.get(groupId) || [];\n      groupAuditRefs.push(auditRef);\n      grouped.set(groupId, groupAuditRefs);\n    }\n\n    /** @type {Array<Element>} */\n    const auditElements = [];\n\n    for (const [groupId, groupAuditRefs] of grouped) {\n      if (groupId === notAGroup) {\n        // Push not-grouped audits individually.\n        for (const auditRef of groupAuditRefs) {\n          auditElements.push(this.renderAudit(auditRef));\n        }\n        continue;\n      }\n\n      // Push grouped audits as a group.\n      const groupDef = groupDefinitions[groupId];\n      const auditGroupElem = this.renderAuditGroup(groupDef);\n      for (const auditRef of groupAuditRefs) {\n        auditGroupElem.appendChild(this.renderAudit(auditRef));\n      }\n      auditGroupElem.classList.add(`lh-audit-group--${groupId}`);\n      auditElements.push(auditGroupElem);\n    }\n\n    return auditElements;\n  }\n\n  /**\n   * Take a set of audits, group them if they have groups, then render in a top-level\n   * clump that can't be expanded/collapsed.\n   * @param {Array<LH.ReportResult.AuditRef>} auditRefs\n   * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions\n   * @return {Element}\n   */\n  renderUnexpandableClump(auditRefs, groupDefinitions) {\n    const clumpElement = this.dom.createElement('div');\n    const elements = this._renderGroupedAudits(auditRefs, groupDefinitions);\n    elements.forEach(elem => clumpElement.appendChild(elem));\n    return clumpElement;\n  }\n\n  /**\n   * Take a set of audits and render in a top-level, expandable clump that starts\n   * in a collapsed state.\n   * @param {Exclude<TopLevelClumpId, 'failed'>} clumpId\n   * @param {{auditRefs: Array<LH.ReportResult.AuditRef>, description?: string}} clumpOpts\n   * @return {Element}\n   */\n  renderClump(clumpId, {auditRefs, description}) {\n    const clumpTmpl = this.dom.cloneTemplate('#tmpl-lh-clump', this.templateContext);\n    const clumpElement = this.dom.find('.lh-clump', clumpTmpl);\n\n    if (clumpId === 'warning') {\n      clumpElement.setAttribute('open', '');\n    }\n\n    const summaryInnerEl = this.dom.find('.lh-audit-group__summary', clumpElement);\n    const chevronEl = summaryInnerEl.appendChild(this._createChevron());\n    chevronEl.title = Util.UIStrings.auditGroupExpandTooltip;\n\n    const headerEl = this.dom.find('.lh-audit-group__header', clumpElement);\n    const title = this._clumpTitles[clumpId];\n    this.dom.find('.lh-audit-group__title', headerEl).textContent = title;\n    if (description) {\n      const descriptionEl = this.dom.convertMarkdownLinkSnippets(description);\n      descriptionEl.classList.add('lh-audit-group__description');\n      headerEl.appendChild(descriptionEl);\n    }\n\n    const itemCountEl = this.dom.find('.lh-audit-group__itemcount', clumpElement);\n    itemCountEl.textContent = `(${auditRefs.length})`;\n\n    // Add all audit results to the clump.\n    const auditElements = auditRefs.map(this.renderAudit.bind(this));\n    clumpElement.append(...auditElements);\n\n    clumpElement.classList.add(`lh-clump--${clumpId.toLowerCase()}`);\n    return clumpElement;\n  }\n\n  /**\n   * @param {ParentNode} context\n   */\n  setTemplateContext(context) {\n    this.templateContext = context;\n    this.detailsRenderer.setTemplateContext(context);\n  }\n\n  /**\n   * @param {LH.ReportResult.Category} category\n   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions\n   * @return {DocumentFragment}\n   */\n  renderScoreGauge(category, groupDefinitions) { // eslint-disable-line no-unused-vars\n    const tmpl = this.dom.cloneTemplate('#tmpl-lh-gauge', this.templateContext);\n    const wrapper = /** @type {HTMLAnchorElement} */ (this.dom.find('.lh-gauge__wrapper', tmpl));\n    wrapper.href = `#${category.id}`;\n    wrapper.classList.add(`lh-gauge__wrapper--${Util.calculateRating(category.score)}`);\n\n    if (Util.isPluginCategory(category.id)) {\n      wrapper.classList.add('lh-gauge__wrapper--plugin');\n    }\n\n    // Cast `null` to 0\n    const numericScore = Number(category.score);\n    const gauge = this.dom.find('.lh-gauge', tmpl);\n    // 352 is ~= 2 * Math.PI * gauge radius (56)\n    // https://codepen.io/xgad/post/svg-radial-progress-meters\n    // score of 50: `stroke-dasharray: 176 352`;\n    /** @type {?SVGCircleElement} */\n    const gaugeArc = gauge.querySelector('.lh-gauge-arc');\n    if (gaugeArc) {\n      gaugeArc.style.strokeDasharray = `${numericScore * 352} 352`;\n    }\n\n    const scoreOutOf100 = Math.round(numericScore * 100);\n    const percentageEl = this.dom.find('.lh-gauge__percentage', tmpl);\n    percentageEl.textContent = scoreOutOf100.toString();\n    if (category.score === null) {\n      percentageEl.textContent = '?';\n      percentageEl.title = Util.UIStrings.errorLabel;\n    }\n\n    this.dom.find('.lh-gauge__label', tmpl).textContent = category.title;\n    return tmpl;\n  }\n\n  /**\n   * @param {LH.ReportResult.AuditRef} audit\n   * @return {boolean}\n   */\n  _auditHasWarning(audit) {\n    return Boolean(audit.result.warnings && audit.result.warnings.length);\n  }\n\n  /**\n   * Returns the id of the top-level clump to put this audit in.\n   * @param {LH.ReportResult.AuditRef} auditRef\n   * @return {TopLevelClumpId}\n   */\n  _getClumpIdForAuditRef(auditRef) {\n    const scoreDisplayMode = auditRef.result.scoreDisplayMode;\n    if (scoreDisplayMode === 'manual' || scoreDisplayMode === 'notApplicable') {\n      return scoreDisplayMode;\n    }\n\n    if (Util.showAsPassed(auditRef.result)) {\n      if (this._auditHasWarning(auditRef)) {\n        return 'warning';\n      } else {\n        return 'passed';\n      }\n    } else {\n      return 'failed';\n    }\n  }\n\n  /**\n   * Renders a set of top level sections (clumps), under a status of failed, warning,\n   * manual, passed, or notApplicable. The result ends up something like:\n   *\n   * failed clump\n   *   ├── audit 1 (w/o group)\n   *   ├── audit 2 (w/o group)\n   *   ├── audit group\n   *   |  ├── audit 3\n   *   |  └── audit 4\n   *   └── audit group\n   *      ├── audit 5\n   *      └── audit 6\n   * other clump (e.g. 'manual')\n   *   ├── audit 1\n   *   ├── audit 2\n   *   ├── …\n   *   ⋮\n   * @param {LH.ReportResult.Category} category\n   * @param {Object<string, LH.Result.ReportGroup>} [groupDefinitions]\n   * @return {Element}\n   */\n  render(category, groupDefinitions = {}) {\n    const element = this.dom.createElement('div', 'lh-category');\n    this.createPermalinkSpan(element, category.id);\n    element.appendChild(this.renderCategoryHeader(category, groupDefinitions));\n\n    // Top level clumps for audits, in order they will appear in the report.\n    /** @type {Map<TopLevelClumpId, Array<LH.ReportResult.AuditRef>>} */\n    const clumps = new Map();\n    clumps.set('failed', []);\n    clumps.set('warning', []);\n    clumps.set('manual', []);\n    clumps.set('passed', []);\n    clumps.set('notApplicable', []);\n\n    // Sort audits into clumps.\n    for (const auditRef of category.auditRefs) {\n      const clumpId = this._getClumpIdForAuditRef(auditRef);\n      const clump = /** @type {Array<LH.ReportResult.AuditRef>} */ (clumps.get(clumpId)); // already defined\n      clump.push(auditRef);\n      clumps.set(clumpId, clump);\n    }\n\n    // Render each clump.\n    for (const [clumpId, auditRefs] of clumps) {\n      if (auditRefs.length === 0) continue;\n\n      if (clumpId === 'failed') {\n        const clumpElem = this.renderUnexpandableClump(auditRefs, groupDefinitions);\n        clumpElem.classList.add(`lh-clump--failed`);\n        element.appendChild(clumpElem);\n        continue;\n      }\n\n      const description = clumpId === 'manual' ? category.manualDescription : undefined;\n      const clumpElem = this.renderClump(clumpId, {auditRefs, description});\n      element.appendChild(clumpElem);\n    }\n\n    return element;\n  }\n\n  /**\n   * Create a non-semantic span used for hash navigation of categories\n   * @param {Element} element\n   * @param {string} id\n   */\n  createPermalinkSpan(element, id) {\n    const permalinkEl = this.dom.createChildOf(element, 'span', 'lh-permalink');\n    permalinkEl.id = id;\n  }\n}\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = CategoryRenderer;\n} else {\n  self.CategoryRenderer = CategoryRenderer;\n}\n",
  "/**\n * @license\n * Copyright 2018 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/* globals self, Util, CategoryRenderer */\n\n/** @typedef {import('./dom.js')} DOM */\n\nclass PerformanceCategoryRenderer extends CategoryRenderer {\n  /**\n   * @param {LH.ReportResult.AuditRef} audit\n   * @return {Element}\n   */\n  _renderMetric(audit) {\n    const tmpl = this.dom.cloneTemplate('#tmpl-lh-metric', this.templateContext);\n    const element = this.dom.find('.lh-metric', tmpl);\n    element.id = audit.result.id;\n    const rating = Util.calculateRating(audit.result.score, audit.result.scoreDisplayMode);\n    element.classList.add(`lh-metric--${rating}`);\n\n    const titleEl = this.dom.find('.lh-metric__title', tmpl);\n    titleEl.textContent = audit.result.title;\n\n    const valueEl = this.dom.find('.lh-metric__value', tmpl);\n    valueEl.textContent = audit.result.displayValue || '';\n\n    const descriptionEl = this.dom.find('.lh-metric__description', tmpl);\n    descriptionEl.appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description));\n\n    if (audit.result.scoreDisplayMode === 'error') {\n      descriptionEl.textContent = '';\n      valueEl.textContent = 'Error!';\n      const tooltip = this.dom.createChildOf(descriptionEl, 'span');\n      tooltip.textContent = audit.result.errorMessage || 'Report error: no metric information';\n    }\n\n    return element;\n  }\n\n  /**\n   * @param {LH.ReportResult.AuditRef} audit\n   * @param {number} scale\n   * @return {Element}\n   */\n  _renderOpportunity(audit, scale) {\n    const oppTmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity', this.templateContext);\n    const element = this.populateAuditValues(audit, oppTmpl);\n    element.id = audit.result.id;\n\n    if (!audit.result.details || audit.result.scoreDisplayMode === 'error') {\n      return element;\n    }\n    const details = audit.result.details;\n    if (details.type !== 'opportunity') {\n      return element;\n    }\n\n    // Overwrite the displayValue with opportunity's wastedMs\n    const displayEl = this.dom.find('.lh-audit__display-text', element);\n    const sparklineWidthPct = `${details.overallSavingsMs / scale * 100}%`;\n    this.dom.find('.lh-sparkline__bar', element).style.width = sparklineWidthPct;\n    displayEl.textContent = Util.formatSeconds(details.overallSavingsMs, 0.01);\n\n    // Set [title] tooltips\n    if (audit.result.displayValue) {\n      const displayValue = audit.result.displayValue;\n      this.dom.find('.lh-load-opportunity__sparkline', element).title = displayValue;\n      displayEl.title = displayValue;\n    }\n\n    return element;\n  }\n\n  /**\n   * Get an audit's wastedMs to sort the opportunity by, and scale the sparkline width\n   * Opportunities with an error won't have a details object, so MIN_VALUE is returned to keep any\n   * erroring opportunities last in sort order.\n   * @param {LH.ReportResult.AuditRef} audit\n   * @return {number}\n   */\n  _getWastedMs(audit) {\n    if (audit.result.details && audit.result.details.type === 'opportunity') {\n      const details = audit.result.details;\n      if (typeof details.overallSavingsMs !== 'number') {\n        throw new Error('non-opportunity details passed to _getWastedMs');\n      }\n      return details.overallSavingsMs;\n    } else {\n      return Number.MIN_VALUE;\n    }\n  }\n\n  /**\n   * @param {LH.ReportResult.Category} category\n   * @param {Object<string, LH.Result.ReportGroup>} groups\n   * @param {'PSI'=} environment 'PSI' and undefined are the only valid values\n   * @return {Element}\n   * @override\n   */\n  render(category, groups, environment) {\n    const element = this.dom.createElement('div', 'lh-category');\n    if (environment === 'PSI') {\n      const gaugeEl = this.dom.createElement('div', 'lh-score__gauge');\n      gaugeEl.appendChild(this.renderScoreGauge(category, groups));\n      element.appendChild(gaugeEl);\n    } else {\n      this.createPermalinkSpan(element, category.id);\n      element.appendChild(this.renderCategoryHeader(category, groups));\n    }\n\n    // Metrics.\n    const metricAuditsEl = this.renderAuditGroup(groups.metrics);\n\n    // Metric descriptions toggle.\n    const toggleTmpl = this.dom.cloneTemplate('#tmpl-lh-metrics-toggle', this.templateContext);\n    const toggleEl = this.dom.find('.lh-metrics-toggle', toggleTmpl);\n    metricAuditsEl.append(...toggleEl.childNodes);\n\n    const metricAudits = category.auditRefs.filter(audit => audit.group === 'metrics');\n    const keyMetrics = metricAudits.filter(a => a.weight >= 3);\n    const otherMetrics = metricAudits.filter(a => a.weight < 3);\n\n    const metricsBoxesEl = this.dom.createChildOf(metricAuditsEl, 'div', 'lh-columns');\n    const metricsColumn1El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-column');\n    const metricsColumn2El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-column');\n\n    keyMetrics.forEach(item => {\n      metricsColumn1El.appendChild(this._renderMetric(item));\n    });\n    otherMetrics.forEach(item => {\n      metricsColumn2El.appendChild(this._renderMetric(item));\n    });\n\n    // 'Values are estimated and may vary' is used as the category description for PSI\n    if (environment !== 'PSI') {\n      const estValuesEl = this.dom.createChildOf(metricAuditsEl, 'div', 'lh-metrics__disclaimer');\n      estValuesEl.textContent = Util.UIStrings.varianceDisclaimer;\n    }\n\n    metricAuditsEl.classList.add('lh-audit-group--metrics');\n    element.appendChild(metricAuditsEl);\n\n    // Filmstrip\n    const timelineEl = this.dom.createChildOf(element, 'div', 'lh-filmstrip-container');\n    const thumbnailAudit = category.auditRefs.find(audit => audit.id === 'screenshot-thumbnails');\n    const thumbnailResult = thumbnailAudit && thumbnailAudit.result;\n    if (thumbnailResult && thumbnailResult.details) {\n      timelineEl.id = thumbnailResult.id;\n      const filmstripEl = this.detailsRenderer.render(thumbnailResult.details);\n      filmstripEl && timelineEl.appendChild(filmstripEl);\n    }\n\n    // Budgets\n    const budgetAudit = category.auditRefs.find(audit => audit.id === 'performance-budget');\n    if (budgetAudit && budgetAudit.result.details) {\n      const table = this.detailsRenderer.render(budgetAudit.result.details);\n      if (table) {\n        table.id = budgetAudit.id;\n        table.classList.add('lh-audit');\n        const budgetsGroupEl = this.renderAuditGroup(groups.budgets);\n        budgetsGroupEl.appendChild(table);\n        budgetsGroupEl.classList.add('lh-audit-group--budgets');\n        element.appendChild(budgetsGroupEl);\n      }\n    }\n\n    // Opportunities\n    const opportunityAudits = category.auditRefs\n        .filter(audit => audit.group === 'load-opportunities' && !Util.showAsPassed(audit.result))\n        .sort((auditA, auditB) => this._getWastedMs(auditB) - this._getWastedMs(auditA));\n\n    if (opportunityAudits.length) {\n      // Scale the sparklines relative to savings, minimum 2s to not overstate small savings\n      const minimumScale = 2000;\n      const wastedMsValues = opportunityAudits.map(audit => this._getWastedMs(audit));\n      const maxWaste = Math.max(...wastedMsValues);\n      const scale = Math.max(Math.ceil(maxWaste / 1000) * 1000, minimumScale);\n      const groupEl = this.renderAuditGroup(groups['load-opportunities']);\n      const tmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity-header', this.templateContext);\n\n      this.dom.find('.lh-load-opportunity__col--one', tmpl).textContent =\n        Util.UIStrings.opportunityResourceColumnLabel;\n      this.dom.find('.lh-load-opportunity__col--two', tmpl).textContent =\n        Util.UIStrings.opportunitySavingsColumnLabel;\n\n      const headerEl = this.dom.find('.lh-load-opportunity__header', tmpl);\n      groupEl.appendChild(headerEl);\n      opportunityAudits.forEach(item => groupEl.appendChild(this._renderOpportunity(item, scale)));\n      groupEl.classList.add('lh-audit-group--load-opportunities');\n      element.appendChild(groupEl);\n    }\n\n    // Diagnostics\n    const diagnosticAudits = category.auditRefs\n        .filter(audit => audit.group === 'diagnostics' && !Util.showAsPassed(audit.result))\n        .sort((a, b) => {\n          const scoreA = a.result.scoreDisplayMode === 'informative' ? 100 : Number(a.result.score);\n          const scoreB = b.result.scoreDisplayMode === 'informative' ? 100 : Number(b.result.score);\n          return scoreA - scoreB;\n        });\n\n    if (diagnosticAudits.length) {\n      const groupEl = this.renderAuditGroup(groups['diagnostics']);\n      diagnosticAudits.forEach(item => groupEl.appendChild(this.renderAudit(item)));\n      groupEl.classList.add('lh-audit-group--diagnostics');\n      element.appendChild(groupEl);\n    }\n\n    // Passed audits\n    const passedAudits = category.auditRefs\n        .filter(audit => (audit.group === 'load-opportunities' || audit.group === 'diagnostics') &&\n            Util.showAsPassed(audit.result));\n\n    if (!passedAudits.length) return element;\n\n    const clumpOpts = {\n      auditRefs: passedAudits,\n      groupDefinitions: groups,\n    };\n    const passedElem = this.renderClump('passed', clumpOpts);\n    element.appendChild(passedElem);\n    return element;\n  }\n}\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = PerformanceCategoryRenderer;\n} else {\n  self.PerformanceCategoryRenderer = PerformanceCategoryRenderer;\n}\n",
  "/**\n * @license\n * Copyright 2018 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/* globals self, Util, CategoryRenderer */\n\n/**\n * An always-increasing counter for making unique SVG ID suffixes.\n */\nconst getUniqueSuffix = (() => {\n  let svgSuffix = 0;\n  return function() {\n    return svgSuffix++;\n  };\n})();\n\nclass PwaCategoryRenderer extends CategoryRenderer {\n  /**\n   * @param {LH.ReportResult.Category} category\n   * @param {Object<string, LH.Result.ReportGroup>} [groupDefinitions]\n   * @return {Element}\n   */\n  render(category, groupDefinitions = {}) {\n    const categoryElem = this.dom.createElement('div', 'lh-category');\n    this.createPermalinkSpan(categoryElem, category.id);\n    categoryElem.appendChild(this.renderCategoryHeader(category, groupDefinitions));\n\n    const auditRefs = category.auditRefs;\n\n    // Regular audits aren't split up into pass/fail/notApplicable clumps, they're\n    // all put in a top-level clump that isn't expandable/collapsible.\n    const regularAuditRefs = auditRefs.filter(ref => ref.result.scoreDisplayMode !== 'manual');\n    const auditsElem = this._renderAudits(regularAuditRefs, groupDefinitions);\n    categoryElem.appendChild(auditsElem);\n\n    // Manual audits are still in a manual clump.\n    const manualAuditRefs = auditRefs.filter(ref => ref.result.scoreDisplayMode === 'manual');\n    const manualElem = this.renderClump('manual',\n      {auditRefs: manualAuditRefs, description: category.manualDescription});\n    categoryElem.appendChild(manualElem);\n\n    return categoryElem;\n  }\n\n  /**\n   * @param {LH.ReportResult.Category} category\n   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions\n   * @return {DocumentFragment}\n   */\n  renderScoreGauge(category, groupDefinitions) {\n    // Defer to parent-gauge style if category error.\n    if (category.score === null) {\n      return super.renderScoreGauge(category, groupDefinitions);\n    }\n\n    const tmpl = this.dom.cloneTemplate('#tmpl-lh-gauge--pwa', this.templateContext);\n    const wrapper = /** @type {HTMLAnchorElement} */ (this.dom.find('.lh-gauge--pwa__wrapper',\n      tmpl));\n    wrapper.href = `#${category.id}`;\n\n    // Correct IDs in case multiple instances end up in the page.\n    const svgRoot = tmpl.querySelector('svg');\n    if (!svgRoot) throw new Error('no SVG element found in PWA score gauge template');\n    PwaCategoryRenderer._makeSvgReferencesUnique(svgRoot);\n\n    const allGroups = this._getGroupIds(category.auditRefs);\n    const passingGroupIds = this._getPassingGroupIds(category.auditRefs);\n\n    if (passingGroupIds.size === allGroups.size) {\n      wrapper.classList.add('lh-badged--all');\n    } else {\n      for (const passingGroupId of passingGroupIds) {\n        wrapper.classList.add(`lh-badged--${passingGroupId}`);\n      }\n    }\n\n    this.dom.find('.lh-gauge__label', tmpl).textContent = category.title;\n    wrapper.title = this._getGaugeTooltip(category.auditRefs, groupDefinitions);\n    return tmpl;\n  }\n\n  /**\n   * Returns the group IDs found in auditRefs.\n   * @param {Array<LH.ReportResult.AuditRef>} auditRefs\n   * @return {Set<string>}\n   */\n  _getGroupIds(auditRefs) {\n    const groupIds = auditRefs.map(ref => ref.group).filter(/** @return {g is string} */ g => !!g);\n    return new Set(groupIds);\n  }\n\n  /**\n   * Returns the group IDs whose audits are all considered passing.\n   * @param {Array<LH.ReportResult.AuditRef>} auditRefs\n   * @return {Set<string>}\n   */\n  _getPassingGroupIds(auditRefs) {\n    const uniqueGroupIds = this._getGroupIds(auditRefs);\n\n    // Remove any that have a failing audit.\n    for (const auditRef of auditRefs) {\n      if (!Util.showAsPassed(auditRef.result) && auditRef.group) {\n        uniqueGroupIds.delete(auditRef.group);\n      }\n    }\n\n    return uniqueGroupIds;\n  }\n\n  /**\n   * Returns a tooltip string summarizing group pass rates.\n   * @param {Array<LH.ReportResult.AuditRef>} auditRefs\n   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions\n   * @return {string}\n   */\n  _getGaugeTooltip(auditRefs, groupDefinitions) {\n    const groupIds = this._getGroupIds(auditRefs);\n\n    const tips = [];\n    for (const groupId of groupIds) {\n      const groupAuditRefs = auditRefs.filter(ref => ref.group === groupId);\n      const auditCount = groupAuditRefs.length;\n      const passedCount = groupAuditRefs.filter(ref => Util.showAsPassed(ref.result)).length;\n\n      const title = groupDefinitions[groupId].title;\n      tips.push(`${title}: ${passedCount}/${auditCount}`);\n    }\n\n    return tips.join(', ');\n  }\n\n  /**\n   * Render non-manual audits in groups, giving a badge to any group that has\n   * all passing audits.\n   * @param {Array<LH.ReportResult.AuditRef>} auditRefs\n   * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions\n   * @return {Element}\n   */\n  _renderAudits(auditRefs, groupDefinitions) {\n    const auditsElem = this.renderUnexpandableClump(auditRefs, groupDefinitions);\n\n    // Add a 'badged' class to group if all audits in that group pass.\n    const passsingGroupIds = this._getPassingGroupIds(auditRefs);\n    for (const groupId of passsingGroupIds) {\n      const groupElem = this.dom.find(`.lh-audit-group--${groupId}`, auditsElem);\n      groupElem.classList.add('lh-badged');\n    }\n\n    return auditsElem;\n  }\n\n  /**\n   * Alters SVG id references so multiple instances of an SVG element can coexist\n   * in a single page. If `svgRoot` has a `<defs>` block, gives all elements defined\n   * in it unique ids, then updates id references (`<use xlink:href=\"...\">`,\n   * `fill=\"url(#...)\"`) to the altered ids in all descendents of `svgRoot`.\n   * @param {SVGElement} svgRoot\n   */\n  static _makeSvgReferencesUnique(svgRoot) {\n    const defsEl = svgRoot.querySelector('defs');\n    if (!defsEl) return;\n\n    const idSuffix = getUniqueSuffix();\n    const elementsToUpdate = defsEl.querySelectorAll('[id]');\n    for (const el of elementsToUpdate) {\n      const oldId = el.id;\n      const newId = `${oldId}-${idSuffix}`;\n      el.id = newId;\n\n      // Update all <use>s.\n      const useEls = svgRoot.querySelectorAll(`use[href=\"#${oldId}\"]`);\n      for (const useEl of useEls) {\n        useEl.setAttribute('href', `#${newId}`);\n      }\n\n      // Update all fill=\"url(#...)\"s.\n      const fillEls = svgRoot.querySelectorAll(`[fill=\"url(#${oldId})\"]`);\n      for (const fillEl of fillEls) {\n        fillEl.setAttribute('fill', `url(#${newId})`);\n      }\n    }\n  }\n}\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = PwaCategoryRenderer;\n} else {\n  self.PwaCategoryRenderer = PwaCategoryRenderer;\n}\n",
  "/**\n * @license\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n'use strict';\n\n/**\n * @fileoverview The entry point for rendering the Lighthouse report based on the JSON output.\n *    This file is injected into the report HTML along with the JSON report.\n *\n * Dummy text for ensuring report robustness: </script> pre$`post %%LIGHTHOUSE_JSON%%\n */\n\n/** @typedef {import('./dom.js')} DOM */\n\n/* globals self, Util, DetailsRenderer, CategoryRenderer, PerformanceCategoryRenderer, PwaCategoryRenderer */\n\nclass ReportRenderer {\n  /**\n   * @param {DOM} dom\n   */\n  constructor(dom) {\n    /** @type {DOM} */\n    this._dom = dom;\n    /** @type {ParentNode} */\n    this._templateContext = this._dom.document();\n  }\n\n  /**\n   * @param {LH.Result} result\n   * @param {Element} container Parent element to render the report into.\n   * @return {Element}\n   */\n  renderReport(result, container) {\n    // Mutate the UIStrings if necessary (while saving originals)\n    const originalUIStrings = JSON.parse(JSON.stringify(Util.UIStrings));\n\n    this._dom.setLighthouseChannel(result.configSettings.channel || 'unknown');\n\n    const report = Util.prepareReportResult(result);\n\n    container.textContent = ''; // Remove previous report.\n    container.appendChild(this._renderReport(report));\n\n    // put the UIStrings back into original state\n    Util.updateAllUIStrings(originalUIStrings);\n\n    return container;\n  }\n\n  /**\n   * Define a custom element for <templates> to be extracted from. For example:\n   *     this.setTemplateContext(new DOMParser().parseFromString(htmlStr, 'text/html'))\n   * @param {ParentNode} context\n   */\n  setTemplateContext(context) {\n    this._templateContext = context;\n  }\n\n  /**\n   * @param {LH.ReportResult} report\n   * @return {DocumentFragment}\n   */\n  _renderReportTopbar(report) {\n    const el = this._dom.cloneTemplate('#tmpl-lh-topbar', this._templateContext);\n    const metadataUrl = /** @type {HTMLAnchorElement} */ (this._dom.find('.lh-topbar__url', el));\n    metadataUrl.href = metadataUrl.textContent = report.finalUrl;\n    return el;\n  }\n\n  /**\n   * @return {DocumentFragment}\n   */\n  _renderReportHeader() {\n    const el = this._dom.cloneTemplate('#tmpl-lh-heading', this._templateContext);\n    const domFragment = this._dom.cloneTemplate('#tmpl-lh-scores-wrapper', this._templateContext);\n    const placeholder = this._dom.find('.lh-scores-wrapper-placeholder', el);\n    /** @type {HTMLDivElement} */ (placeholder.parentNode).replaceChild(domFragment, placeholder);\n    return el;\n  }\n\n  /**\n   * @param {LH.ReportResult} report\n   * @return {DocumentFragment}\n   */\n  _renderReportFooter(report) {\n    const footer = this._dom.cloneTemplate('#tmpl-lh-footer', this._templateContext);\n\n    const env = this._dom.find('.lh-env__items', footer);\n    env.id = 'runtime-settings';\n    const envValues = Util.getEnvironmentDisplayValues(report.configSettings || {});\n    [\n      {name: 'URL', description: report.finalUrl},\n      {name: 'Fetch time', description: Util.formatDateTime(report.fetchTime)},\n      ...envValues,\n      {name: 'User agent (host)', description: report.userAgent},\n      {name: 'User agent (network)', description: report.environment &&\n        report.environment.networkUserAgent},\n      {name: 'CPU/Memory Power', description: report.environment &&\n        report.environment.benchmarkIndex.toFixed(0)},\n    ].forEach(runtime => {\n      if (!runtime.description) return;\n\n      const item = this._dom.cloneTemplate('#tmpl-lh-env__items', env);\n      this._dom.find('.lh-env__name', item).textContent = runtime.name;\n      this._dom.find('.lh-env__description', item).textContent = runtime.description;\n      env.appendChild(item);\n    });\n\n    this._dom.find('.lh-footer__version', footer).textContent = report.lighthouseVersion;\n    return footer;\n  }\n\n  /**\n   * Returns a div with a list of top-level warnings, or an empty div if no warnings.\n   * @param {LH.ReportResult} report\n   * @return {Node}\n   */\n  _renderReportWarnings(report) {\n    if (!report.runWarnings || report.runWarnings.length === 0) {\n      return this._dom.createElement('div');\n    }\n\n    const container = this._dom.cloneTemplate('#tmpl-lh-warnings--toplevel', this._templateContext);\n    const message = this._dom.find('.lh-warnings__msg', container);\n    message.textContent = Util.UIStrings.toplevelWarningsMessage;\n\n    const warnings = this._dom.find('ul', container);\n    for (const warningString of report.runWarnings) {\n      const warning = warnings.appendChild(this._dom.createElement('li'));\n      warning.textContent = warningString;\n    }\n\n    return container;\n  }\n\n  /**\n   * @param {LH.ReportResult} report\n   * @param {CategoryRenderer} categoryRenderer\n   * @param {Record<string, CategoryRenderer>} specificCategoryRenderers\n   * @return {DocumentFragment[]}\n   */\n  _renderScoreGauges(report, categoryRenderer, specificCategoryRenderers) {\n    // Group gauges in this order: default, pwa, plugins.\n    const defaultGauges = [];\n    const customGauges = []; // PWA.\n    const pluginGauges = [];\n\n    for (const category of Object.values(report.categories)) {\n      const renderer = specificCategoryRenderers[category.id] || categoryRenderer;\n      const categoryGauge = renderer.renderScoreGauge(category, report.categoryGroups || {});\n\n      if (Util.isPluginCategory(category.id)) {\n        pluginGauges.push(categoryGauge);\n      } else if (renderer.renderScoreGauge === categoryRenderer.renderScoreGauge) {\n        // The renderer for default categories is just the default CategoryRenderer.\n        // If the functions are equal, then renderer is an instance of CategoryRenderer.\n        // For example, the PWA category uses PwaCategoryRenderer, which overrides\n        // CategoryRenderer.renderScoreGauge, so it would fail this check and be placed\n        // in the customGauges bucket.\n        defaultGauges.push(categoryGauge);\n      } else {\n        customGauges.push(categoryGauge);\n      }\n    }\n\n    return [...defaultGauges, ...customGauges, ...pluginGauges];\n  }\n\n  /**\n   * @param {LH.ReportResult} report\n   * @return {DocumentFragment}\n   */\n  _renderReport(report) {\n    const detailsRenderer = new DetailsRenderer(this._dom);\n    const categoryRenderer = new CategoryRenderer(this._dom, detailsRenderer);\n    categoryRenderer.setTemplateContext(this._templateContext);\n\n    /** @type {Record<string, CategoryRenderer>} */\n    const specificCategoryRenderers = {\n      performance: new PerformanceCategoryRenderer(this._dom, detailsRenderer),\n      pwa: new PwaCategoryRenderer(this._dom, detailsRenderer),\n    };\n    Object.values(specificCategoryRenderers).forEach(renderer => {\n      renderer.setTemplateContext(this._templateContext);\n    });\n\n    const headerContainer = this._dom.createElement('div');\n    headerContainer.appendChild(this._renderReportHeader());\n\n    const reportContainer = this._dom.createElement('div', 'lh-container');\n    const reportSection = this._dom.createElement('div', 'lh-report');\n    reportSection.appendChild(this._renderReportWarnings(report));\n\n    let scoreHeader;\n    const isSoloCategory = Object.keys(report.categories).length === 1;\n    if (!isSoloCategory) {\n      scoreHeader = this._dom.createElement('div', 'lh-scores-header');\n    } else {\n      headerContainer.classList.add('lh-header--solo-category');\n    }\n\n    if (scoreHeader) {\n      const scoreScale = this._dom.cloneTemplate('#tmpl-lh-scorescale', this._templateContext);\n      const scoresContainer = this._dom.find('.lh-scores-container', headerContainer);\n      scoreHeader.append(\n        ...this._renderScoreGauges(report, categoryRenderer, specificCategoryRenderers));\n      scoresContainer.appendChild(scoreHeader);\n      scoresContainer.appendChild(scoreScale);\n\n      const stickyHeader = this._dom.createElement('div', 'lh-sticky-header');\n      stickyHeader.append(\n        ...this._renderScoreGauges(report, categoryRenderer, specificCategoryRenderers));\n      reportContainer.appendChild(stickyHeader);\n    }\n\n    const categories = reportSection.appendChild(this._dom.createElement('div', 'lh-categories'));\n    for (const category of Object.values(report.categories)) {\n      const renderer = specificCategoryRenderers[category.id] || categoryRenderer;\n      // .lh-category-wrapper is full-width and provides horizontal rules between categories.\n      // .lh-category within has the max-width: var(--report-width);\n      const wrapper = renderer.dom.createChildOf(categories, 'div', 'lh-category-wrapper');\n      wrapper.appendChild(renderer.render(category, report.categoryGroups));\n    }\n\n    const reportFragment = this._dom.createFragment();\n    const topbarDocumentFragment = this._renderReportTopbar(report);\n\n    reportFragment.appendChild(topbarDocumentFragment);\n    reportFragment.appendChild(reportContainer);\n    reportContainer.appendChild(headerContainer);\n    reportContainer.appendChild(reportSection);\n    reportSection.appendChild(this._renderReportFooter(report));\n\n    return reportFragment;\n  }\n}\n\n/** @type {LH.I18NRendererStrings} */\nReportRenderer._UIStringsStash = {};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = ReportRenderer;\n} else {\n  self.ReportRenderer = ReportRenderer;\n}\n",
].join(';\n');
const REPORT_CSS = "/**\n * @license\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS-IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n/*\n  Naming convention:\n\n  If a variable is used for a specific component: --{component}-{property name}-{modifier}\n\n  Both {component} and {property name} should be kebab-case. If the target is the entire page,\n  use 'report' for the component. The property name should not be abbreviated. Use the\n  property name the variable is intended for - if it's used for multiple, a common descriptor\n  is fine (ex: 'size' for a variable applied to 'width' and 'height'). If a variable is shared\n  across multiple components, either create more variables or just drop the \"{component}-\"\n  part of the name. Append any modifiers at the end (ex: 'big', 'dark').\n\n  For colors: --color-{hue}-{intensity}\n\n  {intensity} is the Material Design tag - 700, A700, etc.\n*/\n.lh-vars {\n  /* Palette using Material Design Colors\n   * https://www.materialui.co/colors */\n  --color-amber-50: #FFF8E1;\n  --color-blue-200: #90CAF9;\n  --color-blue-900: #0D47A1;\n  --color-blue-A700: #2962FF;\n  --color-cyan-500: #00BCD4;\n  --color-gray-100: #F5F5F5;\n  --color-gray-200: #E0E0E0;\n  --color-gray-400: #BDBDBD;\n  --color-gray-50: #FAFAFA;\n  --color-gray-500: #9E9E9E;\n  --color-gray-600: #757575;\n  --color-gray-800: #424242;\n  --color-gray-900: #212121;\n  --color-gray: #000000;\n  --color-green-700: #018642;\n  --color-green: #0CCE6B;\n  --color-orange-700: #D04900;\n  --color-orange: #FFA400;\n  --color-red-700: #EB0F00;\n  --color-red: #FF4E42;\n  --color-teal-600: #00897B;\n  --color-white: #FFFFFF;\n\n  /* Context-specific colors */\n  --color-average-secondary: var(--color-orange-700);\n  --color-average: var(--color-orange);\n  --color-fail-secondary: var(--color-red-700);\n  --color-fail: var(--color-red);\n  --color-informative: var(--color-blue-900);\n  --color-pass-secondary: var(--color-green-700);\n  --color-pass: var(--color-green);\n  --color-hover: var(--color-gray-50);\n\n  /* Component variables */\n  --audit-description-padding-left: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right));\n  --audit-explanation-line-height: 16px;\n  --audit-group-margin-bottom: 40px;\n  --audit-group-padding-vertical: 8px;\n  --audit-margin-horizontal: 5px;\n  --audit-padding-vertical: 8px;\n  --category-header-font-size: 20px;\n  --category-padding: 40px;\n  --chevron-line-stroke: var(--color-gray-600);\n  --chevron-size: 12px;\n  --default-padding: 12px;\n  --env-item-background-color: var(--color-gray-100);\n  --env-item-font-size: 28px;\n  --env-item-line-height: 36px;\n  --env-item-padding: 10px 0px;\n  --env-name-min-width: 220px;\n  --footer-padding-vertical: 16px;\n  --gauge-circle-size-big: 112px;\n  --gauge-circle-size: 80px;\n  --gauge-label-font-size-big: 28px;\n  --gauge-label-font-size: 20px;\n  --gauge-label-line-height-big: 36px;\n  --gauge-label-line-height: 26px;\n  --gauge-percentage-font-size-big: 38px;\n  --gauge-percentage-font-size: 28px;\n  --gauge-wrapper-width: 148px;\n  --header-line-height: 24px;\n  --highlighter-background-color: var(--report-text-color);\n  --icon-square-size: calc(var(--score-icon-size) * 0.88);\n  --metric-toggle-lines-fill: #7F7F7F;\n  --metrics-toggle-background-color: var(--color-gray-200);\n  --plugin-badge-background-color: var(--color-white);\n  --plugin-badge-size-big: calc(var(--gauge-circle-size-big) / 2.7);\n  --plugin-badge-size: calc(var(--gauge-circle-size) / 2.7);\n  --plugin-icon-size: 65%;\n  --pwa-icon-margin: 0 6px 0 -2px;\n  --pwa-icon-size: var(--topbar-logo-size);\n  --report-background-color: #fff;\n  --report-border-color-secondary: #ebebeb;\n  --report-font-family-monospace: 'Roboto Mono', 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;\n  --report-font-family: Roboto, Helvetica, Arial, sans-serif;\n  --report-font-size: 16px;\n  --report-line-height: 24px;\n  --report-min-width: 400px;\n  --report-text-color-secondary: var(--color-gray-800);\n  --report-text-color: var(--color-gray-900);\n  --report-width: calc(60 * var(--report-font-size));\n  --score-container-padding: 8px;\n  --score-icon-background-size: 24px;\n  --score-icon-margin-left: 4px;\n  --score-icon-margin-right: 12px;\n  --score-icon-margin: 0 var(--score-icon-margin-right) 0 var(--score-icon-margin-left);\n  --score-icon-size: 12px;\n  --scores-container-padding: 20px 0 20px 0;\n  --scorescale-height: 6px;\n  --scorescale-width: 18px;\n  --section-padding-vertical: 12px;\n  --snippet-background-color: var(--color-gray-50);\n  --snippet-color: var(--color-gray-800);\n  --sparkline-height: 5px;\n  --stackpack-padding-horizontal: 10px;\n  --sticky-header-background-color: var(--report-background-color);\n  --table-higlight-background-color: hsla(0, 0%, 75%, 0.1);\n  --tools-icon-color: var(--color-gray-600);\n  --tools-icon-size: var(--score-icon-background-size);\n  --topbar-background-color: var(--color-gray-100);\n  --topbar-height: 32px;\n  --topbar-logo-size: 24px;\n  --topbar-padding: 0 8px;\n  --toplevel-warning-padding: 22px;\n\n  /* SVGs */\n  --plugin-icon-url-dark: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"%23FFFFFF\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z\"/></svg>');\n  --plugin-icon-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"%23757575\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z\"/></svg>');\n\n  --pass-icon-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><title>check</title><path fill=\"%23178239\" d=\"M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z\"/></svg>');\n  --average-icon-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><title>info</title><path fill=\"%23E67700\" d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z\"/></svg>');\n  --fail-icon-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><title>warn</title><path fill=\"%23C7221F\" d=\"M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z\"/></svg>');\n\n  --pwa-fast-reliable-gray-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"nonzero\"><circle fill=\"%23DAE0E3\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M12.3 4l6.3 2.8V11c0 3.88-2.69 7.52-6.3 8.4C8.69 18.52 6 14.89 6 11V6.8L12.3 4zm-.56 12.88l3.3-5.79.04-.08c.05-.1.01-.29-.26-.29h-1.96l.56-3.92h-.56L9.6 12.52c0 .03.07-.12-.03.07-.11.2-.12.37.2.37h1.97l-.56 3.92h.56z\" fill=\"%23FFF\"/></g></svg>');\n  --pwa-installable-gray-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"nonzero\"><circle fill=\"%23DAE0E3\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z\" fill=\"%23FFF\"/></g></svg>');\n  --pwa-optimized-gray-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"%23DAE0E3\" width=\"24\" height=\"24\" rx=\"12\"/><path fill=\"%23FFF\" d=\"M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z\"/><path d=\"M5 5h14v14H5z\"/></g></svg>');\n\n  --pwa-fast-reliable-gray-url-dark: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"nonzero\"><circle fill=\"%23424242\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M12.3 4l6.3 2.8V11c0 3.88-2.69 7.52-6.3 8.4C8.69 18.52 6 14.89 6 11V6.8L12.3 4zm-.56 12.88l3.3-5.79.04-.08c.05-.1.01-.29-.26-.29h-1.96l.56-3.92h-.56L9.6 12.52c0 .03.07-.12-.03.07-.11.2-.12.37.2.37h1.97l-.56 3.92h.56z\" fill=\"%23FFF\"/></g></svg>');\n  --pwa-installable-gray-url-dark: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"nonzero\"><circle fill=\"%23424242\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z\" fill=\"%23FFF\"/></g></svg>');\n  --pwa-optimized-gray-url-dark: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"%23424242\" width=\"24\" height=\"24\" rx=\"12\"/><path fill=\"%23FFF\" d=\"M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z\"/><path d=\"M5 5h14v14H5z\"/></g></svg>');\n\n  --pwa-fast-reliable-color-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"nonzero\" fill=\"none\"><circle fill=\"%230CCE6B\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M12 4.3l6.3 2.8v4.2c0 3.88-2.69 7.52-6.3 8.4-3.61-.88-6.3-4.51-6.3-8.4V7.1L12 4.3zm-.56 12.88l3.3-5.79.04-.08c.05-.1.01-.29-.26-.29h-1.96l.56-3.92h-.56L9.3 12.82c0 .03.07-.12-.03.07-.11.2-.12.37.2.37h1.97l-.56 3.92h.56z\" fill=\"%23FFF\"/></g></svg>');\n  --pwa-installable-color-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"nonzero\" fill=\"none\"><circle fill=\"%230CCE6B\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z\" fill=\"%23FFF\"/></g></svg>');\n  --pwa-optimized-color-url: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"%230CCE6B\" width=\"24\" height=\"24\" rx=\"12\"/><path d=\"M5 5h14v14H5z\"/><path fill=\"%23FFF\" d=\"M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z\"/></g></svg>');\n}\n\n@media not print {\n  .lh-vars.dark {\n    /* Pallete */\n    --color-gray-200: var(--color-gray-800);\n    --color-gray-400: var(--color-gray-600);\n    --color-gray-50: #757575;\n    --color-gray-600: var(--color-gray-500);\n    --color-green-700: var(--color-green);\n    --color-orange-700: var(--color-orange);\n    --color-red-700: var(--color-red);\n    --color-teal-600: var(--color-cyan-500);\n\n    /* Context-specific colors */\n    --color-hover: rgba(0, 0, 0, 0.2);\n    --color-informative: var(--color-blue-200);\n\n    /* Component variables */\n    --env-item-background-color: var(--color-gray);\n    --plugin-badge-background-color: var(--color-gray-800);\n    --report-background-color: var(--color-gray-900);\n    --report-border-color-secondary: var(--color-gray-200);\n    --report-text-color-secondary: var(--color-gray-400);\n    --report-text-color: var(--color-gray-100);\n    --topbar-background-color: var(--color-gray);\n\n    /* SVGs */\n    --plugin-icon-url: var(--plugin-icon-url-dark);\n    --pwa-fast-reliable-gray-url: var(--pwa-fast-reliable-gray-url-dark);\n    --pwa-installable-gray-url: var(--pwa-installable-gray-url-dark);\n    --pwa-optimized-gray-url: var(--pwa-optimized-gray-url-dark);\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .lh-vars {\n    --audit-group-margin-bottom: 20px;\n    --category-padding: 24px;\n    --env-name-min-width: 120px;\n    --gauge-circle-size-big: 96px;\n    --gauge-circle-size: 72px;\n    --gauge-label-font-size-big: 22px;\n    --gauge-label-font-size: 14px;\n    --gauge-label-line-height-big: 26px;\n    --gauge-label-line-height: 20px;\n    --gauge-percentage-font-size-big: 34px;\n    --gauge-percentage-font-size: 26px;\n    --gauge-wrapper-width: 112px;\n    --header-padding: 16px 0 16px 0;\n    --plugin-icon-size: 75%;\n    --pwa-icon-margin: 0 7px 0 -3px;\n    --report-font-size: 14px;\n    --report-line-height: 20px;\n    --score-icon-margin-left: 2px;\n    --score-icon-size: 10px;\n    --topbar-height: 28px;\n    --topbar-logo-size: 20px;\n  }\n\n  /* Not enough space to adequately show the relative savings bars. */\n  .lh-sparkline {\n    display: none;\n  }\n}\n\n.lh-vars.lh-devtools {\n  --audit-explanation-line-height: 14px;\n  --audit-group-margin-bottom: 20px;\n  --audit-group-padding-vertical: 12px;\n  --audit-padding-vertical: 4px;\n  --category-header-font-size: 16px;\n  --category-padding: 12px;\n  --default-padding: 12px;\n  --env-name-min-width: 120px;\n  --footer-padding-vertical: 8px;\n  --gauge-circle-size-big: 72px;\n  --gauge-circle-size: 64px;\n  --gauge-label-font-size-big: 22px;\n  --gauge-label-font-size: 14px;\n  --gauge-label-line-height-big: 26px;\n  --gauge-label-line-height: 20px;\n  --gauge-percentage-font-size-big: 34px;\n  --gauge-percentage-font-size: 26px;\n  --gauge-wrapper-width: 97px;\n  --header-line-height: 20px;\n  --header-padding: 16px 0 16px 0;\n  --plugin-icon-size: 75%;\n  --pwa-icon-margin: 0 7px 0 -3px;\n  --report-font-family-monospace: 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;\n  --report-font-family: '.SFNSDisplay-Regular', 'Helvetica Neue', 'Lucida Grande', sans-serif;\n  --report-font-size: 12px;\n  --report-line-height: 20px;\n  --score-icon-margin-left: 2px;\n  --score-icon-size: 10px;\n  --section-padding-vertical: 8px;\n}\n\n.lh-devtools.lh-root {\n  height: 100%;\n}\n.lh-devtools .lh-container {\n  overflow-y: scroll;\n  height: calc(100% - var(--topbar-height));\n}\n@media print {\n  .lh-devtools .lh-container {\n    overflow: unset;\n  }\n}\n.lh-devtools .lh-sticky-header {\n  /* This is normally the height of the topbar, but we want it to stick to the top of our scroll container .lh-container` */\n  top: 0;\n}\n\n@keyframes fadeIn {\n  0% { opacity: 0;}\n  100% { opacity: 0.6;}\n}\n\n.lh-root *, .lh-root *::before, .lh-root *::after {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n}\n\n.lh-root {\n  font-family: var(--report-font-family);\n  font-size: var(--report-font-size);\n  margin: 0;\n  line-height: var(--report-line-height);\n  background: var(--report-background-color);\n  scroll-behavior: smooth;\n  color: var(--report-text-color);\n}\n\n.lh-root :focus {\n    outline: -webkit-focus-ring-color auto 3px;\n}\n.lh-root summary:focus {\n    outline: none;\n    box-shadow: 0 0 0 1px hsl(217, 89%, 61%);\n}\n\n.lh-root [hidden] {\n  display: none !important;\n}\n\n.lh-root details > summary {\n  cursor: pointer;\n}\n\n.lh-container {\n  /*\n  Text wrapping in the report is so much FUN!\n  We have a `word-break: break-word;` globally here to prevent a few common scenarios, namely\n  long non-breakable text (usually URLs) found in:\n    1. The footer\n    2. .lh-node (outerHTML)\n    3. .lh-code\n\n  With that sorted, the next challenge is appropriate column sizing and text wrapping inside our\n  .lh-details tables. Even more fun.\n    * We don't want table headers (\"Potential Savings (ms)\") to wrap or their column values, but\n    we'd be happy for the URL column to wrap if the URLs are particularly long.\n    * We want the narrow columns to remain narrow, providing the most column width for URL\n    * We don't want the table to extend past 100% width.\n    * Long URLs in the URL column can wrap. Util.getURLDisplayName maxes them out at 64 characters,\n      but they do not get any overflow:ellipsis treatment.\n  */\n  word-break: break-word;\n}\n\n.lh-audit-group a,\n.lh-category-header__description a,\n.lh-audit__description a,\n.lh-footer a {\n  color: var(--color-informative);\n}\n\n.lh-audit__description, .lh-audit__stackpack {\n  --inner-audit-padding-right: var(--stackpack-padding-horizontal);\n  padding-left: var(--audit-description-padding-left);\n  padding-right: var(--inner-audit-padding-right);\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.lh-details {\n  font-size: var(--report-font-size);\n  margin-top: var(--default-padding);\n  margin-bottom: var(--default-padding);\n  margin-left: var(--audit-description-padding-left);\n  /* whatever the .lh-details side margins are */\n  width: 100%;\n}\n\n.lh-details.flex .lh-code {\n  max-width: 70%;\n}\n\n.lh-audit__stackpack {\n  display: flex;\n  align-items: center;\n}\n\n.lh-audit__stackpack__img {\n  max-width: 50px;\n  margin-right: var(--default-padding)\n}\n\n/* Report header */\n\n.report-icon {\n  opacity: 0.7;\n}\n.report-icon:hover {\n  opacity: 1;\n}\n.report-icon[disabled] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.report-icon--print {\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"/><path fill=\"none\" d=\"M0 0h24v24H0z\"/></svg>');\n}\n.report-icon--copy {\n  background-image: url('data:image/svg+xml;utf8,<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"/></svg>');\n}\n.report-icon--open {\n  background-image: url('data:image/svg+xml;utf8,<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z\"/></svg>');\n}\n.report-icon--download {\n  background-image: url('data:image/svg+xml;utf8,<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>');\n}\n.report-icon--dark {\n  background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 100 125\"><path d=\"M50 23.587c-16.27 0-22.799 12.574-22.799 21.417 0 12.917 10.117 22.451 12.436 32.471h20.726c2.32-10.02 12.436-19.554 12.436-32.471 0-8.843-6.528-21.417-22.799-21.417zM39.637 87.161c0 3.001 1.18 4.181 4.181 4.181h.426l.41 1.231C45.278 94.449 46.042 95 48.019 95h3.963c1.978 0 2.74-.551 3.365-2.427l.409-1.231h.427c3.002 0 4.18-1.18 4.18-4.181V80.91H39.637v6.251zM50 18.265c1.26 0 2.072-.814 2.072-2.073v-9.12C52.072 5.813 51.26 5 50 5c-1.259 0-2.072.813-2.072 2.073v9.12c0 1.259.813 2.072 2.072 2.072zM68.313 23.727c.994.774 2.135.634 2.91-.357l5.614-7.187c.776-.992.636-2.135-.356-2.909-.992-.776-2.135-.636-2.91.357l-5.613 7.186c-.778.993-.636 2.135.355 2.91zM91.157 36.373c-.306-1.222-1.291-1.815-2.513-1.51l-8.85 2.207c-1.222.305-1.814 1.29-1.51 2.512.305 1.223 1.291 1.814 2.513 1.51l8.849-2.206c1.223-.305 1.816-1.291 1.511-2.513zM86.757 60.48l-8.331-3.709c-1.15-.512-2.225-.099-2.736 1.052-.512 1.151-.1 2.224 1.051 2.737l8.33 3.707c1.15.514 2.225.101 2.736-1.05.513-1.149.1-2.223-1.05-2.737zM28.779 23.37c.775.992 1.917 1.131 2.909.357.992-.776 1.132-1.917.357-2.91l-5.615-7.186c-.775-.992-1.917-1.132-2.909-.357s-1.131 1.917-.356 2.909l5.614 7.187zM21.715 39.583c.305-1.223-.288-2.208-1.51-2.513l-8.849-2.207c-1.222-.303-2.208.289-2.513 1.511-.303 1.222.288 2.207 1.511 2.512l8.848 2.206c1.222.304 2.208-.287 2.513-1.509zM21.575 56.771l-8.331 3.711c-1.151.511-1.563 1.586-1.05 2.735.511 1.151 1.586 1.563 2.736 1.052l8.331-3.711c1.151-.511 1.563-1.586 1.05-2.735-.512-1.15-1.585-1.562-2.736-1.052z\"/></svg>');\n}\n\n/* Node */\n.lh-node__snippet {\n  font-family: var(--report-font-family-monospace);\n  color: var(--color-teal-600);\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\n/* Score */\n\n.lh-audit__score-icon {\n  width: var(--score-icon-size);\n  height: var(--score-icon-size);\n  margin: var(--score-icon-margin);\n}\n\n.lh-audit--pass .lh-audit__display-text {\n  color: var(--color-pass-secondary);\n}\n.lh-audit--pass .lh-audit__score-icon {\n  border-radius: 100%;\n  background: var(--color-pass);\n}\n\n.lh-audit--average .lh-audit__display-text {\n  color: var(--color-average-secondary);\n}\n.lh-audit--average .lh-audit__score-icon {\n  background: var(--color-average);\n  width: var(--icon-square-size);\n  height: var(--icon-square-size);\n}\n\n.lh-audit--fail .lh-audit__display-text {\n  color: var(--color-fail-secondary);\n}\n.lh-audit--fail .lh-audit__score-icon,\n.lh-audit--error .lh-audit__score-icon {\n  border-left: calc(var(--score-icon-size) / 2) solid transparent;\n  border-right: calc(var(--score-icon-size) / 2) solid transparent;\n  border-bottom: var(--score-icon-size) solid var(--color-fail);\n}\n\n.lh-audit--manual .lh-audit__display-text,\n.lh-audit--notapplicable .lh-audit__display-text {\n  color: var(--color-gray-600);\n}\n.lh-audit--manual .lh-audit__score-icon,\n.lh-audit--notapplicable .lh-audit__score-icon {\n  border-radius: 100%;\n  background: var(--color-gray-400);\n}\n\n.lh-audit--informative .lh-audit__display-text {\n  color: var(--color-gray-600);\n}\n\n.lh-audit--informative .lh-audit__score-icon {\n  border: none;\n  border-radius: 100%;\n  background: var(--color-gray-400);\n}\n\n.lh-audit__description,\n.lh-audit__stackpack {\n  color: var(--report-text-color-secondary);\n}\n.lh-category-header__description  {\n  font-size: var(--report-font-size);\n  text-align: center;\n  margin: 0px auto;\n  max-width: 400px;\n}\n\n\n.lh-audit__display-text,\n.lh-load-opportunity__sparkline,\n.lh-chevron-container {\n  margin: 0 var(--audit-margin-horizontal);\n}\n.lh-chevron-container {\n  margin-right: 0;\n}\n\n.lh-audit__title-and-text {\n  flex: 1;\n}\n\n/* Prepend display text with em dash separator. But not in Opportunities. */\n.lh-audit__display-text:not(:empty):before {\n  content: '—';\n  margin-right: var(--audit-margin-horizontal);\n}\n.lh-audit-group.lh-audit-group--load-opportunities .lh-audit__display-text:not(:empty):before {\n  display: none;\n}\n\n/* Expandable Details (Audit Groups, Audits) */\n.lh-audit__header {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  padding: var(--audit-padding-vertical) 0;\n}\n\n.lh-audit--load-opportunity .lh-audit__header {\n  display: block;\n}\n\n.lh-audit__header:hover {\n  background-color: var(--color-hover);\n}\n\n/* Hide the expandable arrow icon, three ways: via the CSS Counter Styles spec, for webkit/blink browsers, hiding the polyfilled icon */\n/* https://github.com/javan/details-element-polyfill/blob/master/src/details-element-polyfill/polyfill.sass */\n.lh-audit-group > summary,\n.lh-expandable-details > summary {\n  list-style-type: none;\n}\n.lh-audit-group > summary::-webkit-details-marker,\n.lh-expandable-details > summary::-webkit-details-marker {\n  display: none;\n}\n.lh-audit-group > summary:before,\n.lh-expandable-details > summary:before {\n  display: none;\n}\n\n\n/* Perf Metric */\n\n.lh-columns {\n  display: flex;\n  width: 100%;\n}\n@media screen and (max-width: 640px) {\n  .lh-columns {\n    flex-wrap: wrap;\n\n  }\n}\n\n.lh-column {\n  flex: 1;\n}\n.lh-column:first-of-type {\n  margin-right: 24px;\n}\n\n@media screen and (max-width: 800px) {\n  .lh-column:first-of-type {\n    margin-right: 8px;\n  }\n}\n@media screen and (max-width: 640px) {\n  .lh-column {\n    flex-basis: 100%;\n  }\n  .lh-column:first-of-type {\n    margin-right: 0px;\n  }\n  .lh-column:first-of-type .lh-metric:last-of-type {\n    border-bottom: 0;\n  }\n}\n\n\n.lh-metric {\n  border-bottom: 1px solid var(--report-border-color-secondary);\n}\n.lh-metric:first-of-type {\n  border-top: 1px solid var(--report-border-color-secondary);\n}\n\n.lh-metric__innerwrap {\n  display: grid;\n  grid-template-columns: var(--audit-description-padding-left) 10fr 3fr;\n  align-items: center;\n  padding: 10px 0;\n}\n\n.lh-metric__details {\n  order: -1;\n}\n\n.lh-metric__title {\n  flex: 1;\n  font-weight: 500;\n}\n\n.lh-metrics__disclaimer {\n  color: var(--color-gray-600);\n  margin: var(--section-padding-vertical) 0;\n}\n\n.lh-metric__description {\n  display: none;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  color: var(--report-text-color-secondary);\n}\n\n.lh-metric__value {\n  white-space: nowrap; /* No wrapping between metric value and the icon */\n  font-weight: 500;\n  justify-self: end;\n}\n\n/* No-JS toggle switch */\n/* Keep this selector sync'd w/ `magicSelector` in report-ui-features-test.js */\n .lh-metrics-toggle__input:checked ~ .lh-columns .lh-metric__description {\n  display: block;\n}\n\n.lh-metrics-toggle__input {\n  cursor: pointer;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  width: 74px;\n  height: 28px;\n  top: -3px;\n}\n.lh-metrics-toggle__label {\n  display: flex;\n  background-color: #eee;\n  border-radius: 20px;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: -3px;\n  pointer-events: none;\n}\n.lh-metrics-toggle__input:focus + label {\n  outline: -webkit-focus-ring-color auto 3px;\n}\n.lh-metrics-toggle__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 5px;\n  width: 50%;\n  height: 28px;\n}\n.lh-metrics-toggle__input:not(:checked) + label .lh-metrics-toggle__icon--less,\n.lh-metrics-toggle__input:checked + label .lh-metrics-toggle__icon--more {\n  background-color: var(--color-blue-A700);\n  --metric-toggle-lines-fill: var(--color-white);\n}\n.lh-metrics-toggle__lines {\n  fill: var(--metric-toggle-lines-fill);\n}\n\n.lh-metrics-toggle__label  {\n  background-color: var(--metrics-toggle-background-color);\n}\n\n.lh-metrics-toggle__label .lh-metrics-toggle__icon--less {\n  padding-left: 8px;\n}\n.lh-metrics-toggle__label .lh-metrics-toggle__icon--more {\n  padding-right: 8px;\n}\n\n/* Pushes the metric description toggle button to the right. */\n.lh-audit-group--metrics .lh-audit-group__header {\n  display: flex;\n}\n.lh-audit-group--metrics .lh-audit-group__header span.lh-audit-group__title {\n  flex: 1;\n}\n\n.lh-metric .lh-metric__innerwrap::before {\n  content: '';\n  width: var(--score-icon-size);\n  height: var(--score-icon-size);\n  display: inline-block;\n  margin: var(--score-icon-margin);\n}\n\n.lh-metric--pass .lh-metric__value {\n  color: var(--color-pass-secondary);\n}\n.lh-metric--pass .lh-metric__innerwrap::before {\n  border-radius: 100%;\n  background: var(--color-pass);\n}\n\n.lh-metric--average .lh-metric__value {\n  color: var(--color-average-secondary);\n}\n.lh-metric--average .lh-metric__innerwrap::before {\n  background: var(--color-average);\n  width: var(--icon-square-size);\n  height: var(--icon-square-size);\n}\n\n.lh-metric--fail .lh-metric__value {\n  color: var(--color-fail-secondary);\n}\n.lh-metric--fail .lh-metric__innerwrap::before,\n.lh-metric--error .lh-metric__innerwrap::before {\n  border-left: calc(var(--score-icon-size) / 2) solid transparent;\n  border-right: calc(var(--score-icon-size) / 2) solid transparent;\n  border-bottom: var(--score-icon-size) solid var(--color-fail);\n}\n\n.lh-metric--error .lh-metric__value,\n.lh-metric--error .lh-metric__description {\n  color: var(--color-fail-secondary);\n}\n\n/* Perf load opportunity */\n\n.lh-load-opportunity__cols {\n  display: flex;\n  align-items: flex-start;\n}\n\n.lh-load-opportunity__header .lh-load-opportunity__col {\n  color: var(--color-gray-600);\n  display: unset;\n  line-height: calc(2.3 * var(--report-font-size));\n}\n\n.lh-load-opportunity__col {\n  display: flex;\n}\n\n.lh-load-opportunity__col--one {\n  flex: 5;\n  align-items: center;\n  margin-right: 2px;\n}\n.lh-load-opportunity__col--two {\n  flex: 4;\n  text-align: right;\n}\n\n.lh-audit--load-opportunity .lh-audit__display-text {\n  text-align: right;\n  flex: 0 0 calc(3 * var(--report-font-size));\n}\n\n\n/* Sparkline */\n\n.lh-load-opportunity__sparkline {\n  flex: 1;\n  margin-top: calc((var(--report-line-height) - var(--sparkline-height)) / 2);\n}\n\n.lh-sparkline {\n  height: var(--sparkline-height);\n  width: 100%;\n}\n\n.lh-sparkline__bar {\n  height: 100%;\n  float: right;\n}\n\n.lh-audit--pass .lh-sparkline__bar {\n  background: var(--color-pass);\n}\n\n.lh-audit--average .lh-sparkline__bar {\n  background: var(--color-average);\n}\n\n.lh-audit--fail .lh-sparkline__bar {\n  background: var(--color-fail);\n}\n\n\n\n/* Filmstrip */\n\n.lh-filmstrip-container {\n  /* smaller gap between metrics and filmstrip */\n  margin: -8px auto 0 auto;\n}\n\n.lh-filmstrip {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: var(--default-padding);\n}\n\n.lh-filmstrip__frame {\n  text-align: right;\n  position: relative;\n}\n\n.lh-filmstrip__thumbnail {\n  border: 1px solid var(--report-border-color-secondary);\n  max-height: 100px;\n  max-width: 60px;\n}\n\n@media screen and (max-width: 750px) {\n  .lh-filmstrip {\n    flex-wrap: wrap;\n  }\n  .lh-filmstrip__frame {\n    width: 20%;\n    margin-bottom: 5px;\n  }\n  .lh-filmstrip__thumbnail {\n    display: block;\n    margin: auto;\n  }\n}\n\n/* Audit */\n\n.lh-audit {\n  border-bottom: 1px solid var(--report-border-color-secondary);\n}\n\n/* Apply border-top to just the first audit. */\n.lh-audit {\n  border-top: 1px solid var(--report-border-color-secondary);\n}\n.lh-audit ~ .lh-audit {\n  border-top: none;\n}\n\n\n.lh-audit--error .lh-audit__display-text {\n  color: var(--color-fail);\n}\n\n/* Audit Group */\n\n.lh-audit-group {\n  margin-bottom: var(--audit-group-margin-bottom);\n  position: relative;\n}\n\n.lh-audit-group__header::before {\n  /* By default, groups don't get an icon */\n  content: none;\n  width: var(--pwa-icon-size);\n  height: var(--pwa-icon-size);\n  margin: var(--pwa-icon-margin);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n/* Style the \"over budget\" columns red. */\n.lh-audit-group--budgets .lh-table tbody tr td:nth-child(4),\n.lh-audit-group--budgets .lh-table tbody tr td:nth-child(5){\n  color: var(--color-red-700);\n}\n\n/* Align the \"over budget request count\" text to be close to the \"over budget bytes\" column. */\n.lh-audit-group--budgets .lh-table tbody tr td:nth-child(4){\n  text-align: right;\n}\n\n.lh-audit-group--budgets .lh-table {\n  width: 100%;\n}\n\n.lh-audit-group--pwa-fast-reliable .lh-audit-group__header::before {\n  content: '';\n  background-image: var(--pwa-fast-reliable-gray-url);\n}\n.lh-audit-group--pwa-installable .lh-audit-group__header::before {\n  content: '';\n  background-image: var(--pwa-installable-gray-url);\n}\n.lh-audit-group--pwa-optimized .lh-audit-group__header::before {\n  content: '';\n  background-image: var(--pwa-optimized-gray-url);\n}\n.lh-audit-group--pwa-fast-reliable.lh-badged .lh-audit-group__header::before {\n  background-image: var(--pwa-fast-reliable-color-url);\n}\n.lh-audit-group--pwa-installable.lh-badged .lh-audit-group__header::before {\n  background-image: var(--pwa-installable-color-url);\n}\n.lh-audit-group--pwa-optimized.lh-badged .lh-audit-group__header::before {\n  background-image: var(--pwa-optimized-color-url);\n}\n\n.lh-audit-group--metrics .lh-audit-group__summary {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.lh-audit-group__summary {\n  display: flex;\n  justify-content: space-between;\n  margin-top: calc(var(--category-padding) * 1.5);\n  margin-bottom: var(--category-padding);\n}\n\n.lh-audit-group__itemcount {\n  color: var(--color-gray-600);\n  font-weight: bold;\n}\n.lh-audit-group__header .lh-chevron {\n  margin-top: calc((var(--report-line-height) - 5px) / 2);\n}\n\n.lh-audit-group__header {\n  font-size: var(--report-font-size);\n  margin: 0 0 var(--audit-group-padding-vertical);\n  /* When the header takes 100% width, the chevron becomes small. */\n  max-width: calc(100% - var(--chevron-size));\n}\n/* max-width makes the metric toggle not flush. metrics doesn't have a chevron so unset. */\n.lh-audit-group--metrics .lh-audit-group__header {\n  max-width: unset;\n}\n\n.lh-audit-group__header span.lh-audit-group__title {\n  font-weight: bold;\n}\n\n.lh-audit-group__header span.lh-audit-group__itemcount {\n  font-weight: bold;\n  color: var(--color-gray-600);\n}\n\n.lh-audit-group__header span.lh-audit-group__description {\n  font-weight: 500;\n  color: var(--color-gray-600);\n}\n.lh-audit-group__header span.lh-audit-group__description::before {\n  content: '—';\n  margin: 0px var(--audit-margin-horizontal);\n}\n\n.lh-clump > .lh-audit-group__header,\n.lh-audit-group--diagnostics .lh-audit-group__header,\n.lh-audit-group--load-opportunities .lh-audit-group__header,\n.lh-audit-group--metrics .lh-audit-group__header,\n.lh-audit-group--pwa-fast-reliable .lh-audit-group__header,\n.lh-audit-group--pwa-installable .lh-audit-group__header,\n.lh-audit-group--pwa-optimized .lh-audit-group__header {\n  margin-top: var(--audit-group-padding-vertical);\n}\n\n.lh-audit-explanation {\n  margin: var(--audit-padding-vertical) 0 calc(var(--audit-padding-vertical) / 2);\n  line-height: var(--audit-explanation-line-height);\n}\n\n.lh-audit--fail .lh-audit-explanation {\n  color: var(--color-fail);\n}\n\n/* Report */\n.lh-list > div:not(:last-child) {\n  padding-bottom: 20px;\n}\n\n.lh-header-container {\n  display: block;\n  margin: 0 auto;\n  position: relative;\n  word-wrap: break-word;\n}\n\n.lh-report {\n  min-width: var(--report-min-width);\n}\n\n.lh-exception {\n  font-size: large;\n}\n\n.lh-code {\n  white-space: normal;\n  margin-top: 0;\n  font-size: 85%;\n}\n\n.lh-warnings {\n  --item-margin: calc(var(--report-line-height) / 6);\n  color: var(--color-average);\n  margin: var(--audit-padding-vertical) 0;\n  padding: calc(var(--audit-padding-vertical) / 2) var(--audit-padding-vertical);\n}\n.lh-warnings span {\n  font-weight: bold;\n}\n\n.lh-warnings--toplevel {\n  --item-margin: calc(var(--header-line-height) / 4);\n  color: var(--report-text-color-secondary);\n  margin-left: auto;\n  margin-right: auto;\n  max-width: calc(var(--report-width) - var(--category-padding) * 2);\n  background-color: var(--color-amber-50);\n  padding: var(--toplevel-warning-padding);\n}\n\n.lh-warnings ul {\n  padding-left: calc(var(--category-padding) * 2);\n  margin: 0;\n}\n.lh-warnings li {\n  margin: var(--item-margin) 0;\n}\n.lh-warnings li:last-of-type {\n  margin-bottom: 0;\n}\n\n.lh-scores-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.lh-scores-header__solo {\n  padding: 0;\n  border: 0;\n}\n\n/* Gauge */\n\n.lh-gauge__wrapper--pass {\n  color: var(--color-pass);\n  fill: var(--color-pass);\n  stroke: var(--color-pass);\n}\n\n.lh-gauge__wrapper--average {\n  color: var(--color-average);\n  fill: var(--color-average);\n  stroke: var(--color-average);\n}\n\n.lh-gauge__wrapper--fail {\n  color: var(--color-fail);\n  fill: var(--color-fail);\n  stroke: var(--color-fail);\n}\n\n.lh-gauge {\n  stroke-linecap: round;\n  width: var(--gauge-circle-size);\n  height: var(--gauge-circle-size);\n}\n\n.lh-category .lh-gauge {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n}\n\n.lh-gauge-base {\n    opacity: 0.1;\n    stroke: var(--circle-background);\n    stroke-width: var(--circle-border-width);\n}\n\n.lh-gauge-arc {\n    fill: none;\n    stroke: var(--circle-color);\n    stroke-width: var(--circle-border-width);\n    animation: load-gauge var(--transition-length) ease forwards;\n    animation-delay: 250ms;\n}\n\n.lh-gauge__svg-wrapper {\n  position: relative;\n  height: var(--gauge-circle-size);\n}\n.lh-category .lh-gauge__svg-wrapper {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n}\n\n/* The plugin badge overlay */\n.lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {\n  width: var(--plugin-badge-size);\n  height: var(--plugin-badge-size);\n  background-color: var(--plugin-badge-background-color);\n  background-image: var(--plugin-icon-url);\n  background-repeat: no-repeat;\n  background-size: var(--plugin-icon-size);\n  background-position: 58% 50%;\n  content: \"\";\n  position: absolute;\n  right: -6px;\n  bottom: 0px;\n  display: block;\n  z-index: 100;\n  box-shadow: 0 0 4px rgba(0,0,0,.2);\n  border-radius: 25%;\n}\n.lh-category .lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {\n  width: var(--plugin-badge-size-big);\n  height: var(--plugin-badge-size-big);\n}\n\n@keyframes load-gauge {\n  from { stroke-dasharray: 0 352; }\n}\n\n.lh-gauge__percentage {\n  width: 100%;\n  height: var(--gauge-circle-size);\n  position: absolute;\n  font-family: var(--report-font-family-monospace);\n  font-size: calc(var(--gauge-circle-size) * 0.34 + 1.3px);\n  line-height: 0;\n  text-align: center;\n  top: calc(var(--score-container-padding) + var(--gauge-circle-size) / 2);\n}\n\n.lh-category .lh-gauge__percentage {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n  --gauge-percentage-font-size: var(--gauge-percentage-font-size-big);\n}\n\n.lh-gauge__wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-decoration: none;\n  padding: var(--score-container-padding);\n\n  --circle-border-width: 8;\n  --transition-length: 1s;\n\n  /* Contain the layout style paint & layers during animation*/\n  contain: content;\n  will-change: opacity; /* Only using for layer promotion */\n}\n\n.lh-gauge__label {\n  font-size: var(--gauge-label-font-size);\n  line-height: var(--gauge-label-line-height);\n  margin-top: 10px;\n  text-align: center;\n  color: var(--report-text-color);\n}\n\n/* TODO(#8185) use more BEM (.lh-gauge__label--big) instead of relying on descendant selector */\n.lh-category .lh-gauge__label {\n  --gauge-label-font-size: var(--gauge-label-font-size-big);\n  --gauge-label-line-height: var(--gauge-label-line-height-big);\n  margin-top: 14px;\n}\n\n\n.lh-scores-header .lh-gauge__wrapper,\n.lh-scores-header .lh-gauge--pwa__wrapper,\n.lh-sticky-header .lh-gauge__wrapper,\n.lh-sticky-header .lh-gauge--pwa__wrapper {\n  width: var(--gauge-wrapper-width);\n}\n\n.lh-scores-header .lh-gauge--pwa__wrapper {\n  /* Can remove when this bug is resolved: https://bugs.chromium.org/p/chromium/issues/detail?id=942097 */\n  will-change: transform;\n}\n\n.lh-scorescale {\n  display: inline-flex;\n  margin: 12px auto 0 auto;\n  border: 1px solid var(--color-gray-200);\n  border-radius: 20px;\n  padding: 8px 8px;\n}\n\n.lh-scorescale-range {\n  display: flex;\n  align-items: center;\n  margin: 0 12px;\n  font-family: var(--report-font-family-monospace);\n  white-space: nowrap;\n}\n\n.lh-scorescale-range::before {\n  content: '';\n  width: var(--scorescale-width);\n  height: var(--scorescale-height);\n  border-radius: 10px;\n  display: block;\n  margin-right: 10px;\n}\n\n.lh-scorescale-range--pass::before {\n  background-color: var(--color-pass);\n}\n\n.lh-scorescale-range--average::before {\n  background-color: var(--color-average);\n}\n\n.lh-scorescale-range--fail::before {\n  background-color: var(--color-fail);\n}\n\n/* Hide category score gauages if it's a single category report */\n.lh-header--solo-category .lh-scores-wrapper {\n  display: none;\n}\n\n\n.lh-categories {\n  width: 100%;\n  overflow: hidden;\n}\n\n.lh-category {\n  padding: var(--category-padding);\n  max-width: var(--report-width);\n  margin: 0 auto;\n}\n\n.lh-category-wrapper {\n  border-bottom: 1px solid var(--color-gray-200);\n}\n\n.lh-category-wrapper:first-of-type {\n  border-top: 1px solid var(--color-gray-200);\n}\n\n/* section hash link jump should preserve fixed header\n   https://css-tricks.com/hash-tag-links-padding/\n*/\n.lh-category > .lh-permalink {\n  --sticky-header-height: calc(var(--gauge-circle-size) + var(--score-container-padding) * 2);\n  --topbar-plus-header: calc(var(--topbar-height) + var(--sticky-header-height));\n  margin-top: calc(var(--topbar-plus-header) * -1);\n  padding-bottom: var(--topbar-plus-header);\n  display: block;\n  visibility: hidden;\n}\n\n.lh-category-header {\n  font-size: var(--category-header-font-size);\n  min-height: var(--gauge-circle-size);\n  margin-bottom: var(--section-padding-vertical);\n}\n\n.lh-category-header .lh-score__gauge {\n  max-width: 400px;\n  width: auto;\n  margin: 0px auto;\n}\n\n.lh-category-header .lh-audit__title {\n  font-size: var(--category-header-font-size);\n  line-height: var(--header-line-height);\n}\n\n#lh-log {\n  position: fixed;\n  background-color: #323232;\n  color: #fff;\n  min-height: 48px;\n  min-width: 288px;\n  padding: 16px 24px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  border-radius: 2px;\n  margin: 12px;\n  font-size: 14px;\n  cursor: default;\n  transition: transform 0.3s, opacity 0.3s;\n  transform: translateY(100px);\n  opacity: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 3;\n}\n\n#lh-log.show {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n/* 964 fits the min-width of the filmstrip */\n@media screen and (max-width: 964px) {\n  .lh-report {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n\n@media print {\n  body {\n    -webkit-print-color-adjust: exact; /* print background colors */\n  }\n  .lh-container {\n    display: block;\n  }\n  .lh-report {\n    margin-left: 0;\n    padding-top: 0;\n  }\n  .lh-categories {\n    margin-top: 0;\n  }\n}\n\n.lh-table {\n  --image-preview-size: 24px;\n  border-collapse: collapse;\n  /* Can't assign padding to table, so shorten the width instead. */\n  width: calc(100% - var(--audit-description-padding-left));\n}\n\n.lh-table thead th {\n  font-weight: normal;\n  color: var(--color-gray-600);\n  /* See text-wrapping comment on .lh-container. */\n  word-break: normal;\n}\n\n.lh-table tbody tr:nth-child(odd) {\n  background-color: var(--table-higlight-background-color);\n}\n\n.lh-table th,\n.lh-table td {\n  padding: 8px 6px;\n}\n.lh-table th:first-child {\n  padding-left: 0;\n}\n.lh-table th:last-child {\n  padding-right: 0;\n}\n\n/* Looks unnecessary, but mostly for keeping the <th>s left-aligned */\n.lh-table-column--text,\n.lh-table-column--url,\n/* .lh-table-column--thumbnail, */\n/* .lh-table-column--empty,*/\n.lh-table-column--code,\n.lh-table-column--node {\n  text-align: left;\n}\n\n.lh-table-column--bytes,\n.lh-table-column--timespanMs,\n.lh-table-column--ms,\n.lh-table-column--numeric {\n  text-align: right;\n  word-break: normal;\n}\n\n\n.lh-table-column--thumbnail {\n  width: calc(var(--image-preview-size) * 2);\n}\n\n.lh-table-column--url {\n  min-width: 250px;\n}\n\n/* Keep columns narrow if they follow the URL column */\n/* 12% was determined to be a decent narrow width, but wide enough for column headings */\n.lh-table-column--url + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--ms,\n.lh-table-column--url + .lh-table-column--ms + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--timespanMs {\n  width: 12%;\n}\n\n\n.lh-text__url-host {\n  display: inline;\n}\n\n.lh-text__url-host {\n  margin-left: calc(var(--report-font-size) / 2);\n  opacity: 0.6;\n  font-size: 90%\n}\n\n.lh-thumbnail {\n  height: var(--image-preview-size);\n  width: var(--image-preview-size);\n  object-fit: contain;\n}\n\n.lh-text__url > a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.lh-text__url > a:hover {\n  text-decoration: underline dotted #999;\n}\n\n/* Chevron\n   https://codepen.io/paulirish/pen/LmzEmK\n */\n.lh-chevron {\n  --chevron-angle: 42deg;\n  /* Edge doesn't support transform: rotate(calc(...)), so we define it here */\n  --chevron-angle-right: -42deg;\n  width: var(--chevron-size);\n  height: var(--chevron-size);\n  margin-top: calc((var(--report-line-height) - 12px) / 2);\n}\n\n.lh-chevron__lines {\n  transition: transform 0.4s;\n  transform: translateY(var(--report-line-height));\n}\n.lh-chevron__line {\n stroke: var(--chevron-line-stroke);\n stroke-width: var(--chevron-size);\n stroke-linecap: square;\n transform-origin: 50%;\n transform: rotate(var(--chevron-angle));\n transition: transform 300ms, stroke 300ms;\n}\n\n.lh-audit-group > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-right,\n.lh-audit-group[open] > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-left,\n.lh-audit > .lh-expandable-details .lh-chevron__line-right,\n.lh-audit > .lh-expandable-details[open] .lh-chevron__line-left {\n transform: rotate(var(--chevron-angle-right));\n}\n\n.lh-audit-group[open] > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-right,\n.lh-audit > .lh-expandable-details[open] .lh-chevron__line-right {\n  transform: rotate(var(--chevron-angle));\n}\n\n.lh-audit-group[open] > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__lines,\n.lh-audit > .lh-expandable-details[open] .lh-chevron__lines {\n transform: translateY(calc(var(--chevron-size) * -1));\n}\n\n\n\n/* Tooltip */\n.tooltip-boundary {\n  position: relative;\n}\n\n.tooltip {\n  position: absolute;\n  display: none; /* Don't retain these layers when not needed */\n  opacity: 0;\n  background: #ffffff;\n  min-width: 246px;\n  max-width: 275px;\n  padding: 15px;\n  border-radius: 5px;\n  text-align: initial;\n}\n/* shrink tooltips to not be cutoff on left edge of narrow viewports\n   45vw is chosen to be ~= width of the left column of metrics\n*/\n@media screen and (max-width: 535px) {\n  .tooltip {\n    min-width: 45vw;\n    padding: 3vw;\n  }\n}\n\n.tooltip-boundary:hover {\n  background-color: var(--color-hover);\n}\n\n.tooltip-boundary:hover .tooltip {\n  display: block;\n  animation: fadeInTooltip 250ms;\n  animation-fill-mode: forwards;\n  animation-delay: 850ms;\n  bottom: 100%;\n  z-index: 1;\n  will-change: opacity;\n  right: 0;\n  pointer-events: none;\n}\n\n.tooltip::before {\n  content: \"\";\n  border: solid transparent;\n  border-bottom-color: #fff;\n  border-width: 10px;\n  position: absolute;\n  bottom: -20px;\n  right: 6px;\n  transform: rotate(180deg);\n  pointer-events: none;\n}\n\n@keyframes fadeInTooltip {\n  0% { opacity: 0; }\n  75% { opacity: 1; }\n  100% { opacity: 1;  filter: drop-shadow(1px 0px 1px #aaa) drop-shadow(0px 2px 4px hsla(206, 6%, 25%, 0.15)); pointer-events: auto; }\n}\n";
const REPORT_TEMPLATES = "<!--\n@license\nCopyright 2018 Google Inc. All Rights Reserved.\n\nLicensed under the Apache License, Version 2.0 (the \"License\");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an \"AS-IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n-->\n\n<!-- Lighthouse run warnings -->\n<template id=\"tmpl-lh-warnings--toplevel\">\n  <div class=\"lh-warnings lh-warnings--toplevel\">\n    <strong class=\"lh-warnings__msg\"></strong>\n    <ul></ul>\n  </div>\n</template>\n\n<!-- Lighthouse score scale -->\n<template id=\"tmpl-lh-scorescale\">\n  <div class=\"lh-scorescale\">\n      <span class=\"lh-scorescale-range lh-scorescale-range--fail\">0&ndash;49</span>\n      <span class=\"lh-scorescale-range lh-scorescale-range--average\">50&ndash;89</span>\n      <span class=\"lh-scorescale-range lh-scorescale-range--pass\">90&ndash;100</span>\n  </div>\n</template>\n\n<!-- Toggle arrow chevron -->\n<template id=\"tmpl-lh-chevron\">\n  <svg class=\"lh-chevron\" title=\"See audits\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 100 100\">\n    <g class=\"lh-chevron__lines\">\n      <path class=\"lh-chevron__line lh-chevron__line-left\" d=\"M10 50h40\"></path>\n      <path class=\"lh-chevron__line lh-chevron__line-right\" d=\"M90 50H50\"></path>\n    </g>\n  </svg>\n</template>\n\n<!-- Lighthouse category header -->\n<template id=\"tmpl-lh-category-header\">\n  <div class=\"lh-category-header\">\n    <div class=\"lh-score__gauge\"></div>\n    <div class=\"lh-category-header__description\"></div>\n  </div>\n</template>\n\n<!-- Lighthouse clump -->\n<template id=\"tmpl-lh-clump\">\n  <!-- TODO: group classes shouldn't be reused for clumps. -->\n  <details class=\"lh-clump lh-audit-group\">\n    <summary>\n      <div class=\"lh-audit-group__summary\">\n        <div class=\"lh-audit-group__header\">\n          <span class=\"lh-audit-group__title\"></span>\n          <span class=\"lh-audit-group__itemcount\"></span>\n          <!-- .lh-audit-group__description will be added here -->\n          <!-- .lh-metrics-toggle will be added here -->\n        </div>\n        <div class=\"\"></div>\n      </div>\n    </summary>\n  </details>\n</template>\n\n<!-- Lighthouse metrics toggle -->\n<template id=\"tmpl-lh-metrics-toggle\">\n  <div class=\"lh-metrics-toggle\">\n    <input class=\"lh-metrics-toggle__input\" type=\"checkbox\" id=\"toggle-metric-descriptions\" aria-label=\"Toggle the display of metric descriptions\">\n    <label class=\"lh-metrics-toggle__label\" for=\"toggle-metric-descriptions\">\n      <div class=\"lh-metrics-toggle__icon lh-metrics-toggle__icon--less\" aria-hidden=\"true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path class=\"lh-metrics-toggle__lines\" d=\"M4 9h16v2H4zm0 4h10v2H4z\" />\n        </svg>\n      </div>\n      <div class=\"lh-metrics-toggle__icon lh-metrics-toggle__icon--more\" aria-hidden=\"true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path class=\"lh-metrics-toggle__lines\" d=\"M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z\" />\n        </svg>\n      </div>\n    </label>\n  </div>\n</template>\n\n<!-- Lighthouse audit -->\n<template id=\"tmpl-lh-audit\">\n  <div class=\"lh-audit\">\n    <details class=\"lh-expandable-details\">\n      <summary>\n        <div class=\"lh-audit__header lh-expandable-details__summary\">\n          <span class=\"lh-audit__score-icon\"></span>\n          <span class=\"lh-audit__title-and-text\">\n            <span class=\"lh-audit__title\"></span>\n            <span class=\"lh-audit__display-text\"></span>\n          </span>\n          <div class=\"lh-chevron-container\"></div>\n        </div>\n      </summary>\n      <div class=\"lh-audit__description\"></div>\n      <div class=\"lh-audit__stackpacks\"></div>\n    </details>\n  </div>\n</template>\n\n<!-- Lighthouse perf metric -->\n<template id=\"tmpl-lh-metric\">\n  <div class=\"lh-metric\">\n    <div class=\"lh-metric__innerwrap\">\n      <span class=\"lh-metric__title\"></span>\n      <div class=\"lh-metric__value\"></div>\n      <div class=\"lh-metric__description\"></div>\n    </div>\n  </div>\n</template>\n\n<!-- Lighthouse perf opportunity -->\n<template id=\"tmpl-lh-opportunity\">\n  <div class=\"lh-audit lh-audit--load-opportunity\">\n    <details class=\"lh-expandable-details\">\n        <summary>\n          <div class=\"lh-audit__header lh-expandable-details__summary\">\n            <div class=\"lh-load-opportunity__cols\">\n              <div class=\"lh-load-opportunity__col lh-load-opportunity__col--one\">\n                <span class=\"lh-audit__score-icon\"></span>\n                <div class=\"lh-audit__title\"></div>\n              </div>\n              <div class=\"lh-load-opportunity__col lh-load-opportunity__col--two\">\n                <div class=\"lh-load-opportunity__sparkline\">\n                  <div class=\"lh-sparkline\"><div class=\"lh-sparkline__bar\"></div></div>\n                </div>\n                <div class=\"lh-audit__display-text\"></div>\n                <div class=\"lh-chevron-container\" title=\"See resources\"></div>\n              </div>\n            </div>\n          </div>\n        </summary>\n      <div class=\"lh-audit__description\"></div>\n      <div class=\"lh-audit__stackpacks\"></div>\n    </details>\n  </div>\n</template>\n\n<!-- Lighthouse perf opportunity header -->\n<template id=\"tmpl-lh-opportunity-header\">\n  <div class=\"lh-load-opportunity__header lh-load-opportunity__cols\">\n    <div class=\"lh-load-opportunity__col lh-load-opportunity__col--one\"></div>\n    <div class=\"lh-load-opportunity__col lh-load-opportunity__col--two\"></div>\n  </div>\n</template>\n\n<!-- Lighthouse score container -->\n<template id=\"tmpl-lh-scores-wrapper\">\n  <style>\n    .lh-scores-container {\n      display: flex;\n      flex-direction: column;\n      padding: var(--scores-container-padding);\n      position: relative;\n      width: 100%;\n    }\n\n    .lh-sticky-header {\n      --gauge-circle-size: 36px;\n      --plugin-badge-size: 18px;\n      --plugin-icon-size: 75%;\n      --gauge-wrapper-width: 60px;\n      --gauge-percentage-font-size: 13px;\n      position: sticky;\n      left: 0;\n      right: 0;\n      top: var(--topbar-height);\n      font-weight: 700;\n      display: none;\n      justify-content: center;\n      background-color: var(--sticky-header-background-color);\n      border-bottom: 1px solid var(--color-gray-200);\n      padding-top: var(--score-container-padding);\n      padding-bottom: 4px;\n      z-index: 1;\n      pointer-events: none;\n    }\n\n    .lh-sticky-header--visible {\n      display: grid;\n      grid-auto-flow: column;\n      pointer-events: auto;\n    }\n\n    /* Disable the gauge arc animation for the sticky header, so toggling display: none\n       does not play the animation. */\n    .lh-sticky-header .lh-gauge-arc {\n      animation: none;\n    }\n\n    .lh-sticky-header .lh-gauge__label {\n      display: none;\n    }\n\n    .lh-highlighter {\n      width: var(--gauge-wrapper-width);\n      height: 1px;\n      background-color: var(--highlighter-background-color);\n      /* Position at bottom of first gauge in sticky header. */\n      position: absolute;\n      grid-column: 1;\n      bottom: -1px;\n    }\n\n    .lh-gauge__wrapper:first-of-type {\n      contain: none;\n    }\n  </style>\n  <div class=\"lh-scores-wrapper\">\n    <div class=\"lh-scores-container\">\n      <div class=\"pyro\">\n        <div class=\"before\"></div>\n        <div class=\"after\"></div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<!-- Lighthouse topbar -->\n<template id=\"tmpl-lh-topbar\">\n  <style>\n    .lh-topbar {\n      position: sticky;\n      top: 0;\n      left: 0;\n      right: 0;\n      z-index: 1000;\n      display: flex;\n      align-items: center;\n      height: var(--topbar-height);\n      background-color: var(--topbar-background-color);\n      padding: var(--topbar-padding);\n    }\n\n    .lh-topbar__logo {\n      width: var(--topbar-logo-size);\n      height: var(--topbar-logo-size);\n      user-select: none;\n    }\n    .lh-topbar__logo .shape {\n      fill: var(--report-text-color);\n    }\n\n    .lh-topbar__url {\n      margin: var(--topbar-padding);\n      text-decoration: none;\n      color: var(--report-text-color);\n    }\n\n    .lh-tools {\n      margin-left: auto;\n      will-change: transform;\n    }\n    .lh-tools__button {\n      width: var(--tools-icon-size);\n      height: var(--tools-icon-size);\n      cursor: pointer;\n      margin-right: 5px;\n      /* This is actually a button element, but we want to style it like a transparent div. */\n      display: flex;\n      background: none;\n      color: inherit;\n      border: none;\n      padding: 0;\n      font: inherit;\n      outline: inherit;\n    }\n    .lh-tools__button svg {\n      fill: var(--tools-icon-color);\n    }\n    .dark .lh-tools__button svg {\n      filter: invert(1);\n    }\n    .lh-tools__button.active + .lh-tools__dropdown {\n      opacity: 1;\n      clip: rect(-1px, 187px, 242px, -3px);\n      visibility: visible;\n    }\n    .lh-tools__dropdown {\n      position: absolute;\n      background-color: var(--report-background-color);\n      border: 1px solid var(--report-border-color);\n      border-radius: 3px;\n      padding: calc(var(--default-padding) / 2) 0;\n      cursor: pointer;\n      top: 36px;\n      right: 0;\n      box-shadow: 1px 1px 3px #ccc;\n      min-width: 125px;\n      clip: rect(0, 164px, 0, 0);\n      visibility: hidden;\n      opacity: 0;\n      transition: all 200ms cubic-bezier(0,0,0.2,1);\n    }\n    .lh-tools__dropdown a {\n      display: block;\n      color: currentColor;\n      text-decoration: none;\n      white-space: nowrap;\n      padding: 0 12px;\n      line-height: 2;\n    }\n    .lh-tools__dropdown a:hover,\n    .lh-tools__dropdown a:focus {\n      background-color: var(--color-gray-200);\n      outline: none;\n    }\n    .lh-tools__dropdown .report-icon {\n      cursor: pointer;\n      background-repeat: no-repeat;\n      background-position: 8px 50%;\n      background-size: 18px;\n      background-color: transparent;\n      text-indent: 18px;\n    }\n    .dark .report-icon {\n      color: var(--color-gray-900);\n      filter: invert(1);\n    }\n    .dark .lh-tools__dropdown a:hover,\n    .dark .lh-tools__dropdown a:focus {\n      background-color: #BDBDBD;\n    }\n    /* copy icon needs slight adjustments to look great */\n    .lh-tools__dropdown .report-icon--copy {\n      background-size: 16px;\n      background-position: 9px 50%;\n    }\n    /* save-as-gist option hidden in report */\n    .lh-tools__dropdown .lh-tools--gist {\n      display: none;\n    }\n\n    @media screen and (max-width: 964px) {\n      .lh-tools__dropdown {\n        right: 0;\n        left: initial;\n      }\n    }\n    @media print {\n      .lh-topbar {\n        position: static;\n        margin-left: 0;\n      }\n    }\n  </style>\n\n  <div class=\"lh-topbar\">\n    <!-- Flat Lighthouse logo.  -->\n    <svg class=\"lh-topbar__logo\" viewBox=\"0 0 192 192\">\n      <g fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M0 0h192v192H0z\"/>\n        <path class=\"shape\" d=\"M67.705 179.352l2.603-20.82 49.335-16.39 4.652 37.21A87.893 87.893 0 0 1 96 184a87.893 87.893 0 0 1-28.295-4.648zM52.44 172.48C25.894 157.328 8 128.754 8 96 8 47.399 47.399 8 96 8s88 39.399 88 88c0 32.754-17.894 61.328-44.44 76.48L130 96h6V80h-8V48L96 28 64 48v32h-8v16h6l-9.56 76.48zM113.875 96l2.882 23.05-43.318 14.433L78.125 96h35.75zM80 80V56.868l16-10 16 10V80H80z\"/>\n      </g>\n    </svg>\n\n    <a href=\"\" class=\"lh-topbar__url\" target=\"_blank\" rel=\"noopener\"></a>\n\n    <div class=\"lh-tools\">\n      <button class=\"report-icon report-icon--share lh-tools__button\" title=\"Tools menu\" aria-label=\"Toggle report tools menu\">\n        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/>\n        </svg>\n      </button>\n      <div class=\"lh-tools__dropdown\">\n         <!-- TODO(i18n): localize tools dropdown -->\n        <a href=\"#\" class=\"report-icon report-icon--print\" data-action=\"print-summary\">Print Summary</a>\n        <a href=\"#\" class=\"report-icon report-icon--print\" data-action=\"print-expanded\">Print Expanded</a>\n        <a href=\"#\" class=\"report-icon report-icon--copy\" data-action=\"copy\">Copy JSON</a>\n        <a href=\"#\" class=\"report-icon report-icon--download\" data-action=\"save-html\">Save as HTML</a>\n        <a href=\"#\" class=\"report-icon report-icon--download\" data-action=\"save-json\">Save as JSON</a>\n        <a href=\"#\" class=\"report-icon report-icon--open lh-tools--viewer\" data-action=\"open-viewer\">Open in Viewer</a>\n        <a href=\"#\" class=\"report-icon report-icon--open lh-tools--gist\" data-action=\"save-gist\">Save as Gist</a>\n        <a href=\"#\" class=\"report-icon report-icon--dark\" data-action=\"toggle-dark\">Toggle Dark Theme</a>\n      </div>\n    </div>\n  </div>\n</template>\n\n<!-- Lighthouse header -->\n<template id=\"tmpl-lh-heading\">\n  <style>\n/*\n    TODO: Enable animating the clouds\n    .lh-lighthouse__clouds {\n      animation: panacross 30s linear infinite;\n      animation-play-state: paused;\n    }\n    @keyframes panacross {\n      0% { transform: translateX(0px); }\n      77% { transform: translateX(-680px); }\n      77.0001% { transform: translateX(195px); }\n      100% { transform: translateX(0px); }\n    } */\n\n    .score100 .lh-header-bg {\n      background-color: hsl(234, 64%, 19%);\n    }\n    .score100 .lh-metadata, .score100 .lh-toolbar__metadata, .score100 .lh-product-info {\n      color: #fff;\n    }\n    .score100 .lh-config {\n      color: #eee;\n    }\n\n    /* CSS Fireworks. Originally by Eddie Lin\n       https://codepen.io/paulirish/pen/yEVMbP\n    */\n    .pyro {\n      display: none;\n      z-index: 1;\n      pointer-events: none;\n    }\n    .score100 .pyro {\n      display: block;\n    }\n    .score100 .lh-lighthouse stop:first-child {\n      stop-color: hsla(200, 12%, 95%, 0);\n    }\n    .score100 .lh-lighthouse stop:last-child {\n      stop-color: hsla(65, 81%, 76%, 1);\n    }\n\n    .pyro > .before, .pyro > .after {\n      position: absolute;\n      width: 5px;\n      height: 5px;\n      border-radius: 2.5px;\n      box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n      animation: 1s bang ease-out infinite backwards,  1s gravity ease-in infinite backwards,  5s position linear infinite backwards;\n      animation-delay: 1s, 1s, 1s;\n    }\n\n    .pyro > .after {\n      animation-delay: 2.25s, 2.25s, 2.25s;\n      animation-duration: 1.25s, 1.25s, 6.25s;\n    }\n    .fireworks-paused .pyro > div {\n      animation-play-state: paused;\n    }\n\n    @keyframes bang {\n      to {\n        box-shadow: -70px -115.67px #47ebbc, -28px -99.67px #eb47a4, 58px -31.67px #7eeb47, 13px -141.67px #eb47c5, -19px 6.33px #7347eb, -2px -74.67px #ebd247, 24px -151.67px #eb47e0, 57px -138.67px #b4eb47, -51px -104.67px #479eeb, 62px 8.33px #ebcf47, -93px 0.33px #d547eb, -16px -118.67px #47bfeb, 53px -84.67px #47eb83, 66px -57.67px #eb47bf, -93px -65.67px #91eb47, 30px -13.67px #86eb47, -2px -59.67px #83eb47, -44px 1.33px #eb47eb, 61px -58.67px #47eb73, 5px -22.67px #47e8eb, -66px -28.67px #ebe247, 42px -123.67px #eb5547, -75px 26.33px #7beb47, 15px -52.67px #a147eb, 36px -51.67px #eb8347, -38px -12.67px #eb5547, -46px -59.67px #47eb81, 78px -114.67px #eb47ba, 15px -156.67px #eb47bf, -36px 1.33px #eb4783, -72px -86.67px #eba147, 31px -46.67px #ebe247, -68px 29.33px #47e2eb, -55px 19.33px #ebe047, -56px 27.33px #4776eb, -13px -91.67px #eb5547, -47px -138.67px #47ebc7, -18px -96.67px #eb47ac, 11px -88.67px #4783eb, -67px -28.67px #47baeb, 53px 10.33px #ba47eb, 11px 19.33px #5247eb, -5px -11.67px #eb4791, -68px -4.67px #47eba7, 95px -37.67px #eb478b, -67px -162.67px #eb5d47, -54px -120.67px #eb6847, 49px -12.67px #ebe047, 88px 8.33px #47ebda, 97px 33.33px #eb8147, 6px -71.67px #ebbc47;\n      }\n    }\n    @keyframes gravity {\n      to {\n        transform: translateY(80px);\n        opacity: 0;\n      }\n    }\n    @keyframes position {\n      0%, 19.9% {\n        margin-top: 4%;\n        margin-left: 47%;\n      }\n      20%, 39.9% {\n        margin-top: 7%;\n        margin-left: 30%;\n      }\n      40%, 59.9% {\n        margin-top: 6%;\n        margin-left: 70%;\n      }\n      60%, 79.9% {\n        margin-top: 3%;\n        margin-left: 20%;\n      }\n      80%, 99.9% {\n        margin-top: 3%;\n        margin-left: 80%;\n      }\n    }\n  </style>\n\n  <div class=\"lh-header-container\">\n    <div class=\"lh-scores-wrapper-placeholder\"></div>\n  </div>\n</template>\n\n\n<!-- Lighthouse footer -->\n<template id=\"tmpl-lh-footer\">\n  <style>\n    .lh-footer {\n      padding: var(--footer-padding-vertical) calc(var(--default-padding) * 2);\n      max-width: var(--report-width);\n      margin: 0 auto;\n    }\n    .lh-footer .lh-generated {\n      text-align: center;\n    }\n    .lh-env__title {\n      font-size: var(--env-item-font-size-big);\n      line-height: var(--env-item-line-height-big);\n      text-align: center;\n      padding: var(--score-container-padding);\n    }\n    .lh-env {\n      padding: var(--default-padding) 0;\n    }\n    .lh-env__items {\n      padding-left: 16px;\n      margin: 0 0 var(--audits-margin-bottom);\n      padding: 0;\n    }\n    .lh-env__items .lh-env__item:nth-child(2n) {\n      background-color: var(--env-item-background-color);\n    }\n    .lh-env__item {\n      display: flex;\n      padding: var(--env-item-padding);\n      position: relative;\n    }\n    span.lh-env__name {\n      font-weight: bold;\n      min-width: var(--env-name-min-width);\n      flex: 0.5;\n      padding: 0 8px;\n    }\n    span.lh-env__description {\n      text-align: left;\n      flex: 1;\n    }\n  </style>\n  <footer class=\"lh-footer\">\n    <!-- TODO(i18n): localize runtime settings -->\n    <div class=\"lh-env\">\n      <div class=\"lh-env__title\">Runtime Settings</div>\n      <ul class=\"lh-env__items\">\n        <template id=\"tmpl-lh-env__items\">\n          <li class=\"lh-env__item\">\n            <span class=\"lh-env__name\"></span>\n            <span class=\"lh-env__description\"></span>\n          </li>\n        </template>\n      </ul>\n    </div>\n\n    <div class=\"lh-generated\">\n      Generated by <b>Lighthouse</b> <span class=\"lh-footer__version\"></span> |\n      <a href=\"https://github.com/GoogleChrome/Lighthouse/issues\" target=\"_blank\" rel=\"noopener\">File an issue</a>\n    </div>\n  </footer>\n</template>\n\n<!-- Lighthouse score gauge -->\n<template id=\"tmpl-lh-gauge\">\n  <a href=\"#\" class=\"lh-gauge__wrapper\">\n    <!-- Wrapper exists for the ::before plugin icon. Cannot create pseudo-elements on svgs. -->\n    <div class=\"lh-gauge__svg-wrapper\">\n      <svg viewBox=\"0 0 120 120\" class=\"lh-gauge\">\n        <circle class=\"lh-gauge-base\" r=\"56\" cx=\"60\" cy=\"60\"></circle>\n        <circle class=\"lh-gauge-arc\" transform=\"rotate(-90 60 60)\" r=\"56\" cx=\"60\" cy=\"60\"></circle>\n      </svg>\n    </div>\n    <div class=\"lh-gauge__percentage\"></div>\n    <!-- TODO: should likely be an h2  -->\n    <div class=\"lh-gauge__label\"></div>\n  </a>\n</template>\n\n\n<!-- Lighthouse PWA badge gauge -->\n<template id=\"tmpl-lh-gauge--pwa\">\n  <style>\n    .lh-gauge--pwa .lh-gauge--pwa__component {\n      display: none;\n    }\n    .lh-gauge--pwa__wrapper:not(.lh-badged--all) .lh-gauge--pwa__logo > path {\n      /* Gray logo unless everything is passing. */\n      fill: #B0B0B0;\n    }\n\n    .lh-gauge--pwa__disc {\n      fill: var(--color-gray-200);\n    }\n\n    .lh-gauge--pwa__logo--primary-color {\n      fill: #304FFE;\n    }\n\n    .lh-gauge--pwa__logo--secondary-color {\n      fill: #3D3D3D;\n    }\n    .dark .lh-gauge--pwa__logo--secondary-color {\n      fill: #D8B6B6;\n    }\n\n    /* No passing groups. */\n    .lh-gauge--pwa__wrapper:not([class*='lh-badged--']) .lh-gauge--pwa__na-line {\n      display: inline;\n    }\n    /* Just optimized. Same n/a line as no passing groups. */\n    .lh-gauge--pwa__wrapper.lh-badged--pwa-optimized:not(.lh-badged--pwa-installable):not(.lh-badged--pwa-fast-reliable) .lh-gauge--pwa__na-line {\n      display: inline;\n    }\n\n    /* Just fast and reliable. */\n    .lh-gauge--pwa__wrapper.lh-badged--pwa-fast-reliable:not(.lh-badged--pwa-installable) .lh-gauge--pwa__fast-reliable-badge {\n      display: inline;\n    }\n\n    /* Just installable. */\n    .lh-gauge--pwa__wrapper.lh-badged--pwa-installable:not(.lh-badged--pwa-fast-reliable) .lh-gauge--pwa__installable-badge {\n      display: inline;\n    }\n\n    /* Fast and reliable and installable. */\n    .lh-gauge--pwa__wrapper.lh-badged--pwa-fast-reliable.lh-badged--pwa-installable .lh-gauge--pwa__fast-reliable-installable-badges {\n      display: inline;\n    }\n\n    /* All passing groups. */\n    .lh-gauge--pwa__wrapper.lh-badged--all .lh-gauge--pwa__check-circle {\n      display: inline;\n    }\n  </style>\n\n  <a href=\"#\" class=\"lh-gauge__wrapper lh-gauge--pwa__wrapper\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\" class=\"lh-gauge lh-gauge--pwa\">\n      <defs>\n        <linearGradient id=\"lh-gauge--pwa__check-circle__gradient\" x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\">\n          <stop stop-color=\"#00C852\" offset=\"0%\"></stop>\n          <stop stop-color=\"#009688\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient id=\"lh-gauge--pwa__installable__shadow-gradient\" x1=\"76.056%\" x2=\"24.111%\" y1=\"82.995%\" y2=\"24.735%\">\n          <stop stop-color=\"#A5D6A7\" offset=\"0%\"></stop>\n          <stop stop-color=\"#80CBC4\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient id=\"lh-gauge--pwa__fast-reliable__shadow-gradient\" x1=\"76.056%\" y1=\"82.995%\" x2=\"25.678%\" y2=\"26.493%\">\n          <stop stop-color=\"#64B5F6\" offset=\"0%\"></stop>\n          <stop stop-color=\"#2979FF\" offset=\"100%\"></stop>\n        </linearGradient>\n\n        <g id=\"lh-gauge--pwa__fast-reliable-badge\">\n          <circle fill=\"#FFFFFF\" cx=\"10\" cy=\"10\" r=\"10\"></circle>\n          <path fill=\"#304FFE\" d=\"M10 3.58l5.25 2.34v3.5c0 3.23-2.24 6.26-5.25 7-3.01-.74-5.25-3.77-5.25-7v-3.5L10 3.58zm-.47 10.74l2.76-4.83.03-.07c.04-.08 0-.24-.22-.24h-1.64l.47-3.26h-.47l-2.7 4.77c-.02.01.05-.1-.04.05-.09.16-.1.31.18.31h1.63l-.47 3.27h.47z\"/>\n        </g>\n        <g id=\"lh-gauge--pwa__installable-badge\">\n          <circle fill=\"#FFFFFF\" cx=\"10\" cy=\"10\" r=\"10\"></circle>\n          <path fill=\"#009688\" d=\"M10 4.167A5.835 5.835 0 0 0 4.167 10 5.835 5.835 0 0 0 10 15.833 5.835 5.835 0 0 0 15.833 10 5.835 5.835 0 0 0 10 4.167zm2.917 6.416h-2.334v2.334H9.417v-2.334H7.083V9.417h2.334V7.083h1.166v2.334h2.334v1.166z\"/>\n        </g>\n      </defs>\n\n      <g stroke=\"none\" fill-rule=\"nonzero\">\n        <!-- Background and PWA logo (color by default) -->\n        <circle class=\"lh-gauge--pwa__disc\" cx=\"30\" cy=\"30\" r=\"30\"></circle>\n        <g class=\"lh-gauge--pwa__logo\">\n          <path class=\"lh-gauge--pwa__logo--secondary-color\" d=\"M35.66 19.39l.7-1.75h2L37.4 15 38.6 12l3.4 9h-2.51l-.58-1.61z\"/>\n          <path class=\"lh-gauge--pwa__logo--primary-color\" d=\"M33.52 21l3.65-9h-2.42l-2.5 5.82L30.5 12h-1.86l-1.9 5.82-1.35-2.65-1.21 3.72L25.4 21h2.38l1.72-5.2 1.64 5.2z\"/>\n          <path class=\"lh-gauge--pwa__logo--secondary-color\" fill-rule=\"nonzero\" d=\"M20.3 17.91h1.48c.45 0 .85-.05 1.2-.15l.39-1.18 1.07-3.3a2.64 2.64 0 0 0-.28-.37c-.55-.6-1.36-.91-2.42-.91H18v9h2.3V17.9zm1.96-3.84c.22.22.33.5.33.87 0 .36-.1.65-.29.87-.2.23-.59.35-1.15.35h-.86v-2.41h.87c.52 0 .89.1 1.1.32z\"/>\n        </g>\n\n        <!-- No badges. -->\n        <rect class=\"lh-gauge--pwa__component lh-gauge--pwa__na-line\" fill=\"#FFFFFF\" x=\"20\" y=\"32\" width=\"20\" height=\"4\" rx=\"2\"></rect>\n\n        <!-- Just fast and reliable. -->\n        <g class=\"lh-gauge--pwa__component lh-gauge--pwa__fast-reliable-badge\" transform=\"translate(20, 29)\">\n          <path fill=\"url(#lh-gauge--pwa__fast-reliable__shadow-gradient)\" d=\"M33.63 19.49A30 30 0 0 1 16.2 30.36L3 17.14 17.14 3l16.49 16.49z\"/>\n          <use href=\"#lh-gauge--pwa__fast-reliable-badge\" />\n        </g>\n\n        <!-- Just installable. -->\n        <g class=\"lh-gauge--pwa__component lh-gauge--pwa__installable-badge\" transform=\"translate(20, 29)\">\n          <path fill=\"url(#lh-gauge--pwa__installable__shadow-gradient)\" d=\"M33.629 19.487c-4.272 5.453-10.391 9.39-17.415 10.869L3 17.142 17.142 3 33.63 19.487z\"/>\n          <use href=\"#lh-gauge--pwa__installable-badge\" />\n        </g>\n\n        <!-- Fast and reliable and installable. -->\n        <g class=\"lh-gauge--pwa__component lh-gauge--pwa__fast-reliable-installable-badges\">\n          <g transform=\"translate(8, 29)\"> <!-- fast and reliable -->\n            <path fill=\"url(#lh-gauge--pwa__fast-reliable__shadow-gradient)\" d=\"M16.321 30.463L3 17.143 17.142 3l22.365 22.365A29.864 29.864 0 0 1 22 31c-1.942 0-3.84-.184-5.679-.537z\"/>\n            <use href=\"#lh-gauge--pwa__fast-reliable-badge\" />\n          </g>\n          <g transform=\"translate(32, 29)\"> <!-- installable -->\n            <path fill=\"url(#lh-gauge--pwa__installable__shadow-gradient)\" d=\"M25.982 11.84a30.107 30.107 0 0 1-13.08 15.203L3 17.143 17.142 3l8.84 8.84z\"/>\n            <use href=\"#lh-gauge--pwa__installable-badge\" />\n          </g>\n        </g>\n\n        <!-- Full PWA. -->\n        <g class=\"lh-gauge--pwa__component lh-gauge--pwa__check-circle\" transform=\"translate(18, 28)\">\n          <circle fill=\"#FFFFFF\" cx=\"12\" cy=\"12\" r=\"12\"></circle>\n          <path fill=\"url(#lh-gauge--pwa__check-circle__gradient)\" d=\"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path>\n        </g>\n      </g>\n    </svg>\n\n    <div class=\"lh-gauge__label\"></div>\n  </a>\n</template>\n\n<!-- Lighthouse crtiical request chains component -->\n<template id=\"tmpl-lh-crc\">\n  <div class=\"lh-crc-container\">\n    <style>\n      .lh-crc .tree-marker {\n        width: 12px;\n        height: 26px;\n        display: block;\n        float: left;\n        background-position: top left;\n      }\n      .lh-crc .horiz-down {\n        background: url('data:image/svg+xml;utf8,<svg width=\"16\" height=\"26\" viewBox=\"0 0 16 26\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"%23D8D8D8\" fill-rule=\"evenodd\"><path d=\"M16 12v2H-2v-2z\"/><path d=\"M9 12v14H7V12z\"/></g></svg>');\n      }\n      .lh-crc .right {\n        background: url('data:image/svg+xml;utf8,<svg width=\"16\" height=\"26\" viewBox=\"0 0 16 26\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 12v2H0v-2z\" fill=\"%23D8D8D8\" fill-rule=\"evenodd\"/></svg>');\n      }\n      .lh-crc .up-right {\n        background: url('data:image/svg+xml;utf8,<svg width=\"16\" height=\"26\" viewBox=\"0 0 16 26\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 0h2v14H7zm2 12h7v2H9z\" fill=\"%23D8D8D8\" fill-rule=\"evenodd\"/></svg>');\n      }\n      .lh-crc .vert-right {\n        background: url('data:image/svg+xml;utf8,<svg width=\"16\" height=\"26\" viewBox=\"0 0 16 26\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 0h2v27H7zm2 12h7v2H9z\" fill=\"%23D8D8D8\" fill-rule=\"evenodd\"/></svg>');\n      }\n      .lh-crc .vert {\n        background: url('data:image/svg+xml;utf8,<svg width=\"16\" height=\"26\" viewBox=\"0 0 16 26\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 0h2v26H7z\" fill=\"%23D8D8D8\" fill-rule=\"evenodd\"/></svg>');\n      }\n      .lh-crc .crc-tree {\n        font-size: 14px;\n        width: 100%;\n        overflow-x: auto;\n      }\n      .lh-crc .crc-node {\n        height: 26px;\n        line-height: 26px;\n        white-space: nowrap;\n      }\n      .lh-crc .crc-node__tree-value {\n        margin-left: 10px;\n      }\n      .lh-crc .crc-node__tree-value div {\n        display: inline;\n      }\n      .lh-crc .crc-node__chain-duration {\n        font-weight: 700;\n      }\n      .lh-crc .crc-initial-nav {\n        color: #595959;\n        font-style: italic;\n      }\n      .lh-crc__summary-value {\n        margin-bottom: 10px;\n      }\n    </style>\n    <div>\n      <div class=\"lh-crc__summary-value\">\n        <span class=\"lh-crc__longest_duration_label\"></span> <b class=\"lh-crc__longest_duration\"></b>\n      </div>\n    </div>\n    <div class=\"lh-crc\">\n      <div class=\"crc-initial-nav\"></div>\n      <!-- stamp for each chain -->\n      <template id=\"tmpl-lh-crc__chains\">\n        <div class=\"crc-node\">\n          <span class=\"crc-node__tree-marker\">\n\n          </span>\n          <span class=\"crc-node__tree-value\">\n\n          </span>\n        </div>\n      </template>\n    </div>\n  </div>\n</template>\n\n<template id=\"tmpl-lh-3p-filter\">\n  <style>\n    .lh-3p-filter {\n      background-color: var(--table-higlight-background-color);\n      color: var(--color-gray-600);\n      float: right;\n      padding: 6px;\n    }\n    .lh-3p-filter-label, .lh-3p-filter-input {\n      cursor: pointer;\n      vertical-align: middle;\n      user-select: none;\n    }\n  </style>\n  <div class=\"lh-3p-filter\">\n    <label class=\"lh-3p-filter-label\">\n      <input type=\"checkbox\" class=\"lh-3p-filter-input\" checked />\n      <span class=\"lh-3p-ui-string\">Show 3rd party resources</span> (<span class=\"lh-3p-filter-count\"></span>)\n    </label>\n  </div>\n</template>\n\n<!-- Lighthouse snippet component -->\n<template id=\"tmpl-lh-snippet\">\n    <div class=\"lh-snippet\">\n      <style>\n          :root {\n            --snippet-highlight-light: #fbf1f2;\n            --snippet-highlight-dark: #ffd6d8;\n          }\n\n         .lh-snippet__header {\n          position: relative;\n          overflow: hidden;\n          padding: 10px;\n          border-bottom: none;\n          color: var(--snippet-color);\n          background-color: var(--snippet-background-color);\n          border: 1px solid var(--report-border-color-secondary);\n        }\n        .lh-snippet__title {\n          font-weight: bold;\n          float: left;\n        }\n        .lh-snippet__node {\n          float: left;\n          margin-left: 4px;\n        }\n        .lh-snippet__toggle-expand {\n          padding: 1px 7px;\n          margin-top: -1px;\n          margin-right: -7px;\n          float: right;\n          background: transparent;\n          border: none;\n          cursor: pointer;\n          font-size: 14px;\n          color: #0c50c7;\n        }\n\n        .lh-snippet__snippet {\n          overflow: auto;\n          border: 1px solid var(--report-border-color-secondary);\n        }\n        /* Container needed so that all children grow to the width of the scroll container */\n        .lh-snippet__snippet-inner {\n          display: inline-block;\n          min-width: 100%;\n        }\n\n        .lh-snippet:not(.lh-snippet--expanded) .lh-snippet__show-if-expanded {\n          display: none;\n        }\n        .lh-snippet.lh-snippet--expanded .lh-snippet__show-if-collapsed {\n          display: none;\n        }\n\n        .lh-snippet__line {\n          background: white;\n          white-space: pre;\n          display: flex;\n        }\n        .lh-snippet__line:not(.lh-snippet__line--message):first-child {\n          padding-top: 4px;\n        }\n        .lh-snippet__line:not(.lh-snippet__line--message):last-child {\n          padding-bottom: 4px;\n        }\n        .lh-snippet__line--content-highlighted {\n          background: var(--snippet-highlight-dark);\n        }\n        .lh-snippet__line--message {\n          background: var(--snippet-highlight-light);\n        }\n        .lh-snippet__line--message .lh-snippet__line-number {\n          padding-top: 10px;\n          padding-bottom: 10px;\n        }\n        .lh-snippet__line--message code {\n          padding: 10px;\n          padding-left: 5px;\n          color: var(--color-fail);\n          font-family: var(--report-font-family);\n        }\n        .lh-snippet__line--message code {\n          white-space: normal;\n        }\n        .lh-snippet__line-icon {\n          padding-top: 10px;\n          display: none;\n        }\n        .lh-snippet__line--message .lh-snippet__line-icon {\n          display: block;\n        }\n        .lh-snippet__line-icon:before {\n          content: \"\";\n          display: inline-block;\n          vertical-align: middle;\n          margin-right: 4px;\n          width: var(--score-icon-size);\n          height: var(--score-icon-size);\n          background-image: var(--fail-icon-url);\n        }\n        .lh-snippet__line-number {\n          flex-shrink: 0;\n          width: 40px;\n          text-align: right;\n          font-family: monospace;\n          padding-right: 5px;\n          margin-right: 5px;\n          color: var(--color-gray-600);\n          user-select: none;\n        }\n      </style>\n      <template id=\"tmpl-lh-snippet__header\">\n        <div class=\"lh-snippet__header\">\n          <div class=\"lh-snippet__title\"></div>\n          <div class=\"lh-snippet__node\"></div>\n          <button class=\"lh-snippet__toggle-expand\">\n            <span class=\"lh-snippet__btn-label-collapse lh-snippet__show-if-expanded\"></span>\n            <span class=\"lh-snippet__btn-label-expand lh-snippet__show-if-collapsed\"></span>\n          </button>\n        </div>\n      </template>\n      <template id=\"tmpl-lh-snippet__content\">\n        <div class=\"lh-snippet__snippet\">\n          <div class=\"lh-snippet__snippet-inner\"></div>\n        </div>\n      </template>\n      <template id=\"tmpl-lh-snippet__line\">\n          <div class=\"lh-snippet__line\">\n            <div class=\"lh-snippet__line-number\"></div>\n            <div class=\"lh-snippet__line-icon\"></div>\n            <code></code>\n          </div>\n        </template>\n    </div>\n  </template>\n\n";

// Changes to this export interface should be reflected in build/dt-report-generator-bundle.js
// and clients/devtools-report-assets.js
module.exports = {
  REPORT_TEMPLATE,
  REPORT_TEMPLATES,
  REPORT_JAVASCRIPT,
  REPORT_CSS,
};


},{}],2:[function(require,module,exports){
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


},{"./html/html-report-assets.js":1}]},{},[2])(2)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcGF1bGlyaXNoL2NvZGUvbGlnaHRob3VzZS9saWdodGhvdXNlLWNvcmUvcmVwb3J0L2h0bWwvaHRtbC1yZXBvcnQtYXNzZXRzLmpzIiwiL1VzZXJzL3BhdWxpcmlzaC9jb2RlL2xpZ2h0aG91c2UvbGlnaHRob3VzZS1jb3JlL3JlcG9ydC9yZXBvcnQtZ2VuZXJhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7O0FBS0EsWUFBWSxDQUFDOztBQUViLEFBQXlCOztBQUV6QixNQUFNLGtCQUFrQixtdkhBQTRELENBQUM7QUFDckYsTUFBTSxvQkFBb0I7RUFDeEIseWh5QkFBd0Q7RUFDeEQsMGtOQUF1RDs7O0VBR3ZELG04T0FBb0U7RUFDcEUsZ2pZQUFvRTtFQUNwRSwrb1BBQXdFO0VBQ3hFLDJqWkFBb0U7RUFDcEUseXdEQUErRDtFQUMvRCx1OERBQTBEO0VBQzFELGdrdEJBQXNFO0VBQ3RFLDJpaEJBQXFFO0VBQ3JFLHUxVEFBaUY7RUFDakYsMnFPQUF5RTtFQUN6RSw0MFRBQW1FO0NBQ3BFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNkLE1BQU0sYUFBYSxxaDhDQUF5RCxDQUFDO0FBQzdFLE1BQU0sbUJBQW1CLDIra0NBQXNELENBQUM7Ozs7QUFJaEYsTUFBTSxRQUFRLEdBQUc7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0NBQ1gsQ0FBQzs7OztBQ3JDRjs7Ozs7QUFLQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxtQkFBbUIsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7O0FBRWpFLHNCQUFzQjs7Ozs7OztFQU9wQixxQkFBcUIsdUJBQXVCO0lBQzFDLElBQUksWUFBWSxPQUFPLEtBQUssQ0FBQyxFQUFFO01BQzdCLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7O0lBRUQsTUFBTSxtQkFBbUIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sbUJBQW1CLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sTUFBTTtjQUNILENBQUMsZ0JBQWdCLE9BQU8sQ0FBQztZQUMzQixDQUFDLFFBQVEsZUFBZSxlQUFlLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7YUFDL0QsQ0FBQyxnQkFBZ0IsWUFBWSxDQUFDLENBQUM7R0FDekM7Ozs7Ozs7RUFPRCx5QkFBeUIsTUFBTTtJQUM3QixNQUFNLGdCQUFnQixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7Y0FDL0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO2NBQ2pCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQztjQUN0QixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqQyxNQUFNLHNCQUFzQixnQkFBZ0Isa0JBQWtCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7O0lBRTNGLE9BQU8sZUFBZSxlQUFlLENBQUMsZ0JBQWdCLGdCQUFnQixFQUFFO01BQ3RFLENBQUMsUUFBUSxxQkFBcUIsRUFBRSxhQUFhLGFBQWEsQ0FBQztNQUMzRCxDQUFDLFFBQVEsMkJBQTJCLEVBQUUsYUFBYSxtQkFBbUIsQ0FBQztNQUN2RSxDQUFDLFFBQVEsd0JBQXdCLEVBQUUsYUFBYSxnQkFBZ0IsV0FBVyxDQUFDO01BQzVFLENBQUMsUUFBUSwwQkFBMEIsRUFBRSxhQUFhLGdCQUFnQixpQkFBaUIsQ0FBQztLQUNyRixDQUFDLENBQUM7R0FDSjs7Ozs7Ozs7Ozs7Ozs7RUFjRCx3QkFBd0IsTUFBTTs7O0lBRzVCLE1BQU0sT0FBTyxNQUFNLENBQUM7SUFDcEIsTUFBTSxZQUFZLEdBQUcsQ0FBQzs7SUFFdEIsTUFBTSxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7SUFHekQsTUFBTSxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlELE1BQU0sUUFBUSxNQUFNLE9BQU8sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWTtNQUMxRCxPQUFPLFFBQVEsVUFBVSxJQUFJLENBQUMsWUFBWTtRQUN4QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7UUFFdEMsTUFBTSxlQUFlLEtBQUssTUFBTSxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQztRQUM3RCxPQUFPLENBQUMsUUFBUSxNQUFNLEVBQUUsS0FBSyxHQUFHLEVBQUUsS0FBSyxNQUFNLEVBQUUsS0FBSyxpQkFBaUIsRUFBRSxZQUFZLENBQUM7Y0FDOUUsQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFLENBQUM7Y0FDM0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUNoQixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7O0lBRUgsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUM7VUFDMUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUMvQzs7Ozs7Ozs7RUFRRCxxQkFBcUIsbUJBQW1CO0lBQ3RDLE1BQU0sZ0JBQWdCLEtBQUssUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFFakUsTUFBTSxTQUFTLFdBQVcsSUFBSSxDQUFDLGNBQWM7O01BRTNDLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPLGVBQWUsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7T0FDaEQ7O01BRUQsSUFBSSxVQUFVLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE9BQU8sZUFBZSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUMvQzs7TUFFRCxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQ3JDOztNQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxDQUFDLENBQUM7S0FDdkQsQ0FBQyxDQUFDOztJQUVILE9BQU8sYUFBYSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDM0M7Q0FDRjs7QUFFRCxNQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmNvbnN0IFJFUE9SVF9URU1QTEFURSA9IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3JlcG9ydC10ZW1wbGF0ZS5odG1sJywgJ3V0ZjgnKTtcbmNvbnN0IFJFUE9SVF9KQVZBU0NSSVBUID0gW1xuICBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9yZW5kZXJlci91dGlsLmpzJywgJ3V0ZjgnKSxcbiAgZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvcmVuZGVyZXIvZG9tLmpzJywgJ3V0ZjgnKSxcbiAgLy8gQ09NUEFUOiBSZW1vdmUgd2hlbiBNaWNyb3NvZnQgRWRnZSBzdXBwb3J0cyA8ZGV0YWlscz4vPHN1bW1hcnk+XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vc3RhdHVzL2RldGFpbHNzdW1tYXJ5Lz9xPWRldGFpbHNcbiAgZnMucmVhZEZpbGVTeW5jKHJlcXVpcmUucmVzb2x2ZSgnZGV0YWlscy1lbGVtZW50LXBvbHlmaWxsJyksICd1dGY4JyksXG4gIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3JlbmRlcmVyL2RldGFpbHMtcmVuZGVyZXIuanMnLCAndXRmOCcpLFxuICBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9yZW5kZXJlci9jcmMtZGV0YWlscy1yZW5kZXJlci5qcycsICd1dGY4JyksXG4gIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3JlbmRlcmVyL3NuaXBwZXQtcmVuZGVyZXIuanMnLCAndXRmOCcpLFxuICBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy8uLi8uLi9saWIvZmlsZS1uYW1lci5qcycsICd1dGY4JyksXG4gIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3JlbmRlcmVyL2xvZ2dlci5qcycsICd1dGY4JyksXG4gIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3JlbmRlcmVyL3JlcG9ydC11aS1mZWF0dXJlcy5qcycsICd1dGY4JyksXG4gIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3JlbmRlcmVyL2NhdGVnb3J5LXJlbmRlcmVyLmpzJywgJ3V0ZjgnKSxcbiAgZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvcmVuZGVyZXIvcGVyZm9ybWFuY2UtY2F0ZWdvcnktcmVuZGVyZXIuanMnLCAndXRmOCcpLFxuICBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9yZW5kZXJlci9wd2EtY2F0ZWdvcnktcmVuZGVyZXIuanMnLCAndXRmOCcpLFxuICBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9yZW5kZXJlci9yZXBvcnQtcmVuZGVyZXIuanMnLCAndXRmOCcpLFxuXS5qb2luKCc7XFxuJyk7XG5jb25zdCBSRVBPUlRfQ1NTID0gZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvcmVwb3J0LXN0eWxlcy5jc3MnLCAndXRmOCcpO1xuY29uc3QgUkVQT1JUX1RFTVBMQVRFUyA9IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3RlbXBsYXRlcy5odG1sJywgJ3V0ZjgnKTtcblxuLy8gQ2hhbmdlcyB0byB0aGlzIGV4cG9ydCBpbnRlcmZhY2Ugc2hvdWxkIGJlIHJlZmxlY3RlZCBpbiBidWlsZC9kdC1yZXBvcnQtZ2VuZXJhdG9yLWJ1bmRsZS5qc1xuLy8gYW5kIGNsaWVudHMvZGV2dG9vbHMtcmVwb3J0LWFzc2V0cy5qc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJFUE9SVF9URU1QTEFURSxcbiAgUkVQT1JUX1RFTVBMQVRFUyxcbiAgUkVQT1JUX0pBVkFTQ1JJUFQsXG4gIFJFUE9SVF9DU1MsXG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgaHRtbFJlcG9ydEFzc2V0cyA9IHJlcXVpcmUoJy4vaHRtbC9odG1sLXJlcG9ydC1hc3NldHMuanMnKTtcblxuY2xhc3MgUmVwb3J0R2VuZXJhdG9yIHtcbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCB0aGUgc3BlY2lmaWVkIHN0cmluZ3MgaW4gc291cmNlIHdpdGhvdXQgc2VyaWFsIHJlcGxhY2VtZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVxuICAgKiBAcGFyYW0geyFBcnJheTx7c2VhcmNoOiBzdHJpbmcsIHJlcGxhY2VtZW50OiBzdHJpbmd9Pn0gcmVwbGFjZW1lbnRzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyByZXBsYWNlU3RyaW5ncyhzb3VyY2UsIHJlcGxhY2VtZW50cykge1xuICAgIGlmIChyZXBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudHNbMF07XG4gICAgY29uc3QgbmV4dFJlcGxhY2VtZW50cyA9IHJlcGxhY2VtZW50cy5zbGljZSgxKTtcbiAgICByZXR1cm4gc291cmNlXG4gICAgICAgIC5zcGxpdChmaXJzdFJlcGxhY2VtZW50LnNlYXJjaClcbiAgICAgICAgLm1hcChwYXJ0ID0+IFJlcG9ydEdlbmVyYXRvci5yZXBsYWNlU3RyaW5ncyhwYXJ0LCBuZXh0UmVwbGFjZW1lbnRzKSlcbiAgICAgICAgLmpvaW4oZmlyc3RSZXBsYWNlbWVudC5yZXBsYWNlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVwb3J0IEhUTUwgYXMgYSBzdHJpbmcgd2l0aCB0aGUgcmVwb3J0IEpTT04gYW5kIHJlbmRlcmVyIEpTIGlubGluZWQuXG4gICAqIEBwYXJhbSB7TEguUmVzdWx0fSBsaHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdlbmVyYXRlUmVwb3J0SHRtbChsaHIpIHtcbiAgICBjb25zdCBzYW5pdGl6ZWRKc29uID0gSlNPTi5zdHJpbmdpZnkobGhyKVxuICAgICAgLnJlcGxhY2UoLzwvZywgJ1xcXFx1MDAzYycpIC8vIHJlcGxhY2VzIG9wZW5pbmcgc2NyaXB0IHRhZ3NcbiAgICAgIC5yZXBsYWNlKC9cXHUyMDI4L2csICdcXFxcdTIwMjgnKSAvLyByZXBsYWNlcyBsaW5lIHNlcGFyYXRvcnMgKClcbiAgICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csICdcXFxcdTIwMjknKTsgLy8gcmVwbGFjZXMgcGFyYWdyYXBoIHNlcGFyYXRvcnNcbiAgICBjb25zdCBzYW5pdGl6ZWRKYXZhc2NyaXB0ID0gaHRtbFJlcG9ydEFzc2V0cy5SRVBPUlRfSkFWQVNDUklQVC5yZXBsYWNlKC88XFwvL2csICdcXFxcdTAwM2MvJyk7XG5cbiAgICByZXR1cm4gUmVwb3J0R2VuZXJhdG9yLnJlcGxhY2VTdHJpbmdzKGh0bWxSZXBvcnRBc3NldHMuUkVQT1JUX1RFTVBMQVRFLCBbXG4gICAgICB7c2VhcmNoOiAnJSVMSUdIVEhPVVNFX0pTT04lJScsIHJlcGxhY2VtZW50OiBzYW5pdGl6ZWRKc29ufSxcbiAgICAgIHtzZWFyY2g6ICclJUxJR0hUSE9VU0VfSkFWQVNDUklQVCUlJywgcmVwbGFjZW1lbnQ6IHNhbml0aXplZEphdmFzY3JpcHR9LFxuICAgICAge3NlYXJjaDogJy8qJSVMSUdIVEhPVVNFX0NTUyUlKi8nLCByZXBsYWNlbWVudDogaHRtbFJlcG9ydEFzc2V0cy5SRVBPUlRfQ1NTfSxcbiAgICAgIHtzZWFyY2g6ICclJUxJR0hUSE9VU0VfVEVNUExBVEVTJSUnLCByZXBsYWNlbWVudDogaHRtbFJlcG9ydEFzc2V0cy5SRVBPUlRfVEVNUExBVEVTfSxcbiAgICBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgcmVzdWx0cyB0byBhIENTViBmb3JtYXR0ZWQgc3RyaW5nXG4gICAqIEVhY2ggcm93IGRlc2NyaWJlcyB0aGUgcmVzdWx0IG9mIDEgYXVkaXQgd2l0aFxuICAgKiAgLSB0aGUgbmFtZSBvZiB0aGUgY2F0ZWdvcnkgdGhlIGF1ZGl0IGJlbG9uZ3MgdG9cbiAgICogIC0gdGhlIG5hbWUgb2YgdGhlIGF1ZGl0XG4gICAqICAtIGEgZGVzY3JpcHRpb24gb2YgdGhlIGF1ZGl0XG4gICAqICAtIHRoZSBzY29yZSB0eXBlIHRoYXQgaXMgdXNlZCBmb3IgdGhlIGF1ZGl0XG4gICAqICAtIHRoZSBzY29yZSB2YWx1ZSBvZiB0aGUgYXVkaXRcbiAgICpcbiAgICogQHBhcmFtIHtMSC5SZXN1bHR9IGxoclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2VuZXJhdGVSZXBvcnRDU1YobGhyKSB7XG4gICAgLy8gVG8ga2VlcCB0aGluZ3MgXCJvZmZpY2lhbFwiIHdlIGZvbGxvdyB0aGUgQ1NWIHNwZWNpZmljYXRpb24gKFJGQzQxODApXG4gICAgLy8gVGhlIGRvY3VtZW50IGRlc2NyaWJlcyBob3cgdG8gZGVhbCB3aXRoIGVzY2FwaW5nIGNvbW1hcyBhbmQgcXVvdGVzIGV0Yy5cbiAgICBjb25zdCBDUkxGID0gJ1xcclxcbic7XG4gICAgY29uc3Qgc2VwYXJhdG9yID0gJywnO1xuICAgIC8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgQHJldHVybiB7c3RyaW5nfSAqL1xuICAgIGNvbnN0IGVzY2FwZSA9IHZhbHVlID0+IGBcIiR7dmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKX1cImA7XG5cbiAgICAvLyBQb3NzaWJsZSBUT0RPOiB0aWdodGx5IGNvdXBsZSBoZWFkZXJzIGFuZCByb3cgdmFsdWVzXG4gICAgY29uc3QgaGVhZGVyID0gWydjYXRlZ29yeScsICduYW1lJywgJ3RpdGxlJywgJ3R5cGUnLCAnc2NvcmUnXTtcbiAgICBjb25zdCB0YWJsZSA9IE9iamVjdC52YWx1ZXMobGhyLmNhdGVnb3JpZXMpLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnkuYXVkaXRSZWZzLm1hcChhdWRpdFJlZiA9PiB7XG4gICAgICAgIGNvbnN0IGF1ZGl0ID0gbGhyLmF1ZGl0c1thdWRpdFJlZi5pZF07XG4gICAgICAgIC8vIENTViB2YWxpZGF0b3Igd2FudHMgYWxsIHNjb3JlcyB0byBiZSBudW1lcmljLCB1c2UgLTEgZm9yIG5vd1xuICAgICAgICBjb25zdCBudW1lcmljU2NvcmUgPSBhdWRpdC5zY29yZSA9PT0gbnVsbCA/IC0xIDogYXVkaXQuc2NvcmU7XG4gICAgICAgIHJldHVybiBbY2F0ZWdvcnkudGl0bGUsIGF1ZGl0LmlkLCBhdWRpdC50aXRsZSwgYXVkaXQuc2NvcmVEaXNwbGF5TW9kZSwgbnVtZXJpY1Njb3JlXVxuICAgICAgICAgIC5tYXAodmFsdWUgPT4gdmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgICAubWFwKGVzY2FwZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbaGVhZGVyXS5jb25jYXQoLi4udGFibGUpXG4gICAgICAubWFwKHJvdyA9PiByb3cuam9pbihzZXBhcmF0b3IpKS5qb2luKENSTEYpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHJlc3VsdHMgb3V0cHV0IGluIGEgZm9ybWF0IGJhc2VkIG9uIHRoZSBgbW9kZWAuXG4gICAqIEBwYXJhbSB7TEguUmVzdWx0fSBsaHJcbiAgICogQHBhcmFtIHtMSC5Db25maWcuU2V0dGluZ3NbJ291dHB1dCddfSBvdXRwdXRNb2Rlc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd8c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgZ2VuZXJhdGVSZXBvcnQobGhyLCBvdXRwdXRNb2Rlcykge1xuICAgIGNvbnN0IG91dHB1dEFzQXJyYXkgPSBBcnJheS5pc0FycmF5KG91dHB1dE1vZGVzKTtcbiAgICBpZiAodHlwZW9mIG91dHB1dE1vZGVzID09PSAnc3RyaW5nJykgb3V0cHV0TW9kZXMgPSBbb3V0cHV0TW9kZXNdO1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gb3V0cHV0TW9kZXMubWFwKG91dHB1dE1vZGUgPT4ge1xuICAgICAgLy8gSFRNTCByZXBvcnQuXG4gICAgICBpZiAob3V0cHV0TW9kZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRHZW5lcmF0b3IuZ2VuZXJhdGVSZXBvcnRIdG1sKGxocik7XG4gICAgICB9XG4gICAgICAvLyBDU1YgcmVwb3J0LlxuICAgICAgaWYgKG91dHB1dE1vZGUgPT09ICdjc3YnKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRHZW5lcmF0b3IuZ2VuZXJhdGVSZXBvcnRDU1YobGhyKTtcbiAgICAgIH1cbiAgICAgIC8vIEpTT04gcmVwb3J0LlxuICAgICAgaWYgKG91dHB1dE1vZGUgPT09ICdqc29uJykge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobGhyLCBudWxsLCAyKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG91dHB1dCBtb2RlOiAnICsgb3V0cHV0TW9kZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3V0cHV0QXNBcnJheSA/IG91dHB1dCA6IG91dHB1dFswXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcG9ydEdlbmVyYXRvcjtcbiJdfQ==
,/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self, URL */

const ELLIPSIS = '\u2026';
const NBSP = '\xa0';
const PASS_THRESHOLD = 0.9;
const SCREENSHOT_PREFIX = 'data:image/jpeg;base64,';

const RATINGS = {
  PASS: {label: 'pass', minScore: PASS_THRESHOLD},
  AVERAGE: {label: 'average', minScore: 0.5},
  FAIL: {label: 'fail'},
  ERROR: {label: 'error'},
};

// 25 most used tld plus one domains (aka public suffixes) from http archive.
// @see https://github.com/GoogleChrome/lighthouse/pull/5065#discussion_r191926212
// The canonical list is https://publicsuffix.org/learn/ but we're only using subset to conserve bytes
const listOfTlds = [
  'com', 'co', 'gov', 'edu', 'ac', 'org', 'go', 'gob', 'or', 'net', 'in', 'ne', 'nic', 'gouv',
  'web', 'spb', 'blog', 'jus', 'kiev', 'mil', 'wi', 'qc', 'ca', 'bel', 'on',
];

class Util {
  static get PASS_THRESHOLD() {
    return PASS_THRESHOLD;
  }

  static get MS_DISPLAY_VALUE() {
    return `%10d${NBSP}ms`;
  }

  /**
   * Returns a new LHR that's reshaped for slightly better ergonomics within the report rendereer.
   * Also, sets up the localized UI strings used within renderer and makes changes to old LHRs to be
   * compatible with current renderer.
   * The LHR passed in is not mutated.
   * TODO(team): we all agree the LHR shape change is technical debt we should fix
   * @param {LH.Result} result
   * @return {LH.ReportResult}
   */
  static prepareReportResult(result) {
    // If any mutations happen to the report within the renderers, we want the original object untouched
    const clone = /** @type {LH.ReportResult} */ (JSON.parse(JSON.stringify(result)));

    // If LHR is older (≤3.0.3), it has no locale setting. Set default.
    if (!clone.configSettings.locale) {
      clone.configSettings.locale = 'en';
    }

    for (const audit of Object.values(clone.audits)) {
      // Turn 'not-applicable' (LHR <4.0) and 'not_applicable' (older proto versions)
      // into 'notApplicable' (LHR ≥4.0).
      // @ts-ignore tsc rightly flags that these values shouldn't occur.
      // eslint-disable-next-line max-len
      if (audit.scoreDisplayMode === 'not_applicable' || audit.scoreDisplayMode === 'not-applicable') {
        audit.scoreDisplayMode = 'notApplicable';
      }

      if (audit.details) {
        // Turn `auditDetails.type` of undefined (LHR <4.2) and 'diagnostic' (LHR <5.0)
        // into 'debugdata' (LHR ≥5.0).
        // @ts-ignore tsc rightly flags that these values shouldn't occur.
        if (audit.details.type === undefined || audit.details.type === 'diagnostic') {
          audit.details.type = 'debugdata';
        }

        // Add the jpg data URL prefix to filmstrip screenshots without them (LHR <5.0).
        if (audit.details.type === 'filmstrip') {
          for (const screenshot of audit.details.items) {
            if (!screenshot.data.startsWith(SCREENSHOT_PREFIX)) {
              screenshot.data = SCREENSHOT_PREFIX + screenshot.data;
            }
          }
        }
      }
    }

    // Set locale for number/date formatting and grab localized renderer strings from the LHR.
    Util.setNumberDateLocale(clone.configSettings.locale);
    if (clone.i18n && clone.i18n.rendererFormattedStrings) {
      Util.updateAllUIStrings(clone.i18n.rendererFormattedStrings);
    }

    // For convenience, smoosh all AuditResults into their auditRef (which has just weight & group)
    if (typeof clone.categories !== 'object') throw new Error('No categories provided.');
    for (const category of Object.values(clone.categories)) {
      category.auditRefs.forEach(auditRef => {
        const result = clone.audits[auditRef.id];
        auditRef.result = result;

        // attach the stackpacks to the auditRef object
        if (clone.stackPacks) {
          clone.stackPacks.forEach(pack => {
            if (pack.descriptions[auditRef.id]) {
              auditRef.stackPacks = auditRef.stackPacks || [];
              auditRef.stackPacks.push({
                title: pack.title,
                iconDataURL: pack.iconDataURL,
                description: pack.descriptions[auditRef.id],
              });
            }
          });
        }
      });
    }

    return clone;
  }


  /**
   * @param {LH.I18NRendererStrings} rendererFormattedStrings
   */
  static updateAllUIStrings(rendererFormattedStrings) {
    // TODO(i18n): don't mutate these here but on the LHR and pass that around everywhere
    for (const [key, value] of Object.entries(rendererFormattedStrings)) {
      Util.UIStrings[key] = value;
    }
  }

  /**
   * Used to determine if the "passed" for the purposes of showing up in the "failed" or "passed"
   * sections of the report.
   *
   * @param {{score: (number|null), scoreDisplayMode: string}} audit
   * @return {boolean}
   */
  static showAsPassed(audit) {
    switch (audit.scoreDisplayMode) {
      case 'manual':
      case 'notApplicable':
        return true;
      case 'error':
      case 'informative':
        return false;
      case 'numeric':
      case 'binary':
      default:
        return Number(audit.score) >= RATINGS.PASS.minScore;
    }
  }

  /**
   * Convert a score to a rating label.
   * @param {number|null} score
   * @param {string=} scoreDisplayMode
   * @return {string}
   */
  static calculateRating(score, scoreDisplayMode) {
    // Handle edge cases first, manual and not applicable receive 'pass', errored audits receive 'error'
    if (scoreDisplayMode === 'manual' || scoreDisplayMode === 'notApplicable') {
      return RATINGS.PASS.label;
    } else if (scoreDisplayMode === 'error') {
      return RATINGS.ERROR.label;
    } else if (score === null) {
      return RATINGS.FAIL.label;
    }

    // At this point, we're rating a standard binary/numeric audit
    let rating = RATINGS.FAIL.label;
    if (score >= RATINGS.PASS.minScore) {
      rating = RATINGS.PASS.label;
    } else if (score >= RATINGS.AVERAGE.minScore) {
      rating = RATINGS.AVERAGE.label;
    }
    return rating;
  }

  /**
   * Format number.
   * @param {number} number
   * @param {number=} granularity Number of decimal places to include. Defaults to 0.1.
   * @return {string}
   */
  static formatNumber(number, granularity = 0.1) {
    const coarseValue = Math.round(number / granularity) * granularity;
    return coarseValue.toLocaleString(Util.numberDateLocale);
  }

  /**
   * @param {number} size
   * @param {number=} granularity Controls how coarse the displayed value is, defaults to .01
   * @return {string}
   */
  static formatBytesToKB(size, granularity = 0.1) {
    const kbs = (Math.round(size / 1024 / granularity) * granularity)
      .toLocaleString(Util.numberDateLocale);
    return `${kbs}${NBSP}KB`;
  }

  /**
   * @param {number} ms
   * @param {number=} granularity Controls how coarse the displayed value is, defaults to 10
   * @return {string}
   */
  static formatMilliseconds(ms, granularity = 10) {
    const coarseTime = Math.round(ms / granularity) * granularity;
    return `${coarseTime.toLocaleString(Util.numberDateLocale)}${NBSP}ms`;
  }

  /**
   * @param {number} ms
   * @param {number=} granularity Controls how coarse the displayed value is, defaults to 0.1
   * @return {string}
   */
  static formatSeconds(ms, granularity = 0.1) {
    const coarseTime = Math.round(ms / 1000 / granularity) * granularity;
    return `${coarseTime.toLocaleString(Util.numberDateLocale)}${NBSP}s`;
  }

  /**
   * Format time.
   * @param {string} date
   * @return {string}
   */
  static formatDateTime(date) {
    /** @type {Intl.DateTimeFormatOptions} */
    const options = {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: 'numeric', timeZoneName: 'short',
    };
    let formatter = new Intl.DateTimeFormat(Util.numberDateLocale, options);

    // Force UTC if runtime timezone could not be detected.
    // See https://github.com/GoogleChrome/lighthouse/issues/1056
    const tz = formatter.resolvedOptions().timeZone;
    if (!tz || tz.toLowerCase() === 'etc/unknown') {
      options.timeZone = 'UTC';
      formatter = new Intl.DateTimeFormat(Util.numberDateLocale, options);
    }
    return formatter.format(new Date(date));
  }
  /**
   * Converts a time in milliseconds into a duration string, i.e. `1d 2h 13m 52s`
   * @param {number} timeInMilliseconds
   * @return {string}
   */
  static formatDuration(timeInMilliseconds) {
    let timeInSeconds = timeInMilliseconds / 1000;
    if (Math.round(timeInSeconds) === 0) {
      return 'None';
    }

    /** @type {Array<string>} */
    const parts = [];
    const unitLabels = /** @type {Object<string, number>} */ ({
      d: 60 * 60 * 24,
      h: 60 * 60,
      m: 60,
      s: 1,
    });

    Object.keys(unitLabels).forEach(label => {
      const unit = unitLabels[label];
      const numberOfUnits = Math.floor(timeInSeconds / unit);
      if (numberOfUnits > 0) {
        timeInSeconds -= numberOfUnits * unit;
        parts.push(`${numberOfUnits}\xa0${label}`);
      }
    });

    return parts.join(' ');
  }

  /**
   * @param {URL} parsedUrl
   * @param {{numPathParts?: number, preserveQuery?: boolean, preserveHost?: boolean}=} options
   * @return {string}
   */
  static getURLDisplayName(parsedUrl, options) {
    // Closure optional properties aren't optional in tsc, so fallback needs undefined  values.
    options = options || {numPathParts: undefined, preserveQuery: undefined,
      preserveHost: undefined};
    const numPathParts = options.numPathParts !== undefined ? options.numPathParts : 2;
    const preserveQuery = options.preserveQuery !== undefined ? options.preserveQuery : true;
    const preserveHost = options.preserveHost || false;

    let name;

    if (parsedUrl.protocol === 'about:' || parsedUrl.protocol === 'data:') {
      // Handle 'about:*' and 'data:*' URLs specially since they have no path.
      name = parsedUrl.href;
    } else {
      name = parsedUrl.pathname;
      const parts = name.split('/').filter(part => part.length);
      if (numPathParts && parts.length > numPathParts) {
        name = ELLIPSIS + parts.slice(-1 * numPathParts).join('/');
      }

      if (preserveHost) {
        name = `${parsedUrl.host}/${name.replace(/^\//, '')}`;
      }
      if (preserveQuery) {
        name = `${name}${parsedUrl.search}`;
      }
    }

    const MAX_LENGTH = 64;
    // Always elide hexadecimal hash
    name = name.replace(/([a-f0-9]{7})[a-f0-9]{13}[a-f0-9]*/g, `$1${ELLIPSIS}`);
    // Also elide other hash-like mixed-case strings
    name = name.replace(/([a-zA-Z0-9-_]{9})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-_]{10,}/g,
      `$1${ELLIPSIS}`);
    // Also elide long number sequences
    name = name.replace(/(\d{3})\d{6,}/g, `$1${ELLIPSIS}`);
    // Merge any adjacent ellipses
    name = name.replace(/\u2026+/g, ELLIPSIS);

    // Elide query params first
    if (name.length > MAX_LENGTH && name.includes('?')) {
      // Try to leave the first query parameter intact
      name = name.replace(/\?([^=]*)(=)?.*/, `?$1$2${ELLIPSIS}`);

      // Remove it all if it's still too long
      if (name.length > MAX_LENGTH) {
        name = name.replace(/\?.*/, `?${ELLIPSIS}`);
      }
    }

    // Elide too long names next
    if (name.length > MAX_LENGTH) {
      const dotIndex = name.lastIndexOf('.');
      if (dotIndex >= 0) {
        name = name.slice(0, MAX_LENGTH - 1 - (name.length - dotIndex)) +
          // Show file extension
          `${ELLIPSIS}${name.slice(dotIndex)}`;
      } else {
        name = name.slice(0, MAX_LENGTH - 1) + ELLIPSIS;
      }
    }

    return name;
  }

  /**
   * Split a URL into a file, hostname and origin for easy display.
   * @param {string} url
   * @return {{file: string, hostname: string, origin: string}}
   */
  static parseURL(url) {
    const parsedUrl = new URL(url);
    return {
      file: Util.getURLDisplayName(parsedUrl),
      hostname: parsedUrl.hostname,
      origin: parsedUrl.origin,
    };
  }

  /**
   * @param {string|URL} value
   * @return {URL}
   */
  static createOrReturnURL(value) {
    if (value instanceof URL) {
      return value;
    }

    return new URL(value);
  }

  /**
   * Gets the tld of a domain
   *
   * @param {string} hostname
   * @return {string} tld
   */
  static getTld(hostname) {
    const tlds = hostname.split('.').slice(-2);

    if (!listOfTlds.includes(tlds[0])) {
      return `.${tlds[tlds.length - 1]}`;
    }

    return `.${tlds.join('.')}`;
  }

  /**
   * Returns a primary domain for provided hostname (e.g. www.example.com -> example.com).
   * @param {string|URL} url hostname or URL object
   * @returns {string}
   */
  static getRootDomain(url) {
    const hostname = Util.createOrReturnURL(url).hostname;
    const tld = Util.getTld(hostname);

    // tld is .com or .co.uk which means we means that length is 1 to big
    // .com => 2 & .co.uk => 3
    const splitTld = tld.split('.');

    // get TLD + root domain
    return hostname.split('.').slice(-splitTld.length).join('.');
  }

  /**
   * @param {LH.Config.Settings} settings
   * @return {Array<{name: string, description: string}>}
   */
  static getEnvironmentDisplayValues(settings) {
    const emulationDesc = Util.getEmulationDescriptions(settings);

    return [
      {
        name: 'Device',
        description: emulationDesc.deviceEmulation,
      },
      {
        name: 'Network throttling',
        description: emulationDesc.networkThrottling,
      },
      {
        name: 'CPU throttling',
        description: emulationDesc.cpuThrottling,
      },
    ];
  }

  /**
   * @param {LH.Config.Settings} settings
   * @return {{deviceEmulation: string, networkThrottling: string, cpuThrottling: string, summary: string}}
   */
  static getEmulationDescriptions(settings) {
    let cpuThrottling;
    let networkThrottling;
    let summary;

    const throttling = settings.throttling;

    switch (settings.throttlingMethod) {
      case 'provided':
        cpuThrottling = 'Provided by environment';
        networkThrottling = 'Provided by environment';
        summary = 'No throttling applied';
        break;
      case 'devtools': {
        const {cpuSlowdownMultiplier, requestLatencyMs} = throttling;
        cpuThrottling = `${Util.formatNumber(cpuSlowdownMultiplier)}x slowdown (DevTools)`;
        networkThrottling = `${Util.formatNumber(requestLatencyMs)}${NBSP}ms HTTP RTT, ` +
          `${Util.formatNumber(throttling.downloadThroughputKbps)}${NBSP}Kbps down, ` +
          `${Util.formatNumber(throttling.uploadThroughputKbps)}${NBSP}Kbps up (DevTools)`;
        summary = 'Throttled Slow 4G network';
        break;
      }
      case 'simulate': {
        const {cpuSlowdownMultiplier, rttMs, throughputKbps} = throttling;
        cpuThrottling = `${Util.formatNumber(cpuSlowdownMultiplier)}x slowdown (Simulated)`;
        networkThrottling = `${Util.formatNumber(rttMs)}${NBSP}ms TCP RTT, ` +
          `${Util.formatNumber(throughputKbps)}${NBSP}Kbps throughput (Simulated)`;
        summary = 'Simulated Slow 4G network';
        break;
      }
      default:
        cpuThrottling = 'Unknown';
        networkThrottling = 'Unknown';
        summary = 'Unknown';
    }

    let deviceEmulation = 'No emulation';
    if (settings.emulatedFormFactor === 'mobile') deviceEmulation = 'Emulated Nexus 5X';
    if (settings.emulatedFormFactor === 'desktop') deviceEmulation = 'Emulated Desktop';

    return {
      deviceEmulation,
      cpuThrottling,
      networkThrottling,
      summary: `${deviceEmulation}, ${summary}`,
    };
  }

  /**
   * Set the locale to be used for Util's number and date formatting functions.
   * @param {LH.Locale} locale
   */
  static setNumberDateLocale(locale) {
    Util.numberDateLocale = locale;

    // When testing, use a locale with more exciting numeric formatting
    if (Util.numberDateLocale === 'en-XA') Util.numberDateLocale = 'de';
  }

  /**
   * Returns only lines that are near a message, or the first few lines if there are
   * no line messages.
   * @param {LH.Audit.Details.SnippetValue['lines']} lines
   * @param {LH.Audit.Details.SnippetValue['lineMessages']} lineMessages
   * @param {number} surroundingLineCount Number of lines to include before and after
   * the message. If this is e.g. 2 this function might return 5 lines.
   */
  static filterRelevantLines(lines, lineMessages, surroundingLineCount) {
    if (lineMessages.length === 0) {
      // no lines with messages, just return the first bunch of lines
      return lines.slice(0, surroundingLineCount * 2 + 1);
    }

    const minGapSize = 3;
    const lineNumbersToKeep = new Set();
    // Sort messages so we can check lineNumbersToKeep to see how big the gap to
    // the previous line is.
    lineMessages = lineMessages.sort((a, b) => (a.lineNumber || 0) - (b.lineNumber || 0));
    lineMessages.forEach(({lineNumber}) => {
      let firstSurroundingLineNumber = lineNumber - surroundingLineCount;
      let lastSurroundingLineNumber = lineNumber + surroundingLineCount;

      while (firstSurroundingLineNumber < 1) {
        // make sure we still show (surroundingLineCount * 2 + 1) lines in total
        firstSurroundingLineNumber++;
        lastSurroundingLineNumber++;
      }
      // If only a few lines would be omitted normally then we prefer to include
      // extra lines to avoid the tiny gap
      if (lineNumbersToKeep.has(firstSurroundingLineNumber - minGapSize - 1)) {
        firstSurroundingLineNumber -= minGapSize;
      }
      for (let i = firstSurroundingLineNumber; i <= lastSurroundingLineNumber; i++) {
        const surroundingLineNumber = i;
        lineNumbersToKeep.add(surroundingLineNumber);
      }
    });

    return lines.filter(line => lineNumbersToKeep.has(line.lineNumber));
  }

  /**
   * @param {string} categoryId
   */
  static isPluginCategory(categoryId) {
    return categoryId.startsWith('lighthouse-plugin-');
  }
}

/**
 * This value is updated on each run to the locale of the report
 * @type {LH.Locale}
 */
Util.numberDateLocale = 'en';

/**
 * Report-renderer-specific strings.
 * @type {LH.I18NRendererStrings}
 */
Util.UIStrings = {
  /** Disclaimer shown to users below the metric values (First Contentful Paint, Time to Interactive, etc) to warn them that the numbers they see will likely change slightly the next time they run Lighthouse. */
  varianceDisclaimer: 'Values are estimated and may vary.',
  /** Column heading label for the listing of opportunity audits. Each audit title represents an opportunity. There are only 2 columns, so no strict character limit.  */
  opportunityResourceColumnLabel: 'Opportunity',
  /** Column heading label for the estimated page load savings of opportunity audits. Estimated Savings is the total amount of time (in seconds) that Lighthouse computed could be reduced from the total page load time, if the suggested action is taken. There are only 2 columns, so no strict character limit. */
  opportunitySavingsColumnLabel: 'Estimated Savings',

  /** An error string displayed next to a particular audit when it has errored, but not provided any specific error message. */
  errorMissingAuditInfo: 'Report error: no audit information',
  /** A label, shown next to an audit title or metric title, indicating that there was an error computing it. The user can hover on the label to reveal a tooltip with the extended error message. Translation should be short (< 20 characters). */
  errorLabel: 'Error!',
  /** This label is shown above a bulleted list of warnings. It is shown directly below an audit that produced warnings. Warnings describe situations the user should be aware of, as Lighthouse was unable to complete all the work required on this audit. For example, The 'Unable to decode image (biglogo.jpg)' warning may show up below an image encoding audit. */
  warningHeader: 'Warnings: ',
  /** The tooltip text on an expandable chevron icon. Clicking the icon expands a section to reveal a list of audit results that was hidden by default. */
  auditGroupExpandTooltip: 'Show audits',
  /** Section heading shown above a list of passed audits that contain warnings. Audits under this section do not negatively impact the score, but Lighthouse has generated some potentially actionable suggestions that should be reviewed. This section is expanded by default and displays after the failing audits. */
  warningAuditsGroupTitle: 'Passed audits but with warnings',
  /** Section heading shown above a list of audits that are passing. 'Passed' here refers to a passing grade. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */
  passedAuditsGroupTitle: 'Passed audits',
  /** Section heading shown above a list of audits that do not apply to the page. For example, if an audit is 'Are images optimized?', but the page has no images on it, the audit will be marked as not applicable. This is neither passing or failing. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */
  notApplicableAuditsGroupTitle: 'Not applicable',
  /** Section heading shown above a list of audits that were not computed by Lighthouse. They serve as a list of suggestions for the user to go and manually check. For example, Lighthouse can't automate testing cross-browser compatibility, so that is listed within this section, so the user is reminded to test it themselves. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */
  manualAuditsGroupTitle: 'Additional items to manually check',

  /** Label shown preceding any important warnings that may have invalidated the entire report. For example, if the user has Chrome extensions installed, they may add enough performance overhead that Lighthouse's performance metrics are unreliable. If shown, this will be displayed at the top of the report UI. */
  toplevelWarningsMessage: 'There were issues affecting this run of Lighthouse:',

  /** String of text shown in a graphical representation of the flow of network requests for the web page. This label represents the initial network request that fetches an HTML page. This navigation may be redirected (eg. Initial navigation to http://example.com redirects to https://www.example.com). */
  crcInitialNavigation: 'Initial Navigation',
  /** Label of value shown in the summary of critical request chains. Refers to the total amount of time (milliseconds) of the longest critical path chain/sequence of network requests. Example value: 2310 ms */
  crcLongestDurationLabel: 'Maximum critical path latency:',

  /** Label for button that shows all lines of the snippet when clicked */
  snippetExpandButtonLabel: 'Expand snippet',
  /** Label for button that only shows a few lines of the snippet when clicked */
  snippetCollapseButtonLabel: 'Collapse snippet',

  /** Explanation shown to users below performance results to inform them that the test was done with a 4G network connection and to warn them that the numbers they see will likely change slightly the next time they run Lighthouse. 'Lighthouse' becomes link text to additional documentation. */
  lsPerformanceCategoryDescription: '[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.',
  /** Title of the lab data section of the Performance category. Within this section are various speed metrics which quantify the pageload performance into values presented in seconds and milliseconds. "Lab" is an abbreviated form of "laboratory", and refers to the fact that the data is from a controlled test of a website, not measurements from real users visiting that site.  */
  labDataTitle: 'Lab Data',

  /** This label is for a checkbox above a table of items loaded by a web page. The checkbox is used to show or hide third-party (or "3rd-party") resources in the table, where "third-party resources" refers to items loaded by a web page from URLs that aren't controlled by the owner of the web page. */
  thirdPartyResourcesLabel: 'Show 3rd-party resources',
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Util;
} else {
  self.Util = Util;
}
;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals URL self */

/** @typedef {HTMLElementTagNameMap & {[id: string]: HTMLElement}} HTMLElementByTagName */

class DOM {
  /**
   * @param {Document} document
   */
  constructor(document) {
    /** @type {Document} */
    this._document = document;
    /** @type {string} */
    this._lighthouseChannel = 'unknown';
  }

  /**
   * @template {string} T
   * @param {T} name
   * @param {string=} className
   * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs.
   *     Note: if an attribute key has an undefined value, this method does not
   *     set the attribute on the node.
   * @return {HTMLElementByTagName[T]}
   */
  createElement(name, className, attrs = {}) {
    const element = this._document.createElement(name);
    if (className) {
      element.className = className;
    }
    Object.keys(attrs).forEach(key => {
      const value = attrs[key];
      if (typeof value !== 'undefined') {
        element.setAttribute(key, value);
      }
    });
    return element;
  }

  /**
   * @return {DocumentFragment}
   */
  createFragment() {
    return this._document.createDocumentFragment();
  }

  /**
   * @template {string} T
   * @param {Element} parentElem
   * @param {T} elementName
   * @param {string=} className
   * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs.
   *     Note: if an attribute key has an undefined value, this method does not
   *     set the attribute on the node.
   * @return {HTMLElementByTagName[T]}
   */
  createChildOf(parentElem, elementName, className, attrs) {
    const element = this.createElement(elementName, className, attrs);
    parentElem.appendChild(element);
    return element;
  }

  /**
   * @param {string} selector
   * @param {ParentNode} context
   * @return {DocumentFragment} A clone of the template content.
   * @throws {Error}
   */
  cloneTemplate(selector, context) {
    const template = /** @type {?HTMLTemplateElement} */ (context.querySelector(selector));
    if (!template) {
      throw new Error(`Template not found: template${selector}`);
    }

    const clone = this._document.importNode(template.content, true);

    // Prevent duplicate styles in the DOM. After a template has been stamped
    // for the first time, remove the clone's styles so they're not re-added.
    if (template.hasAttribute('data-stamped')) {
      this.findAll('style', clone).forEach(style => style.remove());
    }
    template.setAttribute('data-stamped', 'true');

    return clone;
  }

  /**
   * Resets the "stamped" state of the templates.
   */
  resetTemplates() {
    this.findAll('template[data-stamped]', this._document).forEach(t => {
      t.removeAttribute('data-stamped');
    });
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  convertMarkdownLinkSnippets(text) {
    const element = this.createElement('span');

    // Split on markdown links (e.g. [some link](https://...)).
    const parts = text.split(/\[([^\]]*?)\]\((https?:\/\/.*?)\)/g);

    while (parts.length) {
      // Pop off the same number of elements as there are capture groups.
      const [preambleText, linkText, linkHref] = parts.splice(0, 3);
      element.appendChild(this._document.createTextNode(preambleText));

      // Append link if there are any.
      if (linkText && linkHref) {
        const url = new URL(linkHref);

        const DEVELOPERS_GOOGLE_ORIGIN = 'https://developers.google.com';
        if (url.origin === DEVELOPERS_GOOGLE_ORIGIN) {
          url.searchParams.set('utm_source', 'lighthouse');
          url.searchParams.set('utm_medium', this._lighthouseChannel);
        }

        const a = this.createElement('a');
        a.rel = 'noopener';
        a.target = '_blank';
        a.textContent = linkText;
        a.href = url.href;
        element.appendChild(a);
      }
    }

    return element;
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  convertMarkdownCodeSnippets(text) {
    const element = this.createElement('span');

    const parts = text.split(/`(.*?)`/g); // Split on markdown code slashes
    while (parts.length) {
      // Pop off the same number of elements as there are capture groups.
      const [preambleText, codeText] = parts.splice(0, 2);
      element.appendChild(this._document.createTextNode(preambleText));
      if (codeText) {
        const pre = this.createElement('code');
        pre.textContent = codeText;
        element.appendChild(pre);
      }
    }

    return element;
  }

  /**
   * The channel to use for UTM data when rendering links to the documentation.
   * @param {string} lighthouseChannel
   */
  setLighthouseChannel(lighthouseChannel) {
    this._lighthouseChannel = lighthouseChannel;
  }

  /**
   * @return {Document}
   */
  document() {
    return this._document;
  }

  /**
   * TODO(paulirish): import and conditionally apply the DevTools frontend subclasses instead of this
   * @return {boolean}
   */
  isDevTools() {
    return !!this._document.querySelector('.lh-devtools');
  }

  /**
   * Guaranteed context.querySelector. Always returns an element or throws if
   * nothing matches query.
   * @param {string} query
   * @param {ParentNode} context
   * @return {HTMLElement}
   */
  find(query, context) {
    /** @type {?HTMLElement} */
    const result = context.querySelector(query);
    if (result === null) {
      throw new Error(`query ${query} not found`);
    }
    return result;
  }

  /**
   * Helper for context.querySelectorAll. Returns an Array instead of a NodeList.
   * @param {string} query
   * @param {ParentNode} context
   * @return {Array<HTMLElement>}
   */
  findAll(query, context) {
    return Array.from(context.querySelectorAll(query));
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DOM;
} else {
  self.DOM = DOM;
}
;
/*
Details Element Polyfill 2.2.0
Copyright © 2018 Javan Makhmali
 */
(function() {
  "use strict";
  var element = document.createElement("details");
  element.innerHTML = "<summary>a</summary>b";
  element.setAttribute("style", "position: absolute; left: -9999px");
  var support = {
    open: "open" in element && elementExpands(),
    toggle: "ontoggle" in element
  };
  function elementExpands() {
    (document.body || document.documentElement).appendChild(element);
    var closedHeight = element.offsetHeight;
    element.open = true;
    var openedHeight = element.offsetHeight;
    element.parentNode.removeChild(element);
    return closedHeight != openedHeight;
  }
  var styles = '\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\ndetails > summary::before {\n  content: "►";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\ndetails[open] > summary::before {\n  content: "▼";\n}\n';
  var _ref = [], forEach = _ref.forEach, slice = _ref.slice;
  if (!support.open) {
    polyfillStyles();
    polyfillProperties();
    polyfillToggle();
    polyfillAccessibility();
  }
  if (support.open && !support.toggle) {
    polyfillToggleEvent();
  }
  function polyfillStyles() {
    document.head.insertAdjacentHTML("afterbegin", "<style>" + styles + "</style>");
  }
  function polyfillProperties() {
    var prototype = document.createElement("details").constructor.prototype;
    var setAttribute = prototype.setAttribute, removeAttribute = prototype.removeAttribute;
    var open = Object.getOwnPropertyDescriptor(prototype, "open");
    Object.defineProperties(prototype, {
      open: {
        get: function get() {
          if (this.tagName == "DETAILS") {
            return this.hasAttribute("open");
          } else {
            if (open && open.get) {
              return open.get.call(this);
            }
          }
        },
        set: function set(value) {
          if (this.tagName == "DETAILS") {
            return value ? this.setAttribute("open", "") : this.removeAttribute("open");
          } else {
            if (open && open.set) {
              return open.set.call(this, value);
            }
          }
        }
      },
      setAttribute: {
        value: function value(name, _value) {
          var _this = this;
          var call = function call() {
            return setAttribute.call(_this, name, _value);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (!wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", true);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      },
      removeAttribute: {
        value: function value(name) {
          var _this2 = this;
          var call = function call() {
            return removeAttribute.call(_this2, name);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", false);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      }
    });
  }
  function polyfillToggle() {
    onTogglingTrigger(function(element) {
      element.hasAttribute("open") ? element.removeAttribute("open") : element.setAttribute("open", "");
    });
  }
  function polyfillToggleEvent() {
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, function(mutation) {
          var target = mutation.target, attributeName = mutation.attributeName;
          if (target.tagName == "DETAILS" && attributeName == "open") {
            triggerToggle(toggle);
          }
        });
      }).observe(document.documentElement, {
        attributes: true,
        subtree: true
      });
    } else {
      onTogglingTrigger(function(element) {
        var wasOpen = element.getAttribute("open");
        setTimeout(function() {
          var isOpen = element.getAttribute("open");
          if (wasOpen != isOpen) {
            triggerToggle(element);
          }
        }, 1);
      });
    }
  }
  function polyfillAccessibility() {
    setAccessibilityAttributes(document);
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, function(mutation) {
          forEach.call(mutation.addedNodes, setAccessibilityAttributes);
        });
      }).observe(document.documentElement, {
        subtree: true,
        childList: true
      });
    } else {
      document.addEventListener("DOMNodeInserted", function(event) {
        setAccessibilityAttributes(event.target);
      });
    }
  }
  function setAccessibilityAttributes(root) {
    findElementsWithTagName(root, "SUMMARY").forEach(function(summary) {
      var details = findClosestElementWithTagName(summary, "DETAILS");
      summary.setAttribute("aria-expanded", details.hasAttribute("open"));
      if (!summary.hasAttribute("tabindex")) summary.setAttribute("tabindex", "0");
      if (!summary.hasAttribute("role")) summary.setAttribute("role", "button");
    });
  }
  function eventIsSignificant(event) {
    return !(event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable);
  }
  function onTogglingTrigger(callback) {
    addEventListener("click", function(event) {
      if (eventIsSignificant(event)) {
        if (event.which <= 1) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
          }
        }
      }
    }, false);
    addEventListener("keydown", function(event) {
      if (eventIsSignificant(event)) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
            event.preventDefault();
          }
        }
      }
    }, false);
  }
  function triggerToggle(element) {
    var event = document.createEvent("Event");
    event.initEvent("toggle", true, false);
    element.dispatchEvent(event);
  }
  function findElementsWithTagName(root, tagName) {
    return (root.tagName == tagName ? [ root ] : []).concat(typeof root.getElementsByTagName == "function" ? slice.call(root.getElementsByTagName(tagName)) : []);
  }
  function findClosestElementWithTagName(element, tagName) {
    if (typeof element.closest == "function") {
      return element.closest(tagName);
    } else {
      while (element) {
        if (element.tagName == tagName) {
          return element;
        } else {
          element = element.parentNode;
        }
      }
    }
  }
})();
;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self CriticalRequestChainRenderer SnippetRenderer Util URL */

/** @typedef {import('./dom.js')} DOM */

const URL_PREFIXES = ['http://', 'https://', 'data:'];

class DetailsRenderer {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    /** @type {DOM} */
    this._dom = dom;
    /** @type {ParentNode} */
    this._templateContext; // eslint-disable-line no-unused-expressions
  }

  /**
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this._templateContext = context;
  }

  /**
   * @param {LH.Audit.Details} details
   * @return {Element|null}
   */
  render(details) {
    switch (details.type) {
      case 'filmstrip':
        return this._renderFilmstrip(details);
      case 'list':
        return this._renderList(details);
      case 'table':
        return this._renderTable(details);
      case 'criticalrequestchain':
        return CriticalRequestChainRenderer.render(this._dom, this._templateContext, details, this);
      case 'opportunity':
        return this._renderTable(details);

      // Internal-only details, not for rendering.
      case 'screenshot':
      case 'debugdata':
        return null;

      default: {
        // @ts-ignore tsc thinks this unreachable, but ts-ignore for error message just in case.
        const detailsType = details.type;
        throw new Error(`Unknown type: ${detailsType}`);
      }
    }
  }

  /**
   * @param {{value: number, granularity?: number}} details
   * @return {Element}
   */
  _renderBytes(details) {
    // TODO: handle displayUnit once we have something other than 'kb'
    const value = Util.formatBytesToKB(details.value, details.granularity);
    return this._renderText(value);
  }

  /**
   * @param {{value: number, granularity?: number, displayUnit?: string}} details
   * @return {Element}
   */
  _renderMilliseconds(details) {
    let value = Util.formatMilliseconds(details.value, details.granularity);
    if (details.displayUnit === 'duration') {
      value = Util.formatDuration(details.value);
    }

    return this._renderText(value);
  }

  /**
   * @param {string} text
   * @return {HTMLElement}
   */
  renderTextURL(text) {
    const url = text;

    let displayedPath;
    let displayedHost;
    let title;
    try {
      const parsed = Util.parseURL(url);
      displayedPath = parsed.file === '/' ? parsed.origin : parsed.file;
      displayedHost = parsed.file === '/' ? '' : `(${parsed.hostname})`;
      title = url;
    } catch (e) {
      displayedPath = url;
    }

    const element = this._dom.createElement('div', 'lh-text__url');
    element.appendChild(this._renderLink({text: displayedPath, url}));

    if (displayedHost) {
      const hostElem = this._renderText(displayedHost);
      hostElem.classList.add('lh-text__url-host');
      element.appendChild(hostElem);
    }

    if (title) {
      element.title = url;
      // set the url on the element's dataset which we use to check 3rd party origins
      element.dataset.url = url;
    }
    return element;
  }

  /**
   * @param {{text: string, url: string}} details
   * @return {Element}
   */
  _renderLink(details) {
    const allowedProtocols = ['https:', 'http:'];
    let url;
    try {
      url = new URL(details.url);
    } catch (_) {}

    if (!url || !allowedProtocols.includes(url.protocol)) {
      // Fall back to just the link text if invalid or protocol not allowed.
      return this._renderText(details.text);
    }

    const a = this._dom.createElement('a');
    a.rel = 'noopener';
    a.target = '_blank';
    a.textContent = details.text;
    a.href = url.href;

    return a;
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  _renderText(text) {
    const element = this._dom.createElement('div', 'lh-text');
    element.textContent = text;
    return element;
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  _renderNumeric(text) {
    const element = this._dom.createElement('div', 'lh-numeric');
    element.textContent = text;
    return element;
  }

  /**
   * Create small thumbnail with scaled down image asset.
   * @param {string} details
   * @return {Element}
   */
  _renderThumbnail(details) {
    const element = this._dom.createElement('img', 'lh-thumbnail');
    const strValue = details;
    element.src = strValue;
    element.title = strValue;
    element.alt = '';
    return element;
  }

  /**
   * Render a details item value for embedding in a table. Renders the value
   * based on the heading's valueType, unless the value itself has a `type`
   * property to override it.
   * @param {LH.Audit.Details.TableItem[string] | LH.Audit.Details.OpportunityItem[string]} value
   * @param {LH.Audit.Details.OpportunityColumnHeading} heading
   * @return {Element|null}
   */
  _renderTableValue(value, heading) {
    if (typeof value === 'undefined' || value === null) {
      return null;
    }

    // First deal with the possible object forms of value.
    if (typeof value === 'object') {
      // The value's type overrides the heading's for this column.
      switch (value.type) {
        case 'code': {
          return this._renderCode(value.value);
        }
        case 'link': {
          return this._renderLink(value);
        }
        case 'node': {
          return this.renderNode(value);
        }
        case 'url': {
          return this.renderTextURL(value.value);
        }
        default: {
          throw new Error(`Unknown valueType: ${value.type}`);
        }
      }
    }

    // Next, deal with primitives.
    switch (heading.valueType) {
      case 'bytes': {
        const numValue = Number(value);
        return this._renderBytes({value: numValue, granularity: 1});
      }
      case 'code': {
        const strValue = String(value);
        return this._renderCode(strValue);
      }
      case 'ms': {
        const msValue = {
          value: Number(value),
          granularity: heading.granularity,
          displayUnit: heading.displayUnit,
        };
        return this._renderMilliseconds(msValue);
      }
      case 'numeric': {
        const strValue = String(value);
        return this._renderNumeric(strValue);
      }
      case 'text': {
        const strValue = String(value);
        return this._renderText(strValue);
      }
      case 'thumbnail': {
        const strValue = String(value);
        return this._renderThumbnail(strValue);
      }
      case 'timespanMs': {
        const numValue = Number(value);
        return this._renderMilliseconds({value: numValue});
      }
      case 'url': {
        const strValue = String(value);
        if (URL_PREFIXES.some(prefix => strValue.startsWith(prefix))) {
          return this.renderTextURL(strValue);
        } else {
          // Fall back to <pre> rendering if not actually a URL.
          return this._renderCode(strValue);
        }
      }
      default: {
        throw new Error(`Unknown valueType: ${heading.valueType}`);
      }
    }
  }

  /**
   * Get the headings of a table-like details object, converted into the
   * OpportunityColumnHeading type until we have all details use the same
   * heading format.
   * @param {LH.Audit.Details.Table|LH.Audit.Details.Opportunity} tableLike
   * @return {Array<LH.Audit.Details.OpportunityColumnHeading>} header
   */
  _getCanonicalizedTableHeadings(tableLike) {
    if (tableLike.type === 'opportunity') {
      return tableLike.headings;
    }

    return tableLike.headings.map(heading => {
      return {
        key: heading.key,
        label: heading.text,
        valueType: heading.itemType,
        displayUnit: heading.displayUnit,
        granularity: heading.granularity,
      };
    });
  }

  /**
   * @param {LH.Audit.Details.Table|LH.Audit.Details.Opportunity} details
   * @return {Element}
   */
  _renderTable(details) {
    if (!details.items.length) return this._dom.createElement('span');

    const tableElem = this._dom.createElement('table', 'lh-table');
    const theadElem = this._dom.createChildOf(tableElem, 'thead');
    const theadTrElem = this._dom.createChildOf(theadElem, 'tr');

    const headings = this._getCanonicalizedTableHeadings(details);

    for (const heading of headings) {
      const valueType = heading.valueType || 'text';
      const classes = `lh-table-column--${valueType}`;
      const labelEl = this._dom.createElement('div', 'lh-text');
      labelEl.textContent = heading.label;
      this._dom.createChildOf(theadTrElem, 'th', classes).appendChild(labelEl);
    }

    const tbodyElem = this._dom.createChildOf(tableElem, 'tbody');
    for (const row of details.items) {
      const rowElem = this._dom.createChildOf(tbodyElem, 'tr');
      for (const heading of headings) {
        const value = row[heading.key];
        const valueElement = this._renderTableValue(value, heading);

        if (valueElement) {
          const classes = `lh-table-column--${heading.valueType}`;
          this._dom.createChildOf(rowElem, 'td', classes).appendChild(valueElement);
        } else {
          this._dom.createChildOf(rowElem, 'td', 'lh-table-column--empty');
        }
      }
    }
    return tableElem;
  }

  /**
   * @param {LH.Audit.Details.List} details
   * @return {Element}
   */
  _renderList(details) {
    const listContainer = this._dom.createElement('div', 'lh-list');

    details.items.forEach(item => {
      const snippetEl = SnippetRenderer.render(this._dom, this._templateContext, item, this);
      listContainer.appendChild(snippetEl);
    });

    return listContainer;
  }

  /**
   * @param {LH.Audit.Details.NodeValue} item
   * @return {Element}
   * @protected
   */
  renderNode(item) {
    const element = this._dom.createElement('span', 'lh-node');
    if (item.nodeLabel) {
      const nodeLabelEl = this._dom.createElement('div');
      nodeLabelEl.textContent = item.nodeLabel;
      element.appendChild(nodeLabelEl);
    }
    if (item.snippet) {
      const snippetEl = this._dom.createElement('div');
      snippetEl.classList.add('lh-node__snippet');
      snippetEl.textContent = item.snippet;
      element.appendChild(snippetEl);
    }
    if (item.selector) {
      element.title = item.selector;
    }
    if (item.path) element.setAttribute('data-path', item.path);
    if (item.selector) element.setAttribute('data-selector', item.selector);
    if (item.snippet) element.setAttribute('data-snippet', item.snippet);

    return element;
  }

  /**
   * @param {LH.Audit.Details.Filmstrip} details
   * @return {Element}
   */
  _renderFilmstrip(details) {
    const filmstripEl = this._dom.createElement('div', 'lh-filmstrip');

    for (const thumbnail of details.items) {
      const frameEl = this._dom.createChildOf(filmstripEl, 'div', 'lh-filmstrip__frame');
      this._dom.createChildOf(frameEl, 'img', 'lh-filmstrip__thumbnail', {
        src: thumbnail.data,
        alt: `Screenshot`,
      });
    }
    return filmstripEl;
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  _renderCode(text) {
    const pre = this._dom.createElement('pre', 'lh-code');
    pre.textContent = text;
    return pre;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DetailsRenderer;
} else {
  self.DetailsRenderer = DetailsRenderer;
}
;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * @fileoverview This file contains helpers for constructing and rendering the
 * critical request chains network tree.
 */

/* globals self Util */

/** @typedef {import('./dom.js')} DOM */

class CriticalRequestChainRenderer {
  /**
   * Create render context for critical-request-chain tree display.
   * @param {LH.Audit.SimpleCriticalRequestNode} tree
   * @return {{tree: LH.Audit.SimpleCriticalRequestNode, startTime: number, transferSize: number}}
   */
  static initTree(tree) {
    let startTime = 0;
    const rootNodes = Object.keys(tree);
    if (rootNodes.length > 0) {
      const node = tree[rootNodes[0]];
      startTime = node.request.startTime;
    }

    return {tree, startTime, transferSize: 0};
  }

  /**
   * Helper to create context for each critical-request-chain node based on its
   * parent. Calculates if this node is the last child, whether it has any
   * children itself and what the tree looks like all the way back up to the root,
   * so the tree markers can be drawn correctly.
   * @param {LH.Audit.SimpleCriticalRequestNode} parent
   * @param {string} id
   * @param {number} startTime
   * @param {number} transferSize
   * @param {Array<boolean>=} treeMarkers
   * @param {boolean=} parentIsLastChild
   * @return {CRCSegment}
   */
  static createSegment(parent, id, startTime, transferSize, treeMarkers, parentIsLastChild) {
    const node = parent[id];
    const siblings = Object.keys(parent);
    const isLastChild = siblings.indexOf(id) === (siblings.length - 1);
    const hasChildren = !!node.children && Object.keys(node.children).length > 0;

    // Copy the tree markers so that we don't change by reference.
    const newTreeMarkers = Array.isArray(treeMarkers) ? treeMarkers.slice(0) : [];

    // Add on the new entry.
    if (typeof parentIsLastChild !== 'undefined') {
      newTreeMarkers.push(!parentIsLastChild);
    }

    return {
      node,
      isLastChild,
      hasChildren,
      startTime,
      transferSize: transferSize + node.request.transferSize,
      treeMarkers: newTreeMarkers,
    };
  }

  /**
   * Creates the DOM for a tree segment.
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {CRCSegment} segment
   * @param {DetailsRenderer} detailsRenderer
   * @return {Node}
   */
  static createChainNode(dom, tmpl, segment, detailsRenderer) {
    const chainsEl = dom.cloneTemplate('#tmpl-lh-crc__chains', tmpl);

    // Hovering over request shows full URL.
    dom.find('.crc-node', chainsEl).setAttribute('title', segment.node.request.url);

    const treeMarkeEl = dom.find('.crc-node__tree-marker', chainsEl);

    // Construct lines and add spacers for sub requests.
    segment.treeMarkers.forEach(separator => {
      if (separator) {
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert'));
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));
      } else {
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));
      }
    });

    if (segment.isLastChild) {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker up-right'));
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));
    } else {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert-right'));
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));
    }

    if (segment.hasChildren) {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker horiz-down'));
    } else {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));
    }

    // Fill in url, host, and request size information.
    const url = segment.node.request.url;
    const linkEl = detailsRenderer.renderTextURL(url);
    const treevalEl = dom.find('.crc-node__tree-value', chainsEl);
    treevalEl.appendChild(linkEl);

    if (!segment.hasChildren) {
      const {startTime, endTime, transferSize} = segment.node.request;
      const span = dom.createElement('span', 'crc-node__chain-duration');
      span.textContent = ' - ' + Util.formatMilliseconds((endTime - startTime) * 1000) + ', ';
      const span2 = dom.createElement('span', 'crc-node__chain-duration');
      span2.textContent = Util.formatBytesToKB(transferSize, 0.01);

      treevalEl.appendChild(span);
      treevalEl.appendChild(span2);
    }

    return chainsEl;
  }

  /**
   * Recursively builds a tree from segments.
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {CRCSegment} segment
   * @param {Element} elem Parent element.
   * @param {LH.Audit.Details.CriticalRequestChain} details
   * @param {DetailsRenderer} detailsRenderer
   */
  static buildTree(dom, tmpl, segment, elem, details, detailsRenderer) {
    elem.appendChild(CRCRenderer.createChainNode(dom, tmpl, segment, detailsRenderer));
    if (segment.node.children) {
      for (const key of Object.keys(segment.node.children)) {
        const childSegment = CRCRenderer.createSegment(segment.node.children, key,
          segment.startTime, segment.transferSize, segment.treeMarkers, segment.isLastChild);
        CRCRenderer.buildTree(dom, tmpl, childSegment, elem, details, detailsRenderer);
      }
    }
  }

  /**
   * @param {DOM} dom
   * @param {ParentNode} templateContext
   * @param {LH.Audit.Details.CriticalRequestChain} details
   * @param {DetailsRenderer} detailsRenderer
   * @return {Element}
   */
  static render(dom, templateContext, details, detailsRenderer) {
    const tmpl = dom.cloneTemplate('#tmpl-lh-crc', templateContext);
    const containerEl = dom.find('.lh-crc', tmpl);

    // Fill in top summary.
    dom.find('.crc-initial-nav', tmpl).textContent = Util.UIStrings.crcInitialNavigation;
    dom.find('.lh-crc__longest_duration_label', tmpl).textContent =
        Util.UIStrings.crcLongestDurationLabel;
    dom.find('.lh-crc__longest_duration', tmpl).textContent =
        Util.formatMilliseconds(details.longestChain.duration);

    // Construct visual tree.
    const root = CRCRenderer.initTree(details.chains);
    for (const key of Object.keys(root.tree)) {
      const segment = CRCRenderer.createSegment(root.tree, key, root.startTime, root.transferSize);
      CRCRenderer.buildTree(dom, tmpl, segment, containerEl, details, detailsRenderer);
    }

    return dom.find('.lh-crc-container', tmpl);
  }
}

// Alias b/c the name is really long.
const CRCRenderer = CriticalRequestChainRenderer;

// Allow Node require()'ing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CriticalRequestChainRenderer;
} else {
  self.CriticalRequestChainRenderer = CriticalRequestChainRenderer;
}

/** @typedef {{
      node: LH.Audit.SimpleCriticalRequestNode[string],
      isLastChild: boolean,
      hasChildren: boolean,
      startTime: number,
      transferSize: number,
      treeMarkers: Array<boolean>
  }} CRCSegment
 */
;
/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* globals self, Util */

/** @typedef {import('./details-renderer')} DetailsRenderer */

/** @enum {number} */
const LineVisibility = {
  /** Show regardless of whether the snippet is collapsed or expanded */
  ALWAYS: 0,
  WHEN_COLLAPSED: 1,
  WHEN_EXPANDED: 2,
};

/** @enum {number} */
const LineContentType = {
  /** A line of content */
  CONTENT_NORMAL: 0,
  /** A line of content that's emphasized by setting the CSS background color */
  CONTENT_HIGHLIGHTED: 1,
  /** Use when some lines are hidden, shows the "..." placeholder */
  PLACEHOLDER: 2,
  /** A message about a line of content or the snippet in general */
  MESSAGE: 3,
};

/** @typedef {{
    content: string;
    lineNumber: string | number;
    contentType: LineContentType;
    truncated?: boolean;
    visibility?: LineVisibility;
}} LineDetails */

const classNamesByContentType = {
  [LineContentType.CONTENT_NORMAL]: ['lh-snippet__line--content'],
  [LineContentType.CONTENT_HIGHLIGHTED]: [
    'lh-snippet__line--content',
    'lh-snippet__line--content-highlighted',
  ],
  [LineContentType.PLACEHOLDER]: ['lh-snippet__line--placeholder'],
  [LineContentType.MESSAGE]: ['lh-snippet__line--message'],
};

/**
 * @param {LH.Audit.Details.SnippetValue['lines']} lines
 * @param {number} lineNumber
 * @return {{line?: LH.Audit.Details.SnippetValue['lines'][0], previousLine?: LH.Audit.Details.SnippetValue['lines'][0]}}
 */
function getLineAndPreviousLine(lines, lineNumber) {
  return {
    line: lines.find(l => l.lineNumber === lineNumber),
    previousLine: lines.find(l => l.lineNumber === lineNumber - 1),
  };
}

/**
 * @param {LH.Audit.Details.SnippetValue["lineMessages"]} messages
 * @param {number} lineNumber
 */
function getMessagesForLineNumber(messages, lineNumber) {
  return messages.filter(h => h.lineNumber === lineNumber);
}

/**
 * @param {LH.Audit.Details.SnippetValue} details
 * @return {LH.Audit.Details.SnippetValue['lines']}
 */
function getLinesWhenCollapsed(details) {
  const SURROUNDING_LINES_TO_SHOW_WHEN_COLLAPSED = 2;
  return Util.filterRelevantLines(
    details.lines,
    details.lineMessages,
    SURROUNDING_LINES_TO_SHOW_WHEN_COLLAPSED
  );
}

/**
 * Render snippet of text with line numbers and annotations.
 * By default we only show a few lines around each annotation and the user
 * can click "Expand snippet" to show more.
 * Content lines with annotations are highlighted.
 */
class SnippetRenderer {
  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LH.Audit.Details.SnippetValue} details
   * @param {DetailsRenderer} detailsRenderer
   * @param {function} toggleExpandedFn
   * @return {DocumentFragment}
   */
  static renderHeader(dom, tmpl, details, detailsRenderer, toggleExpandedFn) {
    const linesWhenCollapsed = getLinesWhenCollapsed(details);
    const canExpand = linesWhenCollapsed.length < details.lines.length;

    const header = dom.cloneTemplate('#tmpl-lh-snippet__header', tmpl);
    dom.find('.lh-snippet__title', header).textContent = details.title;

    const {
      snippetCollapseButtonLabel,
      snippetExpandButtonLabel,
    } = Util.UIStrings;
    dom.find(
      '.lh-snippet__btn-label-collapse',
      header
    ).textContent = snippetCollapseButtonLabel;
    dom.find(
      '.lh-snippet__btn-label-expand',
      header
    ).textContent = snippetExpandButtonLabel;

    const toggleExpandButton = dom.find('.lh-snippet__toggle-expand', header);
    // If we're already showing all the available lines of the snippet, we don't need an
    // expand/collapse button and can remove it from the DOM.
    // If we leave the button in though, wire up the click listener to toggle visibility!
    if (!canExpand) {
      toggleExpandButton.remove();
    } else {
      toggleExpandButton.addEventListener('click', () => toggleExpandedFn());
    }

    // We only show the source node of the snippet in DevTools because then the user can
    // access the full element detail. Just being able to see the outer HTML isn't very useful.
    if (details.node && dom.isDevTools()) {
      const nodeContainer = dom.find('.lh-snippet__node', header);
      nodeContainer.appendChild(detailsRenderer.renderNode(details.node));
    }

    return header;
  }

  /**
   * Renders a line (text content, message, or placeholder) as a DOM element.
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LineDetails} lineDetails
   * @return {Element}
   */
  static renderSnippetLine(
      dom,
      tmpl,
      {content, lineNumber, truncated, contentType, visibility}
  ) {
    const clonedTemplate = dom.cloneTemplate('#tmpl-lh-snippet__line', tmpl);
    const contentLine = dom.find('.lh-snippet__line', clonedTemplate);
    const {classList} = contentLine;

    classNamesByContentType[contentType].forEach(typeClass =>
      classList.add(typeClass)
    );

    if (visibility === LineVisibility.WHEN_COLLAPSED) {
      classList.add('lh-snippet__show-if-collapsed');
    } else if (visibility === LineVisibility.WHEN_EXPANDED) {
      classList.add('lh-snippet__show-if-expanded');
    }

    const lineContent = content + (truncated ? '…' : '');
    const lineContentEl = dom.find('.lh-snippet__line code', contentLine);
    if (contentType === LineContentType.MESSAGE) {
      lineContentEl.appendChild(dom.convertMarkdownLinkSnippets(lineContent));
    } else {
      lineContentEl.textContent = lineContent;
    }

    dom.find(
      '.lh-snippet__line-number',
      contentLine
    ).textContent = lineNumber.toString();

    return contentLine;
  }

  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {{message: string}} message
   * @return {Element}
   */
  static renderMessage(dom, tmpl, message) {
    return SnippetRenderer.renderSnippetLine(dom, tmpl, {
      lineNumber: ' ',
      content: message.message,
      contentType: LineContentType.MESSAGE,
    });
  }

  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LineVisibility} visibility
   * @return {Element}
   */
  static renderOmittedLinesPlaceholder(dom, tmpl, visibility) {
    return SnippetRenderer.renderSnippetLine(dom, tmpl, {
      lineNumber: '…',
      content: '',
      visibility,
      contentType: LineContentType.PLACEHOLDER,
    });
  }

  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LH.Audit.Details.SnippetValue} details
   * @return {DocumentFragment}
   */
  static renderSnippetContent(dom, tmpl, details) {
    const template = dom.cloneTemplate('#tmpl-lh-snippet__content', tmpl);
    const snippetEl = dom.find('.lh-snippet__snippet-inner', template);

    // First render messages that don't belong to specific lines
    details.generalMessages.forEach(m =>
      snippetEl.append(SnippetRenderer.renderMessage(dom, tmpl, m))
    );
    // Then render the lines and their messages, as well as placeholders where lines are omitted
    snippetEl.append(SnippetRenderer.renderSnippetLines(dom, tmpl, details));

    return template;
  }

  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LH.Audit.Details.SnippetValue} details
   * @return {DocumentFragment}
   */
  static renderSnippetLines(dom, tmpl, details) {
    const {lineMessages, generalMessages, lineCount, lines} = details;
    const linesWhenCollapsed = getLinesWhenCollapsed(details);
    const hasOnlyGeneralMessages =
      generalMessages.length > 0 && lineMessages.length === 0;

    const lineContainer = dom.createFragment();

    // When a line is not shown in the collapsed state we try to see if we also need an
    // omitted lines placeholder for the expanded state, rather than rendering two separate
    // placeholders.
    let hasPendingOmittedLinesPlaceholderForCollapsedState = false;

    for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
      const {line, previousLine} = getLineAndPreviousLine(lines, lineNumber);
      const {
        line: lineWhenCollapsed,
        previousLine: previousLineWhenCollapsed,
      } = getLineAndPreviousLine(linesWhenCollapsed, lineNumber);

      const showLineWhenCollapsed = !!lineWhenCollapsed;
      const showPreviousLineWhenCollapsed = !!previousLineWhenCollapsed;

      // If we went from showing lines in the collapsed state to not showing them
      // we need to render a placeholder
      if (showPreviousLineWhenCollapsed && !showLineWhenCollapsed) {
        hasPendingOmittedLinesPlaceholderForCollapsedState = true;
      }
      // If we are back to lines being visible in the collapsed and the placeholder
      // hasn't been rendered yet then render it now
      if (
        showLineWhenCollapsed &&
        hasPendingOmittedLinesPlaceholderForCollapsedState
      ) {
        lineContainer.append(
          SnippetRenderer.renderOmittedLinesPlaceholder(
            dom,
            tmpl,
            LineVisibility.WHEN_COLLAPSED
          )
        );
        hasPendingOmittedLinesPlaceholderForCollapsedState = false;
      }

      // Render omitted lines placeholder if we have not already rendered one for this gap
      const isFirstOmittedLineWhenExpanded = !line && !!previousLine;
      const isFirstLineOverallAndIsOmittedWhenExpanded =
        !line && lineNumber === 1;
      if (
        isFirstOmittedLineWhenExpanded ||
        isFirstLineOverallAndIsOmittedWhenExpanded
      ) {
        // In the collapsed state we don't show omitted lines placeholders around
        // the edges of the snippet
        const hasRenderedAllLinesVisibleWhenCollapsed = !linesWhenCollapsed.some(
          l => l.lineNumber > lineNumber
        );
        const onlyShowWhenExpanded =
          hasRenderedAllLinesVisibleWhenCollapsed || lineNumber === 1;
        lineContainer.append(
          SnippetRenderer.renderOmittedLinesPlaceholder(
            dom,
            tmpl,
            onlyShowWhenExpanded
              ? LineVisibility.WHEN_EXPANDED
              : LineVisibility.ALWAYS
          )
        );
        hasPendingOmittedLinesPlaceholderForCollapsedState = false;
      }

      if (!line) {
        // Can't render the line if we don't know its content (instead we've rendered a placeholder)
        continue;
      }

      // Now render the line and any messages
      const messages = getMessagesForLineNumber(lineMessages, lineNumber);
      const highlightLine = messages.length > 0 || hasOnlyGeneralMessages;
      const contentLineDetails = Object.assign({}, line, {
        contentType: highlightLine
          ? LineContentType.CONTENT_HIGHLIGHTED
          : LineContentType.CONTENT_NORMAL,
        visibility: lineWhenCollapsed
          ? LineVisibility.ALWAYS
          : LineVisibility.WHEN_EXPANDED,
      });
      lineContainer.append(
        SnippetRenderer.renderSnippetLine(dom, tmpl, contentLineDetails)
      );

      messages.forEach(message => {
        lineContainer.append(SnippetRenderer.renderMessage(dom, tmpl, message));
      });
    }

    return lineContainer;
  }

  /**
   * @param {DOM} dom
   * @param {ParentNode} templateContext
   * @param {LH.Audit.Details.SnippetValue} details
   * @param {DetailsRenderer} detailsRenderer
   * @return {Element}
   */
  static render(dom, templateContext, details, detailsRenderer) {
    const tmpl = dom.cloneTemplate('#tmpl-lh-snippet', templateContext);
    const snippetEl = dom.find('.lh-snippet', tmpl);

    const header = SnippetRenderer.renderHeader(
      dom,
      tmpl,
      details,
      detailsRenderer,
      () => snippetEl.classList.toggle('lh-snippet--expanded')
    );
    const content = SnippetRenderer.renderSnippetContent(dom, tmpl, details);
    snippetEl.append(header, content);

    return snippetEl;
  }
}

// Allow Node require()'ing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SnippetRenderer;
} else {
  self.SnippetRenderer = SnippetRenderer;
}
;
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* global URL */

/**
 * @fileoverview
 * @suppress {reportUnknownTypes}
 */

/**
 * Generate a filenamePrefix of hostname_YYYY-MM-DD_HH-MM-SS
 * Date/time uses the local timezone, however Node has unreliable ICU
 * support, so we must construct a YYYY-MM-DD date format manually. :/
 * @param {{finalUrl: string, fetchTime: string}} lhr
 * @return {string}
 */
function getFilenamePrefix(lhr) {
  const hostname = new URL(lhr.finalUrl).hostname;
  const date = (lhr.fetchTime && new Date(lhr.fetchTime)) || new Date();

  const timeStr = date.toLocaleTimeString('en-US', {hour12: false});
  const dateParts = date.toLocaleDateString('en-US', {
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).split('/');
  // @ts-ignore - parts exists
  dateParts.unshift(dateParts.pop());
  const dateStr = dateParts.join('-');

  const filenamePrefix = `${hostname}_${dateStr}_${timeStr}`;
  // replace characters that are unfriendly to filenames
  return filenamePrefix.replace(/[/?<>\\:*|"]/g, '-');
}

// don't attempt to export in the browser.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {getFilenamePrefix};
}
;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * Logs messages via a UI butter.
 */
class Logger {
  /**
   * @param {Element} element
   */
  constructor(element) {
    /** @type {Element} */
    this.el = element;
    this._id = undefined;
  }

  /**
   * Shows a butter bar.
   * @param {string} msg The message to show.
   * @param {boolean=} autoHide True to hide the message after a duration.
   *     Default is true.
   */
  log(msg, autoHide = true) {
    this._id && clearTimeout(this._id);

    this.el.textContent = msg;
    this.el.classList.add('show');
    if (autoHide) {
      this._id = setTimeout(_ => {
        this.el.classList.remove('show');
      }, 7000);
    }
  }

  /**
   * @param {string} msg
   */
  warn(msg) {
    this.log('Warning: ' + msg);
  }

  /**
   * @param {string} msg
   */
  error(msg) {
    this.log(msg);

    // Rethrow to make sure it's auditable as an error, but in a setTimeout so page
    // recovers gracefully and user can try loading a report again.
    setTimeout(_ => {
      throw new Error(msg);
    }, 0);
  }

  /**
   * Explicitly hides the butter bar.
   */
  hide() {
    this._id && clearTimeout(this._id);
    this.el.classList.remove('show');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Logger;
}
;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* eslint-env browser */

/**
 * @fileoverview Adds tools button, print, and other dynamic functionality to
 * the report.
 */

/* globals getFilenamePrefix Util */

/**
 * @param {HTMLTableElement} tableEl
 * @return {Array<HTMLTableRowElement>}
 */
function getTableRows(tableEl) {
  return Array.from(tableEl.tBodies[0].rows);
}

class ReportUIFeatures {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    /** @type {LH.Result} */
    this.json; // eslint-disable-line no-unused-expressions
    /** @type {DOM} */
    this._dom = dom;
    /** @type {Document} */
    this._document = this._dom.document();
    /** @type {ParentNode} */
    this._templateContext = this._dom.document();
    /** @type {boolean} */
    this._copyAttempt = false;
    /** @type {HTMLElement} */
    this.toolsButton; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.topbarEl; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.scoreScaleEl; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.stickyHeaderEl; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.highlightEl; // eslint-disable-line no-unused-expressions

    this.onMediaQueryChange = this.onMediaQueryChange.bind(this);
    this.onCopy = this.onCopy.bind(this);
    this.onToolsButtonClick = this.onToolsButtonClick.bind(this);
    this.onToolAction = this.onToolAction.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChevronClick = this.onChevronClick.bind(this);
    this.collapseAllDetails = this.collapseAllDetails.bind(this);
    this.expandAllDetails = this.expandAllDetails.bind(this);
    this._toggleDarkTheme = this._toggleDarkTheme.bind(this);
    this._updateStickyHeaderOnScroll = this._updateStickyHeaderOnScroll.bind(this);
  }

  /**
   * Adds tools button, print, and other functionality to the report. The method
   * should be called whenever the report needs to be re-rendered.
   * @param {LH.Result} report
   */
  initFeatures(report) {
    this.json = report;

    this._setupMediaQueryListeners();
    this._setupToolsButton();
    this._setupThirdPartyFilter();
    this._setUpCollapseDetailsAfterPrinting();
    this._resetUIState();
    this._document.addEventListener('keyup', this.onKeyUp);
    this._document.addEventListener('copy', this.onCopy);

    const topbarLogo = this._dom.find('.lh-topbar__logo', this._document);
    topbarLogo.addEventListener('click', () => this._toggleDarkTheme());

    let turnOffTheLights = false;
    // Do not query the system preferences for DevTools - DevTools should only apply dark theme
    // if dark is selected in the settings panel.
    if (!this._dom.isDevTools() && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      turnOffTheLights = true;
    }

    // Fireworks.
    const scoresAll100 = Object.values(report.categories).every(cat => cat.score === 1);
    const hasAllCoreCategories =
      Object.keys(report.categories).filter(id => !Util.isPluginCategory(id)).length >= 5;
    if (scoresAll100 && hasAllCoreCategories) {
      turnOffTheLights = true;
      this._enableFireworks();
    }

    if (turnOffTheLights) {
      this._toggleDarkTheme(true);
    }

    // There is only a sticky header when at least 2 categories are present.
    if (Object.keys(this.json.categories).length >= 2) {
      this._setupStickyHeaderElements();
      const containerEl = this._dom.find('.lh-container', this._document);
      const elToAddScrollListener = this._getScrollParent(containerEl);
      elToAddScrollListener.addEventListener('scroll', this._updateStickyHeaderOnScroll);

      // Use ResizeObserver where available.
      // TODO: there is an issue with incorrect position numbers and, as a result, performance
      // issues due to layout thrashing.
      // See https://github.com/GoogleChrome/lighthouse/pull/9023/files#r288822287 for details.
      // For now, limit to DevTools.
      if (this._dom.isDevTools()) {
        const resizeObserver = new window.ResizeObserver(this._updateStickyHeaderOnScroll);
        resizeObserver.observe(containerEl);
      } else {
        window.addEventListener('resize', this._updateStickyHeaderOnScroll);
      }
    }

    // Show the metric descriptions by default when there is an error.
    const hasMetricError = report.categories.performance && report.categories.performance.auditRefs
      .some(audit => Boolean(audit.group === 'metrics' && report.audits[audit.id].errorMessage));
    if (hasMetricError) {
      const toggleInputEl = /** @type {HTMLInputElement} */ (
        this._dom.find('.lh-metrics-toggle__input', this._document));
      toggleInputEl.checked = true;
    }
  }

  /**
   * Define a custom element for <templates> to be extracted from. For example:
   *     this.setTemplateContext(new DOMParser().parseFromString(htmlStr, 'text/html'))
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this._templateContext = context;
  }

  /**
   * Finds the first scrollable ancestor of `element`. Falls back to the document.
   * @param {HTMLElement} element
   * @return {Node}
   */
  _getScrollParent(element) {
    const {overflowY} = window.getComputedStyle(element);
    const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

    if (isScrollable) {
      return element;
    }

    if (element.parentElement) {
      return this._getScrollParent(element.parentElement);
    }

    return document;
  }

  _enableFireworks() {
    const scoresContainer = this._dom.find('.lh-scores-container', this._document);
    scoresContainer.classList.add('score100');
    scoresContainer.addEventListener('click', _ => {
      scoresContainer.classList.toggle('fireworks-paused');
    });
  }

  /**
   * Fires a custom DOM event on target.
   * @param {string} name Name of the event.
   * @param {Node=} target DOM node to fire the event on.
   * @param {*=} detail Custom data to include.
   */
  _fireEventOn(name, target = this._document, detail) {
    const event = new CustomEvent(name, detail ? {detail} : undefined);
    target.dispatchEvent(event);
  }

  _setupMediaQueryListeners() {
    const mediaQuery = self.matchMedia('(max-width: 500px)');
    mediaQuery.addListener(this.onMediaQueryChange);
    // Ensure the handler is called on init
    this.onMediaQueryChange(mediaQuery);
  }

  /**
   * Handle media query change events.
   * @param {MediaQueryList|MediaQueryListEvent} mql
   */
  onMediaQueryChange(mql) {
    const root = this._dom.find('.lh-root', this._document);
    root.classList.toggle('lh-narrow', mql.matches);
  }

  _setupToolsButton() {
    this.toolsButton = this._dom.find('.lh-tools__button', this._document);
    this.toolsButton.addEventListener('click', this.onToolsButtonClick);

    const dropdown = this._dom.find('.lh-tools__dropdown', this._document);
    dropdown.addEventListener('click', this.onToolAction);
  }

  _setupThirdPartyFilter() {
    // Some audits should not display the third party filter option.
    const thirdPartyFilterAuditExclusions = [
      // This audit deals explicitly with third party resources.
      'uses-rel-preconnect',
    ];

    // Get all tables with a text url column.
    /** @type {Array<HTMLTableElement>} */
    const tables = Array.from(this._document.querySelectorAll('.lh-table'));
    const tablesWithUrls = tables
      .filter(el => el.querySelector('td.lh-table-column--url'))
      .filter(el => {
        const containingAudit = el.closest('.lh-audit');
        if (!containingAudit) throw new Error('.lh-table not within audit');
        return !thirdPartyFilterAuditExclusions.includes(containingAudit.id);
      });

    tablesWithUrls.forEach((tableEl, index) => {
      const urlItems = this._getUrlItems(tableEl);
      const thirdPartyRows = this._getThirdPartyRows(tableEl, urlItems, this.json.finalUrl);
      // If all or none of the rows are 3rd party, no checkbox!
      if (thirdPartyRows.size === urlItems.length || !thirdPartyRows.size) return;

      // create input box
      const filterTemplate = this._dom.cloneTemplate('#tmpl-lh-3p-filter', this._templateContext);
      const filterInput = this._dom.find('input', filterTemplate);
      const id = `lh-3p-filter-label--${index}`;

      filterInput.id = id;
      filterInput.addEventListener('change', e => {
        // Remove rows from the dom and keep track of them to re-add on uncheck.
        // Why removing instead of hiding? To keep nth-child(even) background-colors working.
        if (e.target instanceof HTMLInputElement && !e.target.checked) {
          for (const row of thirdPartyRows.values()) {
            row.remove();
          }
        } else {
          // Add row elements back to original positions.
          for (const [position, row] of thirdPartyRows.entries()) {
            const childrenArr = getTableRows(tableEl);
            tableEl.tBodies[0].insertBefore(row, childrenArr[position]);
          }
        }
      });

      this._dom.find('label', filterTemplate).setAttribute('for', id);
      this._dom.find('.lh-3p-filter-count', filterTemplate).textContent =
          `${thirdPartyRows.size}`;
      this._dom.find('.lh-3p-ui-string', filterTemplate).textContent =
          Util.UIStrings.thirdPartyResourcesLabel;

      // Finally, add checkbox to the DOM.
      if (!tableEl.parentNode) return; // Keep tsc happy.
      tableEl.parentNode.insertBefore(filterTemplate, tableEl);
    });
  }

  /**
   * From a table with URL entries, finds the rows containing third-party URLs
   * and returns a Map of those rows, mapping from row index to row Element.
   * @param {HTMLTableElement} el
   * @param {string} finalUrl
   * @param {Array<HTMLElement>} urlItems
   * @return {Map<number, HTMLTableRowElement>}
   */
  _getThirdPartyRows(el, urlItems, finalUrl) {
    const finalUrlRootDomain = Util.getRootDomain(finalUrl);

    /** @type {Map<number, HTMLTableRowElement>} */
    const thirdPartyRows = new Map();
    for (const urlItem of urlItems) {
      const datasetUrl = urlItem.dataset.url;
      if (!datasetUrl) continue;
      const isThirdParty = Util.getRootDomain(datasetUrl) !== finalUrlRootDomain;
      if (!isThirdParty) continue;

      const urlRowEl = urlItem.closest('tr');
      if (urlRowEl) {
        const rowPosition = getTableRows(el).indexOf(urlRowEl);
        thirdPartyRows.set(rowPosition, urlRowEl);
      }
    }

    return thirdPartyRows;
  }

  /**
   * From a table, finds and returns URL items.
   * @param {HTMLTableElement} tableEl
   * @return {Array<HTMLElement>}
   */
  _getUrlItems(tableEl) {
    return this._dom.findAll('.lh-text__url', tableEl);
  }

  _setupStickyHeaderElements() {
    this.topbarEl = this._dom.find('.lh-topbar', this._document);
    this.scoreScaleEl = this._dom.find('.lh-scorescale', this._document);
    this.stickyHeaderEl = this._dom.find('.lh-sticky-header', this._document);

    // Highlighter will be absolutely positioned at first gauge, then transformed on scroll.
    this.highlightEl = this._dom.createChildOf(this.stickyHeaderEl, 'div', 'lh-highlighter');
  }

  /**
   * Handle copy events.
   * @param {ClipboardEvent} e
   */
  onCopy(e) {
    // Only handle copy button presses (e.g. ignore the user copying page text).
    if (this._copyAttempt) {
      // We want to write our own data to the clipboard, not the user's text selection.
      e.preventDefault();
      e.clipboardData.setData('text/plain', JSON.stringify(this.json, null, 2));

      this._fireEventOn('lh-log', this._document, {
        cmd: 'log', msg: 'Report JSON copied to clipboard',
      });
    }

    this._copyAttempt = false;
  }

  /**
   * Copies the report JSON to the clipboard (if supported by the browser).
   */
  onCopyButtonClick() {
    this._fireEventOn('lh-analytics', this._document, {
      cmd: 'send',
      fields: {hitType: 'event', eventCategory: 'report', eventAction: 'copy'},
    });

    try {
      if (this._document.queryCommandSupported('copy')) {
        this._copyAttempt = true;

        // Note: In Safari 10.0.1, execCommand('copy') returns true if there's
        // a valid text selection on the page. See http://caniuse.com/#feat=clipboard.
        if (!this._document.execCommand('copy')) {
          this._copyAttempt = false; // Prevent event handler from seeing this as a copy attempt.

          this._fireEventOn('lh-log', this._document, {
            cmd: 'warn', msg: 'Your browser does not support copy to clipboard.',
          });
        }
      }
    } catch (/** @type {Error} */ e) {
      this._copyAttempt = false;
      this._fireEventOn('lh-log', this._document, {cmd: 'log', msg: e.message});
    }
  }

  onChevronClick() {
    const toggle = this._dom.find('.lh-config__settings-toggle', this._document);

    if (toggle.hasAttribute('open')) {
      toggle.removeAttribute('open');
    } else {
      toggle.setAttribute('open', 'true');
    }
  }

  closeToolsDropdown() {
    this.toolsButton.classList.remove('active');
  }

  /**
   * Click handler for tools button.
   * @param {Event} e
   */
  onToolsButtonClick(e) {
    e.preventDefault();
    this.toolsButton.classList.toggle('active');
    this._document.addEventListener('keydown', this.onKeyDown);
  }

  /**
   * Resets the state of page before capturing the page for export.
   * When the user opens the exported HTML page, certain UI elements should
   * be in their closed state (not opened) and the templates should be unstamped.
   */
  _resetUIState() {
    this.closeToolsDropdown();
    this._dom.resetTemplates();
  }

  /**
   * Handler for tool button.
   * @param {Event} e
   */
  onToolAction(e) {
    e.preventDefault();

    const el = /** @type {?Element} */ (e.target);

    if (!el || !el.hasAttribute('data-action')) {
      return;
    }

    switch (el.getAttribute('data-action')) {
      case 'copy':
        this.onCopyButtonClick();
        break;
      case 'print-summary':
        this.collapseAllDetails();
        this.closeToolsDropdown();
        this._print();
        break;
      case 'print-expanded':
        this.expandAllDetails();
        this.closeToolsDropdown();
        this._print();
        break;
      case 'save-json': {
        const jsonStr = JSON.stringify(this.json, null, 2);
        this._saveFile(new Blob([jsonStr], {type: 'application/json'}));
        break;
      }
      case 'save-html': {
        const htmlStr = this.getReportHtml();
        try {
          this._saveFile(new Blob([htmlStr], {type: 'text/html'}));
        } catch (/** @type {Error} */ e) {
          this._fireEventOn('lh-log', this._document, {
            cmd: 'error', msg: 'Could not export as HTML. ' + e.message,
          });
        }
        break;
      }
      case 'open-viewer': {
        const viewerPath = '/lighthouse/viewer/';
        ReportUIFeatures.openTabAndSendJsonReport(this.json, viewerPath);
        break;
      }
      case 'save-gist': {
        this.saveAsGist();
        break;
      }
      case 'toggle-dark': {
        this._toggleDarkTheme();
        break;
      }
    }

    this.closeToolsDropdown();
    this._document.removeEventListener('keydown', this.onKeyDown);
  }

  _print() {
    self.print();
  }

  /**
   * Keydown handler for the document.
   * @param {KeyboardEvent} e
   */
  onKeyDown(e) {
    if (e.keyCode === 27) { // ESC
      this.closeToolsDropdown();
    }
  }

  /**
   * Keyup handler for the document.
   * @param {KeyboardEvent} e
   */
  onKeyUp(e) {
    // Ctrl+P - Expands audit details when user prints via keyboard shortcut.
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) {
      this.closeToolsDropdown();
    }
  }

  /**
   * Opens a new tab to the online viewer and sends the local page's JSON results
   * to the online viewer using postMessage.
   * @param {LH.Result} reportJson
   * @param {string} viewerPath
   * @protected
   */
  static openTabAndSendJsonReport(reportJson, viewerPath) {
    const VIEWER_ORIGIN = 'https://googlechrome.github.io';
    // Chrome doesn't allow us to immediately postMessage to a popup right
    // after it's created. Normally, we could also listen for the popup window's
    // load event, however it is cross-domain and won't fire. Instead, listen
    // for a message from the target app saying "I'm open".
    const json = reportJson;
    window.addEventListener('message', function msgHandler(messageEvent) {
      if (messageEvent.origin !== VIEWER_ORIGIN) {
        return;
      }
      if (popup && messageEvent.data.opened) {
        popup.postMessage({lhresults: json}, VIEWER_ORIGIN);
        window.removeEventListener('message', msgHandler);
      }
    });

    // The popup's window.name is keyed by version+url+fetchTime, so we reuse/select tabs correctly
    // @ts-ignore - If this is a v2 LHR, use old `generatedTime`.
    const fallbackFetchTime = /** @type {string} */ (json.generatedTime);
    const fetchTime = json.fetchTime || fallbackFetchTime;
    const windowName = `${json.lighthouseVersion}-${json.requestedUrl}-${fetchTime}`;
    const popup = window.open(`${VIEWER_ORIGIN}${viewerPath}`, windowName);
  }

  /**
   * Expands all audit `<details>`.
   * Ideally, a print stylesheet could take care of this, but CSS has no way to
   * open a `<details>` element.
   */
  expandAllDetails() {
    const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll(
        '.lh-categories details', this._document));
    details.map(detail => detail.open = true);
  }

  /**
   * Collapses all audit `<details>`.
   * open a `<details>` element.
   */
  collapseAllDetails() {
    const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll(
        '.lh-categories details', this._document));
    details.map(detail => detail.open = false);
  }

  /**
   * Sets up listeners to collapse audit `<details>` when the user closes the
   * print dialog, all `<details>` are collapsed.
   */
  _setUpCollapseDetailsAfterPrinting() {
    // FF and IE implement these old events.
    if ('onbeforeprint' in self) {
      self.addEventListener('afterprint', this.collapseAllDetails);
    } else {
      const win = /** @type {Window} */ (self);
      // Note: FF implements both window.onbeforeprint and media listeners. However,
      // it doesn't matchMedia doesn't fire when matching 'print'.
      win.matchMedia('print').addListener(mql => {
        if (mql.matches) {
          this.expandAllDetails();
        } else {
          this.collapseAllDetails();
        }
      });
    }
  }

  /**
   * Returns the html that recreates this report.
   * @return {string}
   * @protected
   */
  getReportHtml() {
    this._resetUIState();
    return this._document.documentElement.outerHTML;
  }

  /**
   * Save json as a gist. Unimplemented in base UI features.
   * @protected
   */
  saveAsGist() {
    throw new Error('Cannot save as gist from base report');
  }

  /**
   * Downloads a file (blob) using a[download].
   * @param {Blob|File} blob The file to save.
   * @private
   */
  _saveFile(blob) {
    const filename = getFilenamePrefix({
      finalUrl: this.json.finalUrl,
      fetchTime: this.json.fetchTime,
    });

    const ext = blob.type.match('json') ? '.json' : '.html';
    const href = URL.createObjectURL(blob);

    const a = this._dom.createElement('a');
    a.download = `${filename}${ext}`;
    a.href = href;
    this._document.body.appendChild(a); // Firefox requires anchor to be in the DOM.
    a.click();

    // cleanup.
    this._document.body.removeChild(a);
    setTimeout(_ => URL.revokeObjectURL(href), 500);
  }

  /**
   * @private
   * @param {boolean} [force]
   */
  _toggleDarkTheme(force) {
    const el = this._dom.find('.lh-vars', this._document);
    // This seems unnecessary, but in DevTools, passing "undefined" as the second
    // parameter acts like passing "false".
    // https://github.com/ChromeDevTools/devtools-frontend/blob/dd6a6d4153647c2a4203c327c595692c5e0a4256/front_end/dom_extension/DOMExtension.js#L809-L819
    if (typeof force === 'undefined') {
      el.classList.toggle('dark');
    } else {
      el.classList.toggle('dark', force);
    }
  }

  _updateStickyHeaderOnScroll() {
    // Show sticky header when the score scale begins to go underneath the topbar.
    const topbarBottom = this.topbarEl.getBoundingClientRect().bottom;
    const scoreScaleTop = this.scoreScaleEl.getBoundingClientRect().top;
    const showStickyHeader = topbarBottom >= scoreScaleTop;

    // Highlight mini gauge when section is in view.
    // In view = the last category that starts above the middle of the window.
    const categoryEls = Array.from(this._document.querySelectorAll('.lh-category'));
    const categoriesAboveTheMiddle =
      categoryEls.filter(el => el.getBoundingClientRect().top - window.innerHeight / 2 < 0);
    const highlightIndex =
      categoriesAboveTheMiddle.length > 0 ? categoriesAboveTheMiddle.length - 1 : 0;

    // Category order matches gauge order in sticky header.
    const gaugeWrapperEls = this.stickyHeaderEl.querySelectorAll('.lh-gauge__wrapper');
    const gaugeToHighlight = gaugeWrapperEls[highlightIndex];
    const origin = gaugeWrapperEls[0].getBoundingClientRect().left;
    const offset = gaugeToHighlight.getBoundingClientRect().left - origin;

    // Mutate at end to avoid layout thrashing.
    this.highlightEl.style.transform = `translate(${offset}px)`;
    this.stickyHeaderEl.classList.toggle('lh-sticky-header--visible', showStickyHeader);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReportUIFeatures;
} else {
  self.ReportUIFeatures = ReportUIFeatures;
}
;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self, Util */

/** @typedef {import('./dom.js')} DOM */
/** @typedef {import('./report-renderer.js')} ReportRenderer */
/** @typedef {import('./details-renderer.js')} DetailsRenderer */
/** @typedef {import('./util.js')} Util */
/** @typedef {'failed'|'warning'|'manual'|'passed'|'notApplicable'} TopLevelClumpId */

class CategoryRenderer {
  /**
   * @param {DOM} dom
   * @param {DetailsRenderer} detailsRenderer
   */
  constructor(dom, detailsRenderer) {
    /** @type {DOM} */
    this.dom = dom;
    /** @type {DetailsRenderer} */
    this.detailsRenderer = detailsRenderer;
    /** @type {ParentNode} */
    this.templateContext = this.dom.document();

    this.detailsRenderer.setTemplateContext(this.templateContext);
  }

  /**
   * Display info per top-level clump. Define on class to avoid race with Util init.
   */
  get _clumpTitles() {
    return {
      warning: Util.UIStrings.warningAuditsGroupTitle,
      manual: Util.UIStrings.manualAuditsGroupTitle,
      passed: Util.UIStrings.passedAuditsGroupTitle,
      notApplicable: Util.UIStrings.notApplicableAuditsGroupTitle,
    };
  }

  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @return {Element}
   */
  renderAudit(audit) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-audit', this.templateContext);
    return this.populateAuditValues(audit, tmpl);
  }

  /**
   * Populate an DOM tree with audit details. Used by renderAudit and renderOpportunity
   * @param {LH.ReportResult.AuditRef} audit
   * @param {DocumentFragment} tmpl
   * @return {Element}
   */
  populateAuditValues(audit, tmpl) {
    const auditEl = this.dom.find('.lh-audit', tmpl);
    auditEl.id = audit.result.id;
    const scoreDisplayMode = audit.result.scoreDisplayMode;

    if (audit.result.displayValue) {
      this.dom.find('.lh-audit__display-text', auditEl).textContent = audit.result.displayValue;
    }

    const titleEl = this.dom.find('.lh-audit__title', auditEl);
    titleEl.appendChild(this.dom.convertMarkdownCodeSnippets(audit.result.title));
    this.dom.find('.lh-audit__description', auditEl)
        .appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description));

    if (audit.stackPacks) {
      audit.stackPacks.forEach(pack => {
        const packElm = this.dom.createElement('div');
        packElm.classList.add('lh-audit__stackpack');

        const packElmImg = this.dom.createElement('img');
        packElmImg.classList.add('lh-audit__stackpack__img');
        packElmImg.src = pack.iconDataURL;
        packElmImg.alt = pack.title;
        packElm.appendChild(packElmImg);

        packElm.appendChild(this.dom.convertMarkdownLinkSnippets(pack.description));

        this.dom.find('.lh-audit__stackpacks', auditEl)
          .appendChild(packElm);
      });
    }

    const header = /** @type {HTMLDetailsElement} */ (this.dom.find('details', auditEl));
    if (audit.result.details) {
      const elem = this.detailsRenderer.render(audit.result.details);
      if (elem) {
        elem.classList.add('lh-details');
        header.appendChild(elem);
      }
    }

    // Add chevron SVG to the end of the summary
    this.dom.find('.lh-chevron-container', auditEl).appendChild(this._createChevron());
    this._setRatingClass(auditEl, audit.result.score, scoreDisplayMode);

    if (audit.result.scoreDisplayMode === 'error') {
      auditEl.classList.add(`lh-audit--error`);
      const textEl = this.dom.find('.lh-audit__display-text', auditEl);
      textEl.textContent = Util.UIStrings.errorLabel;
      textEl.classList.add('tooltip-boundary');
      const tooltip = this.dom.createChildOf(textEl, 'div', 'tooltip tooltip--error');
      tooltip.textContent = audit.result.errorMessage || Util.UIStrings.errorMissingAuditInfo;
    } else if (audit.result.explanation) {
      const explEl = this.dom.createChildOf(titleEl, 'div', 'lh-audit-explanation');
      explEl.textContent = audit.result.explanation;
    }
    const warnings = audit.result.warnings;
    if (!warnings || warnings.length === 0) return auditEl;

    // Add list of warnings or singular warning
    const warningsEl = this.dom.createChildOf(titleEl, 'div', 'lh-warnings');
    this.dom.createChildOf(warningsEl, 'span').textContent = Util.UIStrings.warningHeader;
    if (warnings.length === 1) {
      warningsEl.appendChild(this.dom.document().createTextNode(warnings.join('')));
    } else {
      const warningsUl = this.dom.createChildOf(warningsEl, 'ul');
      for (const warning of warnings) {
        const item = this.dom.createChildOf(warningsUl, 'li');
        item.textContent = warning;
      }
    }
    return auditEl;
  }

  /**
   * @return {HTMLElement}
   */
  _createChevron() {
    const chevronTmpl = this.dom.cloneTemplate('#tmpl-lh-chevron', this.templateContext);
    const chevronEl = this.dom.find('.lh-chevron', chevronTmpl);
    return chevronEl;
  }

  /**
   * @param {Element} element DOM node to populate with values.
   * @param {number|null} score
   * @param {string} scoreDisplayMode
   * @return {Element}
   */
  _setRatingClass(element, score, scoreDisplayMode) {
    const rating = Util.calculateRating(score, scoreDisplayMode);
    element.classList.add(`lh-audit--${scoreDisplayMode.toLowerCase()}`);
    if (scoreDisplayMode !== 'informative') {
      element.classList.add(`lh-audit--${rating}`);
    }
    return element;
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {Element}
   */
  renderCategoryHeader(category, groupDefinitions) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-category-header', this.templateContext);

    const gaugeContainerEl = this.dom.find('.lh-score__gauge', tmpl);
    const gaugeEl = this.renderScoreGauge(category, groupDefinitions);
    gaugeContainerEl.appendChild(gaugeEl);

    if (category.description) {
      const descEl = this.dom.convertMarkdownLinkSnippets(category.description);
      this.dom.find('.lh-category-header__description', tmpl).appendChild(descEl);
    }

    return /** @type {Element} */ (tmpl.firstElementChild);
  }

  /**
   * Renders the group container for a group of audits. Individual audit elements can be added
   * directly to the returned element.
   * @param {LH.Result.ReportGroup} group
   * @return {Element}
   */
  renderAuditGroup(group) {
    const groupEl = this.dom.createElement('div', 'lh-audit-group');

    const auditGroupHeader = this.dom.createElement('div', 'lh-audit-group__header');

    this.dom.createChildOf(auditGroupHeader, 'span', 'lh-audit-group__title')
      .textContent = group.title;
    if (group.description) {
      const descriptionEl = this.dom.convertMarkdownLinkSnippets(group.description);
      descriptionEl.classList.add('lh-audit-group__description');
      auditGroupHeader.appendChild(descriptionEl);
    }
    groupEl.appendChild(auditGroupHeader);

    return groupEl;
  }

  /**
   * Takes an array of auditRefs, groups them if requested, then returns an
   * array of audit and audit-group elements.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {Array<Element>}
   */
  _renderGroupedAudits(auditRefs, groupDefinitions) {
    // Audits grouped by their group (or under notAGroup).
    /** @type {Map<string, Array<LH.ReportResult.AuditRef>>} */
    const grouped = new Map();

    // Add audits without a group first so they will appear first.
    const notAGroup = 'NotAGroup';
    grouped.set(notAGroup, []);

    for (const auditRef of auditRefs) {
      const groupId = auditRef.group || notAGroup;
      const groupAuditRefs = grouped.get(groupId) || [];
      groupAuditRefs.push(auditRef);
      grouped.set(groupId, groupAuditRefs);
    }

    /** @type {Array<Element>} */
    const auditElements = [];

    for (const [groupId, groupAuditRefs] of grouped) {
      if (groupId === notAGroup) {
        // Push not-grouped audits individually.
        for (const auditRef of groupAuditRefs) {
          auditElements.push(this.renderAudit(auditRef));
        }
        continue;
      }

      // Push grouped audits as a group.
      const groupDef = groupDefinitions[groupId];
      const auditGroupElem = this.renderAuditGroup(groupDef);
      for (const auditRef of groupAuditRefs) {
        auditGroupElem.appendChild(this.renderAudit(auditRef));
      }
      auditGroupElem.classList.add(`lh-audit-group--${groupId}`);
      auditElements.push(auditGroupElem);
    }

    return auditElements;
  }

  /**
   * Take a set of audits, group them if they have groups, then render in a top-level
   * clump that can't be expanded/collapsed.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {Element}
   */
  renderUnexpandableClump(auditRefs, groupDefinitions) {
    const clumpElement = this.dom.createElement('div');
    const elements = this._renderGroupedAudits(auditRefs, groupDefinitions);
    elements.forEach(elem => clumpElement.appendChild(elem));
    return clumpElement;
  }

  /**
   * Take a set of audits and render in a top-level, expandable clump that starts
   * in a collapsed state.
   * @param {Exclude<TopLevelClumpId, 'failed'>} clumpId
   * @param {{auditRefs: Array<LH.ReportResult.AuditRef>, description?: string}} clumpOpts
   * @return {Element}
   */
  renderClump(clumpId, {auditRefs, description}) {
    const clumpTmpl = this.dom.cloneTemplate('#tmpl-lh-clump', this.templateContext);
    const clumpElement = this.dom.find('.lh-clump', clumpTmpl);

    if (clumpId === 'warning') {
      clumpElement.setAttribute('open', '');
    }

    const summaryInnerEl = this.dom.find('.lh-audit-group__summary', clumpElement);
    const chevronEl = summaryInnerEl.appendChild(this._createChevron());
    chevronEl.title = Util.UIStrings.auditGroupExpandTooltip;

    const headerEl = this.dom.find('.lh-audit-group__header', clumpElement);
    const title = this._clumpTitles[clumpId];
    this.dom.find('.lh-audit-group__title', headerEl).textContent = title;
    if (description) {
      const descriptionEl = this.dom.convertMarkdownLinkSnippets(description);
      descriptionEl.classList.add('lh-audit-group__description');
      headerEl.appendChild(descriptionEl);
    }

    const itemCountEl = this.dom.find('.lh-audit-group__itemcount', clumpElement);
    itemCountEl.textContent = `(${auditRefs.length})`;

    // Add all audit results to the clump.
    const auditElements = auditRefs.map(this.renderAudit.bind(this));
    clumpElement.append(...auditElements);

    clumpElement.classList.add(`lh-clump--${clumpId.toLowerCase()}`);
    return clumpElement;
  }

  /**
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this.templateContext = context;
    this.detailsRenderer.setTemplateContext(context);
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {DocumentFragment}
   */
  renderScoreGauge(category, groupDefinitions) { // eslint-disable-line no-unused-vars
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-gauge', this.templateContext);
    const wrapper = /** @type {HTMLAnchorElement} */ (this.dom.find('.lh-gauge__wrapper', tmpl));
    wrapper.href = `#${category.id}`;
    wrapper.classList.add(`lh-gauge__wrapper--${Util.calculateRating(category.score)}`);

    if (Util.isPluginCategory(category.id)) {
      wrapper.classList.add('lh-gauge__wrapper--plugin');
    }

    // Cast `null` to 0
    const numericScore = Number(category.score);
    const gauge = this.dom.find('.lh-gauge', tmpl);
    // 352 is ~= 2 * Math.PI * gauge radius (56)
    // https://codepen.io/xgad/post/svg-radial-progress-meters
    // score of 50: `stroke-dasharray: 176 352`;
    /** @type {?SVGCircleElement} */
    const gaugeArc = gauge.querySelector('.lh-gauge-arc');
    if (gaugeArc) {
      gaugeArc.style.strokeDasharray = `${numericScore * 352} 352`;
    }

    const scoreOutOf100 = Math.round(numericScore * 100);
    const percentageEl = this.dom.find('.lh-gauge__percentage', tmpl);
    percentageEl.textContent = scoreOutOf100.toString();
    if (category.score === null) {
      percentageEl.textContent = '?';
      percentageEl.title = Util.UIStrings.errorLabel;
    }

    this.dom.find('.lh-gauge__label', tmpl).textContent = category.title;
    return tmpl;
  }

  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @return {boolean}
   */
  _auditHasWarning(audit) {
    return Boolean(audit.result.warnings && audit.result.warnings.length);
  }

  /**
   * Returns the id of the top-level clump to put this audit in.
   * @param {LH.ReportResult.AuditRef} auditRef
   * @return {TopLevelClumpId}
   */
  _getClumpIdForAuditRef(auditRef) {
    const scoreDisplayMode = auditRef.result.scoreDisplayMode;
    if (scoreDisplayMode === 'manual' || scoreDisplayMode === 'notApplicable') {
      return scoreDisplayMode;
    }

    if (Util.showAsPassed(auditRef.result)) {
      if (this._auditHasWarning(auditRef)) {
        return 'warning';
      } else {
        return 'passed';
      }
    } else {
      return 'failed';
    }
  }

  /**
   * Renders a set of top level sections (clumps), under a status of failed, warning,
   * manual, passed, or notApplicable. The result ends up something like:
   *
   * failed clump
   *   ├── audit 1 (w/o group)
   *   ├── audit 2 (w/o group)
   *   ├── audit group
   *   |  ├── audit 3
   *   |  └── audit 4
   *   └── audit group
   *      ├── audit 5
   *      └── audit 6
   * other clump (e.g. 'manual')
   *   ├── audit 1
   *   ├── audit 2
   *   ├── …
   *   ⋮
   * @param {LH.ReportResult.Category} category
   * @param {Object<string, LH.Result.ReportGroup>} [groupDefinitions]
   * @return {Element}
   */
  render(category, groupDefinitions = {}) {
    const element = this.dom.createElement('div', 'lh-category');
    this.createPermalinkSpan(element, category.id);
    element.appendChild(this.renderCategoryHeader(category, groupDefinitions));

    // Top level clumps for audits, in order they will appear in the report.
    /** @type {Map<TopLevelClumpId, Array<LH.ReportResult.AuditRef>>} */
    const clumps = new Map();
    clumps.set('failed', []);
    clumps.set('warning', []);
    clumps.set('manual', []);
    clumps.set('passed', []);
    clumps.set('notApplicable', []);

    // Sort audits into clumps.
    for (const auditRef of category.auditRefs) {
      const clumpId = this._getClumpIdForAuditRef(auditRef);
      const clump = /** @type {Array<LH.ReportResult.AuditRef>} */ (clumps.get(clumpId)); // already defined
      clump.push(auditRef);
      clumps.set(clumpId, clump);
    }

    // Render each clump.
    for (const [clumpId, auditRefs] of clumps) {
      if (auditRefs.length === 0) continue;

      if (clumpId === 'failed') {
        const clumpElem = this.renderUnexpandableClump(auditRefs, groupDefinitions);
        clumpElem.classList.add(`lh-clump--failed`);
        element.appendChild(clumpElem);
        continue;
      }

      const description = clumpId === 'manual' ? category.manualDescription : undefined;
      const clumpElem = this.renderClump(clumpId, {auditRefs, description});
      element.appendChild(clumpElem);
    }

    return element;
  }

  /**
   * Create a non-semantic span used for hash navigation of categories
   * @param {Element} element
   * @param {string} id
   */
  createPermalinkSpan(element, id) {
    const permalinkEl = this.dom.createChildOf(element, 'span', 'lh-permalink');
    permalinkEl.id = id;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CategoryRenderer;
} else {
  self.CategoryRenderer = CategoryRenderer;
}
;
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self, Util, CategoryRenderer */

/** @typedef {import('./dom.js')} DOM */

class PerformanceCategoryRenderer extends CategoryRenderer {
  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @return {Element}
   */
  _renderMetric(audit) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-metric', this.templateContext);
    const element = this.dom.find('.lh-metric', tmpl);
    element.id = audit.result.id;
    const rating = Util.calculateRating(audit.result.score, audit.result.scoreDisplayMode);
    element.classList.add(`lh-metric--${rating}`);

    const titleEl = this.dom.find('.lh-metric__title', tmpl);
    titleEl.textContent = audit.result.title;

    const valueEl = this.dom.find('.lh-metric__value', tmpl);
    valueEl.textContent = audit.result.displayValue || '';

    const descriptionEl = this.dom.find('.lh-metric__description', tmpl);
    descriptionEl.appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description));

    if (audit.result.scoreDisplayMode === 'error') {
      descriptionEl.textContent = '';
      valueEl.textContent = 'Error!';
      const tooltip = this.dom.createChildOf(descriptionEl, 'span');
      tooltip.textContent = audit.result.errorMessage || 'Report error: no metric information';
    }

    return element;
  }

  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @param {number} scale
   * @return {Element}
   */
  _renderOpportunity(audit, scale) {
    const oppTmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity', this.templateContext);
    const element = this.populateAuditValues(audit, oppTmpl);
    element.id = audit.result.id;

    if (!audit.result.details || audit.result.scoreDisplayMode === 'error') {
      return element;
    }
    const details = audit.result.details;
    if (details.type !== 'opportunity') {
      return element;
    }

    // Overwrite the displayValue with opportunity's wastedMs
    const displayEl = this.dom.find('.lh-audit__display-text', element);
    const sparklineWidthPct = `${details.overallSavingsMs / scale * 100}%`;
    this.dom.find('.lh-sparkline__bar', element).style.width = sparklineWidthPct;
    displayEl.textContent = Util.formatSeconds(details.overallSavingsMs, 0.01);

    // Set [title] tooltips
    if (audit.result.displayValue) {
      const displayValue = audit.result.displayValue;
      this.dom.find('.lh-load-opportunity__sparkline', element).title = displayValue;
      displayEl.title = displayValue;
    }

    return element;
  }

  /**
   * Get an audit's wastedMs to sort the opportunity by, and scale the sparkline width
   * Opportunities with an error won't have a details object, so MIN_VALUE is returned to keep any
   * erroring opportunities last in sort order.
   * @param {LH.ReportResult.AuditRef} audit
   * @return {number}
   */
  _getWastedMs(audit) {
    if (audit.result.details && audit.result.details.type === 'opportunity') {
      const details = audit.result.details;
      if (typeof details.overallSavingsMs !== 'number') {
        throw new Error('non-opportunity details passed to _getWastedMs');
      }
      return details.overallSavingsMs;
    } else {
      return Number.MIN_VALUE;
    }
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Object<string, LH.Result.ReportGroup>} groups
   * @param {'PSI'=} environment 'PSI' and undefined are the only valid values
   * @return {Element}
   * @override
   */
  render(category, groups, environment) {
    const element = this.dom.createElement('div', 'lh-category');
    if (environment === 'PSI') {
      const gaugeEl = this.dom.createElement('div', 'lh-score__gauge');
      gaugeEl.appendChild(this.renderScoreGauge(category, groups));
      element.appendChild(gaugeEl);
    } else {
      this.createPermalinkSpan(element, category.id);
      element.appendChild(this.renderCategoryHeader(category, groups));
    }

    // Metrics.
    const metricAuditsEl = this.renderAuditGroup(groups.metrics);

    // Metric descriptions toggle.
    const toggleTmpl = this.dom.cloneTemplate('#tmpl-lh-metrics-toggle', this.templateContext);
    const toggleEl = this.dom.find('.lh-metrics-toggle', toggleTmpl);
    metricAuditsEl.append(...toggleEl.childNodes);

    const metricAudits = category.auditRefs.filter(audit => audit.group === 'metrics');
    const keyMetrics = metricAudits.filter(a => a.weight >= 3);
    const otherMetrics = metricAudits.filter(a => a.weight < 3);

    const metricsBoxesEl = this.dom.createChildOf(metricAuditsEl, 'div', 'lh-columns');
    const metricsColumn1El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-column');
    const metricsColumn2El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-column');

    keyMetrics.forEach(item => {
      metricsColumn1El.appendChild(this._renderMetric(item));
    });
    otherMetrics.forEach(item => {
      metricsColumn2El.appendChild(this._renderMetric(item));
    });

    // 'Values are estimated and may vary' is used as the category description for PSI
    if (environment !== 'PSI') {
      const estValuesEl = this.dom.createChildOf(metricAuditsEl, 'div', 'lh-metrics__disclaimer');
      estValuesEl.textContent = Util.UIStrings.varianceDisclaimer;
    }

    metricAuditsEl.classList.add('lh-audit-group--metrics');
    element.appendChild(metricAuditsEl);

    // Filmstrip
    const timelineEl = this.dom.createChildOf(element, 'div', 'lh-filmstrip-container');
    const thumbnailAudit = category.auditRefs.find(audit => audit.id === 'screenshot-thumbnails');
    const thumbnailResult = thumbnailAudit && thumbnailAudit.result;
    if (thumbnailResult && thumbnailResult.details) {
      timelineEl.id = thumbnailResult.id;
      const filmstripEl = this.detailsRenderer.render(thumbnailResult.details);
      filmstripEl && timelineEl.appendChild(filmstripEl);
    }

    // Budgets
    const budgetAudit = category.auditRefs.find(audit => audit.id === 'performance-budget');
    if (budgetAudit && budgetAudit.result.details) {
      const table = this.detailsRenderer.render(budgetAudit.result.details);
      if (table) {
        table.id = budgetAudit.id;
        table.classList.add('lh-audit');
        const budgetsGroupEl = this.renderAuditGroup(groups.budgets);
        budgetsGroupEl.appendChild(table);
        budgetsGroupEl.classList.add('lh-audit-group--budgets');
        element.appendChild(budgetsGroupEl);
      }
    }

    // Opportunities
    const opportunityAudits = category.auditRefs
        .filter(audit => audit.group === 'load-opportunities' && !Util.showAsPassed(audit.result))
        .sort((auditA, auditB) => this._getWastedMs(auditB) - this._getWastedMs(auditA));

    if (opportunityAudits.length) {
      // Scale the sparklines relative to savings, minimum 2s to not overstate small savings
      const minimumScale = 2000;
      const wastedMsValues = opportunityAudits.map(audit => this._getWastedMs(audit));
      const maxWaste = Math.max(...wastedMsValues);
      const scale = Math.max(Math.ceil(maxWaste / 1000) * 1000, minimumScale);
      const groupEl = this.renderAuditGroup(groups['load-opportunities']);
      const tmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity-header', this.templateContext);

      this.dom.find('.lh-load-opportunity__col--one', tmpl).textContent =
        Util.UIStrings.opportunityResourceColumnLabel;
      this.dom.find('.lh-load-opportunity__col--two', tmpl).textContent =
        Util.UIStrings.opportunitySavingsColumnLabel;

      const headerEl = this.dom.find('.lh-load-opportunity__header', tmpl);
      groupEl.appendChild(headerEl);
      opportunityAudits.forEach(item => groupEl.appendChild(this._renderOpportunity(item, scale)));
      groupEl.classList.add('lh-audit-group--load-opportunities');
      element.appendChild(groupEl);
    }

    // Diagnostics
    const diagnosticAudits = category.auditRefs
        .filter(audit => audit.group === 'diagnostics' && !Util.showAsPassed(audit.result))
        .sort((a, b) => {
          const scoreA = a.result.scoreDisplayMode === 'informative' ? 100 : Number(a.result.score);
          const scoreB = b.result.scoreDisplayMode === 'informative' ? 100 : Number(b.result.score);
          return scoreA - scoreB;
        });

    if (diagnosticAudits.length) {
      const groupEl = this.renderAuditGroup(groups['diagnostics']);
      diagnosticAudits.forEach(item => groupEl.appendChild(this.renderAudit(item)));
      groupEl.classList.add('lh-audit-group--diagnostics');
      element.appendChild(groupEl);
    }

    // Passed audits
    const passedAudits = category.auditRefs
        .filter(audit => (audit.group === 'load-opportunities' || audit.group === 'diagnostics') &&
            Util.showAsPassed(audit.result));

    if (!passedAudits.length) return element;

    const clumpOpts = {
      auditRefs: passedAudits,
      groupDefinitions: groups,
    };
    const passedElem = this.renderClump('passed', clumpOpts);
    element.appendChild(passedElem);
    return element;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceCategoryRenderer;
} else {
  self.PerformanceCategoryRenderer = PerformanceCategoryRenderer;
}
;
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self, Util, CategoryRenderer */

/**
 * An always-increasing counter for making unique SVG ID suffixes.
 */
const getUniqueSuffix = (() => {
  let svgSuffix = 0;
  return function() {
    return svgSuffix++;
  };
})();

class PwaCategoryRenderer extends CategoryRenderer {
  /**
   * @param {LH.ReportResult.Category} category
   * @param {Object<string, LH.Result.ReportGroup>} [groupDefinitions]
   * @return {Element}
   */
  render(category, groupDefinitions = {}) {
    const categoryElem = this.dom.createElement('div', 'lh-category');
    this.createPermalinkSpan(categoryElem, category.id);
    categoryElem.appendChild(this.renderCategoryHeader(category, groupDefinitions));

    const auditRefs = category.auditRefs;

    // Regular audits aren't split up into pass/fail/notApplicable clumps, they're
    // all put in a top-level clump that isn't expandable/collapsible.
    const regularAuditRefs = auditRefs.filter(ref => ref.result.scoreDisplayMode !== 'manual');
    const auditsElem = this._renderAudits(regularAuditRefs, groupDefinitions);
    categoryElem.appendChild(auditsElem);

    // Manual audits are still in a manual clump.
    const manualAuditRefs = auditRefs.filter(ref => ref.result.scoreDisplayMode === 'manual');
    const manualElem = this.renderClump('manual',
      {auditRefs: manualAuditRefs, description: category.manualDescription});
    categoryElem.appendChild(manualElem);

    return categoryElem;
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {DocumentFragment}
   */
  renderScoreGauge(category, groupDefinitions) {
    // Defer to parent-gauge style if category error.
    if (category.score === null) {
      return super.renderScoreGauge(category, groupDefinitions);
    }

    const tmpl = this.dom.cloneTemplate('#tmpl-lh-gauge--pwa', this.templateContext);
    const wrapper = /** @type {HTMLAnchorElement} */ (this.dom.find('.lh-gauge--pwa__wrapper',
      tmpl));
    wrapper.href = `#${category.id}`;

    // Correct IDs in case multiple instances end up in the page.
    const svgRoot = tmpl.querySelector('svg');
    if (!svgRoot) throw new Error('no SVG element found in PWA score gauge template');
    PwaCategoryRenderer._makeSvgReferencesUnique(svgRoot);

    const allGroups = this._getGroupIds(category.auditRefs);
    const passingGroupIds = this._getPassingGroupIds(category.auditRefs);

    if (passingGroupIds.size === allGroups.size) {
      wrapper.classList.add('lh-badged--all');
    } else {
      for (const passingGroupId of passingGroupIds) {
        wrapper.classList.add(`lh-badged--${passingGroupId}`);
      }
    }

    this.dom.find('.lh-gauge__label', tmpl).textContent = category.title;
    wrapper.title = this._getGaugeTooltip(category.auditRefs, groupDefinitions);
    return tmpl;
  }

  /**
   * Returns the group IDs found in auditRefs.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @return {Set<string>}
   */
  _getGroupIds(auditRefs) {
    const groupIds = auditRefs.map(ref => ref.group).filter(/** @return {g is string} */ g => !!g);
    return new Set(groupIds);
  }

  /**
   * Returns the group IDs whose audits are all considered passing.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @return {Set<string>}
   */
  _getPassingGroupIds(auditRefs) {
    const uniqueGroupIds = this._getGroupIds(auditRefs);

    // Remove any that have a failing audit.
    for (const auditRef of auditRefs) {
      if (!Util.showAsPassed(auditRef.result) && auditRef.group) {
        uniqueGroupIds.delete(auditRef.group);
      }
    }

    return uniqueGroupIds;
  }

  /**
   * Returns a tooltip string summarizing group pass rates.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {string}
   */
  _getGaugeTooltip(auditRefs, groupDefinitions) {
    const groupIds = this._getGroupIds(auditRefs);

    const tips = [];
    for (const groupId of groupIds) {
      const groupAuditRefs = auditRefs.filter(ref => ref.group === groupId);
      const auditCount = groupAuditRefs.length;
      const passedCount = groupAuditRefs.filter(ref => Util.showAsPassed(ref.result)).length;

      const title = groupDefinitions[groupId].title;
      tips.push(`${title}: ${passedCount}/${auditCount}`);
    }

    return tips.join(', ');
  }

  /**
   * Render non-manual audits in groups, giving a badge to any group that has
   * all passing audits.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {Element}
   */
  _renderAudits(auditRefs, groupDefinitions) {
    const auditsElem = this.renderUnexpandableClump(auditRefs, groupDefinitions);

    // Add a 'badged' class to group if all audits in that group pass.
    const passsingGroupIds = this._getPassingGroupIds(auditRefs);
    for (const groupId of passsingGroupIds) {
      const groupElem = this.dom.find(`.lh-audit-group--${groupId}`, auditsElem);
      groupElem.classList.add('lh-badged');
    }

    return auditsElem;
  }

  /**
   * Alters SVG id references so multiple instances of an SVG element can coexist
   * in a single page. If `svgRoot` has a `<defs>` block, gives all elements defined
   * in it unique ids, then updates id references (`<use xlink:href="...">`,
   * `fill="url(#...)"`) to the altered ids in all descendents of `svgRoot`.
   * @param {SVGElement} svgRoot
   */
  static _makeSvgReferencesUnique(svgRoot) {
    const defsEl = svgRoot.querySelector('defs');
    if (!defsEl) return;

    const idSuffix = getUniqueSuffix();
    const elementsToUpdate = defsEl.querySelectorAll('[id]');
    for (const el of elementsToUpdate) {
      const oldId = el.id;
      const newId = `${oldId}-${idSuffix}`;
      el.id = newId;

      // Update all <use>s.
      const useEls = svgRoot.querySelectorAll(`use[href="#${oldId}"]`);
      for (const useEl of useEls) {
        useEl.setAttribute('href', `#${newId}`);
      }

      // Update all fill="url(#...)"s.
      const fillEls = svgRoot.querySelectorAll(`[fill="url(#${oldId})"]`);
      for (const fillEl of fillEls) {
        fillEl.setAttribute('fill', `url(#${newId})`);
      }
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PwaCategoryRenderer;
} else {
  self.PwaCategoryRenderer = PwaCategoryRenderer;
}
;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * @fileoverview The entry point for rendering the Lighthouse report based on the JSON output.
 *    This file is injected into the report HTML along with the JSON report.
 *
 * Dummy text for ensuring report robustness: </script> pre$`post %%LIGHTHOUSE_JSON%%
 */

/** @typedef {import('./dom.js')} DOM */

/* globals self, Util, DetailsRenderer, CategoryRenderer, PerformanceCategoryRenderer, PwaCategoryRenderer */

class ReportRenderer {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    /** @type {DOM} */
    this._dom = dom;
    /** @type {ParentNode} */
    this._templateContext = this._dom.document();
  }

  /**
   * @param {LH.Result} result
   * @param {Element} container Parent element to render the report into.
   * @return {Element}
   */
  renderReport(result, container) {
    // Mutate the UIStrings if necessary (while saving originals)
    const originalUIStrings = JSON.parse(JSON.stringify(Util.UIStrings));

    this._dom.setLighthouseChannel(result.configSettings.channel || 'unknown');

    const report = Util.prepareReportResult(result);

    container.textContent = ''; // Remove previous report.
    container.appendChild(this._renderReport(report));

    // put the UIStrings back into original state
    Util.updateAllUIStrings(originalUIStrings);

    return container;
  }

  /**
   * Define a custom element for <templates> to be extracted from. For example:
   *     this.setTemplateContext(new DOMParser().parseFromString(htmlStr, 'text/html'))
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this._templateContext = context;
  }

  /**
   * @param {LH.ReportResult} report
   * @return {DocumentFragment}
   */
  _renderReportTopbar(report) {
    const el = this._dom.cloneTemplate('#tmpl-lh-topbar', this._templateContext);
    const metadataUrl = /** @type {HTMLAnchorElement} */ (this._dom.find('.lh-topbar__url', el));
    metadataUrl.href = metadataUrl.textContent = report.finalUrl;
    return el;
  }

  /**
   * @return {DocumentFragment}
   */
  _renderReportHeader() {
    const el = this._dom.cloneTemplate('#tmpl-lh-heading', this._templateContext);
    const domFragment = this._dom.cloneTemplate('#tmpl-lh-scores-wrapper', this._templateContext);
    const placeholder = this._dom.find('.lh-scores-wrapper-placeholder', el);
    /** @type {HTMLDivElement} */ (placeholder.parentNode).replaceChild(domFragment, placeholder);
    return el;
  }

  /**
   * @param {LH.ReportResult} report
   * @return {DocumentFragment}
   */
  _renderReportFooter(report) {
    const footer = this._dom.cloneTemplate('#tmpl-lh-footer', this._templateContext);

    const env = this._dom.find('.lh-env__items', footer);
    env.id = 'runtime-settings';
    const envValues = Util.getEnvironmentDisplayValues(report.configSettings || {});
    [
      {name: 'URL', description: report.finalUrl},
      {name: 'Fetch time', description: Util.formatDateTime(report.fetchTime)},
      ...envValues,
      {name: 'User agent (host)', description: report.userAgent},
      {name: 'User agent (network)', description: report.environment &&
        report.environment.networkUserAgent},
      {name: 'CPU/Memory Power', description: report.environment &&
        report.environment.benchmarkIndex.toFixed(0)},
    ].forEach(runtime => {
      if (!runtime.description) return;

      const item = this._dom.cloneTemplate('#tmpl-lh-env__items', env);
      this._dom.find('.lh-env__name', item).textContent = runtime.name;
      this._dom.find('.lh-env__description', item).textContent = runtime.description;
      env.appendChild(item);
    });

    this._dom.find('.lh-footer__version', footer).textContent = report.lighthouseVersion;
    return footer;
  }

  /**
   * Returns a div with a list of top-level warnings, or an empty div if no warnings.
   * @param {LH.ReportResult} report
   * @return {Node}
   */
  _renderReportWarnings(report) {
    if (!report.runWarnings || report.runWarnings.length === 0) {
      return this._dom.createElement('div');
    }

    const container = this._dom.cloneTemplate('#tmpl-lh-warnings--toplevel', this._templateContext);
    const message = this._dom.find('.lh-warnings__msg', container);
    message.textContent = Util.UIStrings.toplevelWarningsMessage;

    const warnings = this._dom.find('ul', container);
    for (const warningString of report.runWarnings) {
      const warning = warnings.appendChild(this._dom.createElement('li'));
      warning.textContent = warningString;
    }

    return container;
  }

  /**
   * @param {LH.ReportResult} report
   * @param {CategoryRenderer} categoryRenderer
   * @param {Record<string, CategoryRenderer>} specificCategoryRenderers
   * @return {DocumentFragment[]}
   */
  _renderScoreGauges(report, categoryRenderer, specificCategoryRenderers) {
    // Group gauges in this order: default, pwa, plugins.
    const defaultGauges = [];
    const customGauges = []; // PWA.
    const pluginGauges = [];

    for (const category of Object.values(report.categories)) {
      const renderer = specificCategoryRenderers[category.id] || categoryRenderer;
      const categoryGauge = renderer.renderScoreGauge(category, report.categoryGroups || {});

      if (Util.isPluginCategory(category.id)) {
        pluginGauges.push(categoryGauge);
      } else if (renderer.renderScoreGauge === categoryRenderer.renderScoreGauge) {
        // The renderer for default categories is just the default CategoryRenderer.
        // If the functions are equal, then renderer is an instance of CategoryRenderer.
        // For example, the PWA category uses PwaCategoryRenderer, which overrides
        // CategoryRenderer.renderScoreGauge, so it would fail this check and be placed
        // in the customGauges bucket.
        defaultGauges.push(categoryGauge);
      } else {
        customGauges.push(categoryGauge);
      }
    }

    return [...defaultGauges, ...customGauges, ...pluginGauges];
  }

  /**
   * @param {LH.ReportResult} report
   * @return {DocumentFragment}
   */
  _renderReport(report) {
    const detailsRenderer = new DetailsRenderer(this._dom);
    const categoryRenderer = new CategoryRenderer(this._dom, detailsRenderer);
    categoryRenderer.setTemplateContext(this._templateContext);

    /** @type {Record<string, CategoryRenderer>} */
    const specificCategoryRenderers = {
      performance: new PerformanceCategoryRenderer(this._dom, detailsRenderer),
      pwa: new PwaCategoryRenderer(this._dom, detailsRenderer),
    };
    Object.values(specificCategoryRenderers).forEach(renderer => {
      renderer.setTemplateContext(this._templateContext);
    });

    const headerContainer = this._dom.createElement('div');
    headerContainer.appendChild(this._renderReportHeader());

    const reportContainer = this._dom.createElement('div', 'lh-container');
    const reportSection = this._dom.createElement('div', 'lh-report');
    reportSection.appendChild(this._renderReportWarnings(report));

    let scoreHeader;
    const isSoloCategory = Object.keys(report.categories).length === 1;
    if (!isSoloCategory) {
      scoreHeader = this._dom.createElement('div', 'lh-scores-header');
    } else {
      headerContainer.classList.add('lh-header--solo-category');
    }

    if (scoreHeader) {
      const scoreScale = this._dom.cloneTemplate('#tmpl-lh-scorescale', this._templateContext);
      const scoresContainer = this._dom.find('.lh-scores-container', headerContainer);
      scoreHeader.append(
        ...this._renderScoreGauges(report, categoryRenderer, specificCategoryRenderers));
      scoresContainer.appendChild(scoreHeader);
      scoresContainer.appendChild(scoreScale);

      const stickyHeader = this._dom.createElement('div', 'lh-sticky-header');
      stickyHeader.append(
        ...this._renderScoreGauges(report, categoryRenderer, specificCategoryRenderers));
      reportContainer.appendChild(stickyHeader);
    }

    const categories = reportSection.appendChild(this._dom.createElement('div', 'lh-categories'));
    for (const category of Object.values(report.categories)) {
      const renderer = specificCategoryRenderers[category.id] || categoryRenderer;
      // .lh-category-wrapper is full-width and provides horizontal rules between categories.
      // .lh-category within has the max-width: var(--report-width);
      const wrapper = renderer.dom.createChildOf(categories, 'div', 'lh-category-wrapper');
      wrapper.appendChild(renderer.render(category, report.categoryGroups));
    }

    const reportFragment = this._dom.createFragment();
    const topbarDocumentFragment = this._renderReportTopbar(report);

    reportFragment.appendChild(topbarDocumentFragment);
    reportFragment.appendChild(reportContainer);
    reportContainer.appendChild(headerContainer);
    reportContainer.appendChild(reportSection);
    reportSection.appendChild(this._renderReportFooter(report));

    return reportFragment;
  }
}

/** @type {LH.I18NRendererStrings} */
ReportRenderer._UIStringsStash = {};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReportRenderer;
} else {
  self.ReportRenderer = ReportRenderer;
}
,!function(){"use strict";function e(){return t||(t=new Promise(function(e,n){var t=indexedDB.open("keyval-store",1);t.onerror=function(){n(t.error)},t.onupgradeneeded=function(){t.result.createObjectStore("keyval")},t.onsuccess=function(){e(t.result)}})),t}function n(n,t){return e().then(function(e){return new Promise(function(r,o){var u=e.transaction("keyval",n);u.oncomplete=function(){r()},u.onerror=function(){o(u.error)},t(u.objectStore("keyval"))})})}var t,r={get:function(e){var t;return n("readonly",function(n){t=n.get(e)}).then(function(){return t.result})},set:function(e,t){return n("readwrite",function(n){n.put(t,e)})},delete:function(e){return n("readwrite",function(n){n.delete(e)})},clear:function(){return n("readwrite",function(e){e.clear()})},keys:function(){var e=[];return n("readonly",function(n){(n.openKeyCursor||n.openCursor).call(n).onsuccess=function(){this.result&&(e.push(this.result.key),this.result.continue())}}).then(function(){return e})}};"undefined"!=typeof module&&module.exports?module.exports=r:self.idbKeyval=r}();,window.LH_CURRENT_VERSION = '5.1.0';,/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * Manages drag and drop file input for the page.
 */
class DragAndDrop {
  /**
   * @param {function(File): void} fileHandlerCallback Invoked when the user chooses a new file.
   */
  constructor(fileHandlerCallback) {
    const dropZone = document.querySelector('.drop_zone');
    if (!dropZone) {
      throw new Error('Drag and drop `.drop_zone` element not found in page');
    }

    this._dropZone = dropZone;
    this._fileHandlerCallback = fileHandlerCallback;
    this._dragging = false;

    this._addListeners();
  }

  _addListeners() {
    // The mouseleave event is more reliable than dragleave when the user drops
    // the file outside the window.
    document.addEventListener('mouseleave', _ => {
      if (!this._dragging) {
        return;
      }
      this._resetDraggingUI();
    });

    document.addEventListener('dragover', e => {
      e.stopPropagation();
      e.preventDefault();
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = 'copy'; // Explicitly show as copy action.
      }
    });

    document.addEventListener('dragenter', _ => {
      this._dropZone.classList.add('dropping');
      this._dragging = true;
    });

    document.addEventListener('drop', e => {
      e.stopPropagation();
      e.preventDefault();

      this._resetDraggingUI();

      // Note, this ignores multiple files in the drop, only taking the first.
      if (e.dataTransfer) {
        this._fileHandlerCallback(e.dataTransfer.files[0]);
      }
    });
  }

  _resetDraggingUI() {
    this._dropZone.classList.remove('dropping');
    this._dragging = false;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DragAndDrop;
}
,/**
 * @license Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* global firebase, idbKeyval */

/**
 * Wrapper for Firebase authentication.
 */
class FirebaseAuth {
  constructor() {
    /** @type {?string} */
    this._accessToken = null;
    /** @type {?import('@firebase/auth-types').User} */
    this._firebaseUser = null;

    /** @type {import('@firebase/auth-types').GithubAuthProvider} */
    this._provider = new firebase.auth.GithubAuthProvider();
    this._provider.addScope('gist');

    firebase.initializeApp({
      apiKey: 'AIzaSyApMz8FHTyJNqqUtA51tik5Mro8j-2qMcM',
      authDomain: 'lighthouse-viewer.firebaseapp.com',
      databaseURL: 'https://lighthouse-viewer.firebaseio.com',
      storageBucket: 'lighthouse-viewer.appspot.com',
      messagingSenderId: '962507201498',
    });

    /**
     * Promise which resolves after the first check of auth state. After this,
     * _accessToken will be set if user is logged in and has access token.
     * @type {Promise<void>}
     */
    this._ready = Promise.all([
      new Promise(resolve => firebase.auth().onAuthStateChanged(resolve)),
      idbKeyval.get('accessToken'),
    ]).then(([user, token]) => {
      if (user && token) {
        this._accessToken = token;
        this._firebaseUser = user;
      }
    });
  }

  /**
   * Returns the GitHub access token if already logged in. If not logged in,
   * returns null (and will not trigger sign in).
   * @return {Promise<?string>}
   */
  getAccessTokenIfLoggedIn() {
    return this._ready.then(_ => this._accessToken);
  }

  /**
   * Returns the GitHub access token, triggering sign in if needed.
   * @return {Promise<string>}
   */
  getAccessToken() {
    return this._ready.then(_ => this._accessToken ? this._accessToken : this.signIn());
  }

  /**
   * Signs in the user to GitHub using the Firebase API.
   * @return {Promise<string>} The logged in user.
   */
  signIn() {
    return firebase.auth().signInWithPopup(this._provider).then(result => {
      /** @type {string} */
      const accessToken = result.credential.accessToken;
      this._accessToken = accessToken;
      this._firebaseUser = result.user;
      // A limitation of firebase auth is that it doesn't return an oauth token
      // after a page refresh. We'll get a firebase token, but not an oauth token
      // for GitHub. Since GitHub's tokens never expire, stash the access token in IDB.
      return idbKeyval.set('accessToken', accessToken).then(_ => accessToken);
    });
  }

  /**
   * Signs the user out.
   * @return {Promise<void>}
   */
  signOut() {
    return firebase.auth().signOut().then(_ => {
      this._accessToken = null;
      return idbKeyval.delete('accessToken');
    });
  }
}

// node export for testing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FirebaseAuth;
}
,/**
 * @license Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* global logger, FirebaseAuth, idbKeyval, getFilenamePrefix */

/** @typedef {{etag: ?string, content: LH.Result}} CachableGist */

/**
 * Wrapper around the GitHub API for reading/writing gists.
 */
class GithubApi {
  constructor() {
    this._auth = new FirebaseAuth();
    this._saving = false;
  }

  static get LH_JSON_EXT() {
    return '.lighthouse.report.json';
  }

  /**
   * Creates a gist under the users account.
   * @param {LH.Result} jsonFile The gist file body.
   * @return {Promise<string>} id of the created gist.
   */
  createGist(jsonFile) {
    if (this._saving) {
      return Promise.reject(new Error('Save already in progress'));
    }

    logger.log('Saving report to GitHub...', false);
    this._saving = true;

    return this._auth.getAccessToken()
      .then(accessToken => {
        const filename = getFilenamePrefix({
          finalUrl: jsonFile.finalUrl,
          fetchTime: jsonFile.fetchTime,
        });
        const body = {
          description: 'Lighthouse json report',
          public: false,
          files: {
            [`${filename}${GithubApi.LH_JSON_EXT}`]: {
              content: JSON.stringify(jsonFile),
            },
          },
        };

        const request = new Request('https://api.github.com/gists', {
          method: 'POST',
          headers: new Headers({Authorization: `token ${accessToken}`}),
          // Stringify twice so quotes are escaped for POST request to succeed.
          body: JSON.stringify(body),
        });
        return fetch(request);
      })
      .then(resp => resp.json())
      .then(json => {
        logger.log('Saved!');
        this._saving = false;
        return json.id;
      }).catch(err => {
        this._saving = false;
        throw err;
      });
  }

  /**
   * Fetches a Lighthouse report from a gist.
   * @param {string} id The id of a gist.
   * @return {Promise<LH.Result>}
   */
  getGistFileContentAsJson(id) {
    logger.log('Fetching report from GitHub...', false);

    return this._auth.getAccessTokenIfLoggedIn().then(accessToken => {
      const headers = new Headers();

      // If there's an authenticated token, include an Authorization header to
      // have higher rate limits with the GitHub API. Otherwise, rely on ETags.
      if (accessToken) {
        headers.set('Authorization', `token ${accessToken}`);
      }

      return idbKeyval.get(id).then(/** @param {?CachableGist} cachedGist */ (cachedGist) => {
        if (cachedGist && cachedGist.etag) {
          headers.set('If-None-Match', cachedGist.etag);
        }

        // Always make the request to see if there's newer content.
        return fetch(`https://api.github.com/gists/${id}`, {headers}).then(resp => {
          const remaining = Number(resp.headers.get('X-RateLimit-Remaining'));
          const limit = Number(resp.headers.get('X-RateLimit-Limit'));
          if (remaining < 10) {
            logger.warn('Approaching GitHub\'s rate limit. ' +
                        `${limit - remaining}/${limit} requests used. Consider signing ` +
                        'in to increase this limit.');
          }

          if (!resp.ok) {
            if (resp.status === 304) {
              return Promise.resolve(cachedGist);
            } else if (resp.status === 404) {
              // Delete the entry from IDB if it no longer exists on the server.
              idbKeyval.delete(id); // Note: async.
            }
            throw new Error(`${resp.status} fetching gist`);
          }

          const etag = resp.headers.get('ETag');
          return resp.json().then(json => {
            const gistFiles = Object.keys(json.files);
            // Attempt to use first file in gist with report extension.
            let filename = gistFiles.find(filename => filename.endsWith(GithubApi.LH_JSON_EXT));
            // Otherwise, fall back to first json file in gist
            if (!filename) {
              filename = gistFiles.find(filename => filename.endsWith('.json'));
            }
            if (!filename) {
              throw new Error(
                `Failed to find a Lighthouse report (*${GithubApi.LH_JSON_EXT}) in gist ${id}`
              );
            }
            const f = json.files[filename];
            if (f.truncated) {
              return fetch(f.raw_url)
                .then(resp => resp.json())
                .then(content => ({etag, content}));
            }
            const lhr = /** @type {LH.Result} */ (JSON.parse(f.content));
            return {etag, content: lhr};
          });
        });
      });
    }).then(response => {
      // Cache the contents to speed up future lookups, even if an invalid
      // report. Future requests for the id will either still be invalid or will
      // not return a 304 and so will be overwritten.
      return idbKeyval.set(id, response).then(_ => {
        logger.hide();
        // @ts-ignore - TODO(bckenny): tsc unable to flatten promise chain here
        return response.content;
      });
    });
  }
}

// node export for testing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GithubApi;
}
,/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* global DOM, ViewerUIFeatures, ReportRenderer, DragAndDrop, GithubApi, logger, idbKeyval */

/**
 * Guaranteed context.querySelector. Always returns an element or throws if
 * nothing matches query.
 * @param {string} query
 * @param {ParentNode} context
 * @return {HTMLElement}
 */
function find(query, context) {
  /** @type {?HTMLElement} */
  const result = context.querySelector(query);
  if (result === null) {
    throw new Error(`query ${query} not found`);
  }
  return result;
}

/**
 * Class that manages viewing Lighthouse reports.
 */
class LighthouseReportViewer {
  constructor() {
    this._onPaste = this._onPaste.bind(this);
    this._onSaveJson = this._onSaveJson.bind(this);
    this._onFileLoad = this._onFileLoad.bind(this);
    this._onUrlInputChange = this._onUrlInputChange.bind(this);

    this._dragAndDropper = new DragAndDrop(this._onFileLoad);
    this._github = new GithubApi();

    /**
     * Used for tracking whether to offer to upload as a gist.
     * @type {boolean}
     */
    this._reportIsFromGist = false;

    this._addEventListeners();
    this._loadFromDeepLink();
    this._listenForMessages();
  }

  static get APP_URL() {
    return `${location.origin}${location.pathname}`;
  }

  /**
   * Initialize event listeners.
   * @private
   */
  _addEventListeners() {
    document.addEventListener('paste', this._onPaste);

    const gistUrlInput = find('.js-gist-url', document);
    gistUrlInput.addEventListener('change', this._onUrlInputChange);

    // Hidden file input to trigger manual file selector.
    const fileInput = find('#hidden-file-input', document);
    fileInput.addEventListener('change', e => {
      if (!e.target) {
        return;
      }

      const inputTarget = /** @type {HTMLInputElement} */ (e.target);
      if (inputTarget.files) {
        this._onFileLoad(inputTarget.files[0]);
      }
      inputTarget.value = '';
    });

    // A click on the visual placeholder will trigger the hidden file input.
    const placeholderTarget = find('.viewer-placeholder-inner', document);
    placeholderTarget.addEventListener('click', e => {
      const target = /** @type {?Element} */ (e.target);

      if (target && target.localName !== 'input') {
        fileInput.click();
      }
    });
  }

  /**
   * Attempts to pull gist id from URL and render report from it.
   * @return {Promise<void>}
   * @private
   */
  _loadFromDeepLink() {
    const params = new URLSearchParams(location.search);
    const gistId = params.get('gist');
    if (!gistId) {
      return Promise.resolve();
    }

    return this._github.getGistFileContentAsJson(gistId).then(reportJson => {
      this._reportIsFromGist = true;
      this._replaceReportHtml(reportJson);
    }).catch(err => logger.error(err.message));
  }

  /**
   * Basic Lighthouse report JSON validation.
   * @param {LH.Result} reportJson
   * @private
   */
  _validateReportJson(reportJson) {
    if (!reportJson.lighthouseVersion) {
      throw new Error('JSON file was not generated by Lighthouse');
    }

    // Leave off patch version in the comparison.
    const semverRe = new RegExp(/^(\d+)?\.(\d+)?\.(\d+)$/);
    const reportVersion = reportJson.lighthouseVersion.replace(semverRe, '$1.$2');
    const lhVersion = window.LH_CURRENT_VERSION.replace(semverRe, '$1.$2');

    if (reportVersion < lhVersion) {
      // TODO: figure out how to handler older reports. All permalinks to older
      // reports will start to throw this warning when the viewer rev's its
      // minor LH version.
      // See https://github.com/GoogleChrome/lighthouse/issues/1108
      logger.warn('Results may not display properly.\n' +
                  'Report was created with an earlier version of ' +
                  `Lighthouse (${reportJson.lighthouseVersion}). The latest ` +
                  `version is ${window.LH_CURRENT_VERSION}.`);
    }
  }

  /**
   * @param {LH.Result} json
   * @private
   */
  // TODO: Really, `json` should really have type `unknown` and
  // we can have _validateReportJson verify that it's an LH.Result
  _replaceReportHtml(json) {
    // Allow users to view the runnerResult
    if ('lhr' in json) {
      json = /** @type {LH.RunnerResult} */ (json).lhr;
    }

    this._validateReportJson(json);

    // Redirect to old viewer if a v2 report. v3, v4, v5 handled by v5 viewer.
    if (json.lighthouseVersion.startsWith('2')) {
      this._loadInLegacyViewerVersion(json);
      return;
    }

    const dom = new DOM(document);
    const renderer = new ReportRenderer(dom);

    const container = find('main', document);
    try {
      renderer.renderReport(json, container);

      // Only give gist-saving callback (and clear gist from query string) if
      // current report isn't from a gist.
      let saveCallback = null;
      if (!this._reportIsFromGist) {
        saveCallback = this._onSaveJson;
        history.pushState({}, '', LighthouseReportViewer.APP_URL);
      }

      const features = new ViewerUIFeatures(dom, saveCallback);
      features.initFeatures(json);
    } catch (e) {
      logger.error(`Error rendering report: ${e.message}`);
      dom.resetTemplates(); // TODO(bckenny): hack
      container.textContent = '';
      throw e;
    }

    // Remove the placeholder UI once the user has loaded a report.
    const placeholder = document.querySelector('.viewer-placeholder');
    if (placeholder) {
      placeholder.remove();
    }

    if (window.ga) {
      window.ga('send', 'event', 'report', 'view');
    }
  }

  /**
   * Updates the page's HTML with contents of the JSON file passed in.
   * @param {File} file
   * @return {Promise<void>}
   * @throws file was not valid JSON generated by Lighthouse or an unknown file
   *     type was used.
   * @private
   */
  _onFileLoad(file) {
    return this._readFile(file).then(str => {
      let json;
      try {
        json = JSON.parse(str);
      } catch (e) {
        throw new Error('Could not parse JSON file.');
      }
      this._reportIsFromGist = false;
      this._replaceReportHtml(json);
    }).catch(err => logger.error(err.message));
  }

  /**
   * Stores v2.x report in IDB, then navigates to legacy viewer in current tab.
   * @param {LH.Result} reportJson
   * @private
   */
  _loadInLegacyViewerVersion(reportJson) {
    const warnMsg = `Version mismatch between viewer and JSON. Opening compatible viewer...`;
    logger.log(warnMsg, false);

    // Place report in IDB, then navigate current tab to the legacy viewer
    const viewerPath = new URL('../viewer2x/', location.href);
    idbKeyval.set('2xreport', reportJson).then(_ => {
      window.location.href = viewerPath.href;
    });
  }

  /**
   * Reads a file and returns its content as a string.
   * @param {File} file
   * @return {Promise<string>}
   * @private
   */
  _readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function(e) {
        const readerTarget = /** @type {?FileReader} */ (e.target);
        const result = /** @type {?string} */ (readerTarget && readerTarget.result);
        if (!result) {
          reject('Could not read file');
          return;
        }
        resolve(result);
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  /**
   * Saves the current report by creating a gist on GitHub.
   * @param {LH.Result} reportJson
   * @return {Promise<string|void>} id of the created gist.
   * @private
   */
  _onSaveJson(reportJson) {
    if (window.ga) {
      window.ga('send', 'event', 'report', 'share');
    }

    // TODO: find and reuse existing json gist if one exists.
    return this._github.createGist(reportJson).then(id => {
      if (window.ga) {
        window.ga('send', 'event', 'report', 'created');
      }

      this._reportIsFromGist = true;
      history.pushState({}, '', `${LighthouseReportViewer.APP_URL}?gist=${id}`);

      return id;
    }).catch(err => logger.log(err.message));
  }

  /**
   * Enables pasting a JSON report or gist URL on the page.
   * @param {ClipboardEvent} e
   * @private
   */
  _onPaste(e) {
    e.preventDefault();

    // Try paste as gist URL.
    try {
      const url = new URL(e.clipboardData.getData('text'));
      this._loadFromGistURL(url.href);

      if (window.ga) {
        window.ga('send', 'event', 'report', 'paste-link');
      }
    } catch (err) {
      // noop
    }

    // Try paste as json content.
    try {
      const json = JSON.parse(e.clipboardData.getData('text'));
      this._reportIsFromGist = false;
      this._replaceReportHtml(json);

      if (window.ga) {
        window.ga('send', 'event', 'report', 'paste');
      }
    } catch (err) {
      // noop
    }
  }

  /**
   * Handles changes to the gist url input.
   * @param {Event} e
   * @private
   */
  _onUrlInputChange(e) {
    e.stopPropagation();

    if (!e.target) {
      return;
    }

    const inputElement = /** @type {HTMLInputElement} */ (e.target);

    try {
      this._loadFromGistURL(inputElement.value);
    } catch (err) {
      logger.error('Invalid URL');
    }
  }

  /**
   * Loads report json from gist URL, if valid. Updates page URL with gist ID
   * and loads from github.
   * @param {string} urlStr Gist URL.
   * @private
   */
  _loadFromGistURL(urlStr) {
    try {
      const url = new URL(urlStr);

      if (url.origin !== 'https://gist.github.com') {
        logger.error('URL was not a gist');
        return;
      }

      const match = url.pathname.match(/[a-f0-9]{5,}/);
      if (match) {
        history.pushState({}, '', `${LighthouseReportViewer.APP_URL}?gist=${match[0]}`);
        this._loadFromDeepLink();
      }
    } catch (err) {
      logger.error('Invalid URL');
    }
  }

  /**
   * Initializes of a `message` listener to respond to postMessage events.
   * @private
   */
  _listenForMessages() {
    window.addEventListener('message', e => {
      if (e.source === self.opener && e.data.lhresults) {
        this._reportIsFromGist = false;
        this._replaceReportHtml(e.data.lhresults);

        if (self.opener && !self.opener.closed) {
          self.opener.postMessage({rendered: true}, '*');
        }
        if (window.ga) {
          window.ga('send', 'event', 'report', 'open in viewer');
        }
      }
    });

    // If the page was opened as a popup, tell the opening window we're ready.
    if (self.opener && !self.opener.closed) {
      self.opener.postMessage({opened: true}, '*');
    }
  }
}

// node export for testing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LighthouseReportViewer;
}
,/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* global LighthouseReportViewer, Logger */

/**
 * @param {string} src
 * @return {Promise}
 */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    // document.head is defined.
    /** @type {HTMLHeadElement} */ (document.head).appendChild(script);
  });
}

const loadPolyfillPromises = [];
if (!('fetch' in window)) {
  loadPolyfillPromises.push(loadScript('./src/polyfills/fetch.js'));
}
if (!('URLSearchParams' in window)) {
  loadPolyfillPromises.push(loadScript('./src/polyfills/url-search-params.js'));
}

// Lazy load polyfills that are needed. If any of the load promises fails,
// stop and don't create a report.
Promise.all(loadPolyfillPromises).then(_ => {
  const logEl = document.querySelector('#lh-log');
  if (!logEl) {
    throw new Error('logger element not found');
  }
  // TODO: switch all global uses of logger to `lh-log` events.
  window.logger = new Logger(logEl);

  // Listen for log events from main report.
  document.addEventListener('lh-log', e => {
    const ce = /** @type {CustomEvent<{cmd: string, msg: string}>} */ (e);

    switch (ce.detail.cmd) {
      case 'log':
        window.logger.log(ce.detail.msg);
        break;
      case 'warn':
        window.logger.warn(ce.detail.msg);
        break;
      case 'error':
        window.logger.error(ce.detail.msg);
        break;
      case 'hide':
        window.logger.hide();
        break;
    }
  });

  // Listen for analytics events from main report.
  document.addEventListener('lh-analytics', e => {
    const ce = /** @type {CustomEvent<{cmd: string, fields: UniversalAnalytics.FieldsObject}>} */
      (e);

    if (window.ga) {
      window.ga(ce.detail.cmd, ce.detail.fields);
    }
  });

  window.viewer = new LighthouseReportViewer();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
,/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* global ReportUIFeatures, ReportGenerator */

/**
 * Extends ReportUIFeatures to add an (optional) ability to save to a gist and
 * generates the saved report from a browserified ReportGenerator.
 */
class ViewerUIFeatures extends ReportUIFeatures {
  /**
   * @param {DOM} dom
   * @param {?function(LH.Result): void} saveGistCallback
   */
  constructor(dom, saveGistCallback) {
    super(dom);

    this._saveGistCallback = saveGistCallback;
  }

  /**
   * @param {LH.Result} report
   * @override
   */
  initFeatures(report) {
    super.initFeatures(report);

    // Disable option to save as gist if no callback for saving.
    if (!this._saveGistCallback) {
      const saveGistItem = this._dom.find('.lh-tools--gist', this._document);
      saveGistItem.setAttribute('disabled', 'true');
    }
  }

  /**
   * Uses ReportGenerator to create the html that recreates this report.
   * @return {string}
   * @override
   */
  getReportHtml() {
    return ReportGenerator.generateReportHtml(this.json);
  }

  /**
   * @override
   */
  saveAsGist() {
    if (this._saveGistCallback) {
      this._saveGistCallback(this.json);
    } else {
      // UI should prevent this from being called with no callback, but throw to be sure.
      throw new Error('Cannot save this report as a gist');
    }

    // Disable save-as-gist option after saving.
    const saveGistItem = this._dom.find('.lh-tools--gist', this._document);
    saveGistItem.setAttribute('disabled', 'true');
  }
}

// node export for testing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ViewerUIFeatures;
}
