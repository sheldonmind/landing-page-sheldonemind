/**
 * Figma card 2316:23776 + Logo Slider — Warp 2316:23780.
 */
import { aiModelsHeadlineStyle } from './visualizeConstants';

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
  'h-auto max-h-12 w-auto shrink-0 md:max-h-14 lg:max-h-[3.5rem]';

export default function AiModelsSection() {
  return (
    <section className="box-border mx-[50px] w-[calc(100%-100px)] max-w-full bg-black pb-16 pt-0 md:mx-[50px] md:w-[calc(100%-100px)] md:pb-20 lg:mx-[50px] lg:w-[calc(100%-100px)] xl:mx-[50px] xl:w-[calc(100%-100px)] xl:pb-12 max-md:mx-[calc(1rem+10px)] max-md:w-[calc(100%-2*((1rem+10px)))] max-[220px]:mx-2 max-[220px]:w-[calc(100%-16px)]">
      <div
        className="flex w-full flex-col gap-14 rounded-3xl p-10 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-10 lg:pl-14 lg:pr-10 xl:gap-12 xl:pb-12 xl:pl-[5.25rem] xl:pr-12 xl:pt-8"
        style={{
          border: '2px solid transparent',
          backgroundImage:
            'linear-gradient(#000, #000), linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.15))',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        <div className="flex w-full shrink-0 flex-col gap-6 lg:w-[364px] lg:max-w-[364px]">
          <h2
            className="m-0 font-['Figtree',sans-serif] text-[36px] font-medium leading-[1.1] tracking-tight max-md:text-[32px] max-[220px]:text-[26px]"
            style={aiModelsHeadlineStyle}
          >
            Feature with the
            <br />
            best AI models.
          </h2>
          <p className="m-0 font-['Figtree',sans-serif] text-[16px] font-normal leading-[1.4] text-greygrey-800">
            Access the latest AI models for chat, image &amp; video — all in one platform
          </p>
        </div>

        <div
          className="flex min-w-0 flex-1 flex-col items-center gap-3 lg:items-end"
          data-node-id="2316:23780"
          data-name="Logo Slider - Warp"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap lg:justify-end">
            {WARP_ROW1.map((src) => (
              <img key={src} src={src} alt="" className={warpImgClass} decoding="async" />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:flex-nowrap lg:justify-end">
            {WARP_ROW2.map((src) => (
              <img key={src} src={src} alt="" className={warpImgClass} decoding="async" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
