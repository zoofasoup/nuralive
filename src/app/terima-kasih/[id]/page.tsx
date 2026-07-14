import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOrder } from "@/lib/db";
import {
  PACKAGES,
  PAYMENT_METHODS,
  SHIPPING_ZONES,
  BRAND,
  formatRupiah,
  waLink,
} from "@/lib/config";

export const metadata: Metadata = { title: "Pesanan Diterima" };
export const dynamic = "force-dynamic";

const STATUS_LABEL: Record<string, string> = {
  "menunggu-pembayaran": "Menunggu pembayaran",
  diproses: "Sedang diproses",
  dikirim: "Dalam pengiriman",
  selesai: "Selesai",
  dibatalkan: "Dibatalkan",
};

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = getOrder(id.toUpperCase());
  if (!order) notFound();

  const pkg = PACKAGES.find((p) => p.id === order.package_id);
  const pay = PAYMENT_METHODS.find((m) => m.id === order.payment);
  const zone = SHIPPING_ZONES.find((z) => z.id === order.zone);

  const waMessage = `Halo NuraLive! Saya sudah order dengan ID *${order.id}* a.n. ${order.name}. Mohon konfirmasi ya.`;

  return (
    <main className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <span aria-hidden className="text-5xl">🎉</span>
        <h1 className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">
          Pesanan kamu sudah kami terima!
        </h1>
        <p className="mt-3 text-ink-soft">
          Simpan ID pesanan ini untuk melacak status:
        </p>
        <p className="font-display mt-2 inline-block rounded-2xl border-2 border-dashed border-leaf/40 bg-paper px-6 py-3 text-2xl font-bold tracking-wider text-leaf-deep">
          {order.id}
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-line bg-paper p-6 sm:p-8">
        <h2 className="font-display text-lg font-bold text-ink">Rincian pesanan</h2>
        <dl className="mt-4 space-y-2.5 text-sm">
          <Row label="Paket" value={pkg ? `${pkg.label} (${pkg.bottles} botol)` : order.package_id} />
          {order.bump === 1 && <Row label="Tambahan" value="1 botol ekstra (−20%)" />}
          <Row label="Penerima" value={order.name} />
          <Row label="Wilayah" value={zone?.label ?? order.zone} />
          <Row label="Ongkir" value={order.shipping === 0 ? "GRATIS" : formatRupiah(order.shipping)} />
          <Row label="Metode bayar" value={pay?.label ?? order.payment} />
          <Row label="Status" value={STATUS_LABEL[order.status] ?? order.status} />
          <div className="flex justify-between border-t border-line pt-3 text-base">
            <dt className="font-bold text-ink">Total</dt>
            <dd className="font-display text-xl font-bold text-leaf-deep">
              {formatRupiah(order.total)}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 rounded-3xl bg-honey-pale p-6 sm:p-8">
        <h2 className="font-display text-lg font-bold text-ink">Langkah selanjutnya</h2>
        {order.payment === "cod" ? (
          <p className="mt-3 text-sm text-ink">
            Kamu memilih <strong>COD</strong> — siapkan uang pas{" "}
            <strong>{formatRupiah(order.total)}</strong> saat kurir tiba. Kami
            akan konfirmasi jadwal kirim lewat WhatsApp.
          </p>
        ) : (
          <p className="mt-3 text-sm text-ink">
            Klik tombol di bawah untuk konfirmasi ke CS kami — detail
            pembayaran ({pay?.label}) akan dikirim langsung di chat, dan
            pesanan diproses begitu pembayaran masuk.
          </p>
        )}
        <a
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener"
          className="mt-5 block rounded-full bg-[#25D366] py-4 text-center text-sm font-bold text-white shadow-lg transition hover:opacity-90"
        >
          Konfirmasi via WhatsApp →
        </a>
        <p className="mt-3 text-center text-xs text-ink-soft">
          CS aktif {BRAND.csHours}
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link href="/lacak" className="text-sm font-semibold text-leaf hover:underline">
          Lacak status pesanan →
        </Link>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-ink-soft">{label}</dt>
      <dd className="text-right font-semibold text-ink">{value}</dd>
    </div>
  );
}
