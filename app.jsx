// App orchestrator
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FE5C1C"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const accent = t.accent;

  // Scroll reveal observer
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  return (
    <>
      <Nav accent={accent}/>

      <Hero accent={accent}/>
      <Problem accent={accent}/>
      <Solution accent={accent}/>
      <Flow accent={accent}/>
      <Features accent={accent}/>
      <Benefits accent={accent}/>
      <Market accent={accent}/>
      <Monetization accent={accent}/>
      <Community accent={accent}/>
      <FAQ accent={accent}/>
      <Footer accent={accent}/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Акцентный цвет">
          <TweakColor
            label="Палитра"
            value={t.accent}
            options={['#FE5C1C', '#2F33F9']}
            onChange={(v) => setTweak('accent', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
