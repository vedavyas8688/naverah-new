import { Heading, Picture } from '../../../components/index.js';
import { data, properties } from '../../../data.js';

export function TestimonialsSection() {
  return (
    <section className="section soft">
      <div className="shell">
        <Heading className="text-center max-w-[650px] mx-auto reveal">
          What our customers say about us
        </Heading>
        <div className="testimonials-grid">
          {data.testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              className={`testimonial reveal ${index === 1 ? 'middle' : ''}`}
              key={testimonial.name}
            >
              <div className="testimonial-copy">
                <h3>“{testimonial.quote.split('.')[0]}.”</h3>
                <p className="muted mt-6">
                  {testimonial.quote.split('.').slice(1).join('.').trim()}
                </p>
                <div className="mt-7">
                  {testimonial.name}
                  <span className="mx-4 opacity-40">|</span>
                  {testimonial.role}
                </div>
              </div>
              <Picture src={properties[index + 2].image} alt={properties[index + 2].title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
