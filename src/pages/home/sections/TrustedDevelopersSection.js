const trustedDevelopers = [
  ['Brigade Group', 'brigade-group.webp'],
  ['Godrej Properties', 'godrej-properties.webp'],
  ['Lodha', 'lodha.png'],
  ['Sobha', 'sobha.webp'],
  ['Century', 'century.webp'],
  ['Assetz', 'assetz.webp'],
];

export function TrustedDevelopersSection() {
  return (
    <section className="trusted-developers" aria-label="Trusted developer partners">
      <div className="shell trusted-developers-row reveal">
        <p>{'Trusted by'}</p>
        <div className="trusted-developers-logos">
          {trustedDevelopers.map(([name, fileName]) => (
            <div className="trusted-developer-logo" key={name} title={name}>
              <img src={`/images/partners/${fileName}`} alt={`${name} logo`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
