import { CTA } from '../../components/index.js';
import {
  AboutSection,
  ArticlesSection,
  FeaturedPropertiesSection,
  HeroSection,
  JourneySection,
  PartnersSection,
  ServicesSection,
  TestimonialsSection,
  TrustedDevelopersSection,
} from './sections/index.js';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedDevelopersSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedPropertiesSection />
      <PartnersSection />
      <CTA />
      <JourneySection />
      <TestimonialsSection />
      <ArticlesSection />
    </>
  );
}
