import { useLayoutEffect, useRef } from 'react';
import useScaleToFit from '../hooks/useScaleToFit';

/** The width the visual block is composed for: the card's max-w-[1080px] wrapper in MultiChat,
 *  less the 20px padding either side of multi-ai-chat-inner. */
const DESIGN_W = 1040;

/**
 * Multi AI Chat — ported from main, scaled down ~65% for the artlist layout.
 * The model grid is a single 5-col row feeding connector curves into the prompt box, so it
 * can't reflow without losing that shape. Narrower than DESIGN_W it is scaled down instead
 * (see useScaleToFit) — which is why nothing inside it carries responsive variants. The copy
 * sits outside that block and keeps its own, so it stays readable at any width.
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
      // No fixed aspect: the card ends where the last bar ends (hence pb-0), because the
      // connector below starts at the grid's bottom edge and has to meet that bar. The card
      // carries no border or fill any more, so its box only reads through its content —
      // an aspect ratio would just park the connector 87px under the bar in dead space.
      className={`multi-ai-model-card mc-card mc-s${index} relative flex flex-col gap-2 rounded-xl p-4 pb-0`}
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
  // data-mc drives the intro animation from the card, which the mc-* CSS selectors key off.
  const cardRef = useRef<HTMLDivElement>(null);
  const { wrapRef, mockRef } = useScaleToFit(DESIGN_W);

  useLayoutEffect(() => {
    const el = cardRef.current;
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
      ref={cardRef}
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
        <div ref={wrapRef}>
          <div ref={mockRef} className="flex w-full flex-col items-center">
            <div className="multi-ai-model-grid mb-0 grid w-full grid-cols-5 justify-center gap-3">
              {MODELS.map((m, i) => (
                <ModelCard key={m.name} model={m} index={i} />
              ))}
            </div>

            {/* Curves — one per model card, converging on the prompt box below.
                Width has to track the grid above, not a figure of its own: preserveAspectRatio
                is none, so viewBox x maps straight onto this box's width, and a narrower box
                squeezed every line inward (the outer two by 39px) off its card.
                Each line starts at its card's centre — for 5 columns of (100% - 4*gap)/5, those
                sit at 9.54/29.77/50/70.23/90.46% of the grid, scaled here by the 1352 viewBox. */}
            <div aria-hidden className="relative mt-0 block h-[56px] w-full shrink-0">
              <svg viewBox="0 0 1352 78" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2F82FF" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#32EEFF" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <g fill="none" strokeWidth="1.4" strokeLinecap="round">
                  <path className="mc-line mc-s0" pathLength={1} d="M 129 0 C 129 50, 676 35, 676 78" stroke="url(#curveGrad)" />
                  <path className="mc-line mc-s1" pathLength={1} d="M 402.5 0 C 402.5 50, 676 45, 676 78" stroke="url(#curveGrad)" />
                  <path className="mc-line mc-s2" pathLength={1} d="M 676 0 L 676 78" stroke="#32EEFF" strokeWidth="1.4" />
                  <path className="mc-line mc-s3" pathLength={1} d="M 949.5 0 C 949.5 50, 676 45, 676 78" stroke="url(#curveGrad)" />
                  <path className="mc-line mc-s4" pathLength={1} d="M 1223 0 C 1223 50, 676 35, 676 78" stroke="url(#curveGrad)" />
                </g>
              </svg>
            </div>

            {/* Search prompt image — flips open on its bottom hinge first. */}
            <div className="mx-auto w-full max-w-[600px]" style={{ perspective: '1400px' }}>
              <img
                src="/searchinput-cropped.png"
                alt="Search prompt: What is going on today?"
                className="mc-flip mx-auto block h-auto w-full max-w-[600px] select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Title + description — outside the scaled block, so it stays readable. */}
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
