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
export function ServiceHeroSection({ s }) {
  return (
    <section className="section-top dark">
      <div className="shell service-detail-grid">
        <div>
          <Building2 className="hero-enter mb-8" size={55} strokeWidth={1} />
          <Heading tag="h1" className="hero-enter">
            {s.title}
          </Heading>
          <p className="muted text-xl mt-7 hero-enter">
            {s.points[0]}
            {'. '}
            {s.points[1]}
            {'.'}
          </p>
          <Picture
            src={s.image}
            alt={s.title}
            className="mt-12 hero-enter service-hero-image"
            eager
          />
        </div>
        <aside className="hero-enter pt-24">
          <h2 className="text-[28px]">{'Fill the form to receive a call'}</h2>
          <p className="muted mt-4">
            {'Tell us what you\u2019re looking for. Our team will help you take the next step.'}
          </p>
          <ContactForm compact subject={s.title} formName="Service enquiry form" />
        </aside>
      </div>
    </section>
  );
}
