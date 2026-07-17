/**
 * Section display heading.
 *
 * The reference dims the first and last glyphs of each heading, and it is entirely static:
 * measured at four scroll positions the fade never moves. There is no scroll-driven reveal
 * on that page.
 *
 * The reference paints two page-coloured veils over the ends of the text. We fade the text
 * itself instead (`.edge-fade-heading`, which also carries the geometry) — see the comment
 * there: an opaque veil is only invisible over a flat background, and some sections sit on
 * an accent glow.
 */
export default function EdgeFadeHeading({
  lines,
  as: Tag = 'h2',
  className = '',
}: {
  lines: string[];
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}) {
  // The wrapper keeps a block formatting context. Without it, a flex parent blockifies the
  // heading, `inline-block` is ignored, and the fade sizes to the container rather than to
  // the text — swallowing whole words instead of just feathering the ends.
  return (
    <div className="w-full">
      <Tag
        className={`serif-display edge-fade-heading relative m-0 whitespace-pre-line text-white md:inline-block ${className}`.trim()}
      >
        {lines.join('\n')}
      </Tag>
    </div>
  );
}
