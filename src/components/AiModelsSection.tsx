/**
 * Figma card 2316:23776 + Logo Slider — Warp 2316:23780.
 */

const TITLE_GRADIENT = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364 80" preserveAspectRatio="none"><defs><radialGradient id="ai" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(28.712 1.6416 -26.091 10.403 76.881 63.584)"><stop stop-color="rgba(255,255,255,0.4)" offset="0"/><stop stop-color="rgba(255,255,255,0.64519)" offset="0.40865"/><stop stop-color="rgba(255,255,255,1)" offset="1"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#ai)"/></svg>',
)}")`;

const headlineStyle = {
  backgroundImage: TITLE_GRADIENT,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat' as const,
  WebkitBackgroundClip: 'text' as const,
  backgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  color: 'transparent' as const,
};

const WARP_ROW1 = [
  '/Nano%20Banana-%20Warp.png',
  '/Kling-warp.png',
  '/Seedance-warp.png',
  '/Veo-warp.png',
  '/Lyria-warp.png',
] as const;

const WARP_ROW2 = [
  '/Sora-warp.png',
  '/ElevenLabs-warp.png',
  '/Flux-warp.png',
  '/Luma-warp.png',
] as const;

const warpImgClass =
  'h-auto max-h-[3.5rem] w-auto shrink-0 sm:max-h-16 md:max-h-[4.25rem] lg:max-h-20';

export default function AiModelsSection() {
  return (
    <section className="w-full bg-black px-4 pb-16 pt-0 md:px-6 md:pb-20 lg:px-8 xl:px-10.5 xl:pb-25">
      <div
        className="flex w-full flex-col gap-14 rounded-3xl p-10 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-14 lg:pl-14 lg:pr-0 xl:gap-16 xl:pb-[5.25rem] xl:pl-[5.25rem] xl:pr-0 xl:pt-[5.25rem]"
        style={{
          border: '2px solid transparent',
          backgroundImage:
            'linear-gradient(#000, #000), linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.15))',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        <div className="flex w-full max-w-[min(100%,34rem)] shrink-0 flex-col gap-8 md:gap-10 lg:max-w-[min(100%,30rem)]">
          <h2
            className="m-0 font-['Figtree',sans-serif] text-[clamp(2.125rem,5vw,3rem)] font-medium leading-[1.08] tracking-tight md:text-[clamp(2.25rem,4.5vw,3.25rem)]"
            style={headlineStyle}
          >
            Feature with the
            <br />
            best AI models.
          </h2>
          <p className="m-0 font-['Figtree',sans-serif] text-lg font-normal leading-[1.5] text-greygrey-800 md:text-xl lg:text-2xl">
            Access the latest AI models for chat, image &amp; video — all in one platform
          </p>
        </div>

        <div
          className="flex min-w-0 w-full flex-1 flex-col gap-3 self-stretch lg:min-h-0 lg:min-w-0 lg:justify-center"
          data-node-id="2316:23780"
          data-name="Logo Slider - Warp"
        >
          <div className="flex w-full min-w-0 justify-start overflow-x-auto scrollbar-hide md:justify-end md:overflow-x-hidden">
            <div className="flex w-max shrink-0 flex-nowrap items-center gap-4 md:translate-x-[65px]">
              {WARP_ROW1.map((src) => (
                <img key={src} src={src} alt="" className={warpImgClass} decoding="async" />
              ))}
            </div>
          </div>
          <div className="flex w-full min-w-0 justify-start overflow-x-auto scrollbar-hide pl-0 md:-translate-x-[100px] md:justify-end md:pl-[clamp(2.5rem,12vw,10rem)] xl:pl-[clamp(3rem,11vw,11rem)]">
            <div className="flex w-max shrink-0 flex-nowrap items-center gap-3">
              {WARP_ROW2.map((src) => (
                <img key={src} src={src} alt="" className={warpImgClass} decoding="async" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
