"use client";

import { useEffect, useState, useCallback } from "react";
import { formatRupiah, PACKAGES, PAYMENT_METHODS } from "@/lib/config";

type Order = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  address: string;
  zone: string;
  note: string | null;
  package_id: string;
  bump: number;
  payment: string;
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
};

const STATUSES = [
  "menunggu-pembayaran",
  "diproses",
  "dikirim",
  "selesai",
  "dibatalkan",
];

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [stock, setStock] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (adminKey: string) => {
    setError(null);
    const res = await fetch("/api/orders", {
      headers: { "x-admin-key": adminKey },
    });
    if (!res.ok) {
      setError("Kunci admin salah.");
      setAuthed(false);
      return;
    }
    const data = await res.json();
    setOrders(data.orders);
    setStock(data.stock);
    setAuthed(true);
    sessionStorage.setItem("nl-admin-key", adminKey);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("nl-admin-key");
    if (saved) {
      setKey(saved);
      load(saved);
    }
  }, [load]);

  async function updateStatus(id: string, status: string) {
    const res = await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-key": key },
      body: JSON.stringify({ status }),
    });
    if (res.ok) load(key);
  }

  if (!authed) {
    return (
      <main className="mx-auto max-w-sm px-4 py-24">
        <h1 className="font-display text-2xl font-bold text-ink">Admin NuraLive</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            load(key);
          }}
          className="mt-6 space-y-4"
        >
          <input
            type="password"
            required
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Kunci admin"
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm focus:border-leaf focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-leaf py-3 text-sm font-bold text-white hover:bg-leaf-deep"
          >
            Masuk
          </button>
          {error && <p className="text-sm font-semibold text-danger">{error}</p>}
        </form>
      </main>
    );
  }

  const pending = orders.filter((o) => o.status === "menunggu-pembayaran").length;
  const revenue = orders
    .filter((o) => o.status !== "dibatalkan")
    .reduce((s, o) => s + o.total, 0);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-2xl font-bold text-ink">Pesanan</h1>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Total pesanan" value={String(orders.length)} />
        <Stat label="Menunggu pembayaran" value={String(pending)} />
        <Stat label="Omzet (non-batal)" value={formatRupiah(revenue)} />
        <Stat label="Stok botol" value={stock === null ? "—" : String(stock)} />
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-paper">
        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs tracking-wider text-ink-soft uppercase">
              <th className="p-3">ID</th>
              <th className="p-3">Waktu</th>
              <th className="p-3">Penerima</th>
              <th className="p-3">Paket</th>
              <th className="p-3">Bayar</th>
              <th className="p-3 text-right">Total</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-ink-soft">
                  Belum ada pesanan.
                </td>
              </tr>
            )}
            {orders.map((o) => {
              const pkg = PACKAGES.find((p) => p.id === o.package_id);
              const pay = PAYMENT_METHODS.find((m) => m.id === o.payment);
              return (
                <tr key={o.id} className="border-b border-line/60 align-top last:border-0">
                  <td className="p-3 font-bold text-leaf-deep">{o.id}</td>
                  <td className="p-3 whitespace-nowrap text-ink-soft">
                    {o.created_at.slice(0, 16)}
                  </td>
                  <td className="p-3">
                    <p className="font-semibold text-ink">{o.name}</p>
                    <p className="text-xs text-ink-soft">{o.phone}</p>
                    <p className="mt-1 max-w-52 text-xs text-ink-soft">{o.address}</p>
                    {o.note && <p className="mt-1 text-xs italic text-honey-deep">“{o.note}”</p>}
                  </td>
                  <td className="p-3">
                    {pkg?.label ?? o.package_id}
                    {o.bump === 1 && <span className="block text-xs text-honey-deep">+1 botol bump</span>}
                  </td>
                  <td className="p-3">{pay?.label.split(" ")[0] ?? o.payment}</td>
                  <td className="p-3 text-right font-semibold">{formatRupiah(o.total)}</td>
                  <td className="p-3">
                    <select
                      value={o.status}
                      onChange={(e) => updateStatus(o.id, e.target.value)}
                      className="rounded-lg border border-line bg-cream px-2 py-1.5 text-xs font-semibold"
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-paper p-4">
      <p className="text-xs font-semibold tracking-wider text-ink-soft uppercase">{label}</p>
      <p className="font-display mt-1 text-xl font-bold text-leaf-deep">{value}</p>
    </div>
  );
}
