import EdgeFadeHeading from '../EdgeFadeHeading';
import { accentGlow } from '../tokens';

/** Each claim is asserted elsewhere in the product — FAQ copy and the pricing cards. */
const CLAIMS = [
  'Every major model in one workspace — no tab-switching',
  'Pay as you go — credits never expire, no subscription',
  'Chat, image, and video on a single credit balance',
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 size-6 shrink-0 text-white">
      <path d="M4 12.5L9 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section className="al-section relative w-full overflow-hidden">
      {/* z-0 rather than -z-10: a negative z-index would paint this behind the opaque
          page background instead of behind the copy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[14%] top-1/2 z-0 h-[64%] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl max-lg:left-1/2"
        style={accentGlow(0.4)}
      />

      <div className="al-container relative z-10 grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <EdgeFadeHeading lines={['Why creators', 'choose SheldonMind']} />

        <ul className="m-0 flex list-none flex-col gap-7 p-0">
          {CLAIMS.map((claim) => (
            <li key={claim} className="flex items-start gap-4">
              <Check />
              <span className="font-['Figtree',sans-serif] text-[20px] leading-snug text-white max-md:text-[17px]">
                {claim}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
