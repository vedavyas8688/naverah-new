import { Button, Picture } from '../../../components/index.js';

export function ServicesHeroSection() {
  return (
    <section className="services-page-hero dark">
      <div className="shell">
        <div className="services-page-intro hero-enter">
          <p className="eyebrow">Naverah Assets services</p>
          <h1>A comprehensive set of services</h1>
          <p className="muted">
            Personalised real estate guidance from property discovery and financial assistance to
            documentation, site visits, investment advice, resale, and leasing.
          </p>
          <Button href="/contact" light>
            Get expert guidance
          </Button>
        </div>
        <Picture
          src="/images/services/services-page/premium-interior-banner.webp"
          alt="Premium residential interior"
          className="services-page-feature reveal"
        />
      </div>
    </section>
  );
}
