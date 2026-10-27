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
export function ValuesSection() {
  return (
    <section id="our-values" className="section soft">
      <div className="shell">
        <Heading className="max-w-2xl reveal">{'The values that drive everything we do'}</Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {[
            [
              ShieldCheck,
              'Trust',
              'We prioritize transparency and build relationships on a foundation of honesty.',
            ],
            [
              HeartHandshake,
              'Respect',
              'We uphold the highest ethical standards in all our dealings, treating everyone with dignity and valuing diverse perspectives.',
            ],
            [
              Users,
              'Understanding',
              'We listen actively, personalize our approach, and place our clientsâ€™ needs at the center of everything we do.',
            ],
            [
              Lightbulb,
              'Excellence',
              'We leverage deep market insights and continuous learning to serve our clients better.',
            ],
          ].map(([Icon, t, d]) => (
            <div className="border-t pt-8 reveal" key={t}>
              <Icon size={50} strokeWidth={1} />
              <h3 className="mt-8">{t}</h3>
              <p className="muted mt-5">{d}</p>
            </div>
          ))}
        </div>
        <div className="meaning reveal">
          <h3>{'The meaning behind \u201CNaverah\u201D'}</h3>
          <p className="muted">{data.about[2]?.replace(/^The Meaning Behind â€œNaverahâ€ /, '')}</p>
        </div>
      </div>
    </section>
  );
}
