import { ArrowUpRight } from 'lucide-react';
import { contact } from '../data.js';
import { Button, Heading } from './ui.js';
export function CTA() {
  return (
    <section className="cta dark">
      <div className="shell grid lg:grid-cols-[1.25fr_1fr] gap-16 items-center">
        <div className="reveal">
          <Heading>
            {'Let\u2019s find a place'}
            <br />
            {'to call your own.'}
          </Heading>
          <div className="flex flex-wrap gap-5 mt-8">
            <Button light />
            <Button href="/properties" light outline arrow={false}>
              {'Explore properties'}
            </Button>
          </div>
        </div>
        <div className="reveal">
          <p className="muted text-xl">
            {
              'Begin your search for the perfect property \u2014 connect with our real estate experts today.'
            }
          </p>
          <a className="inline-flex gap-4 mt-8 text-xl" href={`mailto:${contact.email}`}>
            {contact.email}
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
