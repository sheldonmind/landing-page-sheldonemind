import type { ReactNode } from 'react';
import EdgeFadeHeading from '../EdgeFadeHeading';
import { FigmaPrimaryCtaLink } from '../../FigmaPrimaryCta';
import { APP_URL, MEDIA, accentGlow } from '../tokens';

function Icon({ path }: { path: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white">
      <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CARDS: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: 'AI Image',
    body: 'Create high-end visuals from prompts or images.',
    icon: <Icon path="M3 5h18v14H3zM3 15l5-5 4 4 3-3 6 6" />,
  },
  {
    title: 'AI Video',
    body: 'Make cinematic videos that feel professionally directed.',
    icon: <Icon path="M4 6h11v12H4zM15 10l5-3v10l-5-3z" />,
  },
  {
    title: 'Drama Studio',
    body: 'Turn a script into a story film, scene by scene.',
    icon: (
      <Icon path="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9ZM4 9V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3H4ZM8 5l-1.5 4M13 5l-1.5 4" />
    ),
  },
  {
    title: 'Imagine Studio',
    body: 'Compose image, video and audio on one node canvas.',
    icon: (
      <Icon path="M7 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM17 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 8h6M8.6 9.6l2.6 5M15.4 9.6l-2.6 5" />
    ),
  },
];

// Exact glass treatments lifted from artlist's live computed styles (getComputedStyle).
// The card's crisp white edge-lit rim + inner glow is what makes it float off the page;
// the trailing outer shadow adds a touch more lift than the reference.
const CARD_SHADOW =
  'rgba(255,255,255,0.8) -0.5px -0.5px 0px -0.3px inset, ' +
  'rgba(255,255,255,0.8) 0.5px 0.5px 0px -0.3px inset, ' +
  'rgba(255,255,255,0.1) -5px -5px 6px -3px inset, ' +
  '0 18px 44px rgba(0,0,0,0.5)';
const BTN_SHADOW =
  'rgb(255,255,255) 7px 7px 3px -6px inset, ' +
  'rgba(140,180,190,0.6) 0px 4px 20px 4px inset, ' +
  'rgb(140,180,190) -2px 2.39px 18.11px -2.62px inset, ' +
  'rgba(255,255,255,0.5) 6.67px 6.67px 3.36px -6.21px inset';

/** The reference's "AI Toolkit" beat: centered scrubbed serif, CTA, then a four-card row. */
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
        <EdgeFadeHeading lines={['AI Toolkit']} />

        <div>
          <p className="mx-auto mt-6 max-w-[62ch] font-['Figtree',sans-serif] text-[18px] leading-[1.45] text-greygrey-800 max-md:text-[16px]">
            The most organized platform for AI image, video and full studio production.
          </p>
        </div>

        <div className="mt-8">
          <FigmaPrimaryCtaLink text="Go to Toolkit" />
        </div>
      </div>

      <div className="al-container relative z-10 mt-20 max-md:mt-14">
        {/* Frosted cards float over a cinematic still that rises up behind their lower half.
            Fixed 234px cards, centered — the image is wider and shows on both sides (matches artlist). */}
        <div className="relative z-20 flex flex-wrap justify-center gap-5">
          {CARDS.map(({ title, body, icon }) => (
            <div
              key={title}
              style={{ boxShadow: CARD_SHADOW }}
              className="flex w-[14.625rem] flex-col gap-3 rounded-3xl bg-black/20 px-4 pb-4 pt-6 backdrop-blur-2xl transition-colors hover:bg-black/25 max-lg:w-[calc(50%-10px)] max-sm:w-full"
            >
              {icon}
              <h3 className="m-0 font-['Figtree',sans-serif] text-[24px] font-medium leading-none tracking-[0.2px] text-white">
                {title}
              </h3>
              <p className="m-0 flex-1 font-['Figtree',sans-serif] text-[14px] font-light leading-[14px] text-[#c7c7c7]">
                {body}
              </p>
              <div className="mt-2 flex items-center">
                <a
                  href={APP_URL}
                  style={{ boxShadow: BTN_SHADOW, backgroundColor: 'rgba(255,255,255,0.7)' }}
                  className="inline-flex shrink-0 items-center rounded-full px-4 py-2 font-['Figtree',sans-serif] text-[12px] font-medium tracking-[0.2px] text-[#0d0d0d] backdrop-blur-[2px] transition-transform hover:-translate-y-px"
                >
                  Try it Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rounded 1440×540 image "card". The card row only dips its bottom third into the top
            edge, whose blur + navy tint blends that overlap into the artwork (matches the mock). */}
        <div className="relative z-10 -mt-16 h-[540px] max-sm:-mt-12 max-sm:h-[420px]">
          {/* All four edges feather to transparent so the artwork dissolves into the page —
              no visible frame, fully seamless with the background. */}
          <img
            src={MEDIA.toolkitBg}
            alt="A SheldonMind generation — ice cave glowing with sunset light"
            width={2048}
            height={768}
            className="block h-full w-full object-cover object-center"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 17%, #000 85%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 17%, #000 85%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
            loading="lazy"
            decoding="async"
          />

          {/* Floating prompt composer over the image — the AI Toolkit "workspace" cue. */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center px-6 pb-8 max-sm:pb-5">
            <div className="flex w-full max-w-[520px] items-center gap-2.5 rounded-2xl bg-white/[0.06] py-2 pl-4 pr-2 shadow-[0_8px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <span className="flex-1 truncate font-['Figtree',sans-serif] text-[14px] text-white/60">
                Describe what you want to create…
              </span>
              <span
                style={{ boxShadow: BTN_SHADOW, backgroundColor: 'rgba(255,255,255,0.7)' }}
                className="grid size-8 shrink-0 place-items-center rounded-full backdrop-blur-[2px]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 19V5M5 12l7-7 7 7"
                    stroke="#0d0d0d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
