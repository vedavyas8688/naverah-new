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
function crore(p) {
  const v = Number((p.price || '').replace(/,/g, '').match(/[0-9.]+/)?.[0]);
  return /\bL\b|lakh/i.test(p.price || '') ? v / 100 : v || Infinity;
}
export function PropertiesHeroSection({
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
  return (
    <section className="portfolio-top properties-page-hero dark">
      <div className="shell grid lg:grid-cols-[1.75fr_1fr] gap-12 items-center hero-enter">
        <Heading tag="h1">
          <span>Find your perfect</span> <span>property</span>
        </Heading>
        <p className="muted text-xl">
          {
            'Explore thoughtfully selected apartments, villas and plots across Bangalore with Naverah Assets.'
          }
        </p>
      </div>
    </section>
  );
}
