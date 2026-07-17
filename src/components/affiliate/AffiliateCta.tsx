import { AFFILIATE_SIGNUP_URL } from '../artlist/tokens';
import { AffiliateCtaButton } from './AffiliateCtaButton';
import { GLASS_EDGE_SHADOW } from './glassSurface';
import { EdgeBlurFade } from './EdgeBlurFade';
import { ArrowRight, CheckCircle2 } from './icons';

/** Dark base color of the card — the right-side photo dissolves into this toward the left. */
const CARD_BG = '#0a0e17';

const perks = [
  'Free to join',
  'No minimum traffic required',
  'Dedicated affiliate support',
  'Marketing materials & resources',
];

/** Closing call-to-action card — perks checklist + join button on a dark glass card,
 *  with a photo on the right that blurs and dissolves into the card toward the left. */
export function AffiliateCta() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0a0e17] p-8 sm:p-10">
      {/* Right-side photo — sharp on the right, progressively blurred + dissolved toward
          the left (same effect as the home hero carousel) so it melts into the card. */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-[68%] sm:w-[60%]">
        <img src="/assets/affiliate/affiliate-cta.webp" alt="" className="size-full object-cover object-center" />
        <EdgeBlurFade direction="to left" dissolveColor={CARD_BG} />
      </div>

      {/* Glassy edge rim (cyan border light), kept from the card's glass style. */}
      <span aria-hidden className={`pointer-events-none absolute inset-0 rounded-[inherit] ${GLASS_EDGE_SHADOW}`} />

      {/* Content — sits on the dark left side, above the photo. */}
      <div className="relative z-10 max-w-xl">
        <h2 className="m-0 text-2xl font-bold text-white sm:text-3xl">Ready to start earning?</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
          Join creators who are already sharing SheldonMind with their audience.
        </p>

        <ul className="mt-6 grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2 text-sm text-white/90">
              <CheckCircle2 className="size-4 shrink-0 text-white" />
              {perk}
            </li>
          ))}
        </ul>

        <AffiliateCtaButton href={AFFILIATE_SIGNUP_URL} icon={<ArrowRight className="size-4" />} className="mt-8">
          Join the affiliate program
        </AffiliateCtaButton>
      </div>
    </section>
  );
}
