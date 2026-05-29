// Flow — participant / organizer toggle with stepper
function Flow({ accent }) {
  const [side, setSide] = React.useState('participant');
  const [touched, setTouched] = React.useState(false);
  const pick = (s) => { setSide(s); setTouched(true); };

  const participantSteps = [
  { t: 'Нашёл событие — увидел друзей', d: 'Открыл ленту. Сразу видно, кто из своих уже идёт. ' },
  { t: 'Подкрутил фильтры, посмотрел на карте', d: 'Сегодня вечером, в радиусе 3 км, до 1000 ₽, музыка. Карта показала пять событий — выбрал ближайший.' },
  { t: 'Купил билет — открылся чат', d: 'Покупаешь билет и ты уже в чате события с организатором и другими гостями.' },
  { t: 'Напоминание за пару часов', d: 'Не нужно искать билеты в почте или скрин в галерее телефона.' },
  { t: 'Пришёл, показал QR', d: 'Сканируй QR на билете и проходи без проблем.' },
  { t: 'Подписался на организатора', d: 'Понравилось — подписался. Теперь обо всех новых событиях ты узнаешь первым.' }];


  const organizerSteps = [
  { t: 'Создал событие за 3 минуты', d: 'Расскажи о своем событии или оформи его по шаблону.' },
  { t: 'Запустил продажи', d: 'Карточка события публикуется на сайте и добавляется в тематические рекомендации. Алгоритмы показывают ее нужной аудитории.' },
  { t: 'Одобрил участников', d: 'Для закрытых событий — модерация по фильтрам или вручную.' },
  { t: 'Поделился деталями', d: 'Расскажите про дресс-код или другие особенности мероприятия в чате события.' },
  { t: 'Впустил по QR', d: 'Сканируйте билеты прямо в приложении и следите за статистикой в режиме онлайн.' },
  { t: 'Посмотрел аналитику', d: 'Оцените успешность события, посмотрев статистику по аудитории.' },
  { t: 'Вывел деньги', d: 'После завершения мероприятия мы моментально переведем вам деньги за купленные билеты.' }];


  const steps = side === 'participant' ? participantSteps : organizerSteps;

  return (
    <section id="flow">
      <div className="wrap">
        <div className="shead reveal">
          <span className="eyebrow">03 — сценарий</span>
          <h2 className="display">
            Один сценарий —<br />
            <span style={{ color: accent }}>две точки зрения</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
            <p style={{ margin: 0 }}></p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'JetBrains Mono', fontSize: 12, color: 'var(--mute)',
              textTransform: 'uppercase', letterSpacing: '.08em'
            }}>
              <Icon.Arrow size={14} color="var(--mute)" />
              <span>смотрим глазами</span>
            </div>
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <div className="toggle toggle-switch" role="tablist" aria-label="Точка зрения">
              <button onClick={() => pick('participant')} className={side === 'participant' ? 'active' : ''} aria-pressed={side === 'participant'}>
                <span>Участника</span>
              </button>
              <span className="toggle-swap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7h12M7 7l3-3M7 7l3 3M17 17H5M17 17l-3 3M17 17l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <button onClick={() => pick('organizer')} className={side === 'organizer' ? 'active' : ''} aria-pressed={side === 'organizer'}>
                <span>Организатора</span>
              </button>
            </div>
            {!touched && <Decor.ToggleHint color={accent} />}
            </div>
          </div>
        </div>

        <div className="flow-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Steps list */}
          <div>
            <div style={{ display: 'grid', gap: 14 }}>
              {steps.map((s, i) =>
              <FlowStep key={side + i} idx={i} total={steps.length} step={s} accent={accent} side={side} />
              )}
            </div>
          </div>

          {/* Phone preview */}
          <div className="flow-phone-col" style={{ position: 'sticky', top: 100, justifySelf: 'center' }}>
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                {side === 'participant' ? <ParticipantPhone accent={accent} /> : <OrganizerPhone accent={accent} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function FlowStep({ idx, total, step, accent, side }) {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    setShown(false);
    const id = setTimeout(() => setShown(true), 60 + idx * 70);
    return () => clearTimeout(id);
  }, [side, idx]);

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, padding: '20px 24px',
      background: 'white', border: '1px solid var(--line)', borderRadius: 18,
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(14px)',
      transition: 'opacity .55s cubic-bezier(.2,.8,.2,1), transform .55s cubic-bezier(.2,.8,.2,1), border-color .2s, box-shadow .25s'
    }}
    onMouseEnter={(e) => {if (shown) {e.currentTarget.style.transform = 'translateX(6px)';e.currentTarget.style.borderColor = accent;}}}
    onMouseLeave={(e) => {if (shown) {e.currentTarget.style.transform = '';e.currentTarget.style.borderColor = 'var(--line)';}}}>
      
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
      }}>
        <div className="display" style={{
          fontSize: 36, color: side === 'participant' ? 'var(--blue)' : accent, lineHeight: 1
        }}>0{idx + 1}</div>
      </div>
      <div>
        <div style={{ fontSize: 21, fontWeight: 600, marginBottom: 6 }}>{step.t}</div>
        <div style={{ color: 'var(--mute)', fontSize: 15.5 }}>{step.d}</div>
      </div>
    </div>);

}

// Phone mocks
function ParticipantPhone({ accent }) {
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden', background: 'white' }}>
      {/* Real map tiles underneath */}
      <img
        src="assets/screen-map.jpg"
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
      
      {/* SVG UI overlay — vector-crisp UI elements (pins, chips, buttons) */}
      <img
        src="assets/screen-map-overlay.svg"
        alt="Карта событий Я_БУДУ"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'top center', pointerEvents: 'none'
        }} />
      
    </div>);

}

function OrganizerPhone({ accent }) {
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden', background: 'white' }}>
      <img
        src="assets/screen-stats.svg"
        alt="Статистика события Я_БУДУ"
        style={{
          display: 'block', width: '100%', height: 'auto',
          position: 'absolute', left: 0, top: 0,
          animation: 'screen-scroll-stats 22s ease-in-out infinite'
        }} />
      
      <style>{`
        @keyframes screen-scroll-stats {
          0%, 12% { transform: translateY(0%); }
          48%, 62% { transform: translateY(calc(-100% + 576px)); }
          92%, 100% { transform: translateY(0%); }
        }
      `}</style>
    </div>);

}

window.Flow = Flow;