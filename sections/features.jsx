// Key features — 5 prime features in a bento-style grid (light)
function Features({ accent }) {
  const BLUE = '#2F33F9';
  return (
    <section id="features" style={{ position: 'relative', overflow: 'hidden' }}>
      <Decor.Burst color={BLUE} size={56} dur={16}
      style={{ position: 'absolute', top: 90, left: '8%', opacity: 0.7 }} />
      <Decor.Blob color={accent} size={520} x="-10%" y="55%" opacity={0.06} dur={28} blur={100} />
      <Decor.Blob color={BLUE} size={520} x="80%" y="10%" opacity={0.06} dur={22} delay={4} blur={100} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="shead reveal">
          <span className="eyebrow">04 — возможности</span>
          <h2 className="display">
            Пять прайм-фич<br />
            <span style={{ color: accent }}>Каждая</span> закрывает <span style={{ color: BLUE }}>один большой запрос</span>
          </h2>
          <p>Всё работает на одном движке, авторизуешься один раз. Никаких отдельных приложений-сателлитов.</p>
        </div>

        <div className="feat-bento" style={{
          display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: 'minmax(220px, auto)',
          gap: 18
        }}>
          {/* Search & rec — large, blue */}
          <FeatureCard span={3} accent={accent} variant="blue"
          title="Поиск и рекомендации"
          sub="Карта, фильтры, подборки. ИИ подсказывает, что тебе зайдёт — на основе того, куда уже ходили твои."
          icon={<Icon.Map size={28} color="white" />} />

          {/* Create events — large, orange */}
          <FeatureCard span={3} accent={accent} variant="orange"
          title="Создание событий"
          sub="Для всех — от тысячного фестиваля до квартирника. Шаблоны, закрытый режим, модерация анкет."
          icon={<Icon.Plus size={28} color="white" />} />

          {/* Tickets / QR — medium, light */}
          <FeatureCard span={2} accent={accent} variant="light"
          title="Билеты и вход по QR"
          sub="Низкая комиссия, моментальные выплаты, сверка на входе за полсекунды."
          icon={<Icon.QR size={28} color="white" />}
          iconBg={BLUE} />
          

          {/* Community — medium, light */}
          <FeatureCard span={2} accent={accent} variant="light"
          title="Комьюнити"
          sub="Активность друзей, чаты события, подписки на организаторов и места."
          icon={<Icon.Users size={28} color="white" />}
          iconBg={accent} />
          

          {/* Analytics — medium, light */}
          <FeatureCard span={2} accent={accent} variant="light"
          title="Аналитика и промо"
          sub="Метрики по каждому событию, инструменты продвижения, скоро — таргет-реклама."
          icon={<Icon.Chart size={28} color="white" />}
          iconBg={BLUE} />
        </div>
      </div>
    </section>);

}

function FeatureCard({ span = 2, title, sub, icon, variant = 'light', iconBg, accent, children }) {
  const BLUE = '#2F33F9';
  const [hov, setHov] = React.useState(false);
  const isColored = variant === 'orange' || variant === 'blue';
  const bg = variant === 'orange' ? accent : variant === 'blue' ? BLUE : 'white';
  const fg = isColored ? 'white' : 'var(--ink)';
  const subColor = isColored ? 'rgba(255,255,255,0.85)' : 'var(--mute)';
  const tileBg = iconBg || (variant === 'orange' ? 'rgba(255,255,255,0.18)' : variant === 'blue' ? 'rgba(255,255,255,0.18)' : accent);

  return (
    <div
      className={`reveal feat-card feat-span-${span}`} data-d={span === 3 ? 1 : 2}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: `span ${span}`,
        position: 'relative', borderRadius: 22, padding: 28,
        background: bg, color: fg,
        border: isColored ? '1px solid transparent' : '1px solid var(--line)',
        overflow: 'hidden',
        transition: 'transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s, border-color .3s',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ?
        isColored ? `0 28px 56px -18px ${bg}66` : '0 22px 42px -18px rgba(10,10,30,0.12)' :
        isColored ? '0 10px 22px -14px rgba(10,10,30,0.18)' : 'none'
      }}>
      
      <div style={{
        position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%',
        background: isColored ? 'white' : iconBg || accent,
        opacity: hov ? isColored ? 0.12 : 0.08 : isColored ? 0.06 : 0.04,
        filter: 'blur(40px)', transition: 'opacity .4s'
      }} />
      <div style={{ position: 'relative' }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: tileBg,
          border: isColored ? '1px solid rgba(255,255,255,0.22)' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
          transition: 'transform .35s', transform: hov ? 'rotate(-4deg) scale(1.06)' : 'none'
        }}>{icon}</div>
        <div className="display" style={{ fontSize: 24, marginBottom: 8 }}>{title}</div>
        <div style={{ color: subColor, fontSize: 15, maxWidth: 460 }}>{sub}</div>
        {children}
      </div>
    </div>);

}

window.Features = Features;