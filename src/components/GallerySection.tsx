/**
 * Section 3 — Explore stunning AI art (Figma 2316:23781).
 * Content node 2316:23790 — section dùng margin ngang + width calc (lề ~60px desktop @16px root).
 */
import { FigmaPrimaryCtaLink } from './FigmaPrimaryCta';
import { galleryHeadlineStyle } from './visualizeConstants';

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="box-border mx-[50px] w-[calc(100%-100px)] max-w-full bg-black pb-25 pt-12.5 max-lg:mx-[calc(2rem+10px)] max-lg:w-[calc(100%-2*((2rem+10px)))] max-md:mx-[calc(1rem+10px)] max-md:w-[calc(100%-2*((1rem+10px)))] max-md:py-16 max-[220px]:mx-2 max-[220px]:w-[calc(100%-16px)]"
    >
      <div className="flex w-full flex-col gap-[50px]">
        <div className="flex w-full flex-col items-center gap-16">
          <div className="flex w-full flex-col items-center gap-8">
            <h2 className="m-0 text-center font-['Figtree',sans-serif] text-[clamp(2.125rem,5.5vw,4.5rem)] font-medium leading-none tracking-normal" style={galleryHeadlineStyle}>
              <span className="block">Explore stunning</span>
              <span className="block">AI art.</span>
            </h2>
            <p className="m-0 w-full max-w-[474px] text-center font-['Figtree',sans-serif] text-base font-normal leading-[1.2] text-greygrey-800 md:text-lg lg:text-[18px]">
              Choose model per conversation, token-by-token streaming, credit deduction by model and token
            </p>
          </div>

          <FigmaPrimaryCtaLink text="Explore Now" />
        </div>

        {/* Node 2316:23790 — trong cùng lề section để đều với các section khác */}
        <div className="relative w-full overflow-hidden">
          <img
            src="/Content.png"
            alt="Explore stunning AI art — gallery preview"
            className="block h-auto w-full object-cover"
            width={1412}
            height={794}
            sizes="(min-width: 1512px) 1412px, calc(100vw - (3.125rem + 10px) * 2)"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
