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
function crore(p) {
  const v = Number((p.price || '').replace(/,/g, '').match(/[0-9.]+/)?.[0]);
  return /\bL\b|lakh/i.test(p.price || '') ? v / 100 : v || Infinity;
}
export function PropertyListingSection({
  query,
  setQuery,
  type,
  setType,
  budget,
  setBudget,
  bed,
  setBed,
  page,
  setPage,
  found,
}) {
  const resultsRef = useRef(null);

  const changePage = (nextPage) => {
    setPage(nextPage);
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section className="portfolio-list shell" ref={resultsRef}>
      <div className="filter-bar">
        <label className="search-field">
          <Search size={21} />
          <input
            aria-label="Search properties"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search by property or location"
          />
        </label>
        <select
          aria-label="Property type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setPage(1);
          }}
        >
          {[
            'All',
            ...new Set([
              ...data.propertyTypes.map((t) => t.title),
              ...properties.map((p) => p.type),
            ]),
          ].map((t) => (
            <option value={t} key={t}>
              {t === 'All' ? 'All property types' : t}
            </option>
          ))}
        </select>
        <select
          aria-label="Maximum budget"
          value={budget}
          onChange={(e) => {
            setBudget(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">{'Any budget'}</option>
          {[1, 2, 3, 5].map((n) => (
            <option value={n} key={n}>
              {'Up to \u20B9'}
              {n}
              {' Cr'}
            </option>
          ))}
        </select>
        <select
          aria-label="Bedrooms"
          value={bed}
          onChange={(e) => {
            setBed(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">{'Any bedrooms'}</option>
          {[2, 3, 4, 5].map((n) => (
            <option value={n} key={n}>
              {n}
              {' BHK'}
            </option>
          ))}
        </select>
      </div>
      {found.length ? (
        <div className="properties-list-grid">
          {found.slice((page - 1) * 6, page * 6).map((p) => (
            <PropertyCard p={p} key={p.slug} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>{'No properties found'}</h2>
          <p>{'Try another location or adjust your filters.'}</p>
          <button
            className="button mt-6"
            onClick={() => {
              setQuery('');
              setType('All');
              setBudget('All');
              setBed('All');
            }}
          >
            {'Reset filters'}
          </button>
        </div>
      )}
      <Pagination page={page} count={Math.ceil(found.length / 6)} change={changePage} />
    </section>
  );
}
