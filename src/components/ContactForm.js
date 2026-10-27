import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { contact } from '../data.js';
export function ContactForm({ compact = false, subject = 'Property enquiry' }) {
  const [status, setStatus] = useState(''),
    [busy, setBusy] = useState(false),
    [draft, setDraft] = useState('');
  function submit(e) {
    e.preventDefault();
    setBusy(true);
    setStatus('');
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const body = `${subject}\n\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\n${values.message || ''}`;
    setDraft(
      `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
    setStatus('Your enquiry is ready. Open your email app below to review and send it.');
    setBusy(false);
  }
  return (
    <form onSubmit={submit} className={`contact-form ${compact ? 'compact' : ''}`}>
      <div className={compact ? '' : 'grid sm:grid-cols-2 gap-x-8'}>
        <label>
          {'Full name'}
          <input name="name" placeholder="Enter your full name" autoComplete="name" required />
        </label>
        <label>
          {'Email address'}
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
            required
          />
        </label>
        <label>
          {'Phone number'}
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            autoComplete="tel"
            pattern="[+0-9() -]{7,20}"
            required
          />
        </label>
        {!compact && (
          <label>
            {'Interested in'}
            <select name="interest">
              <option>{'Buying a property'}</option>
              <option>{'Property consultation'}</option>
              <option>{'Investment advisory'}</option>
              <option>{'Resale & leasing'}</option>
            </select>
          </label>
        )}
      </div>
      {!compact && (
        <label>
          {'How can we help?'}
          <textarea
            name="message"
            placeholder="Tell us about your requirements"
            rows={4}
            required
          />
        </label>
      )}
      <button type="submit" disabled={busy} className="button light form-submit">
        {busy ? 'Preparing…' : 'Prepare email enquiry'}
        <ArrowRight size={20} />
      </button>
      <div aria-live="polite">
        {status && <p className="mt-5 text-sm">{status}</p>}
        {draft && (
          <a className="button secondary light mt-4" href={draft}>
            {'Open email app'}
            <Mail size={18} />
          </a>
        )}
      </div>
    </form>
  );
}
