import { useLayoutEffect, useRef } from 'react';

/**
 * "Search Without Limits" — an animated recreation of the reference card.
 * Five icons only: file (top-left), link (top-right), play (bottom-left),
 * folder (bottom-right) and the search box at the centre.
 *
 * Loop (motion users): empty → the four corner icons fly in from their
 * corners and settle → a connector line draws from each into the centre →
 * the search box rises in at the meeting point → hold → dissolve → repeat.
 * JS sets data-sc="ready" (hidden) before paint, then "play" once on-screen.
 */

function Circle({ cls, children }: { cls: string; children: React.ReactNode }) {
  return (
    <div className={`${cls} grid size-12 place-items-center rounded-full border border-white/25 bg-black text-white/85 max-md:size-11`}>
      {children}
    </div>
  );
}

export default function SearchCanvas() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Decorative loop the card is built around — plays regardless of the
    // reduced-motion setting; otherwise the card would show a static box.
    el.dataset.sc = 'ready';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.sc = 'play';
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pos = (left: string, top: string): React.CSSProperties => ({
    position: 'absolute',
    left,
    top,
    transform: 'translate(-50%, -50%)',
  });

  return (
    <div ref={ref} className="sc-canvas relative mx-auto aspect-[16/10] w-full max-w-[360px]">
      {/* Connector lines + centre highlight (behind the icons). */}
      <svg viewBox="0 0 160 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="scGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#32EEFF" stopOpacity="0" />
            <stop offset="0.5" stopColor="#32EEFF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#32EEFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Cyan highlight through the centre. */}
        <line className="sc-hl" x1="30" y1="42" x2="130" y2="42" stroke="url(#scGlow)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        {/* Elbow connectors from each corner icon into the centre box. */}
        <path className="sc-line sc-l0" pathLength={1} d="M 46 30 H 62 Q 70 30 70 37 V 42" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path className="sc-line sc-l1" pathLength={1} d="M 114 30 H 98 Q 90 30 90 37 V 42" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path className="sc-line sc-l2" pathLength={1} d="M 46 66 H 62 Q 70 66 70 59 V 54" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path className="sc-line sc-l3" pathLength={1} d="M 114 66 H 98 Q 90 66 90 59 V 54" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        {/* A cyan pulse runs endlessly along each connector, icon → centre. */}
        <path className="sc-flow" pathLength={1} d="M 46 30 H 62 Q 70 30 70 37 V 42" fill="none" stroke="#32EEFF" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path className="sc-flow" pathLength={1} d="M 114 30 H 98 Q 90 30 90 37 V 42" fill="none" stroke="#32EEFF" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path className="sc-flow" pathLength={1} d="M 46 66 H 62 Q 70 66 70 59 V 54" fill="none" stroke="#32EEFF" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path className="sc-flow" pathLength={1} d="M 114 66 H 98 Q 90 66 90 59 V 54" fill="none" stroke="#32EEFF" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* File — top-left. */}
      <div style={pos('18%', '30%')}>
        <Circle cls="sc-icon sc-tl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M6 2h7l5 5v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M13 2v5h5M8.5 12h7M8.5 15h7M8.5 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </Circle>
      </div>

      {/* Link — top-right. */}
      <div style={pos('82%', '30%')}>
        <Circle cls="sc-icon sc-tr">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M9.5 14.5l5-5M8 13l-2 2a3.2 3.2 0 0 0 4.5 4.5l2-2M16 11l2-2a3.2 3.2 0 0 0-4.5-4.5l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Circle>
      </div>

      {/* Play — bottom-left. */}
      <div style={pos('18%', '66%')}>
        <Circle cls="sc-icon sc-bl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M8 5.5v13l11-6.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
        </Circle>
      </div>

      {/* Folder — bottom-right. */}
      <div style={pos('82%', '66%')}>
        <Circle cls="sc-icon sc-br">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 7a1 1 0 0 1 1-1h5l2 2h8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
        </Circle>
      </div>

      {/* Search box — centre. */}
      <div style={pos('50%', '42%')}>
        <div className="sc-center grid size-14 place-items-center rounded-2xl border border-[#32EEFF]/50 bg-black text-white shadow-[0_0_24px_rgba(50,238,255,0.25)] max-md:size-12">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" /><path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
        </div>
      </div>

      {/* Search category pill. */}
      <div style={pos('50%', '82%')}>
        <span className="sc-pill inline-block whitespace-nowrap rounded-lg border border-[#32EEFF]/45 bg-black px-3.5 py-1.5 font-['Figtree',sans-serif] text-[12px] text-white/80">
          Search category
        </span>
      </div>
    </div>
  );
}
