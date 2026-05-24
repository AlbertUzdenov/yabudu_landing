// Community section — floating orange/blue circles on white
function Community({ accent }) {
  const BLUE = '#2F33F9';
  const blobs = React.useMemo(() => {
    const rng = (n) => {let s = n;return () => {s = (s * 9301 + 49297) % 233280;return s / 233280;};};
    const r = rng(42);
    const colors = [accent, BLUE];
    const labels = ['А', 'М', 'К', 'И', 'Л', 'Д', 'Н', 'С', 'П', 'Р', 'В', 'О', 'Б', 'Г', 'Т', 'У'];
    const arr = [];
    for (let i = 0; i < 22; i++) {
      arr.push({
        x: r() * 100, y: r() * 100,
        size: 40 + r() * 64,
        color: colors[i % 2],
        label: labels[Math.floor(r() * labels.length)],
        delay: r() * 4, dur: 4 + r() * 4
      });
    }
    return arr;
  }, [accent]);

  const broken = [
  { t: 'Переизбыток контента в соцсетях', d: 'Алгоритм скрывает, друзья теряются в ленте.' },
  { t: 'Кот в мешке', d: 'Купил билет — не понял, что там будет и с кем.' },
  { t: 'Афиши без друзей', d: 'Сколько раз ты не пошёл, потому что «не с кем»?' }];


  return (
    <section id="community" style={{
      background: 'var(--paper)', position: 'relative', overflow: 'hidden'
    }}>
      {/* Floating avatars background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.85 }}>
        {blobs.map((b, i) =>
        <div key={i} style={{
          position: 'absolute', left: b.x + '%', top: b.y + '%',
          width: b.size, height: b.size, borderRadius: '50%',
          background: b.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontWeight: 700, fontSize: b.size * 0.35,
          fontFamily: 'Unbounded',
          animation: `float ${b.dur}s ease-in-out infinite`,
          animationDelay: `${b.delay}s`,
          boxShadow: `0 14px 30px -10px ${b.color}55`
        }}>{b.label}</div>
        )}
        {/* center vignette so text reads */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(60% 55% at 50% 50%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.4) 65%, transparent 100%)'
        }} />
      </div>

      <div className="wrap" style={{ position: 'relative' }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto 64px' }}>
          <span className="eyebrow">08 — комьюнити</span>
          <h2 className="display" style={{ fontSize: 'clamp(54px, 7vw, 110px)', marginTop: 24, lineHeight: 0.98 }}>
            Найти своё —<br />
            <span style={{ color: accent }}>просто</span>
          </h2>
          <p style={{ fontSize: 22, color: 'var(--mute)', marginTop: 28, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
            Мы не строим ещё один билетный сервис. Мы собираем комьюнити вокруг живых событий — и чиним то, что давно сломано.
          </p>
        </div>

        <div className="reveal community-grid" data-d="2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, maxWidth: 1100, margin: '0 auto' }}>
          {broken.map((b, i) =>
          <div key={i} style={{
            padding: 28, borderRadius: 22,
            background: 'white',
            border: '1px solid var(--line)',
            boxShadow: '0 12px 30px -16px rgba(10,10,30,0.10)'
          }}>
              <div className="mono" style={{ color: i === 1 ? '#2F33F9' : accent, marginBottom: 14, fontSize: "20px" }}>{`0${i + 1} → решено`}</div>
              <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{b.t}</div>
              <div style={{ color: 'var(--mute)', fontSize: 15 }}>{b.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.Community = Community;