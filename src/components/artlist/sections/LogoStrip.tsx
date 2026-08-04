import Marquee from '../Marquee';
import { CHAT_MODELS, IMAGE_MODELS, TOOLKIT_MODELS, VIDEO_MODELS } from '../tokens';

/**
 * The reference's brand-logo trust row. Ours carries the models instead: chat brands on
 * top, then everything that generates media underneath, running the other way so the two
 * rows read as separate belts rather than one long strip.
 */
const GENERATION_BRANDS = [...IMAGE_MODELS, ...VIDEO_MODELS, ...TOOLKIT_MODELS].filter(
  (m, i, all) => all.findIndex((x) => x.name === m.name) === i,
);

export default function LogoStrip() {
  return (
    <section id="models" className="flex w-full flex-col gap-5 py-6" aria-label="Supported AI models">
      <Marquee items={CHAT_MODELS} speedSeconds={45} />
      <Marquee items={GENERATION_BRANDS} speedSeconds={70} reverse size="sm" />
    </section>
  );
}
