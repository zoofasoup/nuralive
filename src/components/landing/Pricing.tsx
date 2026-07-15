import Link from "next/link";
import { PACKAGES, formatRupiah, waLink } from "@/lib/config";

export default function Pricing() {
  return (
    <section id="paket" className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-bold tracking-widest text-honey-deep uppercase">
          Paket &amp; Harga
        </p>
        <h2 className="font-display mt-2 text-center text-3xl font-bold text-ink sm:text-4xl">
          Pilih sesuai kebutuhan rumah
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-ink-soft">
          Semua paket dikirim dari gudang kami - bukan dropship. Harga sudah
          termasuk kemasan aman anti-pecah.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => {
            const highlight = p.badge === "Paling Populer";
            return (
              <div
                key={p.id}
                className={`relative flex flex-col rounded-xl border p-8 ${
                  highlight
                    ? "border-leaf bg-cream shadow-md lg:-translate-y-3"
                    : "border-line bg-cream/50"
                }`}
              >
                {p.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md px-4 py-1 text-xs font-bold whitespace-nowrap ${
                      highlight
                        ? "bg-leaf text-white"
                        : "bg-honey text-white"
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
                  <span className="font-display text-3xl font-bold text-leaf-deep">
                    {formatRupiah(p.price)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  <s>{formatRupiah(p.compareAt)}</s>{" "}
                  <span className="font-bold text-honey-deep">
                    hemat {formatRupiah(p.compareAt - p.price)}
                  </span>
                </p>
                <p className="text-xs text-ink-soft">
                  ≈ {formatRupiah(Math.round(p.price / p.bottles))}/botol
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex gap-2.5 text-sm text-ink">
                      <span aria-hidden className="mt-0.5 font-bold text-leaf">✓</span>
                      {perk}
                    </li>
                  ))}
                  {p.freeShipping && (
                    <li className="flex gap-2.5 text-sm font-bold text-honey-deep">
                      <span aria-hidden className="mt-0.5">🚚</span>
                      Gratis ongkir seluruh Indonesia
                    </li>
                  )}
                </ul>

                <a
                  href={waLink(`Halo NurAlive, saya mau pesan ${p.label}`)}
                  target="_blank"
                  rel="noopener"
                  className={`mt-7 block rounded-lg py-3.5 text-center text-sm font-bold transition ${
                    highlight
                      ? "bg-leaf text-white shadow-md hover:bg-leaf-deep"
                      : "border-2 border-leaf/40 text-leaf hover:border-leaf hover:bg-paper"
                  }`}
                >
                  Pesan {p.label}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Bisa juga COD (bayar di tempat) - pilih saat checkout.
        </p>
      </div>
    </section>
  );
}
