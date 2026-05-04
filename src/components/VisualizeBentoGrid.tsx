import VisualizeMediaCard from './VisualizeMediaCard';
import { VISUAL_ASSETS, visualCardFrameStyle } from './visualizeConstants';

export default function VisualizeBentoGrid() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 xl:px-10.5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
        <div className="w-full shrink-0 lg:w-[min(600px,48vw)] lg:max-w-150">
          <VisualizeMediaCard
            label="Create Image"
            src={VISUAL_ASSETS.createImage}
            media="img"
            className="min-h-75 h-full lg:min-h-[calc(430px+430px+1rem)]"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
            <div className="w-full shrink-0 lg:w-[min(440px,34vw)] lg:max-w-110">
              <VisualizeMediaCard
                label="Upscale"
                src={VISUAL_ASSETS.upscale}
                media="img"
                className="min-h-70 h-full lg:min-h-107.5"
              />
            </div>
            <div className="min-h-70 min-w-0 flex-1 lg:min-h-107.5">
              <VisualizeMediaCard
                label="Motion Control"
                src={VISUAL_ASSETS.motion}
                media="video"
                centerPlay
                className="h-full min-h-70 lg:min-h-107.5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
            <div className="min-h-70 min-w-0 flex-1 lg:min-h-107.5">
              <VisualizeMediaCard
                label="Create"
                src={VISUAL_ASSETS.createVideo}
                media="video"
                className="h-full min-h-70 lg:min-h-107.5"
              />
            </div>
            <div className="w-full shrink-0 lg:w-[min(440px,34vw)] lg:max-w-110">
              <VisualizeMediaCard
                label="Mixed Media"
                src={VISUAL_ASSETS.mixed}
                media="video"
                centerPlay
                className="min-h-70 h-full lg:min-h-107.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative mt-4 w-full overflow-hidden rounded-xl bg-black"
        style={visualCardFrameStyle}
      >
        <img
          src={VISUAL_ASSETS.comingSoon}
          alt="Video Studio — Coming soon"
          className="block h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
