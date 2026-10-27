import { CTA } from '../../components/index.js';
import {
  AboutSection,
  ArticlesSection,
  FeaturedPropertiesSection,
  HeroSection,
  JourneySection,
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
      <CTA />
      <JourneySection />
      <TestimonialsSection />
      <ArticlesSection />
    </>
  );
}
