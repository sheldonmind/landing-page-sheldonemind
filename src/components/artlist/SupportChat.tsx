import Logo from './Logo';

/**
 * Personalized Customer Experience — animated replacement for the static PNG.
 * The user bubble flies in from the top-right, the agent reply flies in from
 * the bottom-left; both hold, then slide up and fade out at the top before the
 * loop restarts (keyframes supIn1 / supIn2 in index.css). Layout mirrors the
 * original mock: compact multi-line bubbles clustered near the centre. Reduced
 * motion users see both bubbles at rest (animations disabled).
 */

const DUR = '3s';

export default function SupportChat() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* User bubble — enters from the top-right, sits upper / centre-right. */}
      <div
        className="sup-anim absolute left-[38%] top-[15%] flex w-[300px] max-w-[58%] items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5"
        style={{ animation: `supIn1 ${DUR} ease-in-out infinite both` }}
      >
        <p className="m-0 font-['Figtree',sans-serif] text-[12px] leading-snug text-white/85">
          Hi, I’m having trouble accessing the premium features on my account.
        </p>
        <img src="/avatars/a2.jpg" alt="" className="size-8 shrink-0 rounded-full object-cover" draggable={false} />
      </div>

      {/* Agent reply — enters from the bottom-left, sits lower / centre-left. */}
      <div
        className="sup-anim absolute left-[15%] top-[50%] flex w-[320px] max-w-[62%] items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5"
        style={{ animation: `supIn2 ${DUR} ease-in-out infinite both` }}
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 bg-black">
          <Logo className="size-4 text-white" />
        </span>
        <p className="m-0 font-['Figtree',sans-serif] text-[12px] leading-snug text-white/85">
          Hi Kate, I noticed your Pro plan expired two days ago. Let me know if you’d like me to renew it and restore your premium plan.
        </p>
      </div>
    </div>
  );
}
