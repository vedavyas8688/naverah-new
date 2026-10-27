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
export function FloorPlansSection({ p, tab, setTab, tabs }) {
  return (
    p.plans.length > 0 && (
      <section id="floor-plans" className="section">
        <div className="shell">
          <div className="section-head">
            <Heading>{'Thoughtfully planned spaces'}</Heading>
            {p.brochures
              .filter((b) => b.url)
              .map((b) => (
                <Button href={b.url} outline key={b.url}>
                  {b.label}
                </Button>
              ))}
          </div>
          <div className="floor-plans">
            <Gallery images={p.plans} title={`${p.title} floor plan`} />
          </div>
        </div>
      </section>
    )
  );
}
