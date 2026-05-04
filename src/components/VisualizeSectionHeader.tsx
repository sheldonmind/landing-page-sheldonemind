import { FIGMA_PRIMARY_BUTTON_GLOW, visualHeadlineStyle } from './visualizeConstants';

export default function VisualizeSectionHeader() {
  return (
    <div className="mx-auto mb-110 flex w-full max-w-none flex-col gap-8 px-30 max-lg:px-15 max-md:mb-20 max-md:px-4">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <h2
          className="m-0 max-w-275 font-['Figtree',sans-serif] text-[clamp(60px,9vw,128px)] font-medium leading-none"
          style={visualHeadlineStyle}
        >
          Visualize Your Imagination.
        </h2>
        <div className="flex max-w-262.5 flex-col gap-16">
          <p className="m-0 font-['Figtree',sans-serif] text-[28px] font-normal leading-[1.4] text-greygrey-800">
            Generate stunning images, cinematic videos, and take full<br />
            command with advanced motion control—all from a single prompt.
          </p>
          <a
            href="https://app.sheldonmind.com/"
            className="relative inline-flex w-fit cursor-pointer items-center justify-center gap-2 overflow-clip whitespace-nowrap rounded-3xl px-9 py-6 font-['Figtree',sans-serif] text-[26px] font-medium text-white transition-opacity hover:opacity-95 max-md:px-6 max-md:py-4 max-md:text-[18px]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl bg-transparent"
            />
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
            <span className="relative z-10 flex items-center justify-center leading-[1.2]">Try Free Now</span>
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
      </div>
    </div>
  );
}
