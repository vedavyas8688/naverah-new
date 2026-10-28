import React, { useEffect, useLayoutEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@fontsource/mona-sans/400.css';
import '@fontsource/mona-sans/500.css';
import '@fontsource/mona-sans/600.css';
import './styles.css';
import { ContactModal, Header, Footer } from './components/index.js';
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ServicePage,
  PropertiesPage,
  PropertyPage,
  BlogPage,
  ArticlePage,
  TeamPage,
  MemberPage,
  ContactPage,
  NotFoundPage,
} from './pages/index.js';
import { articles, properties, services, members, pages } from './data';
gsap.registerPlugin(ScrollTrigger);
function Detail({ kind, slug }) {
  const [item, setItem] = useState(null),
    [error, setError] = useState(false),
    [retry, setRetry] = useState(0);
  useEffect(() => {
    const ctrl = new AbortController();
    setError(false);
    fetch(`/content/${kind}/${slug}.json`, {
      signal: ctrl.signal,
    })
      .then((r) => {
        if (!r.ok) throw Error();
        return r.json();
      })
      .then(setItem)
      .catch((e) => {
        if (e.name !== 'AbortError') setError(true);
      });
    return () => ctrl.abort();
  }, [kind, slug, retry]);
  if (error)
    return (
      <div className="shell section">
        <h1 className="heading">{'This page could not be loaded.'}</h1>
        <button className="button mt-8" onClick={() => setRetry(retry + 1)}>
          {'Try again'}
        </button>
      </div>
    );
  if (!item)
    return (
      <div className={`loading-page ${kind === 'properties' ? 'dark' : ''}`} role="status">
        <span />
        {'Loading '}
        {kind === 'properties' ? 'property details' : 'article'}
        {'\u2026'}
      </div>
    );
  return kind === 'articles' ? <ArticlePage a={item} /> : <PropertyPage p={item} />;
}
function App() {
  const path = decodeURIComponent(location.pathname).replace(/\/$/, '') || '/';
  const slug = path.split('/').pop();
  const home = path === '/' || ['index', 'home-v1', 'home-v2'].includes(slug);
  const servicesPage = ['services', 'service'].includes(slug);
  const article = articles.find((a) => a.slug === slug),
    property = properties.find((p) => p.slug === slug),
    service = services.find((s) => s.url === path),
    member = members.find((m) => m.url === path);
  let view,
    dark = true,
    meta = {
      title: pages.index.seoTitle,
      description: pages.index.description,
    };
  if (home) view = <HomePage />;
  else if (slug === 'about') view = <AboutPage />;
  else if (servicesPage) view = <ServicesPage />;
  else if (['properties', 'portfolio'].includes(slug)) view = <PropertiesPage />;
  else if (['blog', 'blog-v1'].includes(slug)) {
    view = <BlogPage />;
    dark = false;
  } else if (['team', 'agent'].includes(slug)) {
    view = <TeamPage />;
    dark = false;
  } else if (['contact', 'contact-v1', 'request-a-quote'].includes(slug)) view = <ContactPage />;
  else if (article) {
    view = <Detail kind="articles" slug={article.slug} />;
    dark = false;
    meta = {
      title: article.seoTitle,
      description: article.description,
    };
  } else if (property) {
    view = <Detail kind="properties" slug={property.slug} />;
    meta = {
      title: property.seoTitle,
      description: property.description,
    };
  } else if (service) {
    view = <ServicePage s={service} />;
    meta = {
      title: service.title + ' | Naverah Assets',
      description: service.points.join('. '),
    };
  } else if (member) {
    view = <MemberPage m={member} />;
    meta = {
      title: member.name + ' | Naverah Assets',
      description: member.role,
    };
  } else {
    view = <NotFoundPage />;
    meta = {
      title: 'Page not found | Naverah Assets',
      description: 'Return to Naverah Assets.',
    };
  }
  if (pages[slug])
    meta = {
      title: pages[slug].seoTitle,
      description: pages[slug].description,
    };
  useEffect(() => {
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [meta.title]);
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {});
      const run = () =>
        ctx.add(() => {
          const enter = Array.from(document.querySelectorAll('.hero-enter:not([data-animated])'));
          enter.forEach((e) => (e.dataset.animated = 'true'));
          if (enter.length)
            gsap.from(enter, {
              opacity: 0,
              y: 22,
              scale: 0.98,
              filter: 'grayscale(100%)',
              duration: 0.9,
              stagger: 0.12,
              ease: 'power2.out',
              clearProps: 'all',
            });
          document.querySelectorAll('.hero-visual img:not([data-animated])').forEach((e) => {
            e.dataset.animated = 'true';
            gsap.from(e, {
              scale: 1.16,
              opacity: 0,
              duration: 1.65,
              ease: 'power2.out',
              clearProps: 'all',
            });
          });
          document
            .querySelectorAll('.home-services-section:not([data-animated])')
            .forEach((section) => {
              section.dataset.animated = 'true';
              const intro = section.querySelector('.home-services-intro');
              const heading = section.querySelector('.home-services-title .heading');
              const description = section.querySelector('.home-services-description');
              const actions = section.querySelector('.home-services-actions');
              const cards = Array.from(section.querySelectorAll('.service-item'));

              if (intro) intro.dataset.animated = 'true';
              cards.forEach((card) => (card.dataset.animated = 'true'));

              const timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: section,
                  start: 'top 78%',
                  once: true,
                },
                defaults: {
                  duration: 1.05,
                  ease: 'power3.out',
                  clearProps: 'all',
                },
              });

              if (heading) timeline.from(heading, { opacity: 0, y: 34 });
              if (description) timeline.from(description, { opacity: 0, y: 26 }, '>-0.62');
              if (actions) timeline.from(actions, { opacity: 0, y: 22 }, '>-0.58');
              if (cards.length)
                timeline.from(
                  cards,
                  {
                    opacity: 0,
                    y: 42,
                    scale: 0.985,
                    duration: 1.15,
                    stagger: 0.24,
                  },
                  '>-0.38',
                );
            });
          document.querySelectorAll('.journey-steps:not([data-animated])').forEach((group) => {
            group.dataset.animated = 'true';
            gsap.from(group.querySelectorAll('.journey-step'), {
              opacity: 0,
              x: 32,
              y: 16,
              filter: 'grayscale(100%)',
              duration: 0.75,
              stagger: 0.18,
              ease: 'power3.out',
              clearProps: 'all',
              scrollTrigger: {
                trigger: group,
                start: 'top 82%',
                once: true,
              },
            });
          });
          document.querySelectorAll('.reveal:not([data-animated])').forEach((e) => {
            e.dataset.animated = 'true';
            gsap.from(e, {
              opacity: 0,
              y: 14,
              scale: 0.98,
              filter: 'grayscale(100%)',
              duration: 0.85,
              delay: Number(e.dataset.revealDelay || 0),
              ease: 'power2.out',
              clearProps: 'all',
              scrollTrigger: {
                trigger: e,
                start: 'top 94%',
                once: true,
              },
            });
          });
        });
      run();
      const observer = new MutationObserver(run);
      observer.observe(document.getElementById('main-content'), {
        childList: true,
        subtree: true,
      });
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener('load', refresh);
      return () => {
        observer.disconnect();
        window.removeEventListener('load', refresh);
        ctx.revert();
        document
          .querySelectorAll('[data-animated]')
          .forEach((e) => e.removeAttribute('data-animated'));
      };
    });
    return () => mm.revert();
  }, []);
  return (
    <div className={home || property ? 'image-hero-layout' : ''}>
      <a href="#main-content" className="skip-link">
        {'Skip to content'}
      </a>
      <Header dark={dark} />
      <main id="main-content">{view}</main>
      <Footer />
      <ContactModal />
    </div>
  );
}
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
