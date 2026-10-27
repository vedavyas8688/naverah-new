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
export function PropertyTypesSection() {
  return (
    <section className="section dark services-property-types">
      <div className="shell">
        <Heading className="reveal">{'A home for every aspiration'}</Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {data.propertyTypes.map((t) => (
            <a
              href={`/properties?type=${encodeURIComponent(t.title)}`}
              className="border-t pt-8 reveal"
              key={t.title}
            >
              <Building2 size={38} strokeWidth={1} />
              <h3 className="mt-6">{t.title}</h3>
              <p className="muted mt-4">{t.description.replace(t.title, '').trim()}</p>
              <ArrowUpRight className="mt-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
