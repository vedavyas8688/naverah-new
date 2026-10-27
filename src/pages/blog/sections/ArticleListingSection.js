import { useRef, useState } from 'react';
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
export function ArticleListingSection({ query, setQuery, page, setPage, found }) {
  const resultsRef = useRef(null);

  const changePage = (nextPage) => {
    setPage(nextPage);
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section className="section soft blog-results" ref={resultsRef}>
      <div className="shell">
        <div className="section-head">
          <Heading>{'Latest articles'}</Heading>
          <label className="search-field border-b">
            <Search size={20} />
            <input
              aria-label="Search articles"
              placeholder="Search articles"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </label>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {found.slice((page - 1) * 12, page * 12).map((a) => (
            <BlogCard a={a} key={a.slug} />
          ))}
        </div>
        {!found.length && <p className="empty-state">{'No articles match your search.'}</p>}
        <Pagination page={page} count={Math.ceil(found.length / 12)} change={changePage} />
      </div>
    </section>
  );
}
