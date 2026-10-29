import { useMemo } from 'react';
import { articles } from '../../../data.js';
import { Heading, Picture } from '../../../components/index.js';
import { latestArticleForHero } from '../../../utils/articlePublication.js';

export function BlogHeroSection() {
  const day = new Date().toDateString();
  const latestArticle = useMemo(() => latestArticleForHero(articles, new Date(day)), [day]);

  return (
    <section className="section-top blog-page-hero">
      <div className="shell">
        <div className="text-center max-w-[850px] mx-auto hero-enter">
          <Heading tag="h1">{'News & articles'}</Heading>
          <p className="muted mt-6">{'Stay informed with the latest real estate insights.'}</p>
        </div>
        <a href={latestArticle.url} className="blog-lead hero-enter">
          <Picture src={latestArticle.image} alt={latestArticle.title} eager />
          <div>
            <h2>{latestArticle.title}</h2>
            <p className="muted mt-6 line-clamp-3">{latestArticle.description}</p>
            <p className="mt-7 text-sm">{'Real estate insights'}</p>
          </div>
        </a>
      </div>
    </section>
  );
}
