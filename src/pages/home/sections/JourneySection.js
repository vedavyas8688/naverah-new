import { Button, Heading, Picture } from '../../../components/index.js';
import { services } from '../../../data.js';

const steps = [
  [
    'Discover',
    'Understand your requirements and real estate goals. Get personalized property recommendations that fit your budget.',
  ],
  [
    'Explore',
    'Schedule hassle-free site visits at your convenience. Experience guided tours with transparent communication.',
  ],
  [
    'Make it yours',
    'Ensure all documents are accurate and compliant. Enjoy seamless coordination from visit to final deal closure.',
  ],
];

export function JourneySection() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <Heading>
              Your property journey,
              <br />
              made simple.
            </Heading>
            <p className="muted mt-6">
              Transparent, reliable, and personalised guidance at every step.
            </p>
          </div>
          <Button href="/about" outline arrow={false}>
            Learn more
          </Button>
        </div>
        <div className="journey-grid">
          <Picture
            src={services[0].image}
            alt="Property consultation"
            className="process-image reveal"
          />
          <div className="journey-steps">
            {steps.map(([title, description], index) => (
              <div className="process-step journey-step" key={title}>
                <div className="flex justify-between gap-5">
                  <h3>{title}</h3>
                  <span>Step 0{index + 1}</span>
                </div>
                <p className="muted mt-4">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
