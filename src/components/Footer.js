import { Facebook, Instagram, Linkedin, Pin, Twitter, Youtube } from 'lucide-react';
import { contact, data, services } from '../data.js';
import { Button, Heading } from './ui.js';

const socialLinks = [
  ['Facebook', 'https://www.facebook.com/naverahassets/', Facebook],
  ['Instagram', 'https://www.instagram.com/naverahassets/', Instagram],
  ['LinkedIn', 'https://www.linkedin.com/company/naverah-assets/', Linkedin],
  ['YouTube', 'https://www.youtube.com/@NaverahAssets', Youtube],
  ['X', 'https://x.com/naverahassets', Twitter],
  ['Pinterest', 'https://in.pinterest.com/naverahassets/', Pin],
];

const footerArticles = [
  ['Real Estate Agents in Bangalore', '/real-estate-agents-in-bangalore-naverah-assets'],
  ['Real Estate Brokers in Bangalore', '/real-estate-brokers-in-bangalore-naverah-assets'],
  ['Property Dealers in Bangalore', '/property-dealers-in-bangalore-naverah-assets'],
  ['Property Consultants in Bangalore', '/property-consultants-in-bangalore-naverah-assets'],
  ['Real Estate Consultants in Bangalore', '/real-estate-consultants-in-bangalore-naverah-assets'],
  ['Property Advisors in Bangalore', '/property-advisors-in-bangalore-naverah-assets'],
  [
    'Real Estate Channel Partners in Bangalore',
    '/real-estate-channel-partners-in-bangalore-naverah-assets',
  ],
  [
    'Commercial Property Agents in Bangalore',
    '/commercial-property-agents-in-bangalore-naverah-assets',
  ],
  [
    'Trusted Real Estate Agents in Bangalore',
    '/trusted-real-estate-agents-in-bangalore-naverah-assets',
  ],
  [
    'Commercial Real Estate Consultants',
    '/commercial-real-estate-consultants-in-bangalore-naverah-assets',
  ],
  ['Real Estate Services in Bangalore', '/real-estate-services-in-bangalore'],
  ['Best Property Dealers in Bangalore', '/best-property-dealers-in-bangalore'],
  ['Real Estate Investment in Bangalore', '/real-estate-investment-in-bangalore-guide'],
  ['Property Advisory Services in Bangalore', '/property-advisory-services-in-bangalore'],
  ['Top Real Estate Consultants in Bangalore', '/top-real-estate-consultants-in-bangalore'],
];

export function Footer() {
  const footerImage = '/images/services/services-page/premium-interior-banner.webp';

  return (
    <footer className="footer dark">
      <div className="footer-visual-cta reveal">
        <img src={footerImage} alt="Premium Naverah property" loading="lazy" />
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
            <div className="footer-socials" aria-label="Naverah Assets social media">
              {socialLinks.map(([name, url, Icon]) => {
                return (
                  <a
                    href={url}
                    key={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                  >
                    <Icon aria-hidden="true" strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
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
      </div>

      <nav className="footer-articles" aria-label="Popular real estate articles">
        <div className="shell footer-articles-grid">
          {footerArticles.map(([title, url]) => (
            <a href={url} key={url}>
              {title}
            </a>
          ))}
        </div>
      </nav>

      <div className="shell">
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
