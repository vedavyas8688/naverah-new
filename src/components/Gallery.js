import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Eye, Plus, X } from 'lucide-react';
import { Picture } from './ui.js';
const GalleryThumbnails = /* @__PURE__ */ memo(function GalleryThumbnails({
  images,
  title,
  imageActions,
  onOpen,
}) {
  return (
    <div className="gallery-grid">
      {images.map((src, i) => {
        const openImage = (element) => onOpen(i, element);

        if (imageActions) {
          return (
            <div className="floor-plan-gallery-item reveal" key={src + i}>
              <button
                type="button"
                onClick={(event) => openImage(event.currentTarget)}
                aria-label={`View ${title} image ${i + 1}`}
              >
                <Picture src={src} alt={`${title} ${i + 1}`} defer />
              </button>
              <div className="floor-plan-image-actions">
                <button
                  type="button"
                  onClick={(event) => openImage(event.currentTarget)}
                  aria-label={`View ${title} image ${i + 1}`}
                  title="View floor plan"
                >
                  <Eye size={19} />
                </button>
                <a
                  href={src}
                  download
                  aria-label={`Download ${title} image ${i + 1}`}
                  title="Download floor plan"
                >
                  <Download size={19} />
                </a>
              </div>
            </div>
          );
        }

        return (
          <button
            onClick={(event) => openImage(event.currentTarget)}
            aria-label={`View ${title} image ${i + 1}`}
            className="reveal"
            key={src + i}
          >
            <Picture src={src} alt={`${title} ${i + 1}`} defer />
            <span>
              <Plus />
            </span>
          </button>
        );
      })}
    </div>
  );
});

export function Gallery({ images, title = 'Property gallery', imageActions = false }) {
  const [active, setActive] = useState(null);
  const close = useRef(null),
    last = useRef(null);
  const openImage = useCallback((index, element) => {
    last.current = element;
    setActive(index);
  }, []);
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
      <GalleryThumbnails
        images={images}
        title={title}
        imageActions={imageActions}
        onOpen={openImage}
      />
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
