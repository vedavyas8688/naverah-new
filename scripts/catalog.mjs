import fs from 'node:fs';
const d = JSON.parse(fs.readFileSync('src/data/content.json'));
for (const type of ['articles', 'properties']) {
  fs.mkdirSync(`public/content/${type}`, { recursive: true });
  d[type] = d[type].map((p) => {
    const cleanPage = { ...p };
    fs.writeFileSync(`public/content/${type}/${p.slug}.json`, JSON.stringify(cleanPage));
    const q = { ...cleanPage };
    for (const k of [
      'body',
      'about',
      'sections',
      'amenities',
      'gallery',
      'plans',
      'prices',
      'locationBody',
      'brochures',
    ])
      if (k in q) q[k] = Array.isArray(q[k]) ? [] : '';
    return q;
  });
}
fs.writeFileSync('src/data/catalog.json', JSON.stringify(d));
