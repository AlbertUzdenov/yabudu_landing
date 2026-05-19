// Market — animated counters
function useCounter(target, duration = 2000, run = true) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    let start;
    let rafId;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, run]);
  return val;
}

function Market({ accent }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const tickets = useCounter(21, 1800, seen);
  const market = useCounter(28.7, 2200, seen);
  const growth = useCounter(36, 1600, seen);

  return (
    <section id="market" ref={ref} style={{ background: '#F0EEE6', position: 'relative', overflow: 'hidden' }}>
      <Decor.Burst color={accent} size={80} dur={14}
        style={{ position: 'absolute', top: 70, right: '6%', opacity: 0.85 }}/>
      <Decor.Blob color={accent} size={500} x="-8%" y="65%" opacity={0.08} dur={26} blur={100}/>
      <Decor.Blob color="#2F33F9" size={520} x="75%" y="-10%" opacity={0.08} dur={24} delay={4} blur={100}/>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="shead reveal">
          <span className="eyebrow">06 — рынок</span>
          <h2 className="display">
            Жизнь — в моменте.<br/>
            <span style={{ color: accent }}>Люди тратят на впечатления.</span>
          </h2>
          <p>Категория растёт второй год подряд, и каждый игрок добавляет ей оборотов. Мы — следующий.</p>
        </div>

        <div className="market-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          <StatCard reveal="1"
            value={`${tickets.toFixed(1)} млн`}
            label="билетов продано Яндекс Афишей за год"
            source="по данным РБК, 2024"
            tint="var(--blue)"
          />
          <StatCard reveal="2"
            value={`${market.toFixed(1)} млрд ₽`}
            label="объём российского рынка билетов на события"
            source="данные Минкульта"
            tint={accent}
            highlight
          />
          <StatCard reveal="3"
            value={`+${growth.toFixed(0)}%`}
            label="среднегодовой рост за последние 3 года"
            source="аналитика отрасли"
            tint="var(--blue)"
          />
        </div>

        <div className="reveal" data-d="4" style={{
          marginTop: 28, padding: '28px 32px', borderRadius: 22, background: 'white',
          border: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 24,
          flexWrap: 'wrap', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14, background: 'var(--blue)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon.Trend size={26} color="white"/>
            </div>
            <div>
              <div style={{ fontSize: 13, fontFamily: 'JetBrains Mono', color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.08em' }}>тренд</div>
              <div style={{ fontSize: 20, fontWeight: 600, marginTop: 2 }}>VK запустил продажу билетов. Yandex развивает Афишу. Категория получила топливо.</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--mute)' }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#2F33F9' }}/>
            окно возможностей открыто
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, source, tint, highlight, reveal }) {
  return (
    <div className="reveal" data-d={reveal} style={{
      padding: 36, borderRadius: 24,
      background: highlight ? tint : 'white',
      color: highlight ? 'white' : 'var(--ink)',
      border: highlight ? '1px solid transparent' : '1px solid var(--line)',
      position: 'relative', overflow: 'hidden',
      boxShadow: highlight ? `0 24px 60px -22px ${tint}66` : 'none',
    }}>
      {highlight && (
        <div style={{
          position: 'absolute', inset: 0, background: `radial-gradient(80% 60% at 0% 0%, rgba(255,255,255,0.18), transparent)`,
        }}/>
      )}
      <div style={{ position: 'relative' }}>
        <div className="display" style={{ fontSize: 64, color: highlight ? 'white' : tint, lineHeight: 1 }}>{value}</div>
        <div style={{ marginTop: 16, fontSize: 16, maxWidth: 280, opacity: highlight ? 0.9 : 1 }}>{label}</div>
        <div style={{ marginTop: 14, fontSize: 12, fontFamily: 'JetBrains Mono', color: highlight ? 'rgba(255,255,255,0.7)' : 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
          {source}
        </div>
      </div>
    </div>
  );
}

window.Market = Market;
