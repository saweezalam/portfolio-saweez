export function RoadTechThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#0f1117" />
      {/* Left sidebar - dark automotive dark */}
      <rect x="0" y="0" width="200" height="420" fill="#13171f" />
      <rect x="16" y="20" width="48" height="12" rx="2" fill="#f97316" opacity="0.9" />
      <rect x="16" y="36" width="80" height="6" rx="3" fill="#f97316" opacity="0.4" />
      {/* Sidebar nav items */}
      {[0,1,2,3,4,5].map((i) => (
        <g key={i}>
          <rect x="12" y={72 + i * 44} width="176" height="32" rx="6" fill={i === 0 ? "#f97316" : "transparent"} opacity={i === 0 ? 0.15 : 1} />
          <rect x="36" y={82 + i * 44} width={40 + (i % 3) * 20} height="10" rx="5" fill={i === 0 ? "#f97316" : "#ffffff"} opacity={i === 0 ? 0.9 : 0.2} />
        </g>
      ))}
      {/* User role tabs - OEM / Dealer / Admin */}
      <rect x="208" y="0" width="592" height="48" fill="#13171f" />
      {["Admin", "OEM", "Dealer"].map((label, i) => (
        <g key={i}>
          <rect x={216 + i * 100} y="12" width="88" height="26" rx="6" fill={i === 0 ? "#f97316" : "#1c2130"} opacity={i === 0 ? 0.9 : 1} />
          <text x={260 + i * 100} y="30" textAnchor="middle" fontSize="11" fill={i === 0 ? "#fff" : "#ffffff"} opacity={i === 0 ? 1 : 0.4} fontFamily="sans-serif">{label}</text>
        </g>
      ))}
      {/* KPI cards */}
      {[
        { label: "Total Vehicles", value: "4,821", color: "#f97316" },
        { label: "Active Dealers", value: "238", color: "#22d3ee" },
        { label: "Open Orders", value: "1,094", color: "#a78bfa" },
        { label: "Revenue MTD", value: "$2.4M", color: "#34d399" },
      ].map((card, i) => (
        <g key={i}>
          <rect x={216 + i * 142} y="60" width="130" height="72" rx="8" fill="#1c2130" />
          <rect x={228 + i * 142} y="72" width="70" height="7" rx="3" fill="#ffffff" opacity="0.25" />
          <rect x={228 + i * 142} y="88" width="90" height="18" rx="4" fill={card.color} opacity="0.85" />
          <rect x={228 + i * 142} y="114" width="50" height="7" rx="3" fill={card.color} opacity="0.4" />
        </g>
      ))}
      {/* Main chart area */}
      <rect x="216" y="144" width="380" height="196" rx="8" fill="#1c2130" />
      <rect x="232" y="160" width="120" height="9" rx="4" fill="#ffffff" opacity="0.35" />
      <rect x="352" y="160" width="60" height="9" rx="4" fill="#f97316" opacity="0.5" />
      {/* Bar chart */}
      {[55,90,72,115,88,130,105,80,120,95,140,110].map((h, i) => (
        <rect key={i} x={232 + i * 28} y={306 - h} width="18" height={h} rx="3"
          fill={i === 5 || i === 10 ? "#f97316" : "#f97316"} opacity={i === 5 || i === 10 ? 0.9 : 0.25} />
      ))}
      {/* Line overlay */}
      <polyline points="241,265 269,235 297,251 325,208 353,228 381,193 409,215 437,235 465,200 493,218 521,178 549,200"
        fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.7" strokeLinejoin="round" />
      {/* Right panel - table */}
      <rect x="608" y="144" width="184" height="196" rx="8" fill="#1c2130" />
      <rect x="620" y="158" width="80" height="9" rx="4" fill="#ffffff" opacity="0.3" />
      <rect x="620" y="172" width="160" height="1" fill="#ffffff" opacity="0.08" />
      {["Ford F-150","Chevy 1500","RAM 2500","Toyota Tundra","GMC Sierra"].map((_, i) => (
        <g key={i}>
          <rect x="620" y={184 + i * 28} width="160" height="1" fill="#ffffff" opacity="0.06" />
          <rect x="624" y={190 + i * 28} width={60 + (i % 3) * 15} height="7" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x="724" y={190 + i * 28} width="44" height="7" rx="3" fill={["#34d399","#f97316","#22d3ee","#34d399","#a78bfa"][i]} opacity="0.75" />
        </g>
      ))}
      {/* Map panel */}
      <rect x="216" y="352" width="576" height="56" rx="8" fill="#1c2130" />
      <rect x="232" y="366" width="100" height="8" rx="4" fill="#ffffff" opacity="0.2" />
      {[0,1,2,3,4,5,6,7].map((i) => (
        <circle key={i} cx={360 + i * 52} cy="378" r="6" fill="#f97316" opacity={0.2 + (i % 3) * 0.25} />
      ))}
    </svg>
  );
}

