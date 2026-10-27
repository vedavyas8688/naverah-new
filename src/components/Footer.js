import { contact, data, services } from '../data.js';
import { Button, Heading } from './ui.js';
export function Footer() {
  return (
    <footer className="footer dark">
      <div className="shell">
        <div className="footer-top reveal">
          <Heading>
            {'Let\u2019s find your'}
            <br />
            {'perfect property.'}
          </Heading>
          <div className="flex gap-5 flex-wrap">
            <Button light />
            <Button href="/service" outline light arrow={false}>
              {'Our services'}
            </Button>
          </div>
        </div>
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
            ].map(([n, u]) => (
              <a href={u} key={u}>
                {n}
              </a>
            ))}
          </div>
          <div>
            <h3>{'Our services'}</h3>
            {services.slice(0, 5).map((s) => (
              <a href={s.url} key={s.slug}>
                {s.title}
              </a>
            ))}
          </div>
          <div>
            <h3>{'Visit us'}</h3>
            <p className="muted">{contact.address}</p>
            <a href={`tel:${contact.tel}`}>{contact.phone}</a>
            <a href="/contact">{'Get directions \u2197'}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            {'\u00A9 '}
            {new Date().getFullYear()}
            {' Naverah Assets Private Limited. All rights reserved.'}
          </p>
          <p className="footer-credit">
            {'Designed & developed by '}
            <a href="https://hirolainfotech.com/" target="_blank" rel="noopener noreferrer">
              {'Hirola InfoTech Solutions Pvt. Ltd. \u2197'}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
