// Benefits section — toggle + icon-tile bento (modern, low-text)
function Benefits({ accent }) {
  const BLUE = '#2F33F9';
  const [side, setSide] = React.useState('participant');

  const participant = {
    badge: 'Участникам',
    headline: 'Каждый вечер —',
    headlineAccent: 'как первый',
    accentColor: BLUE,
    stat: '5',
    statLabel: 'причин остаться',
    items: [
    { t: 'Афиша на карте', d: 'События вокруг и в твоё окно времени', icon: <Icon.Map size={20} color="white" /> },
    { t: 'Кошелёк билетов', d: 'Все билеты на одном экране', icon: <Icon.Ticket size={20} color="white" /> },
    { t: 'Социальный слой', d: 'Видно, кто из своих идёт', icon: <Icon.Users size={20} color="white" /> },
    { t: 'Повод выйти', d: 'Лента сама подкидывает идеи', icon: <Icon.Sparkle size={20} color="white" /> },
    { t: 'Общение до и после', d: 'Чаты события — новые знакомства', icon: <Icon.Chat size={20} color="white" /> }]

  };

  const organizer = {
    badge: 'Организаторам',
    headline: 'Зарабатывать —',
    headlineAccent: 'не отрываясь от смысла',
    accentColor: accent,
    stat: '5',
    statLabel: 'инструментов в одном месте',
    items: [
    { t: 'Своя аудитория', d: 'Подписчики, постоянные гости', icon: <Icon.Users size={20} color="white" /> },
    { t: 'QR на входе', d: 'Сверка за полсекунды', icon: <Icon.QR size={20} color="white" /> },
    { t: 'Чаты с гостями', d: 'Всё общение в одном месте', icon: <Icon.Chat size={20} color="white" /> },
    { t: 'Аналитика', d: 'Кто, откуда, что покупает', icon: <Icon.Chart size={20} color="white" /> },
    { t: 'Промо-инструменты', d: 'Подборки, скоро — таргет', icon: <Icon.Trend size={20} color="white" /> }]

  };

  const data = side === 'participant' ? participant : organizer;
  const sideColor = data.accentColor;

  return (
    <section id="benefits" style={{ position: 'relative', overflow: 'hidden' }}>
      <Decor.Squiggle color="#2F33F9" width={200} height={50} strokeWidth={4} dur={9}
      style={{ position: 'absolute', top: 80, left: '6%', opacity: 0.5 }} />
      <Decor.DotGrid color={accent} cols={6} rows={6} gap={12} dot={4} opacity={0.4}
      style={{ position: 'absolute', top: 110, right: '4%' }} />
      <Decor.Blob color={accent} size={500} x="65%" y="50%" opacity={0.07} dur={24} blur={90} />
      <Decor.Blob color="#2F33F9" size={480} x="-10%" y="30%" opacity={0.07} dur={28} delay={3} blur={90} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div className="shead reveal">
          <span className="eyebrow">05 — польза</span>
          <h2 className="display">
            Кому это —<br />
            <span style={{ color: accent }}>и за чем</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <p style={{ margin: 0 }}>Одна платформа — две выгоды. Никто не остаётся в проигрыше.</p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'JetBrains Mono', fontSize: 12, color: 'var(--mute)',
              textTransform: 'uppercase', letterSpacing: '.08em'
            }}>
              <Icon.Arrow size={14} color="var(--mute)" />
              <span>выбери сторону</span>
            </div>
            <div className="toggle toggle-switch" role="tablist" aria-label="Точка зрения">
              <button onClick={() => setSide('participant')} className={side === 'participant' ? 'active' : ''} aria-pressed={side === 'participant'}>
                <span>Участникам</span>
              </button>
              <span className="toggle-swap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7h12M7 7l3-3M7 7l3 3M17 17H5M17 17l-3 3M17 17l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <button onClick={() => setSide('organizer')} className={side === 'organizer' ? 'active' : ''} aria-pressed={side === 'organizer'}>
                <span>Организаторам</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero card with stat + grid of tiles */}
        <div className="benefits-layout" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.6fr', gap: 20 }}>
          {/* Left: hero stat card */}
          <BenefitsStat key={side + '-stat'} data={data} sideColor={sideColor} />

          {/* Right: bento of icon tiles */}
          <div className="benefits-tiles" style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14
          }}>
            {data.items.map((it, i) =>
            <BenefitTile key={side + '-' + i} idx={i} item={it} tint={sideColor} />
            )}
          </div>
        </div>
      </div>
    </section>);

}

