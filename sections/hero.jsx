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
      padding: 0, minHeight: '100vh', background: 'var(--paper)', color: 'var(--ink)',
      position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center'
    }}>
      {/* subtle grid backdrop */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.5,
        backgroundImage: 'radial-gradient(rgba(10,10,14,0.10) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(80% 70% at 50% 50%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(80% 70% at 50% 50%, black, transparent)'
      }} />

      {/* animated mesh blobs */}
      <Decor.Blob color={accent} size={620} x="-12%" y="-15%" opacity={0.14} dur={22} blur={90} />
      <Decor.Blob color={BLUE} size={720} x="55%" y="40%" opacity={0.14} dur={26} delay={3} blur={110} />
      <Decor.Blob color={accent} size={380} x="80%" y="-10%" opacity={0.12} dur={20} delay={6} blur={70} />

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
              <span className="chip" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, display: 'inline-block' }} />
                бета-доступ открыт
              </span>
            </div>
            <div style={{ marginBottom: 28 }}>
              <img
                src="assets/hero-wordmark.svg"
                alt="Я_БУДУ"
                style={{ display: 'block', width: '100%', maxWidth: 640, height: 'auto' }} />
              
              <div className="display" style={{
                fontSize: 'clamp(28px, 3.2vw, 52px)', fontWeight: 400, letterSpacing: '-0.01em',
                lineHeight: 1.1, marginTop: 24, color: 'var(--ink)'
              }}>
                События, билеты и компания —<br />в одном приложении
              </div>
            </div>
            <p style={{ fontSize: 20, maxWidth: 540, color: 'var(--mute)', marginBottom: 40 }}>Афиша на карте, кто из своих идёт, билет — в один тап. От «куда сходить» до «спасибо за вечер» — внутри одного экрана.

            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a className="btn btn-primary" style={{ background: accent, boxShadow: `0 8px 24px -8px ${accent}99`, gap: 12 }}>
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" style={{ marginRight: -2 }}>
                    <path d="M14.94 11.41c-.02-2.43 1.99-3.6 2.08-3.66-1.13-1.66-2.9-1.88-3.53-1.91-1.5-.15-2.93.88-3.7.88-.76 0-1.94-.86-3.19-.84-1.64.03-3.15.95-3.99 2.42-1.7 2.95-.43 7.32 1.22 9.72.8 1.18 1.76 2.5 3.01 2.45 1.21-.05 1.67-.78 3.13-.78 1.45 0 1.87.78 3.15.75 1.3-.02 2.12-1.19 2.92-2.38.92-1.37 1.3-2.7 1.32-2.77-.03-.01-2.53-.97-2.55-3.86zm-2.42-7.1c.66-.83 1.11-1.96.99-3.1-.96.04-2.13.65-2.82 1.46-.61.72-1.16 1.89-1.01 2.99 1.08.08 2.18-.55 2.84-1.35z" fill="white"/>
                  </svg>
                  <span>iOS</span>
                </a>
                <a className="btn" style={{
                  background: 'transparent',
                  color: 'var(--ink)',
                  border: '1.5px solid rgba(10,10,14,0.18)',
                  gap: 12,
                }}>
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" style={{ marginRight: -2 }}>
                    <path d="M.61 19.39c.21.12.45.18.71.18.27 0 .54-.07.78-.22l11.3-6.52L9.85 9.7.61 19.39zM16.55 8.83 13.7 7.18l-3.21 3.21 3.21 3.21 2.85-1.65a1.42 1.42 0 0 0 0-2.46.71.71 0 0 0 0-.66zM2.1.43A1.42 1.42 0 0 0 .56.43c-.24.14-.4.4-.4.68v17.72L9.4 9.7.16.43zM12.42 6.6 1.32.07A1.45 1.45 0 0 0 .8.01l8.84 8.84L12.42 6.6z" fill="currentColor"/>
                  </svg>
                  <span>Android</span>
                </a>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.08em', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span>ранний доступ</span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--mute)' }} />
                <span>бесплатно</span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--mute)' }} />
                <span>без рекламы внутри</span>
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
  { x: 64, y: 18, label: 'Стендап', when: 'Завтра · 19:30', color: accent, big: true },
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
      {pins.map((p, i) =>
      <div key={i} style={{
        position: 'absolute', left: p.x + '%', top: p.y + '%', transform: 'translate(-50%, -100%)',
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
          width: 12, height: 12, background: 'white', transform: 'rotate(45deg) translateX(-50%)',
          marginTop: -8, marginLeft: '50%'
        }} />
        </div>
      )}

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