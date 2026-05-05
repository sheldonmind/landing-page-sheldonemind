import { useState } from 'react';

type Billing = 'monthly' | 'yearly';

function Check({ className = 'size-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`shrink-0 text-white ${className}`}>
      <path d="M4 12.5L9 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FileStack({ className = 'size-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`shrink-0 text-white ${className}`}>
      <path
        d="M9 3H17C18.1 3 19 3.9 19 5V13M5 7H13C14.1 7 15 7.9 15 9V19C15 20.1 14.1 21 13 21H5C3.9 21 3 20.1 3 19V9C3 7.9 3.9 7 5 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FreeCardColors() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute flex h-[716.657px] w-[606.618px] items-center justify-center left-[242.97px] top-[161.18px]"
        style={{ filter: 'blur(60px)', opacity: 0.75 }}
      >
        <div className="flex-none" style={{ rotate: '-30deg' }}>
          <div className="h-[634.669px] w-[334.036px] rounded-[1568px] bg-[#006FE8]" />
        </div>
      </div>
    </div>
  );
}

function ProCardColors() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute h-[978.82px] w-[634.669px] rounded-[1568px] bg-[#006FE8] left-[-287.67px] top-[228.35px]"
        style={{ filter: 'blur(55px)', opacity: 0.7 }}
      />
      <div
        className="absolute flex h-[715.664px] w-[563.3px] items-center justify-center left-[-128.97px] top-[196.12px]"
        style={{ filter: 'blur(55px)', opacity: 0.65 }}
      >
        <div className="flex-none" style={{ rotate: '24deg' }}>
          <div className="h-[634.669px] w-[334.036px] rounded-[1568px] bg-[#F2FF00]" />
        </div>
      </div>
    </div>
  );
}

function BusinessCardColors() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute flex h-[1263.923px] w-[1493.196px] items-center justify-center left-[-856.03px] top-[224.84px]"
        style={{ filter: 'blur(60px)', opacity: 0.6 }}
      >
        <div className="flex-none" style={{ rotate: '60deg' }}>
          <div className="h-[1322.368px] w-[695.983px] rounded-[1568px] bg-[#E6BE44]" />
        </div>
      </div>
      <div
        className="absolute flex h-[1493.196px] w-[1263.923px] items-center justify-center left-[1030.45px] top-[-551.08px]"
        style={{ filter: 'blur(60px)', opacity: 0.6 }}
      >
        <div className="flex-none" style={{ rotate: '30deg' }}>
          <div className="h-[1322.368px] w-[695.983px] rounded-[1568px] bg-[#73FFD6]" />
        </div>
      </div>
      <div
        className="absolute flex h-[2164.917px] w-[2427.379px] items-center justify-center left-[-47.24px] top-[-776.08px]"
        style={{ filter: 'blur(70px)', opacity: 0.55 }}
      >
        <div className="flex-none" style={{ rotate: '60deg' }}>
          <div className="h-[2039.426px] w-[1322.368px] rounded-[1568px] bg-[#2F82FF]" />
        </div>
      </div>
      <div
        className="absolute flex h-[1263.923px] w-[1493.196px] items-center justify-center left-[-414.07px] top-[331.37px]"
        style={{ filter: 'blur(60px)', opacity: 0.55 }}
      >
        <div className="flex-none" style={{ rotate: '60deg' }}>
          <div className="h-[1322.368px] w-[695.983px] rounded-[1568px] bg-[#32EEFF]" />
        </div>
      </div>
    </div>
  );
}

