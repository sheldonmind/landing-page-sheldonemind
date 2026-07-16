import { INSET_EDGE } from './tokens';

/**
 * Outline companion to FigmaPrimaryCta. The reference uses a gold-bordered dark pill
 * here; keeping the app's blue/cyan buttons means this is keyed to #32eeff instead,
 * reusing the exact inset edge the primary already ships.
 */
export function SecondaryCtaLink({
  href,
  text,
  size = 'md',
  className = '',
}: {
  href: string;
  text: string;
  size?: 'sm' | 'md';
  className?: string;
}) {
  const sizing = size === 'sm' ? 'px-4 py-2.5 text-[15px]' : 'px-5 py-4 text-[18px]';
  return (
    <a
      href={href}
      data-nowrap-safe="true"
      style={{ boxShadow: INSET_EDGE }}
      className={`relative inline-flex w-fit shrink-0 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-2xl bg-transparent font-['Figtree',sans-serif] font-medium whitespace-nowrap text-white transition-colors hover:bg-white/5 ${sizing} ${className}`.trim()}
    >
      {text}
    </a>
  );
}
