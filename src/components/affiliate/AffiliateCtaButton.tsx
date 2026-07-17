import type { ReactNode } from 'react';
import { GlassSurfaceLayers } from './glassSurface';

type AffiliateCtaButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

/**
 * Primary CTA button reproducing the "See Plans" glassy button from sheldonmind.com:
 * a dark navy base lit by a blurred blue radial glow (hard-light blend) pooled toward the
 * lower-right, finished with a bright cyan rim-light on the bottom-right edge and a soft
 * white highlight along the top. Opens the target in a new tab.
 */
export function AffiliateCtaButton({ href, children, icon, className = '' }: AffiliateCtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex w-fit items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#0a0e17] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95 ${className}`.trim()}
    >
      <GlassSurfaceLayers glowClassName="-bottom-[150%] -right-[25%] h-[320%] w-[70%]" />
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 inline-flex">{icon}</span>}
    </a>
  );
}
