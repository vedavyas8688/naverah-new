import { ArrowUpRight } from 'lucide-react';
import { contact, data } from '../data.js';
import { Heading, Picture } from './ui.js';
export function Office() {
  return (
    <section className="section office-section">
      <div className="shell split-story">
        <Picture src={data.images.about} alt="Naverah Assets, Bangalore" className="reveal" />
        <div className="reveal">
          <Heading>{'Visit us in Bangalore'}</Heading>
          <h3 className="mt-8">{'Sahakarnagar'}</h3>
          <p className="muted mt-5">{contact.address}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex gap-2 border-b pb-2 mt-7"
          >
            {'Get directions'}
            <ArrowUpRight size={20} />
          </a>
          <p className="muted mt-8">{'Email address'}</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
    </section>
  );
}
