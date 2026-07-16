import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Static port of the in-app change-plan screen
 * (app.sheldonmind.com/billing/change-plan → SeldonMind/frontend/src/pages/
 * BillingSettingsPage). The app renders it from the /api/subscription/plans
 * response; this landing copy inlines the same values and points every CTA at
 * the app instead of Lemon Squeezy checkout. Dark-only: the app's theme tokens
 * (bg-card, text-muted-foreground…) are pinned to their dark values here.
 */

type BillingCycle = 'MONTHLY' | 'YEARLY';

const APP_URL = 'https://app.sheldonmind.com/';

interface Plan {
  planKey: 'free' | 'pro' | 'business';
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  /** Credits granted per cycle, already converted from USD (1 USD = 1000 credits). */
  monthlyCredit: number;
  yearlyCredit: number;
  backgroundImage: string;
}

const PLANS: Plan[] = [
  {
    planKey: 'free',
    name: 'Free',
    tagline: 'For trying things out',
    monthlyPrice: 0,
    yearlyPrice: 0,
    monthlyCredit: 0,
    yearlyCredit: 0,
    backgroundImage: '/assets/plan-card-bg.webp',
  },
  {
    planKey: 'pro',
    name: 'Pro',
    tagline: 'For creators leveling up',
    monthlyPrice: 8,
    yearlyPrice: 6.5,
    monthlyCredit: 10_000,
    yearlyCredit: 10_000,
    backgroundImage: '/assets/plan-card-bg-pro.webp',
  },
  {
    planKey: 'business',
    name: 'Business',
    tagline: 'For teams that ship together',
    monthlyPrice: 12.5,
    yearlyPrice: 10,
    monthlyCredit: 16_000,
    yearlyCredit: 16_000,
    backgroundImage: '/assets/plan-card-bg-business.webp',
  },
];

type FeatureState = 'included' | 'limited' | 'excluded';

interface FeatureRow {
  label: string;
  free: FeatureState;
  pro: FeatureState;
  business: FeatureState;
}

const PLAN_FEATURES: FeatureRow[] = [
  { label: 'Create Image', free: 'included', pro: 'included', business: 'included' },
  { label: 'Create Video', free: 'included', pro: 'included', business: 'included' },
  { label: 'Chat', free: 'included', pro: 'included', business: 'included' },
  { label: 'Connectors', free: 'excluded', pro: 'included', business: 'included' },
  { label: 'Memory', free: 'excluded', pro: 'included', business: 'included' },
  { label: 'Imagine Studio', free: 'excluded', pro: 'included', business: 'included' },
  { label: 'Drama Studio', free: 'excluded', pro: 'included', business: 'included' },
  { label: 'Rollover unused credits', free: 'included', pro: 'included', business: 'included' },
  { label: '24/7 support', free: 'excluded', pro: 'excluded', business: 'included' },
];

const COMPLIMENTARY = ['All GPT Models', 'All Gemini Models', 'All Claude Models'];

/** Per-month price shown for the selected billing cycle. */
function monthlyRate(plan: Plan, cycle: BillingCycle): number {
  return cycle === 'YEARLY' ? plan.yearlyPrice : plan.monthlyPrice;
}

