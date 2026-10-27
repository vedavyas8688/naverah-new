import { ChevronLeft, ChevronRight } from 'lucide-react';
export function Pagination({ page, count, change }) {
  if (count <= 1) return null;
  return (
    <nav className="pagination" aria-label="Pagination">
      <button disabled={page === 1} onClick={() => change(page - 1)} aria-label="Previous page">
        <ChevronLeft />
      </button>
      {Array.from(
        {
          length: count,
        },
        (_, i) => i + 1,
      ).map((n) => (
        <button
          className={page === n ? 'active' : ''}
          aria-current={page === n ? 'page' : undefined}
          onClick={() => change(n)}
          key={n}
        >
          {n}
        </button>
      ))}
      <button disabled={page === count} onClick={() => change(page + 1)} aria-label="Next page">
        <ChevronRight />
      </button>
    </nav>
  );
}
