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
export function AmenitiesSection({ p }) {
  return (
    p.amenities.length > 0 && (
      <section id="amenities" className="section soft">
        <div className="shell">
          <Heading>{'Amenities & facilities'}</Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {p.amenities.map((amenity, index) => (
              <div key={`${amenity.title}-${index}`}>
                <Picture
                  src={amenity.image}
                  alt={amenity.title || `Amenity ${index + 1}`}
                  className="amenity-picture"
                />
                {amenity.title && <p className="mt-4">{amenity.title}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}
