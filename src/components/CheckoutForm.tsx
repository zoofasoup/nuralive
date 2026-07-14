"use client";

import { useMemo, useState } from "react";
import {
  PACKAGES,
  ORDER_BUMP,
  SHIPPING_ZONES,
  PAYMENT_METHODS,
  FREE_SHIPPING_MIN,
  formatRupiah,
} from "@/lib/config";

export default function CheckoutForm({ initialPackage }: { initialPackage: string }) {
  const [packageId, setPackageId] = useState(
    PACKAGES.some((p) => p.id === initialPackage) ? initialPackage : PACKAGES[1].id
  );
  const [bump, setBump] = useState(false);
  const [zone, setZone] = useState(SHIPPING_ZONES[0].id);
  const [payment, setPayment] = useState(PAYMENT_METHODS[0].id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pkg = PACKAGES.find((p) => p.id === packageId)!;

  const totals = useMemo(() => {
    const subtotal = pkg.price + (bump ? ORDER_BUMP.price : 0);
    const zoneCost = SHIPPING_ZONES.find((z) => z.id === zone)?.cost ?? 0;
    const freeShipping = pkg.freeShipping || subtotal >= FREE_SHIPPING_MIN;
    const shipping = freeShipping ? 0 : zoneCost;
    return { subtotal, shipping, total: subtotal + shipping, freeShipping };
  }, [pkg, bump, zone]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9 || digits.length > 15) {
      setError("Nomor WhatsApp belum valid — contoh: 081234567890.");
      return;
    }
    if (address.trim().length < 15) {
      setError("Alamat terlalu singkat — tulis lengkap sampai kecamatan & kode pos ya.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: digits,
          address: address.trim(),
          zone,
          note: note.trim() || null,
          packageId,
          bump,
          payment,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Terjadi kesalahan. Coba lagi ya.");
        setSubmitting(false);
        return;
      }
      window.location.href = `/terima-kasih/${data.order.id}`;
    } catch {
      setError("Gangguan jaringan — periksa koneksi lalu coba lagi.");
      setSubmitting(false);
    }
  }

  const inputCls =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-leaf focus:ring-2 focus:ring-leaf/20 focus:outline-none";

  return (
    <form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-8">
        {/* 1. Paket */}
        <fieldset>
          <legend className="font-display text-lg font-bold text-ink">1 · Pilih paket</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {PACKAGES.map((p) => (
              <label
                key={p.id}
                className={`cursor-pointer rounded-2xl border-2 p-4 transition ${
                  packageId === p.id
                    ? "border-leaf bg-leaf/5"
                    : "border-line bg-paper hover:border-leaf/40"
                }`}
              >
                <input
                  type="radio"
                  name="paket"
                  value={p.id}
                  checked={packageId === p.id}
                  onChange={() => setPackageId(p.id)}
                  className="sr-only"
                />
                <p className="text-sm font-bold text-ink">{p.label}</p>
                <p className="text-xs text-ink-soft">{p.bottles} botol · {p.duration}</p>
                <p className="mt-2 font-display font-bold text-leaf-deep">
                  {formatRupiah(p.price)}
                </p>
                {p.badge && (
                  <span className="mt-1 inline-block rounded-full bg-honey-pale px-2 py-0.5 text-[10px] font-bold text-honey-deep">
                    {p.badge}
                  </span>
                )}
              </label>
            ))}
          </div>

          {/* Order bump */}
          <label
            className={`mt-4 flex cursor-pointer items-start gap-3 rounded-2xl border-2 border-dashed p-4 transition ${
              bump ? "border-honey bg-honey-pale" : "border-honey/50 bg-paper"
            }`}
          >
            <input
              type="checkbox"
              checked={bump}
              onChange={(e) => setBump(e.target.checked)}
              className="mt-1 h-4 w-4 accent-honey"
            />
            <span>
              <span className="text-sm font-bold text-ink">
                {ORDER_BUMP.label} — {formatRupiah(ORDER_BUMP.price)}
              </span>
              <span className="block text-xs text-ink-soft">{ORDER_BUMP.detail}</span>
            </span>
          </label>
        </fieldset>

        {/* 2. Data penerima */}
        <fieldset className="space-y-4">
          <legend className="font-display text-lg font-bold text-ink">2 · Data penerima</legend>
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
              Nama lengkap
            </label>
            <input
              id="name" required minLength={3} value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama penerima paket" className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
              Nomor WhatsApp aktif
            </label>
            <input
              id="phone" required type="tel" inputMode="tel" value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0812xxxxxxxx" className={inputCls}
            />
            <p className="mt-1 text-xs text-ink-soft">
              Resi & konfirmasi dikirim ke nomor ini.
            </p>
          </div>
          <div>
            <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-ink">
              Alamat lengkap
            </label>
            <textarea
              id="address" required rows={3} value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Jalan, RT/RW, kelurahan, kecamatan, kota, kode pos"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="zone" className="mb-1.5 block text-sm font-semibold text-ink">
              Wilayah pengiriman
            </label>
            <select
              id="zone" value={zone} onChange={(e) => setZone(e.target.value)}
              className={inputCls}
            >
              {SHIPPING_ZONES.map((z) => (
                <option key={z.id} value={z.id}>
                  {z.label} — {formatRupiah(z.cost)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="note" className="mb-1.5 block text-sm font-semibold text-ink">
              Catatan (opsional)
            </label>
            <input
              id="note" value={note} onChange={(e) => setNote(e.target.value)}
              placeholder="Patokan alamat, titip ke satpam, dll." className={inputCls}
            />
          </div>
        </fieldset>

        {/* 3. Pembayaran */}
        <fieldset>
          <legend className="font-display text-lg font-bold text-ink">3 · Cara bayar</legend>
          <div className="mt-4 space-y-3">
            {PAYMENT_METHODS.map((m) => (
              <label
                key={m.id}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition ${
                  payment === m.id
                    ? "border-leaf bg-leaf/5"
                    : "border-line bg-paper hover:border-leaf/40"
                }`}
              >
                <input
                  type="radio" name="payment" value={m.id}
                  checked={payment === m.id}
                  onChange={() => setPayment(m.id)}
                  className="mt-1 h-4 w-4 accent-leaf"
                />
                <span>
                  <span className="text-sm font-bold text-ink">{m.label}</span>
                  <span className="block text-xs text-ink-soft">{m.note}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Ringkasan */}
      <aside className="h-fit rounded-3xl border border-line bg-paper p-6 lg:sticky lg:top-24">
        <h2 className="font-display text-lg font-bold text-ink">Ringkasan pesanan</h2>
        <dl className="mt-4 space-y-2.5 text-sm">
          <div className="flex justify-between">
            <dt className="text-ink-soft">{pkg.label} ({pkg.bottles} botol)</dt>
            <dd className="font-semibold text-ink">{formatRupiah(pkg.price)}</dd>
          </div>
          {bump && (
            <div className="flex justify-between">
              <dt className="text-ink-soft">Botol tambahan (−20%)</dt>
              <dd className="font-semibold text-ink">{formatRupiah(ORDER_BUMP.price)}</dd>
            </div>
          )}
          <div className="flex justify-between">
            <dt className="text-ink-soft">Ongkir</dt>
            <dd className="font-semibold text-ink">
              {totals.freeShipping ? (
                <span className="text-leaf">GRATIS</span>
              ) : (
                formatRupiah(totals.shipping)
              )}
            </dd>
          </div>
          <div className="flex justify-between border-t border-line pt-3 text-base">
            <dt className="font-bold text-ink">Total</dt>
            <dd className="font-display text-xl font-bold text-leaf-deep">
              {formatRupiah(totals.total)}
            </dd>
          </div>
        </dl>

        {error && (
          <p role="alert" className="mt-4 rounded-xl bg-danger/10 px-4 py-3 text-sm font-semibold text-danger">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-5 w-full rounded-full bg-leaf py-4 text-sm font-bold text-white shadow-lg shadow-leaf/25 transition hover:bg-leaf-deep disabled:opacity-60"
        >
          {submitting ? "Memproses…" : `Buat Pesanan — ${formatRupiah(totals.total)}`}
        </button>
        <p className="mt-3 text-center text-xs text-ink-soft">
          🔒 Data kamu aman & hanya dipakai untuk pengiriman.
        </p>
      </aside>
    </form>
  );
}
