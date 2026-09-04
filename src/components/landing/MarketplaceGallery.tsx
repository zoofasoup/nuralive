const POSTERS = [
  {
    src: "/marketplace/poster-1.jpg",
    alt: "Kemasan NurAlive lengkap dengan Free Konsultasi, Free Ongkir, COD, dan sertifikasi Official Store, BPOM, Halal",
  },
  {
    src: "/marketplace/poster-2.jpg",
    alt: "Ibu dan anak memakai masker menghadapi musim pancaroba dan polusi udara",
  },
  {
    src: "/marketplace/poster-3.jpg",
    alt: "Manfaat NurAlive - tinggi thymoquinone untuk imun, asam oleat & omega-9 untuk penyerapan nutrisi",
  },
  {
    src: "/marketplace/poster-4.jpg",
    alt: "Komposisi NurAlive - 83% minyak habbatussaudah dan 17% minyak zaitun",
  },
  {
    src: "/marketplace/poster-5.jpg",
    alt: "Panduan dosis NurAlive untuk anak dan dewasa",
  },
  {
    src: "/marketplace/poster-6.jpg",
    alt: "Sertifikat Halal Indonesia dan izin edar BPOM resmi NurAlive",
  },
  {
    src: "/marketplace/poster-7.jpg",
    alt: "Testimoni pengguna NurAlive",
  },
  {
    src: "/marketplace/poster-8.jpg",
    alt: "Ajakan memesan NurAlive sekarang - Free Konsultasi, Free Ongkir, COD",
  },
];

export default function MarketplaceGallery() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display max-w-2xl text-3xl font-bold text-ink text-balance sm:text-4xl">
          Tampilan NurAlive di Marketplace
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          Galeri produk yang sama persis dengan yang kamu lihat di Shopee,
          Tokopedia, dan TikTok Shop. Geser untuk lihat semuanya.
        </p>
      </div>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-[max(1.5rem,calc((100vw-1152px)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {POSTERS.map((p, i) => (
          <img
            key={p.src}
            src={p.src}
            alt={p.alt}
            width={1200}
            height={1200}
            loading={i < 2 ? "eager" : "lazy"}
            className="aspect-square w-[78vw] shrink-0 snap-center rounded-xl border border-line object-cover sm:w-[320px]"
          />
        ))}
      </div>
    </section>
  );
}
