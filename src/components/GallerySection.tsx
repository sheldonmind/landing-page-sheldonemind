/** Explore stunning AI art (Figma 2316:23781) */
export default function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-black px-4 py-55 md:px-6 lg:px-8 xl:px-10.5 max-md:py-20">
      <div className="mx-auto mb-16 flex w-full max-w-275 flex-col items-center gap-8 text-center max-md:mb-10">
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
          Explore <span className="text-white">stunning</span>
          <br />
          AI art.
        </h2>
        <p className="m-0 max-w-175 font-['Figtree',sans-serif] text-[28px] font-normal leading-[1.4] text-greygrey-800">
          Choose model per conversation, token-by-token streaming, credit deduction by model and token
        </p>
        <a
          href="https://app.sheldonmind.com/"
          className="relative mt-12 inline-flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-3xl px-9 py-6 font-['Figtree',sans-serif] text-[26px] font-medium text-white transition-opacity hover:opacity-95 max-md:mt-4"
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
          <span className="relative z-10">Explore Now</span>
          <svg className="relative z-10" width={32} height={32} viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <img src="/Content.png" alt="Explore stunning AI art content" className="block h-auto w-full" />
    </section>
  );
}
