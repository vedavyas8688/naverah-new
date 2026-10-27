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
import { BlogHeroSection } from './sections/BlogHeroSection.js';
import { ArticleListingSection } from './sections/ArticleListingSection.js';
export function BlogPage() {
  const [query, setQuery] = useState(''),
    [page, setPage] = useState(1);
  const found = articles.filter((a) => a.title.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <BlogHeroSection
        query={query}
        setQuery={setQuery}
        page={page}
        setPage={setPage}
        found={found}
      />
      <ArticleListingSection
        query={query}
        setQuery={setQuery}
        page={page}
        setPage={setPage}
        found={found}
      />
    </>
  );
}
