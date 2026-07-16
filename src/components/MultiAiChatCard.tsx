import { useLayoutEffect, useRef } from 'react';

/**
 * Multi AI Chat — ported from main, scaled down ~65% for the artlist layout.
 * The model grid stays responsive (5→3→2→1 cols); sizes are compact.
 *
 * Scroll-triggered intro (motion users only): the prompt box flips open on its
 * bottom hinge, then each connector line draws up to its model card while the
 * card zooms in — staggered left→right. Reduced-motion users get the finished
 * state, and JS sets the hidden pre-state before paint (useLayoutEffect) so
 * there is no flash.
 */

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

function Bar({ w, reverse = false, i = 0 }: { w: string; reverse?: boolean; i?: number }) {
  return (
    <div
      className="mc-bar h-2 shrink-0 rounded-full"
      // --bd staggers the shimmer bottom bar → top bar so the light wave climbs up.
      style={{
        width: w,
        ['--bd' as string]: `${(3 - i) * 0.14}s`,
        background: reverse
          ? 'linear-gradient(to right, rgba(115,115,115,0) 0%, rgba(217,217,217,0.7) 44.368%, rgba(56,56,56,0) 100%)'
          : 'linear-gradient(to right, rgba(56,56,56,0) 0%, rgba(217,217,217,0.7) 55.632%, rgba(115,115,115,0) 100%)',
      }}
    />
  );
}

function ModelCard({ model, index }: { model: Model; index: number }) {
  return (
    <div
      className={`multi-ai-model-card mc-card mc-s${index} relative flex aspect-[268.772/283.107] flex-col gap-2 rounded-xl p-4`}
    >
      <div className="multi-ai-model-card-header flex shrink-0 items-center gap-2.5">
        <div className="multi-ai-model-icon flex shrink-0 items-center justify-center rounded-full border border-solid border-white/70 p-1">
          <img
            src={model.icon}
            alt={model.name}
            className="multi-ai-model-icon-img size-8 shrink-0 rounded-lg object-contain"
            draggable={false}
          />
        </div>
        <p className="multi-ai-model-name min-w-0 truncate font-['Figtree',sans-serif] text-[14px] text-white">{model.name}</p>
      </div>
      <Bar w="100%" i={0} />
      <Bar w="58.3%" i={1} />
      <Bar w="100%" i={2} />
      <Bar w="100%" reverse i={3} />
    </div>
  );
}

export default function MultiAiChatCard() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Hide the animated pieces before the first paint, then play once in view.
    el.dataset.mc = 'ready';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.mc = 'play';
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="multi-ai-chat-card relative w-full overflow-hidden rounded-[20px]"
    >
      {/* Background ellipse glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-1/2 h-[200%] opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 60% 35% at 50% 80%, rgba(47,130,255,0.55) 0%, rgba(47,130,255,0.18) 40%, rgba(0,0,0,0) 70%)',
        }}
      />

      <div className="multi-ai-chat-inner relative flex flex-col gap-8 p-5 max-md:gap-6 max-md:p-4">
        <div className="flex w-full flex-col items-center">
          <div className="multi-ai-model-grid mb-0 grid w-full grid-cols-5 justify-center gap-3 max-lg:grid-cols-3 max-sm:grid-cols-2 max-md:mb-4">
            {MODELS.map((m, i) => (
              <ModelCard key={m.name} model={m} index={i} />
            ))}
          </div>

          {/* Curves — hidden below lg where the grid is no longer a single 5-col row */}
          <div aria-hidden className="relative mt-0 hidden h-[56px] w-full max-w-[900px] shrink-0 lg:block">
            <svg viewBox="0 0 1352 78" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2F82FF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#32EEFF" stopOpacity="1" />
                </linearGradient>
              </defs>
              <g fill="none" strokeWidth="1.4" strokeLinecap="round">
                <path className="mc-line mc-s0" pathLength={1} d="M 102.6 0 C 102.6 50, 675.5 35, 675.5 78" stroke="url(#curveGrad)" />
                <path className="mc-line mc-s1" pathLength={1} d="M 389.3 0 C 389.3 50, 675.5 45, 675.5 78" stroke="url(#curveGrad)" />
                <path className="mc-line mc-s2" pathLength={1} d="M 675.7 0 L 675.7 78" stroke="#32EEFF" strokeWidth="1.4" />
                <path className="mc-line mc-s3" pathLength={1} d="M 962.7 0 C 962.7 50, 675.5 45, 675.5 78" stroke="url(#curveGrad)" />
                <path className="mc-line mc-s4" pathLength={1} d="M 1249.4 0 C 1249.4 50, 675.5 35, 675.5 78" stroke="url(#curveGrad)" />
              </g>
            </svg>
          </div>

          {/* Search prompt image — flips open on its bottom hinge first. */}
          <div className="mx-auto w-full max-w-[600px] md:max-lg:mt-4" style={{ perspective: '1400px' }}>
            <img
              src="/searchinput-cropped.png"
              alt="Search prompt: What is going on today?"
              className="mc-flip mx-auto block h-auto w-full max-w-[600px] select-none"
              draggable={false}
            />
          </div>
        </div>

        {/* Title + description */}
        <div className="multi-ai-copy flex w-full max-w-[560px] flex-col gap-3 max-md:gap-2">
          <h3 className="font-['Figtree',sans-serif] text-[22px] font-medium leading-[1.2] text-white max-md:text-[19px]">
            Multi AI Chat
          </h3>
          <p className="font-['Figtree',sans-serif] text-[15px] font-normal leading-[1.4] text-greygrey-800 max-md:text-[14px]">
            Chat with multiple AI models in one place — switch between GPT‑4o, Claude, Gemini, DeepSeek &amp; more for every conversation.
          </p>
        </div>
      </div>
    </div>
  );
}
