/**
 * Cross-Platform Synchronisation — an animated replacement for the static
 * composite PNG. Two concentric rings of brand icons revolve in opposite
 * directions around the Sheldonmind mark; each icon counter-rotates (via the
 * independent `rotate` property) so it stays upright while orbiting. Reduced
 * motion users get the assembled state (animations disabled in index.css).
 */

type IconName =
  | 'facebook' | 'dropbox' | 'gmail' | 'discord' | 'telegram'
  | 'x' | 'slack' | 'calendar' | 'drive';

function Glyph({ name }: { name: IconName }) {
  const s = { width: '100%', height: '100%', display: 'block' } as const;
  switch (name) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" style={s} aria-hidden>
          <circle cx="12" cy="12" r="12" fill="#1877F2" />
          <path d="M15.4 8.2h-1.6c-.3 0-.6.3-.6.7v1.5h2.2l-.3 2.3h-1.9V20h-2.4v-7.3H8.7v-2.3h2.1V8.9c0-1.8 1.1-2.9 2.8-2.9h1.8v2.2z" fill="#fff" />
        </svg>
      );
    case 'dropbox':
      return (
        <svg viewBox="0 0 24 24" style={s} aria-hidden>
          <rect width="24" height="24" rx="6" fill="#0d0d10" />
          <path fill="#0061FF" d="M8 5l4 2.6L8 10.2 4 7.6zM16 5l4 2.6-4 2.6-4-2.6zM4 12.6l4-2.6 4 2.6-4 2.6zM16 10l4 2.6-4 2.6-4-2.6zM8 16.4l4-2.6 4 2.6-4 2.6z" />
        </svg>
      );
    case 'gmail':
      return (
        <svg viewBox="0 0 24 24" style={s} aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" fill="#fff" />
          <path d="M5 8v8h1.8v-5.2L12 14l5.2-3.2V16H19V8l-7 4.3z" fill="#EA4335" />
        </svg>
      );
    case 'discord':
      return (
        <svg viewBox="0 0 24 24" style={s} aria-hidden>
          <rect width="24" height="24" rx="6" fill="#5865F2" />
          <path fill="#fff" d="M16.9 8.2c-.9-.4-1.8-.7-2.8-.9l-.2.3c1 .2 1.8.5 2.6 1-1-.5-2.1-.8-3.2-.9-.5-.1-1-.1-1.5 0-1.1.1-2.2.4-3.2.9.8-.5 1.6-.8 2.6-1l-.2-.3c-1 .2-1.9.5-2.8.9-1.2 1.9-1.6 3.7-1.4 5.6 1 .8 2 1.2 3 1.4l.4-.6c-.5-.2-1-.4-1.4-.8l.1-.1c1.9.9 4.1.9 6 0l.1.1c-.4.3-.9.6-1.4.8l.4.6c1.1-.2 2.1-.6 3-1.4.2-2.2-.3-4-1.6-5.6zM9.8 13c-.5 0-1-.5-1-1.1s.4-1.1 1-1.1 1 .5 1 1.1-.4 1.1-1 1.1zm4.4 0c-.5 0-1-.5-1-1.1s.4-1.1 1-1.1 1 .5 1 1.1-.4 1.1-1 1.1z" />
        </svg>
      );
    case 'telegram':
      return (
        <svg viewBox="0 0 24 24" style={s} aria-hidden>
          <circle cx="12" cy="12" r="12" fill="#229ED9" />
          <path fill="#fff" d="M5.6 11.7l11-4.2c.5-.2 1 .1.8.9l-1.9 8.9c-.1.6-.5.7-.9.4l-2.6-1.9-1.3 1.2c-.1.1-.3.2-.5.2l.2-2.7 4.9-4.4c.2-.2 0-.3-.3-.1l-6 3.8-2.6-.8c-.6-.2-.6-.6.1-.9z" />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" style={s} aria-hidden>
          <rect width="24" height="24" rx="6" fill="#0d0d10" />
          <path fill="#fff" d="M14.2 10.6L19.4 5h-1.6l-4.3 4.7L10.2 5H6l5.5 8-5.5 6h1.6l4.7-5.1 3.6 5.1H20l-5.8-8.4zm-1.6 1.8l-.6-.8L8 6.2h1.7l3.4 4.8.6.8 4.4 6.1h-1.7l-3.8-5.3z" />
        </svg>
      );
    case 'slack':
      return (
        <svg viewBox="0 0 24 24" style={s} aria-hidden>
          <rect width="24" height="24" rx="6" fill="#0d0d10" />
          <rect x="10.4" y="4.5" width="3.2" height="8" rx="1.6" fill="#36C5F0" />
          <rect x="11.5" y="11.4" width="8" height="3.2" rx="1.6" fill="#2EB67D" />
          <rect x="10.4" y="13.5" width="3.2" height="6" rx="1.6" fill="#ECB22E" />
          <rect x="4.5" y="9.4" width="8" height="3.2" rx="1.6" fill="#E01E5A" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" style={s} aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2.5" fill="#fff" />
          <rect x="4" y="4" width="16" height="4.5" rx="2.5" fill="#4285F4" />
          <text x="12" y="17.5" textAnchor="middle" fontFamily="'Figtree',sans-serif" fontSize="8.5" fontWeight="700" fill="#4285F4">31</text>
        </svg>
      );
    case 'drive':
      return (
        <svg viewBox="0 0 24 24" style={s} aria-hidden>
          <rect width="24" height="24" rx="6" fill="#0d0d10" />
          <path fill="#2684FC" d="M9 4.5L3.5 14h5.4l5-9.5z" />
          <path fill="#00AC47" d="M9.3 14L6.3 19.5h9.4L18.6 14z" />
          <path fill="#FFBA00" d="M20.5 14L15 4.5h-3.9l5.3 9.5z" />
        </svg>
      );
  }
}

