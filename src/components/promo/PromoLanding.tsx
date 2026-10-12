import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import {
  BRAND,
  PACKAGES,
  SALES_CHANNELS,
  DOSAGE,
  DELIVERABLES,
  formatRupiah,
  waLink,
} from "@/lib/config";
import type { PromoAngle } from "@/lib/promo-angles";
import { BpomLogo, HalalIndonesiaLogo, BanggaBuatanIndonesiaLogo } from "@/components/CertLogos";
import Icon, { IconName } from "@/components/Icon";
import Testimonials from "@/components/landing/Testimonials";
import { Comparison } from "@/components/landing/Sections";
import Faq from "@/components/landing/Faq";
import TrackedLink from "@/components/TrackedLink";
import { orderParams, type Channel } from "@/lib/meta-track";

// Badan halaman iklan yang dipakai bersama oleh semua angle. Yang berbeda
// per angle hanya bagian yang menempel pada janji iklan (H1, subcopy,
// seksi masalah, CTA penutup); penawaran, bukti, legalitas, dan FAQ sama
// supaya tidak ada dua versi fakta yang bisa berbeda.
//
// Dua CTA: WhatsApp (utama) dan webstore resmi. Keduanya menembak Lead
// (pixel + CAPI), dibedakan lewat parameter channel/placement; angle ikut
// dikirim sebagai parameter supaya hasil tiap landing page bisa dipisah.
// Tanpa navbar/footer/ticker situs utama supaya pengunjung tidak teralihkan.

const OFFER = PACKAGES.find((p) => p.id === "isi-1")!;
const WEBSTORE = SALES_CHANNELS.find((c) => c.id === "website")!;

const FACTS = [
  { icon: "truck" as const, text: "Kirim seluruh Indonesia, order sebelum 15.00 WIB dikirim hari ini" },
  { icon: "chat" as const, text: `Konsultasi gratis via WhatsApp, ${BRAND.csHours}` },
  { icon: "shield" as const, text: "Botol pecah atau rusak, diganti tanpa ribet" },
];

