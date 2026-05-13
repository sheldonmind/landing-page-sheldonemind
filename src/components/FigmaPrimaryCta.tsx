/** Figma Button/XLarge/Primary (2288:14417): radius 16, px 20 py 16, Figtree Medium 18, arrow 24. */
export function FigmaPrimaryCtaLink({
  href = 'https://app.sheldonmind.com/',
  text,
  wide = false,
  className = '',
}: {
  href?: string;
  text: string;
  wide?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      data-nowrap-safe="true"
      className={`figma-primary-cta relative inline-flex w-fit max-w-full shrink-0 flex-nowrap cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-2xl px-5 py-4 font-['Figtree',sans-serif] text-[18px] font-medium whitespace-nowrap text-white transition-opacity hover:opacity-95 max-[220px]:gap-1 max-[220px]:px-2.5 max-[220px]:py-2 max-[220px]:text-[12px] ${wide ? 'w-full max-w-full whitespace-normal' : ''} ${className}`.trim()}
    >
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <span
          className="absolute rounded-full blur-3xl"
          style={{
            width: 288,
            height: 288,
            left: '440px',
            top: '126.86px',
            transformOrigin: 'top left',
            transform: 'rotate(145.14deg)',
            mixBlendMode: 'hard-light',
            background:
              'radial-gradient(ellipse 44.88% 44.88% at 50.29% 57.43%, #0472EF 0%, #7EBDEA 73%, #D3F2E7 100%)',
          }}
        />
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(160,186,210,0.18),inset_-2px_-1px_1px_0px_#32eeff]"
      />
      <span data-nowrap-safe="true" className="relative z-10 leading-[1.2]">
        {text}
      </span>
      <svg
        className="relative z-10 size-6 shrink-0 max-[220px]:size-4"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
