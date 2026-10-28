import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Check,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { articles, contact, data, properties, services } from '../../../data.js';
import {
  BlogCard,
  Button,
  ContactForm,
  CTA,
  FAQ,
  Gallery,
  Heading,
  Office,
  Pagination,
  Picture,
  PropertyCard,
  ServiceGrid,
  TeamGrid,
} from '../../../components/index.js';
export function BlogHeroSection({ query, setQuery, page, setPage, found }) {
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  const latestArticle =
    articles
      .filter((article) => {
        const publicationDate = new Date(article.date);
        return !Number.isNaN(publicationDate.getTime()) && publicationDate <= today;
      })
      .sort((first, second) => new Date(second.date) - new Date(first.date))[0] || articles[0];

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
