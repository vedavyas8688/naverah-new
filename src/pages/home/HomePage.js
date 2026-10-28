import { CTA } from '../../components/index.js';
import {
  AboutSection,
  ArticlesSection,
  FeaturedPropertiesSection,
  HeroSection,
  // HomeStorySection,
  JourneySection,
  PartnersSection,
  ProfessionalsSection,
  PropertyMarqueeSection,
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
      <ProfessionalsSection />
      {/* <HomeStorySection /> */}
      <ServicesSection />
      <FeaturedPropertiesSection />
      <PropertyMarqueeSection />
      <JourneySection />
      <PartnersSection />
      <TestimonialsSection />
      <ArticlesSection />
      <CTA />
    </>
  );
}
