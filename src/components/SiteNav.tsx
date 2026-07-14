import { useEffect, useState } from 'react';
import Logo from './artlist/Logo';
import { APP_URL } from './artlist/tokens';

type NavItem = [label: string, href: string];

type Props = {
  /**
   * Override anchors when not on the landing page (e.g. on /pricing.html the
   * landing-page sections need absolute paths instead of pure hashes).
   */
  navItems?: NavItem[];
};

const defaultItems: NavItem[] = [
  ['Feature', '#features'],
  ['Models', '#models'],
  ['Studio', '#studio'],
  ['Gallery', '#gallery'],
  ['Pricing', '#pricing'],
  ['FAQ', '#faq'],
];

/** The existing Sign Up pill — geometry and colors preserved verbatim. */
function SignUpCta({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href={APP_URL}
      onClick={onClick}
      className="relative flex cursor-pointer items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-2xl bg-black px-4 py-3 font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.4] text-white"
      style={{
        boxShadow:
          'inset 0 0.5px 0 0 rgba(255,255,255,0.22), inset 0.5px 0 0 0 rgba(160,186,210,0.18), inset -2px -1px 1px 0 #32EEFF',
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full blur-3xl"
        style={{
          width: 288,
          height: 288,
          left: '442.24px',
          top: '126.86px',
          transformOrigin: 'top left',
          transform: 'rotate(145.14deg)',
          mixBlendMode: 'hard-light',
          background:
            'radial-gradient(ellipse 44.88% 44.88% at 50.29% 57.43%, #0472EF 0%, #7EBDEA 73%, #D3F2E7 100%)',
        }}
      />
      <span className="relative z-10">Sign Up</span>
      <svg className="relative z-10" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function SiteNav({ navItems = defaultItems }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent over the hero video, solid once the page moves under it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="al-container flex h-20 items-center gap-8 max-md:h-16">
        <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Sheldonmind — home">
          <Logo className="size-9 text-white" />
          <span
            data-nowrap-safe="true"
            className="font-['Figtree',sans-serif] text-[22px] font-medium leading-none whitespace-nowrap text-white max-[360px]:hidden"
          >
            Sheldonmind
          </span>
        </a>

        <nav className="hidden flex-1 items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="font-['Figtree',sans-serif] text-[16px] font-medium whitespace-nowrap text-white/80 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <a
            href={APP_URL}
            className="font-['Figtree',sans-serif] text-[16px] font-medium whitespace-nowrap text-white/80 transition-colors hover:text-white"
          >
            Sign In
          </a>
          <SignUpCta />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="ml-auto flex shrink-0 cursor-pointer flex-col gap-1 p-2 lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
        </button>
      </div>

      {mobileOpen && (
        <div className="al-container flex flex-col gap-3 border-t border-white/10 bg-black/95 py-5 backdrop-blur-xl lg:hidden">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="cursor-pointer py-1 font-['Figtree',sans-serif] text-white/80 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="mt-2">
            <SignUpCta onClick={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
