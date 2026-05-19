// Flow — participant / organizer toggle with stepper
function Flow({ accent }) {
  const [side, setSide] = React.useState('participant');

  const participantSteps = [
    { t: 'Нашёл событие — увидел друзей', d: 'Открыл ленту. Сразу видно, кто из своих уже идёт. Это первый фильтр — настоящий.' },
    { t: 'Подкрутил фильтры, посмотрел на карте', d: 'Сегодня вечером, в радиусе 3 км, до 1000 ₽, музыка. Карта показала пять огней — выбрал ближайший.' },
    { t: 'Купил билет — открылся чат', d: 'Один тап, Apple Pay. В этот же миг ты уже в чате события — с организатором и другими гостями.' },
    { t: 'Напоминание за пару часов', d: 'Пуш с маршрутом, погодой и QR-кодом. Не нужно искать что-либо — оно само пришло.' },
    { t: 'Пришёл, показал QR', d: 'Сканер на входе — пиииик. Без очереди, без сверки по списку, без обид.' },
    { t: 'Подписался на организатора', d: 'Понравилось — нажал «следить». Все следующие события — теперь в твоей ленте первыми.' },
  ];

  const organizerSteps = [
    { t: 'Создал событие за 3 минуты', d: 'Название, дата, цена, обложка. Шаблоны для лекций, концертов и закрытых тусовок.' },
    { t: 'Запустил продажи', d: 'Ссылка летит в сторис, на сайт, в QR-код на афише. Один источник правды.' },
    { t: 'Одобрил участников', d: 'Для закрытых событий — модерация по анкете или вручную. Никаких случайных людей.' },
    { t: 'Подтвердил списки', d: 'За день до — финальный список в один тап. Можно скачать, можно оставить в приложении.' },
    { t: 'Впустил по QR', d: 'Сканер у двери, метрики онлайн. Видно, кто опаздывает, кто пришёл, сколько осталось мест.' },
    { t: 'Посмотрел аналитику', d: 'Откуда пришли, что покупают, кто вернётся. Сразу — без выгрузок в Excel.' },
    { t: 'Вывел деньги', d: 'Моментально на карту. Без удержания неделю, без скрытой комиссии.' },
  ];

  const steps = side === 'participant' ? participantSteps : organizerSteps;

  return (
    <section id="flow">
      <div className="wrap">
        <div className="shead reveal">
          <span className="eyebrow">03 — сценарий</span>
          <h2 className="display">
            Один сценарий —<br/>
            <span style={{ color: accent }}>две точки зрения.</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
            <p style={{ margin: 0 }}>От «увидел» до «вернулся» — без потерь смысла на каждом шаге.</p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'JetBrains Mono', fontSize: 12, color: 'var(--mute)',
              textTransform: 'uppercase', letterSpacing: '.08em',
            }}>
              <Icon.Arrow size={14} color="var(--mute)"/>
              <span>смотрим глазами</span>
            </div>
            <div className="toggle toggle-switch" role="tablist" aria-label="Точка зрения">
              <button onClick={() => setSide('participant')} className={side === 'participant' ? 'active' : ''} aria-pressed={side === 'participant'}>
                <span>Участника</span>
              </button>
              <span className="toggle-swap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7h12M7 7l3-3M7 7l3 3M17 17H5M17 17l-3 3M17 17l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <button onClick={() => setSide('organizer')} className={side === 'organizer' ? 'active' : ''} aria-pressed={side === 'organizer'}>
                <span>Организатора</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flow-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Steps list */}
          <div>
            <div style={{ display: 'grid', gap: 14 }}>
              {steps.map((s, i) => (
                <FlowStep key={side + i} idx={i} total={steps.length} step={s} accent={accent} side={side}/>
              ))}
            </div>
          </div>

          {/* Phone preview */}
          <div className="flow-phone-col" style={{ position: 'sticky', top: 100, justifySelf: 'center' }}>
            <div className="phone">
              <div className="phone-notch"/>
              <div className="phone-screen">
                {side === 'participant' ? <ParticipantPhone accent={accent}/> : <OrganizerPhone accent={accent}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
      transition: 'opacity .55s cubic-bezier(.2,.8,.2,1), transform .55s cubic-bezier(.2,.8,.2,1), border-color .2s, box-shadow .25s',
    }}
    onMouseEnter={e => { if (shown) { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.borderColor = accent; } }}
    onMouseLeave={e => { if (shown) { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'var(--line)'; } }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
      }}>
        <div className="display" style={{
          fontSize: 36, color: side === 'participant' ? 'var(--blue)' : accent, lineHeight: 1,
        }}>0{idx+1}</div>
      </div>
      <div>
        <div style={{ fontSize: 21, fontWeight: 600, marginBottom: 6 }}>{step.t}</div>
        <div style={{ color: 'var(--mute)', fontSize: 15.5 }}>{step.d}</div>
      </div>
    </div>
  );
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
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
      />
      {/* SVG UI overlay — vector-crisp UI elements (pins, chips, buttons) */}
      <img
        src="assets/screen-map-overlay.svg"
        alt="Карта событий Я_БУДУ"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'top center', pointerEvents: 'none',
        }}
      />
    </div>
  );
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
          animation: 'screen-scroll-stats 22s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes screen-scroll-stats {
          0%, 12% { transform: translateY(0%); }
          48%, 62% { transform: translateY(calc(-100% + 576px)); }
          92%, 100% { transform: translateY(0%); }
        }
      `}</style>
    </div>
  );
}

window.Flow = Flow;
