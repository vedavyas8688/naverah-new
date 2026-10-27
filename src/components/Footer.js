import { contact, data, properties, services } from '../data.js';
import { Button, Heading } from './ui.js';

export function Footer() {
  const footerImage = properties[0]?.hero || properties[0]?.image || data.images.about;

  return (
    <footer className="footer dark">
      <div className="footer-visual-cta reveal">
        <img src={footerImage} alt="Premium Naverah property" loading="lazy" />
        <div className="footer-visual-overlay" />
        <div className="shell footer-visual-content">
          <Heading>
            {'Let’s work'}
            <br />
            {'together.'}
          </Heading>
          <div className="flex gap-5 flex-wrap">
            <Button light />
            <Button href="/service" outline light arrow={false}>
              {'Our services'}
            </Button>
          </div>
        </div>
      </div>

      <div className="shell">
        <div className="footer-grid">
          <div>
            <a href="/" className="brand footer-brand">
              <img src={data.images.logo} alt="Naverah Assets" />
            </a>
            <p className="muted mt-6">
              {
                'Your trusted RERA-authorised real estate channel partner. Your partner in property.'
              }
            </p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div>
            <h3>{'Explore'}</h3>
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Properties', '/properties'],
              ['Services', '/service'],
              ['Blog', '/blog'],
              ['Team', '/agent'],
            ].map(([name, url]) => (
              <a href={url} key={url}>
                {name}
              </a>
            ))}
          </div>
          <div>
            <h3>{'Our services'}</h3>
            {services.slice(0, 5).map((service) => (
              <a href={service.url} key={service.slug}>
                {service.title}
              </a>
            ))}
          </div>
          <div>
            <h3>{'Visit us'}</h3>
            <p className="muted">{contact.address}</p>
            <a href={`tel:${contact.tel}`}>{contact.phone}</a>
            <a href="/contact">{'Get directions ↗'}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            {'© '}
            {new Date().getFullYear()}
            {' Naverah Assets Private Limited. All rights reserved.'}
          </p>
          <p className="footer-credit">
            {'Designed & developed by '}
            <a href="https://hirolainfotech.com/" target="_blank" rel="noopener noreferrer">
              {'Hirola InfoTech Solutions Pvt. Ltd. ↗'}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
