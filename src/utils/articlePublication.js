const PUBLICATION_CUTOFF = new Date('2026-10-16T23:59:59');

export function isPublishedArticle(article) {
  if (!article?.date) return true;

  const publicationDate = new Date(article.date);
  return !Number.isNaN(publicationDate.getTime()) && publicationDate <= PUBLICATION_CUTOFF;
}

export function shouldShowArticleDate(article) {
  if (!article?.date) return false;

  const publicationDate = new Date(article.date);
  return !Number.isNaN(publicationDate.getTime()) && publicationDate <= PUBLICATION_CUTOFF;
}
