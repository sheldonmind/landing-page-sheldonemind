/**
 * Multi AI Chat — model card frame Figma 2316:23620 (268.772×283.107).
 * Section layout still references wider artboard for curves / search.
 */

/** Figma 2316:23626 width / 2316:23625 inner content width — skeleton row 2 */
const FIGMA_MODEL_CARD_BAR2_WIDTH_PCT = (125.427 / 215.018) * 100;

type Model = {
  name: string;
  icon: string;
};

const MODELS: Model[] = [
  { name: 'ChatGPT', icon: '/chatgptiocn.png' },
  { name: 'Gemini', icon: '/geminilogo.png' },
  { name: 'Grok', icon: '/grokicon.png' },
  { name: 'DeepSeek', icon: '/deepseekicon.png' },
  { name: 'Claude', icon: '/claudeicon.png' },
];

function ModelCard({ model }: { model: Model }) {
  const bar2W = `${FIGMA_MODEL_CARD_BAR2_WIDTH_PCT}%`;
  return (
    <div className="multi-ai-model-card relative flex aspect-[268.772/283.107] flex-col gap-[10.663px] rounded-[14.335px] border-[1.066px] border-solid border-[#6C6C6C] bg-black p-[26.877px]">
      {/* Avatar frame Figma 2316:23622 — ring + inset icon 42.833px */}
      <div className="multi-ai-model-card-header flex shrink-0 items-center gap-[10.715px]">
        <div className="multi-ai-model-icon flex shrink-0 items-center justify-center rounded-[26.877px] border-[0.896px] border-solid border-white/70 p-[5.375px]">
          <img
            src={model.icon}
            alt={model.name}
            className="multi-ai-model-icon-img size-[42.833px] shrink-0 rounded-[32px] object-contain"
            draggable={false}
          />
        </div>
        <p className="multi-ai-model-name min-w-0 truncate font-['Figtree',sans-serif] text-[17.918px] text-white">{model.name}</p>
      </div>
      <Bar w="100%" />
      <Bar w={bar2W} />
      <Bar w="100%" />
      <Bar w="100%" reverse />
    </div>
  );
}

function Bar({ w, reverse = false }: { w: string; reverse?: boolean }) {
  return (
    <div
      className="h-[15.23px] shrink-0 rounded-full"
      style={{
        width: w,
        background: reverse
          ? 'linear-gradient(to right, rgba(115,115,115,0) 0%, rgba(217,217,217,0.7) 44.368%, rgba(56,56,56,0) 100%)'
          : 'linear-gradient(to right, rgba(56,56,56,0) 0%, rgba(217,217,217,0.7) 55.632%, rgba(115,115,115,0) 100%)',
      }}
    />
  );
}

export default function MultiAiChatCard() {
  return (
    <div className="multi-ai-chat-card relative w-full overflow-hidden rounded-[24px] border border-solid border-[#6C6C6C] bg-black shadow-[0px_7px_32px_0px_rgba(0,0,0,0.35)]">
      {/* Background ellipse glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-1/2 h-[200%] opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 60% 35% at 50% 80%, rgba(47,130,255,0.55) 0%, rgba(47,130,255,0.18) 40%, rgba(0,0,0,0) 70%)',
        }}
      />

      <div className="multi-ai-chat-inner relative flex flex-col gap-[50px] p-[30px] max-md:gap-8 max-md:p-5">
        {/* Curve + grid + search (Figma 2316:23618) */}
        <div className="flex w-full flex-col items-center">
          <div className="multi-ai-model-grid mb-0 grid w-full grid-cols-5 justify-center gap-[18px] max-lg:grid-cols-3 max-sm:grid-cols-2 max-md:gap-3 max-md:mb-6">
            {MODELS.map((m) => (
              <ModelCard key={m.name} model={m} />
            ))}
          </div>

          {/* Curves Figma 2316:23665 (~77.7px). Ẩn &lt;lg — grid không còn một hàng 5 cột */}
          <div aria-hidden className="relative mt-0 hidden h-[77.706px] w-full max-w-[1146px] shrink-0 lg:block">
            <svg viewBox="0 0 1352 78" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2F82FF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#32EEFF" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="curveGradSolid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2F82FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#32EEFF" stopOpacity="1" />
                </linearGradient>
              </defs>
              <g fill="none" strokeWidth="1.4" strokeLinecap="round">
                <path d="M 102.6 0 C 102.6 50, 675.5 35, 675.5 78" stroke="url(#curveGrad)" />
                <path d="M 389.3 0 C 389.3 50, 675.5 45, 675.5 78" stroke="url(#curveGrad)" />
                <path d="M 675.7 0 L 675.7 78" stroke="#32EEFF" strokeWidth="1.4" />
                <path d="M 962.7 0 C 962.7 50, 675.5 45, 675.5 78" stroke="url(#curveGrad)" />
                <path d="M 1249.4 0 C 1249.4 50, 675.5 35, 675.5 78" stroke="url(#curveGrad)" />
              </g>
            </svg>
          </div>

          {/* Search Figma 2316:23671 — khung 811×195 */}
          <div className="mx-auto w-full max-w-[811px] md:max-lg:mt-6">
            <img
              src="/searchinput-cropped.png"
              alt="Search prompt: What is going on today?"
              className="mx-auto block h-auto w-full max-w-[811px] select-none"
              draggable={false}
            />
          </div>
        </div>

        {/* Title + description Figma 2316:23675 — gap 16px; line-height 1.2 */}
        <div className="multi-ai-copy flex w-full max-w-[700px] flex-col gap-4 max-md:gap-2">
          <h3 className="font-['Figtree',sans-serif] text-[28px] font-medium leading-[1.2] text-white max-md:text-[22px]">
            Multi AI Chat
          </h3>
          <p className="font-['Figtree',sans-serif] text-[18px] font-normal leading-[1.2] text-greygrey-800 max-md:text-base">
            Chat with multiple AI models in one place — switch between GPT‑4o, Claude, Gemini, DeepSeek &amp; more for every conversation.
          </p>
        </div>
      </div>
    </div>
  );
}
