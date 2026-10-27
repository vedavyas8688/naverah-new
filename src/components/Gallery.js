import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { Picture } from './ui.js';
export function Gallery({ images, title = 'Property gallery' }) {
  const [active, setActive] = useState(null);
  const close = useRef(null),
    last = useRef(null);
  useEffect(() => {
    if (active === null) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    close.current?.focus();
    const key = (e) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((n) => (n === null ? null : (n + 1) % images.length));
      if (e.key === 'ArrowLeft')
        setActive((n) => (n === null ? null : (n - 1 + images.length) % images.length));
      if (e.key === 'Tab') {
        e.preventDefault();
        const b = Array.from(document.querySelectorAll('.lightbox button'));
        const i = b.indexOf(document.activeElement);
        b[(i + (e.shiftKey ? -1 : 1) + b.length) % b.length]?.focus();
      }
    };
    document.addEventListener('keydown', key);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener('keydown', key);
      last.current?.focus();
    };
  }, [active === null, images.length]);
  return (
    <>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <button
            onClick={(e) => {
              last.current = e.currentTarget;
              setActive(i);
            }}
            aria-label={`View ${title} image ${i + 1}`}
            className="reveal"
            key={src + i}
          >
            <Picture src={src} alt={`${title} ${i + 1}`} />
            <span>
              <Plus />
            </span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setActive(null)}
        >
          <button
            ref={close}
            className="close"
            aria-label="Close gallery"
            onClick={() => setActive(null)}
          >
            <X />
          </button>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active - 1 + images.length) % images.length);
            }}
          >
            <ChevronLeft />
          </button>
          <img
            src={images[active]}
            alt={`${title} ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + 1) % images.length);
            }}
          >
            <ChevronRight />
          </button>
          <p className="lightbox-counter">
            {active + 1}
            {' / '}
            {images.length}
          </p>
        </div>
      )}
    </>
  );
}
