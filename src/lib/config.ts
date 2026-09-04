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
  // Sumber: dokumen sertifikat Halal resmi (poster marketplace slide 6) -
  // dikonfirmasi pemilik sebagai nomor yang benar, bukan yang sempat
  // tertulis di grafis hero carousel (ID35410035265411125, keliru).
  halalNumber: "ID32110022727310625" as string | null,
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
    perks: ["2 botol 30 ml, cadangan di rumah & tas", "Panduan takaran per usia"],
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
      "3 botol 30 ml, stok sebulan",
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
      "6 botol 30 ml, stok 2 bulan",
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
      "12 botol 30 ml, stok 4 bulan",
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
    alt: "Jagain Keluarga Indonesia, #JagaYangJagain",
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
    alt: "Jaga 1000 Rumah Pertama, harga launching Rp150.000 dari Rp185.000",
  },
  {
    id: "kanal-beli",
    desktopSrc: "/hero/slide-4-desktop.jpg",
    mobileSrc: "/hero/slide-4-mobile.jpg",
    alt: "NurAlive tersedia di Shopee, Tokopedia, TikTok Shop, website resmi, dan WhatsApp. Pilih toko favoritmu",
  },
];

// Testimoni asli dari pembeli (sumber: poster marketplace, folder Drive
// ".../Marketplace/Poster Marketplace", Slide 7) - bukan placeholder.
// "Nuralife" pada kutipan pertama dikoreksi jadi "NurAlive" (typo penulis
// kutipan asli, ejaan brand yang benar), isi kutipan lainnya verbatim.
export const TESTIMONIALS = [
  {
    quote: "Awalnya ikhtiar jalur herbal, MaasyaaAllah berkat izin Allah cocok dan berlanjut ke sekian kali penggunaan NurAlive ini. Lebih tenang jg penggunaannya ke anak2.",
    name: "Fitri Y.",
    role: "Ibu rumah tangga, 41 tahun",
  },
  {
    quote: "Sebagai full time Ibu rumah tangga, NurAlive cocok untuk person yang aktivitasnya padat, dan butuh untuk lebih menjaga imunitas.",
    name: "Nurlitha",
    role: "Ibu rumah tangga, 28 tahun",
  },
  {
    quote: "Alhamdulillah semenjak ada NurAlive anak/suami flu batuk langsung tetes ini, sembuh ga perlu nambah obat obatan lagi, yg penting rutin pemakaiannya.",
    name: "Thia",
    role: "Ibu rumah tangga, 39 tahun",
  },
];

export const FAQS = [
  {
    q: "Berapa lama efeknya mulai terasa?",
    a: "Setiap orang berbeda. Umumnya rasa nyaman di tenggorokan terasa dalam beberapa hari pertama pemakaian rutin. Untuk memelihara daya tahan tubuh, disarankan konsumsi konsisten minimal 2-4 minggu.",
  },
  {
    q: "Aman untuk anak usia berapa?",
    a: "Direkomendasikan untuk anak usia 2 tahun ke atas. Untuk penggunaan harian: 1 mL, 3× sehari. Untuk meredakan batuk: 2,5 mL, 3× sehari. Untuk anak di bawah 2 tahun, konsultasikan dulu ke dokter. Penggunaan madu sebagai campuran hanya disarankan untuk anak di atas 2 tahun.",
  },
  {
    q: "Bagaimana cara konsumsinya?",
    a: "1 pipet penuh = 1 mL. Kocok dahulu sebelum digunakan, lalu ambil sesuai dosis dengan pipet droper. Untuk penggunaan harian (usia >12 tahun): 1,5 mL, 3× sehari. Untuk meredakan batuk (usia >12 tahun): 5 mL, 3× sehari. Arahkan pipet ke bagian belakang lidah, atau campurkan dengan ½-1 sdm madu murni. Diminum setelah makan.",
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
