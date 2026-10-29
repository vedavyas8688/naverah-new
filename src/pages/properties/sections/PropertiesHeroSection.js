import { Heading } from '../../../components/index.js';

export function PropertiesHeroSection() {
  return (
    <section className="portfolio-top properties-page-hero dark">
      <div className="shell grid lg:grid-cols-[1.75fr_1fr] gap-12 items-center hero-enter">
        <Heading tag="h1">
          <span>Find your perfect</span> <span>property</span>
        </Heading>
        <p className="muted text-xl">
          {
            'Explore thoughtfully selected apartments, villas and plots across Bangalore with Naverah Assets.'
          }
        </p>
      </div>
    </section>
  );
}
