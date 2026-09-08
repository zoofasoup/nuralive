import type { Metadata } from "next";
import Image from "next/image";
import { BRAND, PACKAGES, formatRupiah, waLink } from "@/lib/config";
import { BpomLogo, HalalIndonesiaLogo, BanggaBuatanIndonesiaLogo } from "@/components/CertLogos";
import Icon from "@/components/Icon";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import PromoWhatsAppButton from "@/components/promo/PromoWhatsAppButton";

export const metadata: Metadata = {
  title: "Promo Launching",
  description:
    "Harga launching NurAlive: Rp150.000 dari Rp185.000. Tetes herbal habbatussauda & zaitun untuk seluruh keluarga.",
  robots: { index: false, follow: false },
};

// Halaman promo khusus traffic iklan - satu penawaran, satu aksi (WhatsApp),
// tanpa navbar/footer/ticker situs utama supaya pengunjung tidak teralihkan.
// Standalone dari page.tsx utama, tapi mewarisi sistem visual yang sama
// (lihat DESIGN.md) - bukan dunia visual baru.

const OFFER = PACKAGES.find((p) => p.id === "isi-1")!;
const WA_MESSAGE = `Halo NurAlive, saya mau order Paket Coba (1 botol) harga promo ${formatRupiah(OFFER.price)}.`;
const WA_HREF = waLink(WA_MESSAGE);

const FACTS = [
  { icon: "truck" as const, text: "Kirim seluruh Indonesia, COD tersedia" },
  { icon: "chat" as const, text: `Konsultasi gratis via WhatsApp, ${BRAND.csHours}` },
  { icon: "shield" as const, text: "Botol pecah atau rusak, diganti tanpa ribet" },
];

