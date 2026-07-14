import CardScroller from '../CardScroller';
import HoverVideoCard from '../HoverVideoCard';
import { MEDIA } from '../tokens';

const CARDS = [
  {
    label: 'Create Image',
    caption: 'High-end visuals from a prompt or a reference',
    src: MEDIA.createImage,
    kind: 'img' as const,
  },
  {
    label: 'Create Video',
    caption: 'Text, image, or video in — cinematic clip out',
    src: MEDIA.create,
    kind: 'video' as const,
  },
  {
    label: 'Motion Control',
    caption: 'Direct the camera and the subject, shot by shot',
    src: MEDIA.motion,
    kind: 'video' as const,
  },
  {
    label: 'Mixed Media',
    caption: 'Blend footage, stills, and generations in one pass',
    src: MEDIA.mixed,
    kind: 'video' as const,
  },
  {
    label: 'Upscale',
    caption: 'Push any asset to a sharper, cleaner resolution',
    src: MEDIA.upscale,
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
              Chat, image, and video generation in a single workspace — no tab-switching.
            </p>
          </div>
          <a
            href="#gallery"
            className="hidden shrink-0 items-center gap-1.5 font-['Figtree',sans-serif] text-[15px] font-medium text-white underline underline-offset-4 hover:text-white/80 sm:flex"
          >
            See all
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Rail starts at the container's left edge but runs to the viewport's right edge. */}
      <div>
        <div className="mx-auto w-full max-w-[1440px] pl-6 md:pl-10">
          <CardScroller>
            {CARDS.map((card) => (
              <HoverVideoCard
                key={card.label}
                {...card}
                className="h-[260px] w-[260px] md:h-[290px] md:w-[290px]"
              />
            ))}
            <div aria-hidden className="w-6 shrink-0 md:w-10" />
          </CardScroller>
        </div>
      </div>
    </section>
  );
}
