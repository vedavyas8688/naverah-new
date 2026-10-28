import { ArrowUpRight } from 'lucide-react';
import { properties } from '../../../data.js';

const showcaseProperties = properties.slice(0, 12);

export function PropertyMarqueeSection() {
  const scrollingProperties = [...showcaseProperties, ...showcaseProperties];

  return (
    <section className="property-marquee-section" aria-labelledby="property-marquee-title">
      <div className="shell property-marquee-heading reveal">
        <div>
          <span className="eyebrow">CURATED PROPERTIES</span>
          <h2 id="property-marquee-title">Explore spaces made for modern living</h2>
        </div>
        <p>
          Discover selected residences across Bangalore, from refined apartments to thoughtfully
          planned communities.
        </p>
      </div>

      <div className="property-marquee-viewport">
        <div className="property-marquee-track">
          {scrollingProperties.map((property, index) => (
            <a
              className="property-marquee-card"
              href={`/${property.slug}`}
              key={`${property.slug}-${index}`}
              aria-hidden={index >= showcaseProperties.length}
              tabIndex={index >= showcaseProperties.length ? -1 : undefined}
            >
              <img
                src={property.image}
                alt={index < showcaseProperties.length ? property.title : ''}
                loading="lazy"
              />
              <span className="property-marquee-shade" aria-hidden="true" />
              <span className="property-marquee-content">
                <small>{property.location}</small>
                <strong>{property.title}</strong>
                <span>
                  {property.price} <ArrowUpRight size={18} strokeWidth={1.6} />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="property-marquee-action reveal">
        <a className="property-marquee-button" href="/properties">
          Explore all properties <ArrowUpRight size={18} strokeWidth={1.6} />
        </a>
      </div>
    </section>
  );
}
