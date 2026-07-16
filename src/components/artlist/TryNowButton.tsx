import { APP_URL } from './tokens';

/**
 * "Try now" pill for the use-case cards. Reveals on card hover (desktop) and is
 * always visible on touch (no hover). Links to the app; stops propagation so it
 * never conflicts with any card-level interaction.
 */
export default function TryNowButton() {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="absolute right-3 top-3 z-20 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 font-['Figtree',sans-serif] text-[12px] font-medium text-black shadow-[0_2px_10px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/90 max-md:opacity-100 max-md:translate-y-0 md:translate-y-1 md:opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100"
    >
      Try now
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 17 17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