type Ring = { icons: IconName[]; r: number; dur: number; dir: 1 | -1; start: number };

const RINGS: Ring[] = [
  { icons: ['facebook', 'dropbox', 'gmail', 'discord', 'telegram'], r: 40, dur: 34, dir: 1, start: -64 },
  { icons: ['x', 'slack', 'calendar', 'drive'], r: 24, dur: 26, dir: -1, start: -90 },
];

export default function OrbitSync() {
  return (
    // The outermost orbit path is 116% of this box (radius 58%), so at h-full it would spill past
    // the card's visual area and get clipped into a flat-topped circle. Everything here is sized
    // off the box (% and cqmin), so holding the box under 100/1.16 keeps the composition intact
    // and just draws it smaller.
    <div className="relative mx-auto aspect-square h-[84%] max-h-[185px]" style={{ containerType: 'size' }} aria-hidden>
      {/* Faint concentric orbit paths. */}
      {[26, 43, 58].map((d) => (
        <span
          key={d}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
          style={{ width: `${d * 2}%`, height: `${d * 2}%` }}
        />
      ))}

      {/* Center Sheldonmind mark with glow. */}
      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-[#0d0d12]"
        style={{ width: '30cqmin', height: '30cqmin', boxShadow: '0 0 44px rgba(47,130,255,0.35), inset 0 0 20px rgba(47,130,255,0.12)' }}>
        <img src="/logoWhite.svg" alt="" style={{ width: '46%', height: '46%', objectFit: 'contain' }} />
      </span>

      {/* Rings. */}
      {RINGS.map((ring, ri) => (
        <div
          key={ri}
          className="orbit-anim absolute inset-0"
          style={{ animation: `orbit-${ring.dir === 1 ? 'cw' : 'ccw'} ${ring.dur}s linear infinite` }}
        >
          {ring.icons.map((name, i) => {
            const angle = ((ring.start + (i * 360) / ring.icons.length) * Math.PI) / 180;
            const left = 50 + ring.r * Math.cos(angle);
            const top = 50 + ring.r * Math.sin(angle);
            return (
              <span
                key={name}
                className="orbit-anim absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30%]"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: '15cqmin',
                  height: '15cqmin',
                  animation: `orbit-chip-${ring.dir === 1 ? 'cw' : 'ccw'} ${ring.dur}s linear infinite`,
                }}
              >
                <Glyph name={name} />
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
