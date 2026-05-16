export function RoadTechThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#0f1117" />
      <rect x="0" y="0" width="200" height="420" fill="#13171f" />
      <rect x="16" y="20" width="48" height="12" rx="2" fill="#f97316" opacity="0.9" />
      <rect x="16" y="36" width="80" height="6" rx="3" fill="#f97316" opacity="0.4" />
      {[0,1,2,3,4,5].map((i) => (
        <g key={i}>
          <rect x="12" y={72 + i * 44} width="176" height="32" rx="6" fill={i === 0 ? "#f97316" : "transparent"} opacity={i === 0 ? 0.15 : 1} />
          <rect x="36" y={82 + i * 44} width={40 + (i % 3) * 20} height="10" rx="5" fill={i === 0 ? "#f97316" : "#ffffff"} opacity={i === 0 ? 0.9 : 0.2} />
        </g>
      ))}
      <rect x="208" y="0" width="592" height="48" fill="#13171f" />
      {["Admin", "OEM", "Dealer"].map((label, i) => (
        <g key={i}>
          <rect x={216 + i * 100} y="12" width="88" height="26" rx="6" fill={i === 0 ? "#f97316" : "#1c2130"} opacity={i === 0 ? 0.9 : 1} />
          <text x={260 + i * 100} y="30" textAnchor="middle" fontSize="11" fill="#fff" opacity={i === 0 ? 1 : 0.4} fontFamily="sans-serif">{label}</text>
        </g>
      ))}
      {[
        { label: "Total Vehicles", color: "#f97316" },
        { label: "Active Dealers", color: "#22d3ee" },
        { label: "Open Orders", color: "#a78bfa" },
        { label: "Revenue MTD", color: "#34d399" },
      ].map((card, i) => (
        <g key={i}>
          <rect x={216 + i * 142} y="60" width="130" height="72" rx="8" fill="#1c2130" />
          <rect x={228 + i * 142} y="72" width="70" height="7" rx="3" fill="#ffffff" opacity="0.25" />
          <rect x={228 + i * 142} y="88" width="90" height="18" rx="4" fill={card.color} opacity="0.85" />
          <rect x={228 + i * 142} y="114" width="50" height="7" rx="3" fill={card.color} opacity="0.4" />
        </g>
      ))}
      <rect x="216" y="144" width="380" height="196" rx="8" fill="#1c2130" />
      <rect x="232" y="160" width="120" height="9" rx="4" fill="#ffffff" opacity="0.35" />
      {[55,90,72,115,88,130,105,80,120,95,140,110].map((h, i) => (
        <rect key={i} x={232 + i * 28} y={306 - h} width="18" height={h} rx="3" fill="#f97316" opacity={i === 5 || i === 10 ? 0.9 : 0.25} />
      ))}
      <polyline points="241,265 269,235 297,251 325,208 353,228 381,193 409,215 437,235 465,200 493,218 521,178 549,200" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.7" strokeLinejoin="round" />
      <rect x="608" y="144" width="184" height="196" rx="8" fill="#1c2130" />
      <rect x="620" y="158" width="80" height="9" rx="4" fill="#ffffff" opacity="0.3" />
      {[0,1,2,3,4].map((i) => (
        <g key={i}>
          <rect x="620" y={184 + i * 28} width="160" height="1" fill="#ffffff" opacity="0.06" />
          <rect x="624" y={190 + i * 28} width={60 + (i % 3) * 15} height="7" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x="724" y={190 + i * 28} width="44" height="7" rx="3" fill={["#34d399","#f97316","#22d3ee","#34d399","#a78bfa"][i]} opacity="0.75" />
        </g>
      ))}
    </svg>
  );
}

