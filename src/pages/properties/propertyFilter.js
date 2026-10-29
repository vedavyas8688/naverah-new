export function createPropertyFilter(properties) {
  // Catalog data is static: normalize text and prices once, not on every keystroke.
  const index = properties.map((property) => {
    const price = property.price || '';
    const value = Number(price.replace(/,/g, '').match(/[0-9.]+/)?.[0]);
    return {
      property,
      text: `${property.title} ${property.location}`.toLowerCase(),
      crore: /\bL\b|lakh/i.test(price) ? value / 100 : value || Infinity,
    };
  });
  return ({ query, type, budget, bed }) => {
    const search = query.toLowerCase();
    const maximum = Number(budget);
    return index
      .filter(
        ({ property, text, crore }) =>
          (type === 'All' || property.type === type) &&
          text.includes(search) &&
          (budget === 'All' || crore <= maximum) &&
          (bed === 'All' || property.bhk?.startsWith(bed)),
      )
      .map(({ property }) => property);
  };
}
