import { Button, Heading, Picture } from '../../../components/index.js';
import { data } from '../../../data.js';

export function StorySection() {
  return (
    <section id="our-story" className="section">
      <div className="shell">
        <div className="split-story about-story-feature about-story-feature-reverse">
          <Picture
            src="/images/about/about-mission-light-v2.webp"
            alt="Premium apartment living room overlooking Bangalore"
            className="reveal"
          />
          <div className="story-copy reveal">
            <Heading>{'A meaningful journey of growth'}</Heading>
            <p className="muted mt-7">
              Every property decision should build toward a brighter and more secure future. We
              combine local market knowledge with transparent, personalized guidance to help clients
              move confidently from discovery to ownership.
            </p>
            <p className="muted mt-7">
              Our mission is to create sustainable, long-term value in every transaction and
              relationship.
            </p>
            <div className="mt-8">
              <Button href="#our-values" outline arrow={false}>
                Our values
              </Button>
            </div>
          </div>
        </div>

        <div className="split-story about-story-feature">
          <div className="story-copy reveal">
            <Heading>{'More than a real estate firm'}</Heading>
            <p className="muted mt-7">{data.about[0]}</p>
            <div className="mt-8">
              <Button />
            </div>
          </div>
          <Picture
            src="/images/about/about-story-interior.webp"
            alt="Premium contemporary apartment interior"
            className="reveal"
          />
        </div>
      </div>
    </section>
  );
}
