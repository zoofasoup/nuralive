// Konfigurasi pusat NurAlive - semua angka & kontak diubah dari sini.

export const BRAND = {
  name: "NurAlive",
  tagline: "Tetes herbal untuk napas lega sekeluarga",
  domain: "nuralive.id",
  // Nomor WA CS - ganti dengan nomor asli sebelum launch.
  whatsapp: "6281200000000",
  whatsappDisplay: "0812-0000-0000",
  company: "PT Setunggal Syifa Semesta",
  city: "Jakarta, Indonesia",
  csHours: "Senin-Sabtu, 08.00-20.00 WIB",
  // Sertifikasi: biarkan null sampai nomornya RESMI keluar.
  // Selama null, badge/section sertifikasi tidak dirender sama sekali
  // (pelajaran dari Habi yang menampilkan "POM TR XXX XXX XXX").
  bpomNumber: null as string | null,
  halalNumber: null as string | null,
};

export type Pkg = {
  id: string;
  label: string;
  badge: string | null;
  bottles: number;
  duration: string;
  price: number; // harga jual (Rp)
  compareAt: number; // harga normal untuk coretan
  perks: string[];
  freeShipping: boolean;
};

export const PACKAGES: Pkg[] = [
  {
    id: "coba-1",
    label: "Paket Coba",
    badge: null,
    bottles: 1,
    duration: "±10 hari",
    price: 175_000,
    compareAt: 195_000,
    perks: ["1 botol 30 ml", "Panduan takaran per usia"],
    freeShipping: false,
  },
  {
    id: "hemat-3",
    label: "Paket Rutin",
    badge: "Paling Populer",
    bottles: 3,
    duration: "±1 bulan",
    price: 465_000,
    compareAt: 525_000,
    perks: [
      "3 botol 30 ml - stok sebulan",
      "Gratis e-book resep sehat keluarga",
      "Prioritas konsultasi WA",
    ],
    freeShipping: false,
  },
  {
    id: "keluarga-6",
    label: "Paket Keluarga",
    badge: "Nilai Terbaik",
    bottles: 6,
    duration: "±2 bulan",
    price: 870_000,
    compareAt: 1_050_000,
    perks: [
      "6 botol 30 ml - stok 2 bulan",
      "Gratis ongkir seluruh Indonesia",
      "E-book + konsultasi prioritas",
    ],
    freeShipping: true,
  },
];

// Order bump di checkout: tambahan 1 botol dengan potongan.
export const ORDER_BUMP = {
  label: "Tambah 1 botol lagi - diskon 20%",
  detail: "Buat cadangan di tas atau dibagikan ke orang tua.",
  price: 140_000,
};

// Zona ongkir sederhana (flat per zona). Ganti dengan API Biteship/RajaOngkir
// saat volume naik - struktur data sudah kompatibel.
export type ShippingZone = { id: string; label: string; cost: number };
export const SHIPPING_ZONES: ShippingZone[] = [
  { id: "jabodetabek", label: "Jabodetabek", cost: 12_000 },
  { id: "jawa", label: "Pulau Jawa (luar Jabodetabek)", cost: 18_000 },
  { id: "sumatera-bali", label: "Sumatera / Bali / NTB", cost: 28_000 },
  { id: "kalimantan-sulawesi", label: "Kalimantan / Sulawesi", cost: 35_000 },
  { id: "timur", label: "NTT / Maluku / Papua", cost: 48_000 },
];

// Gratis ongkir otomatis di atas nominal ini (selain paket freeShipping).
export const FREE_SHIPPING_MIN = 500_000;

export type PaymentMethod = { id: string; label: string; note: string };
export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "transfer",
    label: "Transfer Bank (BCA)",
    note: "Nomor rekening dikirim di halaman konfirmasi",
  },
  {
    id: "qris",
    label: "QRIS (semua e-wallet & m-banking)",
    note: "Scan kode QR di halaman konfirmasi",
  },
  {
    id: "cod",
    label: "COD - Bayar di Tempat",
    note: "Bayar tunai ke kurir saat paket tiba",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Anak saya batuk tiap hujan turun. Setiap pagi kami tambahkan satu sendok madu ke NurAlive, dan dia tidur nyenyak lagi.",
    name: "Rina Andini",
    role: "Ibu dua anak, Bekasi",
    segment: "anak",
  },
  {
    quote: "Kerja di lapangan, tiap hari terpapar debu & asap. Sekarang tenggorokan tidak lagi terasa serak, napas lebih lega.",
    name: "Dimas Pratama",
    role: "Supervisor proyek, Jakarta",
    segment: "polusi",
  },
  {
    quote: "Rasanya agak kuat di awal, tapi setelah dicampur madu, anak‑anak suka dan tidak komplain lagi.",
    name: "Sari Wahyu",
    role: "Guru SD, Depok",
    segment: "anak",
  },
  {
    quote: "Saya dan suami minum tiap pagi sebelum kerja. Badan terasa lebih bertenaga, tidak sering lemah meski agenda padat.",
    name: "Maya Kurnia",
    role: "Karyawan swasta, Tangerang",
    segment: "keluarga",
  },
  {
    quote: "Pengiriman cepat, kemasan cukup tebal. Saya langsung pesan lagi lewat situs karena sangat puas.",
    name: "Fajar Haris",
    role: "Wiraswasta, Surabaya",
    segment: "keluarga",
  },
  {
    quote: "Sudah jadi barang wajib di rumah. Satu botol untuk saya, satu lagi untuk orang tua, praktis dan mudah dipakai.",
    name: "Nadia Rizka",
    role: "Apoteker, Bandung",
    segment: "keluarga",
  },
];

