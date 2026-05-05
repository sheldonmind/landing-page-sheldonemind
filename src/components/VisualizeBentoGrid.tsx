import VisualizeMediaCard from './VisualizeMediaCard';
import { VISUAL_ASSETS } from './visualizeConstants';

export default function VisualizeBentoGrid() {
  /* Vertical gap bento → Video Studio: Figma 2316:23696 = 20px; dùng gap-8 (32px) để tách rõ trên nền đen */
  return (
    <div className="flex w-full flex-col gap-8">
      {/* Bento cluster: 350 left + 2×2 right, gutter 20px (Figma) */}
      <div className="flex w-full gap-[20px] max-lg:flex-col">
        <div className="w-[350px] shrink-0 self-stretch max-lg:w-full">
          <VisualizeMediaCard
            label="Create Image"
            src={VISUAL_ASSETS.createImage}
            media="img"
            className="h-full min-h-[580px] max-lg:min-h-70"
          />
        </div>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-[20px]">
          <div className="flex gap-[20px] max-md:flex-col">
            <div className="h-[280px] w-[280px] shrink-0 max-md:w-full">
              <VisualizeMediaCard label="Upscale" src={VISUAL_ASSETS.upscale} media="img" className="h-full" />
            </div>
            <div className="h-[280px] min-h-0 min-w-0 flex-1 max-md:h-[280px]">
              <VisualizeMediaCard
                label="Motion Control"
                src={VISUAL_ASSETS.motion}
                media="video"
                className="h-full"
              />
            </div>
          </div>
          <div className="flex gap-[20px] max-md:flex-col">
            <div className="h-[280px] min-h-0 min-w-0 flex-1 max-md:h-[280px]">
              <VisualizeMediaCard
                label="Create Video"
                src={VISUAL_ASSETS.createVideo}
                media="video"
                className="h-full"
              />
            </div>
            <div className="h-[280px] w-[280px] shrink-0 max-md:w-full">
              <VisualizeMediaCard label="Mixed Media" src={VISUAL_ASSETS.mixed} media="video" className="h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon — Video Studio (Figma 2316:23706, 1412×720) */}
      <div className="relative h-[720px] w-full overflow-hidden rounded-[16px] bg-black max-lg:h-auto">
        <img
          src={VISUAL_ASSETS.comingSoon}
          alt="Video Studio — Coming soon"
          className="block h-full w-full object-cover max-lg:h-auto"
        />
      </div>
    </div>
  );
}
