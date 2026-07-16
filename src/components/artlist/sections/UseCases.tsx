import CardScroller from '../CardScroller';
import HoverVideoCard from '../HoverVideoCard';
import MotionControlCard from '../MotionControlCard';
import UpscaleCard from '../UpscaleCard';
import { MEDIA } from '../tokens';

const CARDS = [
  {
    label: 'Create Image',
    caption: 'Studio-quality images from a prompt or reference',
    src: MEDIA.createImage,
    kind: 'img' as const,
  },
  {
    label: 'Imagine Studio',
    caption: 'From a spark of an idea to finished art',
    src: MEDIA.imagine,
    kind: 'img' as const,
  },
  {
    label: 'Create Video',
    caption: 'Text or image in, cinematic clip out',
    src: MEDIA.create,
    kind: 'video' as const,
  },
  {
    label: 'Motion Control',
    caption: 'Direct camera and subject, shot by shot',
    src: MEDIA.motion,
    kind: 'video' as const,
  },
  {
    label: 'Drama Studio',
    caption: 'Turn a script into a film, scene by scene',
    src: MEDIA.drama,
    kind: 'video' as const,
  },
  {
    label: 'Upscale',
    caption: 'Sharpen any asset to a cleaner, higher resolution',
    src: MEDIA.upscale,
    kind: 'img' as const,
  },
  {
    label: 'Inpaint',
    // TODO: swap for a before/after inpaint visual — using Mixed media as a placeholder.
    caption: 'Repaint any masked area from a prompt',
    src: MEDIA.mixed,
    kind: 'video' as const,
  },
  {
    label: 'Outpaint',
    caption: 'Extend the frame beyond its edges',
    src: MEDIA.snowboard,
    kind: 'img' as const,
  },
  {
    label: 'Relight',
    caption: 'Relight a scene with new light and mood',
    src: MEDIA.prism,
    kind: 'img' as const,
  },
];

/** Left eyebrow + subcopy, right "See all", then a rail that bleeds off the right edge. */
export default function UseCases() {
  return (
    <section id="features" className="al-section w-full overflow-hidden">
      <div className="al-container">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="section-eyebrow m-0 text-white">Explore what you can build</h2>
            <p className="mt-2 max-w-[58ch] font-['Figtree',sans-serif] text-[16px] leading-snug text-greygrey-800">
              Chat, image, and video generation.
            </p>
          </div>
        </div>
      </div>

      {/* Rail starts at the container's left edge but runs to the viewport's right edge. */}
      <div>
        <div className="mx-auto w-full max-w-[1440px] pl-6 md:pl-10">
          <CardScroller>
            {CARDS.map((card) => {
              const size = 'h-[260px] w-[260px] md:h-[290px] md:w-[290px]';
              if (card.label === 'Motion Control') {
                return (
                  <MotionControlCard key={card.label} label={card.label} caption={card.caption} className={size} />
                );
              }
              if (card.label === 'Upscale') {
                return (
                  <UpscaleCard key={card.label} label={card.label} caption={card.caption} className={size} />
                );
              }
              return <HoverVideoCard key={card.label} {...card} className={size} />;
            })}
            <div aria-hidden className="w-6 shrink-0 md:w-10" />
          </CardScroller>
        </div>
      </div>
    </section>
  );
}
