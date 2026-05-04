/**
 * Section 2 — Visualize gallery + Video Studio (Figma 2316:23687).
 * Bento: no outer cell borders, even gaps, small radius; some video tiles show centered Play.
 */
import VisualizeBentoGrid from './VisualizeBentoGrid';
import VisualizeSectionHeader from './VisualizeSectionHeader';

export default function VisualizeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-30 pb-5 max-md:pt-10 max-md:pb-5">
      <VisualizeSectionHeader />
      <VisualizeBentoGrid />
    </section>
  );
}
