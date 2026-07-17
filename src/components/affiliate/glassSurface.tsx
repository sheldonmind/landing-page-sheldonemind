/**
 * Shared visual recipe for the dark "glass" surfaces on the affiliate page, matching the
 * See Plans button from sheldonmind.com: an opaque dark navy base lit by a blurred blue
 * radial glow (hard-light blend), finished with a soft white top highlight and a cyan
 * rim-light on the lower-right edge.
 *
 * Ported from SeldonMind/frontend/src/pages/AffiliatePage/components/glassSurface.tsx.
 * The app's `cn` helper has no counterpart here, so classes are composed inline.
 */

/** Blue radial glow gradient — set as the CSS background of the blurred blob layer. */
export const GLASS_GLOW_BACKGROUND =
  'radial-gradient(44.88% 44.88% at 50.29% 57.43%, #0472ef 0%, #7ebdea 73%, #d3f2e7 100%)';

/** Glassy inset edges: soft white top highlight + cyan lower-right rim-light. */
export const GLASS_EDGE_SHADOW =
  'shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(160,186,210,0.18),inset_-2px_-1px_1px_0px_#32eeff]';

type GlassSurfaceLayersProps = {
  /**
   * Position/size of the blurred blue glow blob, e.g.
   * `"-bottom-[150%] -right-[25%] h-[320%] w-[70%]"`. Tune per surface so the glow pools
   * where you want it (usually toward the lower-right, like the See Plans button).
   */
  glowClassName: string;
};

/**
 * The two decorative layers — a blurred blue radial glow (hard-light blend) and the glassy
 * edge highlight. Drop these in as the first children of a `relative overflow-hidden
 * bg-[#0a0e17]` element: they inherit its radius, and the real content should sit above
 * them with `relative z-10`.
 */
export function GlassSurfaceLayers({ glowClassName }: GlassSurfaceLayersProps) {
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <span
          className={`absolute rounded-full blur-3xl ${glowClassName}`}
          style={{ background: GLASS_GLOW_BACKGROUND, mixBlendMode: 'hard-light' }}
        />
      </span>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-[inherit] ${GLASS_EDGE_SHADOW}`}
      />
    </>
  );
}
