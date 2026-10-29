import { useState } from 'react';
import { LockKeyhole } from 'lucide-react';
import { Button, Gallery, Heading, Picture } from '../../../components/index.js';
import { CONTACT_MODAL_EVENT } from '../../../components/ContactModal.js';

export function FloorPlansSection({ p }) {
  const storageKey = `floor-plans-unlocked:${p.slug}`;
  const [unlocked, setUnlocked] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem(storageKey) === 'true',
  );

  const unlockPlans = () => {
    sessionStorage.setItem(storageKey, 'true');
    setUnlocked(true);
  };

  const requestAccess = () =>
    window.dispatchEvent(
      new CustomEvent(CONTACT_MODAL_EVENT, {
        detail: {
          subject: `Floor plan request: ${p.title}`,
          title: `Unlock floor plans for ${p.title}`,
          onSuccess: unlockPlans,
        },
      }),
    );

  return (
    p.plans.length > 0 && (
      <section id="floor-plans" className="section">
        <div className="shell">
          <div className="section-head">
            <Heading>{'Thoughtfully planned spaces'}</Heading>
            {p.brochures
              .filter((b) => b.url)
              .map((b) => (
                <Button href={b.url} outline key={b.url}>
                  {b.label}
                </Button>
              ))}
          </div>
          {unlocked ? (
            <div className="floor-plans floor-plans-unlocked">
              <Gallery images={p.plans} title={`${p.title} floor plan`} imageActions />
            </div>
          ) : (
            <div className="floor-plan-gate">
              <div className="floor-plan-previews" aria-hidden="true">
                {p.plans.slice(0, 2).map((plan) => (
                  <Picture src={plan} alt="" key={plan} defer />
                ))}
              </div>
              <div className="floor-plan-lock-card">
                <span className="floor-plan-lock-icon">
                  <LockKeyhole size={28} />
                </span>
                <p className="eyebrow">Floor plans</p>
                <h3>Unlock detailed layouts</h3>
                <p>
                  Fill in the short enquiry form to view and download every available floor plan.
                </p>
                <button type="button" className="button" onClick={requestAccess}>
                  Unlock floor plans
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  );
}
