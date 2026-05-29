// Community section — floating orange/blue circles on white
function Community({ accent }) {
  const BLUE = '#2F33F9';
  const blobs = React.useMemo(() => {
    const rng = (n) => {let s = n;return () => {s = (s * 9301 + 49297) % 233280;return s / 233280;};};
    const r = rng(42);
    const colors = [accent, BLUE];
    const labels = ['А', 'М', 'К', 'И', 'Л', 'Д', 'Н', 'С', 'П', 'Р', 'В', 'О', 'Б', 'Г', 'Т', 'У'];
    const arr = [];
    for (let i = 0; i < 14; i++) {
      arr.push({
        x: r() * 100, y: r() * 100,
        size: 64 + r() * 56,
        color: colors[i % 2],
        delay: r() * 4, dur: 4 + r() * 4
      });
    }
    return arr;
  }, [accent]);

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [sent, setSent] = React.useState(false);

  // Phone input mask → +7 (XXX) XXX-XX-XX
  const formatPhone = (raw) => {
    let d = raw.replace(/\D/g, '');
    // normalize leading country code (8 or 7) to 7
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d;
    d = d.slice(0, 11); // 7 + 10 digits
    const r = d.slice(1); // the 10 national digits
    let out = '+7';
    if (r.length > 0) out += ' (' + r.slice(0, 3);
    if (r.length >= 3) out += ')';
    if (r.length > 3) out += ' ' + r.slice(3, 6);
    if (r.length > 6) out += '-' + r.slice(6, 8);
    if (r.length > 8) out += '-' + r.slice(8, 10);
    return out;
  };

  const onPhoneChange = (e) => {
    const val = e.target.value;
    // allow clearing the field entirely
    if (val.replace(/\D/g, '') === '' && val.length < 3) { setPhone(''); return; }
    setPhone(formatPhone(val));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length < 11) return;
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '15px 18px', borderRadius: 14,
    border: '1.5px solid var(--line)', background: 'var(--paper-2)',
    font: 'inherit', fontSize: 16, color: 'var(--ink)',
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color .2s, box-shadow .2s'
  };

  return (
    <section id="community" style={{
      background: 'transparent', position: 'relative', overflow: 'hidden'
    }}>
      {/* Floating avatars background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.85 }}>
        {blobs.map((b, i) =>
        <div key={i} style={{
          position: 'absolute', left: b.x + '%', top: b.y + '%',
          width: b.size, height: b.size, borderRadius: '50%',
          background: b.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
          animation: `float ${b.dur}s ease-in-out infinite`,
          animationDelay: `${b.delay}s`,
          boxShadow: `0 14px 30px -10px ${b.color}55`
        }}>
          <svg width="46%" viewBox="0 0 56 44" fill="none" aria-hidden="true" style={{ display: 'block' }}>
            <path d="M23.342 15.286C33.945 15.844 36.092 35.597 36.649 43.292H56C54.694 35.812 51.623 28.683 47.778 22.159C46.04 19.21 44.123 16.363 42.038 13.644C37.769 8.07799 32.471 3.54303 25.679 1.33503C25.554 1.29403 25.429 1.25501 25.303 1.21601C22.365 0.302007 19.25 -0.211974 16.168 0.0850257C12.059 0.482026 8.145 2.45602 5.759 5.86402C5.333 6.47302 4.959 7.12102 4.66 7.80402C-1.896 24.998 15.638 31.043 18.008 31.75C19.904 32.315 19.798 32.665 19.509 32.77C14.643 33.336 5.95101 29.814 2.21201 27.981L0 39.679C8.074 43.908 17.466 44.305 23.196 43.859C25.966 43.644 28.756 42.919 30.92 41.185C37.239 36.126 30.384 30.046 26.38 27.667C19.028 23.88 17.946 20.29 18.776 17.879C19.395 16.079 21.429 15.184 23.339 15.285H23.342V15.286Z" fill="rgba(255,255,255,0.95)"></path>
          </svg>
        </div>
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
          <p style={{ fontSize: 22, color: 'var(--mute)', marginTop: 28, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>Мы не просто билетный сервис, но и настоящее комьюнити из друзей, которые хотят найти новые впечатления и разделить их с единомышленниками

          </p>
        </div>

        <div className="reveal" data-d="2" style={{ maxWidth: 560, margin: '0 auto' }}>
          <div style={{
            padding: 36, borderRadius: 24,
            background: 'white',
            border: '1px solid var(--line)',
            boxShadow: '0 24px 60px -24px rgba(10,10,30,0.18)'
          }}>
            {sent ?
            <div style={{ textAlign: 'center', padding: '16px 4px' }}>
                <div style={{
                width: 56, height: 56, borderRadius: '50%', background: accent,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 18px'
              }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="display" style={{ fontSize: 26, marginBottom: 8 }}>Ты в списке первых!</div>
                <div style={{ color: 'var(--mute)', fontSize: 16 }}>Напишем, как только откроется доступ. Ищи своих вместе с нами!</div>
              </div> :

            <form onSubmit={submit}>
                <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.35, marginBottom: 24 }}>
                  Оставь свой номер телефона и имя, чтобы первым скачать наше приложение.<br />
                  <span style={{ color: accent }}>Ищи своих вместе с нами!</span>
                </div>
                <div style={{ display: 'grid', gap: 12 }}>
                  <input
                  type="text"
                  id="community-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как тебя зовут?"
                  aria-label="Имя"
                  className="community-input"
                  style={inputStyle} />
                  <input
                  type="tel"
                  value={phone}
                  onChange={onPhoneChange}
                  onFocus={(e) => { if (!phone) setPhone('+7 ('); }}
                  placeholder="+7 (___) ___-__-__"
                  aria-label="Номер телефона"
                  className="community-input"
                  style={inputStyle} />
                  <button type="submit" className="btn btn-primary" style={{
                  background: accent, boxShadow: `0 8px 24px -8px ${accent}99`,
                  width: '100%', justifyContent: 'center', marginTop: 4
                }}>Хочу быть первым

                </button>
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--mute)', marginTop: 14, textAlign: 'center' }}>
                  Без спама. Только письмо о старте раннего доступа.
                </div>
              </form>}
          </div>
        </div>
      </div>
    </section>);

}

window.Community = Community;