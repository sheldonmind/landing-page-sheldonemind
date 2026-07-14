import Marquee from '../Marquee';
import { CHAT_MODELS } from '../tokens';

/** The reference's brand-logo trust row. Ours carries the chat models instead. */
export default function LogoStrip() {
  return (
    <section className="w-full py-6" aria-label="Supported AI models">
      <Marquee items={CHAT_MODELS} speedSeconds={45} />
    </section>
  );
}
