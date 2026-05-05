import MultiAiChatCard from './MultiAiChatCard';
import { FigmaPrimaryCtaLink } from './FigmaPrimaryCta';

const headlineFigmaRadialTextStyle = {
  background:
    'radial-gradient(50% 50% at 57% 38%, #0472EF 0%, #7EBDEA 41%, #D3F2E7 100%)',
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
  { name: 'Mistral AI', img: '/Logo Fullname-Mistral AI.png' },
  { name: 'Qwen', img: '/Logo Fullname-Qwen.png' },
  { name: 'Perplexity', img: '/Logo Fullname-Perplexity.png' },
  { name: 'MiniMax', img: '/Logo Fullname-MiniMax.png' },
];

function FeatureCard({
  className = '',
  title,
  description,
  children,
}: {
  className?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex h-162.5 flex-col gap-4 overflow-hidden rounded-2xl bg-black p-7.5 max-lg:h-auto max-md:p-5 ${className}`}
      style={{
        border: '1px solid transparent',
        backgroundImage:
          'linear-gradient(#000, #000), linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.15))',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">{children}</div>
      <div className="flex flex-col gap-4">
        <h3 className="font-['Figtree',sans-serif] text-[28px] font-medium leading-[1.2] text-white max-md:text-[24px]">{title}</h3>
        <p className="font-['Figtree',sans-serif] text-[18px] font-normal leading-[1.2] text-greygrey-800 max-md:text-[16px]">{description}</p>
      </div>
    </div>
  );
}

export default function Section1() {
  /* Figma 2316:23476 — desktop lề ngang margin 60px mỗi bên (+ breakpoint md/lg như dưới). */
  return (
    <section
      id="features"
      className="box-border mx-[50px] w-[calc(100%-100px)] max-w-full overflow-x-hidden py-[100px] max-lg:mx-[calc(2rem+10px)] max-lg:w-[calc(100%-2*((2rem+10px)))] max-md:mx-[calc(1rem+10px)] max-md:w-[calc(100%-2*((1rem+10px)))] max-md:py-16 max-[220px]:mx-2 max-[220px]:w-[calc(100%-16px)]"
    >
      <div className="flex w-full flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-2xl pb-33.5 max-md:pb-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-500 w-500 -translate-x-1/2 -translate-y-1/2 rotate-[145.14deg] rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(ellipse 44.88% 44.88% at 50.29% 57.43%, #0472EF 0%, #7EBDEA 73%, #D3F2E7 100%)',
                mixBlendMode: 'overlay',
              }}
            />
            <div className="relative flex w-full items-start justify-between gap-12 max-lg:flex-col max-lg:gap-10">
              <h2
                className="m-0 flex w-174 max-w-full shrink-0 flex-col justify-start text-left font-['Figtree',sans-serif] text-[72px] font-medium leading-none tracking-normal antialiased max-md:text-[40px] max-md:leading-tight"
                style={headlineFigmaRadialTextStyle}
              >
                Multi-Model. <br />
                Cross-Platform. <br />
                Pure Intelligence.
              </h2>
              <div className="flex w-136.75 max-w-full shrink-0 flex-col items-start gap-10 text-left max-lg:w-full max-md:gap-8">
                <p className="w-full font-['Figtree',sans-serif] text-[18px] font-normal leading-[1.2] text-greygrey-800">
                  The ultimate bridge between your favorite AI models and everyday apps. Chat, create, and deploy without boundaries.
                </p>
                <FigmaPrimaryCtaLink text="Try Free Now" />
              </div>
            </div>
          </div>

          <div className="group relative w-full overflow-hidden pb-12.5">
            <div className="flex w-max items-center gap-3 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...aiTools, ...aiTools, ...aiTools].map(({ name, img }, i) => (
                <img key={`${name}-${i}`} src={img} alt={name} className="h-14 w-auto shrink-0 object-contain max-md:h-12" />
              ))}
            </div>
          </div>
        </div>

        <MultiAiChatCard />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <FeatureCard
            title="Cross-Platform Synchronisation"
            description="Easily integrate your AI Agent with various platforms and channels, including website chat, WhatsApp, Slack, and email."
          >
            <img
              src="/Cross-Platform Synchronisation.png"
              alt="Đồng bộ đa nền tảng — logo và luồng kết nối."
              className="h-full w-full object-contain"
            />
          </FeatureCard>

          <FeatureCard
            title="Personalized Customer Experience"
            description="Your agent knows the logged in user can retrieve their infomation for resolution-focused, 24/7 customer support."
          >
            <img src="/Personalized Customer Experience.png" alt="Trải nghiệm chat cá nhân hóa." className="h-full w-full object-contain" />
          </FeatureCard>

          <FeatureCard
            title="Deep Memory, Smart Nodes"
            description="Store, retrieve, and visualize your information through a neural-inspired graph architecture designed for lifelong learning."
          >
            <img
              src="/Frame 259.png"
              alt="Deep Memory — đồ thị neural và nút kết nối."
              className="h-full w-full object-contain"
            />
          </FeatureCard>

          <FeatureCard
            title="Search Without Limits"
            description="Instantly access your entire library of links, files, and multimedia. Our AI categorizes and retrieves your web content and assets the moment you need them."
          >
            <img src="/Search Without Limits.png" alt="Tìm kiếm không giới hạn — hub và danh mục." className="h-full w-full object-contain" />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
