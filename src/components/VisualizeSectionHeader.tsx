import { FigmaPrimaryCtaLink } from './FigmaPrimaryCta';
import { visualHeadlineStyle } from './visualizeConstants';

export default function VisualizeSectionHeader() {
  return (
    <div
      className="flex w-full flex-col gap-[32px] max-md:gap-6 lg:min-h-[350px]"
      data-node-id="2316:23689"
      data-name="Title"
    >
      <div
        className="flex w-full items-start justify-between max-lg:flex-col max-lg:gap-8 lg:gap-0"
        data-node-id="2316:23690"
      >
        <h2
          className="m-0 max-w-[674.682px] shrink-0 font-['Figtree',sans-serif] text-[72px] font-medium leading-none max-lg:text-[56px] max-md:text-[40px] max-md:leading-tight"
          style={visualHeadlineStyle}
          data-node-id="2316:23691"
        >
          Visualize Your Imagination.
        </h2>
        <div
          className="flex w-full max-w-[547px] min-w-0 flex-col items-start gap-10 self-stretch max-lg:max-w-none max-md:gap-6"
          data-node-id="2316:23692"
        >
          <p className="m-0 font-['Figtree',sans-serif] text-[18px] font-normal leading-[1.2] text-greygrey-800">
            Generate stunning images, cinematic videos, and take full command with advanced motion control—all from a single prompt.
          </p>
          <FigmaPrimaryCtaLink text="Try Free Now" />
        </div>
      </div>
    </div>
  );
}
