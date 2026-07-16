import type { ReactNode } from 'react';

/**
 * Frosted "liquid glass" bar, rebuilt from the reference's measured layer stack:
 *
 *   layer 0  backdrop-blur(4px) + a turbulence displacement filter
 *   layer 1  bg rgba(0,0,0,0.05) + 0.5px rgba(255,255,255,0.6) border
 *   layer 2  six inset shadows that light the rim
 *   layer 3  the content
 *
 * The fill is NOT transparent — it is a 5% black wash over a blurred backdrop, which is
 * what stops the bar dissolving into whatever video is behind it.
 *
 * The reference tints its topmost inset shadow gold. Ours is keyed to the app's cyan.
 */
const GLASS_INSET = [
  'rgba(50,238,255,0.10) -1.996px 2.391px 18.109px -2.622px inset',
  'rgba(255,255,255,0.40) -5.73px -4px 3.36px -2.73px inset',
  'rgba(255,255,255,0.30) 6.671px 6.671px 3.363px -6.214px inset',
  'rgba(255,255,255,0.50) 0px 1px 12.2px -5px inset',
  'rgba(255,255,255,0.40) -6.727px -6.727px 3.363px -6.727px inset',
  'rgba(255,255,255,0.30) 6.671px 6.671px 3.363px -6.214px inset',
].join(', ');

/** Own turbulence/displacement pair — the glass ripple, not lifted from anywhere. */
export function GlassDistortionDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="pointer-events-none absolute">
      <filter id="sm-glass-distortion" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.011 0.014" numOctaves={2} seed={7} result="noise" />
        <feGaussianBlur in="noise" stdDeviation="2.4" result="soft" />
        <feDisplacementMap in="SourceGraphic" in2="soft" scale="26" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

export default function GlassBar({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl px-4 py-4 md:rounded-full md:px-7 lg:py-[clamp(1.125rem,1.125rem+(100vw-1024px)*0.0111607143,1.75rem)] lg:px-[clamp(1.75rem,1.75rem+(100vw-1024px)*0.0267857143,3.25rem)] ${className}`.trim()}
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0 backdrop-blur-[4px]"
        style={{ filter: 'url(#sm-glass-distortion)' }}
      />
      <div aria-hidden className="absolute inset-0 z-[1] border-[0.5px] border-[#ffffff99] bg-[#0000000d]" />
      <div aria-hidden className="absolute inset-0 z-[2] rounded-2xl md:rounded-full" style={{ boxShadow: GLASS_INSET }} />
      {/* Stacks on mobile — the bar clips its overflow, so a single row would lose items. */}
      <div className="relative z-[3] flex flex-col items-center gap-y-6 md:flex-row md:justify-center md:gap-4 lg:gap-[42px]">
        {children}
      </div>
    </div>
  );
}
