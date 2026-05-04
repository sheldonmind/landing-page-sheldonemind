import { visualCardFrameStyle } from './visualizeConstants';

function PlayBadge() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-2 flex items-center justify-center"
      aria-hidden
    >
      <span className="flex h-13 w-13 items-center justify-center rounded-full bg-white shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-0.5 text-black">
          <path d="M9 6.5v11l9-5.5L9 6.5z" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}

export default function VisualizeMediaCard({
  label,
  src,
  media,
  centerPlay = false,
  className = '',
}: {
  label: string;
  src: string;
  media: 'video' | 'img';
  centerPlay?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative min-h-75 overflow-hidden rounded-xl bg-black ${className}`}
      style={visualCardFrameStyle}
    >
      {media === 'video' ? (
        <video
          src={src}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          aria-hidden
        />
      ) : (
        <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
      {centerPlay ? <PlayBadge /> : null}
      <div className="absolute inset-x-0 bottom-0 z-3 flex items-end justify-between gap-3 p-5 md:p-6">
        <span className="font-['Figtree',sans-serif] text-lg font-medium leading-[1.2] text-white md:text-xl">
          {label}
        </span>
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-[2px]"
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
