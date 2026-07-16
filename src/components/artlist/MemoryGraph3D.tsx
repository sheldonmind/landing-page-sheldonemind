import { useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
// @ts-expect-error - d3-force-3d ships no types
import { forceSimulation, forceManyBody, forceLink, forceCenter, forceCollide } from 'd3-force-3d';

/**
 * Deep Memory, Smart Nodes — a real WebGL 3D force-directed graph
 * (react-force-graph-3d / three.js), in the spirit of jexp/neo4j-3d-force-graph:
 * an organic force-directed layout, nodes sized by their degree, and directional
 * particles streaming along the relationships so data appears to flow.
 *
 * The layout is solved once up-front with d3-force-3d and the positions are then
 * pinned (fx/fy/fz) so it always fills the card (react-force-graph's own physics
 * would otherwise settle to an unpredictable, tiny cluster we can't frame).
 */

const COLORS = [
  '#35d0ff', '#5ac8fa', '#4a7cff', '#6c7cff', '#7c5cff', '#b45cff',
  '#e05cff', '#ff5cc8', '#ff6b8b', '#ff9f45', '#ffd166', '#c8ff5c',
  '#7ee06a', '#3dd6b0', '#2ee6d6',
];
const TARGET_R = 108;

const hash = (n: number) => {
  const v = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v);
};

function buildGraph() {
  const N = 46;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodes: any[] = Array.from({ length: N }, (_, i) => ({
    id: i,
    color: COLORS[Math.floor(hash(i * 11 + 4) * COLORS.length)],
    deg: 0,
  }));
  const linkPairs: [number, number][] = [];
  const seen = new Set<string>();
  const add = (a: number, b: number) => {
    if (a === b) return;
    const k = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (seen.has(k)) return;
    seen.add(k);
    linkPairs.push([a, b]);
    nodes[a].deg++;
    nodes[b].deg++;
  };
  for (let i = 1; i < N; i++) add(i, Math.floor(hash(i * 2) * i));
  for (let i = 0; i < N; i++) {
    add(i, (i * 5 + 7) % N);
    if (hash(i * 9) > 0.5) add(i, Math.floor(hash(i * 3 + 1) * N));
  }
  nodes.forEach((n) => (n.val = 1.4 + n.deg * 0.9));

  // Solve an organic 3D layout offline, then pin it.
  const simLinks = linkPairs.map(([source, target]) => ({ source, target }));
  const sim = forceSimulation(nodes, 3)
    .force('charge', forceManyBody().strength(-55))
    .force('link', forceLink(simLinks).id((d: { id: number }) => d.id).distance(26).strength(0.6))
    .force('center', forceCenter(0, 0, 0))
    .force('collide', forceCollide(7))
    .stop();
  for (let i = 0; i < 340; i++) sim.tick();

  let maxR = 1;
  nodes.forEach((n) => (maxR = Math.max(maxR, Math.hypot(n.x, n.y, n.z))));
  const s = TARGET_R / maxR;
  nodes.forEach((n) => {
    n.x *= s;
    n.y *= s;
    n.z *= s;
    n.fx = n.x;
    n.fy = n.y;
    n.fz = n.z;
  });

  // Fresh link objects (numeric ids) for react-force-graph to consume.
  const links = linkPairs.map(([source, target]) => ({ source, target }));
  return { nodes, links };
}

export default function MemoryGraph3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fgRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupInstance = useRef<any>(null);
  const sizeRef = useRef({ w: 480, h: 260 });
  const [size, setSize] = useState({ w: 480, h: 260 });
  const data = useMemo(buildGraph, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      if (r.width && r.height) {
        sizeRef.current = { w: Math.round(r.width), h: Math.round(r.height) };
        setSize(sizeRef.current);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    const iv = setInterval(() => {
      const fg = fgRef.current;
      if (!fg || fg === setupInstance.current) return;
      if (typeof fg.controls !== 'function' || !fg.controls()) return;
      setupInstance.current = fg;

      const { w, h } = sizeRef.current;
      fg.postProcessingComposer().addPass(new UnrealBloomPass(new THREE.Vector2(w, h), 0.7, 0.5, 0.12));

      fg.cameraPosition({ x: 0, y: 0, z: TARGET_R * 2.1 }, { x: 0, y: 0, z: 0 }, 0);

      const controls = fg.controls();
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.autoRotate = true; // OrbitControls handles the spin
      controls.autoRotateSpeed = 4.4;

      // Breathing zoom: OrbitControls keeps the angle; we only vary the distance.
      const cam = fg.camera();
      const animate = () => {
        const t = performance.now() / 1000;
        const dist = TARGET_R * (2.05 + 0.55 * Math.sin(t * 1.9));
        cam.position.setLength(dist);
        raf = requestAnimationFrame(animate);
      };
      animate();
      clearInterval(iv);
    }, 120);
    return () => {
      clearInterval(iv);
      cancelAnimationFrame(raf);
    };
  }, []);

  // The bloom pass renders through an EffectComposer, whose output is opaque
  // (near-black) even though the canvas and `backgroundColor` are transparent, so
  // the canvas would otherwise meet the page in a hard rectangular seam. The fill
  // is only ~8/255 off the page background, so fading the edges out dissolves it.
  //
  // The radii must stay near 50%: they are a share of the box's full width/height,
  // while the edge is only half of it away from the centre — at 78% the fade would
  // finish outside the box and never reach the edge. Vertical is looser (68%) since
  // the graph nearly fills the height; horizontal has room to fade fully.
  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 overflow-hidden"
      aria-hidden
      style={{
        maskImage: 'radial-gradient(ellipse 52% 68% at 50% 50%, #000 35%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 52% 68% at 50% 50%, #000 35%, transparent 100%)',
      }}
    >
      <ForceGraph3D
        ref={fgRef}
        controlType="orbit"
        width={size.w}
        height={size.h}
        graphData={data}
        backgroundColor="rgba(0,0,0,0)"
        showNavInfo={false}
        enableNodeDrag={false}
        enablePointerInteraction={false}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodeColor={(n: any) => n.color}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodeVal={(n: any) => n.val}
        nodeRelSize={3.2}
        nodeResolution={16}
        nodeOpacity={0.95}
        linkColor={() => 'rgba(150,190,255,0.22)'}
        linkWidth={0.4}
        linkOpacity={0.22}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={1.7}
        linkDirectionalParticleSpeed={0.006}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        linkDirectionalParticleColor={() => '#9ad4ff'}
        cooldownTime={0}
        warmupTicks={0}
      />
    </div>
  );
}
