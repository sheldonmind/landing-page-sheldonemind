import { useState } from 'react';

const faqs: [string, string][] = [
  ['Do I need a subscription?', 'No. You can use SheldonMind with pay-as-you-go credits. Top up any amount from $1 to $1,000 USD and use any feature. Optional plans available for extra perks.'],
  ['Which AI models are available?', 'We support the latest and most powerful models — GPT-4o, Claude 4, Gemini 2.5, DALL·E 3, Flux, Kling, Veo, Sora & more. New models are added as they launch.'],
  ['How does pay as you go work?', 'Top up credits anytime. Each chat, image, or video generation deducts credits based on the model used. No monthly commitment — your credits never expire.'],
  ['Can I reuse images from the gallery?', 'Yes. Browse the explore gallery, find images you love, and remix them with one click — same prompt, same settings, your own twist.'],
  ['How are credits deducted?', 'Chat deducts by model and token count. Image and video deduct per generation based on model, resolution, and duration.'],
];

export default function SiteFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-black px-4 py-55 md:px-6 lg:px-8 xl:px-10.5 max-md:py-20">
      <div className="w-full">
        <div className="mx-auto mb-80 max-w-300 text-center max-md:mb-20">
          <h2
            className="m-0 font-['Figtree',sans-serif] text-[clamp(60px,9vw,128px)] font-medium leading-none"
            style={{
              background:
                'radial-gradient(50% 50% at 57% 38%, #0472EF 0%, #7EBDEA 41%, #D3F2E7 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Frequently asked
            <br />
            questions.
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[42fr_58fr] md:gap-[35px]">
          <aside className="relative overflow-hidden rounded-2xl border border-white/30 p-2">
            <img src="/FAQ.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex min-h-150 flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="mt-47.5 flex flex-col items-center gap-4">
                <p className="m-0 font-['Figtree',sans-serif] text-[clamp(2.9rem,5.6vw,4.1rem)] font-medium leading-none text-white">
                  Need more help?
                </p>
                <p className="m-0 max-w-95 font-['Figtree',sans-serif] text-[22px] leading-[1.4] text-greygrey-800">
                  Contact the SheldonMind team via email or support page.
                </p>
              </div>
              <a
                href="mailto:support@sheldonmind.com"
                className="absolute left-1/2 top-[calc(86%+8px)] z-20 inline-flex w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-xl bg-black/0 px-5 py-[11px] font-['Figtree',sans-serif] text-base font-medium leading-[1.4] text-white"
                style={{
                  boxShadow:
                    'inset 0 0.5px 0 0 rgba(255,255,255,0.22), inset 0.5px 0 0 0 rgba(160,186,210,0.18), inset -2px -1px 1px 0 rgba(50,238,255,1)',
                }}
              >
                <span aria-hidden className="pointer-events-none absolute left-7.5 -top-29 h-[412.185px] w-[412.243px]">
                  <span
                    className="absolute h-[295.984px] w-[296.216px] rotate-[145.14deg] rounded-full blur-3xl"
                    style={{
                      left: '58.01px',
                      top: '58.10px',
                      background:
                        'radial-gradient(ellipse 44.88% 44.88% at 50.29% 57.43%, #0472EF 0%, #7EBDEA 73%, #D3F2E7 100%)',
                      mixBlendMode: 'hard-light',
                    }}
                  />
                </span>
                <span className="relative z-10">Contact</span>
                <svg className="relative z-10" width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </aside>

          <div className="space-y-2">
            {faqs.map(([q, a], idx) => {
              const expanded = openFaq === idx;
              return (
                <div key={q} className="min-h-37.5 overflow-hidden rounded-xl border border-white/30 bg-black">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(expanded ? null : idx)}
                    className="flex h-37.5 w-full items-center justify-between px-6 text-left"
                  >
                    <span className="font-['Figtree',sans-serif] text-2xl font-medium leading-[1.2] text-white">{q}</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`shrink-0 text-white transition-transform ${expanded ? '' : 'rotate-180'}`}
                      aria-hidden
                    >
                      <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {expanded && (
                    <div className="px-6 pb-6 font-['Figtree',sans-serif] text-base font-normal leading-[1.4] text-white">
                      {a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
