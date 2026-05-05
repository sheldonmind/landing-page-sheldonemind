/**
 * Section 4 — Find your perfect plan (Figma 2316:23808).
 * Frame: inset 50 / py 100; Title + Content mỗi khối 706×340; không gap ngang giữa hai cột.
 * Asset Section4.png 1412×680 = đúng 2× khung Content → aspect 706:340.
 */
import { FigmaPrimaryCtaLink } from './FigmaPrimaryCta';
import { pricingHeadlineStyle } from './visualizeConstants';

/** Khung Content 2316:23813 — chỉ bo góc, không viền CSS (PNG đã có khung trong). */
const MEDIA_FRAME_CLASSES =
  'relative w-full shrink-0 overflow-hidden rounded-[16px]';

/** Figma headline text 674.682×144 hai dòng → max ~675px chiều ngang typography */
export default function PricingTeaserSection() {
  return (
    <section
      id="pricing"
      className="box-border mx-[50px] w-[calc(100%-100px)] max-w-full bg-black py-25 max-lg:mx-[calc(2rem+10px)] max-lg:w-[calc(100%-2*((2rem+10px)))] max-md:mx-[calc(1rem+10px)] max-md:w-[calc(100%-2*((1rem+10px)))] max-md:py-16 max-[220px]:mx-2 max-[220px]:w-[calc(100%-16px)]"
    >
      <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-0">
        <div className="flex min-w-0 flex-col items-start gap-16">
          <h2
            className="m-0 w-full max-w-[675px] pb-[15px] font-['Figtree',sans-serif] text-[clamp(3rem,8vw,5.875rem)] font-medium leading-none tracking-normal max-[220px]:text-[clamp(1.65rem,12vw,2.2rem)]"
            style={pricingHeadlineStyle}
          >
            <span data-nowrap-safe="true" className="block">
              Find your
            </span>
            <span data-nowrap-safe="true" className="block">
              perfect plan.
            </span>
          </h2>
          <FigmaPrimaryCtaLink
            href="/pricing.html"
            text="See Plans"
            className="gap-2 px-4 py-3 text-base md:px-6 md:py-5 md:text-[22px] max-[220px]:px-2.5 max-[220px]:py-2 max-[220px]:text-[12px]"
          />
        </div>

        <div
          className={`${MEDIA_FRAME_CLASSES} aspect-[706/340]`}
          data-node-id="2316:23813"
          data-name="Content"
        >
          <img
            src="/Section4.png"
            alt="Sheldonmind pricing — cinematic city scene."
            className="absolute inset-0 size-full object-cover"
            sizes="(min-width: 1024px) 706px, calc(100vw - (1rem + 10px) * 2)"
            width={1412}
            height={680}
            decoding="async"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black/20"
          />
        </div>
      </div>
    </section>
  );
}
