/**
 * Progressive edge blur + dissolve, ported from the app's affiliate page (which in turn
 * lifted it from the home hero carousel's `CardBlur`): four stacked backdrop-blur layers
 * with overlapping gradient masks ramp the blur up toward the `direction` edge with no
 * visible seam, and a final gradient dissolves that same edge into `dissolveColor`.
 * Render it as an overlay directly over the media you want faded (the media must be
 * painted behind it in the same positioned container).
 */
const LAYERS = [
  { blur: 2, from: 48, to: 70 },
  { blur: 4, from: 60, to: 80 },
  { blur: 8, from: 72, to: 90 },
  { blur: 16, from: 82, to: 100 },
];

type EdgeBlurFadeProps = {
  /** CSS gradient direction, pointing from the sharp side toward the blurry/dissolving edge. */
  direction?: string;
  /** Color the blurry edge dissolves into — match the surface the media sits on. */
  dissolveColor: string;
  className?: string;
};

export function EdgeBlurFade({ direction = 'to left', dissolveColor, className = '' }: EdgeBlurFadeProps) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`.trim()}>
      {LAYERS.map((layer) => (
        <div
          key={layer.blur}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: `linear-gradient(${direction}, transparent ${layer.from}%, #000 ${layer.to}%)`,
            WebkitMaskImage: `linear-gradient(${direction}, transparent ${layer.from}%, #000 ${layer.to}%)`,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${direction}, transparent 55%, ${dissolveColor} 92%)`,
        }}
      />
    </div>
  );
}
