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
 * Tool demos for the #features rail, copied verbatim from the app
 * (`SeldonMind/frontend/public/assets/<tool>/`) — the same clips app.sheldonmind.com/create
 * plays on its own cards.
 *
 * `poster` is the app's shipped poster, which is byte-for-byte the clip's first frame
 * (verified by extracting frame 0 of each mp4 and comparing). That matters twice over:
 * the card shows the still instead of a black box while the clip streams, and because the
 * poster IS frame 0, hovering starts playback with no visible jump.
 *
 * create-video / drama-studio posters are frame 0 of the landing's own clips, extracted
 * the same way; imagine-studio is a 900px JPEG of the 3.1 MB Imagine.png.
 */
export const TOOL_MEDIA = {
  createVideo: { src: MEDIA.create, poster: '/tools/create-video.jpg' },
  dramaStudio: { src: MEDIA.drama, poster: '/tools/drama-studio.jpg' },
  videoExtend: { src: '/tools/video-extend.mp4', poster: '/tools/video-extend.jpg' },
  lipsync: { src: '/tools/lipsync.mp4', poster: '/tools/lipsync.jpg' },
  inpaint: { src: '/tools/inpaint.mp4', poster: '/tools/inpaint.jpg' },
  outpaint: { src: '/tools/outpaint.mp4', poster: '/tools/outpaint.jpg' },
  relight: { src: '/tools/relight.mp4', poster: '/tools/relight.jpg' },
  cameraAngles: { src: '/tools/camera-angles.mp4', poster: '/tools/camera-angles.jpg' },
  textToSpeech: { src: '/tools/text-to-speech.mp4', poster: '/tools/text-to-speech.jpg' },
  music: { src: '/tools/music.mp4', poster: '/tools/music.jpg' },
  soundEffects: { src: '/tools/sound-effects.mp4', poster: '/tools/sound-effects.jpg' },
  voiceCloning: { src: '/tools/voice-cloning.mp4', poster: '/tools/voice-cloning.jpg' },
} as const;

/**
 * One brand in a model list.
 *
 * `icon` is optional so a model can ship before its glyph does — the hero pill bar and the
 * marquee both fall back to the wordmark alone rather than dropping the model.
 */
export type ModelBrand = { name: string; icon?: string };

/**
 * Glyphs are per-vendor, not per-model: several model families share one mark, here and in
 * the app. `wan.png` is the Alibaba mark and `veo.png` is the Google G — which is why the
 * lists below point more than one brand at the same file.
 *
 * The app resolves icons as `icons/<modelKey>.webp` on R2 (see the app's
 * `frontend/src/apis/core/media.ts`). Wan 2.7, Z-Image Turbo, HappyHorse 1.0 and 1.1 all
 * return the same ETag there (d8e680f7…), i.e. literally the same file, so pointing them
 * at one glyph here matches the app rather than approximating it.
 */
const ALIBABA = '/model-icons/wan.png';

/**
 * Icons are monochrome white glyphs under /model-icons, extracted from the `*-warp.png`
 * and `Logo Fullname-*.png` chips. Those chips ship as complete bordered pills — icon,
 * ring, label, fill — which cannot go inside a single glass bar without nesting frames.
 *
 * The three lists below mirror the model pickers in the app, one entry per brand family
 * rather than per variant (the app exposes 36 chat / 40 image / 36 video variants):
 *   - chat    → app.sheldonmind.com/chat
 *   - image   → app.sheldonmind.com/create/image
 *   - video   → app.sheldonmind.com/create/video
 *   - toolkit → models that back a single tool rather than a picker (upscale, audio)
 */
export const CHAT_MODELS: readonly ModelBrand[] = [
  { name: 'ChatGPT', icon: '/model-icons/chat-chatgpt.png' },
  { name: 'Claude', icon: '/model-icons/chat-claude.png' },
  { name: 'Gemini', icon: '/model-icons/chat-gemini.png' },
  { name: 'Grok', icon: '/model-icons/chat-grok.png' },
  { name: 'DeepSeek', icon: '/model-icons/chat-deepseek.png' },
  { name: 'Llama', icon: '/model-icons/chat-llama.png' },
  { name: 'Qwen', icon: '/model-icons/chat-qwen.png' },
  { name: 'Perplexity', icon: '/model-icons/chat-perplexity.png' },
  { name: 'MiniMax', icon: '/model-icons/chat-minimax.png' },
];

