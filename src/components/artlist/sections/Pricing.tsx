import EdgeFadeHeading from '../EdgeFadeHeading';
import { SecondaryCtaLink } from '../SecondaryCta';
import { FigmaPrimaryCtaLink } from '../../FigmaPrimaryCta';
import { MEDIA } from '../tokens';

export default function Pricing() {
  return (
    <section id="pricing" className="al-section relative w-full overflow-hidden">
      <div className="al-container">
        <EdgeFadeHeading lines={['Find your', 'perfect plan.']} />

        <div className="mt-14 grid grid-cols-[1fr_1fr_minmax(0,0.9fr)] gap-12 max-lg:grid-cols-2 max-lg:gap-10 max-sm:grid-cols-1 max-md:mt-10">
          <div>
            <h3 className="m-0 font-['Figtree',sans-serif] text-[32px] font-normal leading-tight text-white max-md:text-[26px]">
              Creators
            </h3>
            <p className="mt-5 max-w-[42ch] font-['Figtree',sans-serif] text-[16px] leading-[1.55] text-greygrey-800">
              Start free with 450,000 credits a month. Go Pro at $8/month for the full model
              lineup, unlimited storage, and credits that roll over.
            </p>
            <div className="mt-8">
              <FigmaPrimaryCtaLink href="/pricing.html" text="See Plans" />
            </div>
          </div>

          <div>
            <h3 className="m-0 font-['Figtree',sans-serif] text-[32px] font-normal leading-tight text-white max-md:text-[26px]">
              Teams
            </h3>
            <p className="mt-5 max-w-[42ch] font-['Figtree',sans-serif] text-[16px] leading-[1.55] text-greygrey-800">
              Everything in Pro from $12.50/month, plus member management and shared
              collaboration across your whole workspace.
            </p>
            <div className="mt-8">
              <SecondaryCtaLink href="/pricing.html" text="Learn more" />
            </div>
          </div>

          {/* Tall image running off the right edge of the viewport, as in the reference. */}
          <div className="relative max-lg:hidden">
            <img
              src={MEDIA.section4}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className="absolute left-0 top-1/2 h-[420px] w-[calc(50vw)] max-w-none -translate-y-1/2 rounded-l-2xl object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mt-14 font-['Figtree',sans-serif] text-[15px] text-greygrey-800 max-md:mt-10">
            No contracts, no commitments, pause or cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
