"use client";

import { useState } from "react";
import Image from "next/image";
import { Pkg, formatRupiah } from "@/lib/config";
import ChannelButtons from "@/components/ChannelButtons";
import Icon from "@/components/Icon";

// Foto bundling di-blur saat hover (desktop) atau tap pertama (mobile),
// menyingkap pilihan toko di atasnya - menggantikan baris ChannelButtons
// permanen yang sebelumnya berulang statis di tiap kartu.
export default function PricingCard({ pkg, highlight }: { pkg: Pkg; highlight: boolean }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className={`relative flex flex-col rounded-xl border p-6 ${
        highlight ? "border-forest bg-paper shadow-lg lg:-translate-y-3" : "border-line bg-paper"
      }`}
    >
      {pkg.badge && (
        <span
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md px-4 py-1 text-xs font-bold whitespace-nowrap text-white ${
            highlight ? "bg-forest" : "bg-clay"
          }`}
        >
          {pkg.badge}
        </span>
      )}

      <div
        role="group"
        aria-label={`Pilih toko untuk ${pkg.label}`}
        onClick={() => setRevealed((r) => !r)}
        className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg bg-cream"
      >
        <Image
          src={pkg.image}
          alt={`Poster bundling ${pkg.label}`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          className={`object-cover transition duration-300 ease-out group-hover:scale-105 group-hover:blur-sm group-focus-within:scale-105 group-focus-within:blur-sm ${
            revealed ? "scale-105 blur-sm" : ""
          }`}
        />

        <div
          className={`absolute inset-0 flex items-center justify-center bg-ink/10 p-4 transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto ${
            revealed ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChannelButtons context={pkg.label} className="w-full max-w-[220px] grid-cols-1!" />
        </div>

        <div
          className={`pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-center gap-1.5 rounded-full bg-ink/70 py-1.5 text-xs font-bold text-white backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0 ${
            revealed ? "opacity-0" : "opacity-100"
          }`}
        >
          <Icon name="chevron" className="h-3.5 w-3.5 -rotate-90" aria-hidden />
          Pilih toko
        </div>
      </div>

      <h3 className="font-display mt-5 text-xl font-bold text-ink">{pkg.label}</h3>
      <p className="mt-1 text-sm text-ink-soft">
        {pkg.bottles} botol 30 ml · {pkg.duration}
      </p>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-3xl font-bold text-ink">
          {formatRupiah(pkg.price)}
        </span>
      </div>
      <p className="mt-1 text-sm text-ink-soft">
        <s>{formatRupiah(pkg.compareAt)}</s>{" "}
        <span className="font-bold text-clay-deep">
          hemat {formatRupiah(pkg.compareAt - pkg.price)}
        </span>
      </p>
      <div className="mt-3">
        <span className="inline-block rounded-md bg-clay-pale px-3 py-1 text-sm font-bold text-clay-deep">
          ≈ {formatRupiah(Math.round(pkg.price / pkg.bottles))} / botol
        </span>
      </div>

      <ul className="mt-5 flex-1 space-y-2.5">
        {pkg.perks.map((perk) => (
          <li key={perk} className="flex gap-2.5 text-sm text-ink">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden />
            {perk}
          </li>
        ))}
        {pkg.freeShipping && (
          <li className="flex gap-2.5 text-sm font-bold text-clay-deep">
            <Icon name="truck" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            Gratis ongkir seluruh Indonesia
          </li>
        )}
      </ul>
    </div>
  );
}
