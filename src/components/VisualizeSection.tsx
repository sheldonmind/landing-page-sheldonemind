/**
 * Section 2 — Visualize (Figma 2316:23687).
 * Container y=100 → pt-[100px]. Title 2316:23689 cao 350px, hàng copy ~144px → ~206px khoảng dưới trước Content;
 * Content y=370 → gap title→bento 20px (gap-5). Cột phải 2316:23692: gap 40px (gap-10). pb gọn trước AiModels.
 */
import VisualizeBentoGrid from './VisualizeBentoGrid';
import VisualizeSectionHeader from './VisualizeSectionHeader';

export default function VisualizeSection() {
  return (
    <section className="relative box-border mx-[50px] w-[calc(100%-100px)] max-w-full overflow-hidden bg-black pt-[100px] pb-5 max-lg:mx-[calc(2rem+10px)] max-lg:w-[calc(100%-2*((2rem+10px)))] max-md:mx-[calc(1rem+10px)] max-md:w-[calc(100%-2*((1rem+10px)))] max-md:py-16 max-[220px]:mx-2 max-[220px]:w-[calc(100%-16px)]">
      <div className="flex w-full flex-col gap-5 max-md:gap-6">
        <VisualizeSectionHeader />
        <VisualizeBentoGrid />
      </div>
    </section>
  );
}
