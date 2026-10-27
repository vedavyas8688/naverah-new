export function HomeStorySection() {
  return (
    <section id="our-story" className="section about-story-section home-story-section">
      <div className="shell about-story-composition">
        <div className="about-story-image about-story-image-top reveal">
          <img
            src="/images/home/home-story-advisor.webp"
            alt="Naverah real estate professional reviewing residential plans"
            loading="lazy"
          />
        </div>

        <div className="about-story-copy about-story-copy-top reveal">
          <p className="about-story-eyebrow">Our story</p>
          <h2>The story of how Naverah Assets was founded</h2>
          <p>
            Naverah Assets was founded to make property decisions more transparent, informed, and
            personal. We bring trusted market knowledge and attentive guidance together, helping
            buyers and investors move confidently from discovery to ownership.
          </p>
        </div>

        <div className="about-story-copy about-story-copy-bottom reveal">
          <p className="about-story-eyebrow">Our mission</p>
          <h2>Our goal is to deliver trusted guidance and lasting value</h2>
          <p>
            We simplify every stage of the real estate journey through honest advice, carefully
            selected opportunities, and dependable support tailored to each client’s goals.
          </p>
        </div>

        <div className="about-story-image about-story-image-bottom reveal">
          <img
            src="/images/home/home-mission-residence.webp"
            alt="Premium residence representing Naverah Assets' commitment to lasting value"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
