import { useState } from 'react';

type NavItem = [label: string, href: string];

type Props = {
  /**
   * Override anchors when not on the landing page (e.g. on /pricing.html the
   * landing-page sections need to be linked with absolute paths instead of
   * pure hashes).
   */
  navItems?: NavItem[];
};

const defaultItems: NavItem[] = [
  ['Feature', '#features'],
  ['Gallery', '#gallery'],
  ['Pricing', '#pricing'],
  ['FQA', '#faq'],
  ['Contact', '#contact'],
];

export default function SiteNav({ navItems = defaultItems }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="z-30 w-full bg-black">
      <div className="flex w-full items-center gap-1 px-[100px] py-5 max-lg:px-[50px] max-md:px-4">
        <a href="/" className="flex flex-1 items-center gap-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-[80px] w-[80px] shrink-0">
              <svg width="100%" height="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="sn-mL" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                  <path d="M16.6667 33.3333C25.8714 33.3333 33.3333 25.8714 33.3333 16.6667C33.3333 7.46192 25.8714 0 16.6667 0C7.46192 0 0 7.46192 0 16.6667C0 25.8714 7.46192 33.3333 16.6667 33.3333Z" fill="white" />
                </mask>
                <g mask="url(#sn-mL)">
                  <path d="M-11.046 12.521V4.82065L6.78769 9.27875C10.1436 10.1176 12.4976 13.1331 12.4976 16.5925L-11.046 12.521Z" fill="white" />
                  <path d="M-2.42644 20.6635V28.3638L7.02287 24.6373C10.3268 23.3341 12.4984 20.1439 12.4984 16.592L-2.42644 20.6635Z" fill="white" />
                  <path d="M20.9879 -10.4149H28.6883L24.2302 7.41878C23.3913 10.7747 20.3758 13.1287 16.9164 13.1287L20.9879 -10.4149Z" fill="white" />
                  <path d="M12.846 -1.79567H5.14561L8.87215 7.65364C10.1753 10.9576 13.3656 13.1291 16.9174 13.1291L12.846 -1.79567Z" fill="white" />
                  <path d="M44.3876 21.109V28.8093L26.5539 24.3512C23.1979 23.5124 20.844 20.4969 20.844 17.0375L44.3876 21.109Z" fill="white" />
                  <path d="M35.7687 12.9662V5.26588L26.3194 8.99242C23.0155 10.2956 20.844 13.4858 20.844 17.0377L35.7687 12.9662Z" fill="white" />
                  <path d="M20.8707 43.7476H28.5711L24.113 25.9139C23.2741 22.5579 20.2586 20.204 16.7993 20.204L20.8707 43.7476Z" fill="white" />
                  <path d="M12.7288 35.1287H5.02842L8.75496 25.6794C10.0582 22.3755 13.2484 20.204 16.8002 20.204L12.7288 35.1287Z" fill="white" />
                  <path d="M21.0639 16.4755C21.0639 18.4011 21.5418 20.5553 22.8052 22.0756C21.1429 20.3896 19.1724 19.4288 16.9193 19.4288C14.5132 19.4288 12.377 20.0242 10.6621 21.9228C11.9126 20.4083 12.3661 18.5065 12.3661 16.5924C12.3661 14.6784 11.8921 13.2153 10.6807 11.7181C12.3295 13.3502 14.4927 14.3168 16.7067 14.3168C19.0703 14.3168 21.2399 13.2153 22.9407 11.3777C21.7486 12.8665 21.0633 14.6116 21.0633 16.4762L21.0639 16.4755Z" fill="white" />
                </g>
              </svg>
            </div>
            <span className="font-productSans text-[30px] font-medium text-white">Sheldonmind</span>
          </div>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="flex items-center justify-center whitespace-nowrap rounded-2xl border border-white/15 px-[30px] py-3 font-productSans text-lg font-medium text-white transition-all hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          <a
            href="https://app.sheldonmind.com/"
            className="relative flex cursor-pointer items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-2xl bg-black px-6 py-3 font-productSans text-lg font-medium text-white"
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
                background: 'radial-gradient(ellipse 44.88% 44.88% at 50.29% 57.43%, #0472EF 0%, #7EBDEA 73%, #D3F2E7 100%)',
              }}
            />
            <span className="relative z-10">Sign Up</span>
            <svg className="relative z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <button type="button" onClick={() => setMobileOpen((o) => !o)} className="ml-auto flex flex-col gap-1 p-2 md:hidden">
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/98 md:hidden px-6 py-4 flex flex-col gap-3">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="py-1 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="https://app.sheldonmind.com/"
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 px-6 py-3 font-medium text-white"
            onClick={() => setMobileOpen(false)}
          >
            Sign Up ↗
          </a>
        </div>
      )}
    </header>
  );
}
