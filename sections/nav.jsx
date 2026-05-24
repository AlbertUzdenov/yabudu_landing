// Top navigation — right-rail vertical tab bar
function Nav({ accent }) {
  const BLUE = '#2F33F9';
  const items = [
    { id: 'problem',   label: 'Проблема' },
    { id: 'solution',  label: 'Решение' },
    { id: 'flow',      label: 'Сценарий' },
    { id: 'features',  label: 'Возможности' },
    { id: 'benefits',  label: 'Польза' },
    { id: 'market',    label: 'Рынок' },
    { id: 'money',     label: 'Монетизация' },
    { id: 'community', label: 'Комьюнити' },
    { id: 'faq',       label: 'FAQ' },
  ];

  const [active, setActive] = React.useState('hero');

  // Track which section is currently in view
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
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

  const accentRGB = accent === '#FE5C1C' ? '254,92,28' : '47,51,249';

  return (
    <>
      <nav className="rail-nav" aria-label="Разделы">
        {items.map((it) => (
          <a key={it.id}
            href={`#${it.id}`}
            className={`rail-link ${active === it.id ? 'is-active' : ''}`}
            aria-current={active === it.id ? 'page' : undefined}
          >
            <span className="rail-label">{it.label}</span>
            <span className="rail-dot" aria-hidden="true" />
          </a>
        ))}
      </nav>

      <style>{`
        /* Right-rail vertical tab bar — transparent, doesn't block content */
        .rail-nav {
          position: fixed; right: 14px; top: 50%; transform: translateY(-50%);
          z-index: 50;
          display: flex; flex-direction: column;
          gap: 4px;
          padding: 8px 6px;
        }
        .rail-link {
          position: relative;
          display: flex; align-items: center; justify-content: flex-end;
          gap: 12px;
          height: 28px; padding: 0 4px 0 14px;
          text-decoration: none;
          color: var(--ink);
          opacity: 0.5;
          transition: opacity .25s, color .25s;
        }
        .rail-link:hover { opacity: 1; }
        .rail-link.is-active { opacity: 1; color: ${accent}; }
        .rail-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 500;
          padding: 4px 10px;
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px) saturate(160%);
          -webkit-backdrop-filter: blur(12px) saturate(160%);
          border: 1px solid var(--line);
          border-radius: 999px;
          color: inherit;
          opacity: 0;
          transform: translateX(8px);
          transition: opacity .25s cubic-bezier(.2,.8,.2,1), transform .25s cubic-bezier(.2,.8,.2,1);
          pointer-events: none;
          white-space: nowrap;
        }
        .rail-link:hover .rail-label,
        .rail-link.is-active .rail-label {
          opacity: 1;
          transform: translateX(0);
        }
        .rail-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: currentColor;
          flex-shrink: 0;
          transition: transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s;
        }
        .rail-link:hover .rail-dot { transform: scale(1.35); }
        .rail-link.is-active .rail-dot {
          transform: scale(1.6);
          box-shadow: 0 0 0 4px rgba(${accentRGB}, 0.18);
        }

        @media (max-width: 980px) {
          .rail-nav {
            right: 6px;
            padding: 4px;
            gap: 0;
          }
          .rail-link { height: 26px; padding-right: 2px; }
          .rail-label {
            font-size: 10px;
            padding: 3px 8px;
          }
          .rail-dot { width: 5px; height: 5px; }
        }
        @media (max-width: 480px) {
          .rail-label { display: none; }
          .rail-link { padding-left: 8px; padding-right: 4px; }
        }
      `}</style>
    </>
  );
}

window.Nav = Nav;
