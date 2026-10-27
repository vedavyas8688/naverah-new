import { Button, Heading, PropertyCard } from '../../../components/index.js';
import { properties } from '../../../data.js';

export function FeaturedPropertiesSection() {
  return (
    <section className="section">
      <div className="shell project-mosaic">
        <PropertyCard p={properties[0]} />
        <div className="project-intro reveal">
          <Heading>Take a look at our properties</Heading>
          <p className="muted mt-7">
            Explore premium apartments, villas and plotted developments in Bangalore’s most
            sought-after locations.
          </p>
          <div className="flex flex-wrap gap-5 mt-9">
            <Button />
            <Button href="/properties" outline arrow={false}>
              Browse properties
            </Button>
          </div>
        </div>
        {properties.slice(1, 3).map((property) => (
          <PropertyCard p={property} key={property.slug} />
        ))}
      </div>
    </section>
  );
}
