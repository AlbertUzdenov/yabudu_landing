// Cookie consent banner — brand-styled, persists choice in localStorage
function CookieBanner({ accent }) {
  const KEY = 'yabudu_cookie_consent';
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (!saved) {
      const t = setTimeout(() => setShow(true), 700);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (choice) => {
    try { localStorage.setItem(KEY, choice); } catch (e) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Согласие на использование cookie">
      <div className="cookie-icon" aria-hidden="true" style={{ color: accent }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5 4 4 0 0 1-4.4-5.6A4 4 0 0 1 12 2.5Z" fill="currentColor" opacity="0.18"/>
          <path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5 4 4 0 0 1-4.4-5.6A4 4 0 0 1 12 2.5Z" stroke="currentColor" strokeWidth="1.6"/>
          <circle cx="9" cy="11" r="1.3" fill="currentColor"/>
          <circle cx="13.5" cy="14.5" r="1.1" fill="currentColor"/>
          <circle cx="14.5" cy="9.5" r="1" fill="currentColor"/>
        </svg>
      </div>
      <div className="cookie-text">
        <strong>Мы используем cookie</strong>
        <span>Файлы cookie помогают сайту работать, запоминать твой выбор и делать его удобнее. Продолжая, ты соглашаешься с их использованием.</span>
      </div>
      <div className="cookie-actions">
        <button className="btn cookie-decline" onClick={() => decide('necessary')}>Только необходимые</button>
        <button className="btn btn-primary cookie-accept" style={{ background: accent }} onClick={() => decide('all')}>Принять все</button>
      </div>
    </div>
  );
}
window.CookieBanner = CookieBanner;
