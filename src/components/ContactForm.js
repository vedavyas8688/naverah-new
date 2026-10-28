import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactForm({
  compact = false,
  subject = 'Property enquiry',
  formName = 'Website enquiry form',
  onSuccess,
}) {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setStatus('');
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, subject, formName }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Unable to send your enquiry.');

      form.reset();
      setStatus('Thank you. Your enquiry has been sent successfully.');
      onSuccess?.();
    } catch (error) {
      setStatus(error.message || 'Unable to send your enquiry. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className={`contact-form ${compact ? 'compact' : ''}`}>
      <div className={compact ? '' : 'grid sm:grid-cols-2 gap-x-8'}>
        <label>
          {'Full name *'}
          <input name="name" placeholder="Enter your full name" autoComplete="name" required />
        </label>
        <label>
          {'Email address (optional)'}
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
          />
        </label>
        <label>
          {'Phone number *'}
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
            {'Interested in (optional)'}
            <select name="interest">
              <option value="">{'Select an option (optional)'}</option>
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
          {'How can we help? (optional)'}
          <textarea name="message" placeholder="Tell us about your requirements" rows={4} />
        </label>
      )}
      <button type="submit" disabled={busy} className="button light form-submit">
        {busy ? 'Sending…' : 'Send enquiry'}
        <ArrowRight size={20} />
      </button>
      <div aria-live="polite">{status && <p className="mt-5 text-sm">{status}</p>}</div>
    </form>
  );
}
