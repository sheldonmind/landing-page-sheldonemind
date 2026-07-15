import { FigmaPrimaryCtaLink } from '../../FigmaPrimaryCta';
import GlassBar, { GlassDistortionDefs } from '../GlassBar';
import { GEN_MODELS, MEDIA } from '../tokens';

/**
 * Full-bleed video hero.
 *
 * No entry animation: the reference's page carries no scroll- or load-driven motion at all
 * (measured — `document.getAnimations()` returns 0 with reduced-motion off). Only hover
 * transitions and the FAQ collapse move.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] w-full flex-col items-center justify-center overflow-hidden pt-28 pb-16 max-md:min-h-[80vh] max-md:pt-24">
      <GlassDistortionDefs />

      {/* z-0, not -z-20: a negative z-index paints behind the opaque page background,
          which hid this video entirely. */}
      <video
        className="absolute inset-0 z-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={MEDIA.hero} type="video/mp4" />
      </video>

      {/* Legibility scrim, plus a hard fade into the page background at the seam. */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 40%, rgba(10,10,10,0.85) 88%, #0a0a0a 100%)',
        }}
      />

      <div className="al-container relative z-10 flex flex-col items-center text-center">
        <h1 className="serif-display m-0 text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]">
          Find, Create, Generate.
        </h1>

        <p
          className="mx-auto mt-7 max-w-[62ch] font-['Figtree',sans-serif] text-[18px] leading-[1.45] text-white/85 max-md:text-[16px]"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
        >
          Multi-AI chat, image and video generation with the most powerful models.
          Pay as you go — no subscription required.
        </p>

        <div className="mt-9">
          <FigmaPrimaryCtaLink text="Try Free Now" />
        </div>

        <GlassBar className="mx-auto mt-16 w-full max-w-[360px] md:max-w-[1140px] max-md:mt-12">
          {/* Marquee inside the pill: the glyph row scrolls so any number of models
              fits the fixed-width bar. Tripled for a seamless loop; edges are feathered
              with a transparent mask (not a solid color) so the glass stays see-through.
              Pauses on hover; halts entirely under prefers-reduced-motion via .al-marquee. */}
          <div
            className="group relative w-full overflow-hidden"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
              maskImage:
                'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
            }}
          >
            <ul
              className="al-marquee m-0 flex w-max list-none items-center gap-8 p-0 group-hover:[animation-play-state:paused] max-md:gap-6"
              style={{ animation: 'marquee 32s linear infinite' }}
            >
              {[...GEN_MODELS, ...GEN_MODELS, ...GEN_MODELS].map(({ name, img }, i) => (
                <li
                  key={`${name}-${i}`}
                  aria-hidden={i >= GEN_MODELS.length}
                  className="flex shrink-0 items-center gap-2"
                >
                  {img && (
                    <img
                      src={img}
                      alt=""
                      aria-hidden
                      className="h-5 w-auto shrink-0 object-contain max-md:h-[18px]"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <span className="font-['Figtree',sans-serif] text-[16px] leading-none font-normal whitespace-nowrap text-white max-md:text-[14px]">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </GlassBar>
      </div>
    </section>
  );
}
