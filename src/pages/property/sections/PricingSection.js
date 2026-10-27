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
export function PricingSection({ p, tab, setTab, tabs }) {
  return (
    p.prices.length > 0 && (
      <section id="pricing" className="section soft">
        <div className="shell">
          <Heading>{'Pricing & configurations'}</Heading>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {p.prices.map((v, i) => (
              <div className="pricing-card" key={i}>
                <p>{v.type}</p>
                <h3 className="mt-6">{v.price}</h3>
                <p className="muted mt-4">{v.area}</p>
                <div className="mt-8">
                  <Button href="#enquire" outline>
                    {'Enquire now'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="muted text-sm mt-6">
            {
              'Prices are as listed in the supplied property information. Contact us for current availability and final pricing.'
            }
          </p>
        </div>
      </section>
    )
  );
}
