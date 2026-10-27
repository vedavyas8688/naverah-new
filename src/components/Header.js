import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { contact, data } from '../data.js';
import { Button } from './ui.js';
export function Header({ dark }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const key = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, []);
  const links = [
    ['Home', '/'],
    ['About', '/about'],
    ['Properties', '/properties'],
    ['Services', '/service'],
    ['Our team', '/agent'],
    ['Blog', '/blog'],
    ['Contact us', '/contact'],
  ];
  return (
    <header className={`site-header ${dark ? 'dark' : ''}`}>
      <div className="shell header-row">
        <a className="brand" href="/" aria-label="Naverah Assets home">
          <img src={data.images.logo} alt="Naverah Assets" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, url]) => (
            <a href={url} key={url}>
              {name}
            </a>
          ))}
        </nav>
        <a className="header-phone" href={`tel:${contact.tel}`}>
          <Phone size={17} />
          <span>{contact.phone}</span>
        </a>
        <div className="header-cta">
          <Button light={dark}>{'Get in touch'}</Button>
        </div>
        <button
          className="mobile-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([name, url]) => (
            <a href={url} key={url}>
              {name}
              <ArrowUpRight />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
