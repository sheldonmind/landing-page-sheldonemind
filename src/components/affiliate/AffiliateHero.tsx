import { AFFILIATE_SIGNUP_URL } from '../artlist/tokens';
import { AffiliateCtaButton } from './AffiliateCtaButton';
import { ArrowRight, PlayCircle } from './icons';

/** Real creator photos for the social-proof avatar cluster. `pos` frames each face in the circle. */
const AVATARS = [
  { src: '/assets/affiliate/avatar-1.webp', pos: '50% 22%' },
  { src: '/assets/affiliate/avatar-2.webp', pos: '50% 30%' },
  { src: '/assets/affiliate/avatar-3.webp', pos: '55% 30%' },
  { src: '/assets/affiliate/avatar-4.webp', pos: '50% 12%' },
];

export function AffiliateHero() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
      {/* Heading format lifted from the change-plan hero ("Choose a plan that fits your
          needs"): the .plan-hero-title radial-blue gradient text, Figtree medium, clamped size. */}
      <h1 className="plan-hero-title m-0 font-['Figtree',sans-serif] font-medium leading-none text-[clamp(34px,7vw,72px)]">
        <span className="block">Earn Together,</span>
        <span className="block">Grow Together</span>
      </h1>

      <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
        Join free. Refer users. Earn on every purchase.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <AffiliateCtaButton href={AFFILIATE_SIGNUP_URL} icon={<ArrowRight className="size-4" />}>
          Join now
        </AffiliateCtaButton>
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
        >
          Learn more
          <PlayCircle className="size-4" />
        </a>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <div className="flex -space-x-2">
          {AVATARS.map((avatar) => (
            <img
              key={avatar.src}
              src={avatar.src}
              alt=""
              className="size-9 rounded-full border-2 border-black object-cover"
              style={{ objectPosition: avatar.pos }}
            />
          ))}
        </div>
        <p className="max-w-[16rem] text-left text-sm text-zinc-400">
          Join a growing community of creators earning with us
        </p>
      </div>
    </section>
  );
}
