import { useEffect, useRef, useState } from 'react';
import { ACCENT, APP_URL } from './artlist/tokens';

const SRC = '/sheldonmind-intro.mp4';
const POSTER = '/sheldonmind-intro-poster.jpg';

/** Set only when the visitor ticks "Don't show this again" — a plain close leaves it unset. */
const STORAGE_KEY = 'sheldonmind:intro-modal-dismissed';

/** Lets the page paint before the overlay lands, so the first frame isn't the modal. */
const OPEN_DELAY_MS = 800;

function readDismissed() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    // Private mode / blocked storage: treat as "not dismissed" rather than crashing.
    return false;
  }
}

function writeDismissed(dismissed: boolean) {
  try {
    if (dismissed) localStorage.setItem(STORAGE_KEY, '1');
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* nothing we can do — the modal just reappears next visit */
  }
}

/**
 * Welcome overlay: the brand film plus the free-credit offer, shown once per visit.
 *
 * The X doesn't close outright — it opens a small panel offering "Don't show this again",
 * which is the only path that persists anything. Closing any other way (the panel's Close
 * button unticked, the backdrop, Esc) is session-only, so the modal returns next visit.
 */
export default function IntroVideoModal() {
  const [open, setOpen] = useState(false);
  const [askingDismiss, setAskingDismiss] = useState(false);
  const [neverAgain, setNeverAgain] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (readDismissed()) return;
    const id = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  // Esc closes, and the page behind must not scroll while the overlay is up.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  const toggleNeverAgain = (checked: boolean) => {
    setNeverAgain(checked);
    writeDismissed(checked);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-[#06182e]/35 p-4 backdrop-blur-xl max-sm:p-3"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Welcome to SheldonMind"
        className="relative w-full max-w-[720px] overflow-hidden rounded-[20px] border border-white/12 bg-[#0d0d0e] shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={SRC}
          poster={POSTER}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="block aspect-video w-full object-cover"
        />

        {/* Offer left, claim link right, on one row — the copy is sized so it never wraps. */}
        <div className="flex items-center justify-between gap-5 px-6 py-4 max-sm:gap-2 max-sm:px-3 max-sm:py-3">
          <div className="min-w-0 text-left">
            <h2 className="font-['Figtree',sans-serif] text-[15px] font-medium leading-[1.3] text-white max-sm:text-[12.5px]">
              New here? Get <span style={{ color: ACCENT.cyan }}>3,000</span> free credits
            </h2>
            <p className="font-['Figtree',sans-serif] text-[12.5px] leading-[1.4] text-white/55 max-sm:hidden">
              Chat, image, video and audio — no subscription required.
            </p>
          </div>

          <a
            href={APP_URL}
            style={{ color: ACCENT.cyan }}
            className="inline-flex shrink-0 items-center gap-1 font-['Figtree',sans-serif] text-[13.5px] font-medium whitespace-nowrap underline decoration-current/40 underline-offset-4 transition-opacity hover:opacity-80 max-sm:text-[12px]"
          >
            Claim free credits
            <svg className="size-[15px] shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          aria-expanded={askingDismiss}
          onClick={() => setAskingDismiss(true)}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-black/55 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white"
        >
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {askingDismiss && (
          <div className="absolute right-3 top-[48px] w-[196px] rounded-xl border border-white/12 bg-[#161618] p-2.5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <label className="flex cursor-pointer items-start gap-2 font-['Figtree',sans-serif] text-[11.5px] leading-[1.4] text-white/80">
              <input
                type="checkbox"
                checked={neverAgain}
                onChange={(e) => toggleNeverAgain(e.target.checked)}
                className="mt-px size-3.5 shrink-0 cursor-pointer accent-[#0472EF]"
              />
              Don&rsquo;t show this again
            </label>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-2 w-full rounded-lg bg-white/10 py-1.5 font-['Figtree',sans-serif] text-[11.5px] font-medium text-white transition-colors hover:bg-white/18"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
