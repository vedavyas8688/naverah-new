const requests = new Map();

// Share the request between route prefetching and the mounted detail page.
export function loadDetail(kind, slug) {
  const url = `/content/${kind}/${encodeURIComponent(slug)}.json`;
  if (!requests.has(url)) {
    const request = fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Could not load page content.');
        return response.json();
      })
      .catch((error) => {
        requests.delete(url);
        throw error;
      });
    requests.set(url, request);
  }
  return requests.get(url);
}