export function VqcThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#05050f" />
      <defs>
        <radialGradient id="vqcglow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#05050f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="420" fill="url(#vqcglow)" />
      {/* Grid dots */}
      {Array.from({length: 10}).map((_, r) => Array.from({length: 20}).map((_, c) => (
        <circle key={`${r}${c}`} cx={20 + c * 40} cy={20 + r * 40} r="1" fill="#7c3aed" opacity="0.2" />
      )))}
      {/* Nav */}
      <rect x="0" y="0" width="800" height="52" fill="#0d0d1a" />
      <rect x="24" y="16" width="80" height="20" rx="4" fill="#7c3aed" opacity="0.8" />
      <text x="64" y="31" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">NAN·AI</text>
      {["Dashboard","QC Reports","AI Analysis","Settings"].map((_, i) => (
        <rect key={i} x={200 + i * 120} y="20" width="80" height="12" rx="6" fill="#ffffff" opacity={i === 0 ? 0.6 : 0.2} />
      ))}
      {/* AI status pill */}
      <rect x="680" y="14" width="100" height="24" rx="12" fill="#7c3aed" opacity="0.25" />
      <circle cx="694" cy="26" r="4" fill="#a78bfa" opacity="0.9" />
      <rect x="704" y="22" width="64" height="8" rx="4" fill="#a78bfa" opacity="0.6" />
      {/* Score cards */}
      {[
        { label: "Quality Score", val: "98.4%", color: "#34d399" },
        { label: "AI Confidence", val: "96.1%", color: "#7c3aed" },
        { label: "Issues Found", val: "3", color: "#f59e0b" },
        { label: "Pass Rate", val: "99.7%", color: "#22d3ee" },
      ].map((c, i) => (
        <g key={i}>
          <rect x={20 + i * 192} y="68" width="176" height="80" rx="10" fill="#0d0d1a" />
          <rect x={20 + i * 192} y="68" width="176" height="80" rx="10" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
          <rect x={36 + i * 192} y="82" width="90" height="8" rx="4" fill="#ffffff" opacity="0.2" />
          <rect x={36 + i * 192} y="100" width="120" height="22" rx="5" fill={c.color} opacity="0.8" />
          <rect x={36 + i * 192} y="130" width="60" height="7" rx="3" fill={c.color} opacity="0.3" />
        </g>
      ))}
      {/* AI analysis panel */}
      <rect x="20" y="164" width="480" height="236" rx="10" fill="#0d0d1a" />
      <rect x="20" y="164" width="480" height="236" rx="10" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
      <rect x="36" y="180" width="120" height="10" rx="5" fill="#ffffff" opacity="0.35" />
      <rect x="380" y="176" width="100" height="24" rx="6" fill="#7c3aed" opacity="0.6" />
      {/* Waveform / AI signal */}
      <polyline points="36,280 70,240 100,300 130,220 160,270 190,230 220,310 250,240 280,260 310,210 340,270 370,230 400,290 430,248 460,265 490,238" fill="none" stroke="#7c3aed" strokeWidth="2.5" opacity="0.8" strokeLinejoin="round" />
      <polyline points="36,290 70,260 100,310 130,250 160,285 190,255 220,320 250,262 280,278 310,232 340,285 370,250 400,304 430,264 460,278 490,252" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4" strokeLinejoin="round" />
      {/* Defect markers */}
      {[130,310,430].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={[220,220,248][i]} r="8" fill="#f59e0b" opacity="0.8" />
          <text x={x} y={[224,224,252][i]} textAnchor="middle" fontSize="8" fill="#000" fontFamily="sans-serif">!</text>
        </g>
      ))}
      {/* Log panel */}
      <rect x="516" y="164" width="264" height="236" rx="10" fill="#0d0d1a" />
      <rect x="516" y="164" width="264" height="236" rx="10" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
      <rect x="532" y="180" width="80" height="10" rx="5" fill="#ffffff" opacity="0.3" />
      {[0,1,2,3,4,5,6].map((i) => (
        <g key={i}>
          <rect x="532" y={204 + i * 26} width="8" height="8" rx="2" fill={["#34d399","#f59e0b","#34d399","#f59e0b","#22d3ee","#34d399","#34d399"][i]} opacity="0.9" />
          <rect x="548" y={206 + i * 26} width={100 + (i%3)*30} height="6" rx="3" fill="#ffffff" opacity="0.15" />
          <rect x="548" y={216 + i * 26} width={60 + (i%2)*20} height="5" rx="2.5" fill="#7c3aed" opacity="0.25" />
        </g>
      ))}
    </svg>
  );
}

