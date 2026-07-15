// Ilustrasi botol tetes 30ml - placeholder sampai foto produk asli siap.
// Dibuat SVG supaya tajam di semua ukuran dan nol byte gambar eksternal.
export default function Bottle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 340"
      className={className}
      role="img"
      aria-label="Botol tetes NurAlive 30 ml"
    >
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a2a14" />
          <stop offset="0.25" stopColor="#5c421f" />
          <stop offset="0.5" stopColor="#7a5827" />
          <stop offset="0.75" stopColor="#5c421f" />
          <stop offset="1" stopColor="#3a2a14" />
        </linearGradient>
        <linearGradient id="cap" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#141414" />
          <stop offset="0.5" stopColor="#3d3d3d" />
          <stop offset="1" stopColor="#141414" />
        </linearGradient>
        <linearGradient id="label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf8" />
          <stop offset="1" stopColor="#f1ecdd" />
        </linearGradient>
      </defs>

      {/* pipet */}
      <rect x="88" y="4" width="24" height="34" rx="6" fill="url(#cap)" />
      <rect x="94" y="38" width="12" height="26" rx="4" fill="url(#cap)" />

      {/* leher */}
      <rect x="82" y="62" width="36" height="18" rx="4" fill="url(#glass)" />

      {/* badan botol */}
      <path
        d="M60 92 Q60 80 74 80 L126 80 Q140 80 140 92 L146 130 Q148 140 148 152 L148 306 Q148 328 126 328 L74 328 Q52 328 52 306 L52 152 Q52 140 54 130 Z"
        fill="url(#glass)"
      />
      {/* kilau kaca */}
      <path
        d="M66 120 Q64 136 64 152 L64 296 Q64 306 72 308 L76 308 Q70 300 70 288 L70 150 Q70 132 73 118 Z"
        fill="#ffffff"
        opacity="0.18"
      />

      {/* label */}
      <rect x="58" y="150" width="84" height="132" rx="10" fill="url(#label)" />
      <rect x="58" y="150" width="84" height="40" rx="10" fill="#2e5b28" />
      <rect x="58" y="176" width="84" height="14" fill="#2e5b28" />
      {/* daun kecil di label */}
      <path
        d="M100 160 Q112 162 112 174 Q100 176 96 168 Q96 162 100 160 Z"
        fill="#8fc27f"
      />
      <text
        x="100"
        y="216"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="16"
        fill="#21451d"
      >
        NurAlive
      </text>
      <text
        x="100"
        y="233"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="7.5"
        letterSpacing="1.2"
        fill="#55604c"
      >
        TETES HERBAL
      </text>
      <text
        x="100"
        y="260"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="7"
        fill="#55604c"
      >
        Habbatussauda · Zaitun EV
      </text>
      <text
        x="100"
        y="276"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="#21451d"
      >
        30 ml
      </text>
    </svg>
  );
}
