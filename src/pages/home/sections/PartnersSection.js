import { ArrowUpRight } from 'lucide-react';

const partners = [
  ['L&T Realty', 'l-and-t-realty.webp'],
  ['Brigade Group', 'brigade-group.webp'],
  ['TVS Emerald', 'tvs-emerald.webp'],
  ['Lodha', 'lodha.png'],
  ['Assetz', 'assetz.webp'],
  ['Century', 'century.webp'],
  ['Godrej Properties', 'godrej-properties.webp'],
  ['Prestige Group', 'prestige-group.webp'],
  ['Puravankara', 'puravankara.webp'],
  ['Sobha', 'sobha.webp'],
  ['Total Environment', 'total-environment.webp'],
  ['Adarsh Developers', 'adarsh-developers.webp'],
  ['RG Unique Structures', 'rg-unique-structures.png'],
  ['Surya', 'surya.png'],
  ['Sumadhura', 'sumadhura.png'],
  ['Alliance Group', 'alliance-group.png'],
];

function PartnerTrack({ items, reverse = false }) {
  const repeated = [...items, ...items];

  return (
    <div className={`partners-marquee ${reverse ? 'reverse' : ''}`}>
      <div className="partners-track">
        {repeated.map(([name, fileName], index) => (
          <div
            className="partner-logo-card"
            key={`${name}-${index}`}
            aria-hidden={index >= items.length}
          >
            <img
              src={`/images/partners/${fileName}`}
              alt={index < items.length ? `${name} logo` : ''}
              loading="lazy"
            />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="shell">
        <div className="partners-intro reveal">
          <div>
            <p className="eyebrow">{'Developer network'}</p>
            <h2>
              {'Built on trusted '}
              <span>{'partnerships.'}</span>
            </h2>
          </div>
          <div className="partners-note">
            <p>
              {
                'Connecting discerning buyers with respected developers and thoughtfully selected projects across Bangalore.'
              }
            </p>
            <a href="/properties">
              {'Explore properties'}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="partners-stream reveal">
          <PartnerTrack items={partners.slice(0, 8)} />
          <PartnerTrack items={partners.slice(8)} reverse />
        </div>
      </div>
    </section>
  );
}
