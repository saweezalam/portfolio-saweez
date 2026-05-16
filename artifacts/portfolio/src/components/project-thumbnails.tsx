export function RoadTechThumbnail() {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#0d1117" />
      {/* Sidebar */}
      <rect x="0" y="0" width="180" height="400" fill="#161b22" />
      <rect x="16" y="24" width="40" height="8" rx="4" fill="#00b4d8" opacity="0.9" />
      <rect x="16" y="60" width="148" height="32" rx="6" fill="#00b4d8" opacity="0.15" />
      <rect x="32" y="72" width="80" height="8" rx="4" fill="#00b4d8" opacity="0.7" />
      {[100, 140, 180, 220, 260, 300].map((y, i) => (
        <rect key={i} x="32" y={y + 8} width={60 + (i % 3) * 20} height="6" rx="3" fill="#ffffff" opacity="0.15" />
      ))}
      {/* Top bar */}
      <rect x="180" y="0" width="620" height="52" fill="#161b22" />
      <rect x="200" y="18" width="200" height="16" rx="8" fill="#21262d" />
      <circle cx="744" cy="26" r="12" fill="#30363d" />
      <circle cx="708" cy="26" r="12" fill="#30363d" />
      {/* Stat cards */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={200 + i * 148} y={68} width="136" height="80" rx="8" fill="#161b22" />
          <rect x={212 + i * 148} y={82} width="60" height="6" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x={212 + i * 148} y={100} width="80" height="14" rx="4" fill={i === 0 ? "#00b4d8" : "#ffffff"} opacity={i === 0 ? 0.9 : 0.6} />
          <rect x={212 + i * 148} y={122} width="50" height="6" rx="3" fill="#2ea043" opacity="0.7" />
        </g>
      ))}
      {/* Chart */}
      <rect x="200" y="164" width="380" height="200" rx="8" fill="#161b22" />
      <rect x="216" y="180" width="100" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const h = [60, 90, 70, 110, 85, 130, 95][i];
        return <rect key={i} x={226 + i * 48} y={320 - h} width="28" height={h} rx="4" fill="#00b4d8" opacity={i === 5 ? 1 : 0.3} />;
      })}
      <polyline points="240,300 288,260 336,280 384,230 432,255 480,210 528,240" fill="none" stroke="#00b4d8" strokeWidth="2.5" opacity="0.8" />
      {/* Table */}
      <rect x="592" y="164" width="208" height="200" rx="8" fill="#161b22" />
      <rect x="600" y="172" width="80" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="600" y={196 + i * 32} width="192" height="1" fill="#30363d" />
          <rect x="608" y={204 + i * 32} width="80" height="6" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x="720" y={204 + i * 32} width="40" height="6" rx="3" fill={["#2ea043","#00b4d8","#f0883e","#2ea043","#00b4d8"][i]} opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

