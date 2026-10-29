import { useMemo, useState } from 'react';
import { properties } from '../../data.js';
import { createPropertyFilter } from './propertyFilter.js';
import { PropertiesHeroSection } from './sections/PropertiesHeroSection.js';
import { PropertyListingSection } from './sections/PropertyListingSection.js';

const filterProperties = createPropertyFilter(properties);

export function PropertiesPage() {
  const [query, setQuery] = useState(''),
    [type, setType] = useState(new URLSearchParams(location.search).get('type') || 'All'),
    [budget, setBudget] = useState('All'),
    [bed, setBed] = useState('All'),
    [page, setPage] = useState(1);
  const found = useMemo(
    () => filterProperties({ query, type, budget, bed }),
    [query, type, budget, bed],
  );
  return (
    <>
      <PropertiesHeroSection
        query={query}
        setQuery={setQuery}
        type={type}
        setType={setType}
        budget={budget}
        setBudget={setBudget}
        bed={bed}
        setBed={setBed}
        page={page}
        setPage={setPage}
        found={found}
      />
      <PropertyListingSection
        query={query}
        setQuery={setQuery}
        type={type}
        setType={setType}
        budget={budget}
        setBudget={setBudget}
        bed={bed}
        setBed={setBed}
        page={page}
        setPage={setPage}
        found={found}
      />
    </>
  );
}