export function EngelVolkersThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#000000" />
      <rect x="0" y="0" width="800" height="60" fill="#111111" />
      <rect x="32" y="18" width="20" height="24" rx="1" fill="#e30613" />
      <rect x="56" y="20" width="100" height="10" rx="2" fill="#ffffff" opacity="0.8" />
      <rect x="56" y="34" width="70" height="6" rx="2" fill="#ffffff" opacity="0.35" />
      {["Properties","Regions","Services","About"].map((_, i) => (
        <rect key={i} x={280 + i * 100} y="26" width="70" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      ))}
      <rect x="716" y="18" width="60" height="24" rx="2" fill="#e30613" opacity="0.9" />
      <rect x="0" y="60" width="800" height="220" fill="#1a1a1a" />
      {[0,1,2,3,4,5,6,7].map((i) => (
        <rect key={i} x={i * 100} y="60" width="1" height="220" fill="#ffffff" opacity="0.04" />
      ))}
      <rect x="0" y="60" width="800" height="220" fill="url(#evhero2)" />
      <defs>
        <linearGradient id="evhero2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#000000" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect x="280" y="80" width="240" height="180" rx="2" fill="#222222" opacity="0.6" />
      {[0,1,2,3].map((row) => [0,1,2,3,4].map((col) => (
        <rect key={`${row}-${col}`} x={296 + col * 44} y={96 + row * 40} width="28" height="26" rx="1" fill="#e30613" opacity={0.05 + Math.random() * 0.1} />
      )))}
      <rect x="40" y="172" width="200" height="12" rx="4" fill="#e30613" opacity="0.9" />
      <rect x="40" y="194" width="320" height="22" rx="4" fill="#ffffff" opacity="0.85" />
      <rect x="40" y="226" width="140" height="10" rx="4" fill="#ffffff" opacity="0.35" />
      <rect x="40" y="246" width="160" height="18" rx="4" fill="#e30613" opacity="0.8" />
      <rect x="0" y="290" width="800" height="130" fill="#0a0a0a" />
      <rect x="24" y="300" width="100" height="10" rx="5" fill="#ffffff" opacity="0.3" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x={24 + i * 192} y="320" width="176" height="92" rx="6" fill="#111111" />
          <rect x={24 + i * 192} y="320" width="176" height="52" rx="6" fill="#1a1a1a" />
          <rect x={36 + i * 192} y="382" width="80" height="8" rx="4" fill="#ffffff" opacity="0.5" />
          <rect x={36 + i * 192} y="396" width="50" height="7" rx="3" fill="#e30613" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export function NetstreitThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#0a0e1a" />
      <rect x="0" y="0" width="800" height="64" fill="#0d1526" />
      <rect x="32" y="22" width="20" height="20" rx="2" fill="#1a56db" />
      <rect x="58" y="26" width="100" height="12" rx="3" fill="#ffffff" opacity="0.85" />
      {["Portfolio","Properties","Investors","About"].map((_, i) => (
        <rect key={i} x={280 + i * 100} y="28" width="72" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      ))}
      <rect x="720" y="18" width="60" height="28" rx="4" fill="#1a56db" opacity="0.9" />
      <rect x="0" y="64" width="800" height="160" fill="#0d1526" />
      <ellipse cx="400" cy="144" rx="340" ry="70" fill="#1a56db" opacity="0.04" />
      {[[200,120],[280,150],[350,110],[420,140],[490,125],[560,155],[320,170],[450,165],[380,135],[510,120]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill="#1a56db" opacity="0.5" />
          <circle cx={cx} cy={cy} r="3" fill="#60a5fa" opacity="0.9" />
        </g>
      ))}
      <rect x="40" y="80" width="240" height="18" rx="4" fill="#ffffff" opacity="0.8" />
      <rect x="40" y="106" width="380" height="12" rx="4" fill="#ffffff" opacity="0.25" />
      <rect x="40" y="126" width="160" height="10" rx="4" fill="#60a5fa" opacity="0.6" />
      <rect x="0" y="224" width="800" height="60" fill="#111827" />
      {[["$4.8B","Total Assets"],["104","Properties"],["36","States"],["99.2%","Occupancy"]].map(([val, label], i) => (
        <g key={i}>
          <text x={80 + i * 180} y="252" textAnchor="middle" fontSize="16" fill="#60a5fa" opacity="0.9" fontFamily="sans-serif" fontWeight="bold">{val}</text>
          <rect x={44 + i * 180} y="260" width="72" height="7" rx="3" fill="#ffffff" opacity="0.2" />
        </g>
      ))}
      <rect x="0" y="292" width="800" height="128" fill="#0a0e1a" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x={16 + i * 192} y="300" width="176" height="112" rx="8" fill="#0d1526" />
          <rect x={16 + i * 192} y="300" width="176" height="60" rx="8" fill="#111827" />
          <rect x={28 + i * 192} y="310" width="40" height="32" rx="3" fill="#1a56db" opacity="0.2" />
          <rect x={34 + i * 192} y="316" width="28" height="20" rx="2" fill="#1a56db" opacity="0.5" />
          <rect x={76 + i * 192} y="312" width="80" height="8" rx="4" fill="#ffffff" opacity="0.5" />
          <rect x={76 + i * 192} y="328" width="60" height="7" rx="3" fill="#60a5fa" opacity="0.5" />
          <rect x={28 + i * 192} y="370" width="90" height="8" rx="4" fill="#ffffff" opacity="0.3" />
          <rect x={28 + i * 192} y="386" width="60" height="8" rx="4" fill="#60a5fa" opacity="0.6" />
          <rect x={140 + i * 192} y="366" width="40" height="20" rx="4" fill="#1a56db" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export function TurfMuttThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#0d1a0f" />
      <defs>
        <radialGradient id="turfglow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0d1a0f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="420" fill="url(#turfglow)" />
      {/* Nav */}
      <rect x="0" y="0" width="800" height="56" fill="#0f2011" />
      <rect x="24" y="14" width="36" height="28" rx="8" fill="#16a34a" opacity="0.9" />
      <rect x="68" y="20" width="100" height="16" rx="4" fill="#ffffff" opacity="0.8" />
      {["Explore","Parks","Community","Events"].map((_, i) => (
        <rect key={i} x={280 + i * 110} y="22" width="72" height="12" rx="6" fill="#ffffff" opacity="0.25" />
      ))}
      <rect x="720" y="14" width="64" height="28" rx="14" fill="#16a34a" opacity="0.85" />
      {/* Hero - map-like layout */}
      <rect x="0" y="56" width="800" height="200" fill="#111f13" />
      {/* Park areas */}
      <ellipse cx="200" cy="156" rx="80" ry="60" fill="#16a34a" opacity="0.15" />
      <ellipse cx="200" cy="156" rx="55" ry="40" fill="#16a34a" opacity="0.2" />
      <ellipse cx="500" cy="140" rx="100" ry="70" fill="#16a34a" opacity="0.12" />
      <ellipse cx="500" cy="140" rx="70" ry="50" fill="#16a34a" opacity="0.18" />
      <ellipse cx="680" cy="170" rx="60" ry="45" fill="#16a34a" opacity="0.14" />
      {/* Grid lines */}
      {[0,1,2,3,4,5,6].map((i) => (
        <rect key={i} x={i * 120} y="56" width="1" height="200" fill="#16a34a" opacity="0.06" />
      ))}
      {[0,1,2].map((i) => (
        <rect key={i} x="0" y={90 + i * 56} width="800" height="1" fill="#16a34a" opacity="0.06" />
      ))}
      {/* Dog/paw markers */}
      {[[200,156],[500,140],[320,110],[680,170],[420,180]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="12" fill="#16a34a" opacity="0.4" />
          <circle cx={cx} cy={cy} r="6" fill="#4ade80" opacity="0.9" />
        </g>
      ))}
      {/* Map annotation */}
      <rect x="40" y="76" width="180" height="36" rx="8" fill="#0f2011" opacity="0.8" />
      <rect x="52" y="84" width="60" height="8" rx="4" fill="#4ade80" opacity="0.8" />
      <rect x="52" y="96" width="100" height="7" rx="3" fill="#ffffff" opacity="0.3" />
      {/* Stats bar */}
      <rect x="0" y="256" width="800" height="56" fill="#0a160b" />
      {[["1,200+","Parks"],["45K","Dog Owners"],["200+","Events"],["4.9★","Rating"]].map(([val, label], i) => (
        <g key={i}>
          <text x={80 + i * 180} y="282" textAnchor="middle" fontSize="15" fill="#4ade80" opacity="0.9" fontFamily="sans-serif" fontWeight="bold">{val}</text>
          <rect x={44 + i * 180} y="290" width="72" height="7" rx="3" fill="#ffffff" opacity="0.15" />
        </g>
      ))}
      {/* Activity cards */}
      <rect x="0" y="320" width="800" height="100" fill="#0d1a0f" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x={16 + i * 192} y="328" width="176" height="84" rx="8" fill="#0f2011" />
          <rect x={16 + i * 192} y="328" width="176" height="40" rx="8" fill="#16a34a" opacity="0.12" />
          <circle cx={36 + i * 192} cy="348" r="12" fill="#16a34a" opacity="0.3" />
          <circle cx={36 + i * 192} cy="348" r="6" fill="#4ade80" opacity="0.7" />
          <rect x={56 + i * 192} y="340" width="80" height="8" rx="4" fill="#ffffff" opacity="0.5" />
          <rect x={56 + i * 192} y="354" width="60" height="6" rx="3" fill="#4ade80" opacity="0.4" />
          <rect x={28 + i * 192} y="378" width="140" height="7" rx="3" fill="#ffffff" opacity="0.15" />
          <rect x={28 + i * 192} y="393" width="100" height="7" rx="3" fill="#ffffff" opacity="0.1" />
        </g>
      ))}
    </svg>
  );
}

