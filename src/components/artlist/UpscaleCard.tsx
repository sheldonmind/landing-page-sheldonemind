/**
 * Upscale showcase — auto-sweeping before/after comparison, the same trick used on
 * app.sheldonmind.com/create: one image, with a blurred "before" copy stacked on top
 * and revealed by an animated clip-path. A divider handle sweeps left↔right in sync.
 * Left = low-res (blurred), right = upscaled (sharp base image showing through).
 * Pure CSS (see .uc-* rules in index.css); freezes to a static split on reduced-motion.
 */
import TryNowButton from './TryNowButton';

export default function UpscaleCard({
  label,
  caption,
  className = '',
}: {
  label: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`group/card relative shrink-0 overflow-hidden rounded-xl bg-greygrey-50 ${className}`}>
      <TryNowButton />
      {/* Comparison fills the tile. */}
      <div className="absolute inset-0">
        {/* After (sharp) — the base. */}
        <img
          src="/upscale-preview.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        {/* Before (blurred) — same image, revealed on the left by the sweeping clip. */}
        <img
          src="/upscale-preview.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="uc-before absolute inset-0 size-full object-cover"
        />
        {/* Divider + handle, riding the clip edge. */}
        <div className="uc-divider absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-white/80 shadow-[0_0_8px_rgba(0,0,0,0.4)]">
          <span className="absolute left-1/2 top-1/2 grid size-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Bottom scrim + label (identical to HoverVideoCard). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82), transparent)' }}
      />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="m-0 font-['Figtree',sans-serif] text-[18px] font-medium leading-tight text-white">
          {label}
        </h3>
        {caption ? (
          <p className="m-0 mt-1.5 font-['Figtree',sans-serif] text-[14px] leading-snug text-white/70">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
