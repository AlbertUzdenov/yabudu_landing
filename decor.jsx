// Decorative animated shapes (orange + blue only)
const ORANGE = '#FE5C1C';
const BLUE_DECOR = '#2F33F9';

// Soft animated blob — large blurred shape that drifts
function Blob({ color = ORANGE, size = 480, x = '0%', y = '0%', opacity = 0.18, blur = 80, dur = 18, delay = 0, style = {} }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: size, height: size, borderRadius: '50%',
      background: color, opacity, filter: `blur(${blur}px)`,
      animation: `blob-float ${dur}s ease-in-out ${delay}s infinite`,
      pointerEvents: 'none',
      ...style
    }} />);

}

// Soft squiggle / wave line
function Squiggle({ color = ORANGE, width = 240, height = 60, strokeWidth = 4, style = {}, dur = 9 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 240 60" fill="none" style={{ overflow: 'visible', ...style }}>
      <path
        d="M0 30 C 30 -10, 60 70, 90 30 S 150 -10, 180 30 S 240 70, 270 30"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none"
        style={{ animation: `wave-shift ${dur}s ease-in-out infinite`, transformOrigin: 'center' }} />
      
    </svg>);

}

// Stylized "star burst" — 4-point geometric flower
function Burst({ color = ORANGE, size = 80, style = {}, dur = 10 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none"
    style={{ animation: `slow-spin ${dur}s linear infinite`, ...style }}>
      <path d="M40 0 C 44 30, 50 36, 80 40 C 50 44, 44 50, 40 80 C 36 50, 30 44, 0 40 C 30 36, 36 30, 40 0 Z" fill={color} />
    </svg>);

}

// Concentric rings (ripple)
function Rings({ color = BLUE_DECOR, size = 200, count = 3, opacity = 0.18, style = {} }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      {Array.from({ length: count }).map((_, i) =>
      <div key={i} style={{
        position: 'absolute', inset: 0,
        border: `2px solid ${color}`, borderRadius: '50%',
        opacity: opacity * (1 - i * 0.25),
        transform: `scale(${1 - i * 0.22})`,
        animation: `ring-pulse 4s ease-in-out ${i * 0.4}s infinite`
      }} />
      )}
    </div>);

}

// Dot grid corner
function DotGrid({ color = BLUE_DECOR, cols = 6, rows = 6, gap = 14, dot = 4, opacity = 0.5, style = {} }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: `repeat(${cols}, ${dot}px)`,
      gap, opacity, ...style, fontFamily: "Times"
    }}>
      {Array.from({ length: cols * rows }).map((_, i) =>
      <span key={i} style={{
        width: dot, height: dot, borderRadius: '50%',
        background: color, display: 'block'
      }} />
      )}
    </div>);

}

// Donut / Ring with offset accent
function Donut({ size = 120, color = ORANGE, accent = BLUE_DECOR, thickness = 18, style = {}, dur = 18 }) {
  const cx = size / 2,r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none"
    style={{ animation: `slow-spin ${dur}s linear infinite`, ...style }}>
      <circle cx={cx} cy={cx} r={r} stroke={color} strokeWidth={thickness} opacity="0.18" style={{ opacity: "0.03" }} />
      <circle cx={cx} cy={cx} r={r} stroke={accent} strokeWidth={thickness}
      strokeDasharray={`${c * 0.35} ${c}`} strokeLinecap="round" />
    </svg>);

}

// Animated "noise" stripes that pan slowly
function Stripes({ color = ORANGE, opacity = 0.06, style = {} }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, opacity, pointerEvents: 'none',
      backgroundImage: `repeating-linear-gradient(135deg, ${color} 0 2px, transparent 2px 14px)`,
      maskImage: 'radial-gradient(60% 50% at 50% 50%, black, transparent)',
      WebkitMaskImage: 'radial-gradient(60% 50% at 50% 50%, black, transparent)',
      ...style
    }} />);

}

// Mesh gradient background — animated multi-blob composite
function MeshBg({ accent = ORANGE, style = {} }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', ...style
    }}>
      <Blob color={accent} size={520} x="-10%" y="-15%" opacity={0.12} dur={22} />
      <Blob color={BLUE_DECOR} size={620} x="55%" y="35%" opacity={0.12} dur={26} delay={3} />
      <Blob color={accent} size={420} x="75%" y="-10%" opacity={0.10} dur={20} delay={6} />
    </div>);

}

// Wave divider (thin SVG) between sections
function WaveDivider({ color = ORANGE, flip = false, height = 60 }) {
  return (
    <svg width="100%" height={height} viewBox="0 0 1440 60" preserveAspectRatio="none"
    style={{ display: 'block', transform: flip ? 'scaleY(-1)' : 'none' }}>
      <path d="M0 30 C 240 -10, 480 70, 720 30 S 1200 -10, 1440 30 L1440 60 L 0 60 Z" fill={color} />
    </svg>);

}

// Global keyframes for decor
const decorStyle = document.createElement('style');
decorStyle.textContent = `
@keyframes blob-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -20px) scale(1.08); }
  66% { transform: translate(-30px, 30px) scale(0.95); }
}
@keyframes wave-shift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-20px); }
}
@keyframes slow-spin { to { transform: rotate(360deg); } }
@keyframes ring-pulse {
  0%, 100% { transform: scale(0.92); opacity: 0.18; }
  50% { transform: scale(1.08); opacity: 0.35; }
}
`;
document.head.appendChild(decorStyle);

window.Decor = { Blob, Squiggle, Burst, Rings, DotGrid, Donut, Stripes, MeshBg, WaveDivider };