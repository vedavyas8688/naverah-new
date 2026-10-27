import { Button, Heading, Picture } from '../../../components/index.js';
import { data } from '../../../data.js';

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <div className="trust-row reveal">
          <h2>
            Property expertise.
            <br />
            Personal guidance.
          </h2>
          <p>
            RERA-authorised
            <br />
            <span>Channel partner</span>
          </p>
          <p>
            10+ years
            <br />
            <span>Industry experience</span>
          </p>
          <p>
            Bangalore
            <br />
            <span>Local market knowledge</span>
          </p>
        </div>
        <div className="split-story mt-24">
          <Picture src={data.images.about} alt="Naverah real estate" className="reveal" />
          <div className="reveal">
            <Heading>Your trusted partner in property and investment</Heading>
            <p className="muted mt-7">
              Led by directors with 10+ years of proven industry experience, Naverah Assets bridges
              developers and investors with unmatched expertise empowering you to make confident,
              informed, and high-value property investments.
            </p>
            <div className="flex flex-wrap gap-5 mt-9">
              <Button />
              <Button href="/about" outline arrow={false}>
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
