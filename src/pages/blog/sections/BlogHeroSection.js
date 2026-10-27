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
  return (
    <section className="section-top">
      <div className="shell">
        <div className="text-center max-w-[850px] mx-auto hero-enter">
          <Heading tag="h1">{'News & articles'}</Heading>
          <p className="muted mt-6">{'Stay informed with the latest real estate insights.'}</p>
        </div>
        <a href={articles[0].url} className="blog-lead hero-enter">
          <Picture src={articles[0].image} alt={articles[0].title} eager />
          <div>
            <h2>{articles[0].title}</h2>
            <p className="muted mt-6 line-clamp-3">{articles[0].description}</p>
            <p className="mt-7 text-sm">
              {'Real estate '}
              <span className="mx-4">{'\u2014'}</span>
              {articles[0].date}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
