// Only preload on the active route; speculative navigation must not compete for images.
export function preloadImage(src, pathname) {
  if (!src || pathname !== location.pathname || typeof document === 'undefined') return;
  if (
    Array.from(document.querySelectorAll('link[rel="preload"][as="image"]')).some(
      (link) => link.getAttribute('href') === src,
    )
  )
    return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = 'high';
  document.head.appendChild(link);
}
