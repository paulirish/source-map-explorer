(async function() {
  const { generateHtml } = await import('./html.ts');
  const { samples } = await import('./sample.ts');
  const { renderSM } = await import('./browser.ts');

  const { code, map } = samples();
  console.assert(code);
  console.assert(map);
  const result = await renderSM(code, map).catch(e => {
    if (!e.bundles) return console.error(e);

    if (e.bundles.length) console.warn(e.bundles);
    if (e.errors.length) e.errors.forEach(console.error);
  });

  const output = generateHtml(result.bundles)
  document.write(output);
})();

