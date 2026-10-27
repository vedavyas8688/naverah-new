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
export function RelatedArticlesSection({ a }) {
  return (
    <section className="section">
      <div className="shell">
        <Heading className="mb-12">{'Related articles'}</Heading>
        <div className="grid md:grid-cols-3 gap-10">
          {articles
            .filter((q) => q.slug !== a.slug)
            .slice(0, 3)
            .map((q) => (
              <BlogCard a={q} key={q.slug} />
            ))}
        </div>
      </div>
    </section>
  );
}
