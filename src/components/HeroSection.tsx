/** Hero Section — Figma 2316:23438 (sizes); custom curved clip via `.hero-media-frame` unchanged */

const headlineGradientSvgUrl =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg viewBox="0 0 574 288" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(45.277 5.9098 -41.143 37.451 121.23 228.9)">
          <stop stop-color="rgba(255,255,255,0.4)" offset="0"/>
          <stop stop-color="rgba(255,255,255,0.64519)" offset="0.40865"/>
          <stop stop-color="rgba(255,255,255,1)" offset="1"/>
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#grad)"/>
    </svg>`
  );

/** Background loop — `public/Snowboarder Rotates Video.mp4` */
const HERO_BACKGROUND_VIDEO = '/Snowboarder%20Rotates%20Video.mp4';

/** Figma: card 1512×875; media layer 1412×793.695 (node 2316:26126). */
const HERO_CARD_W = 1512;
const HERO_CARD_H = 875;
const HERO_MEDIA_W = 1412;
const HERO_MEDIA_H = 793.695;

/** Figma 2316:26133 → 2316:26135 (Group 5) — gradient arrow paths from design export. */
function HeroFigmaSendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={12}
      height={15}
      viewBox="0 0 15 18.0002"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7.5013 2.25016V16.5002"
        stroke="url(#hero-figma-send-stem)"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M1.5 7.5L7.5 1.5L13.5 7.5"
        stroke="url(#hero-figma-send-head)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="hero-figma-send-stem"
          x1={7.5013}
          y1={-2.86137}
          x2={13.6173}
          y2={16.6683}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.7} />
          <stop offset={0.307692} stopColor="#2EB67D" stopOpacity={0.5} />
          <stop offset={0.692308} stopColor="#32EEFF" stopOpacity={0.7} />
          <stop offset={1} stopColor="#2F82FF" />
        </linearGradient>
        <linearGradient
          id="hero-figma-send-head"
          x1={1.5}
          y1={4.5}
          x2={15.864}
          y2={4.55234}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.7} />
          <stop offset={0.307692} stopColor="#2EB67D" stopOpacity={0.5} />
          <stop offset={0.692308} stopColor="#32EEFF" stopOpacity={0.7} />
          <stop offset={1} stopColor="#2F82FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="box-border mx-[50px] flex w-[calc(100%-100px)] max-w-full flex-col items-center pb-8 max-md:pb-6 max-lg:mx-[calc(2rem+10px)] max-lg:w-[calc(100%-2*((2rem+10px)))] max-md:mx-[calc(1rem+10px)] max-md:w-[calc(100%-2*((1rem+10px)))] max-[220px]:mx-2 max-[220px]:w-[calc(100%-16px)]">
      {/* 2316:26125 — full width frame 1512×875, border 1px #6C6C6C, radius 16 */}
      <div
        className="hero-card-frame relative mx-auto w-full overflow-hidden rounded-2xl border border-solid border-[#6C6C6C] bg-black"
        style={{ containerType: 'inline-size' }}
      >
        {/* 2316:26126 — media 1412×793.695; keep custom `.hero-media-frame` curvature */}
        <div
          className="hero-media-frame absolute left-1/2 top-[calc(50%-0.35px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          style={{
            width: `${(HERO_MEDIA_W / HERO_CARD_W) * 100}%`,
            height: `${(HERO_MEDIA_H / HERO_CARD_H) * 100}%`,
          }}
        >
          <video
            className="block h-full w-full object-cover object-[center_32%]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          >
            <source src={HERO_BACKGROUND_VIDEO} type="video/mp4" />
          </video>
          {/* Keep hero content bounded inside media area — Figma 40px gap between text & search */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-[clamp(10px,2.6vw,42px)] py-[clamp(14px,4.8%,58px)]">
            <div className="flex w-full max-w-[878px] flex-col items-center gap-10 max-md:gap-8 max-sm:gap-6">
              <div className="flex w-full flex-col items-center gap-7 max-sm:gap-5">
                <div
                  className="m-0 text-center font-['Figtree',sans-serif] text-[clamp(34px,5.6vw,72px)] font-medium leading-[0.98] whitespace-pre-wrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] max-sm:text-[clamp(22px,9.2vw,34px)]"
                  style={{
                    backgroundImage: `url("${headlineGradientSvgUrl}")`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    maxWidth: 'min(574px, 96%)',
                  }}
                >
                  <span className="block leading-none">Find,</span>
                  <span className="block leading-none">Create, Generate.</span>
                  <span className="block leading-none">{`Your AI Journey `}</span>
                  <span className="block leading-none">Starts Here.</span>
                </div>
                <div className="w-full max-w-[735.646px] text-center font-['Figtree',sans-serif] text-[18px] font-normal leading-[1.2] text-greygrey-800 max-md:text-base max-md:text-white max-sm:text-[15px]" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>
                  <p className="m-0 leading-[1.2]">Multi‑AI chat, image &amp; video generation with the most powerful models.</p>
                  <p className="m-0 mt-0 leading-[1.2]">Pay as you go — no subscription required.</p>
                </div>
              </div>

              {/* Figma 2316:26128 — 833.997×178, p-24, 60px gap label→actions; 40px gap to headline is outer gap-10 */}
              <div
                role="region"
                aria-label="AI model picker"
                data-hero-search-panel
                className="flex w-full max-w-[833.997px] min-h-[178px] flex-col items-stretch gap-[60px] overflow-hidden rounded-2xl border border-solid border-[#6C6C6C] bg-black p-6 max-md:min-h-[152px] max-md:gap-10 max-md:p-4 max-sm:min-h-[136px] max-sm:gap-8 max-sm:p-3"
              >
              <p className="m-0 min-h-[1.2em] w-full font-['Figtree',sans-serif] text-[18px] font-normal leading-[1.2] text-[#b5b5b5] max-md:text-base max-sm:text-sm">
                Choose your best AI model ...
              </p>
              <div className="flex h-12 w-full shrink-0 items-center justify-between gap-4 max-sm:h-10">
                <button
                  type="button"
                  className="box-border flex size-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[30px] border border-solid border-white p-3 max-sm:size-10 max-sm:p-2.5"
                  aria-label="Add"
                >
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden className="max-sm:h-5 max-sm:w-5">
                    <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="relative box-border flex size-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[30px] border border-solid border-white/20 p-3 max-sm:size-10 max-sm:p-2.5"
                  aria-label="Send"
                >
                  <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[rgba(0,0,0,0)]" />
                  <HeroFigmaSendIcon className="relative z-1 max-sm:h-3 max-sm:w-2.5" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[inherit] [box-shadow:inset_-0.765px_-0.765px_0.765px_0_#32EEFF]"
                  />
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
