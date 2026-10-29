import { articles, properties, services, members } from './data.js';
import { loadDetail } from './detailResource.js';

// Resolve before mounting so the existing entrance animations see the complete page.
export function loadPage(pathname = location.pathname) {
  const path = decodeURIComponent(pathname).replace(/\/$/, '') || '/';
  const slug = path.split('/').pop();
  if (path === '/' || ['index', 'home-v1'].includes(slug))
    return import('./pages/home/HomePage.js');
  if (slug === 'about') return import('./pages/about/AboutPage.js');
  if (['services', 'service'].includes(slug)) return import('./pages/services/ServicesPage.js');
  if (['properties', 'portfolio'].includes(slug))
    return import('./pages/properties/PropertiesPage.js');
  if (['blog', 'blog-v1'].includes(slug)) return import('./pages/blog/BlogPage.js');
  if (['team', 'agent'].includes(slug)) return import('./pages/team/TeamPage.js');
  if (['contact', 'contact-v1', 'request-a-quote'].includes(slug))
    return import('./pages/contact/ContactPage.js');
  if (articles.some((item) => item.slug === slug)) {
    void loadDetail('articles', slug).catch(() => {});
    return import('./pages/article/ArticlePage.js');
  }
  if (properties.some((item) => item.slug === slug)) {
    void loadDetail('properties', slug).catch(() => {});
    return import('./pages/property/PropertyPage.js');
  }
  if (services.some((item) => item.url === path)) return import('./pages/service/ServicePage.js');
  if (members.some((item) => item.url === path)) return import('./pages/member/MemberPage.js');
  return import('./pages/notfound/NotFoundPage.js');
}
