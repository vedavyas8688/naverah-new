import { ArrowUpRight } from 'lucide-react';
import { Picture } from '../../../components/index.js';
import { properties, services } from '../../../data.js';

export function ProfessionalsSection() {
  return (
    <section
      className="section home-professionals-section"
      aria-labelledby="naverah-advantage-title"
    >
      <div className="shell home-professionals-grid">
        <div className="home-professionals-intro reveal">
          <p className="home-professionals-eyebrow">
            <span aria-hidden="true" /> Why Naverah
          </p>
          <h2 id="naverah-advantage-title">Local insight behind every confident property move</h2>
        </div>

        <div className="home-professionals-image home-professionals-image-main reveal">
          <Picture
            src="/images/properties/sumadhura-epitome/cover.webp"
            alt="A curated premium residential community in Bangalore"
          />
        </div>

        <div className="home-professionals-copy reveal">
          <p>
            The right property is more than a listing. We combine carefully selected opportunities,
            practical Bangalore market knowledge, and coordinated support so you can compare well,
            avoid uncertainty, and move forward with confidence.
          </p>
          <dl className="home-professionals-stats">
            <div>
              <dd>{properties.length}+</dd>
              <dt>Curated opportunities</dt>
            </div>
            <div>
              <dd>{services.length}</dd>
              <dt>End-to-end services</dt>
            </div>
          </dl>
          <a className="home-professionals-link" href="/service">
            Explore our services <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>

        <div className="home-professionals-side reveal">
          <div className="home-professionals-image home-professionals-image-tall">
            <Picture
              src="/images/site/mission.webp"
              alt="Trusted property guidance from consultation to completion"
            />
          </div>
          <div className="home-professionals-image home-professionals-image-small">
            <Picture
              src="/images/site/vision.webp"
              alt="Bangalore growth and long-term property potential"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