export function AppraisalThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="420" fill="#0c0f14" />
      {/* Top bar */}
      <rect x="0" y="0" width="800" height="56" fill="#111827" />
      <rect x="24" y="16" width="160" height="22" rx="4" fill="#1d4ed8" opacity="0.9" />
      <text x="104" y="32" textAnchor="middle" fontSize="11" fill="#fff" opacity="0.9" fontFamily="sans-serif">HOME APPRAISAL</text>
      <rect x="680" y="14" width="100" height="28" rx="6" fill="#1d4ed8" opacity="0.8" />
      <rect x="596" y="14" width="76" height="28" rx="6" fill="#1e293b" />
      {/* Breadcrumb */}
      <rect x="24" y="68" width="60" height="7" rx="3" fill="#ffffff" opacity="0.2" />
      <rect x="92" y="68" width="8" height="7" rx="2" fill="#ffffff" opacity="0.1" />
      <rect x="108" y="68" width="80" height="7" rx="3" fill="#1d4ed8" opacity="0.6" />
      {/* Two-column layout */}
      {/* Left: property detail card */}
      <rect x="24" y="88" width="360" height="280" rx="10" fill="#111827" />
      {/* Property image placeholder - house silhouette */}
      <rect x="24" y="88" width="360" height="140" rx="10" fill="#1a2540" />
      <polygon points="204,100 280,145 280,205 128,205 128,145" fill="#1d4ed8" opacity="0.18" />
      <rect x="168" y="158" width="72" height="47" rx="3" fill="#1e293b" />
      <rect x="192" y="163" width="24" height="32" rx="2" fill="#1d4ed8" opacity="0.4" />
      <rect x="148" y="170" width="20" height="16" rx="2" fill="#1e293b" />
      <rect x="232" y="170" width="20" height="16" rx="2" fill="#1e293b" />
      {/* Property details */}
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
      {/* Right: review form */}
      <rect x="400" y="88" width="376" height="280" rx="10" fill="#111827" />
      <rect x="416" y="104" width="140" height="10" rx="5" fill="#ffffff" opacity="0.4" />
      {/* Progress bar */}
      <rect x="416" y="124" width="344" height="6" rx="3" fill="#1e293b" />
      <rect x="416" y="124" width="210" height="6" rx="3" fill="#1d4ed8" opacity="0.8" />
      {/* Form fields */}
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x="416" y={144 + i * 48} width="80" height="7" rx="3" fill="#ffffff" opacity="0.2" />
          <rect x="416" y={157 + i * 48} width={i % 2 === 0 ? 344 : 160} height="24" rx="5" fill="#1e293b" />
          {i % 2 === 1 && <rect x="588" y={157 + i * 48} width="172" height="24" rx="5" fill="#1e293b" />}
        </g>
      ))}
      {/* Status badge */}
      <rect x="416" y="348" width="100" height="10" rx="5" fill="#ffffff" opacity="0.15" />
      <rect x="616" y="342" width="144" height="28" rx="6" fill="#1d4ed8" opacity="0.9" />
      <rect x="480" y="342" width="128" height="28" rx="6" fill="#1e293b" />
    </svg>
  );
}

