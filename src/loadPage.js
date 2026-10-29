import { articles, properties, services, members, data } from './data.js';
import { loadDetail } from './detailResource.js';
import { preloadImage } from './utils/preloadImage.js';
import { latestArticleForHero } from './utils/articlePublication.js';

// Resolve before mounting so the existing entrance animations see the complete page.
export function loadPage(pathname = location.pathname) {
  const path = decodeURIComponent(pathname).replace(/\/$/, '') || '/';
  const slug = path.split('/').pop();
  if (path === '/' || ['index', 'home-v1'].includes(slug))
    return import('./pages/home/HomePage.js');
  if (slug === 'about') {
    preloadImage(data.images.founder, pathname);
    const consultation =
      services.find((item) => item.slug === 'property-consultation') || services[0];
    preloadImage(consultation?.image, pathname);
    return import('./pages/about/AboutPage.js');
  }
  if (['services', 'service'].includes(slug)) {
    preloadImage('/images/services/services-page/premium-interior-banner.webp', pathname);
    return import('./pages/services/ServicesPage.js');
  }
  if (['properties', 'portfolio'].includes(slug))
    return import('./pages/properties/PropertiesPage.js');
  if (['blog', 'blog-v1'].includes(slug)) {
    preloadImage(latestArticleForHero(articles)?.image, pathname);
    return import('./pages/blog/BlogPage.js');
  }
  if (['team', 'agent'].includes(slug)) return import('./pages/team/TeamPage.js');
  if (['contact', 'contact-v1', 'request-a-quote'].includes(slug))
    return import('./pages/contact/ContactPage.js');
  const article = articles.find((item) => item.slug === slug);
  if (article) {
    preloadImage(article.image, pathname);
    void loadDetail('articles', slug, { prefetch: pathname !== location.pathname }).catch(() => {});
    return import('./pages/article/ArticlePage.js');
  }
  const property = properties.find((item) => item.slug === slug);
  if (property) {
    preloadImage(property.hero || property.image, pathname);
    void loadDetail('properties', slug, { prefetch: pathname !== location.pathname }).catch(
      () => {},
    );
    return import('./pages/property/PropertyPage.js');
  }
  const service = services.find((item) => item.url === path);
  if (service) {
    preloadImage(service.image, pathname);
    return import('./pages/service/ServicePage.js');
  }
  const member = members.find((item) => item.url === path);
  if (member) {
    preloadImage(member.image, pathname);
    return import('./pages/member/MemberPage.js');
  }
  return import('./pages/notfound/NotFoundPage.js');
}
