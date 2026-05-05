import { useState } from 'react';
import { faqHeadlineStyle } from './visualizeConstants';

const faqs: [string, string][] = [
  ['Do I need a subscription?', 'No. You can use SheldonMind with pay-as-you-go credits. Top up any amount from $1 to $1,000 USD and use any feature. Optional plans available for extra perks.'],
  ['Which AI models are available?', 'We support the latest and most powerful models — GPT-4o, Claude 4, Gemini 2.5, DALL·E 3, Flux, Kling, Veo, Sora & more. New models are added as they launch.'],
  ['How does pay as you go work?', 'Top up credits anytime. Each chat, image, or video generation deducts credits based on the model used. No monthly commitment — your credits never expire.'],
  ['Can I reuse images from the gallery?', 'Yes. Browse the explore gallery, find images you love, and remix them with one click — same prompt, same settings, your own twist.'],
  ['How are credits deducted?', 'Chat deducts by model and token count. Image and video deduct per generation based on model, resolution, and duration.'],
];

/** Figma Section 5 — FAQ 2316:23814; desktop container 1412 with content 555 + 35 + 822. */
export default function SiteFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="box-border w-full min-w-0 bg-black py-[100px] max-md:py-20"
      data-node-id="2316:23814"
      data-name="Section 5 - FQA"
    >
      <div className="mx-auto w-full max-w-[1412px] px-[calc(1rem+10px)] md:px-[calc(2rem+10px)] lg:px-0 max-[220px]:px-2">
        <div className="mb-16 flex w-full flex-col items-center max-md:mb-12" data-node-id="2316:23815">
          <div
            className="relative flex w-full flex-col items-center overflow-x-clip overflow-y-visible max-[220px]:overflow-visible lg:min-h-[250px]"
            data-node-id="2316:23816"
          >
            <h2
              className="m-0 w-full max-w-[693px] text-center font-['Figtree',sans-serif] text-[clamp(40px,7vw,72px)] font-medium leading-none tracking-normal max-md:text-[36px] max-[220px]:text-[clamp(28px,11vw,36px)]"
              style={faqHeadlineStyle}
              data-node-id="2316:23817"
            >
              <span data-nowrap-safe="true" className="block">
                Frequently asked
              </span>
              <span data-nowrap-safe="true" className="block">
                questions.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-8 md:grid-cols-[555px_minmax(0,822px)] md:gap-x-[35px]" data-node-id="2316:23819">
          <aside
            className="relative box-border mx-auto flex aspect-square w-full max-w-[555px] flex-col items-center justify-center gap-4 rounded-[16px] border border-solid border-[#6C6C6C] p-[10px] md:mx-0 md:h-[555px] md:w-[555px] md:max-w-[555px]"
            aria-label="Contact support"
            data-node-id="2316:23820"
          >
            <img src="/FAQ.png" alt="" className="pointer-events-none absolute inset-0 size-full rounded-[16px] object-cover" />
            <div className="pointer-events-none absolute inset-0 rounded-[16px] bg-black/20" />
            <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 px-2 text-center" data-node-id="2316:23821">
              <p
                data-nowrap-safe="true"
                className="m-0 font-['Figtree',sans-serif] text-[48px] font-medium leading-none text-white max-md:text-[36px] max-[220px]:text-[28px]"
                data-node-id="2316:23822"
              >
                Need more help?
              </p>
              <div className="m-0 max-w-[257px] px-2">
                <p
                  data-nowrap-safe="true"
                  className="m-0 text-center font-['Figtree',sans-serif] text-base font-normal leading-[1.4] text-absolutewhite max-[220px]:text-sm"
                >
                  Contact the SheldonMind team via email or support page.
                </p>
              </div>
              <a
                href="mailto:support@sheldonmind.com"
                data-nowrap-safe="true"
                data-node-id="2316:23824"
                className="relative z-20 mt-1 inline-flex w-fit shrink-0 cursor-pointer items-center justify-center gap-0.5 overflow-hidden rounded-xl px-3.5 py-2 font-['Figtree',sans-serif] text-[14px] font-medium leading-[1.4] text-white max-[220px]:text-[12px]"
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
                <svg className="relative z-10 shrink-0" width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </aside>

          <div className="flex min-w-0 w-full max-w-[822px] flex-col gap-2 md:gap-2" data-node-id="2316:23825">
            {faqs.map(([q, a], idx) => {
              const expanded = openFaq === idx;
              return (
                <div
                  key={q}
                  className="flex flex-col gap-4 overflow-hidden rounded-[12px] border border-solid border-[#6C6C6C] bg-black p-[30px] max-md:p-6"
                  data-node-id={`2316:238${26 + idx}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(expanded ? null : idx)}
                    className="flex w-full cursor-pointer items-start justify-between gap-4 text-left font-['Figtree',sans-serif] text-white"
                  >
                    <span
                      data-nowrap-safe="true"
                      className="font-['Figtree',sans-serif] text-xl font-medium leading-[1.2] text-absolutewhite sm:text-[24px] max-[220px]:text-[18px]"
                    >
                      {q}
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`mt-px shrink-0 text-absolutewhite transition-transform ${expanded ? '' : 'rotate-180'}`}
                      aria-hidden
                    >
                      <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {expanded && (
                    <p
                      data-nowrap-safe="true"
                      className="m-0 font-['Figtree',sans-serif] text-base font-normal leading-[1.4] text-absolutewhite max-[220px]:text-sm"
                    >
                      {a}
                    </p>
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
