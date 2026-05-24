// Monetization — grid + growth arrow (orange/blue only)
function Monetization({ accent }) {
  const BLUE = '#2F33F9';
  const items = [
  { t: 'Таргет-реклама', d: 'Точечная — внутри ленты, для организаторов любого размера.', icon: <Icon.Sparkle size={22} color="white" />, tint: accent },
  { t: 'Спецпроекты с брендами', d: 'Партнёрские события, фестивали, площадки. Брендам — внимание, нам — оборот.', icon: <Icon.Bell size={22} color="white" />, tint: BLUE },
  { t: 'Коллаборации', d: 'С артистами, лофтами, площадками. Эксклюзивные форматы под платформу.', icon: <Icon.Users size={22} color="white" />, tint: BLUE },
  { t: 'Эксклюзивные события', d: 'Только в Я_БУДУ. Закрытые анонсы, ранний доступ, преимущества подписчикам.', icon: <Icon.Ticket size={22} color="white" />, tint: accent }];


  return (
    <section id="money" style={{ position: 'relative', overflow: 'hidden' }}>
      <Decor.Squiggle color={accent} width={220} height={56} strokeWidth={4} dur={10}
      style={{ position: 'absolute', bottom: 120, right: '6%', opacity: 0.55 }} />
      <Decor.Blob color={accent} size={520} x="78%" y="60%" opacity={0.07} dur={26} blur={100} />
      <Decor.Blob color="#2F33F9" size={500} x="-10%" y="20%" opacity={0.07} dur={22} delay={3} blur={90} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="shead reveal">
          <span className="eyebrow">07 — монетизация</span>
          <h2 className="display">
            Четыре потока выручки —<br />
            <span style={{ color: accent }}>и нелинейный рост
</span>
          </h2>
          <p>Каждый поток усиливает остальные. Чем больше людей внутри, тем выше отдача от каждого канала.</p>
        </div>

        <div className="money-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'stretch' }}>
          {/* Left — items */}
          <div className="money-items" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {items.map((it, i) => <div key={i} className="reveal" data-d={i + 1} style={{
              background: 'white', border: '1px solid var(--line)', borderRadius: 20, padding: 24,
              transition: 'transform .25s, box-shadow .25s, border-color .2s',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-4px)';e.currentTarget.style.boxShadow = '0 22px 40px -16px rgba(10,10,30,0.10)';e.currentTarget.style.borderColor = it.tint;}}
            onMouseLeave={(e) => {e.currentTarget.style.transform = '';e.currentTarget.style.boxShadow = '';e.currentTarget.style.borderColor = 'var(--line)';}}>
              
                <div style={{
                width: 44, height: 44, borderRadius: 12, background: it.tint,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16
              }}>{it.icon}</div>
                <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>{it.t}</div>
                <div style={{ color: 'var(--mute)', fontSize: 15 }}>{it.d}</div>
              </div>
            )}
          </div>

          {/* Right — growth chart on blue */}
          <div className="reveal" data-d="5" style={{
            background: BLUE, color: 'white', borderRadius: 24, padding: 32,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            position: 'relative', overflow: 'hidden',
            boxShadow: `0 24px 50px -22px ${BLUE}55`
          }}>
            <div style={{
              position: 'absolute', top: -80, right: -80, width: 240, height: 240, borderRadius: '50%',
              background: accent, opacity: 0.5, filter: 'blur(60px)'
            }} />
            <div style={{ position: 'relative' }}>
              <span className="chip on-blue">прогноз</span>
              <h3 className="display" style={{ fontSize: 28, marginTop: 18, lineHeight: 1.1 }}>Каждое направление растёт по своей кривой

              </h3>
              <p style={{ color: 'rgba(255,255,255,0.78)', marginTop: 12, fontSize: 14 }}>
                Сумма даёт нелинейную динамику — впервые потоки усиливают друг друга, а не конкурируют за один и тот же ресурс.
              </p>
            </div>

            <svg viewBox="0 0 360 200" style={{ width: '100%', marginTop: 24, position: 'relative' }}>
              {[0, 1, 2, 3].map((i) =>
              <line key={i} x1="0" x2="360" y1={50 * i + 10} y2={50 * i + 10} stroke="rgba(255,255,255,0.10)" />
              )}
              <path d="M0 180 C 80 170 120 150 160 130 S 240 50 360 10" fill="none" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
              <polygon points="360,10 340,4 348,20" fill={accent} />
              {[{ x: 60, y: 172 }, { x: 140, y: 140 }, { x: 220, y: 88 }, { x: 300, y: 34 }].map((p, i) =>
              <circle key={i} cx={p.x} cy={p.y} r="5" fill="white" stroke={accent} strokeWidth="2" />
              )}
              <text x="0" y="200" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="JetBrains Mono">2026</text>
              <text x="330" y="200" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="JetBrains Mono">2029</text>
            </svg>
          </div>
        </div>
      </div>
    </section>);

}

window.Monetization = Monetization;