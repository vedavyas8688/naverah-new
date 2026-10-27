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
export function OverviewSection({ p, tab, setTab, tabs }) {
  return (
    <section id="overview" className="section">
      <div className="shell grid lg:grid-cols-[1.5fr_.8fr] gap-20">
        <div
          className="richtext"
          dangerouslySetInnerHTML={{
            __html: p.about,
          }}
        />
        <aside className="property-summary">
          <p className="eyebrow">{'Property at a glance'}</p>
          <h3 className="mt-5">{p.title}</h3>
          {[
            ['Configuration', p.bhk],
            ['Area', p.area],
            ['Units', p.units],
          ]
            .filter((x) => x[1])
            .map(([k, v]) => (
              <div className="flex justify-between gap-4 border-b py-5" key={k}>
                <span className="muted">{k}</span>
                <span>{v}</span>
              </div>
            ))}
          <div className="mt-8">
            <Button href="#enquire">{'Schedule a visit'}</Button>
          </div>
        </aside>
      </div>
    </section>
  );
}
