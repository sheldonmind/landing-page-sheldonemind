import type { CSSProperties } from 'react';

/** App accent ramp — mirrors FigmaPrimaryCta's gradient so glows stay in family. */
export const ACCENT = {
  blue: '#0472EF',
  mid: '#7EBDEA',
  pale: '#D3F2E7',
  cyan: '#32EEFF',
} as const;

/**
 * Radial wash behind headings and cards.
 *
 * Deliberately NOT `mix-blend-mode: overlay` — overlay against the #0a0a0a page
 * background composites to very nearly nothing, so the glow vanishes. Normal
 * blend at low opacity is what actually reads on a near-black canvas.
 */
export const accentGlow = (opacity = 0.22): CSSProperties => ({
  background: `radial-gradient(closest-side, ${ACCENT.blue} 0%, ${ACCENT.mid}66 55%, transparent 100%)`,
  opacity,
});

/** Hairline border that fades left→right, used on every card in the reference. */
export const cardFrame: CSSProperties = {
  border: '1px solid transparent',
  backgroundImage:
    'linear-gradient(#000, #000), linear-gradient(to right, rgba(255,255,255,0.30), rgba(255,255,255,0.12))',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
};

/** Inset edge lighting shared by the primary CTA and its outline companion. */
export const INSET_EDGE =
  'inset 0 0.5px 0 0 rgba(255,255,255,0.22), inset 0.5px 0 0 0 rgba(160,186,210,0.18), inset -2px -1px 1px 0px #32eeff';

export const MEDIA = {
  /** Only landscape clip long enough to loop without an obvious cut. */
  hero: '/Create.mp4',
  /** Portrait 1292×1604 — only usable in square/portrait tiles, never full-bleed. */
  snowboarder: '/Snowboarder%20Rotates%20Video.mp4',
  create: '/Create.mp4',
  motion: '/Motion%20control.mp4',
  mixed: '/Mixed%20media.mp4',
  createImage: '/create-image.jpg',
  imagine: '/Imagine.png',
  drama: '/Drama%20studio.mp4',
  upscale: '/Upscale.png',
  comingSoon: '/Coming%20soon.png',
  content: '/Content.png',
  section4: '/Section4.png',
  prism: '/Prism%20stairs.png',
  snowboard: '/unsplash_FeBoOVQv0sQ.png',
  toolkitBg: '/Toolkit%20bg.png',
  pricing: '/Pricing.png',
  faq: '/FAQ.png',
} as const;

/**
 * Generation models, shown in the hero pill bar.
 *
 * `img` points at monochrome white glyphs under /model-icons, extracted from the
 * `*-warp.png` chips. The chips ship as complete bordered pills — icon, ring, label,
 * fill — which cannot go inside a single glass bar without nesting frames.
 */
export const GEN_MODELS = [
  { name: 'Veo', img: '/model-icons/veo.png' },
  { name: 'Nano Banana', img: '/model-icons/nano-banana.png' },
  { name: 'Kling', img: '/model-icons/kling.png' },
  { name: 'Seedance', img: '/model-icons/seedance.png' },
  { name: 'Flux', img: '/model-icons/flux.png' },
  { name: 'Luma', img: '/model-icons/luma.png' },
  { name: 'ElevenLabs', img: '/model-icons/elevenlabs.png' },
  { name: 'GPT Image', img: '/model-icons/gpt-image.png' },
  { name: 'Imagen', img: '/model-icons/imagen.png' },
  { name: 'Seedream', img: '/model-icons/seedream.png' },
  { name: 'Hailuo', img: '/model-icons/hailuo.png' },
  { name: 'Qwen Image', img: '/model-icons/qwen-image.png' },
  { name: 'Wan', img: '/model-icons/wan.png' },
  { name: 'Stability', img: '/model-icons/stability.png' },
  { name: 'Grok Imagine', img: '/model-icons/grok-imagine.png' },
  { name: 'Pika', img: '/model-icons/pika.png' },
  { name: 'Vidu', img: '/model-icons/vidu.png' },
  { name: 'Recraft', img: '/model-icons/recraft.png' },
  { name: 'Topaz', img: '/model-icons/topaz.png' },
  { name: 'Leonardo', img: '/model-icons/leonardo.png' },
  { name: 'PixVerse', img: '/model-icons/pixverse.png' },
] as const;

/**
 * Chat models, shown in the marquee and the model scroller.
 *
 * Icons are monochrome white glyphs extracted from the `Logo Fullname-*.png` chips, for
 * the same reason as GEN_MODELS: those chips are whole bordered pills, and the reference's
 * trust strip is a flat wordmark row.
 */
export const CHAT_MODELS = [
  { name: 'ChatGPT', icon: '/model-icons/chat-chatgpt.png' },
  { name: 'Claude', icon: '/model-icons/chat-claude.png' },
  { name: 'Gemini', icon: '/model-icons/chat-gemini.png' },
  { name: 'Grok', icon: '/model-icons/chat-grok.png' },
  { name: 'DeepSeek', icon: '/model-icons/chat-deepseek.png' },
  { name: 'Llama', icon: '/model-icons/chat-llama.png' },
  { name: 'Qwen', icon: '/model-icons/chat-qwen.png' },
  { name: 'Perplexity', icon: '/model-icons/chat-perplexity.png' },
  { name: 'MiniMax', icon: '/model-icons/chat-minimax.png' },
] as const;

export const APP_URL = 'https://app.sheldonmind.com/';

/** Where "Join now" sends the user to sign up as an affiliate (Lemon Squeezy portal). */
export const AFFILIATE_SIGNUP_URL = 'https://seldonmin.lemonsqueezy.com/affiliates';
