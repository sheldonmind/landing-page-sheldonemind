import { useState } from 'react';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';

const chatProviders = [
  { key: 'OA', name: 'OpenAI', bg: '#000000', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.773 19.82a4.5 4.5 0 0 1-6.173-1.517zM2.16 7.602a4.485 4.485 0 0 1 2.34-1.97V11.2a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L3.86 13.143a4.5 4.5 0 0 1-1.7-6.66v.119zm16.597 3.855-5.815-3.359 2.02-1.168a.075.075 0 0 1 .071 0l4.773 2.56A4.496 4.496 0 0 1 19.284 12v-.085a4.479 4.479 0 0 1-2.189 3.852v-5.578a.795.795 0 0 0-.338-.732zm2.022-3.017-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.234 8.926V6.594a.066.066 0 0 1 .026-.06l4.783-2.761a4.5 4.5 0 0 1 6.678 4.67v.055zM8.217 12.697l-2.02-1.168a.07.07 0 0 1-.038-.052V5.9a4.5 4.5 0 0 1 7.375-3.453l-.141.081-4.773 2.758a.795.795 0 0 0-.396.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.993l-2.602 1.5-2.607-1.5z"/></svg> },
  { key: 'CL', name: 'Anthropic', bg: '#CC785C', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017L3.674 20H0L6.569 3.52zm4.132 9.959-1.977-5.24-1.977 5.24h3.954z"/></svg> },
  { key: 'GE', name: 'Google', bg: '#ffffff', svg: <svg viewBox="0 0 24 24" width="22" height="22"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
  { key: 'DS', name: 'DeepSeek', bg: '#4D6BFF', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M21.4 10.28c-.13-.49-.5-.82-.93-.97a2.43 2.43 0 0 0-.79-.12c-.68 0-1.48.22-2.4.62-1.16.5-2.2.76-3.09.76-.62 0-1.14-.11-1.57-.32A7.26 7.26 0 0 0 12 10c-2.21 0-4.17.85-5.61 2.24A7.83 7.83 0 0 0 4.07 18c0 2.36.88 4.31 2.32 5.69A7.68 7.68 0 0 0 12 26c2.21 0 4.17-.85 5.61-2.24A7.83 7.83 0 0 0 19.93 18c0-.63-.07-.25-.04-.58a1.4 1.4 0 0 0-.19-.5c-.16-.26-.42-.44-.72-.53a1.72 1.72 0 0 0-.49-.07c-.66 0-1.37.38-1.91.91a4.26 4.26 0 0 1-3.09 1.29 4.27 4.27 0 0 1-3.1-1.3A4.36 4.36 0 0 1 9.11 15c0-1.21.49-2.31 1.28-3.11a4.27 4.27 0 0 1 3.1-1.3c.89 0 1.71.28 2.38.76.25.17.47.37.67.59.36.4.61.88.73 1.4.07.34.09.6.03.78-.04.14-.13.25-.26.32-.16.09-.37.13-.63.13-.39 0-.84-.1-1.27-.26a4.96 4.96 0 0 0-1.77-.33 4.96 4.96 0 0 0-1.77.33c-1.07.4-1.83 1.3-2 2.33a3 3 0 0 0-.04.51c0 1.67 1.35 3.03 3.02 3.03a3.01 3.01 0 0 0 3.01-3.03v-.03c.01-.17.1-.32.24-.4.09-.06.21-.08.32-.07.22.03.39.2.42.43.02.18.02.43-.02.74-.07.47-.22.91-.46 1.3a4.17 4.17 0 0 1-1.08 1.2 4.13 4.13 0 0 1-2.43.78A4.14 4.14 0 0 1 9.8 18a4.14 4.14 0 0 1 4.14-4.15c.54 0 1.06.1 1.53.29.41.16.79.39 1.11.67a2.9 2.9 0 0 1 .89 2.11 2.9 2.9 0 0 1-.89 2.11 2.89 2.89 0 0 1-2.06.86 2.89 2.89 0 0 1-2.89-2.9c0-.25.03-.5.09-.73a2.8 2.8 0 0 1 1.91-1.94c.3-.08.61-.13.93-.13.49 0 .96.1 1.38.29l.33.17c.42.25.74.62.92 1.07.11.26.16.55.16.84 0 1.28-1.03 2.32-2.3 2.32a2.29 2.29 0 0 1-1.64-.68A2.3 2.3 0 0 1 12 16.95a2.3 2.3 0 0 1 2.3-2.31 2.3 2.3 0 0 1 2.3 2.31.58.58 0 1 0 1.15 0 3.45 3.45 0 0 0-3.45-3.46 3.45 3.45 0 0 0-3.45 3.46 3.45 3.45 0 0 0 3.45 3.46 3.45 3.45 0 0 0 3.45-3.46"/></svg> },
  { key: 'QW', name: 'Qwen', bg: '#7B3FE4', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2.2a7.8 7.8 0 1 1 0 15.6A7.8 7.8 0 0 1 12 4.2zm0 2a5.8 5.8 0 1 0 0 11.6A5.8 5.8 0 0 0 12 6.2zm0 2a3.8 3.8 0 1 1 0 7.6A3.8 3.8 0 0 1 12 8.2zm0 2a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 12 10.2z"/></svg> },
  { key: 'ML', name: 'Meta', bg: '#0866FF', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973.14.6.34 1.065.512 1.33.386.602.962.783 1.459.783.697 0 1.448-.267 2.327-.934.632-.47 1.408-1.171 2.29-2.114l.271-.286.031-.033c.267-.285.567-.599.889-.926.28-.283.576-.578.878-.866l.2-.196c.267-.268.536-.53.803-.79.264-.26.525-.517.78-.77.33-.33.653-.655.97-.97.73-.72 1.44-1.404 2.075-1.99.338-.31.646-.6.95-.882a.93.93 0 0 0-.047-.017c-.46-.165-1.088-.256-1.82-.256-.997 0-2.054.18-3.126.516-.793.251-1.596.57-2.352.94a10.7 10.7 0 0 0-1.36.808zM24 14.449c0-2.566-.704-5.241-2.044-7.306-1.188-1.833-2.903-3.113-4.871-3.113-.735 0-1.408.098-1.972.274l-.04.013c.302.28.61.57.948.88.635.586 1.345 1.27 2.075 1.99.317.315.64.64.97.97.255.253.516.51.78.77.267.26.536.522.803.79l.2.196c.302.288.598.583.878.866.322.327.622.641.889.926l.031.033.271.286c.882.943 1.658 1.644 2.29 2.114.879.667 1.63.934 2.327.934.497 0 1.073-.181 1.459-.783.172-.265.373-.73.512-1.33.14-.604.21-1.267.21-1.973zM12 9.5c-.85.87-1.72 1.77-2.554 2.617-.286.294-.569.583-.847.866l-.197.2c-.27.274-.543.551-.818.833-.279.286-.56.576-.843.87-.368.38-.736.762-1.09 1.13-.356.37-.696.727-1.016 1.068-.476.506-.9.973-1.247 1.393-.37.45-.633.835-.76 1.136-.057.135-.082.246-.082.33 0 .048.01.085.031.117.049.075.177.147.4.147.42 0 1.003-.191 1.78-.731.567-.405 1.245-1.018 2.01-1.83.38-.406.781-.854 1.194-1.337.218-.255.44-.516.664-.78.279-.332.563-.672.85-1.015.382-.456.77-.918 1.159-1.38.354-.42.71-.839 1.062-1.25.263-.305.525-.607.784-.905l.42-.48.42.48c.259.298.521.6.784.905.353.411.708.83 1.062 1.25.39.462.777.924 1.159 1.38.287.343.571.683.85 1.015.224.264.446.525.664.78.413.483.813.931 1.194 1.337.765.812 1.443 1.425 2.01 1.83.777.54 1.36.731 1.78.731.223 0 .351-.072.4-.147.02-.032.031-.069.031-.117 0-.084-.025-.195-.082-.33-.127-.301-.39-.687-.76-1.136-.348-.42-.77-.887-1.247-1.393-.32-.341-.66-.699-1.016-1.068-.354-.368-.722-.75-1.09-1.13-.283-.294-.564-.584-.843-.87-.275-.282-.548-.559-.818-.833l-.197-.2c-.278-.283-.561-.572-.847-.866C13.72 11.27 12.85 10.37 12 9.5z"/></svg> },
  { key: 'GR', name: 'xAI', bg: '#000000', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { key: 'SN', name: 'Perplexity', bg: '#1C1C1C', svg: <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { key: 'MM', name: 'MiniMax', bg: '#1A0D3D', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><rect x="2.5" y="7" width="3" height="10" rx="1.5"/><rect x="7.5" y="3" width="3" height="14" rx="1.5"/><rect x="12.5" y="7" width="3" height="10" rx="1.5"/><rect x="17.5" y="5" width="3" height="12" rx="1.5"/></svg> },
  { key: 'HL', name: 'Hailuo', bg: '#0A0A0A', svg: <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="12" r="5.5" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="12" r="2" fill="white"/></svg> },
];

const mediaProviders = [
  { key: 'NB', name: 'NanoBanana', bg: '#F5C518', svg: <svg viewBox="0 0 36 36" width="24" height="24"><text y="26" fontSize="22" textAnchor="middle" x="18">🍌</text></svg> },
  { key: 'FX', name: 'Flux', bg: '#0a0a0a', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M13 2L3 14h8l-2 8 12-12h-8z"/></svg> },
  { key: 'LE', name: 'Leonardo AI', bg: '#6D28D9', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M12 2 8.5 9.5H1.5l6 4.5-2.3 7L12 17l6.8 4-2.3-7 6-4.5h-7z"/></svg> },
  { key: 'SD', name: 'Stability AI', bg: '#1a1a1a', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="3.5" r="1.5"/><circle cx="12" cy="20.5" r="1.5"/><circle cx="3.5" cy="12" r="1.5"/><circle cx="20.5" cy="12" r="1.5"/><circle cx="6.4" cy="6.4" r="1.2"/><circle cx="17.6" cy="17.6" r="1.2"/><circle cx="6.4" cy="17.6" r="1.2"/><circle cx="17.6" cy="6.4" r="1.2"/></svg> },
  { key: 'KL', name: 'Kling', bg: '#111111', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M6 4.5l14 7.5-14 7.5V4.5z"/></svg> },
  { key: 'VE', name: 'Veo\n(Google)', bg: '#ffffff', svg: <svg viewBox="0 0 24 24" width="22" height="22"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
  { key: 'SR', name: 'Sora', bg: '#000000', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.773 19.82a4.5 4.5 0 0 1-6.173-1.517zM2.16 7.602a4.485 4.485 0 0 1 2.34-1.97V11.2a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L3.86 13.143a4.5 4.5 0 0 1-1.7-6.66v.119zm16.597 3.855-5.815-3.359 2.02-1.168a.075.075 0 0 1 .071 0l4.773 2.56A4.496 4.496 0 0 1 19.284 12v-.085a4.479 4.479 0 0 1-2.189 3.852v-5.578a.795.795 0 0 0-.338-.732zm2.022-3.017-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.234 8.926V6.594a.066.066 0 0 1 .026-.06l4.783-2.761a4.5 4.5 0 0 1 6.678 4.67v.055zM8.217 12.697l-2.02-1.168a.07.07 0 0 1-.038-.052V5.9a4.5 4.5 0 0 1 7.375-3.453l-.141.081-4.773 2.758a.795.795 0 0 0-.396.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.993l-2.602 1.5-2.607-1.5z"/></svg> },
  { key: 'SDC', name: 'Seedance', bg: '#FE2C55', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z"/></svg> },
  { key: 'FA', name: 'Pika', bg: '#5B21B6', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg> },
  { key: 'RW', name: 'Runway', bg: '#111111', svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><rect x="3" y="5.5" width="18" height="2.5" rx="1.25"/><rect x="3" y="10.75" width="13" height="2.5" rx="1.25"/><rect x="3" y="16" width="8" height="2.5" rx="1.25"/></svg> },
];

const allProviders = [...chatProviders, ...mediaProviders] as const;
const providerByKey = Object.fromEntries(allProviders.map((p) => [p.key, p]));

function getProviderForModel(name: string): (typeof allProviders)[number] {
  const n = name.toLowerCase();
  if (n.startsWith('grok-')) return providerByKey['GR'];
  if (n.startsWith('gpt-') || n.startsWith('dall-e')) return providerByKey['OA'];
  if (n.startsWith('claude-')) return providerByKey['CL'];
  if (n.startsWith('gemini-')) return providerByKey['GE'];
  if (n.startsWith('veo-')) return providerByKey['VE'];
  if (n.startsWith('deepseek/')) return providerByKey['DS'];
  if (n.startsWith('qwen/')) return providerByKey['QW'];
  if (n.startsWith('meta-llama/')) return providerByKey['ML'];
  if (n.startsWith('sonar-')) return providerByKey['SN'];
  if (n.startsWith('minimax/')) return providerByKey['MM'];
  if (n.startsWith('hailuo-')) return providerByKey['HL'];
  if (n.startsWith('nano-banana')) return providerByKey['NB'];
  if (n.startsWith('flux-')) return providerByKey['FX'];
  if (n.startsWith('leonardo-')) return providerByKey['LE'];
  if (n.startsWith('stable-')) return providerByKey['SD'];
  if (n.startsWith('kling-')) return providerByKey['KL'];
  if (n.startsWith('sora-')) return providerByKey['SR'];
  if (n.startsWith('seedance-')) return providerByKey['SDC'];
  if (n.includes('pika') || n.startsWith('fal-ai/pika')) return providerByKey['FA'];
  if (n.startsWith('runway-')) return providerByKey['RW'];
  return providerByKey['OA'];
}

const modelRows = [
  // Top chat / reasoning models
  [
    'gpt-5.2',
    'gpt-5.1',
    'gpt-4.1',
    'gpt-4o',
    'claude-sonnet-4-5-20250929',
    'claude-opus-4-20250514',
    'gemini-2.5-pro',
    'deepseek/deepseek-v3.2',
    'qwen/qwen3-max',
    'meta-llama/llama-4-maverick',
  ],
  // Specialized reasoning / research & assistants
  [
    'grok-4',
    'grok-4-fast',
    'sonar-pro',
    'sonar-reasoning-pro',
    'sonar-deep-research',
    'minimax/minimax-m2.1',
    'hailuo-2.3',
  ],
  // Image generation flagships
  [
    'dall-e-3',
    'nano-banana-pro',
    'flux-pro-1.1-ultra',
    'leonardo-kino-xl',
    'leonardo-anime-xl',
    'stable-diffusion-xl',
    'stable-image-ultra',
  ],
  // Video & multimodal generation
  [
    'kling-2.6',
    'kling-video-o1',
    'veo-3.1-generate-preview',
    'veo-3.1-fast-generate-preview',
    'sora-2-pro',
    'seedance-1.5-pro',
    'fal-ai/pika/v2.2/text-to-video',
    'fal-ai/pika/v2.2/image-to-video',
    'runway-gen2',
  ],
] as const;

function MarqueeRow({ items, reverse = false, speed = 30 }: { items: readonly string[]; reverse?: boolean; speed?: number }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
      <div
        className="flex w-max gap-4 py-2"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((name, i) => {
          const provider = getProviderForModel(name);
          return (
            <div
              key={`${name}-${i}`}
              className="flex h-12 shrink-0 items-center gap-2.5 rounded-xl border border-slate-700/50 bg-slate-900/70 px-5 shadow-[inset_0_1px_1px_rgba(207,231,255,0.12)]"
            >
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg"
                style={{ background: provider.bg }}
              >
                {provider.svg}
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-slate-300">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const galleryFeatures = [
  ['Explore Gallery', 'Discover the most beautiful AI-generated images from the community. Get inspired, save favorites, and reuse prompts instantly.'],
  ['Blueprints & Presets', 'Ready-made presets for fast, consistent creation. Apply any blueprint to jump-start your next generation.'],
  [
    'One-Click Recreate',
    'Pick an original and a style reference, then recreate it in one click — same pose, same vibe, your own look.',
  ],
] as const;

const assetsFeatures = [
  'File library: images, videos, and general files',
  'Upload & delete files, filter by type and source',
] as const;


function SectionGlow() {
  return (
    <div className="relative my-14 h-px w-full bg-slate-800/70">
      <div className="absolute left-1/2 top-1/2 h-20 w-64 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-3xl" />
    </div>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
      <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="pointer-events-none absolute h-4 w-4 rounded-full bg-sky-400/60 blur-[2px] animate-ping" />
      </span>
      {text}
    </span>
  );
}

type BillingPeriod = 'monthly' | 'yearly';

const freePlan = {
  badge: 'FREE',
  priceMonthly: 0,
  priceYearly: 0,
  freeCreditsPerMonth: '450,000',
  monthlyCreditPackage: '0',
  extraCreditPrice: '$1.34',
  extraCreditUnit: 'per 1M credits',
  subCopy: 'No credit card required',
  cta: 'Get Started',
  features: [
    'All product features',
    'Limited AI features',
    'Limited storage',
    'Limited prompt library',
    'Limited brand voice',
    'Rollover unused credits',
    'Flexible credit use',
  ],
};

const proPlan = {
  badge: 'PRO',
  priceMonthly: 8,
  priceYearly: 6.5,
  freeCreditsPerMonth: '450,000',
  monthlyCreditPackage: '1,000,000',
  extraCreditPrice: '$0.67',
  extraCreditUnit: 'per 1M credits',
  cta: 'Upgrade',
  features: [
    'All product features',
    'All AI features',
    'Unlimited storage',
    'Unlimited prompt library',
    'Unlimited brand voice',
    'Rollover unused credits',
    'Flexible credit use',
  ],
};

const businessPlan = {
  badge: 'BUSINESS',
  priceMonthly: 12.5,
  priceYearly: 10,
  freeCreditsPerMonth: '450,000',
  monthlyCreditPackage: '2,000,000',
  extraCreditPrice: '$0.67',
  extraCreditUnit: 'per 1M credits',
  cta: 'Upgrade',
  features: [
    'Everything in Pro',
    'Members management',
    'Sharing & Collaboration',
  ],
};

function PricingSection() {
  const [billing, setBilling] = useState<BillingPeriod>('monthly');

  return (
    <section id="pricing">
      <div className="text-center">
        <Eyebrow text="Pricing" />
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Pay as you go, <span className="font-display italic">no commitment</span>
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Top up credits when you need them. No subscription required — or upgrade for extra perks.
        </p>
      </div>
      <div className="mx-auto mt-6 flex justify-center">
        <div className="inline-flex rounded-md border border-slate-700 bg-slate-900/50 p-1 text-xs">
          <button
            type="button"
            onClick={() => setBilling('monthly')}
            className={`rounded px-4 py-1.5 font-medium transition ${billing === 'monthly' ? 'bg-slate-100 text-slate-900' : 'text-slate-300 hover:text-white'}`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling('yearly')}
            className={`rounded px-4 py-1.5 font-medium transition ${billing === 'yearly' ? 'bg-slate-100 text-slate-900' : 'text-slate-300 hover:text-white'}`}
          >
            Yearly
          </button>
          <span className="flex items-center rounded bg-emerald-500/20 px-2 py-1 text-[10px] font-medium text-emerald-400">
            Save 20%
          </span>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-amber-400/90">
        Limited Winter Offer — Upgrade and get a $10 gift.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {/* Free */}
        <article className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <span className="inline-block rounded-full border border-slate-600 bg-slate-800/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
            {freePlan.badge}
          </span>
          <h3 className="mt-3 text-4xl font-semibold text-slate-100">$0</h3>
          <p className="text-sm text-slate-400">/month</p>
          <p className="mt-1 text-xs text-slate-500">{freePlan.subCopy}</p>
          <p className="mt-2 text-xs text-slate-400">
            {freePlan.freeCreditsPerMonth} free credits/mo · {freePlan.extraCreditPrice} {freePlan.extraCreditUnit}
          </p>
          <a
            href="https://app.sheldonmind.com/"
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/60 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-800/60"
          >
            {freePlan.cta}
            <span aria-hidden>→</span>
          </a>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {freePlan.features.map((it) => (
              <li key={it}>✓ {it}</li>
            ))}
          </ul>
        </article>

        {/* Pro */}
        <article className="rounded-2xl border border-slate-600 bg-slate-900/90 p-5">
          <span className="inline-block rounded-full border border-sky-500/50 bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sky-400">
            {proPlan.badge}
          </span>
          <h3 className="mt-3 text-4xl font-semibold text-slate-100">
            ${billing === 'monthly' ? proPlan.priceMonthly : proPlan.priceYearly}
            <span className="text-base font-normal text-slate-400">/mo</span>
          </h3>
          {billing === 'yearly' && (
            <p className="text-xs text-slate-500">Billed yearly · Save 20%</p>
          )}
          <p className="mt-2 text-xs text-slate-400">
            {proPlan.freeCreditsPerMonth} + {proPlan.monthlyCreditPackage} credits/mo · {proPlan.extraCreditPrice} {proPlan.extraCreditUnit}
          </p>
          <a
            href="https://app.sheldonmind.com/"
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-md border border-slate-600 bg-slate-800/80 py-2 text-sm font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-700/60"
          >
            {proPlan.cta}
            <span aria-hidden>→</span>
          </a>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {proPlan.features.map((it) => (
              <li key={it}>✓ {it}</li>
            ))}
          </ul>
        </article>

        {/* Business */}
        <article className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <span className="inline-block rounded-full border border-amber-500/50 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
            {businessPlan.badge}
          </span>
          <h3 className="mt-3 text-4xl font-semibold text-slate-100">
            ${billing === 'monthly' ? businessPlan.priceMonthly : businessPlan.priceYearly}
            <span className="text-base font-normal text-slate-400">/mo</span>
          </h3>
          {billing === 'yearly' && (
            <p className="text-xs text-slate-500">Billed yearly · Save 20%</p>
          )}
          <p className="mt-2 text-xs text-slate-400">
            {businessPlan.freeCreditsPerMonth} + {businessPlan.monthlyCreditPackage} credits/mo · {businessPlan.extraCreditPrice} {businessPlan.extraCreditUnit}
          </p>
          <a
            href="https://app.sheldonmind.com/"
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-md bg-amber-500 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-400"
          >
            {businessPlan.cta}
            <span aria-hidden>→</span>
          </a>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {businessPlan.features.map((it) => (
              <li key={it}>✓ {it}</li>
            ))}
          </ul>
        </article>
      </div>
      <p className="mt-6 text-center text-sm text-slate-400">
        No subscription needed to start. Top up credits from $1 to $1,000 and use any model, any feature — pay only for what you use.
      </p>
      <p className="mt-2 text-center text-xs text-slate-500">
        30-Day Money-Back Guarantee. Payment via Stripe & Lemon Squeezy.
      </p>
    </section>
  );
}

function App() {
  const year = new Date().getFullYear();

  const handleScrollToNext = () => {
    const el = document.getElementById('feature-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] font-sans text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_50%_20%,rgba(148,163,184,0.08),rgba(10,10,10,0.02)_40%,rgba(10,10,10,1)_78%)]" />
        <div className="absolute inset-x-0 top-[55rem] h-72 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.05),transparent_70%)]" />
      </div>

      <header className="sticky top-0 z-30 w-full border-b border-slate-800/70 bg-[#0a0a0a]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center px-4 py-3.5 lg:px-6">
          <a href="#" className="flex flex-1 items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg [box-shadow:0_0_12px_rgba(96,165,250,0.35),0_0_24px_rgba(139,92,246,0.2)]">
              <img src="/logoWhite.svg" alt="SheldonMind" className="h-5 w-5 object-contain" />
            </span>
            <span className="font-display text-2xl italic tracking-tight">SheldonMind</span>
          </a>
          <div className="hidden items-center gap-6 rounded-full border border-slate-700/70 bg-slate-900/50 px-5 py-1.5 text-xs text-slate-300 md:flex">
            {['Features', 'Gallery', 'Pricing', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Features' ? '#feature-details' : `#${item.toLowerCase()}`}
                className="hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden flex-1 justify-end md:flex">
            <a
              href="https://app.sheldonmind.com/"
              className="rounded-md border border-slate-700 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-500"
            >
              Sign in with Google
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md border border-slate-700/70 bg-slate-900/60 p-1.5 text-slate-200 hover:border-slate-500 md:hidden"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? 'Close navigation' : 'Open navigation'}</span>
            <span className="flex flex-col gap-0.5">
              <span className="h-0.5 w-4 rounded-full bg-slate-100" />
              <span className="h-0.5 w-4 rounded-full bg-slate-100" />
              <span className="h-0.5 w-4 rounded-full bg-slate-100" />
            </span>
          </button>
        </nav>
        {mobileOpen && (
          <div className="border-t border-slate-800/70 bg-[#0a0a0a]/95 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 text-sm text-slate-200">
              <div className="flex flex-col gap-2">
                {['Features', 'Gallery', 'Pricing', 'FAQ', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Features' ? '#feature-details' : `#${item.toLowerCase()}`}
                    className="py-0.5 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <a
                href="https://app.sheldonmind.com/"
                className="mt-1 inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 hover:border-slate-500"
                onClick={() => setMobileOpen(false)}
              >
                Sign in with Google
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="w-full overflow-x-hidden">
        {/* Hero full width with background video (slide 1) */}
        <section className="relative min-h-screen w-full overflow-hidden text-center">
          <video
            src="https://videos.pexels.com/video-files/16392053/16392053-uhd_2560_1440_24fps.mp4"
            loop
            preload="auto"
            poster="https://framerusercontent.com/images/3HSLotiTS3Odv3X49R0RdUw4Q.png?width=3839&height=2156"
            muted
            playsInline
            autoPlay
            className="absolute inset-0 h-full w-full object-cover object-center grayscale brightness-[0.3]"
            aria-hidden
          />

          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-16 pb-12 sm:pt-20">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700/60 bg-slate-900/50 [box-shadow:0_0_24px_rgba(96,165,250,0.4),0_0_48px_rgba(139,92,246,0.25)]">
              <img src="/logoWhite.svg" alt="SheldonMind" className="h-12 w-12 object-contain" />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="pointer-events-none absolute h-4 w-4 rounded-full bg-sky-400/60 blur-[2px] animate-ping" />
              </span>
              Chat · Image · Video · All in One
            </span>
            <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              <span className="font-display italic font-medium">Create with AI.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
              Multi‑AI chat, image & video generation with the most powerful models. Pay as you go — no subscription required.
            </p>
            <div className="mt-6" />
            <button
              type="button"
              onClick={handleScrollToNext}
              className="mt-6 inline-flex items-center justify-center text-slate-300 hover:text-white"
              aria-label="Scroll to next section"
            >
              <span className="inline-block animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  className="fill-none stroke-current stroke-[1.5]"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl overflow-x-hidden px-4 pb-24 lg:px-6">
        <SectionGlow />

        <section id="feature-details">
          <div className="text-left sm:text-center">
            <Eyebrow text="Feature details" />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Chat · Image · Video <span className="font-display italic">in the app</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">Choose model per conversation, token-by-token streaming, credit deduction by model and token</p>
          </div>
          <div className="mt-8 grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="h-28 rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2">
                <img
                  src="https://framerusercontent.com/images/2JVTszXypUxSCufK62amJ7jcUK8.png?width=552&height=97"
                  alt="Multi‑AI chat preview"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Multi‑AI Chat</h3>
              <p className="mt-2 text-sm text-slate-300">
                Chat with multiple AI models in one place — switch between GPT-4o, Claude, Gemini, DeepSeek & more for every conversation.
              </p>
            </article>
            <article className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 md:col-span-1 lg:col-span-2">
              <div className="relative h-40 overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/70">
                <div className="absolute inset-0 flex items-center justify-between gap-0 px-0">
                  <div className="relative h-full flex-1 overflow-hidden border-r border-slate-700/60 first:rounded-l-xl last:border-r-0">
                    <img
                      src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38V4FCgVlmo1rcP29mT2rFQ8Btr%2Fhf_20260304_140610_4021873a-9b8f-4f27-b349-961e8d5203c7.jpeg&w=1920&q=85"
                      alt="AI generated image example 1"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative h-full flex-1 overflow-hidden border-x border-slate-700/60">
                    <img
                      src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38V4FCgVlmo1rcP29mT2rFQ8Btr%2Fhf_20260304_140233_087ebe69-c45b-4f43-ba01-9cc3422ea9e3.jpeg&w=1920&q=85"
                      alt="AI generated image example 2"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative h-full flex-1 overflow-hidden border-l border-slate-700/60">
                    <img
                      src="https://dqv0cqkoy5oj7.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260218_122301_566a5b8f-230c-40fd-9d71-ca4cf65e6ffc.png"
                      alt="AI generated image example 3"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Image Generation</h3>
              <p className="mt-2 text-sm text-slate-300">Generate stunning images with all the most powerful models — DALL·E 3, Midjourney, Stable Diffusion, Flux & more. Choose style, aspect ratio & resolution.</p>
            </article>
            <article className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 md:col-span-1 lg:col-span-2">
              <div className="relative h-36 overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/70">
                <div className="absolute inset-0 flex gap-0 px-0 py-0">
                  <div className="relative h-full flex-1 overflow-hidden border-r border-slate-800">
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      controls
                      preload="metadata"
                      src="https://dqv0cqkoy5oj7.cloudfront.net/user_3709hEjL37V5u3gPiUc1pSGtMwx/hf_20260204_182735_5727c7a6-b2a6-4f20-af8d-c96b85e93d73.mp4"
                      className="h-full w-full object-cover"
                    >
                      Your browser does not support the video.
                    </video>
                  </div>
                  <div className="relative h-full flex-1 overflow-hidden">
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      controls
                      preload="metadata"
                      src="https://dqv0cqkoy5oj7.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/4b4c713a-c80a-4073-bc4f-0c687b9ba068.mp4"
                      className="h-full w-full object-cover"
                    >
                      Your browser does not support the video.
                    </video>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Video: T2V · I2V · V2V</h3>
              <p className="mt-2 text-sm text-slate-300">Generate video from text, image, or video. Powered by the newest models — Kling, Veo, Sora & more as they release.</p>
            </article>
            <article className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <h3 className="text-lg font-semibold">Pay As You Go</h3>
              <p className="mt-2 text-sm text-slate-300">
                No subscription required. Add credits when you need them and use any model or feature.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>✓ Credits never expire</li>
                <li>✓ Access to all models and features</li>
                <li>✓ Pay only for what you use</li>
              </ul>
            </article>
          </div>
        </section>

        <SectionGlow />

        <section id="features">
          <div className="text-center">
            <Eyebrow text="Models" />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Powered by the <span className="font-display italic">best models</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">Access the latest AI models for chat, image & video — all in one platform</p>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            {modelRows.map((row, idx) => (
              <MarqueeRow key={idx} items={row} reverse={idx % 2 === 1} speed={25 + idx * 8} />
            ))}
          </div>
        </section>

        <SectionGlow />

        <section
          id="explore"
          className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/20 p-6 backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="relative flex min-w-0 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative z-20 min-w-0 flex-1 rounded-2xl bg-slate-950/10 p-5 backdrop-blur-2xl sm:p-6 lg:p-7">
              <Eyebrow text="Explore" />
              <h2 className="mt-5 text-4xl font-semibold uppercase tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                What will you create today?
              </h2>
              <p className="mt-4 max-w-lg text-base text-slate-300/90">
                Create authentic images and videos with natural texture and easy style. One platform, all the best AI models.
              </p>
              <a
                href="#features"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-amber-300"
              >
                Explore all tools ↗
              </a>
            </div>
            <div className="relative z-10 -ml-10 min-w-0 flex-1 overflow-hidden lg:-ml-24">
            <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-6 lg:justify-start" style={{marginBottom: '-24px', msOverflowStyle: 'none', scrollbarWidth: 'none'}}>
              {[
                ['Create Image', 'Text-to-image with DALL·E, Flux, Midjourney & more'],
                ['Create Video', 'T2V, I2V, V2V with Kling, Veo, Sora'],
                ['AI Chat', 'GPT-4o, Claude, Gemini — all in one place'],
                ['Explore Gallery', 'Discover & remix beautiful community creations'],
              ].map(([title]) => (
                <a
                  key={title}
                  href="#features"
                  className="group flex h-[246px] w-[198px] shrink-0 flex-col rounded-2xl border border-slate-700/60 bg-slate-900/10 p-4 backdrop-blur-xl transition hover:border-slate-500"
                >
                  <div className="relative h-[178px] shrink-0 overflow-hidden rounded-lg">
                    {title === 'Create Image' ? (
                      <video
                        loop
                        muted
                        playsInline
                        autoPlay
                        disablePictureInPicture
                        preload="metadata"
                        poster="https://static.higgsfield.ai/explore/create-image.webp"
                        src="https://static.higgsfield.ai/explore/create-image.mp4"
                        className="absolute inset-0 size-full object-cover"
                        aria-label="Create Image: Generate AI images"
                      >
                        Your browser does not support the video.
                      </video>
                    ) : title === 'Create Video' ? (
                      <video
                        loop
                        muted
                        playsInline
                        autoPlay
                        controls
                        preload="metadata"
                        src="https://cdn.higgsfield.ai/kling_video_sample/ca854666-6bfe-40ef-a204-962a669075e6.mp4"
                        className="absolute inset-0 size-full object-cover rounded-lg"
                        aria-label="Create Video: AI video generation"
                      >
                        Your browser does not support the video.
                      </video>
                    ) : title === 'AI Chat' ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-[80%] w-[85%] rounded-2xl bg-gradient-to-br from-sky-500/40 via-violet-500/40 to-emerald-400/40 p-[1px]">
                          <div className="h-full w-full rounded-2xl bg-slate-950/90">
                            <div className="relative h-full w-full">
                              <div className="absolute inset-x-3 top-3 h-7 rounded-full bg-slate-900/80 px-3 text-[10px] font-medium text-slate-300/90">
                                <div className="flex h-full items-center justify-between">
                                  <span className="flex items-center gap-1.5">
                                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-500/90 text-[9px] font-bold text-slate-950">
                                      AI
                                    </span>
                                    <span>Chat session</span>
                                  </span>
                                  <span className="h-1 w-6 overflow-hidden rounded-full bg-slate-700/70">
                                    <span className="block h-full w-3 animate-pulse rounded-full bg-emerald-400/90" />
                                  </span>
                                </div>
                              </div>
                              <div className="absolute inset-x-4 bottom-4 space-y-1.5 text-[10px] leading-snug">
                                <div className="ml-auto max-w-[80%] rounded-xl bg-sky-500/90 px-2 py-1 text-right text-slate-950 shadow-sm">
                                  Generate ideas &amp; prompts for my next project.
                                </div>
                                <div className="max-w-[82%] rounded-xl bg-slate-800/90 px-2 py-1 text-slate-100 shadow-sm">
                                  Sure. I&apos;ll suggest chat, image, and video prompts you can remix.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : title === 'Explore Gallery' ? (
                      <div className="absolute inset-0 flex items-center justify-center p-1">
                        {/* Stacked/fanned video effect - 3 videos */}
                        <div className="relative h-full w-[90%]">
                          <div className="absolute inset-0 rounded-lg shadow-lg" style={{ transform: 'rotate(-10deg) translateX(-6px) translateY(2px)' }}>
                            <video
                              loop
                              muted
                              playsInline
                              autoPlay
                              disablePictureInPicture
                              preload="metadata"
                              poster="https://static.higgsfield.ai/explore/edit-video.webp"
                              src="https://static.higgsfield.ai/explore/edit-video.mp4"
                              className="h-full w-full rounded-lg object-cover"
                              aria-label="Kling Video Edit: Advanced video editing"
                            >
                              Your browser does not support the video.
                            </video>
                          </div>
                          <div className="absolute inset-0 rounded-lg shadow-lg" style={{ transform: 'rotate(-5deg) translateX(-3px)' }}>
                            <video
                              loop
                              muted
                              playsInline
                              autoPlay
                              disablePictureInPicture
                              preload="metadata"
                              poster="https://static.higgsfield.ai/flow/nano-banana-2-banner.webp"
                              src="https://static.higgsfield.ai/flow/nano-banana-2-banner.mp4"
                              className="h-full w-full rounded-lg object-cover"
                              aria-label="Nano Banana 2: Best 4K image model ever"
                            >
                              Your browser does not support the video.
                            </video>
                          </div>
                          <div className="absolute inset-0 z-10 rounded-lg shadow-xl">
                            <video
                              loop
                              muted
                              playsInline
                              autoPlay
                              disablePictureInPicture
                              preload="metadata"
                              poster="https://static.higgsfield.ai/explore/soul-character.webp"
                              src="https://static.higgsfield.ai/explore/soul-character.mp4"
                              className="h-full w-full rounded-lg object-cover"
                              aria-label="Soul ID: Create unique character"
                            >
                              Your browser does not support the video.
                            </video>
                          </div>
                          <span className="absolute -right-0.5 -top-0.5 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-slate-700/90 text-xs font-medium text-blue-400 shadow-sm transition group-hover:bg-slate-600/90">+</span>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full w-full border border-slate-700/50 bg-slate-800/50" />
                    )}
                  </div>
                  <span className="mt-3 flex shrink-0 items-center gap-1 text-sm font-medium text-slate-200 group-hover:text-white">
                    {title === 'Explore Gallery' ? 'Explore all tools' : title} →
                  </span>
                </a>
              ))}
            </div>
            </div>
          </div>
        </section>

        <SectionGlow />

        <section id="gallery">
          <div className="text-center">
            <Eyebrow text="Gallery &amp; Community" />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Explore stunning <span className="font-display italic">AI art</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">Browse beautiful community images, remix with one click, and create your own masterpieces</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {galleryFeatures.map(([title, desc]) => (
              <article
                key={title}
                className={`relative flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 px-4 pt-4 pb-3 ${
                  title === 'Explore Gallery' || title === 'Blueprints & Presets' ? 'group cursor-pointer' : ''
                } ${title === 'One-Click Recreate' ? 'md:row-span-2' : ''}`}
              >
                <div
                  className={`overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/70 ${
                    title === 'Explore Gallery' || title === 'Blueprints & Presets'
                      ? 'h-44 md:h-56 lg:h-64 flex-1'
                      : ''
                  }`}
                >
                  {title === 'One-Click Recreate' ? (
                    <div className="flex w-full flex-col gap-2 p-2">
                      {/* Ảnh kết quả lớn phía trên */}
                      <div className="relative overflow-hidden rounded-lg border border-slate-700/70">
                        <div className="aspect-[4/3] w-full">
                          <img
                            src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38V4FCgVlmo1rcP29mT2rFQ8Btr%2Fhf_20260304_083048_f1d64256-83fd-4d85-94f6-66b222cfe50d.png&w=1920&q=85"
                            alt="Recreate result"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="absolute right-2 top-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] font-medium text-emerald-300 border border-emerald-400/60">
                          Result
                        </span>
                      </div>

                      {/* Hai ảnh gốc + ảnh mẫu bên dưới */}
                      <div className="mt-1 grid grid-cols-2 gap-2">
                        <div className="overflow-hidden rounded-md border border-slate-700/60">
                          <div className="aspect-[3/4] w-full">
                            <img
                              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_38V4FCgVlmo1rcP29mT2rFQ8Btr%2Fa7081299-200d-4883-9d0a-0f7861279986.png&w=1920&q=85"
                              alt="Original"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-md border border-slate-700/60">
                          <div className="aspect-[3/4] w-full">
                            <img
                              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_38V4FCgVlmo1rcP29mT2rFQ8Btr%2F07fcafca-fbaf-4414-8f0b-7d26b450970c.jpg&w=1920&q=85"
                              alt="Style reference"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-1 flex justify-between text-[10px] text-slate-300">
                        <span>Original</span>
                        <span>Reference</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {title === 'Explore Gallery' && (
                        <video
                          loop
                          muted
                          playsInline
                          autoPlay
                          disablePictureInPicture
                          preload="metadata"
                          src="https://cdn.higgsfield.ai/kling_video_sample/a83c72c6-3f6c-44fc-bf83-4cddff3370ae.mp4"
                          className="h-full w-full object-cover"
                          aria-label="Explore Gallery: Community video sample"
                        >
                          Your browser does not support the video.
                        </video>
                      )}

                      {title === 'Blueprints & Presets' && (
                        <video
                          loop
                          playsInline
                          disablePictureInPicture
                          preload="none"
                          src="https://cdn.higgsfield.ai/kling_video_sample/f375f880-faf0-47f6-9cd3-197801197d01.mp4"
                          muted
                          autoPlay
                          className="h-full w-full object-cover -z-[1]"
                          aria-label="sample by id of 'f375f880-faf0-47f6-9cd3-197801197d01'"
                        >
                          Your browser does not support the video.
                        </video>
                      )}
                    </>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
              </article>
            ))}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3 md:p-3 text-xs md:text-sm md:col-span-2 md:row-start-2">
              <h3 className="text-sm font-semibold md:text-base">Assets &amp; Files</h3>
              <p className="mt-1 text-[11px] text-slate-300 md:text-xs">
                File library for images, videos, and general files. Upload, delete, filter by type and source.
              </p>
              <ul className="mt-2 space-y-0.5 text-[11px] text-slate-400 md:text-xs">
                {assetsFeatures.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <SectionGlow />

        <SectionGlow />

        <PricingSection />

        <SectionGlow />

        <section id="faq">
          <div className="text-center">
            <Eyebrow text="FAQ" />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Frequently asked <span className="font-display italic">questions</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">Credit, plans, sign-in, and content management</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <aside className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-lg font-semibold">Need more help?</p>
              <p className="mt-2 text-sm text-slate-400">Contact the SheldonMind team via email or support page.</p>
              <a href="#contact" className="mt-4 inline-block rounded-md border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm">↗ Contact</a>
            </aside>
            <div className="space-y-2">
              {[
                ['Do I need a subscription?', 'No. You can use SheldonMind with pay-as-you-go credits. Top up any amount from 1 to 1,000 USD and use any feature. Optional plans available for extra perks.'],
                ['Which AI models are available?', 'We support the latest and most powerful models — GPT-4o, Claude 4, Gemini 2.5, DALL·E 3, Midjourney, Flux, Kling, Veo, Sora & more. New models added as they launch.'],
                ['How does pay as you go work?', 'Top up credits anytime. Each chat, image, or video generation deducts credits based on the model used. No monthly commitment — your credits never expire.'],
                ['Can I reuse images from the gallery?', 'Yes. Browse the explore gallery, find images you love, and remix them with one click — same prompt, same settings, your own twist.'],
                ['How are credits deducted?', 'Chat deducts by model and token count. Image and video deduct per generation based on model, resolution, and duration. Full history available in Billing.'],
              ].map(([q, a], idx) => (
                <details key={q} open={idx === 0} className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                  <summary className="cursor-pointer text-sm font-medium">{q}</summary>
                  <p className="mt-2 text-sm text-slate-300">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <SectionGlow />

        <section id="contact" className="text-center">
          <Eyebrow text="Get started" />
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to create with AI? <span className="font-display italic">Sign in to SheldonMind</span>
          </h2>
          <p className="mt-3 text-sm text-slate-300">Sign in with Google to use Chat, Image, Video, and manage your credits</p>
          <a
            href="https://app.sheldonmind.com/"
            className="mt-5 inline-block rounded-md border border-slate-700 bg-slate-900/70 px-6 py-2 text-sm font-medium"
          >
            Sign in with Google ↗
          </a>
          <p className="mt-3 text-sm text-slate-400">sheldonmind123@gmail.com</p>
        </section>
        </div>
      </main>

      <footer className="border-t border-slate-800/70 py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-500 md:flex-row lg:px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center [box-shadow:0_0_8px_rgba(96,165,250,0.3)]">
              <img src="/logoWhite.svg" alt="SheldonMind" className="h-4 w-4 object-contain" />
            </span>
            <span className="font-display text-xl italic text-slate-300">SheldonMind</span>
          </a>
          <div className="flex gap-4 text-slate-400">
            {['Features', 'Gallery', 'Pricing', 'FAQ', 'Contact', 'Privacy', 'Terms'].map((l) => {
              if (l === 'Privacy') {
                return (
                  <button key={l} onClick={() => setShowPrivacy(true)} className="hover:text-slate-200">
                    {l}
                  </button>
                );
              }
              if (l === 'Terms') {
                return (
                  <button key={l} onClick={() => setShowTerms(true)} className="hover:text-slate-200">
                    {l}
                  </button>
                );
              }
              return (
                <a
                  key={l}
                  href={
                    l === 'Contact'
                      ? '#contact'
                      : l === 'Pricing'
                      ? '#pricing'
                      : l === 'Features'
                      ? '#feature-details'
                      : l === 'Gallery'
                      ? '#gallery'
                      : '#faq'
                  }
                  className="hover:text-slate-200"
                >
                  {l}
                </a>
              );
            })}
          </div>
          <div>© {year} SheldonMind</div>
        </div>
      </footer>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </div>
  );
}

export default App;
