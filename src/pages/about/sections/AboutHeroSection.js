import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Check,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { articles, contact, data, properties, services } from '../../../data.js';
import {
  BlogCard,
  Button,
  ContactForm,
  CTA,
  FAQ,
  Gallery,
  Heading,
  Office,
  Pagination,
  Picture,
  PropertyCard,
  ServiceGrid,
  TeamGrid,
} from '../../../components/index.js';

function CountUp({ value }) {
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(String(target), '');
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setCount(target);
          return;
        }

        const startedAt = performance.now();
        const duration = 1200;
        const update = (now) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(update);
        };
        frame = requestAnimationFrame(update);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}

export function AboutHeroSection() {
  const consultationImage =
    services.find(({ slug }) => slug === 'property-consultation')?.image || services[0].image;
  const stats = [
    ['10+', 'Years of experience'],
    ['32', 'Featured properties'],
    ['110', 'Property insights'],
  ];

  return (
    <section className="about-top dark">
      <div className="shell">
        <div className="section-head hero-enter">
          <Heading tag="h1" line>
            {'Your trusted partner in property'}
          </Heading>
          <div className="flex gap-5 flex-wrap shrink-0">
            <Button light />
            <Button href="#our-story" outline light arrow={false}>
              {'Our story'}
            </Button>
          </div>
        </div>
        <div className="about-images">
          <Picture
            src={data.images.founder}
            alt="Naveed Ahmed Shaikh"
            className="hero-enter"
            eager
          />
          <div className="about-banner-main hero-enter">
            <Picture src={consultationImage} alt="Naverah Assets property experts" eager />
            <div className="about-banner-stats">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <CountUp value={value} />
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
