import { useEffect, useRef, useState } from 'react';
import { Button, Heading, Picture } from '../../../components/index.js';
import { data, properties, services } from '../../../data.js';

function AnimatedNumber({ value, suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return undefined;
    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setDisplayValue(value);
          return;
        }

        const duration = 1100;
        const startTime = performance.now();
        const update = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * easedProgress));
          if (progress < 1) frame = requestAnimationFrame(update);
        };
        frame = requestAnimationFrame(update);
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={numberRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const facts = [
    [properties.length, '', 'Properties to explore'],
    [services.length, '', 'Real estate services'],
    [10, '+', 'Years of industry experience'],
  ];

  return (
    <section id="about" className="section home-about-feature">
      <div className="shell home-about-feature-grid">
        <dl className="home-about-facts reveal">
          {facts.map(([value, suffix, label]) => (
            <div key={label}>
              <dd>
                <AnimatedNumber value={value} suffix={suffix} />
              </dd>
              <dt>{label}</dt>
            </div>
          ))}
        </dl>
        <div className="home-about-visual reveal">
          <Picture src={data.images.about} alt="Naverah real estate" defer />
        </div>
        <div className="home-about-copy reveal">
          <div>
            <Heading>Your trusted partner in property and investment</Heading>
            <p className="muted mt-7">
              Led by directors with 10+ years of proven industry experience, Naverah Assets bridges
              developers and investors with unmatched expertise empowering you to make confident,
              informed, and high-value property investments.
            </p>
            <div className="flex flex-wrap gap-5 mt-9">
              <Button />
              <Button href="/about" outline arrow={false}>
                Learn more
                <span className="sr-only"> about Naverah Assets</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