export function AppraisalThumbnail() {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#0d1117" />
      {/* Top nav */}
      <rect x="0" y="0" width="800" height="56" fill="#161b22" />
      <rect x="24" y="20" width="120" height="16" rx="4" fill="#7c3aed" opacity="0.9" />
      <rect x="600" y="18" width="80" height="20" rx="6" fill="#7c3aed" opacity="0.7" />
      <rect x="700" y="18" width="80" height="20" rx="6" fill="#21262d" />
      {/* Step progress */}
      <rect x="0" y="56" width="800" height="48" fill="#161b22" opacity="0.5" />
      {[0,1,2,3,4].map((i) => (
        <g key={i}>
          <circle cx={120 + i * 140} cy="80" r="12" fill={i < 2 ? "#7c3aed" : "#21262d"} />
          <text x={120 + i * 140} y="85" textAnchor="middle" fontSize="10" fill="white">{i+1}</text>
          {i < 4 && <rect x={132 + i * 140} y="78" width="116" height="4" rx="2" fill={i < 1 ? "#7c3aed" : "#30363d"} />}
        </g>
      ))}
      {/* Main form card */}
      <rect x="40" y="120" width="460" height="256" rx="10" fill="#161b22" />
      <rect x="60" y="140" width="140" height="10" rx="5" fill="#ffffff" opacity="0.4" />
      {[170, 200, 230].map((y, i) => (
        <g key={i}>
          <rect x="60" y={y} width="80" height="7" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x="60" y={y + 14} width={["320", "240", "180"][i]} height="22" rx="6" fill="#21262d" />
        </g>
      ))}
      <rect x="60" y="286" width="280" height="22" rx="6" fill="#21262d" />
      <rect x="60" y="326" width="120" height="32" rx="8" fill="#7c3aed" opacity="0.9" />
      <rect x="196" y="326" width="120" height="32" rx="8" fill="#21262d" />
      {/* Side panel */}
      <rect x="520" y="120" width="240" height="120" rx="10" fill="#161b22" />
      <rect x="540" y="138" width="100" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      <rect x="540" y="158" width="180" height="60" rx="6" fill="#7c3aed" opacity="0.1" />
      <rect x="552" y="170" width="60" height="8" rx="4" fill="#7c3aed" opacity="0.7" />
      <rect x="552" y="186" width="120" height="6" rx="3" fill="#ffffff" opacity="0.2" />
      <rect x="520" y="252" width="240" height="124" rx="10" fill="#161b22" />
      <rect x="540" y="270" width="80" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      {[295, 320, 345].map((y, i) => (
        <g key={i}>
          <rect x="540" y={y} width="60" height="6" rx="3" fill="#ffffff" opacity="0.15" />
          <rect x="680" y={y} width="60" height="6" rx="3" fill="#7c3aed" opacity={0.5 + i * 0.2} />
        </g>
      ))}
    </svg>
  );
}

