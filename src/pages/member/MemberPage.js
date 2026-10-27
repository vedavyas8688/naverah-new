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
import { MemberHeroSection } from './sections/MemberHeroSection.js';
import { BiographySection } from './sections/BiographySection.js';
import { TeamSection } from './sections/TeamSection.js';
export function MemberPage({ m }) {
  return (
    <>
      <MemberHeroSection m={m} />
      <BiographySection m={m} />
      <TeamSection m={m} />
    </>
  );
}
