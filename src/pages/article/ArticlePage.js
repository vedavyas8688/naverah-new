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
import { ArticleHeroSection } from './sections/ArticleHeroSection.js';
import { ArticleBodySection } from './sections/ArticleBodySection.js';
import { AuthorSection } from './sections/AuthorSection.js';
import { RelatedArticlesSection } from './sections/RelatedArticlesSection.js';
export function ArticlePage({ a }) {
  return (
    <>
      <ArticleHeroSection a={a} />
      <ArticleBodySection a={a} />
      <AuthorSection a={a} />
      <RelatedArticlesSection a={a} />
    </>
  );
}
