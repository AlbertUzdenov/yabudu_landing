// Footer with two CTAs (light)
function Footer({ accent }) {
  const BLUE = '#2F33F9';
  return (
    <footer>
      <div className="wrap">
        {/* Big CTA strip */}
        <div className="footer-cta-wrap reveal" style={{
          padding: '60px 56px', borderRadius: 32,
          background: accent, color: 'white',
          position: 'relative', overflow: 'hidden', marginBottom: 64,
          boxShadow: `0 30px 60px -24px ${accent}66`,
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.22,
            backgroundImage: 'radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}/>
          <div style={{
            position: 'absolute', top: -120, right: -100, width: 380, height: 380, borderRadius: '50%',
            background: BLUE, opacity: 0.3, filter: 'blur(60px)',
          }}/>
          <Decor.Burst color="rgba(255,255,255,0.5)" size={120} dur={18}
            style={{ position: 'absolute', top: -30, right: 80 }}/>
          <Decor.Squiggle color="rgba(255,255,255,0.35)" width={220} height={50} strokeWidth={5} dur={9}
            style={{ position: 'absolute', bottom: 30, left: 30 }}/>
          <div className="footer-cta-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'center' }}>
            <div>
              <h3 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)', color: 'white', lineHeight: 1 }}>
                Зарабатывать на<br/>мероприятиях<br/>может каждый
              </h3>
              <p style={{ fontSize: 19, color: 'rgba(255,255,255,0.88)', marginTop: 20, maxWidth: 480 }}>
                Опубликуй первое событие за 3 минуты. Без модерации фриланс-биржи и пакета документов.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a className="btn" style={{ background: 'white', color: 'var(--ink)', justifyContent: 'space-between', padding: '22px 28px', fontSize: 18 }}>
                <span>Скачать приложение</span>
                <Icon.Arrow size={20} color="var(--ink)"/>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-cols" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40 }}>
          <div>
            <Logo height={56}/>
            <p style={{ marginTop: 20, color: 'var(--mute)', maxWidth: 360, fontSize: 14 }}>
              Объединяем город, людей и события. iOS, Android и веб — одно приложение, один аккаунт.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
              {[
                { l: 'TG', c: BLUE },
                { l: 'VK', c: BLUE },
                { l: 'YT', c: accent },
                { l: 'IG', c: accent },
                { l: 'X',  c: BLUE },
              ].map((s, i) => (
                <a key={s.l} href="#" style={{
                  width: 40, height: 40, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'white', border: '1px solid var(--line)', color: 'var(--ink)',
                  fontSize: 12, fontWeight: 700, fontFamily: 'JetBrains Mono',
                  transition: 'background .2s, color .2s, transform .2s, border-color .2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = s.c;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = s.c;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = 'var(--ink)';
                  e.currentTarget.style.borderColor = 'var(--line)';
                  e.currentTarget.style.transform = '';
                }}
                >{s.l}</a>
              ))}
            </div>
          </div>

          <FooterCol title="Продукт" links={['Возможности', 'Для организаторов', 'Цены', 'API']}/>
          <FooterCol title="Компания" links={['О нас', 'Блог', 'Карьера', 'Пресса']}/>
          <FooterCol title="Помощь" links={['FAQ', 'Поддержка', 'Условия', 'Конфиденциальность']}/>
        </div>

        <div style={{
          paddingTop: 28, borderTop: '1px solid var(--line)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          fontFamily: 'JetBrains Mono', fontSize: 12, color: 'var(--mute)',
          textTransform: 'uppercase', letterSpacing: '.06em',
        }}>
          <div>© 2026 Я_БУДУ · все права защищены</div>
          <div>Сделано в России · v1.0.0</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 12, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>{title}</div>
      <div style={{ display: 'grid', gap: 10 }}>
        {links.map(l => <a key={l} href="#">{l}</a>)}
      </div>
    </div>
  );
}

window.Footer = Footer;