export function NrpGroupThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#0a0c10" />
      {/* Nav */}
      <rect x="0" y="0" width="800" height="60" fill="#0f1218" />
      <rect x="32" y="16" width="120" height="28" rx="3" fill="transparent" />
      <rect x="32" y="22" width="28" height="16" rx="2" fill="#b45309" opacity="0.9" />
      <rect x="68" y="24" width="90" height="12" rx="3" fill="#ffffff" opacity="0.85" />
      {["Projects","About","Careers","Contact"].map((_, i) => (
        <rect key={i} x={300 + i * 110} y="24" width="72" height="12" rx="6" fill="#ffffff" opacity="0.25" />
      ))}
      <rect x="720" y="16" width="60" height="28" rx="4" fill="#b45309" opacity="0.8" />
      {/* Hero full-width building showcase */}
      <rect x="0" y="60" width="800" height="220" fill="#111419" />
      {/* Skyline silhouette */}
      <rect x="0" y="180" width="800" height="100" fill="#0a0c10" />
      {[[40,80,140],[140,120,100],[220,100,80],[290,140,100],[350,60,60],[400,160,80],[460,100,80],[520,80,60],[560,140,80],[620,60,60],[660,120,80],[700,100,80],[740,80,60]].map(([x,h,w],i) => (
        <rect key={i} x={x} y={280-h} width={w} height={h} fill="#1a1f2a" />
      ))}
      {/* Windows in buildings */}
      {[[60,200,20,16],[80,200,20,16],[60,220,20,16],[80,220,20,16],[300,150,16,12],[320,150,16,12],[300,170,16,12],[440,190,14,10],[460,190,14,10]].map(([x,y,w,h],i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="1" fill="#b45309" opacity={0.2 + (i%3) * 0.15} />
      ))}
      <rect x="0" y="60" width="800" height="220" fill="url(#nrpgrad)" />
      <defs>
        <linearGradient id="nrpgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Overlay text */}
      <rect x="40" y="100" width="160" height="10" rx="5" fill="#b45309" opacity="0.8" />
      <rect x="40" y="120" width="300" height="24" rx="4" fill="#ffffff" opacity="0.9" />
      <rect x="40" y="154" width="200" height="10" rx="4" fill="#ffffff" opacity="0.35" />
      <rect x="40" y="176" width="100" height="28" rx="4" fill="#b45309" opacity="0.9" />
      <rect x="150" y="176" width="100" height="28" rx="4" fill="transparent" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
      {/* Project cards */}
      <rect x="0" y="300" width="800" height="120" fill="#0a0c10" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x={16 + i * 192} y="308" width="176" height="104" rx="8" fill="#0f1218" />
          <rect x={16 + i * 192} y="308" width="176" height="56" rx="8" fill="#1a1f2a" />
          {/* Mini building */}
          <rect x={60 + i * 192} y="316" width="40" height="36" fill="#252b38" />
          <rect x={64 + i * 192} y="320" width="10" height="8" rx="1" fill="#b45309" opacity="0.4" />
          <rect x={78 + i * 192} y="320" width="10" height="8" rx="1" fill="#b45309" opacity="0.3" />
          <rect x={64 + i * 192} y="332" width="10" height="8" rx="1" fill="#b45309" opacity="0.5" />
          <rect x={36 + i * 192} y="374" width="100" height="8" rx="4" fill="#ffffff" opacity="0.4" />
          <rect x={36 + i * 192} y="390" width="60" height="7" rx="3" fill="#b45309" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}

