// Section 1 — hero + marquee + Multi AI Chat + lưới tính năng (ảnh export).

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

const FIGMA_PRIMARY_BUTTON_GLOW =
  'https://www.figma.com/api/mcp/asset/178a5f74-2e7d-41d3-916b-8b6c36c313d5';

// Figma 2316:23685 — Button/XLarge/Primary: dark fill + radial blue glow ở góc trái-dưới,
// inner cyan shadow ở mép phải-dưới, radius 16, padding 20×16, text Figtree Medium 18.
function SignUpStyleButton({ text, wide = false }: { text: string; wide?: boolean }) {
  return (
    <a
      href="https://app.sheldonmind.com/"
      className={`relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-clip whitespace-nowrap rounded-3xl px-9 py-6 font-['Figtree',sans-serif] text-[26px] font-medium text-white transition-opacity hover:opacity-95 max-md:px-6 max-md:py-4 max-md:text-[18px] ${wide ? 'w-full' : ''}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-transparent"
      />
      {/* Exact Figma glow layer for node 2288:14421 */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-7.5 -top-29 flex h-[412.185px] w-[412.243px] items-center justify-center mix-blend-hard-light"
      >
        <span className="flex-none rotate-[145.14deg]">
          <span className="relative block h-[295.984px] w-[296.216px]">
            <span className="absolute inset-[-40.54%_-40.51%]">
              <img alt="" src={FIGMA_PRIMARY_BUTTON_GLOW} className="block h-full w-full max-w-none" />
            </span>
          </span>
        </span>
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(160,186,210,0.18),inset_-2px_-1px_1px_0px_#32eeff]"
      />
      <span className="relative z-10 flex items-center justify-center leading-[1.2]">{text}</span>
      <svg className="relative z-10 shrink-0" width={32} height={32} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

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
      className={`flex flex-col gap-4 overflow-hidden rounded-2xl bg-black p-7.5 max-md:p-5 ${className}`}
      style={{
        border: '2px solid transparent',
        backgroundImage:
          'linear-gradient(#000, #000), linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.15))',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">{children}</div>
      <div className="flex flex-col gap-4">
        <h3 className="font-productSans text-[40px] font-medium leading-[1.2] text-white max-md:text-[24px]">{title}</h3>
        <p className="font-productSans text-[24px] leading-[1.35] text-greygrey-800 max-md:text-[16px]">{description}</p>
      </div>
    </div>
  );
}

export default function Section1() {
  return (
    <section id="features" className="w-full overflow-x-hidden px-30 py-47.5 max-lg:px-15 max-md:px-4 max-md:py-16">
      {/* Cùng lề ngang với hero: full width trong padding 50px — không max-w-[1412px] */}
      <div className="flex w-full flex-col gap-5">

        {/* Hàng 1: tiêu đề + copy CTA | Hàng 2: pill icon căn trái cùng lề "Multi" (Figma) */}
        <div className="flex flex-col gap-10">
          {/* Figma 2316:23679 — Title frame: justify-between, có glow ellipse blur ở nền (mix-blend-overlay) */}
          <div className="relative overflow-hidden rounded-2xl pb-72.5 max-md:pb-16">
            {/* Background glow ellipse 145.14° — mix-blend-overlay (Figma node 2316:23686) */}
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
              {/* Headline 696px / Figtree 500 / 72 / line 100% / Gradient·Radial */}
              <h2
                className="m-0 flex w-275 max-w-full shrink-0 flex-col justify-start text-left font-['Figtree',sans-serif] text-[clamp(40px,9vw,128px)] font-medium leading-none tracking-normal antialiased max-md:leading-tight"
                style={headlineFigmaRadialTextStyle}
              >
                Multi-Model. <br />
                Cross-Platform. <br />
                Pure Intelligence.
              </h2>
              {/* Cột phải 547px, gap 40, paragraph 18px Figtree, button hug */}
              <div className="flex w-187.5 max-w-full shrink-0 flex-col items-start gap-16 text-left max-lg:w-full max-md:gap-8">
                <p className="w-full font-['Figtree',sans-serif] text-[28px] font-normal leading-[1.4] text-greygrey-800 max-md:text-[18px]">
                  The ultimate bridge between your favorite AI models and everyday apps. Chat, create, and deploy without boundaries.
                </p>
                <SignUpStyleButton text="Try Free Now" />
              </div>
            </div>
          </div>

          {/* Logo Slider Horizontal — Figma 2282:12477: marquee chạy ngang vô hạn */}
          <div className="group relative w-full overflow-hidden">
            <div className="flex w-max items-center gap-3 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...aiTools, ...aiTools, ...aiTools].map(({ name, img }, i) => (
                <img key={`${name}-${i}`} src={img} alt={name} className="h-22 w-auto shrink-0 object-contain max-md:h-12" />
              ))}
            </div>
          </div>
        </div>

        {/* Multi AI Chat — chỉ ảnh export (đã đủ khung/viền trong PNG) */}
        <img
          src="/Frame.png"
          alt="Multi AI Chat — chat nhiều model; nội dung nằm trong ảnh."
          width={5648}
          height={3296}
          className="block h-auto w-full"
          sizes="100vw"
        />

        {/* ─── 2x2 GRID — Figma 2316:23481: hàng 1 = Deep Memory | Personalized; hàng 2 = Cross-Platform | Search (gap 20) ─ */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Deep Memory, Smart Nodes — Figma 2316:23543: nền đen, chỉ graph là ảnh /Frame 259.png */}
          <FeatureCard
            className="h-195 max-md:h-120"
            title="Deep Memory, Smart Nodes"
            description="Store, retrieve, and visualize your information through a neural-inspired graph architecture designed for lifelong learning."
          >
            <img
              src="/Frame 259.png"
              alt="Deep Memory — đồ thị neural và nút kết nối."
              className="h-full w-full scale-110 object-contain"
            />
          </FeatureCard>

          {/* Personalized Customer Experience */}
          <FeatureCard
            className="h-195 max-md:h-120"
            title="Personalized Customer Experience"
            description="Your agent knows the logged in user can retrieve their information for resolution-focused, 24/7 customer support."
          >
            <img src="/Personalized Customer Experience.png" alt="Trải nghiệm chat cá nhân hóa." className="h-full w-full scale-110 object-contain" />
          </FeatureCard>

          {/* Cross-Platform Synchronisation */}
          <FeatureCard
            className="h-195 max-md:h-120"
            title="Cross-Platform Synchronisation"
            description="Easily integrate your AI Agent with various platforms and channels, including website chat, WhatsApp, Slack, and email."
          >
            <img src="/Cross-Platform Synchronisation.png" alt="Đồng bộ đa nền tảng — logo và luồng kết nối." className="h-full w-full scale-110 object-contain" />
          </FeatureCard>

          {/* Search Without Limits */}
          <FeatureCard
            className="h-195 max-md:h-120"
            title="Search Without Limits"
            description="Instantly access your entire library of links, files, and multimedia. Our AI categorizes and retrieves your web content and assets the moment you need them."
          >
            <img src="/Search Without Limits.png" alt="Tìm kiếm không giới hạn — hub và danh mục." className="h-full w-full scale-110 object-contain" />
          </FeatureCard>
        </div>

      </div>
    </section>
  );
}
