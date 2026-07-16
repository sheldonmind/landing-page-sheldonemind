import { FigmaPrimaryCtaLink } from '../../FigmaPrimaryCta';
import { MEDIA } from '../tokens';

/**
 * Mirrors artlist's "Artlist Studio" beat: a NOW-LIVE eyebrow, a luminous glowing
 * wordmark with a comet streak + BETA badge, subcopy + CTA, then the layered product
 * mock — a centered render card with a Directing panel on the left, a Chat panel on
 * the right, a filmstrip, and a shot library. This is the app's Drama Studio.
 */
export default function DramaStudio() {
  return (
    <section id="drama-studio" className="al-section relative w-full overflow-hidden">
      <div className="al-container relative z-10 flex flex-col items-center text-center">
        {/* Glowing wordmark + comet streak. */}
        <div className="relative inline-block">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.22), transparent 70%)' }}
          />
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
        </div>

        <p className="mx-auto mt-6 max-w-[58ch] font-['Figtree',sans-serif] text-[18px] leading-[1.45] text-greygrey-800 max-md:text-[16px]">
          Turn a script into a full story film — direct every scene, character, and
          beat with cinematic control.
        </p>

        <div className="mt-8">
          <FigmaPrimaryCtaLink text="Check it out" />
        </div>
      </div>

      {/* Layered product mock. */}
      <div className="al-container relative z-10 mt-16 max-md:mt-12">
        <div className="relative pb-14 max-lg:pb-0">
          {/* Render card. */}
          <div className="relative ml-auto w-[84%] overflow-hidden rounded-2xl border border-white/10 max-lg:w-full">
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

            {/* Darkens the sides + bottom so the floating panels stay legible over the footage. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'linear-gradient(105deg, rgba(0,0,0,0.55) 0%, transparent 40%)',
              }}
            />

          </div>

          {/* Shot library bar — straddles the render card's bottom edge (half in, half out), transparent. */}
          <div className="absolute bottom-0 right-3 hidden w-[calc(84%-1.5rem)] rounded-xl border border-white/15 bg-transparent px-4 py-3 backdrop-blur-md lg:block">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-['Figtree',sans-serif] text-[12px] text-white/80">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 7a1 1 0 0 1 1-1h5l2 2h8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                Folder 1
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white/50"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span className="rounded-md border border-white/20 px-2.5 py-1 font-['Figtree',sans-serif] text-[11px] text-white/70">+ New Folder</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid size-7 place-items-center rounded-full bg-white/10 text-white/80">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
              </span>
              <span className="h-12 w-20 overflow-hidden rounded-md border border-white/20">
                <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="none" aria-hidden>
                  <source src={MEDIA.drama} type="video/mp4" />
                </video>
              </span>
              <span className="grid h-12 w-24 place-items-center rounded-md border border-dashed border-white/25 font-['Figtree',sans-serif] text-[11px] text-white/60">
                + New Clip
              </span>
            </div>
          </div>

          {/* Chat panel — moved to the left (replacing the Directing panel), same size, overlaps the render card's left edge. */}
          <div className="absolute left-0 top-10 hidden h-[452px] w-[336px] flex-col overflow-hidden rounded-2xl border border-white/12 bg-black/60 shadow-[0_24px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:flex">
            {/* Header. */}
            <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] px-4 py-3">
              <span className="truncate font-['Figtree',sans-serif] text-[13px] font-medium text-white">create for me a cartoon film</span>
              <div className="flex shrink-0 items-center gap-2.5 text-white/45">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 8v4l2.5 1.5M3.5 12a8.5 8.5 0 1 0 2.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 3v3.5H9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </div>
            </div>

            {/* Messages. */}
            <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-4 py-4 font-['Figtree',sans-serif] text-[12px] leading-snug">
              <div className="max-w-[80%] self-end rounded-2xl bg-white/90 px-3 py-2 text-[#0d0d0d]">create for me a cartoon film</div>
              <div className="max-w-[88%] self-start rounded-2xl bg-white/[0.06] px-3 py-2 text-white/80">
                Please provide me with a short summary or idea for your cartoon film.
              </div>
              <div className="max-w-[80%] self-end rounded-2xl bg-white/90 px-3 py-2 text-[#0d0d0d]">story about Tom and Jerry</div>
              <div className="max-w-[92%] self-start rounded-2xl bg-white/[0.06] px-3 py-2.5 text-white/80">
                <p className="m-0">Story saved as “Tom and Jerry Adventures”.</p>
                <p className="m-0 mt-2 font-medium text-white">🎬 Next steps</p>
                <p className="m-0 mt-1 text-white/55">1. Regenerate Story</p>
                <p className="m-0 text-white/55">2. Next: Create Characters</p>
                <p className="m-0 mt-1.5 text-[#7fdc9a]">✓ Created story</p>
              </div>
            </div>

            {/* Composer. */}
            <div className="m-3 rounded-xl border border-white/12 bg-white/[0.04] p-3">
              <span className="font-['Figtree',sans-serif] text-[13px] text-white/40">Type a message…</span>
              <div className="mt-5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full bg-white/8 px-2 py-1 font-['Figtree',sans-serif] text-[11px] text-white/70">
                  <span className="size-3.5 rounded-full bg-gradient-to-br from-[#7EBDEA] to-[#0472EF]" />
                  GPT-4o Mini
                </span>
                <div className="flex items-center gap-2">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white/45"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 15l5-4 4 3 3-2 6 5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="8.5" cy="9" r="1.4" fill="currentColor" /></svg>
                  <span className="grid size-7 place-items-center rounded-full bg-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 19V5M5 12l7-7 7 7" stroke="#0d0d0d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