export function LitteratiThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#0a1208" />
      <defs>
        <radialGradient id="litglow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0a1208" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="420" fill="url(#litglow)" />
      {/* Nav */}
      <rect x="0" y="0" width="800" height="54" fill="#0d1a0a" />
      <rect x="24" y="13" width="120" height="28" rx="14" fill="#22c55e" opacity="0.2" />
      <circle cx="42" cy="27" r="10" fill="#22c55e" opacity="0.8" />
      <rect x="58" y="22" width="80" height="10" rx="5" fill="#ffffff" opacity="0.7" />
      {["Impact","Map","Community","Data"].map((_, i) => (
        <rect key={i} x={280 + i * 110} y="21" width="72" height="12" rx="6" fill="#ffffff" opacity="0.2" />
      ))}
      <rect x="712" y="13" width="68" height="28" rx="14" fill="#22c55e" opacity="0.85" />
      {/* Impact hero banner */}
      <rect x="0" y="54" width="800" height="160" fill="#0d1a0a" />
      <rect x="40" y="80" width="120" height="10" rx="5" fill="#22c55e" opacity="0.8" />
      <rect x="40" y="100" width="340" height="28" rx="4" fill="#ffffff" opacity="0.9" />
      <rect x="40" y="140" width="260" height="10" rx="4" fill="#ffffff" opacity="0.3" />
      {/* Counter */}
      <rect x="40" y="160" width="200" height="36" rx="8" fill="#22c55e" opacity="0.15" />
      <rect x="56" y="170" width="80" height="16" rx="4" fill="#22c55e" opacity="0.8" />
      <rect x="148" y="172" width="80" height="12" rx="4" fill="#ffffff" opacity="0.3" />
      {/* World map dots */}
      {[[500,80],[520,100],[600,90],[640,110],[680,85],[560,130],[520,75],[580,105],[610,75],[650,125],[480,110],[700,95]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={3 + (i % 3)} fill="#22c55e" opacity={0.3 + (i%4) * 0.15} />
      ))}
      {/* Category breakdown */}
      <rect x="0" y="222" width="800" height="60" fill="#0a120a" />
      {[
        { label: "Plastic", pct: 42, color: "#22c55e" },
        { label: "Paper", pct: 28, color: "#86efac" },
        { label: "Metal", pct: 18, color: "#4ade80" },
        { label: "Other", pct: 12, color: "#166534" },
      ].map((c, i) => (
        <g key={i}>
          <rect x={20 + i * 190} y="232" width="170" height="40" rx="6" fill="#0d1a0a" />
          <rect x={28 + i * 190} y="240" width="60" height="7" rx="3" fill="#ffffff" opacity="0.3" />
          <rect x={28 + i * 190} y="252" width={Math.round(c.pct * 1.5)} height="10" rx="5" fill={c.color} opacity="0.8" />
          <rect x={28 + c.pct * 1.5 + 4 + i * 190} y="254" width="30" height="6" rx="3" fill="#ffffff" opacity="0.2" />
        </g>
      ))}
      {/* Photo submission grid */}
      <rect x="0" y="292" width="800" height="128" fill="#0a1208" />
      <rect x="24" y="300" width="120" height="10" rx="5" fill="#ffffff" opacity="0.3" />
      {[0,1,2,3,4,5].map((i) => (
        <g key={i}>
          <rect x={16 + i * 130} y="320" width="116" height="92" rx="8" fill="#0d1a0a" />
          <rect x={16 + i * 130} y="320" width="116" height="56" rx="8" fill="#132a10" />
          <circle cx={74 + i * 130} cy="348" r="14" fill="#22c55e" opacity={0.15 + (i%3)*0.1} />
          <circle cx={74 + i * 130} cy="348" r="6" fill="#22c55e" opacity="0.6" />
          <rect x={28 + i * 130} y="384" width="80" height="7" rx="3" fill="#ffffff" opacity="0.3" />
          <rect x={28 + i * 130} y="396" width="50" height="6" rx="3" fill="#22c55e" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}

export function NbpFundsThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#09090f" />
      {/* NBP brand: green + white */}
      <rect x="0" y="0" width="800" height="56" fill="#0a1628" />
      <rect x="24" y="12" width="40" height="32" rx="4" fill="#006b3f" opacity="0.9" />
      <rect x="72" y="18" width="120" height="12" rx="3" fill="#ffffff" opacity="0.85" />
      <rect x="72" y="34" width="80" height="7" rx="3" fill="#ffffff" opacity="0.35" />
      {["Funds","Performance","Invest","About"].map((_, i) => (
        <rect key={i} x={290 + i * 110} y="22" width="80" height="12" rx="6" fill="#ffffff" opacity="0.2" />
      ))}
      <rect x="710" y="14" width="72" height="28" rx="6" fill="#006b3f" opacity="0.9" />
      {/* Fund performance panel */}
      <rect x="0" y="56" width="800" height="364" fill="#0c1220" />
      {/* Left nav */}
      <rect x="0" y="56" width="180" height="364" fill="#080d18" />
      {["Overview","My Portfolio","Fund List","SIPs","Reports","Tax Docs"].map((_, i) => (
        <g key={i}>
          <rect x="12" y={76 + i * 48} width="156" height="36" rx="6" fill={i === 0 ? "#006b3f" : "transparent"} opacity={i === 0 ? 0.2 : 1} />
          <rect x="28" y={88 + i * 48} width={50 + (i%3)*18} height="10" rx="5" fill={i === 0 ? "#4ade80" : "#ffffff"} opacity={i === 0 ? 0.8 : 0.2} />
        </g>
      ))}
      {/* NAV cards */}
      {[
        { name: "NBP Income Fund", nav: "102.48", ret: "+8.2%", color: "#006b3f" },
        { name: "NBP Stock Fund", nav: "89.14", ret: "+12.4%", color: "#22c55e" },
        { name: "NBP Govt Sec", nav: "115.70", ret: "+6.1%", color: "#006b3f" },
      ].map((f, i) => (
        <g key={i}>
          <rect x={196 + i * 196} y="68" width="184" height="88" rx="8" fill="#0f1a2e" />
          <rect x={212 + i * 196} y="80" width="120" height="8" rx="4" fill="#ffffff" opacity="0.35" />
          <rect x={212 + i * 196} y="98" width="80" height="20" rx="5" fill={f.color} opacity="0.8" />
          <rect x={300 + i * 196} y="102" width="60" height="12" rx="4" fill="#22c55e" opacity="0.7" />
          <rect x={212 + i * 196} y="126" width="100" height="8" rx="4" fill="#ffffff" opacity="0.15" />
          <rect x={316 + i * 196} y="126" width="50" height="8" rx="4" fill="#22c55e" opacity="0.5" />
        </g>
      ))}
      {/* Performance chart */}
      <rect x="196" y="168" width="588" height="180" rx="8" fill="#0f1a2e" />
      <rect x="212" y="184" width="120" height="10" rx="5" fill="#ffffff" opacity="0.35" />
      {/* Chart lines */}
      <polyline points="212,310 260,290 308,295 356,268 404,275 452,248 500,258 548,232 596,240 644,215 692,224 740,200"
        fill="none" stroke="#006b3f" strokeWidth="2.5" opacity="0.9" strokeLinejoin="round" />
      <polyline points="212,320 260,308 308,312 356,300 404,305 452,290 500,295 548,278 596,284 644,272 692,278 740,264"
        fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" strokeLinejoin="round" />
      {/* Fill area */}
      <path d="M212,310 L260,290 L308,295 L356,268 L404,275 L452,248 L500,258 L548,232 L596,240 L644,215 L692,224 L740,200 L740,340 L212,340 Z"
        fill="#006b3f" opacity="0.06" />
      {/* X axis labels */}
      {["Jan","Mar","May","Jul","Sep","Nov"].map((m, i) => (
        <rect key={i} x={212 + i * 104} y="348" width="28" height="7" rx="3" fill="#ffffff" opacity="0.15" />
      ))}
      {/* Portfolio summary */}
      <rect x="196" y="360" width="588" height="56" rx="8" fill="#0f1a2e" />
      {[["Total Invested","PKR 2.5M"],["Current Value","PKR 3.1M"],["Returns","PKR 0.6M"],["XIRR","24.3%"]].map(([l,v],i) => (
        <g key={i}>
          <rect x={212 + i * 146} y="374" width="80" height="7" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x={212 + i * 146} y="388" width="100" height="10" rx="4" fill="#22c55e" opacity={0.5 + i * 0.1} />
        </g>
      ))}
    </svg>
  );
}

