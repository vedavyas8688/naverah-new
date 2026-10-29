import { articles, properties, services, members } from './data.js';
import { loadPage } from './loadPage.js';

const routes = new Set([
  '/',
  '/index',
  '/home-v1',
  '/about',
  '/services',
  '/service',
  '/properties',
  '/portfolio',
  '/blog',
  '/blog-v1',
  '/team',
  '/agent',
  '/contact',
  '/contact-v1',
  '/request-a-quote',
  ...[...articles, ...properties, ...services, ...members].map((item) => item.url),
]);

// Links still use normal navigation. Warm both the document and its page chunk.
export function installRoutePrefetch() {
  const connection = navigator.connection;
  const limitedConnection = () =>
    connection?.saveData ||
    /(^|-)2g$|^3g$/.test(connection?.effectiveType || '') ||
    !navigator.onLine;
  const seen = new Set();
  const links = new Set();
  let timer;
  let pending;
  let busy = false;
  let disposed = false;
  let pageLoaded = document.readyState === 'complete';
  const markLoaded = () => {
    pageLoaded = true;
  };
  window.addEventListener('load', markLoaded, { once: true });

  const destination = (target) => {
    const anchor = target instanceof Element ? target.closest('a[href]') : null;
    if (
      !anchor ||
      anchor.hasAttribute('download') ||
      (anchor.target && anchor.target !== '_self') ||
      (anchor.classList.contains('button') &&
        ['/contact', '#enquire'].includes(anchor.getAttribute('href')))
    )
      return null;
    const url = new URL(anchor.href, location.href);
    const path = url.pathname.replace(/\/$/, '') || '/';
    if (
      url.origin !== location.origin ||
      url.search ||
      url.hash ||
      path === (location.pathname.replace(/\/$/, '') || '/') ||
      !routes.has(path)
    )
      return null;
    return path;
  };

  const warm = async (path) => {
    if (disposed || !pageLoaded || limitedConnection() || busy || seen.has(path) || seen.size >= 8)
      return;
    busy = true;
    seen.add(path);
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'document';
    link.href = path;
    links.add(link);
    document.head.appendChild(link);
    try {
      await loadPage(path);
    } catch {
      // A failed speculative request must never interrupt navigation.
      seen.delete(path);
      link.remove();
      links.delete(link);
    } finally {
      busy = false;
    }
  };

  const cancel = () => {
    clearTimeout(timer);
    pending = null;
  };
  const intent = (event) => {
    if (event.type === 'pointerover' && event.pointerType !== 'mouse') return;
    const path = destination(event.target);
    if (path === pending) return;
    cancel();
    if (!path || limitedConnection()) return;
    pending = path;
    timer = setTimeout(() => {
      pending = null;
      void warm(path);
    }, 120);
  };
  const leave = (event) => {
    if (destination(event.relatedTarget) !== pending) cancel();
  };
  document.addEventListener('pointerover', intent);
  document.addEventListener('focusin', intent);
  document.addEventListener('pointerout', leave);
  document.addEventListener('focusout', leave);
  return () => {
    disposed = true;
    window.removeEventListener('load', markLoaded);
    cancel();
    document.removeEventListener('pointerover', intent);
    document.removeEventListener('focusin', intent);
    document.removeEventListener('pointerout', leave);
    document.removeEventListener('focusout', leave);
    links.forEach((link) => link.remove());
  };
}
