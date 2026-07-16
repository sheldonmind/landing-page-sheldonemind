/**
 * Continuous logo strip. Pauses on hover, like the reference's brand row.
 * Flat wordmarks — monochrome glyph plus name, no chips or borders.
 */
export default function Marquee({
  items,
  speedSeconds = 45,
}: {
  items: readonly { name: string; icon: string }[];
  speedSeconds?: number;
}) {
  const tripled = [...items, ...items, ...items];
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
        className="al-marquee flex w-max items-center gap-16 group-hover:[animation-play-state:paused] max-md:gap-10"
        style={{ animation: `marquee ${speedSeconds}s linear infinite` }}
      >
        {tripled.map(({ name, icon }, i) => {
          const duplicate = i >= items.length;
          return (
            <div
              key={`${name}-${i}`}
              aria-hidden={duplicate}
              className="flex shrink-0 items-center gap-3 opacity-45 transition-opacity duration-300 hover:opacity-90"
            >
              <img src={icon} alt="" aria-hidden className="h-7 w-auto object-contain max-md:h-6" loading="lazy" decoding="async" />
              <span className="font-['Figtree',sans-serif] text-[20px] font-medium whitespace-nowrap text-white max-md:text-[17px]">
                {duplicate ? <span aria-hidden>{name}</span> : name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
