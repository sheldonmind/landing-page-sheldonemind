import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === 'right' ? 'M9 5L16 12L9 19' : 'M15 5L8 12L15 19'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Horizontal card rail. Cards bleed off the right edge of the container rather than
 * stopping at it — that overflow is what signals "there's more" in the reference.
 * Arrows are desktop-only; touch keeps native swipe + snap.
 */
export default function CardScroller({
  children,
  className = '',
  pageCount,
}: {
  children: ReactNode;
  className?: string;
  /** Dot pagination. Omit to hide dots. */
  pageCount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [page, setPage] = useState(0);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
    if (pageCount && pageCount > 1 && max > 0) {
      setPage(Math.round((el.scrollLeft / max) * (pageCount - 1)));
    }
  }, [pageCount]);

  useEffect(() => {
    sync();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sync]);

  const nudge = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const btn =
    'absolute top-1/2 z-20 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition disabled:pointer-events-none disabled:opacity-0 hover:bg-black/80 lg:grid';

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => nudge(-1)}
        disabled={atStart}
        className={`${btn} left-2`}
      >
        <Arrow dir="left" />
      </button>

      <div ref={ref} onScroll={sync} className="al-scroller scrollbar-hide gap-5 pb-1">
        {children}
      </div>

      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => nudge(1)}
        disabled={atEnd}
        className={`${btn} right-2`}
      >
        <Arrow dir="right" />
      </button>

      {pageCount && pageCount > 1 ? (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
