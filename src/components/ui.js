import { ArrowRight } from 'lucide-react';
import { CONTACT_MODAL_EVENT } from './ContactModal.js';
import { useEffect, useRef, useState } from 'react';

export function Button({
  href = '/contact',
  children = 'Contact us',
  outline = false,
  light = false,
  arrow = true,
  modalSubject,
  modalTitle,
}) {
  const opensModal = href === '/contact' || href === '#enquire';
  return (
    <a
      className={`button ${outline ? 'secondary' : ''} ${light ? 'light' : ''}`}
      href={href}
      onClick={
        opensModal
          ? (event) => {
              event.preventDefault();
              window.dispatchEvent(
                new CustomEvent(CONTACT_MODAL_EVENT, {
                  detail: { subject: modalSubject, title: modalTitle },
                }),
              );
            }
          : undefined
      }
    >
      {children}
      {arrow && <ArrowRight size={19} />}
    </a>
  );
}
export function Picture({ src, alt = '', className = '', eager = false, defer = false }) {
  const element = useRef(null);
  const [nearby, setNearby] = useState(false);
  useEffect(() => {
    if (!defer || eager || nearby) return;
    if (!('IntersectionObserver' in window)) {
      setNearby(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearby(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' },
    );
    if (element.current) observer.observe(element.current);
    return () => observer.disconnect();
  }, [defer, eager, nearby]);
  const ready = !defer || eager || nearby;
  return (
    <div ref={element} className={`picture ${className}`}>
      <img
        src={ready ? src : undefined}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
      />
    </div>
  );
}
export function Heading({ children, tag = 'h2', line = false, className = '' }) {
  const Tag = tag;
  return (
    <Tag
      className={`${tag === 'h1' ? 'display' : 'heading'} ${line ? 'title-line' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
