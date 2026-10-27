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
export function AuthorSection({ a }) {
  return (
    <div className="shell">
      <div className="author-strip">
        <img src={data.images.logo} alt="Naverah Assets" />
        <div>
          <h3>{'Naverah Assets'}</h3>
          <p className="muted">{'Your trusted real estate channel partner in Bangalore.'}</p>
        </div>
        <Button href="/about" outline arrow={false}>
          {'About us'}
        </Button>
      </div>
    </div>
  );
}