export default function PromoLanding({ angle }: { angle: PromoAngle }) {
  const waHref = waLink(
    `Halo NurAlive, saya mau order Paket Coba (1 botol) harga promo ${formatRupiah(OFFER.price)} (${angle.waContext}).`
  );
  const lead = (channel: Channel, placement: string) => ({
    ...orderParams({
      channel,
      placement,
      value: OFFER.price,
      packageId: OFFER.id,
      contentName: OFFER.label,
    }),
    angle: angle.id,
  });

  return (
    // Halaman iklan ini dipakai hampir seluruhnya dari HP, jadi di desktop
    // pun isinya dikunci satu kolom selebar tablet - bukan dilebarkan sampai
    // max-w-6xl seperti situs utama. Semua seksi di bawah memakai max-w
    // masing-masing, tapi tercapai di sini karena parent-nya lebih sempit.
    <main className="mx-auto max-w-3xl bg-paper lg:border-x lg:border-line">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-16 sm:pb-16">
        <div className="grid items-center gap-10">
          <div>
            <h1 className="font-display text-4xl font-bold text-balance text-ink sm:text-5xl">
              {angle.h1}
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
              {angle.sub}
              <span className="block font-display font-semibold text-forest-deep">
                #JagaYangJagain
              </span>
            </p>

            <div className="mt-6 rounded-xl border border-line bg-cream px-5 py-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  {formatRupiah(OFFER.price)}
                </span>
                <span className="text-lg text-ink-soft">
                  <s>{formatRupiah(OFFER.compareAt)}</s>
                </span>
                <span className="rounded-md bg-clay-pale px-2.5 py-1 text-xs font-bold text-clay-deep">
                  Hemat {formatRupiah(OFFER.compareAt - OFFER.price)}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-soft">
                Harga promo launching{" "}
                <span className="font-semibold text-ink">Jaga 1000 Rumah Pertama</span>.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={waHref}
                event="Lead"
                params={lead("whatsapp", "hero")}
                className="flex items-center justify-center gap-2.5 rounded-lg bg-forest px-6 py-4 text-base font-bold whitespace-nowrap text-white shadow-lg transition hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep"
              >
                <Icon name="whatsapp" className="h-5 w-5" aria-hidden />
                Pesan via WhatsApp
              </TrackedLink>
              <TrackedLink
                href={WEBSTORE.url}
                event="Lead"
                params={lead("webstore", "hero")}
                className="flex items-center justify-center gap-2.5 rounded-lg border-2 border-forest px-6 py-4 text-base font-bold whitespace-nowrap text-forest-deep transition hover:bg-forest/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep"
              >
                <Icon name="cart" className="h-5 w-5" aria-hidden />
                Beli di Website Resmi
              </TrackedLink>
            </div>
          </div>

          <PhotoPlaceholder className="aspect-[4/3] w-full rounded-xl" />
        </div>
      </section>

      {/* TRUST FACTS */}
      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line px-4 sm:px-6">
          {FACTS.map((f) => (
            <div key={f.text} className="flex items-center gap-3 py-5">
              <Icon name={f.icon} className="h-5 w-5 shrink-0 text-forest" aria-hidden />
              <p className="text-sm font-medium text-ink">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MASALAH - mengembangkan hook di H1 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8">
          <h2 className="font-display text-3xl font-bold text-ink text-balance sm:text-4xl">
            {angle.problemHeading}
          </h2>
          <ul className="divide-y divide-line">
            {angle.problems.map((p) => (
              <li key={p.title} className="flex gap-4 py-5 first:pt-0">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" aria-hidden />
                <div>
                  <p className="font-bold text-ink">{p.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      {/* COMPOSITION */}
      <section className="bg-forest-deep py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-balance text-white sm:text-4xl">
            Dua bahan saja, tanpa tambahan bahan kimia
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
          <p className="mx-auto mt-8 max-w-2xl text-xs text-white/50">
            NurAlive adalah suplemen kesehatan, bukan obat, dan tidak
            dimaksudkan untuk mendiagnosis atau menyembuhkan penyakit. Bila
            keluhan berlanjut, hubungi dokter.
          </p>
        </div>
      </section>

      {/* CARA PAKAI - menjawab keberatan praktis sekaligus membuktikan
          klaim "tinggal tetes"; angka takaran bersumber dari PDF resmi. */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-bold text-ink text-balance sm:text-4xl">
          Tinggal tetes, tanpa takar sendok
        </h2>
        <p className="mt-3 text-ink-soft">
          Tiga langkah yang sama untuk seisi rumah — {DOSAGE.unit}.
        </p>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {DOSAGE.steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-line bg-paper p-6">
              <span className="font-display text-2xl font-bold text-clay-deep">
                {i + 1}
              </span>
              <p className="mt-2 font-bold text-ink">{s.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-cream">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="p-4 font-semibold text-ink-soft">Usia</th>
                <th className="p-4 font-semibold text-ink-soft">Pemakaian harian</th>
                <th className="p-4 font-semibold text-ink-soft">Saat batuk</th>
              </tr>
            </thead>
            <tbody>
              {DOSAGE.rows.map((r) => (
                <tr key={r.usia} className="border-b border-line last:border-0">
                  <td className="p-4 font-bold text-ink">{r.usia}</td>
                  <td className="p-4 text-ink">{r.harian}</td>
                  <td className="p-4 text-ink">{r.batuk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-soft">{DOSAGE.note}</p>
      </section>

      <Comparison />

      {/* ISI PAKET - penawaran dibuat konkret, bukan cuma angka harga. */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-bold text-ink text-balance sm:text-4xl">
          Yang kamu terima
        </h2>
        <ul className="mt-8 divide-y divide-line rounded-xl border border-line bg-paper">
          {DELIVERABLES.map((d) => (
            <li key={d.title} className="flex items-start gap-4 p-5 sm:p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-pale">
                <Icon name={d.icon as IconName} className="h-5 w-5 text-forest-deep" aria-hidden />
              </span>
              <div>
                <p className="font-bold text-ink">{d.title}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{d.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* GUARANTEE */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-bold text-balance text-ink sm:text-4xl">
          Terdaftar BPOM, bersertifikat Halal, dan bergaransi
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
          {angle.finalCtaHeading}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/80">
          Promo Jaga 1000 Rumah Pertama: {formatRupiah(OFFER.price)} dari{" "}
          {formatRupiah(OFFER.compareAt)}, hemat{" "}
          {formatRupiah(OFFER.compareAt - OFFER.price)}.
        </p>
        <div className="mx-auto mt-6 flex max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <TrackedLink
            href={waHref}
            event="Lead"
            params={lead("whatsapp", "final-cta")}
            className="flex items-center justify-center gap-2.5 rounded-lg bg-white px-6 py-4 text-base font-bold whitespace-nowrap text-forest-deep shadow-lg transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Icon name="whatsapp" className="h-5 w-5" aria-hidden />
            Pesan via WhatsApp
          </TrackedLink>
          <TrackedLink
            href={WEBSTORE.url}
            event="Lead"
            params={lead("webstore", "final-cta")}
            className="flex items-center justify-center gap-2.5 rounded-lg border-2 border-white/70 px-6 py-4 text-base font-bold whitespace-nowrap text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Icon name="cart" className="h-5 w-5" aria-hidden />
            Beli di Website Resmi
          </TrackedLink>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 backdrop-blur sm:hidden">
        <TrackedLink
          href={waHref}
          event="Lead"
          params={lead("whatsapp", "sticky")}
          className="flex items-center justify-center gap-2 rounded-lg bg-clay py-3.5 text-center text-sm font-bold text-white shadow-lg transition hover:bg-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep"
        >
          Pesan Sekarang · {formatRupiah(OFFER.price)}
        </TrackedLink>
      </div>
      <div className="h-20 sm:hidden" aria-hidden />
    </main>
  );
}