/** Whole dollars show no decimals, cents show two (6.5 → "6.50"). */
function formatPrice(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

/** Yearly saving vs monthly, as a whole percent (0 when there is none). */
function yearlyDiscountPercent(plan: Plan): number {
  const { monthlyPrice: monthly, yearlyPrice: yearly } = plan;
  if (monthly <= 0 || yearly <= 0 || yearly >= monthly) return 0;
  return Math.round((1 - yearly / monthly) * 100);
}

function featureState(row: FeatureRow, planKey: Plan['planKey']): FeatureState {
  if (planKey === 'pro') return row.pro;
  if (planKey === 'business') return row.business;
  return row.free;
}

function Check({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`size-4 shrink-0 ${className}`}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Minus({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`size-4 shrink-0 ${className}`}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Sparkles({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`size-4 shrink-0 ${className}`}>
      <path
        d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3zM18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Blurred photo background for a card's top box (or the billing toggle). */
function CardBackground({ src, overlayClassName = 'bg-black/40' }: { src: string; overlayClassName?: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <img src={src} alt="" className="size-full scale-105 object-cover blur-sm" />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}

// Inset cyan glow that outlines the active tab. It lives on the sliding indicator
// so it travels between tabs instead of snapping.
const ACTIVE_GLOW =
  'inset 0 0.5px 0 0 rgba(255,255,255,0.22), inset 0.5px 0 0 0 rgba(160,186,210,0.18), inset -2px -1px 1px 0px rgba(50,238,255,1)';

function BillingToggle({
  billingCycle,
  onBillingCycleChange,
  yearlySavingPercent,
}: {
  billingCycle: BillingCycle;
  onBillingCycleChange: (cycle: BillingCycle) => void;
  yearlySavingPercent: number;
}) {
  const isMonthly = billingCycle === 'MONTHLY';
  const monthlyRef = useRef<HTMLButtonElement>(null);
  const yearlyRef = useRef<HTMLButtonElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; top: number; width: number; height: number } | null>(null);

  // Track the active tab's box so the indicator can animate to it. The two tabs
  // differ in width because of the saving badge, so re-measure on resize too.
  useLayoutEffect(() => {
    const active = isMonthly ? monthlyRef.current : yearlyRef.current;
    if (!active) return;
    const measure = () =>
      setIndicator({
        left: active.offsetLeft,
        top: active.offsetTop,
        width: active.offsetWidth,
        height: active.offsetHeight,
      });
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [isMonthly, yearlySavingPercent]);

  return (
    <div className="relative mx-auto inline-flex overflow-hidden rounded-[50px] bg-zinc-900">
      <CardBackground src="/assets/plan-toggle-bg.webp" overlayClassName="bg-black/60" />
      <div role="tablist" aria-label="Billing period" className="relative z-[1] flex items-center gap-2 px-2.5 py-1.5">
        {indicator && (
          <span
            aria-hidden
            className="pointer-events-none absolute z-[1] rounded-[30px] transition-all duration-300 ease-out motion-reduce:transition-none"
            style={{
              left: indicator.left,
              top: indicator.top,
              width: indicator.width,
              height: indicator.height,
              boxShadow: ACTIVE_GLOW,
            }}
          />
        )}
        <button
          ref={monthlyRef}
          type="button"
          role="tab"
          aria-selected={isMonthly}
          onClick={() => onBillingCycleChange('MONTHLY')}
          className={`relative z-[2] cursor-pointer rounded-[30px] px-3.5 py-2 font-['Figtree'] text-sm font-medium transition-colors duration-300 ${
            isMonthly ? 'text-white' : 'text-stone-300 hover:bg-white/[0.06] hover:text-white'
          }`}
        >
          Monthly
        </button>
        <button
          ref={yearlyRef}
          type="button"
          role="tab"
          aria-selected={!isMonthly}
          onClick={() => onBillingCycleChange('YEARLY')}
          className={`relative z-[2] flex cursor-pointer items-center gap-2 rounded-[30px] px-3.5 py-2 font-['Figtree'] text-sm font-medium transition-colors duration-300 ${
            isMonthly ? 'text-stone-500 hover:bg-white/[0.06] hover:text-stone-200' : 'text-white'
          }`}
        >
          Yearly
          {yearlySavingPercent > 0 && (
            <span className="inline-flex items-center rounded-full bg-[#007aff] px-2.5 py-0.5 text-xs font-semibold text-white">
              -{yearlySavingPercent}%
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

/**
 * Decorative colored blobs behind a plan header. Only used when a plan has no
 * photo background; all three plans currently ship one, so this is the fallback.
 */
function CardGlow() {
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

function CardHeadline({ plan, billingCycle }: { plan: Plan; billingCycle: BillingCycle }) {
  const discount = billingCycle === 'YEARLY' ? yearlyDiscountPercent(plan) : 0;
  const rate = monthlyRate(plan, billingCycle);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-medium text-white">{plan.name}</span>
        {discount > 0 && (
          <span className="inline-flex items-center rounded-full bg-[#007aff] px-2.5 py-0.5 text-xs font-semibold text-white">
            -{discount}%
          </span>
        )}
      </div>
      <p className="m-0 text-sm text-white/60">{plan.tagline}</p>
      <div className="flex items-end gap-2">
        {discount > 0 && <span className="text-xl text-white/40 line-through">${formatPrice(plan.monthlyPrice)}</span>}
        <span className="text-5xl font-medium tabular-nums text-white">${formatPrice(rate)}</span>
        {rate > 0 && <span className="pb-1 text-base text-white/80">/month</span>}
      </div>
    </div>
  );
}

// Raw <a> rather than a shared button: the inset cyan glow is a full match for the
// app's CTA, which is itself a raw <button> for the same reason.
function CardCta({ plan }: { plan: Plan }) {
  const label = plan.planKey === 'free' ? 'Get started free' : 'Get Started';
  return (
    <a
      href={APP_URL}
      aria-label={`${label} with ${plan.name}`}
      className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-transparent text-[18px] font-medium text-white shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.22),inset_0.5px_0_0_0_rgba(255,255,255,0.18),inset_-2px_-1px_1px_0px_#32eeff] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/[0.05] hover:shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.4),inset_0.5px_0_0_0_rgba(255,255,255,0.28),inset_-2px_-1px_2px_0px_#32eeff,0_10px_28px_-8px_rgba(50,238,255,0.5)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32eeff]/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {label}
    </a>
  );
}

function CardCredits({ plan, billingCycle }: { plan: Plan; billingCycle: BillingCycle }) {
  const cycleCredit = billingCycle === 'YEARLY' ? plan.yearlyCredit : plan.monthlyCredit;
  const label =
    cycleCredit > 0 ? `${cycleCredit.toLocaleString()} credits/month` : '5,000 starter credits (one-time)';
  return (
    <div className="flex items-center gap-2">
      <Sparkles className="text-white" />
      <span className="text-sm font-semibold text-white">{label}</span>
    </div>
  );
}

function FeatureItem({ label, state = 'included' }: { label: string; state?: FeatureState }) {
  return (
    <li className="flex items-center gap-2">
      {state === 'excluded' ? (
        <Minus className="text-zinc-500" />
      ) : (
        <Check className={state === 'limited' ? 'text-zinc-400' : 'text-white'} />
      )}
      <span className={`text-sm ${state === 'excluded' ? 'text-zinc-400' : 'text-white'}`}>{label}</span>
      {state !== 'included' && (
        <span className="ml-auto inline-flex items-center rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-zinc-300">
          Limited
        </span>
      )}
    </li>
  );
}

function FeatureList({ planKey }: { planKey: Plan['planKey'] }) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="m-0 text-xs font-semibold uppercase text-zinc-400">Additional features</p>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {PLAN_FEATURES.map((row) => (
            <FeatureItem key={row.label} label={row.label} state={featureState(row, planKey)} />
          ))}
        </ul>
      </div>
      {planKey !== 'free' && (
        <div className="flex flex-col gap-2">
          <p className="m-0 text-xs font-semibold uppercase text-zinc-400">Complimentary access</p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {COMPLIMENTARY.map((label) => (
              <FeatureItem key={label} label={label} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function PlanCard({ plan, billingCycle }: { plan: Plan; billingCycle: BillingCycle }) {
  return (
    <div className="relative flex w-full flex-1 flex-col gap-6 overflow-hidden rounded-2xl border-2 border-zinc-500 bg-black p-5 font-['Figtree']">
      <div className="relative flex flex-col overflow-hidden rounded-lg p-5">
        {plan.backgroundImage ? <CardBackground src={plan.backgroundImage} /> : <CardGlow />}
        <div className="relative z-[1] flex flex-col gap-5">
          <CardHeadline plan={plan} billingCycle={billingCycle} />
          <CardCta plan={plan} />
          <CardCredits plan={plan} billingCycle={billingCycle} />
        </div>
      </div>
      <FeatureList planKey={plan.planKey} />
    </div>
  );
}

export default function ChangePlanCards() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('YEARLY');
  const yearlySavingPercent = Math.max(0, ...PLANS.map(yearlyDiscountPercent));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="plan-hero-title m-0 font-['Figtree'] font-medium leading-none text-[clamp(34px,7vw,72px)]">
          <span className="block">Choose a plan that fits</span>
          <span className="block">your needs</span>
        </h1>
        <p className="mt-2 text-zinc-400/90">Upgrade to unlock all AI features and generate more.</p>
      </div>

      <div className="mb-10 flex justify-center">
        <BillingToggle
          billingCycle={billingCycle}
          onBillingCycleChange={setBillingCycle}
          yearlySavingPercent={yearlySavingPercent}
        />
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
        {PLANS.map((plan) => (
          <PlanCard key={plan.planKey} plan={plan} billingCycle={billingCycle} />
        ))}
      </div>
    </div>
  );
}
