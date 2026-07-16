import { useEffect, useRef } from 'react';
import TryNowButton from './TryNowButton';

/**
 * Motion Control showcase (triptych, fits the same square tile as HoverVideoCard):
 *   left   = motion sample clip        (/motion-sample.mp4)
 *   centre = generated result, elevated (/motion-result.mp4)
 *   right  = source character to swap   (/motion-character.webp)
 * Squiggly connectors echo "transfer this motion onto this character".
 * Both clips play on pointer-enter and rewind on leave; on touch (no hover)
 * they autoplay muted inline, matching HoverVideoCard's behaviour.
 */

function Squiggle({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 16"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.65))' }}
    >
      <path
        d="M2 8 Q8 2 14 8 T26 8 T38 8 T46 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MotionControlCard({
  label,
  caption,
  className = '',
}: {
  label: string;
  caption?: string;
  className?: string;
}) {
  const sample = useRef<HTMLVideoElement>(null);
  const result = useRef<HTMLVideoElement>(null);

  // No hover on touch, so the clips would sit on a frozen frame forever.
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    void sample.current?.play().catch(() => {});
    void result.current?.play().catch(() => {});
  }, []);

  const play = () => {
    void sample.current?.play().catch(() => {});
    void result.current?.play().catch(() => {});
  };
  const stop = () => {
    for (const el of [sample.current, result.current]) {
      if (!el) continue;
      el.pause();
      el.currentTime = 0;
    }
  };

  const panel =
    'relative overflow-hidden rounded-lg bg-black ring-1 ring-white/15 shadow-[0_6px_20px_rgba(0,0,0,0.5)]';
  const media = 'size-full object-cover';

  return (
    <div
      onPointerEnter={play}
      onPointerLeave={stop}
      className={`group/card relative shrink-0 overflow-hidden rounded-xl bg-greygrey-50 ${className}`}
    >
      <TryNowButton />
      {/* Triptych — lifts slightly on hover for life. */}
      <div className="absolute inset-0 flex items-center justify-center pb-[24%] transition-transform duration-500 group-hover/card:scale-[1.03]">
        {/* Left — motion sample */}
        <div className={`${panel} w-[24%] aspect-[2/3] translate-y-[5%]`}>
          <video ref={sample} className={media} muted loop playsInline preload="metadata" poster="/motion-sample.jpg" aria-hidden>
            <source src="/motion-sample.mp4" type="video/mp4" />
          </video>
        </div>

        <Squiggle className="h-3 w-[7%] shrink-0 text-white/90" />

        {/* Centre — generated result, raised and larger */}
        <div className={`${panel} z-10 w-[31%] aspect-[2/3] -translate-y-[8%] ring-white/30 shadow-[0_12px_30px_rgba(0,0,0,0.65)]`}>
          <video ref={result} className={media} muted loop playsInline preload="metadata" poster="/motion-result.jpg" aria-hidden>
            <source src="/motion-result.mp4" type="video/mp4" />
          </video>
        </div>

        <Squiggle className="h-3 w-[7%] shrink-0 text-white/90" />

        {/* Right — source character to swap in */}
        <div className={`${panel} w-[24%] aspect-[2/3] translate-y-[5%]`}>
          <img
            src="/motion-character.webp"
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className={media}
          />
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
