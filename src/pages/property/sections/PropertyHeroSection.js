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
export function PropertyHeroSection({ p, tab, setTab, tabs }) {
  return (
    <section className="property-hero dark">
      <div className="hero-visual">
        <img src={p.hero || p.image} alt={p.title} fetchPriority="high" />
      </div>
      <div className="shell relative z-10">
        <p className="hero-enter mb-7 flex gap-2 items-center">
          <MapPin size={18} />
          {p.location}
        </p>
        <Heading tag="h1" line className="hero-enter max-w-[1050px]">
          {p.title}
        </Heading>
        <div className="hero-enter mt-9">
          <Button href="#enquire" light>
            {'Enquire about this property'}
          </Button>
        </div>
        <div className="hero-facts hero-enter">
          {[
            ['Type', p.type],
            ['Starting price', p.price],
            ['Status', p.status],
          ]
            .filter((x) => x[1])
            .map(([k, v]) => (
              <div key={k}>
                <small>{k}</small>
                <p>{v}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
