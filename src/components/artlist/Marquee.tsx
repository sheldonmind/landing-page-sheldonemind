/**
 * Continuous logo strip. Pauses on hover, like the reference's brand row.
 * Flat wordmarks — monochrome glyph plus name, no chips or borders.
 */
import type { ModelBrand } from './tokens';

export default function Marquee({
  items,
  speedSeconds = 45,
  reverse = false,
  size = 'lg',
}: {
  items: readonly ModelBrand[];
  speedSeconds?: number;
  /** Runs right→left by default; the second row reverses so the two don't read as one belt. */
  reverse?: boolean;
  /** 'sm' is the generation row — more brands, so they ride a notch smaller than chat. */
  size?: 'lg' | 'sm';
}) {
  const tripled = [...items, ...items, ...items];
  const glyph = size === 'lg' ? 'h-7 max-md:h-6' : 'h-5 max-md:h-[18px]';
  const type = size === 'lg' ? 'text-[20px] max-md:text-[17px]' : 'text-[16px] max-md:text-[14px]';
  return (
    <div className="group relative w-full overflow-hidden">
      {/* Feather both ends so logos dissolve rather than clip at the edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, #0a0a0a 0%, transparent 10%, transparent 90%, #0a0a0a 100%)',
        }}
      />
      <div
        className={`al-marquee flex w-max items-center group-hover:[animation-play-state:paused] ${
          size === 'lg' ? 'gap-16 max-md:gap-10' : 'gap-12 max-md:gap-8'
        }`}
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speedSeconds}s linear infinite`,
        }}
      >
        {tripled.map(({ name, icon }, i) => {
          const duplicate = i >= items.length;
          return (
            <div
              key={`${name}-${i}`}
              aria-hidden={duplicate}
              className="flex shrink-0 items-center gap-3 opacity-45 transition-opacity duration-300 hover:opacity-90"
            >
              {/* Z-Image and HappyHorse ship without a monochrome glyph — wordmark only. */}
              {icon ? (
                <img
                  src={icon}
                  alt=""
                  aria-hidden
                  className={`${glyph} w-auto object-contain`}
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
              <span
                className={`font-['Figtree',sans-serif] ${type} font-medium whitespace-nowrap text-white`}
              >
                {duplicate ? <span aria-hidden>{name}</span> : name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
