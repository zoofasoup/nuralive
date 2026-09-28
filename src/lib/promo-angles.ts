// Dua sudut kampanye untuk halaman iklan. Dipisah karena kreatif Meta
// berjalan di angle berbeda (imunitas vs pernapasan) dan pengunjung harus
// mendarat di headline yang sama dengan janji iklannya.
//
// PENTING - koridor klaim: produk terdaftar BPOM sebagai Obat Tradisional
// (TR266032421) dengan klaim label "membantu memelihara daya tahan tubuh"
// dan "membantu meredakan batuk". Positioning internal boleh menyebut
// "imunomodulator", tapi JANGAN pernah menuliskannya sebagai copy -- itu
// klaim mekanisme farmakologis di luar izin edar. Tetap pakai kata
// "membantu"/"memelihara", tidak pernah "menyembuhkan"/"mengobati".

export type PromoAngle = {
  id: "imun" | "napas";
  /** Judul tab, bukan H1. */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Kalimat pembuka di bawah H1 - klaim wajib dalam koridor label. */
  sub: string;
  /** Judul seksi masalah, mengembangkan hook di H1. */
  problemHeading: string;
  problems: { title: string; desc: string }[];
  /** Ditempel ke pesan WhatsApp supaya CS tahu angle mana yang bekerja. */
  waContext: string;
  finalCtaHeading: string;
};

export const PROMO_ANGLES: Record<PromoAngle["id"], PromoAngle> = {
  imun: {
    id: "imun",
    metaTitle: "Jaga Daya Tahan Tubuh Keluarga",
    metaDescription:
      "Keluarga gampang tumbang tiap pergantian cuaca? Tetes herbal habbatussauda & zaitun extra virgin, membantu memelihara daya tahan tubuh sekeluarga. Harga launching Rp150.000 dari Rp185.000.",
    h1: "Keluarga gampang tumbang tiap pergantian cuaca?",
    sub: "Habbatussauda dan zaitun extra virgin — membantu memelihara daya tahan tubuh keluarga setiap hari, bukan cuma saat sudah terlanjur sakit. Satu botol untuk seisi rumah, dari anak 2 tahun sampai lansia.",
    problemHeading:
      "Daya tahan tubuh dibangun tiap hari, bukan didadak saat sudah drop",
    problems: [
      {
        title: "Satu tumbang, serumah ikut tumbang",
        desc: "Anak kena dulu dari sekolah, dua hari kemudian giliran orang tuanya.",
      },
      {
        title: "Baru pulih, seminggu kemudian drop lagi",
        desc: "Badan belum sempat balik fit, sudah harus kembali ke rutinitas padat.",
      },
      {
        title: "Ingat jaga kesehatan cuma pas lagi sakit",
        desc: "Setelah sembuh, kebiasaan menjaga daya tahan tubuh ikut berhenti.",
      },
      {
        title: "Bosan menelan banyak jenis suplemen",
        desc: "Tiap anggota keluarga beda produk, beda takaran, dan repot diteruskan.",
      },
    ],
    waContext: "dari halaman daya tahan tubuh",
    finalCtaHeading: "Mulai jaga daya tahan tubuh keluarga hari ini",
  },
  napas: {
    id: "napas",
    metaTitle: "Batuk Reda Sebentar, Lalu Kambuh Lagi?",
    metaDescription:
      "Batuk reda seminggu lalu kambuh lagi? Tetes herbal habbatussauda & zaitun extra virgin, membantu meredakan batuk sekaligus memelihara daya tahan tubuh. Harga launching Rp150.000 dari Rp185.000.",
    h1: "Batuk reda seminggu, lalu kambuh lagi?",
    sub: "Sirup batuk menutup gejalanya. NurAlive membantu meredakan batuk sekaligus memelihara daya tahan tubuh — dipakai rutin, bukan cuma saat lagi parah. Satu botol untuk seisi rumah, dari anak 2 tahun sampai lansia.",
    problemHeading:
      "Musim hujan, polusi, dan jadwal padat menguji pernapasan keluarga setiap hari",
    problems: [
      {
        title: "Batuk sembuh, lalu balik lagi",
        desc: "Begitu obatnya habis, batuknya muncul lagi dan mengganggu tidur serumah.",
      },
      {
        title: "Tenggorokan serak tiap hari",
        desc: "Berjam-jam di jalan, terpapar asap kendaraan dan debu, membuat pernapasan tidak nyaman.",
      },
      {
        title: "Anak paling cepat kena",
        desc: "Pergantian cuaca dan udara kotor di sekolah langsung terasa di napasnya.",
      },
      {
        title: "Tidak mau terus-terusan obat kimia",
        desc: "Mencari yang bisa dipakai rutin untuk seluruh keluarga, bukan sekadar pereda sesaat.",
      },
    ],
    waContext: "dari halaman batuk & pernapasan",
    finalCtaHeading: "Jaga napas keluarga, mulai hari ini",
  },
};
