import { ArrowUpRight } from 'lucide-react';
import { members } from '../data.js';
import { Picture } from './ui.js';
export function PropertyCard({ p, large = false }) {
  return (
    <a href={p.url} className={`property-card group reveal ${large ? 'large' : ''}`}>
      <Picture src={p.image || p.hero} alt={p.title} />
      <div className="flex justify-between gap-4 items-start mt-7">
        <h3>{p.title}</h3>
        <ArrowUpRight className="shrink-0 mt-2" />
      </div>
      <div className="property-meta">
        {[
          ['Location', p.location || 'Bangalore'],
          ['Property type', p.type],
          ['Starting price', p.price || 'On enquiry'],
        ].map(([k, v]) => (
          <div key={k}>
            <small>{k}</small>
            <p>{v}</p>
          </div>
        ))}
      </div>
    </a>
  );
}
export function BlogCard({ a, featured = false }) {
  return (
    <a href={a.url} className={`blog-card reveal ${featured ? 'featured' : ''}`}>
      <Picture src={a.image} alt={a.title} />
      <div className="blog-card-copy">
        <h3>{a.title}</h3>
        {featured && <p className="muted mt-5 line-clamp-3">{a.description}</p>}
        <div className="flex justify-between items-center gap-3 mt-6 text-sm">
          <span>{a.date || 'Real estate insights'}</span>
          <ArrowUpRight size={20} />
        </div>
      </div>
    </a>
  );
}
export function TeamGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {members.map((m) => (
        <a href={m.url} className="team-card reveal" key={m.slug}>
          <Picture src={m.image} alt={m.name} />
          <div className="mt-7 flex gap-3 justify-between">
            <h3>{m.name}</h3>
            <ArrowUpRight className="shrink-0" />
          </div>
          <p className="muted mt-3">{m.role}</p>
        </a>
      ))}
    </div>
  );
}
