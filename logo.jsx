// Я_БУДУ logo — official brand mark (image), with optional small-form mark variants
function Logo({ height = 32, dark = false }) {
  // Use the brand logo PNG; invert nothing — colors work on both light & dark backgrounds
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 0 }}>
      <img
        src="assets/logo.png"
        alt="Я_БУДУ"
        style={{
          height,
          width: 'auto',
          display: 'block',
          filter: dark ? 'none' : 'none',
        }}
      />
    </span>
  );
}

window.Logo = Logo;
