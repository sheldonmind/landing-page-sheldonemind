import EdgeFadeHeading from '../EdgeFadeHeading';
import { FigmaPrimaryCtaLink } from '../../FigmaPrimaryCta';
import { MEDIA } from '../tokens';

/**
 * Layout mirrors artlist.io's "Find your perfect plan" block, measured live:
 *  - row is flex/justify-between with the text indented lg:ml 8.333% (one 12th)
 *  - image is a fixed clamp size (≈350→491px wide, ≈445→618px tall), square
 *    corners, object-cover, bleeding to the right edge of the 1440 cap.
 * Buttons stay the app's own CTAs; copy reflects the real Pro/Business plans.
 */
export default function Pricing() {
  return (
    <section id="pricing" className="al-section relative w-full overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex items-center justify-between gap-20 pl-6 pr-6 md:pl-10 md:pr-10 lg:pr-0 lg:pl-[8.333333%] max-lg:flex-col max-lg:items-start max-lg:gap-12">
          {/* LEFT — heading + the two plan columns */}
          <div className="flex w-full flex-col gap-12 lg:gap-[clamp(3rem,3rem+(100vw-1024px)*0.0357142857,5rem)]">
            <EdgeFadeHeading lines={['Find your', 'perfect plan.']} />

            <div className="flex flex-col gap-14 lg:flex-row lg:gap-10 lg:items-stretch">
              {/* Pro */}
              <div className="flex flex-1 flex-col">
                <h3 className="m-0 font-['Figtree',sans-serif] text-[32px] font-normal leading-tight text-white max-md:text-[26px]">
                  Pro
                </h3>
                <p className="mt-5 max-w-[42ch] font-['Figtree',sans-serif] text-[16px] leading-[1.55] text-greygrey-800">
                  Start free, then go Pro for 10,000 credits a month, every AI feature, and
                  complimentary access to all GPT, Gemini, and Claude models.
                </p>
                <div className="mt-8 lg:mt-auto lg:pt-8">
                  <FigmaPrimaryCtaLink href="/pricing.html" text="See Plans" size="sm" />
                </div>
              </div>

              {/* Business */}
              <div className="flex flex-1 flex-col">
                <h3 className="m-0 font-['Figtree',sans-serif] text-[32px] font-normal leading-tight text-white max-md:text-[26px]">
                  Business
                </h3>
                <p className="mt-5 max-w-[42ch] font-['Figtree',sans-serif] text-[16px] leading-[1.55] text-greygrey-800">
                  For teams that ship together — 16,000 credits a month, member management, and
                  shared collaboration across your whole workspace.
                </p>
                <div className="mt-8 lg:mt-auto lg:pt-8">
                  <FigmaPrimaryCtaLink href="/pricing.html" text="See Plans" size="sm" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — fixed-size image, square corners, flush to the right edge */}
          <div className="relative hidden shrink-0 lg:block w-[clamp(21.875rem,21.875rem+(100vw-1024px)*0.1580357143,30.725rem)] h-[clamp(27.816rem,27.816rem+(100vw-1024px)*0.1930178571,38.625rem)]">
            <img
              src={MEDIA.pricing}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover"
            />
            {/* Feathers all four edges into the app background so no hard border shows. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: 'inset 0 0 46px 26px #0a0a0a' }}
            />
          </div>
        </div>

        <p className="mt-14 pl-6 md:pl-10 lg:pl-[8.333333%] font-['Figtree',sans-serif] text-[15px] text-greygrey-800 max-md:mt-10">
          No contracts, no commitments, pause or cancel anytime.
        </p>
      </div>
    </section>
  );
}
