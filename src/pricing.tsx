import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SiteNav from './components/SiteNav';
import PricingCards from './components/PricingCards';
import SiteFaq from './components/SiteFaq';
import SiteFooter from './components/SiteFooter';

export function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col items-stretch bg-black overflow-hidden font-sans text-white">
      <SiteNav
        navItems={[
          ['Feature', '/#features'],
          ['Models', '/#models'],
          ['Studio', '/#studio'],
          ['Pricing', '/pricing.html'],
          ['FAQ', '/#faq'],
        ]}
      />
      {/* Nav is fixed, so the page needs to clear its 80px band. */}
      <main className="w-full overflow-x-hidden pt-20">
        <PricingCards />
        <SiteFaq />
      </main>
      <SiteFooter hashPrefix="/" />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PricingPage />
  </StrictMode>,
);
