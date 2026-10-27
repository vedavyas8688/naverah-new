import { Button, Heading, ServiceGrid } from '../../../components/index.js';

export function ServicesSection() {
  return (
    <section className="section home-services-section">
      <div className="shell">
        <div className="home-services-intro reveal">
          <div className="home-services-title">
            <Heading>A comprehensive set of services</Heading>
            <div className="home-services-actions">
              <Button href="/contact">Get expert guidance</Button>
              <Button href="/service" outline arrow={false}>
                Browse all services
              </Button>
            </div>
          </div>
          <p className="muted home-services-description">
            Personalised real estate support for every stage of your property journey, from
            discovery and finance to documentation, site visits, investment guidance, resale, and
            leasing.
          </p>
        </div>
        <div className="home-services-list">
          <ServiceGrid limit={6} />
        </div>
      </div>
    </section>
  );
}
