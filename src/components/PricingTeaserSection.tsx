/** Pricing teaser + link to full pricing page (Figma 2316:23808) */
export default function PricingTeaserSection() {
  return (
    <section id="pricing" className="w-full bg-black px-4 py-55 md:px-6 lg:px-8 xl:px-10.5 max-md:py-16">
      <div className="flex w-full flex-col gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="flex w-full max-w-225 flex-col gap-6 md:gap-8">
          <h2
            className="m-0 font-['Figtree',sans-serif] text-[clamp(34px,9vw,128px)] font-medium leading-none"
            style={{
              background:
                'radial-gradient(50% 50% at 57% 38%, #0472EF 0%, #7EBDEA 41%, #D3F2E7 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Find your perfect plan.
          </h2>
          <a
            href="/pricing.html"
            className="relative inline-flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-3xl bg-black/0 px-9 py-6 font-['Figtree',sans-serif] text-[26px] font-medium leading-tight text-white transition-opacity hover:opacity-95 max-md:self-center max-md:rounded-[20px] max-md:px-6 max-md:py-4 max-md:text-[18px]"
            style={{
              boxShadow:
                'inset 0 0.5px 0 0 rgba(255,255,255,0.22), inset 0.5px 0 0 0 rgba(160,186,210,0.18), inset -2px -1px 1px 0 rgba(50,238,255,1)',
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute left-[442.24px] top-[126.86px] h-72 w-72 origin-top-left rotate-[145.14deg] rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(ellipse 44.88% 44.88% at 50.29% 57.43%, #0472EF 0%, #7EBDEA 73%, #D3F2E7 100%)',
                mixBlendMode: 'hard-light',
              }}
            />
            <span className="relative z-10">See Plans</span>
            <svg className="relative z-10" width={32} height={32} viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <img
          src="/Section4.png"
          alt="Find your perfect plan"
          className="block h-auto w-full max-w-140 self-center rounded-2xl lg:max-w-[58%] lg:self-auto lg:rounded-none"
        />
      </div>
    </section>
  );
}
