import { useEffect, useRef, useState } from 'react';
import { ACCENT, APP_URL } from './artlist/tokens';

const SRC = '/sheldonmind-intro.mp4';
const POSTER = '/sheldonmind-intro-poster.jpg';

/**
 * The cyan the offer bar is written in. Not ACCENT.cyan (#32EEFF) itself: that is a glow
 * colour, and as ink on the bar's white glass it is barely there. This is the same hue held
 * down to where it reads, and it is the colour hover already resolves to.
 */
const CYAN_INK = '#0d9bb5';

/** Lets the page paint before the overlay lands, so the first frame isn't the modal. */
const OPEN_DELAY_MS = 800;

/**
 * Welcome overlay: the brand film plus the free-credit offer.
 *
 * Nothing is persisted — the X, the backdrop and Esc all just close it, and it comes back on
 * the next load.
 */
export default function IntroVideoModal() {
  const [open, setOpen] = useState(false);
  // Sound on by default. Flipped to true only if the browser refuses to start playback with
  // audio — see the play effect below.
  const [muted, setMuted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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

    // The card, not the close button: focusing a button drew Chrome's focus ring around the X
    // the moment the modal appeared. The card is tabindex=-1 and outline-none, so focus still
    // moves inside the dialog — Tab from there reaches the controls and rings them properly.
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /**
   * The viewer's own choice, which is not the same thing as `muted`: `muted` also goes true when
   * the browser forces it, and that must not be read back as "they asked for silence".
   */
  const wantsSoundRef = useRef(true);

  /**
   * Sound is on by default, so playback can't ride on the `autoplay` attribute: browsers only
   * grant unattended autoplay to muted media. Start it by hand instead.
   *
   * Chrome refuses `play()` on unmuted media until the page has been interacted with — verified
   * on the live site, where the first attempt is rejected and this falls back to muted. There is
   * no way around that from script, so the next best thing: fall back, then treat the very first
   * gesture the page receives — a click, a key, a tap, anywhere — as the licence to turn sound
   * on. The viewer doesn't have to find the speaker button; that button is now only for turning
   * sound off.
   */
  useEffect(() => {
    if (!open) return;
    const video = videoRef.current;
    if (!video) return;

    let disarm = () => {};

    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
      void video.play().catch(() => {});

      const onGesture = () => {
        disarm();
        if (!wantsSoundRef.current) return;
        video.muted = false;
        setMuted(false);
        void video.play().catch(() => {});
      };

      // Capture phase, so this still runs for a click on the backdrop or the X, whose own
      // handlers close the overlay and stop the event going any further.
      const events = ['pointerdown', 'keydown', 'touchstart'] as const;
      const opts = { capture: true } as const;
      events.forEach((type) => document.addEventListener(type, onGesture, opts));
      disarm = () => events.forEach((type) => document.removeEventListener(type, onGesture, opts));
    });

    return () => disarm();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-[#06182e]/35 p-4 backdrop-blur-xl max-sm:p-3"
      onClick={() => setOpen(false)}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Welcome to SheldonMind"
        className="relative w-full max-w-[1000px] overflow-hidden rounded-[20px] border border-white/12 bg-[#0d0d0e] shadow-[0_40px_120px_rgba(0,0,0,0.6)] outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <video
            ref={videoRef}
            src={SRC}
            poster={POSTER}
            preload="auto"
            loop
            playsInline
            aria-hidden
            className="block aspect-video w-full object-cover"
          />

          {/*
            A light scrim, not a dark one, because the copy on it is dark. `backdrop-filter`
            keeps the film's own colours under the white wash — the bar is the clip, blurred
            and lifted, rather than a slab of grey. Masked to fade in from nothing so the
            picture dissolves into it instead of meeting it at a line.
          */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[140px] backdrop-blur-xl max-sm:h-[110px]"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, #000 58%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 58%)',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.62) 55%, rgba(255,255,255,0.76) 100%)',
            }}
          />

          <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 px-5 py-3.5 max-sm:gap-2.5 max-sm:px-3 max-sm:py-3">
            <span
              aria-hidden
              className="grid size-11 shrink-0 place-items-center rounded-xl border max-sm:hidden"
              style={{
                borderColor: `${ACCENT.cyan}66`,
                backgroundColor: `${ACCENT.cyan}1f`,
                color: CYAN_INK,
              }}
            >
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="8" width="18" height="4" rx="1" />
                <path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" />
                <path d="M12 8v12" />
                <path d="M12 8S10.5 4 8.5 4a2 2 0 0 0 0 4H12z" />
                <path d="M12 8s1.5-4 3.5-4a2 2 0 0 1 0 4H12z" />
              </svg>
            </span>

            <span aria-hidden className="h-9 w-px shrink-0 bg-black/15 max-sm:hidden" />

            <div className="min-w-0 text-left">
              <h2 className="font-['Figtree',sans-serif] text-[15px] font-medium leading-[1.3] text-[#0f172a] max-sm:text-[12.5px]">
                Welcome! Enjoy <span style={{ color: CYAN_INK }}>3,000</span> free credits
              </h2>
              <p className="font-['Figtree',sans-serif] text-[12.5px] leading-[1.4] text-[#475569] max-sm:hidden">
                Chat, image, video and audio — no subscription required.
              </p>
            </div>

            {/*
              What 3,000 credits actually buys, in the site's editorial serif. Dropped below
              lg because the bar is a single row: on a narrower card the copy, the stats and
              the button cannot all sit on one line without wrapping.
            */}
            {/* flex-1 + justify-evenly, not ml-auto: the three sit spread across the gap between
                the copy and the button rather than bunched against it. */}
            <div className="flex flex-1 items-center justify-evenly gap-4 max-lg:hidden">
              {[
                ['300', 'images'],
                ['15', 'workflows'],
                ['18', 'videos'],
              ].map(([value, label]) => (
                <div key={label} className="text-center">
                  {/* Inline, not `font-[var(--font-serif-display)]` — that class resolved to Inter. */}
                  <div
                    style={{ fontFamily: 'var(--font-serif-display)', color: CYAN_INK }}
                    className="text-[19px] font-semibold italic leading-none"
                  >
                    {value}
                  </div>
                  <div className="mt-1 font-['Figtree',sans-serif] text-[11px] leading-none text-[#64748b]">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={APP_URL}
              // Classes, not inline style — inline would win over :hover. Resting is the same
              // cyan as the copy; hover adds the wash and the glow.
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#32EEFF] max-lg:ml-auto bg-transparent px-5 py-2.5 font-['Figtree',sans-serif] text-[13.5px] font-medium whitespace-nowrap text-[#0d9bb5] shadow-[0_0_14px_rgba(50,238,255,0.28),inset_0_0_14px_rgba(50,238,255,0.1)] transition-all duration-200 hover:bg-[rgba(50,238,255,0.12)] hover:shadow-[0_0_20px_rgba(50,238,255,0.55),inset_0_0_18px_rgba(50,238,255,0.2)] max-sm:gap-1.5 max-sm:px-3.5 max-sm:py-2 max-sm:text-[12px]"
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
        </div>

        {/* Sound toggle. Same glass as the X, mirrored to the left corner. */}
        <button
          type="button"
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          aria-pressed={!muted}
          onClick={() => {
            const next = !muted;
            // Records the intent as well as the state: muting here must stick even if the
            // first-gesture handler is still armed.
            wantsSoundRef.current = !next;
            setMuted(next);
            const video = videoRef.current;
            if (video) {
              // The element is driven imperatively — there is no `muted` prop on it, because
              // React would re-assert the attribute and fight the play effect's fallback.
              video.muted = next;
              if (!next) void video.play().catch(() => {});
            }
          }}
          className="absolute left-3 top-3 grid size-7 cursor-pointer place-items-center rounded-full border border-black/10 bg-white/55 text-[#0f172a] shadow-[0_2px_10px_rgba(15,23,42,0.18)] backdrop-blur-md"
        >
          {muted ? (
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M11 5 6 9H3v6h3l5 4z" />
              <path d="m22 9-6 6M16 9l6 6" />
            </svg>
          ) : (
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M11 5 6 9H3v6h3l5 4z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </svg>
          )}
        </button>

        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          // Same glass as the offer bar: a white wash over `backdrop-filter`, so the button
          // carries the frame's colour instead of punching a black hole in it. The hairline and
          // the shadow are what keep it findable — white glass alone vanished on the clip's
          // near-white frames, leaving the × floating with no button under it.
          // No hover tint: the cursor alone says it's clickable.
          className="absolute right-3 top-3 grid size-7 cursor-pointer place-items-center rounded-full border border-black/10 bg-white/55 text-[#0f172a] shadow-[0_2px_10px_rgba(15,23,42,0.18)] backdrop-blur-md"
        >
          <svg width={12} height={12} viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