export function EngelVolkersThumbnail() {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#0a0a0a" />
      {/* Luxury nav */}
      <rect x="0" y="0" width="800" height="64" fill="#111111" />
      <rect x="40" y="24" width="120" height="16" rx="2" fill="#c9a84c" opacity="0.9" />
      {["Properties","About","Contact","Agents"].map((_, i) => (
        <rect key={i} x={280 + i * 80} y="28" width="60" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      ))}
      <rect x="720" y="22" width="60" height="20" rx="2" fill="#c9a84c" opacity="0.8" />
      {/* Hero property */}
      <rect x="0" y="64" width="800" height="180" fill="#1a1a1a" />
      <rect x="0" y="64" width="800" height="180" fill="url(#luxgrad)" />
      <defs>
        <linearGradient id="luxgrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <rect x="40" y="90" width="200" height="16" rx="3" fill="#ffffff" opacity="0.7" />
      <rect x="40" y="116" width="320" height="30" rx="3" fill="#ffffff" opacity="0.9" />
      <rect x="40" y="158" width="100" height="8" rx="4" fill="#c9a84c" opacity="0.8" />
      <rect x="40" y="178" width="80" height="28" rx="2" fill="#c9a84c" opacity="0.9" />
      <rect x="132" y="178" width="80" height="28" rx="2" fill="transparent" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
      {/* Property grid */}
      <rect x="0" y="260" width="800" height="140" fill="#0d0d0d" />
      <rect x="24" y="272" width="120" height="10" rx="5" fill="#ffffff" opacity="0.4" />
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x={24 + i * 254} y={296} width="236" height="88" rx="6" fill="#1a1a1a" />
          <rect x={24 + i * 254} y={296} width="236" height="52" rx="6" fill="#222222" />
          <rect x={36 + i * 254} y={360} width="100" height="7" rx="3" fill="#ffffff" opacity="0.5" />
          <rect x={36 + i * 254} y={374} width="60" height="6" rx="3" fill="#c9a84c" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export function NetstreitThumbnail() {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#f8f9fa" />
      <rect x="0" y="0" width="800" height="400" fill="#0d1117" />
      {/* Mobile-first hero */}
      <rect x="0" y="0" width="800" height="80" fill="#003087" />
      <rect x="40" y="24" width="100" height="16" rx="3" fill="#ffffff" opacity="0.9" />
      <rect x="680" y="28" width="24" height="4" rx="2" fill="white" opacity="0.7" />
      <rect x="680" y="36" width="18" height="4" rx="2" fill="white" opacity="0.7" />
      <rect x="680" y="44" width="24" height="4" rx="2" fill="white" opacity="0.7" />
      <rect x="40" y="90" width="400" height="48" rx="4" fill="#ffffff" opacity="0.8" />
      <rect x="450" y="90" width="50" height="48" rx="4" fill="#003087" opacity="0.9" />
      {/* Property cards - mobile layout simulated on desktop */}
      <rect x="0" y="160" width="800" height="240" fill="#0d1117" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x={20 + i * 192} y="170" width="172" height="220" rx="8" fill="#161b22" />
          <rect x={20 + i * 192} y="170" width="172" height="110" rx="8" fill="#003087" opacity={0.15 + i * 0.05} />
          <rect x={32 + i * 192} y="292" width="80" height="8" rx="4" fill="#ffffff" opacity="0.6" />
          <rect x={32 + i * 192} y="308" width="60" height="8" rx="4" fill="#003087" opacity="0.8" />
          <rect x={32 + i * 192} y="326" width="100" height="6" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x={32 + i * 192} y="340" width="50" height="6" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x={32 + i * 192} y="360" width="120" height="20" rx="4" fill="#003087" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export function NovoNordiskThumbnail() {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="400" fill="#0d1117" />
      {/* Header */}
      <rect x="0" y="0" width="800" height="60" fill="#001f4e" />
      <rect x="24" y="18" width="140" height="24" rx="4" fill="#ffffff" opacity="0.9" />
      <rect x="700" y="16" width="80" height="28" rx="14" fill="#0072b1" />
      {/* Dashboard layout */}
      <rect x="0" y="60" width="220" height="340" fill="#111827" />
      {["Samples","Reports","Inventory","Analytics","Settings"].map((_, i) => (
        <g key={i}>
          <rect x="16" y={84 + i * 44} width="188" height="36" rx="6" fill={i === 0 ? "#0072b1" : "transparent"} opacity={i === 0 ? 0.3 : 1} />
          <rect x="32" y={96 + i * 44} width={70 + (i % 2) * 30} height="10" rx="5" fill="#ffffff" opacity={i === 0 ? 0.8 : 0.3} />
        </g>
      ))}
      {/* Stat cards */}
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x={236 + i * 184} y="76" width="168" height="80" rx="8" fill="#111827" />
          <rect x={252 + i * 184} y="92" width="80" height="8" rx="4" fill="#ffffff" opacity="0.3" />
          <rect x={252 + i * 184} y="110" width="100" height="20" rx="5" fill="#0072b1" opacity={0.5 + i * 0.2} />
          <rect x={252 + i * 184} y="138" width="60" height="8" rx="4" fill="#2ea043" opacity="0.7" />
        </g>
      ))}
      {/* Main content */}
      <rect x="236" y="172" width="548" height="212" rx="8" fill="#111827" />
      <rect x="252" y="188" width="120" height="10" rx="5" fill="#ffffff" opacity="0.4" />
      {[0,1,2,3,4,5,6,7].map((i) => (
        <g key={i}>
          <rect x="252" y={214 + i * 22} width="516" height="1" fill="#1f2937" />
          <rect x="256" y={220 + i * 22} width={80 + (i % 4) * 20} height="8" rx="4" fill="#ffffff" opacity="0.2" />
          <rect x="440" y={220 + i * 22} width="60" height="8" rx="4" fill="#ffffff" opacity="0.15" />
          <rect x="600" y={220 + i * 22} width="50" height="8" rx="4" fill="#0072b1" opacity={0.4 + (i % 3) * 0.2} />
          <rect x="700" y={220 + i * 22} width="60" height="8" rx="4" fill={["#2ea043","#0072b1","#f0883e","#2ea043","#0072b1","#2ea043","#f0883e","#2ea043"][i]} opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}
