import EdgeFadeHeading from '../EdgeFadeHeading';
import HoverVideoCard from '../HoverVideoCard';
import { MEDIA } from '../tokens';

/** Four near-square tiles running edge to edge, labels set in italic serif. */
const TILES = [
  { label: 'Images', src: MEDIA.createImage, kind: 'img' as const },
  { label: 'Video', src: MEDIA.snowboarder, kind: 'video' as const },
  { label: 'Motion', src: MEDIA.motion, kind: 'video' as const },
  { label: 'Mixed', src: MEDIA.mixed, kind: 'video' as const },
];

export default function Gallery() {
  return (
    <section id="gallery" className="al-section w-full overflow-hidden">
      <div className="al-container flex flex-col items-center text-center">
        <EdgeFadeHeading lines={['Explore stunning', 'AI art.']} />
      </div>

      <div className="mt-14 max-md:mt-10">
        {/* Bleeds past the container on both sides, like the reference's catalog row. */}
        <div className="grid grid-cols-4 gap-4 px-6 max-lg:grid-cols-2 md:px-10">
          {TILES.map(({ label, src, kind }) => (
            <HoverVideoCard
              key={label}
              src={src}
              kind={kind}
              label={label}
              className="aspect-square w-full"
              labelClassName="serif-display !text-[clamp(26px,2.4vw,40px)] italic !leading-none !font-normal"
            />
          ))}
        </div>
      </div>

      <div className="al-container">
        <div>
          <p className="mx-auto mt-12 max-w-[62ch] text-center font-['Figtree',sans-serif] text-[18px] leading-[1.45] text-white max-md:mt-8 max-md:text-[16px]">
            Browse the gallery, find something you love, and{' '}
            <strong className="font-semibold">remix it with one click</strong> — same prompt,
            same settings, your own twist.
          </p>
        </div>
      </div>
    </section>
  );
}
