import type { CSSProperties } from 'react';

/** Text fill using Figma reference captures — linear L→R across the headline box + background-clip. */
const headlineGradientClip = (linearGradient: string): CSSProperties => ({
  backgroundImage: linearGradient,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
});

/** “Visualize Your Imagination.” — radial xanh như phiên bản đã chỉnh trước đó */
export const visualHeadlineStyle: CSSProperties = {
  background: 'radial-gradient(50% 50% at 57% 38%, #0472EF 0%, #7EBDEA 41%, #D3F2E7 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
};

/** “Feature with the best AI models.” — radial trắng (Figma 2316:23776) */
const AI_MODELS_TITLE_IMAGE = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364 80" preserveAspectRatio="none"><defs><radialGradient id="ai" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(28.712 1.6416 -26.091 10.403 76.881 63.584)"><stop stop-color="rgba(255,255,255,0.4)" offset="0"/><stop stop-color="rgba(255,255,255,0.64519)" offset="0.40865"/><stop stop-color="rgba(255,255,255,1)" offset="1"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#ai)"/></svg>',
)}")`;

export const aiModelsHeadlineStyle: CSSProperties = {
  backgroundImage: AI_MODELS_TITLE_IMAGE,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
};

/** “Explore stunning / AI art.” — silver left → pale icy blue right */
export const galleryHeadlineStyle: CSSProperties = headlineGradientClip(
  'linear-gradient(90deg, #D1D1D1 0%, #CDE4F7 100%)',
);

/** “Find your / perfect plan.” — pastel blue left → near-white grey right */
export const pricingHeadlineStyle: CSSProperties = headlineGradientClip(
  'linear-gradient(90deg, #9FD4FF 0%, #CDE8FF 38%, #EFF2F6 100%)',
);

/** “Frequently asked / questions.” — sky blue → pale cool blue → light grey */
export const faqHeadlineStyle: CSSProperties = headlineGradientClip(
  'linear-gradient(90deg, #A5D8FF 0%, #E7F5FF 52%, #D1D5DB 100%)',
);

export const VISUAL_ASSETS = {
  createImage: '/Create%20Img.png',
  createVideo: '/Create.mp4',
  upscale: '/Upscale.png',
  motion: '/Motion%20control.mp4',
  mixed: '/Mixed%20media.mp4',
  comingSoon: '/Coming%20soon.png',
} as const;

export const FIGMA_PRIMARY_BUTTON_GLOW =
  'https://www.figma.com/api/mcp/asset/178a5f74-2e7d-41d3-916b-8b6c36c313d5';

/** Shared border/glow frame for bento tiles and full-width strip */
export const visualCardFrameStyle: CSSProperties = {
  border: '2px solid transparent',
  backgroundImage:
    'linear-gradient(#000, #000), linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.15))',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
};
