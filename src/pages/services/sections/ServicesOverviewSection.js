import { ServiceGrid } from '../../../components/index.js';

export function ServicesOverviewSection() {
  return (
    <section className="services-overview section">
      <div className="shell">
        <div className="services-overview-heading reveal">
          <p className="eyebrow">End-to-end support</p>
          <h2>Expert guidance for every property decision</h2>
        </div>
        <ServiceGrid />
      </div>
    </section>
  );
}
