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
export function ArticleHeroSection({ a }) {
  return (
    <section className="article-top">
      <div className="shell">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="eyebrow hero-enter">
            {'Real estate insights'}
            {a.date && ` / ${a.date}`}
          </p>
          <Heading tag="h1" className="hero-enter mt-7">
            {a.title}
          </Heading>
        </div>
        <Picture src={a.image} alt={a.title} className="article-hero hero-enter mt-16" eager />
      </div>
    </section>
  );
}
