import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const output = path.resolve('dist');
assert(fs.existsSync(path.join(output, '.vite/manifest.json')), 'Run npm run build first.');
const catalog = JSON.parse(fs.readFileSync('src/data/catalog.json', 'utf8'));
const manifest = JSON.parse(fs.readFileSync(path.join(output, '.vite/manifest.json'), 'utf8'));
const routes = new Set([
  '/',
  '/index',
  '/home-v1',
  '/about',
  '/properties',
  '/portfolio',
  '/service',
  '/services',
  '/blog',
  '/blog-v1',
  '/agent',
  '/team',
  '/contact',
  '/contact-v1',
  '/request-a-quote',
  ...[...catalog.articles, ...catalog.properties, ...catalog.services, ...catalog.team].map(
    (item) => item.url,
  ),
]);
let resourceCount = 0;
for (const route of routes) {
  const file = path.resolve(output, route === '/' ? 'index.html' : `.${route}.html`);
  assert(file.startsWith(output + path.sep), `Route escapes output: ${route}`);
  assert(fs.existsSync(file), `Missing route HTML: ${route}`);
  const html = fs.readFileSync(file, 'utf8');
  assert(html.includes('<div id="root"></div>'), `Missing app mount: ${route}`);
  assert.equal(
    [...html.matchAll(/<link data-route-resource rel="modulepreload"/g)].length,
    1,
    `Expected one page-module hint: ${route}`,
  );
  const resources = [...html.matchAll(/<(?:link|script)\b[^>]*\b(?:href|src)="(\/[^"?#]+)"/g)].map(
    (match) => match[1],
  );
  for (const resource of resources) {
    const target = path.resolve(output, '.' + resource);
    assert(target.startsWith(output + path.sep), `Resource escapes output: ${resource}`);
    assert(fs.existsSync(target), `Missing built resource on ${route}: ${resource}`);
    resourceCount++;
  }
  const hints = [
    ...html.matchAll(/<link\b[^>]*rel="(?:preload|modulepreload)"[^>]*href="([^"]+)"/g),
  ].map((match) => match[1]);
  assert.equal(new Set(hints).size, hints.length, `Duplicate preload on ${route}`);
}
for (const record of Object.values(manifest)) {
  assert(fs.existsSync(path.join(output, record.file)), `Missing bundle: ${record.file}`);
  for (const dependency of [...(record.imports || []), ...(record.dynamicImports || [])])
    assert(manifest[dependency], `Missing manifest dependency: ${dependency}`);
}
for (const kind of ['articles', 'properties']) {
  for (const item of catalog[kind]) {
    const detail = JSON.parse(
      fs.readFileSync(path.join(output, 'content', kind, `${item.slug}.json`), 'utf8'),
    );
    for (const key of ['url', 'seoTitle', 'description'])
      assert.deepEqual(detail[key], item[key], `Metadata mismatch: ${item.slug}/${key}`);
  }
}
console.log(
  `PASS: ${routes.size} routes, ${resourceCount} resource references, bundle dependencies, preload uniqueness, and detail metadata consistency.`,
);
