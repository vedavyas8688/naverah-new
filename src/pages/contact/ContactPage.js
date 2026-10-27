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
import { ContactHeroSection } from './sections/ContactHeroSection.js';
import { OfficeSection } from './sections/OfficeSection.js';
import { FaqSection } from './sections/FaqSection.js';
export function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <OfficeSection />
      <FaqSection />
    </>
  );
}
