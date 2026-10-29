const requests = new Map();
const loaded = new Map();
const detailUrl = (kind, slug) => `/content/${kind}/${encodeURIComponent(slug)}.json`;

export function getLoadedDetail(kind, slug) {
  return loaded.get(detailUrl(kind, slug)) || null;
}
const HANDOFF_KEY = 'naverah:detail-prefetch:v1';
const HANDOFF_TTL = 30_000;
const MAX_HANDOFF_LENGTH = 128_000;

function takePrefetched(url) {
  try {
    const raw = sessionStorage.getItem(HANDOFF_KEY);
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (
      !Number.isFinite(entry.created) ||
      Date.now() - entry.created > HANDOFF_TTL ||
      entry.created > Date.now()
    ) {
      sessionStorage.removeItem(HANDOFF_KEY);
      return null;
    }
    if (entry.url !== url) return null;
    sessionStorage.removeItem(HANDOFF_KEY);
    if (entry.data && typeof entry.data === 'object') return entry.data;
  } catch {
    // Storage can be disabled or full; network loading remains available.
  }
  return null;
}

function handoff(url, data) {
  try {
    const entry = JSON.stringify({ url, data, created: Date.now() });
    if (entry.length <= MAX_HANDOFF_LENGTH) sessionStorage.setItem(HANDOFF_KEY, entry);
  } catch {
    // Speculation must not prevent navigation when storage is unavailable.
  }
}

// Share the request between route prefetching and the mounted detail page.
export function loadDetail(kind, slug, { prefetch = false } = {}) {
  const url = detailUrl(kind, slug);
  if (!requests.has(url)) {
    const cached = prefetch ? null : takePrefetched(url);
    if (cached) {
      loaded.set(url, cached);
      const request = Promise.resolve(cached);
      requests.set(url, request);
      return request;
    }
    const request = fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Could not load page content.');
        return response.json();
      })
      .then((data) => {
        loaded.set(url, data);
        if (prefetch) handoff(url, data);
        return data;
      })
      .catch((error) => {
        requests.delete(url);
        throw error;
      });
    requests.set(url, request);
  }
  return requests.get(url);
}
