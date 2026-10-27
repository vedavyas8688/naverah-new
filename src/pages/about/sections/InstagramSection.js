import { ArrowRight, Instagram } from 'lucide-react';
import { Picture } from '../../../components/index.js';

const instagramUrl = 'https://www.instagram.com/naverahassets/';
const images = [
  '/images/properties/godrej-aveline/gallery/02.webp',
  '/images/properties/godrej-aveline/gallery/04.webp',
  '/images/properties/godrej-aveline/gallery/03.webp',
  '/images/properties/godrej-aveline/gallery/05.webp',
];

export function InstagramSection() {
  return (
    <section className="instagram-section section">
      <div className="shell instagram-layout">
        <div className="instagram-collage">
          {images.map((src, index) => (
            <a
              className={`instagram-tile instagram-tile-${index + 1} reveal`}
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Naverah Assets on Instagram"
              key={src}
            >
              <Picture src={src} alt={`Naverah Assets interior inspiration ${index + 1}`} />
              <span className="instagram-tile-overlay" aria-hidden="true">
                <Instagram size={30} strokeWidth={1.8} />
              </span>
            </a>
          ))}
        </div>

        <div className="instagram-copy reveal">
          <p className="eyebrow">Design inspiration and property updates</p>
          <h2>Follow our work on Instagram</h2>
          <p className="muted">
            Explore thoughtfully designed homes, premium properties, market insights, and the latest
            updates from Naverah Assets.
          </p>
          <a
            className="button instagram-follow"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Follow us
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
