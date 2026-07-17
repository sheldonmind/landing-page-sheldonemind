import { useEffect, useRef } from 'react';
import useScaleToFit from '../../../hooks/useScaleToFit';
import { SecondaryCtaLink } from '../SecondaryCta';
import { ACCENT, MEDIA } from '../tokens';

/** Same design width as Drama Studio's mock — the two compositions are mirrors of each
 *  other (Drama's render card sits right with its chat panel left; this board sits left
 *  with its chat panel right), so they must be composed against the same grid to line up.
 *  The chat panel is fixed px and can't reflow, so the mock is pinned here and scaled. */
const DESIGN_W = 1360;

/**
 * Imagine Studio — an animated recreation of the reference "AI Video Creation
 * Canvas" workflow board. Everything the reference does in lime green is done
 * here in the app blue (ACCENT.blue). The board rebuilds itself on a single
 * synchronized 12s loop (see the `is*` keyframes in index.css); JS only flips
 * `data-animate` when the board is on-screen and motion is allowed, so the base
 * markup is already the finished, assembled state for reduced-motion users.
 */

const BLUE = ACCENT.blue;

/** Downloaded free portraits (randomuser.me), self-hosted, matching the reference's photo avatars. */
const AV = ['/avatars/a1.jpg', '/avatars/a2.jpg', '/avatars/a3.jpg', '/avatars/a4.jpg', '/avatars/a5.jpg', '/avatars/a6.jpg', '/avatars/a7.jpg', '/avatars/a8.jpg'];

/** Small circular photo avatar. */
function Avatar({
  src,
  className,
  size,
  style,
}: {
  src: string;
  className?: string;
  size: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        background: '#1c1c1e',
        boxShadow: '0 0 0 0.28cqw rgba(10,10,10,0.95)',
        display: 'inline-block',
        flexShrink: 0,
        ...style,
      }}
    >
      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </span>
  );
}