export function AblFundsThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#08080e" />
      {/* ABL brand: red + dark */}
      <rect x="0" y="0" width="800" height="58" fill="#120a0a" />
      <rect x="24" y="12" width="44" height="34" rx="4" fill="#cc0000" opacity="0.9" />
      <text x="46" y="33" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif" fontWeight="bold">ABL</text>
      <rect x="76" y="18" width="140" height="12" rx="3" fill="#ffffff" opacity="0.75" />
      <rect x="76" y="34" width="90" height="7" rx="3" fill="#ffffff" opacity="0.3" />
      {["Funds","Invest","Performance","Learn"].map((_, i) => (
        <rect key={i} x={290 + i * 110} y="23" width="78" height="12" rx="6" fill="#ffffff" opacity="0.2" />
      ))}
      <rect x="710" y="14" width="72" height="30" rx="6" fill="#cc0000" opacity="0.85" />
      {/* Hero strip */}
      <rect x="0" y="58" width="800" height="100" fill="#150f0f" />
      <rect x="40" y="78" width="200" height="14" rx="5" fill="#ffffff" opacity="0.8" />
      <rect x="40" y="100" width="300" height="10" rx="4" fill="#ffffff" opacity="0.3" />
      <rect x="40" y="122" width="100" height="28" rx="6" fill="#cc0000" opacity="0.9" />
      <rect x="152" y="122" width="100" height="28" rx="6" fill="#1a0f0f" />
      {/* Fund table */}
      <rect x="0" y="166" width="800" height="254" fill="#0c0808" />
      {/* Table header */}
      <rect x="0" y="166" width="800" height="36" fill="#150f0f" />
      {["Fund Name","Category","NAV","1Y Return","3Y Return","Min Inv."].map((_, i) => (
        <rect key={i} x={20 + [0,220,360,450,540,630][i]} y="178" width={[160,100,70,70,70,80][i]} height="10" rx="4" fill="#ffffff" opacity="0.3" />
      ))}
      {[
        ["#cc0000","#22c55e","#22c55e"],
        ["#cc0000","#22c55e","#f59e0b"],
        ["#cc0000","#f59e0b","#22c55e"],
        ["#cc0000","#22c55e","#22c55e"],
        ["#cc0000","#22c55e","#f59e0b"],
      ].map((colors, i) => (
        <g key={i}>
          <rect x="0" y={202 + i * 38} width="800" height="1" fill="#ffffff" opacity="0.05" />
          <rect x="20" y={212 + i * 38} width="160" height="8" rx="4" fill="#ffffff" opacity="0.3" />
          <rect x="220" y={212 + i * 38} width="90" height="8" rx="4" fill="#ffffff" opacity="0.15" />
          <rect x="360" y={212 + i * 38} width="60" height="8" rx="4" fill={colors[0]} opacity="0.7" />
          <rect x="450" y={212 + i * 38} width="60" height="8" rx="4" fill={colors[1]} opacity="0.8" />
          <rect x="540" y={212 + i * 38} width="60" height="8" rx="4" fill={colors[2]} opacity="0.8" />
          <rect x="630" y={212 + i * 38} width="80" height="8" rx="4" fill="#ffffff" opacity="0.15" />
        </g>
      ))}
      {/* Mini donut chart */}
      <circle cx="680" cy="340" r="50" fill="none" stroke="#cc0000" strokeWidth="20" strokeOpacity="0.3" />
      <circle cx="680" cy="340" r="50" fill="none" stroke="#cc0000" strokeWidth="20" strokeOpacity="0.8"
        strokeDasharray="100 214" strokeDashoffset="0" transform="rotate(-90 680 340)" />
      <circle cx="680" cy="340" r="50" fill="none" stroke="#f59e0b" strokeWidth="20" strokeOpacity="0.6"
        strokeDasharray="64 250" strokeDashoffset="-100" transform="rotate(-90 680 340)" />
      <rect x="640" y="354" width="80" height="10" rx="5" fill="#ffffff" opacity="0.2" />
      {/* Legend */}
      <rect x="16" y="386" width="580" height="24" rx="4" fill="#150f0f" />
      {["Equity","Fixed Income","Money Mkt"].map((_, i) => (
        <g key={i}>
          <rect x={28 + i * 160} y="394" width="12" height="8" rx="2" fill={["#cc0000","#f59e0b","#22c55e"][i]} opacity="0.8" />
          <rect x={46 + i * 160} y="396" width="80" height="6" rx="3" fill="#ffffff" opacity="0.2" />
        </g>
      ))}
    </svg>
  );
}

