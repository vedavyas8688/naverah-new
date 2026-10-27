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
import { PropertiesHeroSection } from './sections/PropertiesHeroSection.js';
import { PropertyListingSection } from './sections/PropertyListingSection.js';
function crore(p) {
  const v = Number((p.price || '').replace(/,/g, '').match(/[0-9.]+/)?.[0]);
  return /\bL\b|lakh/i.test(p.price || '') ? v / 100 : v || Infinity;
}
export function PropertiesPage() {
  const [query, setQuery] = useState(''),
    [type, setType] = useState(new URLSearchParams(location.search).get('type') || 'All'),
    [budget, setBudget] = useState('All'),
    [bed, setBed] = useState('All'),
    [page, setPage] = useState(1);
  const found = properties.filter(
    (p) =>
      (type === 'All' || p.type === type) &&
      `${p.title} ${p.location}`.toLowerCase().includes(query.toLowerCase()) &&
      (budget === 'All' || crore(p) <= Number(budget)) &&
      (bed === 'All' || p.bhk?.startsWith(bed)),
  );
  return (
    <>
      <PropertiesHeroSection
        query={query}
        setQuery={setQuery}
        type={type}
        setType={setType}
        budget={budget}
        setBudget={setBudget}
        bed={bed}
        setBed={setBed}
        page={page}
        setPage={setPage}
        found={found}
      />
      <PropertyListingSection
        query={query}
        setQuery={setQuery}
        type={type}
        setType={setType}
        budget={budget}
        setBudget={setBudget}
        bed={bed}
        setBed={setBed}
        page={page}
        setPage={setPage}
        found={found}
      />
    </>
  );
}
