import { PACKAGES } from "@/lib/config";
import PricingCard from "@/components/landing/PricingCard";

export default function Pricing() {
  return (
    <section id="paket" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-center text-3xl font-bold text-ink text-balance sm:text-4xl">
          Pilih sesuai kebutuhan rumah
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-ink-soft">
          Semua paket dikirim dari gudang kami, bukan dropship. Harga sudah
          termasuk kemasan aman anti-pecah. Arahkan kursor (atau ketuk di HP)
          ke foto paket untuk memilih toko.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <PricingCard key={p.id} pkg={p} highlight={p.badge === "Paling Populer"} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-soft">
          COD (bayar di tempat) tersedia langsung di Shopee &amp; Tokopedia,
          atau tanya dulu via WhatsApp.
        </p>
      </div>
    </section>
  );
}
