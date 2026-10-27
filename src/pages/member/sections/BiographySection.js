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
export function BiographySection({ m }) {
  return (
    m.bio.length > 0 && (
      <section className="section">
        <div className="shell max-w-[950px]">
          <Heading>
            {'About '}
            {m.name.split(' ')[0]}
          </Heading>
          {m.bio.map((p, i) => (
            <p className="muted mt-8 text-xl" key={i}>
              {p}
            </p>
          ))}
        </div>
      </section>
    )
  );
}
