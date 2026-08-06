/**
 * Geometry shared by the fixed nav stack (promo banner + header) and every page that has
 * to clear it. Kept out of the component files so importing it does not break fast refresh.
 */

/**
 * When the signup offer closes: midnight Sep 6 2026, Vietnam time — one month from the
 * day it went live (Aug 6 2026).
 *
 * Deliberately a fixed instant rather than `Date.now() + 30 days`: a rolling deadline
 * would sit one month out forever, so the countdown would advertise a scarcity that
 * never actually arrives.
 */
export const PROMO_ENDS_AT = Date.parse('2026-09-06T00:00:00+07:00');

/** Height of the promo band, in px. */
export const PROMO_H = 36;

/**
 * Read once per module load so the nav offset and the page padding cannot disagree with
 * each other mid-render. The banner itself still unmounts if the deadline passes while
 * the tab is left open.
 */
export const PROMO_ACTIVE = Date.now() < PROMO_ENDS_AT;

/*
 * Top padding that clears the fixed stack. Each promo variant is simply the page's
 * original padding plus PROMO_H, so the spacing a section was tuned with is preserved
 * exactly rather than re-derived from the nav height.
 *
 * Written as literal class strings — Tailwind scans source text, so an interpolated
 * `pt-[${n}px]` would never be emitted.
 */

/** Inner pages: pt-20 (80px) + 36. */
export const NAV_CLEARANCE = PROMO_ACTIVE ? 'pt-[116px]' : 'pt-20';

/** Hero: pt-28 (112px) + 36, and max-md:pt-24 (96px) + 36. */
export const HERO_CLEARANCE = PROMO_ACTIVE
  ? 'pt-[148px] max-md:pt-[132px]'
  : 'pt-28 max-md:pt-24';
