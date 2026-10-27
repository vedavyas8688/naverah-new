import { Button, Heading, ServiceGrid } from '../../../components/index.js';

export function ServicesSection() {
  return (
    <section className="section soft">
      <div className="shell">
        <div className="section-head reveal">
          <div className="max-w-2xl">
            <Heading>A comprehensive set of services</Heading>
            <p className="muted mt-6">
              Real estate solutions tailored to your lifestyle and investment goals. From discovery
              and site visits to documentation and deal closure.
            </p>
          </div>
          <Button href="/service" outline arrow={false}>
            Browse all services
          </Button>
        </div>
        <ServiceGrid limit={6} />
      </div>
    </section>
  );
}
