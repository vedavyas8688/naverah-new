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
export function LocationSection({ p, tab, setTab, tabs }) {
  return (
    p.locationBody && (
      <section id="location" className="section soft">
        <div
          className="shell richtext"
          dangerouslySetInnerHTML={{
            __html: p.locationBody,
          }}
        />
      </section>
    )
  );
}
