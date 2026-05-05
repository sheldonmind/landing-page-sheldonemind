const FIGMA_PRIMARY_BUTTON_GLOW =
  'https://www.figma.com/api/mcp/asset/178a5f74-2e7d-41d3-916b-8b6c36c313d5';

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
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-transparent" />
      <span
        aria-hidden
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
