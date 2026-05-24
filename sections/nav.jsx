// Top navigation — animated active indicator, hover pill, scroll progress
function Nav({ accent }) {
  const BLUE = '#2F33F9';
  const items = [
    { id: 'problem',   label: 'Проблема' },
    { id: 'solution',  label: 'Решение' },
    { id: 'flow',      label: 'Сценарий' },
    { id: 'features',  label: 'Возможности' },
    { id: 'market',    label: 'Рынок' },
    { id: 'community', label: 'Комьюнити' },
    { id: 'faq',       label: 'FAQ' },
  ];

  const [active, setActive] = React.useState('hero');
  const [hover, setHover] = React.useState(null); // id or null
  const [scrolled, setScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const linksRef = React.useRef(null);
  const [indicator, setIndicator] = React.useState({ x: 0, w: 0, visible: false });
  const [hoverInd, setHoverInd] = React.useState({ x: 0, w: 0, visible: false });

  // Track scroll progress + shrink threshold
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is currently in view
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      // pick the entry with the largest intersection ratio
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length === 0) return;
      const top = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      setActive(top.target.id);
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
    ['hero', ...items.map(i => i.id)].forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Position the active indicator pill
  React.useEffect(() => {
    if (!linksRef.current) return;
    const link = linksRef.current.querySelector(`[data-link="${active}"]`);
    if (!link) { setIndicator(s => ({ ...s, visible: false })); return; }
    const parentRect = linksRef.current.getBoundingClientRect();
    const r = link.getBoundingClientRect();
    setIndicator({ x: r.left - parentRect.left, w: r.width, visible: true });
  }, [active, scrolled]);

  // Position the hover indicator
  React.useEffect(() => {
    if (!hover || !linksRef.current) { setHoverInd(s => ({ ...s, visible: false })); return; }
    const link = linksRef.current.querySelector(`[data-link="${hover}"]`);
    if (!link) return;
    const parentRect = linksRef.current.getBoundingClientRect();
    const r = link.getBoundingClientRect();
    setHoverInd({ x: r.left - parentRect.left, w: r.width, visible: true });
  }, [hover, scrolled]);

  return (
    <>
      <nav className={`nav nav-modern ${scrolled ? 'is-scrolled' : ''}`}>
        {/* progress bar */}
        <div className="nav-progress" aria-hidden="true">
          <div className="nav-progress-bar" style={{
            width: `${progress * 100}%`,
            background: `linear-gradient(90deg, ${BLUE}, ${accent})`,
          }}/>
        </div>

        {/* Logo */}
        <a href="#hero" className="nav-logo-link">
          <Logo height={scrolled ? 30 : 36}/>
        </a>

        {/* Links */}
        <div className="nav-links-wrap" ref={linksRef}
          onMouseLeave={() => setHover(null)}
        >
          {/* Hover pill */}
          <span className="nav-pill nav-pill-hover" style={{
            left: hoverInd.x, width: hoverInd.w,
            opacity: hoverInd.visible ? 1 : 0,
            background: 'rgba(10,10,14,0.06)',
          }}/>
          {/* Active dot indicator */}
          <span className="nav-active-dot" style={{
            left: indicator.x + indicator.w / 2 - 3,
            opacity: indicator.visible ? 1 : 0,
            background: accent,
          }}/>

          {items.map((it) => (
            <a key={it.id}
              data-link={it.id}
              href={`#${it.id}`}
              className={`nav-link ${active === it.id ? 'is-active' : ''}`}
              onMouseEnter={() => setHover(it.id)}
            >
              {it.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a className="nav-cta" style={{ background: accent }}>
          <span className="nav-cta-dot"/>
          <span>Скачать</span>
          <span className="nav-cta-arrow">
            <Icon.Arrow size={14} color="white"/>
          </span>
        </a>
      </nav>

      <style>{`
        .nav-modern {
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-bottom: 1px solid transparent;
          transition: padding .3s cubic-bezier(.2,.8,.2,1), background .3s, border-color .3s, box-shadow .3s;
          gap: 28px;
        }
        .nav-modern.is-scrolled {
          padding: 10px 28px;
          background: rgba(255, 255, 255, 0.85);
          border-bottom-color: var(--line);
          box-shadow: 0 8px 24px -16px rgba(10,10,30,0.10);
        }
        .nav-progress {
          position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
          pointer-events: none;
        }
        .nav-progress-bar {
          height: 100%;
          transition: width .12s linear;
          border-radius: 0 2px 2px 0;
        }
        .nav-logo-link {
          text-decoration: none; display: flex; align-items: center;
          transition: transform .3s cubic-bezier(.2,.8,.2,1);
        }
        .nav-logo-link:hover { transform: scale(1.03); }

        .nav-links-wrap {
          position: relative;
          display: flex; align-items: center; gap: 4px;
          padding: 6px 8px;
          border-radius: 999px;
          background: rgba(10,10,14,0.03);
          border: 1px solid var(--line);
        }
        .nav-link {
          position: relative; z-index: 2;
          padding: 10px 16px; border-radius: 999px;
          font-size: 14.5px; font-weight: 500;
          color: var(--ink); text-decoration: none;
          transition: color .2s;
        }
        .nav-link.is-active { color: var(--ink); font-weight: 600; }
        .nav-pill {
          position: absolute; z-index: 1;
          top: 6px; bottom: 6px;
          border-radius: 999px;
          transition: left .35s cubic-bezier(.2,.8,.2,1), width .35s cubic-bezier(.2,.8,.2,1), opacity .25s;
        }
        .nav-active-dot {
          position: absolute; bottom: 0; width: 6px; height: 6px;
          border-radius: 50%;
          transition: left .35s cubic-bezier(.2,.8,.2,1), opacity .3s;
          pointer-events: none; z-index: 3;
        }

        .nav-cta {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 18px 11px 14px;
          border-radius: 999px;
          color: white; text-decoration: none;
          font-weight: 600; font-size: 14px;
          box-shadow: 0 8px 22px -10px currentColor;
          transition: transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s, padding .3s;
          position: relative; overflow: hidden;
        }
        .nav-cta::before {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform .7s cubic-bezier(.2,.8,.2,1);
        }
        .nav-cta:hover { transform: translateY(-2px); }
        .nav-cta:hover::before { transform: translateX(100%); }
        .nav-cta-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: white;
          box-shadow: 0 0 0 0 rgba(255,255,255,0.6);
          animation: nav-pulse 2s ease-in-out infinite;
        }
        @keyframes nav-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.55); }
          50% { box-shadow: 0 0 0 6px rgba(255,255,255,0); }
        }
        .nav-cta-arrow {
          display: inline-flex; transition: transform .25s cubic-bezier(.2,.8,.2,1);
        }
        .nav-cta:hover .nav-cta-arrow { transform: translateX(3px); }

        @media (max-width: 980px) {
          .nav-links-wrap { display: none; }
        }
      `}</style>
    </>
  );
}

window.Nav = Nav;
