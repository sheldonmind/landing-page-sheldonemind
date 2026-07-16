import { useState } from 'react';

/**
 * Static port of the change-plan page's FAQ (SeldonMind/frontend/src/pages/
 * BillingSettingsPage/billing/subscription/PlanFaq.tsx): a "Need more help?"
 * contact card on a photo background beside the accordion. Same copy as
 * SiteFaq, which the landing page still uses elsewhere; the app's theme tokens
 * are pinned to their dark values here.
 */

const faqs: [string, string][] = [
  [
    'Do I need a subscription?',
    'No. You can use SheldonMind with pay-as-you-go credits. Top up any amount from $1 to $1,000 USD and use any feature. Optional plans available for extra perks.',
  ],
  [
    'Which AI models are available?',
    'We support the latest and most powerful models — GPT-4o, Claude 4, Gemini 2.5, DALL·E 3, Flux, Kling, Veo, Sora & more. New models are added as they launch.',
  ],
  [
    'How does pay as you go work?',
    'Top up credits anytime. Each chat, image, or video generation deducts credits based on the model used. No monthly commitment — your credits never expire.',
  ],
  [
    'Can I reuse images from the gallery?',
    'Yes. Browse the explore gallery, find images you love, and remix them with one click — same prompt, same settings, your own twist.',
  ],
  [
    'How are credits deducted?',
    'Chat deducts by model and token count. Image and video deduct per generation based on model, resolution, and duration.',
  ],
];

export default function PlanFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mx-auto mt-32 max-w-6xl px-4 pb-24 font-['Figtree',sans-serif]"
      aria-label="Frequently asked questions"
    >
      <h2 className="plan-hero-title mb-12 text-center font-medium leading-none text-[clamp(30px,5vw,54px)]">
        <span className="block">Frequently asked</span>
        <span className="block">questions.</span>
      </h2>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        {/* Left: "Need more help?" contact card on a photo background. */}
        <aside
          className="relative mx-auto flex aspect-square w-full max-w-[420px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-zinc-800 p-4 text-center md:mx-0 md:aspect-auto md:h-full"
          aria-label="Contact support"
        >
          <img
            src="/assets/faq-help-bg.png"
            alt=""
            className="pointer-events-none absolute inset-0 size-full rounded-2xl object-cover"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/25" />
          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 px-2">
            <p className="m-0 text-[clamp(28px,4vw,42px)] font-medium leading-none text-white">Need more help?</p>
            <p className="m-0 max-w-[257px] text-base font-normal leading-[1.4] text-white/90">
              Contact the SheldonMind team via email or support page.
            </p>
            <a
              href="mailto:support@sheldonmind.com"
              className="relative z-20 mt-1 inline-flex w-fit shrink-0 cursor-pointer items-center justify-center gap-0.5 overflow-hidden rounded-xl px-3.5 py-2 text-[14px] font-medium leading-[1.4] text-white"
              style={{
                boxShadow:
                  'inset 0 0.5px 0 0 rgba(255,255,255,0.22), inset 0.5px 0 0 0 rgba(160,186,210,0.18), inset -2px -1px 1px 0 rgba(50,238,255,1)',
              }}
            >
              <span aria-hidden className="pointer-events-none absolute left-[30px] -top-[116px] h-[412px] w-[412px]">
                <span
                  className="absolute h-[296px] w-[296px] rotate-[145.14deg] rounded-full blur-3xl"
                  style={{
                    left: '58px',
                    top: '58px',
                    background:
                      'radial-gradient(ellipse 44.88% 44.88% at 50.29% 57.43%, #0472EF 0%, #7EBDEA 73%, #D3F2E7 100%)',
                    mixBlendMode: 'hard-light',
                  }}
                />
              </span>
              <span className="relative z-10">Contact</span>
              <svg className="relative z-10 shrink-0" width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </aside>

        {/* Right: accordion. */}
        <div className="flex min-w-0 flex-col gap-2">
          {faqs.map(([q, a], idx) => {
            const expanded = openFaq === idx;
            return (
              <div key={q} className="flex flex-col gap-4 overflow-hidden rounded-xl border border-zinc-800 p-6 md:p-[30px]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(expanded ? null : idx)}
                  aria-expanded={expanded}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 text-left text-white"
                >
                  <span className="text-xl font-medium leading-[1.2] sm:text-[24px]">{q}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`mt-px shrink-0 transition-transform ${expanded ? '' : 'rotate-180'}`}
                    aria-hidden
                  >
                    <path
                      d="M6 15L12 9L18 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {expanded && <p className="m-0 text-base font-normal leading-[1.4] text-zinc-400">{a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
