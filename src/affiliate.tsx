import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import { AffiliateHero } from './components/affiliate/AffiliateHero';
import { AffiliateFeatures } from './components/affiliate/AffiliateFeatures';
import { AffiliateSteps } from './components/affiliate/AffiliateSteps';
import { AffiliateCta } from './components/affiliate/AffiliateCta';

/**
 * Public mirror of the app's affiliate page (SeldonMind/frontend/src/pages/AffiliatePage),
 * which sits behind auth. Same sections and copy, wrapped in the landing page's nav and
 * footer instead of the app's ScrollArea shell.
 */
export function AffiliatePage() {
  return (
    <div className="flex min-h-screen flex-col items-stretch overflow-hidden bg-black font-sans text-white">
      <SiteNav
        navItems={[
          ['Feature', '/#features'],
          ['Models', '/#models'],
          ['Chat', '/#chat'],
          ['Imagine Studio', '/#studio'],
          ['Drama Studio', '/#drama-studio'],
          ['Pricing', '/pricing.html'],
          ['Affiliate', '/affiliate.html'],
          ['FAQ', '/#faq'],
        ]}
      />
      {/* Nav is fixed, so the page needs to clear its 80px band. */}
      <main className="w-full overflow-x-hidden pt-20">
        <div className="mx-auto w-full max-w-6xl space-y-14 px-4 py-8 sm:py-12">
          <AffiliateHero />
          <AffiliateFeatures />
          {/* Anchor target for the hero's "Learn more" button. */}
          <div id="how-it-works" className="scroll-mt-24 pt-12 sm:pt-16">
            <AffiliateSteps />
          </div>
          <div className="pt-12 pb-8 sm:pt-16">
            <AffiliateCta />
          </div>
        </div>
      </main>
      <SiteFooter hashPrefix="/" />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AffiliatePage />
  </StrictMode>,
);
