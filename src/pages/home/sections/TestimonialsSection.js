import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button, Heading } from '../../../components/index.js';
import { data } from '../../../data.js';

export function TestimonialsSection() {
  const testimonials = data.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonial = testimonials[activeIndex];
  const sentences = testimonial.quote.split('.');
  const headline = sentences[0];
  const description = sentences.slice(1).join('.').trim();

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  useEffect(() => {
    if (
      isPaused ||
      testimonials.length < 2 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }
    }, 5500);

    return () => window.clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <section className="section home-testimonial-slider">
      <div className="shell home-testimonial-layout">
        <div className="home-testimonial-intro reveal">
          <p className="eyebrow">{'Client experiences'}</p>
          <Heading>What our customers say</Heading>
          <p className="muted">
            {'Real stories from buyers and investors who trusted us with their property journey.'}
          </p>
          <Button href="/contact">{'Talk to our team'}</Button>
        </div>

        <div
          className="home-testimonial-panel reveal"
          aria-live="polite"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <button
            className="home-testimonial-arrow previous"
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
          >
            <ArrowLeft />
          </button>
          <div className="home-testimonial-content" key={activeIndex}>
            <blockquote>
              {'\u201c'}
              {headline}.{'\u201d'}
            </blockquote>
            {description && <p>{description}</p>}
            <div className="home-testimonial-person">
              <span aria-hidden="true">{testimonial.name.charAt(0)}</span>
              <div>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.role}</small>
              </div>
            </div>
          </div>
          <button
            className="home-testimonial-arrow next"
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