export function EngelVolkersThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* E&V brand: black + red */}
      <rect width="800" height="420" fill="#000000" />
      {/* Nav */}
      <rect x="0" y="0" width="800" height="60" fill="#111111" />
      {/* E&V logo text area */}
      <rect x="32" y="18" width="20" height="24" rx="1" fill="#e30613" />
      <rect x="56" y="18" width="80" height="10" rx="2" fill="#ffffff" opacity="0.8" />
      <rect x="56" y="32" width="60" height="6" rx="2" fill="#ffffff" opacity="0.4" />
      {["Properties","Regions","About","Services"].map((_, i) => (
        <rect key={i} x={280 + i * 100} y="26" width="70" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      ))}
      <rect x="716" y="18" width="60" height="24" rx="2" fill="#e30613" opacity="0.9" />
      {/* Hero area - full-bleed luxury listing */}
      <rect x="0" y="60" width="800" height="220" fill="#111111" />
      {/* Simulated building photo using geometric shapes */}
      <rect x="0" y="60" width="800" height="220" fill="#1a1a1a" />
      {/* Architectural lines */}
      {[0,1,2,3,4,5,6,7].map((i) => (
        <rect key={i} x={i * 100} y="60" width="1" height="220" fill="#ffffff" opacity="0.04" />
      ))}
      {[0,1,2,3].map((i) => (
        <rect key={i} x="0" y={60 + i * 55} width="800" height="1" fill="#ffffff" opacity="0.04" />
      ))}
      <rect x="0" y="60" width="800" height="220" fill="url(#evhero)" />
      <defs>
        <linearGradient id="evhero" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#000000" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Building silhouette */}
      <rect x="280" y="80" width="240" height="180" rx="2" fill="#222222" opacity="0.6" />
      {[0,1,2,3].map((row) => (
        [0,1,2,3,4].map((col) => (
          <rect key={`${row}-${col}`} x={296 + col * 44} y={96 + row * 40} width="28" height="26" rx="1"
            fill="#e30613" opacity={Math.random() > 0.5 ? 0.15 : 0.05} />
        ))
      ))}
      {/* Listing overlay text */}
      <rect x="40" y="172" width="200" height="12" rx="4" fill="#e30613" opacity="0.9" />
      <rect x="40" y="194" width="320" height="22" rx="4" fill="#ffffff" opacity="0.9" />
      <rect x="40" y="226" width="140" height="10" rx="4" fill="#ffffff" opacity="0.4" />
      {/* Price */}
      <rect x="40" y="246" width="160" height="18" rx="4" fill="#e30613" opacity="0.8" />
      {/* Property card grid */}
      <rect x="0" y="290" width="800" height="130" fill="#0a0a0a" />
      <rect x="24" y="300" width="100" height="10" rx="5" fill="#ffffff" opacity="0.3" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x={24 + i * 192} y="320" width="176" height="92" rx="6" fill="#111111" />
          <rect x={24 + i * 192} y="320" width="176" height="52" rx="6" fill="#1a1a1a" />
          {/* Window grid on card */}
          {[0,1].map((r) => [0,1,2].map((c) => (
            <rect key={`${r}${c}`} x={36 + i * 192 + c * 52} y={328 + r * 18} width="38" height="12" rx="1" fill="#e30613" opacity="0.08" />
          )))}
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
      {/* NETSTREIT brand: navy/dark blue */}
      <rect width="800" height="420" fill="#0a0e1a" />
      {/* Nav */}
      <rect x="0" y="0" width="800" height="64" fill="#0d1526" />
      <rect x="32" y="18" width="140" height="28" rx="3" fill="transparent" />
      {/* NETSTREIT wordmark */}
      <rect x="32" y="22" width="20" height="20" rx="2" fill="#1a56db" />
      <rect x="58" y="26" width="100" height="12" rx="3" fill="#ffffff" opacity="0.85" />
      {["Portfolio","Properties","Investors","About"].map((_, i) => (
        <rect key={i} x={280 + i * 100} y="28" width="72" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      ))}
      <rect x="720" y="18" width="60" height="28" rx="4" fill="#1a56db" opacity="0.9" />
      {/* Hero banner */}
      <rect x="0" y="64" width="800" height="160" fill="#0d1526" />
      {/* US map outline suggestion */}
      <ellipse cx="400" cy="144" rx="340" ry="70" fill="#1a56db" opacity="0.04" />
      <ellipse cx="400" cy="144" rx="240" ry="50" fill="#1a56db" opacity="0.06" />
      {/* Property location pins */}
      {[
        [200,120],[280,150],[350,110],[420,140],[490,125],[560,155],[320,170],[450,165],[380,135],[510,120]
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill="#1a56db" opacity="0.5" />
          <circle cx={cx} cy={cy} r="3" fill="#60a5fa" opacity="0.9" />
        </g>
      ))}
      <rect x="40" y="80" width="240" height="18" rx="4" fill="#ffffff" opacity="0.8" />
      <rect x="40" y="106" width="380" height="12" rx="4" fill="#ffffff" opacity="0.25" />
      <rect x="40" y="126" width="160" height="10" rx="4" fill="#60a5fa" opacity="0.6" />
      {/* Stats bar */}
      <rect x="0" y="224" width="800" height="60" fill="#111827" />
      {[
        ["$4.8B", "Total Assets"], ["104", "Properties"], ["36", "States"], ["99.2%", "Occupancy"]
      ].map(([val, label], i) => (
        <g key={i}>
          <rect x={1 + i} y="224" width="1" height="60" fill="#1a56db" opacity="0.3" />
          <text x={80 + i * 180} y="252" textAnchor="middle" fontSize="16" fill="#60a5fa" opacity="0.9" fontFamily="sans-serif" fontWeight="bold">{val}</text>
          <rect x={44 + i * 180} y="260" width="72" height="7" rx="3" fill="#ffffff" opacity="0.2" />
        </g>
      ))}
      {/* Property grid - mobile-first card layout */}
      <rect x="0" y="292" width="800" height="128" fill="#0a0e1a" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x={16 + i * 192} y="300" width="176" height="112" rx="8" fill="#0d1526" />
          <rect x={16 + i * 192} y="300" width="176" height="60" rx="8" fill="#111827" />
          {/* Property type icon */}
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

