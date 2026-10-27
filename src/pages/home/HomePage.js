import { CTA } from '../../components/index.js';
import {
  AboutSection,
  ArticlesSection,
  FeaturedPropertiesSection,
  HeroSection,
  // HomeStorySection,
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
      {/* <HomeStorySection /> */}
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
