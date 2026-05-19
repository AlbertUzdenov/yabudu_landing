// Solution section — three pillars on white
function Solution({ accent }) {
  const BLUE = '#2F33F9';
  const items = [
    { t: 'Афиша на карте', d: 'Все события вокруг тебя — в одной ленте и на одной карте. С фильтрами, подборками и ИИ-рекомендациями.', icon: <Icon.Map size={28} color="white"/>, tint: accent, dark: true },
    { t: 'Друзья и общение', d: 'Видишь, куда идут твои. Купил билет — открылся чат события. Незнакомцы перестают быть незнакомцами до того, как ты пришёл.', icon: <Icon.Chat size={28} color="white"/>, tint: BLUE, dark: true },
    { t: 'Билеты и организация', d: 'QR на входе, моментальная сверка, мгновенные выплаты организаторам. Без бумажек, без посредников, с честной комиссией.', icon: <Icon.Ticket size={28} color="white"/>, tint: 'var(--ink)', dark: false },
  ];
  return (
    <section id="solution" style={{ background: 'var(--paper-2)', position: 'relative', overflow: 'hidden' }}>
      <Decor.Squiggle color={accent} width={220} height={56} strokeWidth={4} dur={11}
        style={{ position: 'absolute', top: 100, right: '7%', opacity: 0.6 }}/>
      <Decor.Blob color={accent} size={560} x="78%" y="30%" opacity={0.07} dur={26} blur={100}/>
      <Decor.Blob color="#2F33F9" size={500} x="-8%" y="60%" opacity={0.07} dur={22} delay={3} blur={90}/>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="shead reveal">
          <span className="eyebrow">02 — решение</span>
          <h2 className="display">
            Всё в одном месте.<br/>
            <span style={{ color: accent }}>Без вкладок и танцев с бубном.</span>
          </h2>
          <p>Три слоя, которые работают вместе: где, с кем и как попасть. Один экран — одно решение.</p>
        </div>

        <div className="sol-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((it, i) => (
            <div key={i} className="reveal" data-d={i+1}>
              <SolutionCard {...it}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ t, d, icon, tint, dark }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', borderRadius: 24, padding: 32,
        background: tint, color: 'white',
        transition: 'transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .3s',
        transform: hov ? 'translateY(-6px)' : 'none',
        boxShadow: hov ? `0 28px 56px -16px ${tint}66` : '0 10px 24px -12px rgba(10,10,30,0.15)',
        overflow: 'hidden', minHeight: 380,
      }}
    >
      {/* hover glow */}
      <div style={{
        position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%',
        background: 'white', opacity: hov ? 0.12 : 0.06, transition: 'opacity .35s, transform .4s',
        transform: hov ? 'scale(1.2)' : 'none',
      }}/>
      <div style={{ position: 'relative' }}>
        <div style={{
          width: 64, height: 64, borderRadius: 16,
          background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.24)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 28, backdropFilter: 'blur(8px)',
          transition: 'transform .4s', transform: hov ? 'rotate(-6deg)' : 'none',
        }}>{icon}</div>
        <div className="display" style={{ fontSize: 32, marginBottom: 16, lineHeight: 1.05 }}>{t}</div>
        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16 }}>{d}</div>
      </div>
    </div>
  );
}

window.Solution = Solution;
