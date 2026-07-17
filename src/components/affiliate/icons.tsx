/**
 * The five lucide-react glyphs the app's affiliate page uses, inlined as SVG.
 *
 * The landing page doesn't carry lucide as a dependency and draws its other icons inline
 * (see FigmaPrimaryCta, PlanFaq), so the paths are copied verbatim from lucide instead of
 * pulling in the package for five icons. Same 24×24 grid and stroke settings, so they
 * render identically to the app.
 */

type IconProps = { className?: string };

const BASE = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export function ArrowRight({ className = '' }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowUpRight({ className = '' }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export function ChevronDown({ className = '' }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PlayCircle({ className = '' }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

export function CheckCircle2({ className = '' }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
