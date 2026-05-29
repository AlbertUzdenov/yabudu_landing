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

// Bold flowing ribbon — thick organic curve (Memphis / squiggle style)
const RIBBON_PATHS = {
  // loose loop, like the swirl references
  loop: 'M-40 120 C 120 40, 60 240, 220 180 S 360 40, 300 200 S 180 360, 360 320',
  // tall S-spiral / coil
  coil: 'M120 -30 C 320 60, 40 160, 240 250 C 380 310, 120 380, 300 470',
  // horizontal wave ribbon
  wave: 'M-40 200 C 120 80, 240 320, 400 200 S 640 80, 800 200',
  // big rolling curl bottom-corner
  curl: 'M-40 320 C 80 360, 140 200, 260 240 C 380 280, 360 100, 480 140'
};

function Ribbon({ variant = 'loop', color = BLUE_DECOR, width = 420, stroke = 60, opacity = 0.1, dur = 26, delay = 0, style = {} }) {
  const vb = variant === 'wave' ? '0 0 760 400' : variant === 'curl' ? '0 0 440 400' : '0 0 360 480';
  return (
    <svg width={width} viewBox={vb} fill="none" aria-hidden="true"
    style={{ position: 'absolute', opacity, pointerEvents: 'none', overflow: 'visible',
      animation: `ribbon-drift ${dur}s ease-in-out ${delay}s infinite`, ...style }}>
      <path d={RIBBON_PATHS[variant]} stroke={color} strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>);

}

// One continuous full-page background — soft color wash + flowing ribbons,
// distributed down the whole document so there are no per-section seams.
function PageBg({ accent = ORANGE }) {
  const B = BLUE_DECOR;
  return (
    <div className="page-bg" aria-hidden="true">
      {/* soft color wash */}
      <Blob color={accent} size={560} x="-14%" y="0%" opacity={0.07} dur={24} blur={110} />
      <Blob color={B} size={640} x="68%" y="9%" opacity={0.06} dur={28} delay={3} blur={120} />
      <Blob color={accent} size={500} x="-10%" y="23%" opacity={0.06} dur={26} delay={2} blur={100} />
      <Blob color={B} size={560} x="66%" y="35%" opacity={0.06} dur={30} delay={5} blur={110} />
      <Blob color={accent} size={520} x="-12%" y="49%" opacity={0.06} dur={25} delay={1} blur={100} />
      <Blob color={B} size={560} x="64%" y="61%" opacity={0.06} dur={29} delay={4} blur={110} />
      <Blob color={accent} size={500} x="-10%" y="75%" opacity={0.06} dur={27} delay={2} blur={100} />
      <Blob color={B} size={600} x="68%" y="89%" opacity={0.06} dur={31} delay={6} blur={120} />

      {/* flowing ribbons */}
      <Ribbon variant="coil" color={B} width={340} stroke={54} opacity={0.10} dur={28} style={{ top: '2%', right: '-6%' }} />
      <Ribbon variant="loop" color={accent} width={300} stroke={48} opacity={0.11} dur={32} delay={3} style={{ top: '11%', left: '-7%' }} />
      <Ribbon variant="curl" color={accent} width={340} stroke={52} opacity={0.10} dur={34} delay={2} style={{ top: '21%', right: '-7%' }} />
      <Ribbon variant="wave" color={B} width={520} stroke={54} opacity={0.09} dur={33} delay={5} style={{ top: '31%', left: '-5%' }} />
      <Ribbon variant="coil" color={accent} width={320} stroke={52} opacity={0.10} dur={29} delay={1} style={{ top: '41%', right: '-6%' }} />
      <Ribbon variant="loop" color={B} width={300} stroke={48} opacity={0.10} dur={35} delay={4} style={{ top: '50%', left: '-7%' }} />
      <Ribbon variant="curl" color={B} width={340} stroke={52} opacity={0.10} dur={32} delay={2} style={{ top: '60%', right: '-7%' }} />
      <Ribbon variant="coil" color={accent} width={320} stroke={52} opacity={0.10} dur={30} delay={5} style={{ top: '69%', left: '-6%' }} />
      <Ribbon variant="loop" color={accent} width={300} stroke={48} opacity={0.11} dur={34} delay={3} style={{ top: '78%', right: '-7%' }} />
      <Ribbon variant="wave" color={B} width={520} stroke={54} opacity={0.09} dur={33} delay={1} style={{ top: '87%', left: '-5%' }} />
    </div>);

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
@keyframes ribbon-drift {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(0, -18px) rotate(2deg); }
}
`;
document.head.appendChild(decorStyle);

window.Decor = { Blob, Squiggle, Burst, Rings, DotGrid, Donut, Stripes, MeshBg, WaveDivider, ToggleHint, Ribbon, PageBg };

// Animated "tap me" arrow hint that points back at a toggle
function ToggleHint({ color = ORANGE, label = 'нажми', style = {} }) {
  return (
    <div className="toggle-hint" aria-hidden="true" style={{
      position: 'absolute', left: 'calc(100% + 14px)', top: '50%', transform: 'translateY(-50%)',
      display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', color, pointerEvents: 'none', ...style
    }}>
      <span className="toggle-hint-inner" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <svg width="58" height="30" viewBox="0 0 58 30" fill="none">
          <path d="M56 18 C42 26, 22 26, 6 15" stroke={color} strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M6 15 L10.4 23.6 M6 15 L15 16.2" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 600 }}>{label}</span>
      </span>
    </div>);

}
window.Decor.ToggleHint = ToggleHint;