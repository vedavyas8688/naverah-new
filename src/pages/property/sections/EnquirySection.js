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
export function EnquirySection({ p, tab, setTab, tabs }) {
  return (
    <section id="enquire" className="section dark">
      <div className="shell grid lg:grid-cols-2 gap-20">
        <div>
          <Heading>{'Make your next move.'}</Heading>
          <p className="muted mt-7">
            {'Speak to our team about '}
            {p.title}
            {'.'}
          </p>
          <a href={`tel:${contact.tel}`} className="inline-flex gap-3 mt-9">
            <Phone size={20} />
            {contact.phone}
          </a>
        </div>
        <ContactForm subject={`Enquiry: ${p.title}`} formName="Property enquiry form" />
      </div>
    </section>
  );
}
