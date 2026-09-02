import Link from "next/link";
import { BRAND, waLink } from "@/lib/config";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section className="bg-paper pt-14 pb-16 sm:pt-20 sm:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div className="fade-up">
          <h1 className="font-display text-4xl leading-[1.1] font-bold text-ink text-balance sm:text-5xl lg:text-[3.4rem]">
            Napas Lega Sekeluarga, Cukup Beberapa Tetes Sehari
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Tetes herbal minyak <strong className="text-ink">habbatussauda</strong> dan{" "}
            <strong className="text-ink">zaitun extra virgin</strong> — membantu
            meredakan batuk dan memelihara daya tahan tubuh, dari anak 2 tahun
            sampai kakek-nenek.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#paket"
              className="rounded-lg bg-clay px-8 py-4 text-base font-bold text-white transition hover:bg-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep"
            >
              Beli Sekarang
            </Link>
            <Link
              href="#komposisi"
              className="rounded-lg border-2 border-forest/25 px-8 py-4 text-base font-bold text-forest transition hover:border-forest hover:bg-forest-pale/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep"
            >
              Lihat Komposisi
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
            <span className="flex items-center gap-1.5">
              <span aria-hidden className="flex gap-0.5 text-clay">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </span>
              disukai keluarga Indonesia
            </span>
            <a
              href={waLink("Halo NurAlive, saya mau tanya dulu sebelum order.")}
              className="font-semibold text-forest-deep underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep"
              target="_blank"
              rel="noopener"
            >
              Konsultasi gratis via WA: {BRAND.whatsappDisplay}
            </a>
          </div>
        </div>

        <div
          className="fade-scale relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl"
          style={{ animationDelay: "0.15s" }}
        >
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
            className="relative w-full h-auto"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
