import fs from 'node:fs';
const d = JSON.parse(fs.readFileSync('src/data/content.json'));
const siteUrl = 'https://www.naverahassets.com';
const hiddenPropertySlugs = new Set(['whispers-Of-the-wind', 'godrej-yelahanka']);

d.properties = d.properties.filter(({ slug }) => !hiddenPropertySlugs.has(slug));

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

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

const sitemapRoutes = [
  ...Object.values(d.pages).map(({ url }) => url),
  ...d.services.map(({ url }) => url),
  ...d.articles.map(({ url }) => url),
  ...d.properties.map(({ url }) => url),
];
const uniqueRoutes = [...new Set(sitemapRoutes)].sort((a, b) => {
  if (a === '/') return -1;
  if (b === '/') return 1;
  return a.localeCompare(b);
});
const primaryRoutes = new Set(['/about', '/blog', '/contact', '/properties', '/service']);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...uniqueRoutes.map((route) => {
    const priority = route === '/' ? '1.0' : primaryRoutes.has(route) ? '0.9' : '0.7';
    const changefreq =
      route === '/' || route === '/blog' || route === '/properties' ? 'weekly' : 'monthly';
    return [
      '  <url>',
      `    <loc>${escapeXml(`${siteUrl}${route}`)}</loc>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  }),
  '</urlset>',
  '',
].join('\n');

fs.writeFileSync('public/sitemap.xml', sitemap);
