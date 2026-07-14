import { SecondaryCtaLink } from '../SecondaryCta';
import { ACCENT, MEDIA } from '../tokens';

/**
 * The one section that breaks to sans display type, matching the reference's
 * "Studio" beat — a distinct product surface rather than another feature block.
 */
export default function Studio() {
  return (
    <section id="studio" className="al-section relative w-full overflow-hidden">
      <div className="al-container flex flex-col items-center text-center">
        <div>
          <p className="section-eyebrow m-0 tracking-[0.28em] text-white/45 uppercase">Coming soon</p>
        </div>

        <div className="relative mt-5">
          {/* Glow sits behind the glyphs, exactly like the reference's Studio lockup. */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: `radial-gradient(closest-side, ${ACCENT.blue}99, transparent 72%)` }}
          />
          {/* No "BETA" badge here — the eyebrow already says Coming soon, and the two together
              would claim the product is simultaneously shipped and unshipped. */}
          <h2 className="sans-display m-0 text-white">Video Studio</h2>
        </div>

        <div>
          <p className="mx-auto mt-6 max-w-[58ch] font-['Figtree',sans-serif] text-[18px] leading-[1.45] text-greygrey-800 max-md:text-[16px]">
            Text-to-video, image-to-video, and video-to-video with full creative control
            over every stage of the shot.
          </p>
        </div>

        <div className="mt-8">
          <SecondaryCtaLink href="#pricing" text="Check it out" />
        </div>
      </div>

      {/* Layered UI mock: a directing panel floating over the render surface. */}
      <div>
        <div className="al-container relative mt-16 max-md:mt-12">
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
              <source src={MEDIA.motion} type="video/mp4" />
            </video>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.85), transparent 55%)' }}
            />

            <div className="absolute left-6 top-1/2 hidden w-[300px] -translate-y-1/2 rounded-xl border border-white/12 bg-black/60 p-4 backdrop-blur-md md:block">
              <div className="flex gap-1.5">
                {['Framing', 'Directing', 'Audio'].map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-md px-2.5 py-1 font-['Figtree',sans-serif] text-[11px] ${
                      i === 1 ? 'bg-white/12 text-white' : 'text-white/45'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <p className="m-0 mt-4 font-['Figtree',sans-serif] text-[13px] leading-snug text-white/70">
                Camera orbits the subject, slow push in
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-['Figtree',sans-serif] text-[11px] text-white/35">6 sec · 1 video</span>
                <span className="grid size-7 place-items-center rounded-full bg-white/10">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