export default function PromoPage() {
  return (
    <main className="bg-paper">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-16 sm:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h1 className="font-display text-4xl font-bold text-balance text-ink sm:text-5xl">
              Satu botol kecil, untuk menjaga yang kamu jagain
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
              Tetes herbal habbatussauda dan zaitun extra virgin. Membantu
              meredakan batuk dan memelihara daya tahan tubuh, untuk anak
              usia 2 tahun sampai lansia, dalam satu botol yang sama.
              <span className="block font-display font-semibold text-forest-deep">
                #JagaYangJagain
              </span>
            </p>

            <div className="mt-6 flex flex-wrap items-baseline gap-3 rounded-xl border border-line bg-cream px-5 py-4">
              <span className="font-display text-3xl font-bold text-ink sm:text-4xl">
                {formatRupiah(OFFER.price)}
              </span>
              <span className="text-lg text-ink-soft">
                <s>{formatRupiah(OFFER.compareAt)}</s>
              </span>
              <span className="rounded-md bg-clay-pale px-2.5 py-1 text-xs font-bold text-clay-deep">
                Harga Launching
              </span>
            </div>

            <PromoWhatsAppButton
              href={WA_HREF}
              value={OFFER.price}
              className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-lg bg-forest px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep sm:w-auto"
            >
              <Icon name="chat" className="h-5 w-5" aria-hidden />
              Order via WhatsApp Sekarang
            </PromoWhatsAppButton>
            <p className="mt-3 text-xs text-ink-soft">
              1 botol 30 ml, ±10 hari pemakaian. CS balas cepat, {BRAND.csHours}.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-cream">
            <Image
              src="/product-hero.png"
              alt="Kemasan dan botol NurAlive, tetes herbal habbatussauda dan zaitun"
              fill
              sizes="(min-width: 1024px) 500px, 90vw"
              className="object-contain p-6"
              priority
            />
          </div>
        </div>
      </section>

      {/* TRUST FACTS */}
      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
          {FACTS.map((f) => (
            <div key={f.text} className="flex items-center gap-3 py-5 sm:justify-center sm:px-4">
              <Icon name={f.icon} className="h-5 w-5 shrink-0 text-forest" aria-hidden />
              <p className="text-sm font-medium text-ink">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPOSITION */}
      <section className="bg-forest-deep py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-balance text-white sm:text-4xl">
            Dua bahan saja, tanpa campuran kimia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            80% minyak habbatussauda (cold-pressed, kaya thymoquinone) dan
            20% minyak zaitun extra-virgin. Sudah dipakai secara tradisional
            sejak ribuan tahun, tinggal tetes tanpa takar sendok.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/15 p-6 text-left">
              <Icon name="seed" className="h-7 w-7 text-clay-pale" aria-hidden />
              <p className="font-display mt-3 font-bold text-white">
                Minyak Habbatussauda
              </p>
              <p className="mt-1 text-sm text-white/70">
                Nigella sativa - membantu melegakan tenggorokan dan
                pernapasan.
              </p>
            </div>
            <div className="rounded-xl border border-white/15 p-6 text-left">
              <Icon name="drop" className="h-7 w-7 text-clay-pale" aria-hidden />
              <p className="font-display mt-3 font-bold text-white">
                Minyak Zaitun Extra Virgin
              </p>
              <p className="mt-1 text-sm text-white/70">
                Perasan pertama - menghaluskan rasa dan menenangkan
                tenggorokan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* GUARANTEE */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-bold text-balance text-ink sm:text-4xl">
          Legal, teregistrasi, dan bergaransi
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 rounded-xl border border-line bg-cream p-8 sm:grid-cols-3 sm:p-10">
          <div className="flex flex-col items-center gap-2">
            <BpomLogo className="h-14 w-auto" />
            {BRAND.bpomNumber && <p className="text-xs text-ink-soft">{BRAND.bpomNumber}</p>}
          </div>
          <div className="flex flex-col items-center gap-2">
            <HalalIndonesiaLogo className="h-14 w-auto" />
            {BRAND.halalNumber && <p className="text-xs text-ink-soft">{BRAND.halalNumber}</p>}
          </div>
          <div className="col-span-2 flex flex-col items-center gap-2 sm:col-span-1">
            <BanggaBuatanIndonesiaLogo className="h-14 w-auto" />
            <p className="text-xs text-ink-soft">Diproduksi {BRAND.company}</p>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm text-ink-soft">
          Botol pecah, bocor, atau paket tidak sesuai pesanan? Kirim foto ke
          CS maksimal 1×24 jam setelah diterima, kami kirim penggantinya
          tanpa biaya.
        </p>
      </section>

      <Faq />

      {/* FINAL CTA */}
      <section className="bg-forest px-4 py-14 text-center sm:px-6 sm:py-20">
        <h2 className="font-display mx-auto max-w-lg text-3xl font-bold text-balance text-white sm:text-4xl">
          Jaga yang kamu jagain, mulai hari ini
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/80">
          Harga launching {formatRupiah(OFFER.price)}, dari {formatRupiah(OFFER.compareAt)}.
        </p>
        <PromoWhatsAppButton
          href={WA_HREF}
          value={OFFER.price}
          className="mx-auto mt-6 flex w-full max-w-xs items-center justify-center gap-2.5 rounded-lg bg-white px-6 py-4 text-base font-bold text-forest-deep shadow-lg transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
        >
          <Icon name="chat" className="h-5 w-5" aria-hidden />
          Order via WhatsApp
        </PromoWhatsAppButton>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 backdrop-blur sm:hidden">
        <PromoWhatsAppButton
          href={WA_HREF}
          value={OFFER.price}
          className="flex items-center justify-center gap-2 rounded-lg bg-clay py-3.5 text-center text-sm font-bold text-white shadow-lg transition hover:bg-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep"
        >
          Order Sekarang · {formatRupiah(OFFER.price)}
        </PromoWhatsAppButton>
      </div>
      <div className="h-20 sm:hidden" aria-hidden />
    </main>
  );
}
