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
import { PropertyHeroSection } from './sections/PropertyHeroSection.js';
import { PropertyNavigationSection } from './sections/PropertyNavigationSection.js';
import { OverviewSection } from './sections/OverviewSection.js';
import { AmenitiesSection } from './sections/AmenitiesSection.js';
import { GallerySection } from './sections/GallerySection.js';
import { PricingSection } from './sections/PricingSection.js';
import { FloorPlansSection } from './sections/FloorPlansSection.js';
import { LocationSection } from './sections/LocationSection.js';
import { EnquirySection } from './sections/EnquirySection.js';
import { RelatedPropertiesSection } from './sections/RelatedPropertiesSection.js';
export function PropertyPage({ p }) {
  const [tab, setTab] = useState('Overview');
  const tabs = [
    'Overview',
    ...(p.amenities.length ? ['Amenities'] : []),
    ...(p.gallery.length ? ['Gallery'] : []),
    ...(p.prices.length ? ['Pricing'] : []),
    ...(p.plans.length ? ['Floor plans'] : []),
    ...(p.locationBody ? ['Location'] : []),
  ];
  return (
    <>
      <PropertyHeroSection p={p} tab={tab} setTab={setTab} tabs={tabs} />
      <PropertyNavigationSection p={p} tab={tab} setTab={setTab} tabs={tabs} />
      <OverviewSection p={p} tab={tab} setTab={setTab} tabs={tabs} />
      <AmenitiesSection p={p} tab={tab} setTab={setTab} tabs={tabs} />
      <GallerySection p={p} tab={tab} setTab={setTab} tabs={tabs} />
      <PricingSection p={p} tab={tab} setTab={setTab} tabs={tabs} />
      <FloorPlansSection p={p} tab={tab} setTab={setTab} tabs={tabs} />
      <LocationSection p={p} tab={tab} setTab={setTab} tabs={tabs} />
      <EnquirySection p={p} tab={tab} setTab={setTab} tabs={tabs} />
      <RelatedPropertiesSection p={p} tab={tab} setTab={setTab} tabs={tabs} />
    </>
  );
}
