import { useEffect, useRef } from 'react';

export type VisualizeMediaCardProps = {
  label: string;
  src: string;
  media: 'img' | 'video';
  className?: string;
};

function CornerArrow() {
  return (
    <div
      className="pointer-events-none absolute right-6 bottom-6 z-10 flex size-6 items-center justify-center text-white max-[220px]:right-3 max-[220px]:bottom-3 max-[220px]:size-4"
      aria-hidden
    >
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function VisualizeMediaCard({ label, src, media, className = '' }: VisualizeMediaCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const labelWords = label.split(' ');

  useEffect(() => {
    const el = videoRef.current;
    if (!el || media !== 'video') return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [media, src]);

  const frame =
    'group relative flex min-h-0 w-full overflow-hidden rounded-[16px] border border-white/15 bg-black';

  return (
    <article className={`${frame} ${className}`.trim()}>
      <div className="absolute inset-0">
        {media === 'video' ? (
          <video
            ref={videoRef}
            src={src}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
      <div className="relative z-[1] mt-auto flex w-full min-w-0 items-end p-6 max-[220px]:p-3">
        <p className="flex min-w-0 max-w-[calc(100%-2rem)] flex-wrap gap-x-1 font-['Figtree',sans-serif] text-[20px] font-medium leading-tight tracking-tight text-white max-[220px]:max-w-[calc(100%-1.5rem)] max-[220px]:text-[13px]">
          {labelWords.map((word, index) => (
            <span key={`${word}-${index}`} data-nowrap-safe="true" className="whitespace-nowrap">
              {word}
            </span>
          ))}
        </p>
      </div>
      <CornerArrow />
    </article>
  );
}
