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
export function PropertyNavigationSection({ p, tab, setTab, tabs }) {
  return (
    <nav className="property-tabs" aria-label="Property sections">
      <div className="shell flex overflow-x-auto gap-9">
        {tabs.map((t) => (
          <a
            href={'#' + t.toLowerCase().replace(' ', '-')}
            className={tab === t ? 'active' : ''}
            onClick={() => setTab(t)}
            key={t}
          >
            {t}
          </a>
        ))}
      </div>
    </nav>
  );
}
