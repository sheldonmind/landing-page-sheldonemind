import HeroSection from './components/HeroSection';
import Section1 from './components/Section1';
import VisualizeSection from './components/VisualizeSection';
import AiModelsSection from './components/AiModelsSection';
import GallerySection from './components/GallerySection';
import PricingTeaserSection from './components/PricingTeaserSection';
import SiteNav from './components/SiteNav';
import SiteFaq from './components/SiteFaq';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-stretch bg-black overflow-hidden font-sans text-white">
      <SiteNav />

      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <Section1 />
        <VisualizeSection />
        <AiModelsSection />
        <GallerySection />
        <PricingTeaserSection />
        <SiteFaq />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
