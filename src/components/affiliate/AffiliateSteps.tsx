import { useState } from 'react';
import { GlassSurfaceLayers } from './glassSurface';
import { ArrowUpRight, ChevronDown } from './icons';

/**
 * "How it works" — the five-step flow, presented in the FAQ layout the landing page
 * already uses in `PlanFaq.tsx`: a "Need more help?" contact card on the left and an
 * accordion of the steps on the right. Each step expands to reveal its description.
 */
const steps = [
  {
    title: 'Join the program',
    desc: 'Click “Join now” below and sign up as an affiliate on our Lemon Squeezy portal. It’s free — there’s nothing to pay.',
  },
  {
    title: 'Get your referral link',
    desc: 'Once approved, you’ll receive your own unique referral link (e.g. app.sheldonmind.com/?aff=YOURID).',
  },
  {
    title: 'Share your link',
    desc: 'Share it with your audience — social media, blog, newsletter, or friends. There’s no cap on how many people you refer.',
  },
  {
    title: 'Earn commission',
    desc: 'When someone signs up and buys through your link, you earn a commission on their purchase — tracked automatically.',
  },
  {
    title: 'Get paid',
    desc: 'Add your payout details on Lemon Squeezy. Commissions are paid out after a short validation period once they reach the minimum payout.',
  },
];

export function AffiliateSteps() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        {/* Heading format lifted from the change-plan hero ("Choose a plan that fits your
            needs"): the .plan-hero-title radial-blue gradient text, Figtree medium, clamped size. */}
        <h2 className="plan-hero-title m-0 font-['Figtree',sans-serif] font-medium leading-none text-[clamp(34px,7vw,72px)]">
          How it works
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        {/* Left: "Need more help?" contact card on a photo background. */}
        <aside
          className="relative mx-auto flex aspect-square w-full max-w-[420px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-zinc-800 p-4 text-center md:mx-0 md:aspect-auto md:h-full"
          aria-label="Contact support"
        >
          <img
            src="/assets/affiliate/help-bg.png"
            alt=""
            className="pointer-events-none absolute inset-0 size-full rounded-2xl object-cover"
          />
          {/* 40%, not the /25 the app's card uses: this photo is far brighter than the
              original, and white text dropped to a 2.6 contrast ratio over its hot spots. */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/40" />
          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 px-2">
            <p className="m-0 text-[clamp(28px,4vw,42px)] font-medium leading-none text-white">Need more help?</p>
            <p className="m-0 max-w-[257px] text-base font-normal leading-[1.4] text-white/90">
              Contact the SheldonMind team via email or support page.
            </p>
            <a
              href="mailto:support@sheldonmind.com"
              className="relative mt-1 inline-flex w-fit shrink-0 cursor-pointer items-center justify-center gap-0.5 overflow-hidden rounded-xl px-3.5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-95"
            >
              <GlassSurfaceLayers glowClassName="-bottom-[150%] -right-[25%] h-[320%] w-[70%]" />
              <span className="relative z-10">Contact</span>
              <ArrowUpRight className="relative z-10 size-5" />
            </a>
          </div>
        </aside>

        {/* Right: the steps as an accordion. */}
        <ol className="m-0 flex min-w-0 list-none flex-col gap-2 p-0">
          {steps.map((step, idx) => {
            const expanded = openStep === idx;
            return (
              <li
                key={step.title}
                className="flex flex-col gap-4 overflow-hidden rounded-xl border border-zinc-800 p-6 md:p-[30px]"
              >
                <button
                  type="button"
                  onClick={() => setOpenStep(expanded ? null : idx)}
                  aria-expanded={expanded}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 text-left text-white"
                >
                  <span className="text-xl font-medium leading-[1.2] sm:text-[24px]">{step.title}</span>
                  <ChevronDown className={`mt-px size-6 shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                </button>
                {expanded && <p className="m-0 text-base font-normal leading-[1.4] text-zinc-400">{step.desc}</p>}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
