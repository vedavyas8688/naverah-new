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
} from './sections/index.js';

export function HomePage() {
  return (
    <>
      <HeroSection />
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