export function AdamjeeThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#08090e" />
      {/* Adamjee Life: blue + white */}
      <rect x="0" y="0" width="800" height="58" fill="#0a0f20" />
      <rect x="24" y="12" width="44" height="34" rx="4" fill="#1e40af" opacity="0.9" />
      <rect x="36" y="20" width="20" height="18" rx="2" fill="#ffffff" opacity="0.8" />
      <rect x="76" y="18" width="140" height="12" rx="3" fill="#ffffff" opacity="0.8" />
      <rect x="76" y="34" width="100" height="7" rx="3" fill="#ffffff" opacity="0.3" />
      {["Products","Claims","My Policy","About"].map((_, i) => (
        <rect key={i} x={290 + i * 110} y="23" width="78" height="12" rx="6" fill="#ffffff" opacity="0.2" />
      ))}
      <rect x="710" y="14" width="72" height="30" rx="6" fill="#1e40af" opacity="0.9" />
      {/* Hero */}
      <rect x="0" y="58" width="800" height="140" fill="#0d1327" />
      <rect x="40" y="82" width="200" height="14" rx="5" fill="#ffffff" opacity="0.8" />
      <rect x="40" y="106" width="320" height="10" rx="4" fill="#ffffff" opacity="0.3" />
      <rect x="40" y="130" width="120" height="28" rx="6" fill="#1e40af" opacity="0.9" />
      <rect x="172" y="130" width="100" height="28" rx="6" fill="#0a0f20" />
      {/* Shield icon */}
      <path d="M650,75 L690,88 L690,130 Q690,160 650,175 Q610,160 610,130 L610,88 Z" fill="#1e40af" opacity="0.2" />
      <path d="M650,85 L680,96 L680,128 Q680,152 650,165 Q620,152 620,128 L620,96 Z" fill="#1e40af" opacity="0.4" />
      <rect x="638" y="118" width="24" height="14" rx="3" fill="#ffffff" opacity="0.8" />
      <rect x="643" y="108" width="14" height="12" rx="7" fill="none" stroke="#ffffff" strokeWidth="2" />
      {/* Product cards */}
      <rect x="0" y="206" width="800" height="214" fill="#090b14" />
      <rect x="24" y="216" width="120" height="10" rx="5" fill="#ffffff" opacity="0.35" />
      {[
        { label: "Life Cover", color: "#1e40af" },
        { label: "Health Plan", color: "#0ea5e9" },
        { label: "Savings", color: "#6366f1" },
        { label: "Critical Illness", color: "#1e40af" },
      ].map((p, i) => (
        <g key={i}>
          <rect x={16 + i * 192} y="236" width="176" height="172" rx="10" fill="#0d1327" />
          {/* Shield icon per card */}
          <path d={`M${16 + i * 192 + 72},254 L${16 + i * 192 + 104},262 L${16 + i * 192 + 104},288 Q${16 + i * 192 + 104},302 ${16 + i * 192 + 72},308 Q${16 + i * 192 + 40},302 ${16 + i * 192 + 40},288 L${16 + i * 192 + 40},262 Z`}
            fill={p.color} opacity="0.2" />
          <rect x={16 + i * 192 + 56} y="270" width="32" height="20" rx="4" fill={p.color} opacity="0.6" />
          <rect x={16 + i * 192 + 28} y="320" width="120" height="10" rx="5" fill="#ffffff" opacity="0.6" />
          <rect x={16 + i * 192 + 28} y="338" width="140" height="7" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x={16 + i * 192 + 28} y="350" width="100" height="7" rx="3" fill="#ffffff" opacity="0.15" />
          <rect x={16 + i * 192 + 28} y="376" width="120" height="24" rx="8" fill={p.color} opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export function AppraisalThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#0c0f14" />
      <rect x="0" y="0" width="800" height="56" fill="#111827" />
      <rect x="24" y="16" width="160" height="22" rx="4" fill="#1d4ed8" opacity="0.9" />
      <text x="104" y="32" textAnchor="middle" fontSize="11" fill="#fff" opacity="0.9" fontFamily="sans-serif">HOME APPRAISAL</text>
      <rect x="680" y="14" width="100" height="28" rx="6" fill="#1d4ed8" opacity="0.8" />
      <rect x="596" y="14" width="76" height="28" rx="6" fill="#1e293b" />
      <rect x="24" y="68" width="60" height="7" rx="3" fill="#ffffff" opacity="0.2" />
      <rect x="92" y="68" width="8" height="7" rx="2" fill="#ffffff" opacity="0.1" />
      <rect x="108" y="68" width="80" height="7" rx="3" fill="#1d4ed8" opacity="0.6" />
      <rect x="24" y="88" width="360" height="280" rx="10" fill="#111827" />
      <rect x="24" y="88" width="360" height="140" rx="10" fill="#1a2540" />
      <polygon points="204,100 280,145 280,205 128,205 128,145" fill="#1d4ed8" opacity="0.18" />
      <rect x="168" y="158" width="72" height="47" rx="3" fill="#1e293b" />
      <rect x="192" y="163" width="24" height="32" rx="2" fill="#1d4ed8" opacity="0.4" />
      <rect x="148" y="170" width="20" height="16" rx="2" fill="#1e293b" />
      <rect x="232" y="170" width="20" height="16" rx="2" fill="#1e293b" />
      <rect x="40" y="240" width="120" height="10" rx="5" fill="#ffffff" opacity="0.6" />
      <rect x="40" y="258" width="200" height="8" rx="4" fill="#ffffff" opacity="0.2" />
      <rect x="40" y="278" width="80" height="20" rx="5" fill="#1d4ed8" opacity="0.3" />
      <rect x="130" y="278" width="80" height="20" rx="5" fill="#1d4ed8" opacity="0.3" />
      <rect x="40" y="312" width="220" height="1" fill="#ffffff" opacity="0.07" />
      {["Est. Value","Sq Footage","Year Built","Beds/Baths"].map((_, i) => (
        <g key={i}>
          <rect x={40 + (i % 2) * 168} y={322 + Math.floor(i / 2) * 28} width="70" height="7" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x={120 + (i % 2) * 168} y={322 + Math.floor(i / 2) * 28} width="60" height="7" rx="3" fill="#1d4ed8" opacity="0.6" />
        </g>
      ))}
      <rect x="400" y="88" width="376" height="280" rx="10" fill="#111827" />
      <rect x="416" y="104" width="140" height="10" rx="5" fill="#ffffff" opacity="0.4" />
      <rect x="416" y="124" width="344" height="6" rx="3" fill="#1e293b" />
      <rect x="416" y="124" width="210" height="6" rx="3" fill="#1d4ed8" opacity="0.8" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x="416" y={144 + i * 48} width="80" height="7" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x="416" y={157 + i * 48} width={i % 2 === 0 ? 344 : 160} height="24" rx="5" fill="#1e293b" />
          {i % 2 === 1 && <rect x="588" y={157 + i * 48} width="172" height="24" rx="5" fill="#1e293b" />}
        </g>
      ))}
      <rect x="616" y="342" width="144" height="28" rx="6" fill="#1d4ed8" opacity="0.9" />
      <rect x="480" y="342" width="128" height="28" rx="6" fill="#1e293b" />
    </svg>
  );
}
