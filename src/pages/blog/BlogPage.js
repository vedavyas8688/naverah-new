import { useMemo, useState } from 'react';
import { articles } from '../../data.js';
import { BlogHeroSection } from './sections/BlogHeroSection.js';
import { ArticleListingSection } from './sections/ArticleListingSection.js';

const searchIndex = articles.map((article) => ({ article, title: article.title.toLowerCase() }));

export function BlogPage() {
  const [query, setQuery] = useState(''),
    [page, setPage] = useState(1);
  const found = useMemo(() => {
    const search = query.toLowerCase();
    return searchIndex.filter(({ title }) => title.includes(search)).map(({ article }) => article);
  }, [query]);
  return (
    <>
      <BlogHeroSection />
      <ArticleListingSection
        query={query}
        setQuery={setQuery}
        page={page}
        setPage={setPage}
        found={found}
      />
    </>
  );
}
