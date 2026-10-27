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
export function RelatedPropertiesSection({ p, tab, setTab, tabs }) {
  return (
    <section className="section">
      <div className="shell">
        <Heading className="mb-12">{'More properties to explore'}</Heading>
        <div className="grid md:grid-cols-2 gap-10">
          {properties
            .filter((q) => q.slug !== p.slug)
            .slice(0, 2)
            .map((q) => (
              <PropertyCard p={q} key={q.slug} />
            ))}
        </div>
      </div>
    </section>
  );
}
