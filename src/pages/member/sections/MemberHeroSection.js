import { ArrowUpRight } from 'lucide-react';
import { contact } from '../../../data.js';
import { Button, Heading, Picture } from '../../../components/index.js';
export function MemberHeroSection({ m }) {
  const nameParts = m.name.trim().split(/\s+/);
  const surname = nameParts.pop();
  const givenNames = nameParts.join(' ');

  return (
    <section className="section-top dark">
      <div className="shell grid md:grid-cols-[1.3fr_1fr] gap-20">
        <Picture src={m.image} alt={m.name} className="member-portrait hero-enter" eager />
        <div className="hero-enter">
          <p className="eyebrow mb-6">{m.role}</p>
          <Heading tag="h1" className="member-name">
            <span>{givenNames}</span>
            <span>{surname}</span>
          </Heading>
          {m.bio[0] && <p className="muted mt-7">{m.bio[0]}</p>}
          <div className="mt-16">
            <p className="muted">{'Email address'}</p>
            <a
              className="inline-flex gap-3 mt-3 items-center break-all"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
              <ArrowUpRight className="shrink-0" />
            </a>
          </div>
          <div className="mt-8">
            <Button light />
          </div>
        </div>
      </div>
    </section>
  );
}
