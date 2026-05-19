// Problem section — modern bento layout with toggle, quote-style cards
function Problem({ accent }) {
  const BLUE = '#2F33F9';
  const [side, setSide] = React.useState('participant');

  const participant = [
  { quote: 'Куда сходить?', tag: 'Хаос', note: 'Десять приложений и пабликов — единого ответа нет.', icon: <Icon.Map size={20} color="currentColor" /> },
  { quote: 'А кто там будет?', tag: 'Никого', note: 'Лента-каша. Не видно, кто из своих идёт.', icon: <Icon.Users size={20} color="currentColor" /> },
  { quote: 'Где мой билет?', tag: 'Потеря', note: 'PDF в почте, скрин в галерее, ссылка в чате.', icon: <Icon.Ticket size={20} color="currentColor" /> },
  { quote: 'Один?..', tag: 'Соло', note: 'Друзья заняты, а одному — неловко.', icon: <Icon.Heart size={20} color="currentColor" /> }];


  const organizer = [
  { quote: 'Где моя аудитория?', tag: 'Промах', note: 'Реклама стреляет в воздух, не доходит до своих.', icon: <Icon.Sparkle size={20} color="currentColor" /> },
  { quote: 'Сколько вернётся?', tag: 'Слепота', note: 'Нет аналитики — кто пришёл, что покупает, откуда узнал.', icon: <Icon.Chart size={20} color="currentColor" /> },
  { quote: 'Очередь на входе', tag: 'Стыд', note: 'Сверка по списку, потерянные брони, обиженные гости.', icon: <Icon.QR size={20} color="currentColor" /> },
  { quote: 'А когда деньги?', tag: 'Хвост', note: 'Большие комиссии, выплата через неделю, скрытые условия.', icon: <Icon.Money size={20} color="currentColor" /> }];


  const items = side === 'participant' ? participant : organizer;
  const sideColor = side === 'participant' ? BLUE : accent;
  const altColor = side === 'participant' ? accent : BLUE;

  // bento variants per position
  const variants = ['ink', 'orange', 'blue', 'paper'];

  return (
    <section id="problem" style={{ position: 'relative', overflow: 'hidden' }}>
      <Decor.Burst color={accent} size={64} dur={14}
      style={{ position: 'absolute', top: 80, right: '6%', opacity: 0.7 }} />
      <Decor.Blob color={accent} size={420} x="-8%" y="40%" opacity={0.08} dur={24} blur={80} />
      <Decor.Blob color="#2F33F9" size={500} x="70%" y="50%" opacity={0.08} dur={28} delay={4} blur={90} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div className="shead reveal">
          <span className="eyebrow">01 — проблема</span>
          <h2 className="display" style={{ color: "rgb(47, 51, 248)" }}>
            События есть.<br />
            <span style={{ color: accent }}>А ощущения — что-то не то.</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 12, flexWrap: 'wrap' }}>
            <p style={{ margin: 0 }}>Спросили у обеих сторон — где болит. Послушайте, чем они живут.</p>
            <div className="toggle">
              <button onClick={() => setSide('participant')} className={side === 'participant' ? 'active' : ''}>
                Участник
              </button>
              <button onClick={() => setSide('organizer')} className={side === 'organizer' ? 'active' : ''}>
                Организатор
              </button>
            </div>
          </div>
        </div>

        {/* Bento grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20,
          gridAutoRows: 'minmax(220px, auto)'
        }}>
          {items.map((it, i) =>
          <ProblemCard
            key={side + i}
            idx={i}
            variant={variants[i]}
            accent={accent}
            sideColor={sideColor}
            altColor={altColor}
            {...it} />

          )}
        </div>

        <div className="reveal" data-d="3" style={{
          marginTop: 32, padding: '28px 36px', borderRadius: 24,
          background: 'var(--ink)', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap'
        }}>
          <div style={{ fontSize: 20, fontWeight: 500, maxWidth: 760, lineHeight: 1.4 }}>
            Обе стороны страдают <span style={{ color: accent, fontWeight: 700 }}>одной и той же проблемой</span> — между человеком и впечатлением слишком много шагов.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono', fontSize: 12, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: accent }} />
            всё связано
          </div>
        </div>
      </div>
    </section>);

}

function ProblemCard({ idx, variant, accent, sideColor, altColor, quote, tag, note, icon }) {
  const [hov, setHov] = React.useState(false);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(() => setShown(true), 80 + idx * 90);
    return () => clearTimeout(id);
  }, [idx]);

  // Color scheme per variant
  const v = {
    ink: { bg: '#0A0A0E', fg: 'white', sub: 'rgba(255,255,255,0.6)', tag: 'rgba(255,255,255,0.14)' },
    orange: { bg: accent, fg: 'white', sub: 'rgba(255,255,255,0.85)', tag: 'rgba(255,255,255,0.18)' },
    blue: { bg: '#2F33F9', fg: 'white', sub: 'rgba(255,255,255,0.85)', tag: 'rgba(255,255,255,0.18)' },
    paper: { bg: 'white', fg: 'var(--ink)', sub: 'var(--mute)', tag: 'rgba(10,10,14,0.06)' }
  }[variant];

  const isLight = variant === 'paper';

  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', borderRadius: 24, padding: 32,
        background: v.bg, color: v.fg,
        border: isLight ? '1px solid var(--line)' : '1px solid transparent',
        overflow: 'hidden', minHeight: 220,
        opacity: shown ? 1 : 0,
        transform: shown ? hov ? 'translateY(-6px)' : 'translateY(0)' : 'translateY(18px)',
        transition: 'opacity .55s cubic-bezier(.2,.8,.2,1), transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .3s',
        boxShadow: hov ? isLight ? '0 24px 48px -16px rgba(10,10,30,0.12)' : `0 28px 56px -18px ${v.bg}66` : 'none',
        cursor: 'default',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
      }}>
      
      {/* Big watermark number */}
      <div className="display" aria-hidden="true" style={{
        position: 'absolute', right: -8, bottom: -22,
        fontSize: 200, lineHeight: 0.8, fontWeight: 700,
        color: isLight ? 'rgba(10,10,14,0.04)' : 'rgba(255,255,255,0.08)',
        pointerEvents: 'none', userSelect: 'none'
      }}>
        0{idx + 1}
      </div>

      {/* Hover glow */}
      <div style={{
        position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%',
        background: isLight ? accent : 'white',
        opacity: hov ? isLight ? 0.10 : 0.10 : 0,
        filter: 'blur(40px)', transition: 'opacity .4s'
      }} />

      {/* Top row: tag + icon */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 12px', borderRadius: 999,
          background: v.tag, color: v.fg,
          fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: variant === 'paper' ? sideColor : 'currentColor', opacity: variant === 'paper' ? 1 : 0.7 }} />
          {tag}
        </span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 40, height: 40, borderRadius: 12,
          background: v.tag, color: v.fg,
          transition: 'transform .35s cubic-bezier(.2,.8,.2,1)',
          transform: hov ? 'rotate(-6deg) scale(1.08)' : 'none'
        }}>
          {icon}
        </span>
      </div>

      {/* Quote */}
      <div style={{ position: 'relative', marginTop: 24 }}>
        <div className="display" style={{ fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: 1.05, fontWeight: 700 }}>
          «{quote}»
        </div>
        <div style={{ marginTop: 12, fontSize: 15, color: v.sub, maxWidth: 360 }}>{note}</div>
      </div>
    </div>);

}

window.Problem = Problem;