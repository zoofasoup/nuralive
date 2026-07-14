"use client";

import { useState } from "react";
import Link from "next/link";
import { formatRupiah, PACKAGES } from "@/lib/config";

type Tracked = {
  id: string;
  created_at: string;
  status: string;
  package_id: string;
  total: number;
};

const STEPS = ["menunggu-pembayaran", "diproses", "dikirim", "selesai"];
const STEP_LABEL: Record<string, string> = {
  "menunggu-pembayaran": "Menunggu pembayaran",
  diproses: "Diproses",
  dikirim: "Dikirim",
  selesai: "Selesai",
  dibatalkan: "Dibatalkan",
};

export default function LacakPage() {
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState<Tracked | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setOrder(null);
    setLoading(true);
    try {
      const res = await fetch(
        `/api/lacak?id=${encodeURIComponent(id)}&phone=${encodeURIComponent(phone)}`
      );
      const data = await res.json();
      if (!res.ok) setError(data.error);
      else setOrder(data.order);
    } catch {
      setError("Gangguan jaringan — coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  const pkg = order ? PACKAGES.find((p) => p.id === order.package_id) : null;
  const stepIdx = order ? STEPS.indexOf(order.status) : -1;

  return (
    <main className="mx-auto max-w-xl px-4 py-14 sm:px-6">
      <Link href="/" className="text-sm font-semibold text-leaf hover:underline">
        ← Kembali ke beranda
      </Link>
      <h1 className="font-display mt-4 text-3xl font-bold text-ink">Lacak Pesanan</h1>
      <p className="mt-2 text-ink-soft">
        Masukkan ID pesanan (contoh: NL-260714-AB12) dan 4 digit terakhir nomor
        WhatsApp yang dipakai saat order.
      </p>

      <form onSubmit={submit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="oid" className="mb-1.5 block text-sm font-semibold text-ink">
            ID pesanan
          </label>
          <input
            id="oid" required value={id}
            onChange={(e) => setId(e.target.value.toUpperCase())}
            placeholder="NL-XXXXXX-XXXX"
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm tracking-wider uppercase focus:border-leaf focus:ring-2 focus:ring-leaf/20 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="last4" className="mb-1.5 block text-sm font-semibold text-ink">
            4 digit terakhir nomor WhatsApp
          </label>
          <input
            id="last4" required inputMode="numeric" maxLength={4} value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            placeholder="1234"
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm focus:border-leaf focus:ring-2 focus:ring-leaf/20 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-leaf py-3.5 text-sm font-bold text-white transition hover:bg-leaf-deep disabled:opacity-60"
        >
          {loading ? "Mencari…" : "Lacak"}
        </button>
      </form>

      {error && (
        <p role="alert" className="mt-6 rounded-xl bg-danger/10 px-4 py-3 text-sm font-semibold text-danger">
          {error}
        </p>
      )}

      {order && (
        <div className="mt-8 rounded-3xl border border-line bg-paper p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-lg font-bold text-leaf-deep">{order.id}</p>
              <p className="mt-0.5 text-sm text-ink-soft">
                {pkg ? `${pkg.label} · ${pkg.bottles} botol` : order.package_id} ·{" "}
                {formatRupiah(order.total)}
              </p>
            </div>
            <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-bold text-leaf-deep whitespace-nowrap">
              {STEP_LABEL[order.status] ?? order.status}
            </span>
          </div>

          {order.status !== "dibatalkan" && (
            <ol className="mt-6 space-y-0">
              {STEPS.map((s, i) => (
                <li key={s} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                        i <= stepIdx
                          ? "bg-leaf text-white"
                          : "border border-line bg-cream text-ink-soft"
                      }`}
                    >
                      {i < stepIdx ? "✓" : i + 1}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span
                        className={`h-6 w-0.5 ${i < stepIdx ? "bg-leaf" : "bg-line"}`}
                      />
                    )}
                  </div>
                  <p
                    className={`pt-1 text-sm ${
                      i <= stepIdx ? "font-bold text-ink" : "text-ink-soft"
                    }`}
                  >
                    {STEP_LABEL[s]}
                  </p>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </main>
  );
}
