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
import { articles, contact, data, properties, services } from '../../data.js';
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
} from '../../components/index.js';
import { ServiceHeroSection } from './sections/ServiceHeroSection.js';
import { ServiceProcessSection } from './sections/ServiceProcessSection.js';
import { CallToActionSection } from './sections/CallToActionSection.js';
export function ServicePage({ s }) {
  return (
    <>
      <ServiceHeroSection s={s} />
      <ServiceProcessSection s={s} />
      <CallToActionSection s={s} />
    </>
  );
}