export const FAQS = [
  {
    q: "Berapa lama efeknya mulai terasa?",
    a: "Setiap orang berbeda. Umumnya rasa nyaman di tenggorokan terasa dalam beberapa hari pertama pemakaian rutin. Untuk memelihara daya tahan tubuh, disarankan konsumsi konsisten minimal 2-4 minggu.",
  },
  {
    q: "Aman untuk anak usia berapa?",
    a: "Direkomendasikan untuk anak usia 2 tahun ke atas: 2-3 tetes, 2× sehari, dicampur satu sendok madu murni atau air hangat. Untuk anak di bawah 2 tahun, konsultasikan dulu ke dokter.",
  },
  {
    q: "Bagaimana cara konsumsinya?",
    a: "Dewasa: 5-10 tetes, 2-3× sehari, langsung diteteskan ke mulut atau dicampur madu/air hangat. Diminum setelah makan. Kocok botol sebelum digunakan.",
  },
  {
    q: "Boleh diminum bersama obat dokter?",
    a: "NurAlive adalah suplemen herbal, bukan pengganti obat. Beri jarak 1-2 jam dari obat dokter, dan konsultasikan ke dokter bila Anda dalam pengobatan rutin.",
  },
  {
    q: "Apakah ada efek samping?",
    a: "Terbuat dari bahan alami. Rasa minyak habbatussauda memang khas dan cukup kuat di awal - mencampurnya dengan madu murni membuatnya jauh lebih nyaman. Hentikan pemakaian bila muncul reaksi alergi.",
  },
  {
    q: "Bagaimana pengiriman dan COD?",
    a: "Pesanan sebelum pukul 15.00 WIB dikirim di hari yang sama (Senin-Sabtu). COD tersedia di semua area jangkauan kurir. Nomor resi dikirim via WhatsApp.",
  },
  {
    q: "Ada garansi kalau paket rusak?",
    a: "Ada. Kalau botol pecah atau paket tidak sesuai, foto dan kirim ke WhatsApp CS kami dalam 1×24 jam setelah diterima - kami ganti tanpa ribet.",
  },
];

export const PROBLEMS = [
  {
    title: "Anak terus batuk saat musim hujan",
    desc: "Setelah sembuh, batuk balik lagi dan mengganggu tidur seluruh keluarga.",
  },
  {
    title: "Tenggorokan terasa serak tiap hari",
    desc: "Berjam‑jam di jalan, terpapar asap kendaraan dan debu, membuat pernapasan tidak nyaman.",
  },
  {
    title: "Kelelahan berulang pada sore",
    desc: "Jadwal padat membuat badan cepat lelah, terasa lemah dan susah fokus.",
  },
  {
    title: "Mau hindari obat kimia",
    desc: "Mencari alternatif alami yang simpel untuk menjaga kesehatan keluarga.",
  },
];

export const PERSONAS = [
  {
    title: "Butuh stamina stabil",
    desc: "Jadwal padat bikin badan cepat lelah di sore hari.",
    icon: "leaf",
  },
  {
    title: "Sering di luar & jalan",
    desc: "Commuter, pekerja lapangan, suka bepergian.",
    icon: "truck",
  },
  {
    title: "Anak mudah batuk",
    desc: "Muncul saat musim hujan atau perubahan cuaca.",
    icon: "kid",
  },
  {
    title: "Terpapar polusi tiap hari",
    desc: "Tinggal atau kerja di kota dengan udara tidak bersih.",
    icon: "city",
  },
  {
    title: "Tenggorokan tidak nyaman",
    desc: "Serak, gatal, batuk berkepanjangan.",
    icon: "breath",
  },
];

export function formatRupiah(n: number): string {
  return "Rp " + n.toLocaleString("id-ID");
}

export function waLink(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
