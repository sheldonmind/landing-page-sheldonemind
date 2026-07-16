import type { ReactNode } from 'react';
import useScaleToFit from '../../../hooks/useScaleToFit';
import MultiAiChatCard from '../../MultiAiChatCard';
import OrbitSync from '../OrbitSync';
import SupportChat from '../SupportChat';
import MemoryGraph3D from '../MemoryGraph3D';
import SearchCanvas from '../../SearchCanvas';
import { FigmaPrimaryCtaLink } from '../../FigmaPrimaryCta';

/**
 * Ported from main's Section1 (Multi AI Chat + feature bento), scaled down to
 * sit inside the artlist layout: capped by al-container and with reduced type,
 * card heights and paddings so it reads compact rather than full-bleed.
 */

const headlineFigmaRadialTextStyle = {
  background: 'radial-gradient(50% 50% at 57% 38%, #0472EF 0%, #7EBDEA 41%, #D3F2E7 100%)',
  WebkitBackgroundClip: 'text' as const,
  backgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  color: 'transparent' as const,
};

const aiTools = [
  { name: 'Gemini', img: '/Logo Fullname-Gemini.png' },
  { name: 'Chat GPT', img: '/Logo Fullname-Chat GPT.png' },
  { name: 'Claude', img: '/Logo Fullname-Claude.png' },
  { name: 'DeepSeek', img: '/Logo Fullname-Deep Seek.png' },
  { name: 'Grok', img: '/Logo Fullname-Grok.png' },
  { name: 'Llama', img: '/Logo Fullname-Llama.png' },
  { name: 'Qwen', img: '/Logo Fullname-Qwen.png' },
  { name: 'Perplexity', img: '/Logo Fullname-Perplexity.png' },
  { name: 'MiniMax', img: '/Logo Fullname-MiniMax.png' },
];

/**
 * The visual box is 208px tall and fluid in width on desktop — 640 at 1440, 432 at the lg
 * breakpoint. That 432 is the narrowest it composes at, so it is what the fixed-px visuals get
 * pinned to and scaled down from.
 */
const VISUAL_W = 432;

/**
 * For visuals that fill whatever box they are handed. They read better given the room than
 * scaled down, so below lg the box just takes a shape that suits the narrower column.
 */
function FluidVisual({ children }: { children: ReactNode }) {
  // Below lg the card drops its fixed height, so flex-1 would collapse this to 0 — and the
  // visuals size off it (absolute inset-0), so they'd vanish. The aspect ratio keeps it
  // width-driven instead.
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden max-lg:aspect-[16/10] max-lg:flex-none">
      {children}
    </div>
  );
}

/**
 * For visuals laid out in fixed px, which stop composing once the box narrows past VISUAL_W —
 * the support chat's bubbles are `w-[300px] max-w-[58%]`, so when the % cap bites they shrink,
 * their text rewraps taller, and they spill out. Pinned and scaled rather than left to reflow.
 */
function ScaledVisual({ children }: { children: ReactNode }) {
  const { wrapRef, mockRef } = useScaleToFit(VISUAL_W);

  return (
    // min-h-0: as a flex item this defaults to min-height:auto, which would let an oversized
    // visual push the row past 208 (the plain box above is spared that by its own overflow-hidden).
    <div ref={wrapRef} className="min-h-0 flex-1 max-lg:flex-none">
      {/* max-lg:h-[208px] — same reason FluidVisual needs an aspect ratio there. Keep it in
          sync with what flex-1 resolves to at lg and up. */}
      <div
        ref={mockRef}
        className="relative flex h-full items-center justify-center overflow-hidden max-lg:h-[208px]"
      >
        {children}
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  fluid = false,
  children,
}: {
  title: string;
  description: string;
  /** Set when the visual sizes itself off the box rather than composing at a fixed width. */
  fluid?: boolean;
  children: ReactNode;
}) {
  const Visual = fluid ? FluidVisual : ScaledVisual;

  return (
    <div className="flex h-[320px] flex-col gap-2.5 overflow-hidden rounded-2xl p-4 max-lg:h-auto">
      <Visual>{children}</Visual>
      <div className="flex flex-col gap-2">
        <h3 className="font-['Figtree',sans-serif] text-[19px] font-medium leading-[1.2] text-white max-md:text-[17px]">{title}</h3>
        <p className="font-['Figtree',sans-serif] text-[14px] font-normal leading-[1.4] text-greygrey-800 max-md:text-[13px]">{description}</p>
      </div>
    </div>
  );
}

export default function MultiChat() {
  return (
    <section id="chat" className="al-section w-full overflow-hidden">
      <div className="al-container flex flex-col gap-4">
        {/* Headline + logo marquee — glow is unclipped so it fades into the background */}
        <div className="relative pb-16 max-md:pb-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[380px] w-[1100px] max-w-full -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                'radial-gradient(ellipse 50% 55% at 50% 50%, rgba(47,130,255,0.28) 0%, rgba(47,130,255,0.10) 46%, rgba(0,0,0,0) 72%)',
              filter: 'blur(24px)',
            }}
          />
          <div className="relative flex w-full items-start justify-between gap-10 max-lg:flex-col max-lg:gap-8">
            <h2
              className="m-0 flex max-w-full shrink-0 flex-col justify-start text-left font-['Figtree',sans-serif] text-[52px] font-medium leading-none tracking-normal antialiased max-md:text-[34px] max-md:leading-tight"
              style={headlineFigmaRadialTextStyle}
            >
              Multi-Model. <br />
              Cross-Platform. <br />
              Pure Intelligence.
            </h2>
            <div className="flex max-w-[440px] shrink-0 flex-col items-start gap-7 text-left max-lg:w-full max-md:gap-6">
              <p className="w-full font-['Figtree',sans-serif] text-[16px] font-normal leading-[1.4] text-greygrey-800">
                The ultimate bridge between your favorite AI models and everyday apps. Chat, create, and deploy without boundaries.
              </p>
              <FigmaPrimaryCtaLink text="Try Free Now" />
            </div>
          </div>
        </div>

        <div className="group relative w-full overflow-hidden pb-8">
          <div className="flex w-max items-center gap-3 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...aiTools, ...aiTools, ...aiTools].map(({ name, img }, i) => (
              <img key={`${name}-${i}`} src={img} alt={name} className="h-10 w-auto shrink-0 object-contain max-md:h-8" />
            ))}
          </div>
        </div>

        {/* Multi AI Chat visual */}
        <div className="mx-auto w-full max-w-[1080px]">
          <MultiAiChatCard />
        </div>

        {/* Feature bento */}
        <div className="mt-1 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <FeatureCard
            title="Cross-Platform Synchronisation"
            description="Easily integrate your AI Agent with various platforms and channels, including website chat, WhatsApp, Slack, and email."
          >
            <OrbitSync />
          </FeatureCard>

          <FeatureCard
            title="Personalized Customer Experience"
            description="Your agent knows the logged in user and can retrieve their information for resolution-focused, 24/7 customer support."
          >
            <SupportChat />
          </FeatureCard>

          <FeatureCard
            fluid
            title="Deep Memory, Smart Nodes"
            description="Store, retrieve, and visualize your information through a neural-inspired graph architecture designed for lifelong learning."
          >
            <MemoryGraph3D />
          </FeatureCard>

          <FeatureCard
            fluid
            title="Search Without Limits"
            description="Instantly access your entire library of links, files, and multimedia. Our AI categorizes and retrieves your web content the moment you need it."
          >
            <SearchCanvas />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
