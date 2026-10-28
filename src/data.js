import raw from './data/catalog.json';
export const data = raw;
export const articles = raw.articles;
export const properties = raw.properties;
export const services = raw.services.map((service) =>
  service.slug === 'property-consultation'
    ? { ...service, image: '/images/services/property-consultation/cover-indian.webp' }
    : service,
);
export const members = raw.team;
export const pages = raw.pages;
export const contact = {
  phone: '+91 9901171485',
  tel: '+919901171485',
  email: 'sales.info@naverahassets.com',
  address: "1st floor - No. 2596/4, 14th Main Road, 'E' Block, Sahakarnagar, Bangalore-560092",
};