export default function PricingCards() {
  const [billing, setBilling] = useState<Billing>('monthly');

  return (
    <div className="box-border mx-[calc(1rem+10px)] flex w-[calc(100%-2*((1rem+10px)))] max-w-full items-start justify-center self-stretch py-12 md:mx-[calc(2rem+10px)] md:w-[calc(100%-2*((2rem+10px)))] md:py-16 lg:mx-[calc(10px+max(3rem,(100vw-1212px)/2))] lg:w-[calc(100%-2*((10px+max(3rem,(100vw-1212px)/2))))] lg:py-24 max-[220px]:mx-2 max-[220px]:w-[calc(100%-16px)]">
      <div className="flex w-full max-w-none flex-col items-center justify-start gap-8 overflow-x-clip overflow-y-visible md:gap-12">
        {/* Heading + background blobs */}
        <div className="self-stretch relative flex flex-col justify-start items-center gap-8">
          <h2
            className="m-0 w-full max-w-[674.68px] text-center font-['Figtree'] font-medium text-[clamp(34px,7vw,72px)] leading-none max-[220px]:text-[clamp(26px,14vw,34px)]"
            style={{
              background:
                'radial-gradient(50% 50% at 57% 38%, #0472EF 0%, #7EBDEA 41%, #D3F2E7 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            <span data-nowrap-safe="true" className="block">
              Pay as you go
            </span>
            <br />
            <span data-nowrap-safe="true" className="block">
              no commitment.
            </span>
          </h2>
          <div className="w-[992.32px] h-[991.54px] left-[1034.44px] top-[578.28px] absolute origin-top-left rotate-[145.14deg] mix-blend-overlay bg-[radial-gradient(ellipse_44.88%_44.88%_at_50.29%_57.43%,_#0472EF_0%,_#7EBDEA_73%,_#D3F2E7_100%)] rounded-full blur-3xl" />
          <div className="w-[1744.30px] h-[1742.93px] left-[2763.54px] top-[507.46px] absolute origin-top-left rotate-[145.14deg] mix-blend-overlay bg-[radial-gradient(ellipse_44.88%_44.88%_at_50.29%_57.43%,_#0472EF_0%,_#7EBDEA_73%,_#D3F2E7_100%)] rounded-full blur-3xl" />
          <div className="w-full max-w-[474px] flex flex-col justify-center items-start gap-5 md:gap-7">
            <div className="self-stretch text-center text-stone-300 text-base font-normal font-['Figtree'] leading-6 md:text-lg md:leading-5">
              No contracts, no commitments, pause or cancel anytime.
            </div>
          </div>
        </div>

        {/* Toggle + cards wrapper */}
        <div className="self-stretch flex flex-col justify-start items-center gap-8 md:gap-12">
          {/* Billing toggle */}
          <div
            role="tablist"
            aria-label="Billing period"
            className="inline-flex max-w-full flex-col items-stretch gap-2 overflow-hidden rounded-[50px] bg-zinc-900 px-2.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[10px] min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-start"
          >
            <button
              type="button"
              role="tab"
              data-nowrap-safe="true"
              aria-selected={billing === 'monthly'}
              onClick={() => setBilling('monthly')}
              className={
                billing === 'monthly'
                  ? "relative flex cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-[30px] bg-black/0 px-3.5 py-2 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(160,186,210,0.18),inset_-2px_-1px_1px_0px_rgba(50,238,255,1)] min-[420px]:w-auto w-full"
                  : "relative flex w-full cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-[30px] px-3.5 py-2 min-[420px]:w-auto"
              }
            >
              <div className="flex items-center justify-center gap-2">
                <div
                  data-nowrap-safe="true"
                  className={`text-center text-sm font-medium font-['Figtree'] leading-[1.4] whitespace-nowrap ${billing === 'monthly' ? 'text-white' : 'text-stone-500'}`}
                >
                  Monthly
                </div>
              </div>
              {billing === 'monthly' && (
                <div className="w-72 h-72 left-[442.24px] top-[126.86px] absolute origin-top-left rotate-[145.14deg] mix-blend-hard-light bg-[radial-gradient(ellipse_44.88%_44.88%_at_50.29%_57.43%,_#0472EF_0%,_#7EBDEA_73%,_#D3F2E7_100%)] rounded-full blur-3xl pointer-events-none" />
              )}
            </button>
            <button
              type="button"
              role="tab"
              data-nowrap-safe="true"
              aria-selected={billing === 'yearly'}
              onClick={() => setBilling('yearly')}
              className={
                billing === 'yearly'
                  ? "relative flex w-full cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-[30px] bg-black/0 px-2.5 py-2 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(160,186,210,0.18),inset_-2px_-1px_1px_0px_rgba(50,238,255,1)] min-[420px]:w-auto min-[420px]:px-3.5"
                  : "relative flex w-full cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-[30px] px-2.5 py-2 min-[420px]:w-auto min-[420px]:px-3.5"
              }
            >
              <div className="flex flex-nowrap items-center justify-center gap-2">
                <div
                  data-nowrap-safe="true"
                  className={`shrink-0 text-center text-sm font-medium font-['Figtree'] leading-[1.4] whitespace-nowrap ${billing === 'yearly' ? 'text-white' : 'text-stone-500'}`}
                >
                  Yearly
                </div>
                <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-[20px] px-2 py-1.5 outline outline-1 outline-offset-[-1px] outline-white min-[420px]:px-2.5 min-[420px]:py-2">
                  <div
                    data-nowrap-safe="true"
                    className="text-center font-['Figtree'] text-[10px] font-medium leading-[1.4] whitespace-nowrap text-stone-500"
                  >
                    Save 20%
                  </div>
                </div>
              </div>
              {billing === 'yearly' && (
                <div className="w-72 h-72 left-[442.24px] top-[126.86px] absolute origin-top-left rotate-[145.14deg] mix-blend-hard-light bg-[radial-gradient(ellipse_44.88%_44.88%_at_50.29%_57.43%,_#0472EF_0%,_#7EBDEA_73%,_#D3F2E7_100%)] rounded-full blur-3xl pointer-events-none" />
              )}
            </button>
          </div>

          {/* Cards */}
          <div className="self-stretch w-full flex flex-col lg:flex-row lg:items-stretch gap-[19px]">
            {/* Free */}
            <div className="relative w-full flex-1 min-w-0 rounded-2xl bg-black flex flex-col justify-start items-stretch gap-10 overflow-hidden p-5 max-[360px]:p-4 max-[220px]:gap-6 max-[220px]:p-3 md:min-h-[650px]">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-zinc-500 z-[2]" />
              <div className="relative flex min-h-[280px] h-auto flex-col self-stretch overflow-hidden rounded-lg border-2 border-zinc-500 p-5 max-[360px]:p-4 max-[220px]:p-3 md:h-[330px] md:min-h-[330px]">
                <FreeCardColors />
                <div className="relative z-[1] flex w-full flex-1 flex-col justify-between gap-10 max-[220px]:gap-6">
                  <div className="flex min-w-0 flex-col items-start gap-[30px] max-[220px]:gap-4">
                    <div className="min-w-0 text-2xl font-medium font-['Figtree'] leading-7 text-white max-[220px]:text-xl">Free</div>
                    <div className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1.5 gap-y-0">
                      <span
                        data-nowrap-safe="true"
                        className="whitespace-nowrap font-medium font-['Figtree'] text-5xl leading-[48px] text-white max-[360px]:text-4xl max-[220px]:text-3xl tabular-nums"
                      >
                        {billing === 'monthly' ? '$0' : '$0'}
                      </span>
                      <span
                        data-nowrap-safe="true"
                        className="whitespace-nowrap pb-1 font-normal font-['Figtree'] text-base leading-[22px] text-white max-[220px]:pb-0 max-[220px]:text-sm"
                      >
                        /month
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://app.sheldonmind.com/"
                    data-nowrap-safe="true"
                    aria-label="Get started with Free"
                    className="inline-flex h-14 w-full min-w-0 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-transparent px-4 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(255,255,255,0.18),inset_-2px_-1px_1px_0px_#32eeff] max-[220px]:h-12 max-[220px]:px-3"
                  >
                    <span
                      data-nowrap-safe="true"
                      className="whitespace-nowrap font-medium font-['Figtree'] text-[18px] leading-[1.2] text-white max-[220px]:text-[13px]"
                    >
                      Get Started
                    </span>
                  </a>
                  <div className="inline-flex shrink-0 items-start gap-2 max-[220px]:gap-2 sm:gap-[15px]">
                    <FileStack className="size-6 max-[220px]:size-5" />
                    <p
                      data-nowrap-safe="true"
                      className="m-0 min-w-0 flex-1 font-normal font-['Figtree'] text-base leading-[1.4] text-white max-[220px]:text-[13px]"
                    >
                      {billing === 'monthly'
                        ? '450,000 free credits/mo - $1,34 per 1M credits'
                        : '5,400,000 free credits/yr - $1,34 per 1M credits'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-3 min-h-0">
                {[
                  'All product features',
                  'Limited AI features',
                  'Limited storage',
                  'Limited prompt library',
                  'Limited brand voice',
                  'Roll over unused credits',
                  'Flexible credit use',
                ].map((f) => (
                  <div key={f} className="inline-flex w-full min-w-0 justify-start items-start gap-2 sm:gap-3">
                    <Check className="size-6 max-[360px]:size-5 max-[220px]:size-[18px]" />
                    <div className="min-w-0 text-base font-normal font-['Figtree'] leading-snug text-white max-[360px]:text-sm max-[220px]:text-[13px]">
                      {f}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro */}
            <div className="relative w-full flex-1 min-w-0 rounded-2xl bg-black flex flex-col justify-start items-stretch gap-10 overflow-hidden p-5 max-[360px]:p-4 max-[220px]:gap-6 max-[220px]:p-3 md:min-h-[650px]">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-zinc-500 z-[2]" />
              <div className="relative flex min-h-[280px] h-auto flex-col self-stretch overflow-hidden rounded-lg border-2 border-zinc-500 p-5 max-[360px]:p-4 max-[220px]:p-3 md:h-[330px] md:min-h-[330px]">
                <ProCardColors />
                <div className="relative z-[1] flex w-full flex-1 flex-col justify-between gap-10 max-[220px]:gap-6">
                  <div className="flex min-w-0 flex-col items-start gap-[30px] max-[220px]:gap-4">
                    <div className="min-w-0 text-2xl font-medium font-['Figtree'] leading-7 text-white max-[220px]:text-xl">Pro</div>
                    <div className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1.5 gap-y-0">
                      <span
                        data-nowrap-safe="true"
                        className="whitespace-nowrap font-medium font-['Figtree'] text-5xl leading-[48px] text-white max-[360px]:text-4xl max-[220px]:text-3xl tabular-nums"
                      >
                        {billing === 'monthly' ? '$8' : '$6.4'}
                      </span>
                      <span
                        data-nowrap-safe="true"
                        className="whitespace-nowrap pb-1 font-normal font-['Figtree'] text-base leading-[22px] text-white max-[220px]:pb-0 max-[220px]:text-sm"
                      >
                        /month
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://app.sheldonmind.com/"
                    data-nowrap-safe="true"
                    aria-label="Get started with Pro"
                    className="inline-flex h-14 w-full min-w-0 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-transparent px-4 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(255,255,255,0.18),inset_-2px_-1px_1px_0px_#32eeff] max-[220px]:h-12 max-[220px]:px-3"
                  >
                    <span
                      data-nowrap-safe="true"
                      className="whitespace-nowrap font-medium font-['Figtree'] text-[18px] leading-[1.2] text-white max-[220px]:text-[13px]"
                    >
                      Get Started
                    </span>
                  </a>
                  <div className="inline-flex shrink-0 items-start gap-2 max-[220px]:gap-2 sm:gap-[15px]">
                    <FileStack className="size-6 max-[220px]:size-5" />
                    <p
                      data-nowrap-safe="true"
                      className="m-0 min-w-0 flex-1 font-normal font-['Figtree'] text-base leading-[1.4] text-white max-[220px]:text-[13px]"
                    >
                      {billing === 'monthly'
                        ? '450,000 + 1,000,000 credits/mo - $0,67 per 1M credits'
                        : '5,400,000 + 12,000,000 credits/yr - $0,67 per 1M credits'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-3 overflow-hidden min-h-0">
                {[
                  'All product features',
                  'All AI features',
                  'Unlimited storage',
                  'Unlimited prompt library',
                  'Unlimited brand voice',
                  'Rollover unused credits',
                  'Flexible credit use',
                ].map((f) => (
                  <div key={f} className="inline-flex w-full min-w-0 justify-start items-start gap-2 sm:gap-3">
                    <Check className="size-6 max-[360px]:size-5 max-[220px]:size-[18px]" />
                    <div className="min-w-0 text-base font-normal font-['Figtree'] leading-snug text-white max-[360px]:text-sm max-[220px]:text-[13px]">
                      {f}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business */}
            <div className="relative w-full flex-1 min-w-0 rounded-2xl bg-black flex flex-col justify-start items-stretch gap-10 overflow-hidden p-5 max-[360px]:p-4 max-[220px]:gap-6 max-[220px]:p-3 md:min-h-[650px]">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-zinc-500 z-[2]" />
              <div className="relative flex min-h-[280px] h-auto flex-col self-stretch overflow-hidden rounded-lg border-2 border-zinc-500 p-5 max-[360px]:p-4 max-[220px]:p-3 md:h-[331px] md:min-h-[331px]">
                <BusinessCardColors />
                <div className="relative z-[1] flex w-full flex-1 flex-col justify-between gap-10 max-[220px]:gap-6">
                  <div className="flex min-w-0 flex-col items-start gap-[30px] max-[220px]:gap-4">
                    <div className="min-w-0 text-2xl font-medium font-['Figtree'] leading-7 text-white max-[220px]:text-xl">Business</div>
                    <div className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1.5 gap-y-0">
                      <span
                        data-nowrap-safe="true"
                        className="whitespace-nowrap font-medium font-['Figtree'] text-5xl leading-[48px] text-white max-[360px]:text-4xl max-[220px]:text-3xl tabular-nums"
                      >
                        {billing === 'monthly' ? '$12.5' : '$10'}
                      </span>
                      <span
                        data-nowrap-safe="true"
                        className="whitespace-nowrap pb-1 font-medium font-['Figtree'] text-base leading-[22px] text-white max-[220px]:pb-0 max-[220px]:text-sm"
                      >
                        /month
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://app.sheldonmind.com/"
                    data-nowrap-safe="true"
                    aria-label="Get started with Business"
                    className="inline-flex h-14 w-full min-w-0 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-transparent px-4 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(255,255,255,0.18),inset_-2px_-1px_1px_0px_#32eeff] max-[220px]:h-12 max-[220px]:px-3"
                  >
                    <span
                      data-nowrap-safe="true"
                      className="whitespace-nowrap font-medium font-['Figtree'] text-[18px] leading-[1.2] text-white max-[220px]:text-[13px]"
                    >
                      Get Started
                    </span>
                  </a>
                  <div className="inline-flex shrink-0 items-start gap-2 max-[220px]:gap-2 sm:gap-[15px]">
                    <FileStack className="size-6 max-[220px]:size-5" />
                    <p
                      data-nowrap-safe="true"
                      className="m-0 min-w-0 flex-1 font-normal font-['Figtree'] text-base leading-[1.4] text-white max-[220px]:text-[13px]"
                    >
                      {billing === 'monthly'
                        ? '450,000 + 2,000,000 credits/mo - $0,67 per 1M credits'
                        : '5,400,000 + 24,000,000 credits/yr - $0,67 per 1M credits'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-3 min-h-0">
                {['Everything in Pro', 'Member management', 'Sharing and collaboration'].map((f) => (
                  <div key={f} className="inline-flex w-full min-w-0 justify-start items-start gap-2 sm:gap-3">
                    <Check className="size-6 max-[360px]:size-5 max-[220px]:size-[18px]" />
                    <div className="min-w-0 text-base font-normal font-['Figtree'] leading-snug text-white max-[360px]:text-sm max-[220px]:text-[13px]">
                      {f}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
