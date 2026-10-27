import { BadgeCheck, CircleCheckBig, Flag, Lightbulb, UsersRound } from 'lucide-react';

const values = [
  {
    title: 'Quality',
    description:
      'Carefully selected opportunities, dependable information, and detail-led service.',
    Icon: BadgeCheck,
    className: 'about-value-quality',
  },
  {
    title: 'Commitment',
    description:
      'Consistent support and accountability throughout every stage of the property journey.',
    Icon: CircleCheckBig,
    className: 'about-value-commitment',
  },
  {
    title: 'Teamwork',
    description:
      'Collaborative relationships with clients, developers, and partners built on mutual trust.',
    Icon: UsersRound,
    className: 'about-value-teamwork',
  },
  {
    title: 'Innovation',
    description:
      'Modern market insight and smarter methods that simplify complex property decisions.',
    Icon: Lightbulb,
    className: 'about-value-innovation',
  },
  {
    title: 'Leadership',
    description: 'Clear, ethical guidance that helps clients move forward with lasting confidence.',
    Icon: Flag,
    className: 'about-value-leadership',
  },
];

export function ValuesSection() {
  return (
    <section id="our-values" className="section about-values-section">
      <div className="shell about-values-layout">
        <header className="about-values-intro reveal">
          <p className="about-values-eyebrow">Our values</p>
          <h2>The values that drive our work</h2>
        </header>

        {values.map(({ title, description, Icon, className }) => (
          <article className={`about-value-card ${className} reveal`} key={title}>
            <span className="about-value-icon" aria-hidden="true">
              <Icon size={42} strokeWidth={1.5} />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
