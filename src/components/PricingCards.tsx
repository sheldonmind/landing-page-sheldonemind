import { useState } from 'react';

type Billing = 'monthly' | 'yearly';

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-6 shrink-0 text-white">
      <path d="M4 12.5L9 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FileStack() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-6 shrink-0 text-white">
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
    <div className="self-stretch w-full max-w-none px-4 py-12 md:px-8 md:py-16 lg:px-[max(3rem,calc((100vw-1212px)/2))] lg:py-24 flex justify-center items-start">
      <div className="w-full max-w-none flex flex-col justify-start items-center gap-8 md:gap-12 overflow-hidden">
        {/* Heading + background blobs */}
        <div className="self-stretch relative flex flex-col justify-start items-center gap-8">
          <h2
            className="m-0 w-full max-w-[674.68px] text-center font-['Figtree'] font-medium text-[clamp(34px,7vw,72px)] leading-none"
            style={{
              background:
                'radial-gradient(50% 50% at 57% 38%, #0472EF 0%, #7EBDEA 41%, #D3F2E7 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Pay as you go
            <br />
            no commitment.
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
            className="px-3 py-2 bg-zinc-900 rounded-[50px] outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[10px] inline-flex justify-start items-center gap-2.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={billing === 'monthly'}
              onClick={() => setBilling('monthly')}
              className={
                billing === 'monthly'
                  ? "cursor-pointer px-5 py-2.5 relative bg-black/0 rounded-[30px] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(160,186,210,0.18),inset_-2px_-1px_1px_0px_rgba(50,238,255,1)] flex justify-center items-center gap-1 overflow-hidden"
                  : "cursor-pointer px-5 py-2.5 relative rounded-[30px] flex justify-center items-center gap-1 overflow-hidden"
              }
            >
              <div className="h-6 flex justify-center items-center gap-2.5">
                <div className={`text-center text-base font-medium font-['Figtree'] leading-6 ${billing === 'monthly' ? 'text-white' : 'text-stone-500'}`}>
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
              aria-selected={billing === 'yearly'}
              onClick={() => setBilling('yearly')}
              className={
                billing === 'yearly'
                  ? "cursor-pointer px-5 py-2.5 relative bg-black/0 rounded-[30px] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(160,186,210,0.18),inset_-2px_-1px_1px_0px_rgba(50,238,255,1)] flex justify-center items-center gap-1 overflow-hidden"
                  : "cursor-pointer px-5 py-2.5 relative rounded-[30px] flex justify-center items-center gap-1 overflow-hidden"
              }
            >
              <div className="flex justify-center items-center gap-2.5">
                <div className={`text-center text-base font-medium font-['Figtree'] leading-6 ${billing === 'yearly' ? 'text-white' : 'text-stone-500'}`}>
                  Yearly
                </div>
                <div className="px-2.5 py-1 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center overflow-hidden shrink-0">
                  <div className="text-center text-stone-500 text-xs font-medium font-['Figtree'] leading-4">Save 20%</div>
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
            <div className="relative w-full flex-1 min-w-0 rounded-2xl bg-black flex flex-col justify-start items-stretch gap-10 overflow-hidden p-5 md:min-h-[650px]">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl border border-zinc-500 z-[2]" />
              <div className="self-stretch h-[330px] p-5 relative rounded-lg border border-zinc-500 flex flex-col overflow-hidden">
                <FreeCardColors />
                <div className="relative z-[1] flex w-full flex-1 flex-col justify-between gap-10">
                  <div className="flex flex-col items-start gap-[30px]">
                    <div className="text-white text-2xl font-medium font-['Figtree'] leading-7">Free</div>
                    <div className="inline-flex flex-wrap items-end gap-2">
                      <span className="text-white font-medium font-['Figtree'] text-5xl leading-[48px]">{billing === 'monthly' ? '$0' : '$0'}</span>
                      <span className="text-white pb-4 text-base font-normal font-['Figtree'] leading-[22px]">/month</span>
                    </div>
                  </div>
                  <a
                    href="https://app.sheldonmind.com/"
                    aria-label="Get started with Free"
                    className="inline-flex h-14 w-full shrink-0 cursor-pointer items-center justify-center overflow-clip rounded-2xl bg-transparent px-5 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(255,255,255,0.18),inset_-2px_-1px_1px_0px_#32eeff]"
                  >
                    <span className="font-medium font-['Figtree'] text-white text-[18px] leading-[1.2]">Get Started</span>
                  </a>
                  <div className="inline-flex shrink-0 items-center gap-[15px]">
                    <FileStack />
                    <p className="m-0 flex-1 text-white text-base font-normal font-['Figtree'] leading-[1.4]">
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
                  'Limited prompt libary',
                  'Limited brand voice',
                  'Roll over unused credits',
                  'Flexible credit use',
                ].map((f) => (
                  <div key={f} className="inline-flex justify-start items-center gap-3">
                    <Check />
                    <div className="text-white text-base font-normal font-['Figtree'] leading-[1.4]">{f}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro */}
            <div className="relative w-full flex-1 min-w-0 rounded-2xl bg-black flex flex-col justify-start items-stretch gap-10 overflow-hidden p-5 md:min-h-[650px]">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl border border-zinc-500 z-[2]" />
              <div className="self-stretch h-[330px] p-5 relative rounded-lg border border-zinc-500 flex flex-col overflow-hidden">
                <ProCardColors />
                <div className="relative z-[1] flex w-full flex-1 flex-col justify-between gap-10">
                  <div className="flex flex-col items-start gap-[30px]">
                    <div className="text-white text-2xl font-medium font-['Figtree'] leading-7">Pro</div>
                    <div className="inline-flex flex-wrap items-end gap-2">
                      <span className="text-white font-medium font-['Figtree'] text-5xl leading-[48px]">{billing === 'monthly' ? '$8' : '$6.4'}</span>
                      <span className="text-white pb-4 text-base font-normal font-['Figtree'] leading-[22px]">/month</span>
                    </div>
                  </div>
                  <a
                    href="https://app.sheldonmind.com/"
                    aria-label="Get started with Pro"
                    className="inline-flex h-14 w-full shrink-0 cursor-pointer items-center justify-center overflow-clip rounded-2xl bg-transparent px-5 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(255,255,255,0.18),inset_-2px_-1px_1px_0px_#32eeff]"
                  >
                    <span className="font-medium font-['Figtree'] text-white text-[18px] leading-[1.2]">Get Started</span>
                  </a>
                  <div className="inline-flex shrink-0 items-start gap-[15px]">
                    <FileStack />
                    <p className="m-0 flex-1 text-white text-base font-normal font-['Figtree'] leading-[1.4]">
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
                  <div key={f} className="inline-flex justify-start items-center gap-3">
                    <Check />
                    <div className="text-white text-base font-normal font-['Figtree'] leading-[1.4]">{f}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business */}
            <div className="relative w-full flex-1 min-w-0 rounded-2xl bg-black flex flex-col justify-start items-stretch gap-10 overflow-hidden p-5 md:min-h-[650px]">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl border border-zinc-500 z-[2]" />
              <div className="self-stretch h-[331px] p-5 relative rounded-lg border border-zinc-500 flex flex-col overflow-hidden">
                <BusinessCardColors />
                <div className="relative z-[1] flex w-full flex-1 flex-col justify-between gap-10">
                  <div className="flex flex-col items-start gap-[30px]">
                    <div className="text-white text-2xl font-medium font-['Figtree'] leading-7">Business</div>
                    <div className="inline-flex flex-wrap items-end gap-2">
                      <span className="text-white font-medium font-['Figtree'] text-5xl leading-[48px]">{billing === 'monthly' ? '$12.5' : '$10'}</span>
                      <span className="text-white pb-4 text-base font-medium font-['Figtree'] leading-[22px]">/month</span>
                    </div>
                  </div>
                  <a
                    href="https://app.sheldonmind.com/"
                    aria-label="Get started with Business"
                    className="inline-flex h-14 w-full shrink-0 cursor-pointer items-center justify-center overflow-clip rounded-2xl bg-transparent px-5 shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(255,255,255,0.18),inset_-2px_-1px_1px_0px_#32eeff]"
                  >
                    <span className="font-medium font-['Figtree'] text-white text-[18px] leading-[1.2]">Get Started</span>
                  </a>
                  <div className="inline-flex shrink-0 items-start gap-[15px]">
                    <FileStack />
                    <p className="m-0 flex-1 text-white text-base font-normal font-['Figtree'] leading-[1.4]">
                      {billing === 'monthly'
                        ? '450,000 + 2,000,000 credits/mo - $0,67 per 1M credits'
                        : '5,400,000 + 24,000,000 credits/yr - $0,67 per 1M credits'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-3 min-h-0">
                {['Everything in Pro', 'Member management', 'Sharing and collaboration'].map((f) => (
                  <div key={f} className="inline-flex justify-start items-center gap-3">
                    <Check />
                    <div className="text-white text-base font-normal font-['Figtree'] leading-[1.4]">{f}</div>
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
