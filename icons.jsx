// Shared icons (no emoji)
const Icon = {
  Pin: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5C7.7 2.5 4 5.9 4 10.2c0 5 6.5 11.1 7.4 11.9.3.3.9.3 1.2 0 .9-.8 7.4-6.9 7.4-11.9C20 5.9 16.3 2.5 12 2.5Z" fill={color}/>
      <circle cx="12" cy="10" r="2.6" fill="white"/>
    </svg>
  ),
  Users: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="9" r="3.2" fill={color}/>
      <circle cx="16" cy="11" r="2.4" fill={color} opacity="0.7"/>
      <path d="M2.5 19c.5-3 3.2-5 6.5-5s6 2 6.5 5v.5h-13V19Z" fill={color}/>
      <path d="M15 14.5c2.7 0 5 1.6 5.7 4.2.1.4-.2.8-.6.8H16" fill={color} opacity="0.7"/>
    </svg>
  ),
  Ticket: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z" fill={color}/>
      <path d="M14 6v12" stroke="white" strokeWidth="1.5" strokeDasharray="2 2"/>
    </svg>
  ),
  Map: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 6.5 9 4l6 2.5 6-2.5v13L15 19.5 9 17l-6 2.5v-13Z" fill={color}/>
      <path d="M9 4v13M15 6.5v13" stroke="white" strokeWidth="1.2" opacity="0.6"/>
    </svg>
  ),
  Chat: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-4 4v-4H7a3 3 0 0 1-3-3V6Z" fill={color}/>
      <circle cx="9" cy="10" r="1.2" fill="white"/>
      <circle cx="12" cy="10" r="1.2" fill="white"/>
      <circle cx="15" cy="10" r="1.2" fill="white"/>
    </svg>
  ),
  QR: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="2"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="2"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth="2"/>
      <rect x="6" y="6" width="1.5" height="1.5" fill={color}/>
      <rect x="17" y="6" width="1.5" height="1.5" fill={color}/>
      <rect x="6" y="17" width="1.5" height="1.5" fill={color}/>
      <rect x="14" y="14" width="3" height="3" fill={color}/>
      <rect x="18" y="18" width="3" height="3" fill={color}/>
      <rect x="14" y="18" width="2" height="2" fill={color}/>
      <rect x="18" y="14" width="2" height="2" fill={color}/>
    </svg>
  ),
  Chart: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="13" width="4" height="8" rx="1" fill={color}/>
      <rect x="10" y="8" width="4" height="13" rx="1" fill={color}/>
      <rect x="17" y="3" width="4" height="18" rx="1" fill={color}/>
    </svg>
  ),
  Sparkle: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Bell: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6Z" fill={color}/>
      <path d="M10 19a2 2 0 0 0 4 0" fill={color}/>
    </svg>
  ),
  Arrow: ({ size = 24, color = "currentColor", rotate = 0 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Heart: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 21s-7-4.5-9.3-9c-1.4-2.7 0-6 3.3-6 2 0 3.4 1 4 2.2.6-1.2 2-2.2 4-2.2 3.3 0 4.7 3.3 3.3 6C19 16.5 12 21 12 21Z" fill={color}/>
    </svg>
  ),
  Money: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="12" rx="2" fill={color}/>
      <circle cx="12" cy="12" r="3" fill="white"/>
      <circle cx="5" cy="12" r="1" fill="white"/>
      <circle cx="19" cy="12" r="1" fill="white"/>
    </svg>
  ),
  Trend: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 18 9 11l4 4 8-9" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 6h6v6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Plus: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  Check: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="m5 12 4.5 4.5L19 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

window.Icon = Icon;
