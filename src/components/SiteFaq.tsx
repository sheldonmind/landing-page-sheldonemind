import { useState } from 'react';
import EdgeFadeHeading from './artlist/EdgeFadeHeading';

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

/** Hairline accordion rows under a large left-aligned serif heading. */
export default function SiteFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="al-section w-full">
      <div className="al-container">
        <EdgeFadeHeading lines={['Frequently asked', 'questions']} />

        <div className="mt-16 max-md:mt-10">
          {faqs.map(([q, a], idx) => {
            const expanded = open === idx;
            return (
              <div key={q} className="border-b border-white/12">
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : idx)}
                  aria-expanded={expanded}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-7 text-left max-md:py-5"
                >
                  <span className="font-['Figtree',sans-serif] text-[22px] font-medium leading-snug text-white max-md:text-[17px]">
                    {q}
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className={`shrink-0 text-white transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* grid-rows 0fr → 1fr animates to auto height without JS measuring. */}
                <div
                  className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: expanded ? '1fr' : '0fr', opacity: expanded ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 max-w-[80ch] pb-7 font-['Figtree',sans-serif] text-[16px] leading-[1.6] text-greygrey-800 max-md:pb-5 max-md:text-[15px]">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p id="contact" className="mt-14 font-['Figtree',sans-serif] text-[16px] text-greygrey-800 max-md:mt-10">
          Still stuck?{' '}
          <a
            href="mailto:support@sheldonmind.com"
            className="text-white underline underline-offset-4 hover:text-white/80"
          >
            Contact the SheldonMind team
          </a>
          .
        </p>
      </div>
    </section>
  );
}
