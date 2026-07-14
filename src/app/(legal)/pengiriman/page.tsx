import type { Metadata } from "next";
import { BRAND } from "@/lib/config";

export const metadata: Metadata = { title: "Pengiriman & Retur" };

export default function PengirimanPage() {
  return (
    <>
      <h1>Pengiriman &amp; Retur</h1>

      <h2>Pengiriman</h2>
      <ul>
        <li>Pesanan yang masuk sebelum pukul 15.00 WIB (Senin–Sabtu) dikirim di hari yang sama; setelahnya dikirim hari kerja berikutnya.</li>
        <li>Kami mengirim ke seluruh Indonesia melalui kurir ekspedisi terpercaya. Nomor resi dikirim via WhatsApp begitu paket diserahkan ke kurir.</li>
        <li>Estimasi tiba: Jabodetabek 1–2 hari, Pulau Jawa 2–3 hari, luar Jawa 3–7 hari kerja.</li>
        <li>Setiap botol dikemas dengan bubble wrap tebal dan kardus khusus anti-pecah.</li>
      </ul>

      <h2>COD (Bayar di Tempat)</h2>
      <ul>
        <li>COD tersedia di area jangkauan kurir. Siapkan uang pas sesuai total pesanan.</li>
        <li>Paket COD yang ditolak tanpa alasan dapat memengaruhi kemampuan COD di pesanan berikutnya.</li>
      </ul>

      <h2>Retur &amp; Penggantian</h2>
      <ul>
        <li>Botol pecah, bocor, atau paket tidak sesuai pesanan: kirim foto/video ke WhatsApp CS ({BRAND.whatsappDisplay}) maksimal 1×24 jam setelah paket diterima — kami kirim penggantinya tanpa biaya.</li>
        <li>Karena termasuk produk konsumsi, kami tidak menerima retur atas alasan berubah pikiran setelah segel dibuka.</li>
      </ul>
    </>
  );
}
