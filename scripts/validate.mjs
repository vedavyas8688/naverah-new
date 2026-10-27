import fs from 'node:fs';
import assert from 'node:assert/strict';
const d = JSON.parse(fs.readFileSync('src/data/content.json')),
  m = JSON.parse(fs.readFileSync('src/data/migration.json'));
const all = [...Object.values(d.pages), ...d.articles, ...d.properties];
assert.equal(all.length, m.sourcePageCount);
assert.equal(new Set(all.map((p) => p.url)).size, all.length);
for (const f of m.sourceFiles)
  assert(
    all.some((p) => p.url === (f === 'index' ? '/' : '/' + f)),
    'Missing source route: ' + f,
  );
for (const a of d.articles) {
  assert(a.body.length > 100, 'Empty article: ' + a.slug);
  assert(a.image, 'No article image: ' + a.slug);
  assert(fs.existsSync(`public/content/articles/${a.slug}.json`));
}
for (const p of d.properties) {
  assert(p.about.length > 100, 'Empty property: ' + p.slug);
  assert(p.image, 'No property image: ' + p.slug);
  assert(fs.existsSync(`public/content/properties/${p.slug}.json`));
}
assert.equal(d.services.length, 7);
for (const s of d.services) assert(s.image && s.points.length, 'Incomplete service: ' + s.title);
assert.equal(m.missingSourceAssets.length, 0);
const images = [...JSON.stringify(d).matchAll(/\/images\/[^"\\\s<>]+/g)].map((match) => match[0]);
for (const url of new Set(images)) assert(fs.existsSync('public' + url), 'Missing image: ' + url);
console.log(
  `PASS: ${all.length} clean routes, ${d.articles.length} full articles, ${d.properties.length} property detail records, 7 services and ${new Set(images).size} referenced image files.`,
);
