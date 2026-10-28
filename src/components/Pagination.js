import { ChevronLeft, ChevronRight } from 'lucide-react';

function paginationItems(page, count) {
  if (count <= 5) return Array.from({ length: count }, (_, index) => index + 1);
  if (page <= 3) return [1, 2, 3, 'end-ellipsis', count];
  if (page >= count - 2) return [1, 'start-ellipsis', count - 2, count - 1, count];
  return [page - 1, page, page + 1, 'end-ellipsis', count];
}

export function Pagination({ page, count, change }) {
  if (count <= 1) return null;

  return (
    <nav className="pagination" aria-label="Pagination">
      <button disabled={page === 1} onClick={() => change(page - 1)} aria-label="Previous page">
        <ChevronLeft />
      </button>
      {paginationItems(page, count).map((item) =>
        typeof item === 'number' ? (
          <button
            className={page === item ? 'active' : ''}
            aria-current={page === item ? 'page' : undefined}
            aria-label={`Page ${item}`}
            onClick={() => change(item)}
            key={item}
          >
            {item}
          </button>
        ) : (
          <span className="pagination-ellipsis" aria-hidden="true" key={item}>
            &hellip;
          </span>
        ),
      )}
      <button disabled={page === count} onClick={() => change(page + 1)} aria-label="Next page">
        <ChevronRight />
      </button>
    </nav>
  );
}