export function NovoNordiskThumbnail() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Novo Nordisk brand: red + white, clean clinical */}
      <rect width="800" height="420" fill="#f9fafb" />
      <rect width="800" height="420" fill="#0f172a" />
      {/* Top header - Novo Nordisk red */}
      <rect x="0" y="0" width="800" height="56" fill="#c8102e" />
      <rect x="24" y="14" width="28" height="28" rx="14" fill="#ffffff" opacity="0.9" />
      <rect x="60" y="20" width="130" height="16" rx="4" fill="#ffffff" opacity="0.9" />
      {["Dashboard","Samples","Reports","Admin"].map((_, i) => (
        <rect key={i} x={280 + i * 110} y="22" width="80" height="12" rx="6" fill="#ffffff" opacity={i === 0 ? 0.9 : 0.4} />
      ))}
      <circle cx="756" cy="28" r="16" fill="#ffffff" opacity="0.15" />
      <circle cx="756" cy="28" r="10" fill="#ffffff" opacity="0.2" />
      {/* Sidebar */}
      <rect x="0" y="56" width="200" height="364" fill="#111827" />
      {["Overview","Sample Log","Distribution","Analytics","Inventory","Settings"].map((_, i) => (
        <g key={i}>
          <rect x="12" y={76 + i * 48} width="176" height="36" rx="6"
            fill={i === 1 ? "#c8102e" : "transparent"} opacity={i === 1 ? 0.2 : 1} />
          <rect x="28" y={88 + i * 48} width={50 + (i % 3) * 18} height="10" rx="5"
            fill={i === 1 ? "#c8102e" : "#ffffff"} opacity={i === 1 ? 0.9 : 0.2} />
        </g>
      ))}
      {/* Main content */}
      {/* KPI row */}
      {[
        { label: "Total Samples", color: "#c8102e" },
        { label: "Distributed", color: "#0ea5e9" },
        { label: "Pending", color: "#f59e0b" },
      ].map((kpi, i) => (
        <g key={i}>
          <rect x={216 + i * 192} y="68" width="180" height="76" rx="8" fill="#111827" />
          <rect x={232 + i * 192} y="82" width="90" height="8" rx="4" fill="#ffffff" opacity="0.25" />
          <rect x={232 + i * 192} y="100" width="120" height="22" rx="5" fill={kpi.color} opacity="0.75" />
          <rect x={232 + i * 192} y="130" width="60" height="7" rx="3" fill={kpi.color} opacity="0.4" />
        </g>
      ))}
      {/* Sample log table */}
      <rect x="216" y="156" width="576" height="260" rx="8" fill="#111827" />
      <rect x="232" y="170" width="120" height="10" rx="5" fill="#ffffff" opacity="0.4" />
      <rect x="640" y="166" width="136" height="24" rx="6" fill="#c8102e" opacity="0.7" />
      {/* Table header */}
      <rect x="216" y="198" width="576" height="32" fill="#1e293b" />
      {["Sample ID","Product","HCP","Qty","Status","Date"].map((_, i) => (
        <rect key={i} x={232 + i * 90} y="209" width={60 + (i % 2) * 10} height="8" rx="4" fill="#ffffff" opacity="0.3" />
      ))}
      {/* Table rows */}
      {[0,1,2,3,4,5,6].map((i) => (
        <g key={i}>
          <rect x="216" y={230 + i * 26} width="576" height="1" fill="#ffffff" opacity="0.05" />
          {[0,1,2,3,4,5].map((j) => (
            <rect key={j} x={232 + j * 90} y={238 + i * 26} width={50 + (j % 3) * 12} height="8" rx="4"
              fill={j === 4 ? ["#34d399","#c8102e","#f59e0b","#34d399","#0ea5e9","#34d399","#f59e0b"][i] : "#ffffff"}
              opacity={j === 4 ? 0.8 : 0.18} />
          ))}
        </g>
      ))}
      {/* Pagination */}
      <rect x="216" y="408" width="576" height="8" rx="0" fill="#1e293b" />
      {[0,1,2,3,4].map((i) => (
        <rect key={i} x={640 + i * 28} y="396" width="20" height="20" rx="4"
          fill={i === 0 ? "#c8102e" : "#1e293b"} opacity={i === 0 ? 0.8 : 1} />
      ))}
    </svg>
  );
}
