import CardScroller from '../CardScroller';
import HoverVideoCard from '../HoverVideoCard';
import MotionControlCard from '../MotionControlCard';
import UpscaleCard from '../UpscaleCard';
import { MEDIA, TOOL_MEDIA } from '../tokens';

/**
 * Mirrors the tool grid on app.sheldonmind.com/create, in the same order, so the rail and
 * the app can't drift.
 *
 * Every clip and poster comes from the app's own assets (see TOOL_MEDIA) rather than stock
 * stand-ins — these are the demos the product already ships for each tool. Motion Control
 * and Upscale keep their bespoke cards, which demo the tool rather than just show it.
 */
type Card =
  | { label: string; caption: string; kind: 'img'; src: string }
  | { label: string; caption: string; kind: 'video'; src: string; poster: string }
  | { label: string; caption: string; kind: 'custom' };

const CARDS: Card[] = [
  {
    label: 'Create Image',
    caption: 'Studio-quality images from a prompt or reference',
    src: MEDIA.createImage,
    kind: 'img',
  },
  {
    label: 'Imagine Studio',
    caption: 'From a spark of an idea to finished art',
    src: '/tools/imagine-studio.jpg',
    kind: 'img',
  },
  {
    label: 'Create Video',
    caption: 'Text or image in, cinematic clip out',
    kind: 'video',
    ...TOOL_MEDIA.createVideo,
  },
  { label: 'Motion Control', caption: 'Direct camera and subject, shot by shot', kind: 'custom' },
  {
    label: 'Drama Studio',
    caption: 'Turn a script into a film, scene by scene',
    kind: 'video',
    ...TOOL_MEDIA.dramaStudio,
  },
  {
    label: 'Video Extend',
    caption: 'Carry an existing clip past its last frame',
    kind: 'video',
    ...TOOL_MEDIA.videoExtend,
  },
  {
    label: 'Lipsync',
    caption: 'Sync any face to an audio track',
    kind: 'video',
    ...TOOL_MEDIA.lipsync,
  },
  {
    label: 'Upscale',
    caption: 'Sharpen any asset to a cleaner, higher resolution',
    kind: 'custom',
  },
  {
    label: 'Inpaint',
    caption: 'Repaint any masked area from a prompt',
    kind: 'video',
    ...TOOL_MEDIA.inpaint,
  },
  {
    label: 'Outpaint',
    caption: 'Extend the frame beyond its edges',
    kind: 'video',
    ...TOOL_MEDIA.outpaint,
  },
  {
    label: 'Relight',
    caption: 'Relight a scene with new light and mood',
    kind: 'video',
    ...TOOL_MEDIA.relight,
  },
  {
    label: 'Camera Angles',
    caption: "Re-angle the subject's viewpoint without a reshoot",
    kind: 'video',
    ...TOOL_MEDIA.cameraAngles,
  },
  {
    label: 'Text to Speech',
    caption: 'Turn text into natural-sounding speech',
    kind: 'video',
    ...TOOL_MEDIA.textToSpeech,
  },
  {
    label: 'Music',
    caption: 'Generate a full track from a text prompt',
    kind: 'video',
    ...TOOL_MEDIA.music,
  },
  {
    label: 'Sound Effects',
    caption: 'Describe a sound, get it back as audio',
    kind: 'video',
    ...TOOL_MEDIA.soundEffects,
  },
  {
    label: 'Voice Cloning',
    caption: 'Clone a voice, then have it read anything',
    kind: 'video',
    ...TOOL_MEDIA.voiceCloning,
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
              Chat, image, video and audio generation — {CARDS.length} tools in one workspace.
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
              if (card.kind === 'custom') return null;
              return (
                <HoverVideoCard
                  key={card.label}
                  src={card.src}
                  kind={card.kind}
                  poster={card.kind === 'video' ? card.poster : undefined}
                  label={card.label}
                  caption={card.caption}
                  className={size}
                />
              );
            })}
            <div aria-hidden className="w-6 shrink-0 md:w-10" />
          </CardScroller>
        </div>
      </div>
    </section>
  );
}
