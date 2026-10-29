import { useEffect, useRef } from 'react';
import { Button, Heading, ServiceGrid } from '../../../components/index.js';

export function ServicesSection() {
  const servicesSectionRef = useRef(null);

  useEffect(() => {
    const section = servicesSectionRef.current;
    const mobile = window.matchMedia('(max-width: 767px)');
    if (!section) return undefined;

    let frame;
    let previousOffset;
    const updateProgress = () => {
      frame = undefined;
      if (!mobile.matches) {
        if (previousOffset !== undefined) {
          section.style.removeProperty('--services-offset');
          previousOffset = undefined;
        }
        return;
      }

      const rect = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / distance, 0), 1);
      const offset = `${(-progress * 66.6667).toFixed(4)}%`;
      if (offset !== previousOffset) {
        section.style.setProperty('--services-offset', offset);
        previousOffset = offset;
      }
    };
    const requestUpdate = () => {
      if (mobile.matches && frame === undefined)
        frame = window.requestAnimationFrame(updateProgress);
    };
    const changeViewport = () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      updateProgress();
    };

    updateProgress();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', changeViewport);
    mobile.addEventListener('change', changeViewport);

    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', changeViewport);
      mobile.removeEventListener('change', changeViewport);
      section.style.removeProperty('--services-offset');
    };
  }, []);

  return (
    <section className="section home-services-section" ref={servicesSectionRef}>
      <div className="shell">
        <div className="home-services-intro reveal">
          <div className="home-services-title">
            <Heading>
              <span className="home-services-heading-line">A comprehensive</span>
              <br />
              <span className="home-services-heading-line">set of services</span>
            </Heading>
            <div className="home-services-actions">
              <Button href="/contact">Get expert guidance</Button>
              <Button href="/service" outline arrow={false}>
                Browse all services
              </Button>
            </div>
          </div>
          <p className="muted home-services-description">
            Personalised real estate support for every stage of your property journey, from
            discovery and finance to documentation, site visits, investment guidance, resale, and
            leasing.
          </p>
        </div>
        <div className="home-services-list">
          <ServiceGrid limit={6} />
        </div>
      </div>
    </section>
  );
}
