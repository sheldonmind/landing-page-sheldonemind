import SiteNav from './components/SiteNav';
import SiteFaq from './components/SiteFaq';
import SiteFooter from './components/SiteFooter';

import Hero from './components/artlist/sections/Hero';
import UseCases from './components/artlist/sections/UseCases';
import LogoStrip from './components/artlist/sections/LogoStrip';
import Toolkit from './components/artlist/sections/Toolkit';
import MultiChat from './components/artlist/sections/MultiChat';
import DramaStudio from './components/artlist/sections/DramaStudio';
import ImagineStudio from './components/artlist/sections/ImagineStudio';
import WhyUs from './components/artlist/sections/WhyUs';
import Pricing from './components/artlist/sections/Pricing';
import CtaBand from './components/artlist/sections/CtaBand';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-sans text-white">
      <SiteNav />

      <main className="w-full">
        <Hero />
        <UseCases />
        <LogoStrip />
        <Toolkit />
        <MultiChat />
        <DramaStudio />
        <ImagineStudio />
        <WhyUs />
        <Pricing />
        <CtaBand />
        <SiteFaq />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
