import { ArrowUpRight } from 'lucide-react';
import { Button, Heading, Picture } from '../../../components/index.js';
import { data, members } from '../../../data.js';

export function AboutTeamSection() {
  const profiles = [
    ...members,
    {
      slug: 'advisory-team',
      name: 'Naverah Advisory Team',
      role: 'Property research & client success',
      image: data.images.mission,
      url: '/contact',
    },
  ];

  return (
    <section className="section about-team-grid-section">
      <div className="shell">
        <div className="section-head reveal">
          <Heading>
            Meet the team
            <br />
            behind Naverah
          </Heading>
          <Button href="/agent" outline arrow={false}>
            View all team members
          </Button>
        </div>

        <div className="about-team-layout">
          {profiles.map((member) => (
            <a href={member.url} className="team-card reveal" key={member.slug}>
              <Picture src={member.image} alt={member.name} />
              <div className="mt-7 flex gap-3 justify-between">
                <h3>{member.name}</h3>
                <ArrowUpRight className="shrink-0" />
              </div>
              <p className="muted mt-3">{member.role}</p>
            </a>
          ))}

          <div className="about-team-join dark reveal">
            <div>
              <p className="eyebrow">Grow with us</p>
              <Heading tag="h3">Want to be part of our team?</Heading>
              <p className="muted">
                Bring your ambition, market knowledge, and client-first mindset to a team building
                trusted property journeys across Bangalore.
              </p>
            </div>
            <Button href="/contact" light>
              Join us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