export const IMAGE_MODELS: readonly ModelBrand[] = [
  { name: 'Nano Banana', icon: '/model-icons/nano-banana.png' },
  { name: 'GPT Image', icon: '/model-icons/gpt-image.png' },
  { name: 'Seedream', icon: '/model-icons/seedream.png' },
  { name: 'Flux', icon: '/model-icons/flux.png' },
  { name: 'Imagen', icon: '/model-icons/imagen.png' },
  { name: 'Grok Imagine', icon: '/model-icons/grok-imagine.png' },
  { name: 'Wan', icon: ALIBABA },
  { name: 'Recraft', icon: '/model-icons/recraft.png' },
  { name: 'Luma', icon: '/model-icons/luma.png' },
  { name: 'Leonardo', icon: '/model-icons/leonardo.png' },
  { name: 'Stability', icon: '/model-icons/stability.png' },
  // Powers Camera Angles (qwen-image-edit multiple-angles), not the text-to-image picker.
  { name: 'Qwen Image', icon: '/model-icons/qwen-image.png' },
  { name: 'Z-Image', icon: ALIBABA },
];

export const VIDEO_MODELS: readonly ModelBrand[] = [
  { name: 'Veo', icon: '/model-icons/veo.png' },
  { name: 'Kling', icon: '/model-icons/kling.png' },
  { name: 'Seedance', icon: '/model-icons/seedance.png' },
  { name: 'Hailuo', icon: '/model-icons/hailuo.png' },
  { name: 'Wan', icon: ALIBABA },
  { name: 'Vidu', icon: '/model-icons/vidu.png' },
  { name: 'PixVerse', icon: '/model-icons/pixverse.png' },
  { name: 'Pika', icon: '/model-icons/pika.png' },
  { name: 'Grok Imagine', icon: '/model-icons/grok-imagine.png' },
  // The app gives Gemini Omni Flash the plain Google mark (same R2 ETag as Veo 3.1 and
  // Nano Banana 2). The Gemini spark is kept here instead — it names the model, and the
  // Google G is already on this row twice via Veo and Imagen.
  { name: 'Gemini Omni', icon: '/model-icons/chat-gemini.png' },
  { name: 'HappyHorse', icon: ALIBABA },
];

/** Backs a tool directly rather than a picker: Topaz → Upscale, ElevenLabs → the audio set. */
export const TOOLKIT_MODELS: readonly ModelBrand[] = [
  { name: 'Topaz', icon: '/model-icons/topaz.png' },
  { name: 'ElevenLabs', icon: '/model-icons/elevenlabs.png' },
];

/**
 * Everything that generates a media asset, for the hero pill bar. Derived from the lists
 * above so a model added to the footer can't go missing from the hero (Wan, Grok Imagine
 * and Gemini appear in more than one list — first occurrence wins).
 */
export const GEN_MODELS: readonly ModelBrand[] = [
  ...IMAGE_MODELS,
  ...VIDEO_MODELS,
  ...TOOLKIT_MODELS,
].filter((m, i, all) => all.findIndex((x) => x.name === m.name) === i);

export const APP_URL = 'https://app.sheldonmind.com/';

/**
 * Every tool the app exposes, in the order app.sheldonmind.com/create lists them, plus
 * AI Chat and Imagine Studio (which live on their own routes rather than the Create grid).
 *
 * `hash` is the landing-page section that shows the tool off. Everything without a
 * dedicated section points at the #features rail, where each one now has a card.
 */
export const APP_FEATURES: readonly { label: string; hash: string }[] = [
  { label: 'AI Chat', hash: '#chat' },
  { label: 'Create Image', hash: '#features' },
  { label: 'Create Video', hash: '#features' },
  { label: 'Video Extend', hash: '#features' },
  { label: 'Lipsync', hash: '#features' },
  { label: 'Motion Control', hash: '#features' },
  { label: 'Upscale', hash: '#features' },
  { label: 'Inpaint', hash: '#features' },
  { label: 'Outpaint', hash: '#features' },
  { label: 'Relight', hash: '#features' },
  { label: 'Camera Angles', hash: '#features' },
  { label: 'Text to Speech', hash: '#features' },
  { label: 'Music', hash: '#features' },
  { label: 'Sound Effects', hash: '#features' },
  { label: 'Voice Cloning', hash: '#features' },
  { label: 'Drama Studio', hash: '#drama-studio' },
  { label: 'Imagine Studio', hash: '#studio' },
];

/** Where "Join now" sends the user to sign up as an affiliate (Lemon Squeezy portal). */
export const AFFILIATE_SIGNUP_URL = 'https://seldonmin.lemonsqueezy.com/affiliates';
