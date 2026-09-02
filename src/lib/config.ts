// Konfigurasi pusat NurAlive - semua angka & kontak diubah dari sini.

export const BRAND = {
  name: "NurAlive",
  tagline: "Tetes herbal untuk napas lega sekeluarga",
  domain: "nuralive.id",
  whatsapp: "6285139372490",
  whatsappDisplay: "0851-3937-2490",
  company: "PT Setunggal Syifa Semesta",
  city: "Jakarta, Indonesia",
  csHours: "Senin-Sabtu, 08.00-20.00 WIB",
  bpomNumber: "TR266032421" as string | null,
  // Sumber: aset resmi tim desain (slide 2 hero carousel) yang menampilkan
  // logo Halal Indonesia dengan nomor ini secara eksplisit.
  halalNumber: "ID 35410035265411125" as string | null,
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

// Harga asli dari listing marketplace (Shopee/Tokopedia/TikTok Shop) -
// konsisten di Rp185.000/botol sebagai harga normal, dengan diskon volume
// bertingkat untuk bundle lebih besar. Jangan ubah tanpa mengecek listing
// live dulu, supaya harga di situs ini tidak pernah berbeda dari marketplace.
export const PACKAGES: Pkg[] = [
  {
    id: "isi-1",
    label: "Paket Coba",
    badge: null,
    bottles: 1,
    duration: "±10 hari",
    price: 150_000,
    compareAt: 185_000,
    perks: ["1 botol 30 ml", "Panduan takaran per usia"],
    freeShipping: false,
  },
  {
    id: "isi-2",
    label: "Paket Hemat",
    badge: null,
    bottles: 2,
    duration: "±20 hari",
    price: 285_000,
    compareAt: 370_000,
    perks: ["2 botol 30 ml — cadangan di rumah & tas", "Panduan takaran per usia"],
    freeShipping: false,
  },
  {
    id: "isi-3",
    label: "Paket Rutin",
    badge: "Paling Populer",
    bottles: 3,
    duration: "±1 bulan",
    price: 417_000,
    compareAt: 555_000,
    perks: [
      "3 botol 30 ml — stok sebulan",
      "Panduan takaran lengkap sekeluarga",
      "Prioritas konsultasi WA",
    ],
    freeShipping: false,
  },
  {
    id: "isi-6",
    label: "Paket Keluarga",
    badge: null,
    bottles: 6,
    duration: "±2 bulan",
    price: 810_000,
    compareAt: 1_110_000,
    perks: [
      "6 botol 30 ml — stok 2 bulan",
      "Gratis ongkir seluruh Indonesia",
      "Konsultasi prioritas via WA",
    ],
    freeShipping: true,
  },
  {
    id: "isi-12",
    label: "Paket Stok Maksimal",
    badge: "Nilai Terbaik",
    bottles: 12,
    duration: "±4 bulan",
    price: 1_530_000,
    compareAt: 2_220_000,
    perks: [
      "12 botol 30 ml — stok 4 bulan",
      "Gratis ongkir seluruh Indonesia",
      "Harga per botol paling hemat",
    ],
    freeShipping: true,
  },
];

// Kanal beli eksternal - situs ini adalah hub, transaksi selesai di
// masing-masing platform (bukan checkout internal).
export type SalesChannel = { id: "shopee" | "tokopedia" | "tiktok" | "website"; label: string; url: string };
export const SALES_CHANNELS: SalesChannel[] = [
  {
    id: "shopee",
    label: "Shopee",
    url: "https://shopee.co.id/NurAlive-Herbal-Alam-Habbatussauda-Black-Seed-Oil-Membantu-Daya-Tahan-Tubuh-Meredakan-Batuk-i.1891772998.53015047353?extraParams={%22display_model_id%22%3A406291758313%2C%22model_selection_logic%22%3A3}",
  },
  {
    id: "tokopedia",
    label: "Tokopedia",
    url: "https://tk.tokopedia.com/ZSVcyWtCx/",
  },
  {
    id: "tiktok",
    label: "TikTok Shop",
    url: "https://shop.tiktok.com/view/product/1736868625173218429",
  },
  {
    id: "website",
    label: "Website Kami",
    url: "https://nuralive.jubelio.store/products/nuralive-herbal-alam-habbatussauda-black-seed-oil-membantu-daya-tahan-tubuh-meredakan-batuk",
  },
];

// Banner carousel di atas Hero - aset asli dari tim desain (Musawara Creative),
// masing-masing sudah 2 crop (desktop 1920x720, mobile 750x900) dengan
// headline/CTA yang sudah dibakar ke dalam gambar itu sendiri.
export type HeroSlide = {
  id: string;
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
};
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "jaga-keluarga",
    desktopSrc: "/hero/slide-1-desktop.jpg",
    mobileSrc: "/hero/slide-1-mobile.jpg",
    alt: "Jagain Keluarga Indonesia — #JagaYangJagain",
  },
  {
    id: "legalitas",
    desktopSrc: "/hero/slide-2-desktop.jpg",
    mobileSrc: "/hero/slide-2-mobile.jpg",
    alt: "Terdaftar BPOM, bersertifikat Halal Indonesia, dan konsultasi gratis",
  },
  {
    id: "promo-launching",
    desktopSrc: "/hero/slide-3-desktop.jpg",
    mobileSrc: "/hero/slide-3-mobile.jpg",
    alt: "Jaga 1000 Rumah Pertama — harga launching Rp150.000 dari Rp185.000",
  },
  {
    id: "kanal-beli",
    desktopSrc: "/hero/slide-4-desktop.jpg",
    mobileSrc: "/hero/slide-4-mobile.jpg",
    alt: "NurAlive tersedia di Shopee, Tokopedia, TikTok Shop, website resmi, dan WhatsApp — pilih toko favoritmu",
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
