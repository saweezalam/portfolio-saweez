export function ProfileAvatar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full">
        <defs>
          <linearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>
          <clipPath id="avatarClip">
            <circle cx="100" cy="100" r="100" />
          </clipPath>
        </defs>
        <circle cx="100" cy="100" r="100" fill="url(#avatarBg)" />
        <circle cx="100" cy="100" r="100" fill="#1e293b" />
        {/* Subtle grid */}
        {[0,1,2,3,4,5,6,7,8,9].map((i) => (
          <line key={`v${i}`} x1={i * 22} y1="0" x2={i * 22} y2="200" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
        ))}
        {[0,1,2,3,4,5,6,7,8,9].map((i) => (
          <line key={`h${i}`} x1="0" y1={i * 22} x2="200" y2={i * 22} stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
        ))}
        {/* Body / shirt */}
        <ellipse cx="100" cy="185" rx="70" ry="40" fill="#0f172a" />
        <ellipse cx="100" cy="175" rx="55" ry="35" fill="#1e40af" opacity="0.8" />
        {/* Neck */}
        <rect x="88" y="130" width="24" height="30" rx="8" fill="#c9a87c" />
        {/* Head */}
        <ellipse cx="100" cy="110" rx="42" ry="46" fill="#c9a87c" />
        {/* Hair */}
        <ellipse cx="100" cy="72" rx="43" ry="22" fill="#1a0a00" />
        <ellipse cx="62" cy="90" rx="14" ry="20" fill="#1a0a00" />
        <ellipse cx="138" cy="90" rx="14" ry="20" fill="#1a0a00" />
        {/* Eyes */}
        <ellipse cx="85" cy="108" rx="6" ry="7" fill="#ffffff" />
        <ellipse cx="115" cy="108" rx="6" ry="7" fill="#ffffff" />
        <circle cx="86" cy="109" r="4" fill="#3b1f0a" />
        <circle cx="116" cy="109" r="4" fill="#3b1f0a" />
        <circle cx="87" cy="107" r="1.5" fill="#ffffff" opacity="0.8" />
        <circle cx="117" cy="107" r="1.5" fill="#ffffff" opacity="0.8" />
        {/* Eyebrows */}
        <path d="M78 100 Q85 96 93 99" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M107 99 Q115 96 122 100" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Nose */}
        <path d="M98 112 Q96 122 100 124 Q104 122 102 112" stroke="#b08060" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Smile */}
        <path d="M88 130 Q100 140 112 130" stroke="#a06040" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Collar detail */}
        <polygon points="100,160 88,150 100,155 112,150" fill="#1e3a8a" opacity="0.9" />
        {/* Subtle glow */}
        <circle cx="100" cy="100" r="100" fill="url(#avatarBg)" opacity="0.15" />
      </svg>
      {/* Animated ring */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse" />
    </div>
  );
}
