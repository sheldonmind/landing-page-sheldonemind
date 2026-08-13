import { useEffect, useState } from 'react';
import { PROMO_ENDS_AT, PROMO_H } from './navLayout';
import { ACCENT, APP_URL } from './artlist/tokens';

function remainingLabel(msLeft: number) {
  const totalMinutes = Math.floor(msLeft / 60_000);
  const d = Math.floor(totalMinutes / 1440);
  const h = Math.floor((totalMinutes % 1440) / 60);
  const m = totalMinutes % 60;
  return `${d}d ${h}h ${m}m`;
}

/**
 * Announcement band above the header: 3,000 free credits for new signups, counting down
 * to the offer's close. Not dismissible — it runs for the length of the promotion.
 */
export default function PromoBanner() {
  const [msLeft, setMsLeft] = useState(() => PROMO_ENDS_AT - Date.now());

  useEffect(() => {
    // Ticks every second so the minute rolls over on time; the label only changes once a
    // minute, and React bails out of re-rendering when the string is identical.
    const id = setInterval(() => setMsLeft(PROMO_ENDS_AT - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (msLeft <= 0) return null;

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center overflow-hidden px-4 text-white"
      style={{
        height: PROMO_H,
        background: `linear-gradient(90deg, #06182e 0%, ${ACCENT.blue} 50%, #06182e 100%)`,
      }}
    >
      <div className="flex items-center gap-x-2.5 font-['Figtree',sans-serif] text-[13px] leading-none max-sm:gap-x-2 max-sm:text-[12px]">
        <span className="whitespace-nowrap font-medium">
          <span className="max-sm:hidden">New here? Get </span>
          <span className="sm:hidden">Get </span>
          3,000 free credits
        </span>

        <span aria-hidden className="h-3 w-px bg-white/30 max-sm:hidden" />

        <span className="whitespace-nowrap text-white/75 max-sm:hidden">
          Ends in <span className="tabular-nums text-white">{remainingLabel(msLeft)}</span>
        </span>

        <a
          href={APP_URL}
          className="ml-1 whitespace-nowrap rounded-full bg-white/15 px-3 py-1 font-medium text-white transition-colors hover:bg-white/25"
        >
          Claim now →
        </a>
      </div>
    </div>
  );
}