function BenefitsStat({ data, sideColor }) {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    setShown(false);
    const id = setTimeout(() => setShown(true), 40);
    return () => clearTimeout(id);
  }, [data]);

  return (
    <div style={{
      position: 'relative', borderRadius: 24, padding: 32,
      background: sideColor, color: 'white', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      minHeight: 360,
      opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(14px)',
      transition: 'opacity .55s cubic-bezier(.2,.8,.2,1), transform .55s cubic-bezier(.2,.8,.2,1)',
      boxShadow: `0 28px 60px -22px ${sideColor}66`
    }}>
      {/* big watermark digit */}
      <div className="display" aria-hidden="true" style={{
        position: 'absolute', right: -20, bottom: -50,
        fontSize: 360, lineHeight: 0.8, fontWeight: 700,
        color: 'rgba(255,255,255,0.10)', userSelect: 'none', pointerEvents: 'none'
      }}>
        {data.stat}
      </div>
      {/* floating bursts */}
      <div style={{
        position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%',
        background: 'white', opacity: 0.08, filter: 'blur(30px)'
      }} />

      <div style={{ position: 'relative' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 12px', borderRadius: 999,
          background: 'rgba(255,255,255,0.16)',
          fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em',
          color: 'white'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'white' }} />
          {data.badge}
        </span>
      </div>

      <div style={{ position: 'relative' }}>
        <h3 className="display" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.05 }}>
          {data.headline}<br />
          <span style={{ opacity: 0.9 }}>{data.headlineAccent}</span>
        </h3>
        <div style={{
          marginTop: 16, fontSize: 14, fontFamily: 'JetBrains Mono',
          color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: '.06em',
          display: 'flex', alignItems: 'center', gap: 10
        }}>
          <span className="display" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>{data.stat}</span>
          <span style={{ maxWidth: 200 }}>{data.statLabel}</span>
        </div>
      </div>
    </div>);

}

function BenefitTile({ idx, item, tint }) {
  const [hov, setHov] = React.useState(false);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    setShown(false);
    const id = setTimeout(() => setShown(true), 80 + idx * 80);
    return () => clearTimeout(id);
  }, [item.t]);

  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', borderRadius: 18, padding: 22,
        background: 'white', border: '1px solid var(--line)',
        overflow: 'hidden',
        opacity: shown ? 1 : 0,
        transform: shown ? hov ? 'translateY(-4px)' : 'translateY(0)' : 'translateY(14px)',
        transition: 'opacity .5s cubic-bezier(.2,.8,.2,1), transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .25s, border-color .2s',
        boxShadow: hov ? '0 20px 36px -18px rgba(10,10,30,0.10)' : 'none',
        borderColor: hov ? tint : 'var(--line)',
        cursor: 'default'
      }}>
      
      {/* corner accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 80, height: 80, borderRadius: '0 18px 0 80px',
        background: hov ? `${tint}14` : `${tint}08`,
        transition: 'background .3s',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{
          width: 40, height: 40, borderRadius: 10, background: tint,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          transition: 'transform .3s cubic-bezier(.2,.8,.2,1)',
          transform: hov ? 'rotate(-6deg) scale(1.06)' : 'none'
        }}>{item.icon}</span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{item.t}</div>
          <div style={{ fontSize: 13.5, color: 'var(--mute)', marginTop: 2 }}>{item.d}</div>
        </div>
      </div>
    </div>);

}

window.Benefits = Benefits;