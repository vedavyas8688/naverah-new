const trustedDevelopers = [
  ['Brigade Group', 'brigade-group.webp'],
  ['Godrej Properties', 'godrej-properties.webp'],
  ['Lodha', 'lodha.png'],
  ['Sobha', 'sobha.webp'],
  ['Century', 'century.webp'],
  ['Assetz', 'assetz.webp'],
  ['Prestige Group', 'prestige-group.webp'],
  ['Puravankara', 'puravankara.webp'],
  ['Total Environment', 'total-environment.webp'],
  ['Adarsh Developers', 'adarsh-developers.webp'],
  ['L&T Realty', 'l-and-t-realty.webp'],
  ['TVS Emerald', 'tvs-emerald.webp'],
  ['RG Unique Structures', 'rg-unique-structures.png'],
  ['Surya', 'surya.png'],
  ['Sumadhura', 'sumadhura.png'],
  ['Alliance Group', 'alliance-group.png'],
];

export function TrustedDevelopersSection() {
  const scrollingLogos = [...trustedDevelopers, ...trustedDevelopers];

  return (
    <section className="trusted-developers" aria-label="Developer partners">
      <div className="trusted-developers-marquee reveal">
        <div className="trusted-developers-track">
          {scrollingLogos.map(([name, fileName], index) => (
            <div
              className="trusted-developer-logo"
              key={`${name}-${index}`}
              title={name}
              aria-hidden={index >= trustedDevelopers.length}
            >
              <img
                src={`/images/partners/${fileName}`}
                alt={index < trustedDevelopers.length ? `${name} logo` : ''}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
