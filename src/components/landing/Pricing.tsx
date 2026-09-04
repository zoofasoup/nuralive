import { PACKAGES, formatRupiah } from "@/lib/config";
import ChannelButtons from "@/components/ChannelButtons";
import Icon from "@/components/Icon";

export default function Pricing() {
  return (
    <section id="paket" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-center text-3xl font-bold text-ink text-balance sm:text-4xl">
          Pilih sesuai kebutuhan rumah
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-ink-soft">
          Semua paket dikirim dari gudang kami, bukan dropship. Harga sudah
          termasuk kemasan aman anti-pecah.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => {
            const highlight = p.badge === "Paling Populer";
            return (
              <div
                key={p.id}
                className={`relative flex flex-col rounded-xl border p-8 ${
                  highlight
                    ? "border-forest bg-paper shadow-lg lg:-translate-y-3"
                    : "border-line bg-paper"
                }`}
              >
                {p.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md px-4 py-1 text-xs font-bold whitespace-nowrap text-white ${
                      highlight ? "bg-forest" : "bg-clay"
                    }`}
                  >
                    {p.badge}
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-ink">{p.label}</h3>
                <p className="mt-1 text-sm text-ink-soft">
                  {p.bottles} botol 30 ml · {p.duration}
                </p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-ink">
                    {formatRupiah(p.price)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  <s>{formatRupiah(p.compareAt)}</s>{" "}
                  <span className="font-bold text-clay-deep">
                    hemat {formatRupiah(p.compareAt - p.price)}
                  </span>
                </p>
                <div className="mt-3">
                  <span className="inline-block rounded-md bg-clay-pale px-3 py-1 text-sm font-bold text-clay-deep">
                    ≈ {formatRupiah(Math.round(p.price / p.bottles))} / botol
                  </span>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex gap-2.5 text-sm text-ink">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden />
                      {perk}
                    </li>
                  ))}
                  {p.freeShipping && (
                    <li className="flex gap-2.5 text-sm font-bold text-clay-deep">
                      <Icon name="truck" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                      Gratis ongkir seluruh Indonesia
                    </li>
                  )}
                </ul>

                <p className="mt-7 text-center text-xs font-bold tracking-wide text-ink-soft uppercase">
                  Beli {p.label} di
                </p>
                <ChannelButtons context={p.label} className="mt-2.5" />
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-soft">
          COD (bayar di tempat) tersedia langsung di Shopee &amp; Tokopedia,
          atau tanya dulu via WhatsApp.
        </p>
      </div>
    </section>
  );
}
