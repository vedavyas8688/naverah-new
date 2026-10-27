import { ArrowRight } from 'lucide-react';
export function Button({
  href = '/contact',
  children = 'Contact us',
  outline = false,
  light = false,
  arrow = true,
}) {
  return (
    <a className={`button ${outline ? 'secondary' : ''} ${light ? 'light' : ''}`} href={href}>
      {children}
      {arrow && <ArrowRight size={19} />}
    </a>
  );
}
export function Picture({ src, alt = '', className = '', eager = false }) {
  return (
    <div className={`picture ${className}`}>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
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
