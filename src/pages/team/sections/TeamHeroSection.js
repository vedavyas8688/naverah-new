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
export function TeamHeroSection() {
  return (
    <section className="section-top">
      <div className="shell">
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-16 items-center hero-enter">
          <Heading tag="h1" line>
            {'Meet the team behind our work'}
          </Heading>
          <p className="muted text-xl">
            {'Meet our leadership \u2014 your trusted real estate partner.'}
          </p>
        </div>
        <div className="mt-20">
          <TeamGrid />
        </div>
      </div>
    </section>
  );
}
