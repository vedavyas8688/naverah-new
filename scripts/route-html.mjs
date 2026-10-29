import fs from 'node:fs';
import path from 'node:path';

const catalog = JSON.parse(fs.readFileSync('src/data/catalog.json', 'utf8'));
const template = fs
  .readFileSync('dist/index.html', 'utf8')
  .replace(/\s*<link data-route-resource[^>]*>/g, '');
const output = path.resolve('dist');
const manifest = JSON.parse(fs.readFileSync('dist/.vite/manifest.json', 'utf8'));
const escape = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character],
  );
const routes = [
  ...[
    ['/', 'home/HomePage'],
    ['/index', 'home/HomePage'],
    ['/home-v1', 'home/HomePage'],
    ['/about', 'about/AboutPage'],
    ['/properties', 'properties/PropertiesPage'],
    ['/portfolio', 'properties/PropertiesPage'],
    ['/service', 'services/ServicesPage'],
    ['/services', 'services/ServicesPage'],
    ['/blog', 'blog/BlogPage'],
    ['/blog-v1', 'blog/BlogPage'],
    ['/agent', 'team/TeamPage'],
    ['/team', 'team/TeamPage'],
    ['/contact', 'contact/ContactPage'],
    ['/contact-v1', 'contact/ContactPage'],
    ['/request-a-quote', 'contact/ContactPage'],
  ].map(([url, page]) => ({ url, module: `src/pages/${page}.js` })),
  ...catalog.articles.map((item) => ({
    ...item,
    hero: item.image,
    contentKind: 'articles',
    module: 'src/pages/article/ArticlePage.js',
  })),
  ...catalog.properties.map((item) => ({
    ...item,
    contentKind: 'properties',
    module: 'src/pages/property/PropertyPage.js',
  })),
  ...catalog.team.map((item) => ({
    ...item,
    hero: item.image,
    module: 'src/pages/member/MemberPage.js',
  })),
  ...catalog.services.map((item) => ({
    ...item,
    module: 'src/pages/service/ServicePage.js',
    hero:
      item.slug === 'property-consultation'
        ? '/images/services/property-consultation/cover-indian.webp'
        : item.image,
  })),
];

for (const item of routes) {
  const destination = path.resolve(output, item.url === '/' ? 'index.html' : `.${item.url}.html`);
  if (!destination.startsWith(output + path.sep)) throw new Error(`Invalid route: ${item.url}`);
  const image = item.hero || item.image;
  if (image && !fs.existsSync('public' + image)) throw new Error(`Missing hero: ${item.url}`);
  const imageHint = image
    ? `\n  <link data-route-resource rel="preload" as="image" href="${escape(image)}" fetchpriority="high" />`
    : '';
  const content = item.contentKind
    ? `/content/${item.contentKind}/${encodeURIComponent(item.slug)}.json`
    : null;
  if (content && !fs.existsSync('public' + content))
    throw new Error(`Missing content: ${item.url}`);
  const contentHint = content
    ? `\n  <link data-route-resource rel="preload" as="fetch" href="${escape(content)}" type="application/json" crossorigin />`
    : '';
  const moduleFile = manifest[item.module]?.file;
  if (!moduleFile || !fs.existsSync(path.join(output, moduleFile)))
    throw new Error(`Missing page module: ${item.module}`);
  const moduleHint = `\n  <link data-route-resource rel="modulepreload" href="/${escape(moduleFile)}" crossorigin />`;
  // Keep the same app entry and body; discover this route's resources earlier.
  const html = template.replace('</head>', `${imageHint}${contentHint}${moduleHint}\n  </head>`);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html);
}
console.log(`Generated ${routes.length} route HTML files with early resource discovery.`);
