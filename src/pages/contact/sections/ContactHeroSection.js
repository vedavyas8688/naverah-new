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
export function ContactHeroSection() {
  return (
    <section className="section-top dark">
      <div className="shell grid lg:grid-cols-[.8fr_1.2fr] gap-20">
        <div className="hero-enter">
          <Heading tag="h1" line>
            {'Let\u2019s work together'}
          </Heading>
          <p className="muted mt-7">
            {'Let\u2019s connect and find your perfect property together.'}
          </p>
          <div className="contact-details">
            <a href={`tel:${contact.tel}`}>
              <Phone />
              <div>
                <small>{'Call us'}</small>
                <span>{contact.phone}</span>
              </div>
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail />
              <div>
                <small>{'Email us'}</small>
                <span>{contact.email}</span>
              </div>
            </a>
            <div>
              <MapPin />
              <div>
                <small>{'Visit us'}</small>
                <span>{contact.address}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-enter">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
