import Link from "next/link";
import { BRAND, waLink } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-deep via-cream to-cream pt-28 pb-14 sm:pt-36">
      {/* Minimal background tanpa elemen AI blur */}

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="fade-up">
          <p className="inline-flex items-center gap-2 border-b border-line bg-transparent pb-2 text-xs font-bold tracking-widest text-leaf-deep uppercase">
            <span className="h-1.5 w-1.5 rounded-sm bg-honey" />
            100% Bahan Alami · Tanpa Pengawet
          </p>

          <h1 className="font-display mt-5 text-4xl leading-[1.12] font-bold text-ink sm:text-5xl lg:text-6xl">
            Napas Lega Sekeluarga,{" "}
            <span className="text-leaf">Cukup Beberapa Tetes</span> Sehari
          </h1>

          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            Tetes herbal minyak <strong>habbatussauda</strong> &amp;{" "}
            <strong>zaitun extra virgin</strong> - membantu meredakan batuk dan
            memelihara daya tahan tubuh, dari anak 2 tahun sampai kakek-nenek.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#paket"
              className="rounded-lg bg-gradient-to-r from-leaf to-leaf-deep px-8 py-4 text-base font-bold text-white shadow-md transition hover:from-leaf-deep hover:to-leaf-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-deep"
            >
              Beli Sekarang
            </Link>
            <Link
              href="#komposisi"
              className="rounded-lg border-2 border-leaf/30 px-8 py-4 text-base font-bold text-leaf transition hover:border-leaf hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-deep"
            >
              Lihat Komposisi
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
            <span className="flex items-center gap-1.5">
              <span aria-hidden className="text-honey">★★★★★</span> disukai keluarga Indonesia
            </span>
            <a
              href={waLink("Halo NurAlive, saya mau tanya dulu sebelum order.")}
              className="font-semibold text-leaf-deep underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-deep"
              target="_blank"
              rel="noopener"
            >
              Konsultasi gratis via WA: {BRAND.whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="fade-scale relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl lg:scale-110 xl:scale-125 origin-bottom lg:-mb-10" style={{ animationDelay: "0.15s" }}>
          {/* Plain <img> with a hand-built srcset: next/image can't generate
              real responsive variants here since output:"export" forces
              images.unoptimized, which drops srcset entirely. */}
          <img
            src="/product-hero.png"
            srcSet="/product-hero-480.png 480w, /product-hero.png 800w"
            sizes="(max-width: 639px) 480px, 800px"
            alt="Kemasan dan botol NurAlive, tetes herbal habbatussauda dan zaitun extra virgin"
            width={800}
            height={533}
            className="relative w-full h-auto drop-shadow-2xl"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
