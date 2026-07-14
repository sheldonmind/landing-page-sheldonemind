import type { ReactNode } from 'react';
import EdgeFadeHeading from '../EdgeFadeHeading';
import { SecondaryCtaLink } from '../SecondaryCta';
import { FigmaPrimaryCtaLink } from '../../FigmaPrimaryCta';
import { APP_URL, MEDIA, accentGlow, cardFrame } from '../tokens';

function Icon({ path }: { path: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white">
      <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CARDS: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: 'AI Chat',
    body: 'Every major model in one thread. Switch mid-conversation without losing context.',
    icon: <Icon path="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z" />,
  },
  {
    title: 'Create Image',
    body: 'High-end visuals from prompts or references, at any resolution you need.',
    icon: <Icon path="M3 5h18v14H3zM3 15l5-5 4 4 3-3 6 6" />,
  },
  {
    title: 'Create Video',
    body: 'Text, image, or video in — cinematic clips out, with motion you direct.',
    icon: <Icon path="M4 6h11v12H4zM15 10l5-3v10l-5-3z" />,
  },
  {
    title: 'Deep Memory',
    body: 'Store, retrieve, and visualize everything through a neural-inspired graph.',
    icon: <Icon path="M12 3v6m0 6v6M5 8l4 3m6 2 4 3M5 16l4-3m6-2 4-3M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />,
  },
];

/** The reference's "AI Toolkit" beat: centered scrubbed serif, CTA, card row, product mock. */
export default function Toolkit() {
  return (
    <section className="al-section relative w-full overflow-hidden">
      {/* z-0 rather than -z-10: a negative z-index would paint this behind the opaque
          page background instead of behind the copy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 z-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
        style={accentGlow(0.4)}
      />

      <div className="al-container relative z-10 flex flex-col items-center text-center">
        {/* No max-width here: `lines` already sets the breaks, and a ch cap would re-wrap them. */}
        <EdgeFadeHeading lines={['Multi-Model.', 'Cross-Platform.', 'Pure Intelligence.']} />

        <div>
          <p className="mx-auto mt-6 max-w-[62ch] font-['Figtree',sans-serif] text-[18px] leading-[1.45] text-greygrey-800 max-md:text-[16px]">
            The ultimate bridge between your favorite AI models and everyday apps.
            Chat, create, and deploy without boundaries.
          </p>
        </div>

        <div className="mt-8">
          <FigmaPrimaryCtaLink text="Try Free Now" />
        </div>
      </div>

      <div className="al-container relative mt-20 max-md:mt-14">
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {CARDS.map(({ title, body, icon }) => (
            <div
              key={title}
              style={cardFrame}
              className="flex h-full flex-col gap-4 rounded-2xl p-6 transition-colors hover:bg-white/[0.02]"
            >
              {icon}
              <h3 className="m-0 font-['Figtree',sans-serif] text-[24px] font-medium leading-tight text-white">
                {title}
              </h3>
              <p className="m-0 flex-1 font-['Figtree',sans-serif] text-[15px] leading-snug text-greygrey-800">
                {body}
              </p>
              <SecondaryCtaLink href={APP_URL} text="Try it now" size="sm" className="mt-2" />
            </div>
          ))}
        </div>

        {/* Product mock rising behind the card row, as in the reference. */}
        <div>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={MEDIA.content}
              alt="SheldonMind workspace — generated gallery view"
              width={1412}
              height={794}
              className="block w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.75), transparent 45%)' }}
            />
            {/* Floating prompt bar */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center p-6 max-md:p-4">
              <div className="flex w-full max-w-[680px] items-center gap-3 rounded-2xl border border-white/15 bg-black/50 px-5 py-4 backdrop-blur-md max-md:px-4 max-md:py-3">
                <span className="flex-1 truncate font-['Figtree',sans-serif] text-[16px] text-white/50 max-md:text-[14px]">
                  Describe what you want to create…
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 max-md:size-8">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
