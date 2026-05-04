import type { CSSProperties } from 'react';

export const visualHeadlineStyle: CSSProperties = {
  background:
    'radial-gradient(50% 50% at 57% 38%, #0472EF 0%, #7EBDEA 41%, #D3F2E7 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
};

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
