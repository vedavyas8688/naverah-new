import { ArrowDown } from 'lucide-react';
import { Button } from '../../../components/index.js';
import { properties } from '../../../data.js';

export function HeroSection() {
  const property = properties.find(({ slug }) => slug === 'sobha-infinia') || properties[0];
  return (
    <section className="home-hero dark">
      <div className="hero-visual">
        <img src={property.hero || property.image} alt={property.title} fetchPriority="high" />
        <div />
      </div>
      <div className="shell relative z-10">
        <div className="hero-copy">
          <h1 className="display title-line hero-enter">Find your perfect property</h1>
          <p className="hero-enter">
            With Naverah Assets, your trusted RERA-authorised real estate channel partner in
            Bangalore.
          </p>
          <div className="flex flex-wrap gap-6 hero-enter">
            <Button href="/properties" light>
              Explore properties
            </Button>
            <Button href="/about" light outline arrow={false}>
              Learn more
              <span className="sr-only"> about Naverah Assets</span>
            </Button>
          </div>
        </div>
        <a className="scroll-circle" href="#about" aria-label="Scroll to about Naverah">
          <ArrowDown size={24} strokeWidth={1.25} />
        </a>
      </div>
    </section>
  );
}
