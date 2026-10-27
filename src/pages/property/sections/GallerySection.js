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
export function GallerySection({ p, tab, setTab, tabs }) {
  return (
    p.gallery.length > 0 && (
      <section id="gallery" className="section">
        <div className="shell">
          <Heading className="mb-12">{'Property gallery'}</Heading>
          <Gallery images={p.gallery} title={p.title} />
        </div>
      </section>
    )
  );
}
