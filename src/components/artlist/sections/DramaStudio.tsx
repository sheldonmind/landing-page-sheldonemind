import { FigmaPrimaryCtaLink } from '../../FigmaPrimaryCta';
import { MEDIA } from '../tokens';

/**
 * Mirrors artlist's "Artlist Studio" beat: a NOW-LIVE eyebrow, a luminous glowing
 * wordmark with a comet streak + BETA badge, subcopy, a CTA paired with a tiny UI
 * thumbnail, then a wide cinematic render band. This is the app's Drama Studio,
 * sitting directly above the Video Studio section.
 */
export default function DramaStudio() {
  return (
    <section id="drama-studio" className="al-section relative w-full overflow-hidden">
      <div className="al-container relative z-10 flex flex-col items-center text-center">
        <p className="section-eyebrow m-0 tracking-[0.42em] text-white/45 uppercase">Now live</p>

        {/* Glowing wordmark + comet streak + BETA badge. */}
        <div className="relative mt-4 inline-block">
          {/* Soft white halo behind the glyphs. */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.22), transparent 70%)' }}
          />
          {/* Comet streak arcing into the top-right of the wordmark. */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -top-12 left-1/2 h-24 w-[560px] max-w-[92vw] -translate-x-1/2 overflow-visible"
            viewBox="0 0 560 100"
            fill="none"
          >
            <defs>
              <linearGradient id="dramaComet" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="0" />
                <stop offset="1" stopColor="#fff" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            <path d="M60 26C210 8 380 34 452 82" stroke="url(#dramaComet)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="452" cy="82" r="9" fill="#fff" opacity="0.3" />
            <circle cx="452" cy="82" r="3.5" fill="#fff" />
          </svg>

          <h2
            className="sans-display m-0 text-white"
            style={{ textShadow: '0 2px 22px rgba(255,255,255,0.4), 0 0 64px rgba(255,255,255,0.14)' }}
          >
            Drama Studio
          </h2>
          <span className="absolute -right-2 top-0 translate-x-full rounded-full border border-white/25 px-2 py-0.5 font-['Figtree',sans-serif] text-[10px] font-medium tracking-[0.14em] text-white/70 max-md:hidden">
            BETA
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-[58ch] font-['Figtree',sans-serif] text-[18px] leading-[1.45] text-greygrey-800 max-md:text-[16px]">
          Turn a script into a full story film — direct every scene, character, and
          beat with cinematic control.
        </p>

        {/* CTA paired with a tiny render-timeline thumbnail, as in the reference. */}
        <div className="mt-8 flex items-center gap-4">
          <div className="hidden h-[54px] w-[80px] shrink-0 overflow-hidden rounded-lg border border-white/12 bg-black/60 p-2 backdrop-blur-md sm:block">
            <div className="h-1.5 w-8 rounded bg-white/25" />
            <div className="mt-1.5 flex gap-1">
              <div className="h-6 flex-1 rounded bg-white/10" />
              <div className="h-6 w-2.5 rounded bg-white/20" />
            </div>
          </div>
          <FigmaPrimaryCtaLink text="Check it out" />
        </div>
      </div>

      {/* Wide cinematic render band below the lockup. */}
      <div className="al-container relative z-10 mt-16 max-md:mt-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <video
            className="block aspect-[16/9] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
          >
            <source src={MEDIA.drama} type="video/mp4" />
          </video>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.55), transparent 45%)' }}
          />
        </div>
      </div>
    </section>
  );
}
