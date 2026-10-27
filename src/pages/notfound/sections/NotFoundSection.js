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
const hero = () => properties.find((p) => p.slug === 'sobha-infinia') || properties[0];
export function NotFoundSection() {
  return (
    <section className="not-found dark">
      <div className="shell grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="error-number hero-enter">{'404'}</p>
          <Heading tag="h1" className="hero-enter">
            {'Page not found'}
          </Heading>
          <p className="muted my-8 hero-enter">
            {
              'The page you\u2019re looking for may have moved. Let\u2019s help you find your way home.'
            }
          </p>
          <Button href="/" light>
            {'Go back home'}
          </Button>
        </div>
        <Picture src={hero().image} alt="Find your next home with Naverah" className="hero-enter" />
      </div>
    </section>
  );
}
