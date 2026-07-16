import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SiteNav from './components/SiteNav';
import ChangePlanCards from './components/ChangePlanCards';
import PlanFaq from './components/PlanFaq';
import SiteFooter from './components/SiteFooter';

export function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col items-stretch bg-black overflow-hidden font-sans text-white">
      <SiteNav
        navItems={[
          ['Feature', '/#features'],
          ['Models', '/#models'],
          ['Chat', '/#chat'],
          ['Imagine Studio', '/#studio'],
          ['Drama Studio', '/#drama-studio'],
          ['Pricing', '/pricing.html'],
          ['FAQ', '/#faq'],
        ]}
      />
      {/* Nav is fixed, so the page needs to clear its 80px band. */}
      <main className="w-full overflow-x-hidden pt-20">
        <ChangePlanCards />
        <PlanFaq />
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
