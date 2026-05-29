// FAQ — closes top objections before final CTA
function FAQ({ accent }) {
  const BLUE = '#2F33F9';
  const [open, setOpen] = React.useState(0); // first one open by default

  const faqs = [
  {
    q: 'Сколько стоит для участника?',
    a: 'Приложение бесплатное. Внутри платишь только за билеты — по цене организатора, без накруток сервиса. ',
    tag: 'цена'
  },
  {
    q: 'Какая комиссия для организатора?',
    a: 'Низкая фиксированная комиссия за каждый проданный билет. Точные ставки — в кабинете организатора, видны до публикации события.',
    tag: 'комиссия'
  },
  {
    q: 'Когда приходят деньги от продажи билетов?',
    a: 'Выплаты за купленные билеты после события. Деньги поступают на счет сразу после того, как мероприятие завершится.',
    tag: 'выплаты'
  },
  {
    q: 'Что если событие отменили?',
    a: 'Полный возврат в один тап — деньги возвращаются на ту же карту в течение нескольких минут. Без переписок с поддержкой и заполнения форм.',
    tag: 'возврат'
  },
  {
    q: 'Что с моими данными и билетом, если телефон сел?',
    a: 'Билет привязан к аккаунту, не к устройству. Войди с любого телефона — увидишь все свои билеты и QR-коды.',
    tag: 'безопасность'
  },
  {
    q: 'Где доступно приложение?',
    a: 'iOS и Android — бета-доступ открыт. Веб-версия для организаторов — в работе. Полный релиз — в течение ближайших месяцев.',
    tag: 'доступ'
  }];


  return (
    <section id="faq" style={{ background: 'var(--paper-2)', position: 'relative', overflow: 'hidden' }}>
      <Decor.Squiggle color={BLUE} width={200} height={50} strokeWidth={4} dur={11}
      style={{ position: 'absolute', top: 70, right: '8%', opacity: 0.45 }} />
      <Decor.DotGrid color={accent} cols={5} rows={5} gap={12} dot={4} opacity={0.35}
      style={{ position: 'absolute', bottom: 110, left: '6%' }} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div className="shead reveal" style={{ maxWidth: 880 }}>
          <span className="eyebrow">09 — вопросы</span>
          <h2 className="display">
            Ответы<br />
            <span style={{ color: accent }}>на ваши вопросы</span>
          </h2>
          <p></p>
        </div>

        <div className="faq-list reveal" data-d="1" style={{ maxWidth: 880, margin: '0 auto', display: 'grid', gap: 10 }}>
          {faqs.map((f, i) =>
          <FAQItem key={i} idx={i} open={open === i} onOpen={() => setOpen(open === i ? -1 : i)} accent={accent} {...f} />
          )}
        </div>
      </div>
    </section>);

}

function FAQItem({ idx, q, a, tag, open, onOpen, accent }) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 18,
      padding: '4px 4px 4px 4px',
      transition: 'border-color .25s, box-shadow .25s',
      borderColor: open ? accent : 'var(--line)',
      boxShadow: open ? `0 18px 38px -22px ${accent}55` : 'none'
    }}>
      <button
        onClick={onOpen}
        aria-expanded={open}
        style={{
          width: '100%', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer',
          padding: '20px 24px',
          display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 18,
          color: 'var(--ink)', font: 'inherit'
        }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            minWidth: 28, height: 22, padding: '0 8px', borderRadius: 6,
            fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase',
            background: open ? accent : 'rgba(10,10,14,0.06)', color: open ? 'white' : 'var(--mute)',
            transition: 'background .25s, color .25s'
          }}>{tag}</span>
          <span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.3 }}>{q}</span>
        </div>
        <span style={{
          width: 32, height: 32, borderRadius: 10,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: open ? accent : 'rgba(10,10,14,0.04)', color: open ? 'white' : 'var(--ink)',
          transition: 'transform .3s cubic-bezier(.2,.8,.2,1), background .25s, color .25s',
          transform: open ? 'rotate(45deg)' : 'none',
          flexShrink: 0
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div style={{
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows .35s cubic-bezier(.2,.8,.2,1)'
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ padding: '0 24px 22px 24px', color: 'var(--mute)', fontSize: 15.5, lineHeight: 1.55 }}>
            {a}
          </div>
        </div>
      </div>
    </div>);

}

window.FAQ = FAQ;