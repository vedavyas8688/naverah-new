import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm.js';

export const CONTACT_MODAL_EVENT = 'open-contact-modal';

export function ContactModal() {
  const [modal, setModal] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const open = (event) =>
      setModal({
        subject: event.detail?.subject || 'Property enquiry',
        title: event.detail?.title || 'Tell us what you are looking for',
        onSuccess: event.detail?.onSuccess,
      });
    window.addEventListener(CONTACT_MODAL_EVENT, open);
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, open);
  }, []);

  useEffect(() => {
    if (!modal) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => event.key === 'Escape' && setModal(null);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [modal]);

  if (!modal) return null;

  return (
    <div className="contact-modal" role="presentation" onMouseDown={() => setModal(null)}>
      <div
        className="contact-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        tabIndex={-1}
        ref={panelRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="contact-modal-close" type="button" onClick={() => setModal(null)}>
          <X size={22} />
          <span className="sr-only">Close enquiry form</span>
        </button>
        <p className="eyebrow">Naverah Assets</p>
        <h2 id="contact-modal-title" className="heading">
          {modal.title}
        </h2>
        <p className="contact-modal-copy">
          Share your details and we will prepare your enquiry for our property team.
        </p>
        <ContactForm
          compact
          subject={modal.subject}
          onSuccess={() => {
            modal.onSuccess?.();
            if (modal.onSuccess) setModal(null);
          }}
        />
      </div>
    </div>
  );
}