/** A photo tile with the reference's rounded frame + hairline. */
function Tile({
  src,
  className,
  style,
  label,
  isVideo,
  poster,
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  isVideo?: boolean;
  poster?: string;
}) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '1.4cqw',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 2cqw 4cqw rgba(0,0,0,0.45)',
        ...style,
      }}
    >
      {isVideo ? (
        <video
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      )}
      {label && (
        <span
          style={{
            position: 'absolute',
            top: '0.7cqw',
            left: '0.7cqw',
            fontFamily: "'Figtree',sans-serif",
            fontSize: '0.8cqw',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.92)',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
            padding: '0.25cqw 0.7cqw',
            borderRadius: '0.7cqw',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

/** A connector endpoint dot rendered in HTML so it stays perfectly round. */
function Dot({
  left,
  top,
  color,
  cls,
}: {
  left: string;
  top: string;
  color: string;
  cls: string;
}) {
  return (
    <span
      className={cls}
      style={{
        position: 'absolute',
        left,
        top,
        width: '0.85cqw',
        height: '0.85cqw',
        marginLeft: '-0.42cqw',
        marginTop: '-0.42cqw',
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 1.4cqw ${color}`,
        zIndex: 6,
      }}
    />
  );
}

export default function ImagineStudio() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { wrapRef, mockRef } = useScaleToFit(DESIGN_W);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // base markup already shows the finished board

    // The tile art is large (multi-MB PNGs). If the loop starts before those decode,
    // it plays over blank tiles and looks broken. So we preload everything and only
    // start once the images are ready AND the board is on-screen — and only once
    // (one-shot), so scrolling never restarts the build mid-way.
    const srcs = [
      MEDIA.snowboard, MEDIA.createImage, MEDIA.content, MEDIA.imagine,
      MEDIA.upscale, MEDIA.section4, MEDIA.prism, ...AV,
    ];
    let imagesReady = false;
    let started = false;
    const tryStart = () => {
      if (started || !imagesReady) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Board occupies a good chunk of the viewport — start the build once.
      const inView = r.top < vh * 0.9 && r.bottom > vh * 0.1;
      if (inView) {
        started = true;
        el.setAttribute('data-animate', 'on');
        window.clearInterval(poll);
      }
    };

    let loaded = 0;
    srcs.forEach((s) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        if (++loaded >= srcs.length) {
          imagesReady = true;
          tryStart();
        }
      };
      img.src = s;
    });
    // Don't wait forever on a slow asset.
    const fallback = window.setTimeout(() => {
      imagesReady = true;
      tryStart();
    }, 4000);
    // Poll for in-view via getBoundingClientRect — reliable where IntersectionObserver's
    // async first callback can be missed. Stops itself once the build starts.
    const poll = window.setInterval(tryStart, 200);

    return () => {
      window.clearInterval(poll);
      window.clearTimeout(fallback);
    };
  }, []);

  const font = "'Figtree',sans-serif";

  return (
    <section id="studio" className="al-section relative w-full overflow-hidden">
      <div className="al-container flex flex-col items-center text-center">
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: `radial-gradient(closest-side, ${BLUE}99, transparent 72%)` }}
          />
          <h2 className="sans-display m-0 text-white">Imagine Studio</h2>
        </div>

        <p className="mx-auto mt-6 max-w-[58ch] font-['Figtree',sans-serif] text-[18px] leading-[1.45] text-greygrey-800 max-md:text-[16px]">
          A living canvas for making videos — drop a topic, connect references, and let the
          board shape it into a storyboard, script, and a finished shot.
        </p>

        <div className="mt-8">
          <SecondaryCtaLink href="#pricing" text="Check it out" />
        </div>
      </div>

      {/* The animated board. Everything inside is sized in cqw/% off the .is-canvas container,
          so the composition holds at any scale — the text just becomes texture as it shrinks. */}
      <div className="al-container relative z-10 mt-16 max-md:mt-12">
        <div ref={wrapRef}>
          <div ref={mockRef} className="relative">
          <div
            ref={canvasRef}
            className="is-canvas relative mr-auto aspect-[16/9] w-[84%]"
            style={{
              borderRadius: '2cqw',
              border: '1px solid rgba(255,255,255,0.08)',
              background: '#0b0b0d',
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.10) 0.09cqw, transparent 0.09cqw)',
              backgroundSize: '2.1cqw 2.1cqw',
              boxShadow: 'inset 0 0 6cqw rgba(0,0,0,0.6)',
              overflow: 'hidden',
            }}
          >
            {/* Ambient blue wash bottom-right, matching the reference's glow under the result. */}
            <span
              aria-hidden
              style={{
                position: 'absolute',
                right: '-6%',
                bottom: '-14%',
                width: '46%',
                height: '58%',
                background: `radial-gradient(closest-side, ${BLUE}33, transparent 72%)`,
                filter: 'blur(2cqw)',
                pointerEvents: 'none',
              }}
            />

            {/* ── Connectors (dashed) ─────────────────────────────── */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 3, pointerEvents: 'none' }}
            >
              {/* Each connector is a thin dashed line that DRAWS in source→target, matching
                  the reference. The draw is a per-line <mask>: a thick reveal path
                  (pathLength=1, and crucially NO non-scaling-stroke, so pathLength's dash
                  normalisation is honoured) whose stroke-dashoffset animates 1→0, wiping the
                  dashed line into view. It only runs once the cards it joins are on the board
                  (see the isDraw and isConn keyframes), so a line never hangs on the grid. */}
              {(() => {
                const conns = [
                  { d: 'M21 34 C30 34 35 24 38 24', kind: 'white' },        // villa → node
                  { d: 'M27.5 74 C33 74 36.5 45 38 45', kind: 'white' },   // brief → node
                  { d: 'M59.5 50 C70 50 76 45 76 39', kind: 'blue' },      // node → houses: leaves node bottom-right, runs right, then sweeps UP into the card's bottom edge
                  { d: 'M59 52 C60 62 64 72 66 78', kind: 'blue' },         // node → cluster: leaves the same corner, curves down to the cluster
                ];
                return conns.map((c, i) => {
                  const white = c.kind === 'white';
                  const stroke = white ? 'rgba(255,255,255,0.55)' : BLUE;
                  const w = white ? 1.1 : 1.2;
                  const maskId = `is-draw-mask-${i}`;
                  return (
                    <g key={i}>
                      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <path className={white ? 'is-draw-white' : 'is-draw-blue'} d={c.d} fill="none"
                          stroke="#fff" strokeWidth={4} pathLength={1} strokeDasharray="1" strokeLinecap="round" />
                      </mask>
                      <path className={white ? 'is-conn-white' : 'is-conn-blue'} d={c.d} fill="none"
                        stroke={stroke} strokeWidth={w} strokeDasharray="3 4"
                        vectorEffect="non-scaling-stroke" strokeLinecap="round" mask={`url(#${maskId})`} />
                    </g>
                  );
                });
              })()}
            </svg>

            {/* connector dots — one at each end, sitting on the card edges */}
            <Dot cls="is-dot-white" left="21%" top="34%" color="rgba(255,255,255,0.85)" />
            <Dot cls="is-dot-white" left="38%" top="24%" color="rgba(255,255,255,0.85)" />
            <Dot cls="is-dot-white" left="27.5%" top="74%" color="rgba(255,255,255,0.85)" />
            <Dot cls="is-dot-white" left="38%" top="45%" color="rgba(255,255,255,0.85)" />
            <Dot cls="is-dot-blue" left="59.5%" top="50%" color={BLUE} />
            <Dot cls="is-dot-blue" left="76%" top="39%" color={BLUE} />
            <Dot cls="is-dot-blue" left="59%" top="52%" color={BLUE} />
            <Dot cls="is-dot-blue" left="66%" top="78%" color={BLUE} />

            {/* ── Villa stack (two overlapping frames) ───────────── */}
            <span
              className="is-avatar-villa"
              style={{ position: 'absolute', left: '0.8%', top: '12%', zIndex: 5 }}
            >
              <Avatar src={AV[4]} size="2.6cqw" />
            </span>
            <Tile
              src={MEDIA.snowboard}
              className="is-villa-back"
              style={{ position: 'absolute', left: '2.3%', top: '13%', width: '15%', height: '22.5%', zIndex: 4 }}
            />
            <Tile
              src={MEDIA.createImage}
              className="is-villa-front"
              style={{ position: 'absolute', left: '7.5%', top: '20%', width: '13.5%', height: '20%', zIndex: 5, transform: 'rotate(7deg)' }}
            />

            {/* ── Center node: Google Gemini Pro ─────────────────── */}
            <span
              className="is-node"
              style={{
                position: 'absolute', left: '39.5%', top: '6.5%', zIndex: 5,
                display: 'flex', alignItems: 'center', gap: '0.5cqw',
                fontFamily: font, fontWeight: 500, fontSize: '0.92cqw', color: 'rgba(255,255,255,0.92)',
              }}
            >
              <span style={{ color: BLUE }}>✦</span> Google Gemini Pro ⌄
            </span>
            <div
              className="is-node-panel"
              style={{
                position: 'absolute', left: '38%', top: '9.5%', width: '21.5%', zIndex: 4,
                background: 'rgba(20,20,22,0.92)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '1.6cqw', padding: '1.05cqw', backdropFilter: 'blur(8px)',
                boxShadow: '0 3cqw 6cqw rgba(0,0,0,0.55)',
              }}
            >
              <div className="is-frames" style={{ display: 'flex', gap: '0.8cqw' }}>
                <Tile src={MEDIA.imagine} label="Start frame" style={{ flex: 1, aspectRatio: '3 / 4' }} />
                <Tile src={MEDIA.upscale} label="End frame" style={{ flex: 1, aspectRatio: '3 / 4' }} />
              </div>
              <p
                className="is-type-prompt"
                style={{
                  margin: '0.85cqw 0 0', fontFamily: font, fontSize: '0.83cqw', lineHeight: 1.42,
                  color: 'rgba(255,255,255,0.82)',
                }}
              >
                photorealistic cinematic shot, modern electric car parked in a tropical villa
                driveway in Thailand, side profile of the car dominates the frame, sleek
                wall-mounted EV charger clearly visible on a smooth concrete wall with a charging
                cable connected, brutalist concrete + warm teak accents, lush dense tropical
                greenery everywhere
              </p>
              <div className="is-coreflow" style={{ marginTop: '0.8cqw' }}>
                <p style={{ margin: 0, fontFamily: font, fontSize: '0.8cqw', color: 'rgba(255,255,255,0.4)' }}>Core flow:</p>
                <p style={{ margin: '0.2cqw 0 0', fontFamily: font, fontSize: '0.8cqw', lineHeight: 1.45, color: 'rgba(255,255,255,0.4)' }}>
                  Idea → mood/references → scenes/structure → script + shot list → export/share
                </p>
              </div>
            </div>

            {/* Create video / Edit promt buttons. Reference reveals them left→right — the
               blue "Create video" slides in first, then "Edit promt" — so each button is
               animated on its own (is-btn1/is-btn2), NOT the row, and they slide from the
               left rather than rising up. */}
            <div
              className="is-buttons"
              style={{
                position: 'absolute', left: '38%', top: '63%', zIndex: 5,
                display: 'flex', gap: '0.85cqw',
              }}
            >
              <span
                className="is-btn1"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.52cqw',
                  padding: '0.85cqw 1.55cqw', borderRadius: '2.4cqw',
                  background: BLUE, color: '#fff', fontFamily: font, fontWeight: 600, fontSize: '0.92cqw',
                  boxShadow: `0 0 3cqw ${BLUE}88`,
                }}
              >
                <span>✦</span> Create video
              </span>
              <span
                className="is-btn2"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.52cqw',
                  padding: '0.85cqw 1.55cqw', borderRadius: '2.4cqw',
                  background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.1)', fontFamily: font, fontWeight: 500, fontSize: '0.92cqw',
                }}
              >
                <span>✎</span> Edit promt
              </span>
            </div>

            {/* ── Right: member avatar + two house tiles ─────────── */}
            <span className="is-orb" style={{ position: 'absolute', left: '70.5%', top: '20%', zIndex: 5 }}>
              <Avatar src={AV[7]} size="2.6cqw" />
            </span>
            <Tile src={MEDIA.section4} className="is-houses" style={{ position: 'absolute', left: '74%', top: '19%', width: '11.5%', height: '20%', zIndex: 4 }} />
            <Tile src={MEDIA.prism} className="is-houses" style={{ position: 'absolute', left: '86.5%', top: '19%', width: '11.5%', height: '20%', zIndex: 4 }} />

            {/* ── Result card (generated video) + tool icons ─────── */}
            <Tile
              src={MEDIA.motion}
              isVideo
              poster={MEDIA.createImage}
              className="is-result"
              style={{
                position: 'absolute', left: '82.5%', top: '57%', width: '14%', height: '39%', zIndex: 5,
                boxShadow: `0 0 5cqw ${BLUE}66, 0 2cqw 4cqw rgba(0,0,0,0.5)`,
              }}
            />
            <div
              className="is-icons"
              style={{
                position: 'absolute', left: '78%', top: '76%', zIndex: 5,
                display: 'flex', flexDirection: 'column', gap: '0.9cqw',
              }}
            >
              {['🗑', '⬇'].map((g, i) => (
                <span
                  key={i}
                  style={{
                    width: '3cqw', height: '3cqw', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'grid', placeItems: 'center', fontSize: '1.3cqw', color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {g}
                </span>
              ))}
            </div>

            {/* ── Bottom cluster (two overlapping frames) ────────── */}
            <span className="is-avatar-cluster" style={{ position: 'absolute', left: '58.5%', top: '77.5%', zIndex: 6 }}>
              <Avatar src={AV[5]} size="2.4cqw" />
            </span>
            <div className="is-cluster" style={{ position: 'absolute', left: '60.5%', top: '78%', width: '13%', height: '17%', zIndex: 5 }}>
              <Tile src={MEDIA.createImage} className="is-cluster1" style={{ position: 'absolute', left: '0', top: '8%', width: '72%', height: '82%', transform: 'rotate(-6deg)' }} />
              <Tile src={MEDIA.content} className="is-cluster2" style={{ position: 'absolute', right: '0', top: '0', width: '72%', height: '82%', transform: 'rotate(6deg)' }} />
            </div>

            {/* ── Project brief card ─────────────────────────────── */}
            <span className="is-brief" style={{ position: 'absolute', left: '4.5%', top: '60%', zIndex: 6 }}>
              <Avatar src={AV[6]} size="2.6cqw" />
            </span>
            <div
              className="is-brief"
              style={{
                position: 'absolute', left: '7.5%', top: '60%', width: '20%', height: '27%', zIndex: 5,
                background: 'rgba(20,20,22,0.92)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '1.6cqw', padding: '1.2cqw', display: 'flex', flexDirection: 'column',
                backdropFilter: 'blur(8px)', boxShadow: '0 3cqw 6cqw rgba(0,0,0,0.5)', overflow: 'hidden',
              }}
            >
              <p style={{ margin: 0, fontFamily: font, fontWeight: 600, fontSize: '0.92cqw', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.85)' }}>
                PROJECT BRIEF
              </p>
              <div className="is-type-brief" style={{ flex: 1, overflow: 'hidden', marginTop: '0.8cqw' }}>
                <p style={{ margin: 0, fontFamily: font, fontSize: '0.92cqw', lineHeight: 1.5, color: 'rgba(255,255,255,0.72)' }}>
                  I'm building a canvas-style interface for creating videos — kind of like a
                  visual workspace where you can drag blocks, connect ideas, and turn them into
                  an actual video draft.
                </p>
                <p style={{ margin: '0.7cqw 0 0', fontFamily: font, fontSize: '0.92cqw', lineHeight: 1.5, color: 'rgba(255,255,255,0.72)' }}>
                  The goal is to make video creation feel less intimidating and more like
                  "thinking on a board": you drop a topic, add references, pick a vibe, and the
                  system helps you shape it into a storyboard, script, and a first cut.
                </p>
                <p style={{ margin: '0.7cqw 0 0', fontFamily: font, fontSize: '0.92cqw', lineHeight: 1.5, color: 'rgba(255,255,255,0.72)' }}>
                  Who it's for: creators, marketers, and small teams who want to make short
                  videos (Reels/TikTok/ads) without getting stuck in a messy process.
                </p>
              </div>
              <div
                className="is-input"
                style={{
                  marginTop: '0.8cqw', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.8cqw',
                }}
              >
                <span style={{ fontFamily: font, fontSize: '0.95cqw', color: 'rgba(255,255,255,0.35)' }}>Write you idea here</span>
                <span style={{ fontSize: '1.1cqw', color: 'rgba(255,255,255,0.5)' }}>➤</span>
              </div>
            </div>

            {/* ── Bottom toolbar (outer wrapper keeps centering; inner runs the reveal) ── */}
            <div style={{ position: 'absolute', left: '50%', top: '92%', transform: 'translateX(-50%)', zIndex: 6 }}>
              <div
                className="is-early"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5cqw',
                  padding: '0.7cqw 0.9cqw', borderRadius: '1.6cqw',
                  background: 'rgba(20,20,22,0.95)', border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {['▶', '⊹', 'T', '✎', '▦'].map((g, i) => (
                  <span
                    key={i}
                    style={{
                      width: '3cqw', height: '2.6cqw', borderRadius: '0.9cqw',
                      display: 'grid', placeItems: 'center', fontSize: '1.2cqw',
                      color: i === 0 ? '#fff' : 'rgba(255,255,255,0.55)',
                      background: i === 0 || i === 4 ? 'rgba(255,255,255,0.08)' : 'transparent',
                    }}
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* zoom control bottom-left */}
            <span
              className="is-early"
              style={{
                position: 'absolute', left: '3%', top: '92%', zIndex: 6,
                width: '3cqw', height: '3cqw', borderRadius: '0.9cqw',
                background: 'rgba(20,20,22,0.95)', border: '1px solid rgba(255,255,255,0.08)',
                display: 'grid', placeItems: 'center', fontSize: '1.2cqw', color: 'rgba(255,255,255,0.55)',
              }}
            >
              ⊕
            </span>
          </div>

          {/* Chat panel — the mirror of Drama Studio's: same size and styling, but hung on
              the right so it overlaps the board's right edge (Drama's card sits right with
              the panel left; this board sits left with the panel right).
              Deliberately left at z-index auto. `container-type: inline-size` on .is-canvas
              does not make it a stacking context (contain computes to none), so the board's
              tiles — z-index up to 6 — reach into this wrapper's context and paint over the
              panel. That layering is intended: the cards ride above the chat. It also keeps
              the fill honest at Drama's exact bg-black/60 — since those tiles paint above,
              they never enter this panel's backdrop, leaving only the board's #0b0b0d and the
              page's #0a0a0a behind it. Near-identical, so no seam shows where the board's
              edge passes behind. Verified by sampling pixels against Drama's panel. */}
          <div className="absolute right-0 top-10 flex h-[452px] w-[336px] flex-col overflow-hidden rounded-2xl border border-white/12 bg-black/60 shadow-[0_24px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            {/* Header. */}
            <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] px-4 py-3">
              <span className="truncate font-['Figtree',sans-serif] text-[13px] font-medium text-white">hello</span>
              <div className="flex shrink-0 items-center gap-2.5 text-white/45">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 8v4l2.5 1.5M3.5 12a8.5 8.5 0 1 0 2.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 3v3.5H9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </div>
            </div>

            {/* Messages. */}
            <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-4 py-4 font-['Figtree',sans-serif] text-[12px] leading-snug">
              <div className="max-w-[80%] self-end rounded-2xl bg-white/90 px-3 py-2 text-[#0d0d0d]">hello</div>
              <div className="max-w-[88%] self-start rounded-2xl bg-white/[0.06] px-3 py-2 text-white/80">
                Hello! How can I assist you today?
              </div>
              <div className="max-w-[80%] self-end rounded-2xl bg-white/90 px-3 py-2 text-[#0d0d0d]">Make me an animated film.</div>
              <div className="max-w-[92%] self-start rounded-2xl bg-white/[0.06] px-3 py-2.5 text-white/80">
                <p className="m-0">Got it! A few questions about your film:</p>
                <p className="m-0 mt-2 text-white/55">1. What is the theme or storyline?</p>
                <p className="m-0 text-white/55">2. How long do you want the film to be?</p>
                <p className="m-0 text-white/55">3. Any specific characters or visual styles?</p>
                <p className="m-0 mt-2">Feel free to answer any or all of these!</p>
              </div>
            </div>

            {/* Composer. */}
            <div className="m-3 rounded-xl border border-white/12 bg-white/[0.04] p-3">
              <span className="font-['Figtree',sans-serif] text-[13px] text-white/40">Type a message…</span>
              <div className="mt-5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full bg-white/8 px-2 py-1 font-['Figtree',sans-serif] text-[11px] text-white/70">
                  <span className="size-3.5 rounded-full bg-gradient-to-br from-[#7EBDEA] to-[#0472EF]" />
                  GPT-4o Mini
                </span>
                <div className="flex items-center gap-2">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white/45"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 15l5-4 4 3 3-2 6 5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="8.5" cy="9" r="1.4" fill="currentColor" /></svg>
                  <span className="grid size-7 place-items-center rounded-full bg-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 19V5M5 12l7-7 7 7" stroke="#0d0d0d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
