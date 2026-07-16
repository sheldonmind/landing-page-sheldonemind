import type { ReactNode } from 'react';
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

function FeatureCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-[320px] flex-col gap-2.5 overflow-hidden rounded-2xl p-4 max-lg:h-auto">
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">{children}</div>
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
            title="Deep Memory, Smart Nodes"
            description="Store, retrieve, and visualize your information through a neural-inspired graph architecture designed for lifelong learning."
          >
            <MemoryGraph3D />
          </FeatureCard>

          <FeatureCard
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
