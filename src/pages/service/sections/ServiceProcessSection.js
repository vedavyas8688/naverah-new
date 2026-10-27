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
export function ServiceProcessSection({ s }) {
  return (
    <section className="section">
      <div className="shell max-w-[950px]">
        <Heading>{'About the service'}</Heading>
        <p className="muted mt-7">
          {
            'Our team at Naverah Assets ensures a seamless property journey \u2014 from discovery and site visits to documentation and deal closure \u2014 making the entire process transparent, stress-free, and rewarding.'
          }
        </p>
        <h3 className="mt-12">{'What\u2019s part of the service'}</h3>
        <ul className="service-points">
          {s.points.map((t) => (
            <li key={t}>
              <Check size={20} />
              {t}
            </li>
          ))}
        </ul>
        <Picture src={s.image} alt={s.title} className="mt-12 service-process-image" />
      </div>
    </section>
  );
}
