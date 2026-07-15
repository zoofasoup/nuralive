"use client";

import { useState } from "react";

export default function LeadMagnet() {
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9) {
      setState("error");
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: digits, source: "ebook-landing" }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="bg-leaf-deep py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <span aria-hidden className="text-4xl">📖</span>
        <h2 className="font-display mt-4 text-3xl font-bold text-white text-balance sm:text-4xl">
          Belum siap order? Ambil dulu e-book gratisnya
        </h2>
        <p className="mt-3 text-white/80">
          “Rumah Bebas Batuk” - panduan praktis menjaga pernapasan keluarga di
          musim hujan &amp; kota berpolusi. Kami kirim lewat WhatsApp.
        </p>

        {state === "done" ? (
          <p className="mx-auto mt-8 max-w-md rounded-2xl bg-paper px-6 py-4 font-bold text-leaf-deep">
            ✅ Siap! E-book akan dikirim ke WhatsApp kamu sebentar lagi.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="lead-phone" className="sr-only">
              Nomor WhatsApp
            </label>
            <input
              id="lead-phone"
              type="tel"
              inputMode="tel"
              required
              placeholder="Nomor WhatsApp kamu, mis. 0812…"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 rounded-full border-0 bg-paper px-6 py-3.5 text-sm text-ink placeholder:text-ink-soft/60 focus:ring-2 focus:ring-honey focus:outline-none"
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="rounded-full bg-gradient-to-b from-honey to-honey-deep px-7 py-3.5 text-sm font-bold text-ink transition hover:from-honey-deep hover:to-honey-deep disabled:opacity-60"
            >
              {state === "loading" ? "Mengirim…" : "Kirim E-book"}
            </button>
          </form>
        )}
        {state === "error" && (
          <p className="mt-3 text-sm text-honey">
            Nomor belum valid - cek lagi ya (contoh: 081234567890).
          </p>
        )}
        <p className="mt-4 text-xs text-white/50">
          Nomor kamu hanya dipakai untuk mengirim e-book & tips kesehatan.
          Tidak ada spam, bisa berhenti kapan saja.
        </p>
      </div>
    </section>
  );
}
