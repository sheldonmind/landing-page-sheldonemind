type Props = {
  /**
   * On non-landing pages (e.g. /pricing.html) hash-only links don't navigate
   * back to the landing page. Pass a path prefix like "/" to render
   * "/#features" instead of "#features".
   */
  hashPrefix?: string;
};

export default function SiteFooter({ hashPrefix = '' }: Props) {
  const year = new Date().getFullYear();
  const h = (hash: string) => `${hashPrefix}${hash}`;

  const sections = [
    {
      title: 'Product',
      widthClass: 'md:w-59.75',
      items: ['AI Chat', 'Create Image', 'Create Video', 'Upscale', 'Motion Control', 'Mixed Media', 'Video Studio'].map((label) => ({ label, href: h('#features') })),
    },
    {
      title: 'Company',
      widthClass: 'md:w-59.5',
      items: [
        { label: 'Contact Us', href: h('#contact') },
        { label: 'Pricing', href: hashPrefix ? '/pricing.html' : '#pricing' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Term of Service', href: '/terms' },
      ],
    },
    {
      title: 'Get in Touch',
      widthClass: 'md:w-54.75',
      items: ['Customer Support', 'Instagram', 'Facebook', 'X', 'LinkedIn'].map((label) => ({ label, href: h('#contact') })),
    },
  ];

  return (
    <footer
      className="relative flex w-full flex-col items-stretch gap-37.5 overflow-hidden p-12.5 text-white max-md:gap-16 max-md:p-6"
      aria-label="Footer"
    >
      <div
        aria-hidden="true"
        className="absolute -left-11.25 -top-258.25 h-818.25 w-376 rotate-60 blur-[150px]"
      >
        <div className="absolute left-38 top-487.75 h-330.5 w-174 rounded-[1568.56px] bg-[#FFD96B]" />
        <div className="absolute left-116.25 top-21.25 h-330.5 w-174 rotate-[-30deg] rounded-[1568.56px] bg-[#73ffd5]" />
        <div className="absolute left-px top-53 h-509.75 w-330.5 rounded-[1568.56px] bg-[#1E5BB8]" />
        <div className="absolute left-116.25 top-405.25 h-330.5 w-174 rounded-[1568.56px] bg-[#31edff]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-75 -top-125 h-500 w-375 rounded-full bg-[#2E81FF] opacity-90 blur-[200px]"
      />
      <div className="relative flex w-full flex-col items-start self-stretch md:h-137.5">
        <div className="relative flex w-full flex-col items-start justify-between gap-10 md:flex-row">
          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-5 self-stretch">
            <img className="h-17.5 w-17.5" alt="Sheldonmind icon" src="/Frame 880.png" />
            <span className="font-['Figtree'] text-[20px] font-medium leading-[1.4] text-white">
              Sheldonmind © {year}
            </span>
          </div>
          <nav className="relative grid w-full grid-cols-1 items-start gap-8 sm:grid-cols-3 md:flex md:w-174 md:gap-0" aria-label="Footer navigation">
            {sections.map((section) => (
              <section
                key={section.title}
                className={`relative flex w-full flex-col items-start gap-3 ${section.widthClass} ${section.title === 'Company' ? 'md:self-stretch' : ''}`}
              >
                <h2
                  className={`relative -mt-px flex items-center whitespace-nowrap font-['Figtree'] text-[22px] font-medium leading-[1.3] text-white ${section.title !== 'Company' ? 'self-stretch' : ''}`}
                >
                  {section.title}
                </h2>
                <ul className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-0.5">
                  {section.items.map(({ label, href }, index) => (
                    <li key={label} className="list-none">
                      <a
                        href={href}
                        className={`relative flex w-fit items-center whitespace-nowrap font-['Figtree'] text-[20px] font-normal leading-[1.4] text-greygrey-800 transition-colors hover:text-white ${index === 0 ? '-mt-px' : ''}`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
