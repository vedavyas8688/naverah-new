import {
  ArrowUpRight,
  Building2,
  Globe,
  Handshake,
  Home,
  KeyRound,
  Landmark,
  ShieldCheck,
} from 'lucide-react';
import { services } from '../data.js';
const icons = [Building2, Home, Landmark, ShieldCheck, Globe, KeyRound, Handshake];
export function ServiceGrid({ limit = 99 }) {
  return (
    <div className="service-grid">
      {services.slice(0, limit).map((s, i) => {
        const Icon = icons[i % 7];
        return (
          <a href={s.url} className="service-item reveal group" key={s.slug}>
            <div className="flex justify-between items-center mb-12">
              <Icon size={48} strokeWidth={1} />
              <ArrowUpRight size={27} className="group-hover:rotate-45 transition-transform" />
            </div>
            <h3>{s.title}</h3>
            <p className="muted mt-5">
              {s.points[0]}
              {'. '}
              {s.points[1]}
              {'.'}
            </p>
          </a>
        );
      })}
    </div>
  );
}
