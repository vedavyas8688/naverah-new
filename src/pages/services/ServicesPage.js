import { ServicesHeroSection } from './sections/ServicesHeroSection.js';
import { ServicesOverviewSection } from './sections/ServicesOverviewSection.js';
import { PropertyTypesSection } from './sections/PropertyTypesSection.js';
import { FaqSection } from './sections/FaqSection.js';

export function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <PropertyTypesSection />
      <FaqSection />
    </>
  );
}
