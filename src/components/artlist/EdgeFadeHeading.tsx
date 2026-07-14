/**
 * Section display heading.
 *
 * The reference dims the first and last glyphs of each heading by laying two
 * page-coloured gradient veils over the ends of the text — `::before` fades in from the
 * left, `::after` from the right. It is entirely static: measured at four scroll positions,
 * both veils stay at 132.539px. There is no scroll-driven reveal on that page.
 *
 * Geometry copied from measurement, not guessed: veils are 12% wide (45% from md up),
 * pulled 3% (20% from md up) outside the text box, full height.
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
  const veil =
    // left veil
    "before:absolute before:top-0 before:h-[98%] before:content-[''] " +
    'before:w-[12%] before:-left-[3%] md:before:w-[45%] md:before:-left-[20%] ' +
    'before:bg-gradient-to-r before:from-background before:to-transparent ' +
    // right veil
    "after:absolute after:top-0 after:h-full after:content-[''] " +
    'after:w-[12%] after:-right-[3%] md:after:w-[45%] md:after:-right-[20%] ' +
    'after:bg-gradient-to-l after:from-background after:to-transparent';

  // The wrapper keeps a block formatting context. Without it, a flex parent blockifies the
  // heading, `inline-block` is ignored, and the veils size to the container rather than to
  // the text — swallowing whole words instead of just feathering the ends.
  return (
    <div className="w-full">
      <Tag
        className={`serif-display relative m-0 whitespace-pre-line text-white md:inline-block ${veil} ${className}`.trim()}
      >
        {lines.join('\n')}
      </Tag>
    </div>
  );
}
