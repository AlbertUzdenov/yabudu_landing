// Hero / cover — light theme
function Hero({ accent }) {
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTime((t) => t + 1), 50);
    return () => clearInterval(id);
  }, []);
  const BLUE = '#2F33F9';

  return (
    <section id="hero" style={{
      padding: 0, minHeight: '100vh', background: '#ffffff', color: 'var(--ink)',
      position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center'
    }}>
      {/* animated mesh blobs */}
      <Decor.Blob color={accent} size={560} x="-16%" y="-20%" opacity={0.10} dur={22} blur={100} />
      <Decor.Blob color={BLUE} size={680} x="68%" y="62%" opacity={0.09} dur={26} delay={3} blur={120} />
      <Decor.Blob color={accent} size={360} x="84%" y="-12%" opacity={0.09} dur={20} delay={6} blur={80} />

      {/* floating decorative accents */}
      <Decor.Burst color={accent} size={70} dur={14}
      style={{ position: 'absolute', top: '38%', left: '52%', opacity: 0.9 }} />
      <Decor.DotGrid color={accent} cols={5} rows={5} gap={12} dot={4} opacity={0.5}
      style={{ position: 'absolute', bottom: '20%', right: '34%' }} />

      <div className="wrap" style={{ position: 'relative', width: '100%', paddingTop: 56, paddingBottom: 80 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* left */}
          <div className="reveal in hero-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <span className="chip">iOS · Android</span>
            </div>
            <div style={{ marginBottom: 28 }}>
              <img
                src="assets/hero-wordmark.svg"
                alt="Я_БУДУ"
                style={{ display: 'block', width: '100%', maxWidth: 640, height: 'auto' }} />
              
              <div className="display" style={{
                fontSize: 'clamp(26px, 2.6vw, 40px)', fontWeight: 500, letterSpacing: '-0.01em',
                lineHeight: 1.18, marginTop: 24, color: 'var(--ink)'
              }}>
                <span style={{ color: 'rgb(10, 10, 14)' }}>События, билеты и люди</span><br /><span style={{ color: 'rgb(254, 92, 29)' }}>в одном приложении</span>
              </div>
            </div>
            <p style={{ fontSize: 20, maxWidth: 540, color: 'var(--mute)', marginBottom: 40 }}>Ищи события поблизости на карте, организовывай свои и узнавай, где будут сегодня твои друзья.

            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.08em', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span></span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--mute)' }} />
                <span>бесплатно</span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--mute)' }} />
                <span></span>
              </div>
            </div>
          </div>

          {/* right — map mock with pins */}
          <div className="reveal in hero-right" style={{ position: 'relative', height: 580 }}>
            <HeroMap accent={accent} t={time} />
          </div>
        </div>
      </div>

      {/* bottom marquee */}
      <div className="hero-marquee" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '20px 0', borderTop: '1px solid var(--line)',
        background: 'var(--paper-2)', overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', gap: 48, animation: 'marquee 38s linear infinite', whiteSpace: 'nowrap' }}>
          {Array.from({ length: 2 }).map((_, k) =>
          <div key={k} style={{ display: 'flex', gap: 48, fontFamily: 'JetBrains Mono', fontSize: 14, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
              <span>концерты</span><span style={{ color: accent }}>+</span>
              <span>лекции</span><span style={{ color: BLUE }}>+</span>
              <span>спорт</span><span style={{ color: accent }}>+</span>
              <span>вечеринки</span><span style={{ color: BLUE }}>+</span>
              <span>выставки</span><span style={{ color: accent }}>+</span>
              <span>квартирники</span><span style={{ color: BLUE }}>+</span>
              <span>фестивали</span><span style={{ color: accent }}>+</span>
              <span>маркеты</span><span style={{ color: BLUE }}>+</span>
              <span>стендап</span><span style={{ color: accent }}>+</span>
              <span>спектакли</span><span style={{ color: BLUE }}>+</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function HeroMap({ accent, t }) {
  const BLUE = '#2F33F9';
  const pins = [
  { x: 22, y: 24, label: 'Концерт', when: 'Сегодня · 20:00', color: BLUE },
  { x: 64, y: 18, label: 'Стендап', when: 'Завтра · 19:30', color: accent },
  { x: 78, y: 56, label: 'Маркет', when: 'Сб · 12:00', color: BLUE },
  { x: 32, y: 68, label: 'Лекция', when: 'Ср · 18:00', color: accent },
  { x: 50, y: 42, label: 'Вечеринка', when: 'Пт · 22:00', color: BLUE }];

  return (
    <div style={{
      position: 'absolute', inset: 0, borderRadius: 32,
      background: 'linear-gradient(140deg, #F5F4EF, #ECEAE2)',
      border: '1px solid var(--line)',
      overflow: 'hidden',
      boxShadow: '0 40px 80px -20px rgba(10,10,30,0.18)'
    }}>
      {/* faux streets */}
      <svg style={{ position: 'absolute', inset: 0 }} viewBox="0 0 400 580" preserveAspectRatio="none">
        <defs>
          <pattern id="grid-faint" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" stroke="rgba(10,10,14,0.04)" fill="none" />
          </pattern>
        </defs>
        <rect width="400" height="580" fill="url(#grid-faint)" />
        <path d="M-10 120 L420 90" stroke="rgba(10,10,14,0.05)" strokeWidth="32" fill="none" />
        <path d="M80 -20 L120 600" stroke="rgba(10,10,14,0.05)" strokeWidth="22" fill="none" />
        <path d="M-10 380 L420 410" stroke="rgba(10,10,14,0.04)" strokeWidth="40" fill="none" />
        <path d="M280 -20 L320 600" stroke="rgba(10,10,14,0.04)" strokeWidth="24" fill="none" />
        <circle cx="200" cy="280" r="40" fill="rgba(47,51,249,0.10)" />
        <circle cx="200" cy="280" r="65" fill="rgba(47,51,249,0.05)" />
      </svg>

      {/* You-are-here */}
      <div style={{
        position: 'absolute', left: '48%', top: '48%', transform: 'translate(-50%,-50%)',
        width: 18, height: 18, borderRadius: '50%', background: BLUE,
        boxShadow: `0 0 0 6px ${BLUE}33, 0 0 0 14px ${BLUE}1a`
      }} />

      {/* pins */}
      {pins.map((p, i) => {
        const anchor = p.x <= 33 ? 'start' : p.x >= 62 ? 'end' : 'center';
        const tx = anchor === 'center' ? '-50%' : anchor === 'end' ? '-100%' : '0%';
        const tailStyle = anchor === 'center' ?
        { marginLeft: '50%', transform: 'rotate(45deg) translateX(-50%)' } :
        anchor === 'end' ?
        { marginLeft: 'calc(100% - 24px)', transform: 'rotate(45deg)' } :
        { marginLeft: 12, transform: 'rotate(45deg)' };
        return (
        <div key={i} style={{
          position: 'absolute', left: p.x + '%', top: p.y + '%', transform: `translate(${tx}, -100%)`
        }}>
          <div style={{
          animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`
        }}>
          <div style={{
          background: 'white', color: 'var(--ink)', borderRadius: 14, padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 12px 28px -8px rgba(10,10,30,0.18)',
          border: p.big ? `2px solid ${p.color}` : '1px solid var(--line)',
          marginBottom: 6, whiteSpace: 'nowrap'
        }}>
            <div style={{
            width: 28, height: 28, borderRadius: 8, background: p.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
              <Icon.Pin size={16} color="white" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.1 }}>{p.label}</div>
              <div style={{ fontSize: 11, color: 'var(--mute)', fontFamily: 'JetBrains Mono' }}>{p.when}</div>
            </div>
          </div>
          <div style={{
          width: 12, height: 12, background: 'white', ...tailStyle,
          marginTop: -8
        }} />
          </div>
        </div>);

      })}

      {/* Floating card — event detail */}
      <div style={{
        position: 'absolute', left: 24, bottom: 24, right: 24,
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 18, padding: 18,
        color: 'var(--ink)',
        boxShadow: '0 18px 36px -12px rgba(10,10,30,0.18)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: 12, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon.Sparkle size={24} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Стендап «Ноль шуток про IT»</div>
            <div style={{ fontSize: 13, color: 'var(--mute)', fontFamily: 'JetBrains Mono' }}>Завтра · 19:30 · 600 ₽</div>
          </div>
          <div style={{ display: 'flex', marginRight: 12 }}>
            {[accent, BLUE, accent].map((c, i) =>
            <div key={i} style={{
              width: 28, height: 28, borderRadius: '50%', background: c,
              border: '2px solid white', marginLeft: i ? -10 : 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700, color: 'white'
            }}>{['А', 'М', '+5'][i]}</div>
            )}
          </div>
        </div>
      </div>
    </div>);

}

window.Hero = Hero;