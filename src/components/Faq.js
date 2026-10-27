import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { data } from '../data.js';
import { Button, Heading } from './ui.js';
export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="shell grid lg:grid-cols-[.85fr_1.15fr] gap-16">
        <div className="reveal">
          <Heading>{'Frequently asked questions'}</Heading>
          <p className="muted mt-6">{'A little clarity for your next property decision.'}</p>
          <div className="mt-8">
            <Button outline arrow={false} />
          </div>
        </div>
        <div>
          {data.faqs.map((f, i) => (
            <div className="faq-item reveal" key={f.question}>
              <button
                aria-expanded={i === open}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(i === open ? null : i)}
              >
                {f.question}
                {i === open ? <Minus /> : <Plus />}
              </button>
              <div hidden={i !== open} id={`faq-${i}`}>
                <p className="muted pb-7">{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
