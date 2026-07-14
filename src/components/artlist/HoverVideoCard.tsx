import { useEffect, useRef } from 'react';

/**
 * Media card that plays its clip on pointer-enter and rewinds on leave.
 * On coarse pointers there is no hover, so the video autoplays muted inline instead.
 */
export default function HoverVideoCard({
  src,
  kind,
  label,
  caption,
  className = '',
  labelClassName = '',
  poster,
}: {
  src: string;
  kind: 'video' | 'img';
  label: string;
  caption?: string;
  className?: string;
  labelClassName?: string;
  poster?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);

  // No hover on touch, so the card would sit on a frozen poster forever.
  useEffect(() => {
    if (kind !== 'video') return;
    if (!window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    void video.current?.play().catch(() => {});
  }, [kind]);

  const play = () => {
    const el = video.current;
    if (!el) return;
    void el.play().catch(() => {});
  };
  const stop = () => {
    const el = video.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <div
      onPointerEnter={play}
      onPointerLeave={stop}
      className={`group/card relative shrink-0 overflow-hidden rounded-xl bg-greygrey-50 ${className}`}
    >
      {kind === 'video' ? (
        <video
          ref={video}
          className="size-full object-cover transition-transform duration-700 group-hover/card:scale-105"
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={src}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 group-hover/card:scale-105"
        />
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82), transparent)' }}
      />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3
          className={`m-0 font-['Figtree',sans-serif] text-[18px] font-medium leading-tight text-white ${labelClassName}`}
        >
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
