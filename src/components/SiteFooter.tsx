import Logo from './artlist/Logo';
import { CHAT_MODELS } from './artlist/tokens';

type Props = {
  /**
   * On non-landing pages (e.g. /pricing.html) hash-only links don't navigate
   * back to the landing page. Pass a path prefix like "/" to render
   * "/#features" instead of "#features".
   */
  hashPrefix?: string;
};

const SOCIAL_URLS = {
  facebook: 'https://www.facebook.com/profile.php?id=61562936281216',
  instagram: 'https://www.instagram.com/mind.sheldon/',
  linkedin: 'https://www.linkedin.com/company/114384569/',
  x: 'https://x.com/sheldonmin62932',
} as const;

const SOCIALS: { label: string; href: string; path: string }[] = [
  { label: 'Instagram', href: SOCIAL_URLS.instagram, path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.2-1.2h.01' },
  { label: 'Facebook', href: SOCIAL_URLS.facebook, path: 'M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.5-1.5H16.7V3.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.7v8h3Z' },
  { label: 'X', href: SOCIAL_URLS.x, path: 'M4 3.5l6.4 8.3L4.3 20.5M20 3.5l-6.3 8.3 6.1 8.7M4 3.5h3.9l12.1 17h-3.9L4 3.5Z' },
  { label: 'LinkedIn', href: SOCIAL_URLS.linkedin, path: 'M6.5 9.5v10M6.5 5.6v.01M11.5 19.5v-5.6a2.8 2.8 0 0 1 5.6 0v5.6M11.5 9.5v10' },
];

export default function SiteFooter({ hashPrefix = '' }: Props) {
  const year = new Date().getFullYear();
  const h = (hash: string) => `${hashPrefix}${hash}`;

  const columns = [
    {
      title: 'Product',
      // AI Chat lives in its own section; the rest are cards in the #features rail.
      // Imagine Studio owns the #studio anchor; Drama Studio has its own.
      items: [
        { label: 'AI Chat', href: h('#chat') },
        { label: 'Create Image', href: h('#features') },
        { label: 'Create Video', href: h('#features') },
        { label: 'Upscale', href: h('#features') },
        { label: 'Motion Control', href: h('#features') },
        { label: 'Drama Studio', href: h('#drama-studio') },
        { label: 'Imagine Studio', href: h('#studio') },
      ],
    },
    {
      title: 'Models',
      // Driven off the same source as the #models marquee so the two can't drift.
      items: CHAT_MODELS.map(({ name }) => ({
        label: name,
        href: h('#models'),
      })),
    },
    {
      title: 'Company',
      items: [
        { label: 'Contact Us', href: h('#contact') },
        { label: 'Pricing', href: hashPrefix ? '/pricing.html' : '#pricing' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Term of Service', href: '/terms' },
      ],
    },
    {
      title: 'Get in Touch',
      items: [
        { label: 'Customer Support', href: 'mailto:support@sheldonmind.com' },
        { label: 'Instagram', href: SOCIAL_URLS.instagram },
        { label: 'Facebook', href: SOCIAL_URLS.facebook },
        { label: 'LinkedIn', href: SOCIAL_URLS.linkedin },
      ],
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 pt-20 pb-10 text-white max-md:pt-14" aria-label="Footer">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-64 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[180px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(4,114,239,0.35) 0%, transparent 70%)',
        }}
      />

      <div className="al-container">
        <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col items-start gap-4">
            <Logo className="size-11 text-white" />
            <p className="m-0 max-w-[32ch] font-['Figtree',sans-serif] text-[15px] leading-snug text-greygrey-800">
              Multi-AI chat, image and video generation. Pay as you go — no subscription required.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3.5">
              <h2 className="m-0 font-['Figtree',sans-serif] text-[15px] font-semibold leading-none text-white">
                {col.title}
              </h2>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {col.items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                      className="font-['Figtree',sans-serif] text-[15px] font-normal text-greygrey-800 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-between gap-6 border-t border-white/10 pt-8 max-md:mt-12 max-md:flex-col max-md:items-start">
          <div className="flex items-center gap-5">
            {SOCIALS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="text-white/55 transition-colors hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d={path} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-7 font-['Figtree',sans-serif] text-[14px] text-greygrey-800 max-md:flex-wrap max-md:gap-4">
            <span>Sheldonmind © {year}</span>
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Term of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
