import type { Metadata } from "next";
import { BRAND } from "@/lib/config";

export const metadata: Metadata = { title: "Syarat & Ketentuan" };

export default function SyaratPage() {
  return (
    <>
      <h1>Syarat &amp; Ketentuan</h1>
      <p>
        Dengan mengakses dan bertransaksi di {BRAND.domain}, kamu menyetujui
        ketentuan berikut. Ketentuan dapat diperbarui sewaktu-waktu; versi
        terbaru selalu tersedia di halaman ini.
      </p>

      <h2>Produk</h2>
      <ul>
        <li>{BRAND.name} adalah suplemen kesehatan berbahan alami, bukan obat, dan tidak dimaksudkan untuk mendiagnosis, mengobati, atau menyembuhkan penyakit.</li>
        <li>Hasil pemakaian dapat berbeda pada tiap orang. Bila keluhan berlanjut, konsultasikan ke dokter.</li>
        <li>Ikuti aturan konsumsi yang tertera pada kemasan dan halaman FAQ.</li>
      </ul>

      <h2>Pemesanan &amp; Pembayaran</h2>
      <ul>
        <li>Pesanan dianggap sah setelah pembayaran terverifikasi (untuk transfer/QRIS) atau setelah konfirmasi CS (untuk COD).</li>
        <li>Harga yang berlaku adalah harga saat pesanan dibuat.</li>
        <li>Kami berhak membatalkan pesanan yang terindikasi penyalahgunaan atau kesalahan sistem, dengan pengembalian dana penuh bila sudah dibayar.</li>
      </ul>

      <h2>Kekayaan Intelektual</h2>
      <p>
        Seluruh konten situs ini (teks, desain, ilustrasi) adalah milik{" "}
        {BRAND.company} dan tidak boleh disalin tanpa izin tertulis.
      </p>

      <h2>Kontak</h2>
      <p>
        Pertanyaan tentang ketentuan ini: WhatsApp {BRAND.whatsappDisplay},{" "}
        {BRAND.csHours}.
      </p>
    </>
  );
}
