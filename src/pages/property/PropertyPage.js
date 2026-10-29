import { memo, useEffect, useMemo, useState } from 'react';
import { PropertyHeroSection } from './sections/PropertyHeroSection.js';
import { PropertyNavigationSection } from './sections/PropertyNavigationSection.js';
import { OverviewSection } from './sections/OverviewSection.js';
import { AmenitiesSection } from './sections/AmenitiesSection.js';
import { GallerySection } from './sections/GallerySection.js';
import { PricingSection } from './sections/PricingSection.js';
import { FloorPlansSection } from './sections/FloorPlansSection.js';
import { LocationSection } from './sections/LocationSection.js';
import { EnquirySection } from './sections/EnquirySection.js';
import { RelatedPropertiesSection } from './sections/RelatedPropertiesSection.js';
const PropertyHero = memo(PropertyHeroSection);
const PropertyContent = memo(function PropertyContent({ p }) {
  return (
    <>
      <OverviewSection p={p} />
      <AmenitiesSection p={p} />
      <GallerySection p={p} />
      <PricingSection p={p} />
      <FloorPlansSection p={p} />
      <LocationSection p={p} />
      <EnquirySection p={p} />
      <RelatedPropertiesSection p={p} />
    </>
  );
});

export function PropertyPage({ p }) {
  const [tab, setTab] = useState('Overview');
  const tabs = useMemo(
    () => [
      'Overview',
      ...(p.amenities.length ? ['Amenities'] : []),
      ...(p.gallery.length ? ['Gallery'] : []),
      ...(p.prices.length ? ['Pricing'] : []),
      ...(p.plans.length ? ['Floor plans'] : []),
      ...(p.locationBody ? ['Location'] : []),
    ],
    [p],
  );

  useEffect(() => {
    const sectionIds = tabs.map((name) => name.toLowerCase().replaceAll(' ', '-'));
    const navigation = document.querySelector('.property-tabs');
    const sections = sectionIds.map((id) => ({
      id,
      element: document.getElementById(id),
      margin: 0,
    }));
    const updateMargins = () => {
      const padding =
        Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      sections.forEach((section) => {
        section.margin = section.element
          ? (Number.parseFloat(getComputedStyle(section.element).scrollMarginTop) || 0) + padding
          : 0;
      });
    };
    updateMargins();
    let frame;

    const updateActiveSection = () => {
      frame = undefined;
      const offset = (navigation?.offsetHeight || 0) + 36;
      let activeSection = sectionIds[0];

      for (const { id, element, margin } of sections) {
        if (element && element.offsetTop <= window.scrollY + Math.max(offset, margin) + 1)
          activeSection = id;
      }

      const activeTab = tabs.find(
        (name) => name.toLowerCase().replaceAll(' ', '-') === activeSection,
      );
      if (activeTab) setTab((current) => (current === activeTab ? current : activeTab));
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };
    const handleResize = () => {
      updateMargins();
      handleScroll();
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [p.url, tabs]);

  return (
    <>
      <PropertyHero p={p} />
      <PropertyNavigationSection tab={tab} setTab={setTab} tabs={tabs} />
      <PropertyContent p={p} />
    </>
  );
}
