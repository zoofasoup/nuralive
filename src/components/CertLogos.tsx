// Logo sertifikasi resmi - direkonstruksi sebagai SVG bersih (bukan foto
// mentah) supaya tajam di semua ukuran. Warna & bentuk mengikuti logo
// resmi masing-masing lembaga (BPOM, BPJPH Halal Indonesia, Kemendag
// Bangga Buatan Indonesia).

export function BpomLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" className={className} role="img" aria-label="Logo Badan POM">
      <g transform="translate(0,-8) scale(0.82)">
        <path
          d="M52 44c14 20 30 30 40 30 14 0 32-28 44-62 2 20-4 46-20 68-12 16-32 28-46 28-16 0-30-14-30-34 0-8 4-18 12-30Z"
          fill="#164A92"
        />
        <path d="M118 22c4 18 0 40-12 58-4 6-9 12-14 16 18-6 34-22 42-42 4-10 5-22 2-32Z" fill="#2CA65A" />
        <path d="M124 16c3 16 0 36-10 52-3 5-7 10-11 14 15-7 28-21 34-38 3-9 3-19-1-28Z" fill="#FFFFFF" />
      </g>
      <text x="10" y="138" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="30" fill="#164A92">
        BADAN
      </text>
      <text x="122" y="138" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="30" fill="#2CA65A">
        POM
      </text>
    </svg>
  );
}

export function HalalIndonesiaLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 128" className={className} role="img" aria-label="Logo Halal Indonesia">
      <g fill="none" stroke="#5B2A73" strokeWidth="6" strokeLinecap="round" transform="translate(10,0)">
        <path d="M12 78V44c0-10 7-18 12-26" />
        <path d="M27 78V30c0-8 6-15 10-21" />
        <path d="M45 78V16" />
        <path d="M63 78V30c0-8-6-15-10-21" />
        <path d="M78 78V44c0-10-7-18-12-26" />
      </g>
      <path d="M24 78h62c0 8-6 15-14 15H38c-8 0-14-7-14-15Z" fill="#5B2A73" />
      <text x="55" y="103" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16" fill="#5B2A73">
        HALAL
      </text>
      <text x="55" y="117" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="8.5" letterSpacing="0.5" fill="#5B2A73">
        INDONESIA
      </text>
    </svg>
  );
}

export function BanggaBuatanIndonesiaLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 132" className={className} role="img" aria-label="Logo Bangga Buatan Indonesia">
      <g stroke="#D8291F" strokeWidth="3.5" strokeLinecap="round" transform="translate(20,0)">
        <path d="M50 4v10" />
        <path d="M30 10l5 9" />
        <path d="M70 10l-5 9" />
        <path d="M16 24l8 7" />
        <path d="M84 24l-8 7" />
      </g>
      <path
        d="M70 82C45 65 34 51 34 36c0-12 9-20 19-20 8 0 14 5 17 11 3-6 9-11 17-11 10 0 19 8 19 20 0 15-11 29-36 46Z"
        fill="#D8291F"
      />
      <path
        d="M53 46c3-3 8-4 12-2l7 3c3 1 6 1 8-1l6-5 4 5-6 5c-4 3-9 4-14 2l-7-3c-2-1-5-1-6 1l-4 4-4-4c-2-2-3-4 4-5Z"
        fill="#FFFFFF"
      />
      <text x="70" y="108" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="11" fill="#2B2B2B">
        BANGGA BUATAN
      </text>
      <text x="70" y="122" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="11" fill="#2B2B2B">
        INDONESIA
      </text>
    </svg>
  );
}
