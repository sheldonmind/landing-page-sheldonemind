import CardScroller from '../CardScroller';
import { SecondaryCtaLink } from '../SecondaryCta';
import { APP_URL, CHAT_MODELS, cardFrame } from '../tokens';

/** Blurbs describe what each model is good for, not what its vendor claims. */
const BLURBS: Record<string, string> = {
  ChatGPT: 'Broad general reasoning with strong tool use and code',
  Claude: 'Long-context analysis and careful, structured writing',
  Gemini: 'Native multimodal understanding across text, image, video',
  Grok: 'Fast conversational answers with a real-time slant',
  DeepSeek: 'Cost-efficient reasoning, strong at maths and code',
  'Mistral AI': 'Lean open-weight models that stay quick under load',
  Qwen: 'Multilingual coverage with solid long-form generation',
  Perplexity: 'Search-grounded answers with citations you can follow',
  MiniMax: 'Expressive generation tuned for creative output',
};

export default function Models() {
  return (
    <section id="models" className="al-section w-full overflow-hidden">
      <div className="al-container mb-8">
        <div>
          <h2 className="section-eyebrow m-0 text-white">Every model, one credit balance</h2>
          <p className="mt-2 max-w-[52ch] font-['Figtree',sans-serif] text-[16px] leading-snug text-greygrey-800">
            Pick the right model per conversation. Credits deduct by model and token count —
            nothing expires.
          </p>
        </div>
      </div>

      <div>
        <div className="mx-auto w-full max-w-[1440px] pl-6 md:pl-10">
          <CardScroller pageCount={3}>
            {CHAT_MODELS.map(({ name, icon }) => (
              <div
                key={name}
                style={cardFrame}
                className="flex h-[210px] w-[262px] shrink-0 flex-col rounded-2xl p-6"
              >
                <img src={icon} alt="" aria-hidden className="h-6 w-auto object-contain" loading="lazy" decoding="async" />
                <h3 className="m-0 mt-4 font-['Figtree',sans-serif] text-[17px] font-semibold leading-tight text-white">
                  {name}
                </h3>
                <p className="m-0 mt-2 flex-1 font-['Figtree',sans-serif] text-[14px] leading-snug text-greygrey-800">
                  {BLURBS[name]}
                </p>
                <SecondaryCtaLink href={APP_URL} text="Learn more" size="sm" />
              </div>
            ))}
            <div aria-hidden className="w-6 shrink-0 md:w-10" />
          </CardScroller>
        </div>
      </div>
    </section>
  );
}
