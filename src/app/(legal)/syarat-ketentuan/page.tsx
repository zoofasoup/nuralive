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
        <li>{BRAND.domain} adalah etalase produk - pemesanan dan pembayaran diselesaikan langsung di Shopee, Tokopedia, atau website mitra kami, mengikuti syarat &amp; ketentuan masing-masing platform tersebut.</li>
        <li>Pemesanan lewat chat WhatsApp dianggap sah setelah dikonfirmasi oleh CS kami.</li>
        <li>Harga yang tertera di {BRAND.domain} bersifat indikatif; harga final mengikuti yang tertera di platform tempat kamu membeli.</li>
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
