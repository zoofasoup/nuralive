import type { Metadata } from "next";
import { BRAND } from "@/lib/config";

export const metadata: Metadata = { title: "Kebijakan Privasi" };

export default function PrivasiPage() {
  return (
    <>
      <h1>Kebijakan Privasi</h1>
      <p>
        Privasi kamu penting bagi kami. Kebijakan ini menjelaskan data apa yang
        kami kumpulkan di {BRAND.domain} dan bagaimana kami menggunakannya.
      </p>

      <h2>Data yang kami kumpulkan</h2>
      <p>
        {BRAND.domain} adalah etalase - pembelian diselesaikan langsung di
        Shopee, Tokopedia, website mitra kami, atau lewat chat WhatsApp. Kami
        tidak mengoperasikan checkout atau menyimpan data pesanan sendiri.
      </p>
      <ul>
        <li><strong>Data chat WhatsApp:</strong> nomor WhatsApp dan isi percakapan saat kamu menghubungi CS untuk bertanya atau memesan.</li>
        <li><strong>Data teknis:</strong> statistik kunjungan anonim melalui alat analitik untuk memperbaiki situs.</li>
      </ul>
      <p>
        Data pesanan, pembayaran, dan pengiriman untuk transaksi di Shopee/
        Tokopedia/website mitra dikelola oleh platform masing-masing sesuai
        kebijakan privasi mereka.
      </p>

      <h2>Bagaimana data digunakan</h2>
      <ul>
        <li>Membalas pertanyaan dan memproses pesanan yang masuk lewat WhatsApp.</li>
        <li>Kami <strong>tidak menjual atau membagikan</strong> data pribadimu ke pihak ketiga.</li>
      </ul>

      <h2>Penyimpanan &amp; keamanan</h2>
      <p>
        Data disimpan di server kami dengan akses terbatas. Kamu dapat meminta
        penghapusan data kapan saja melalui WhatsApp {BRAND.whatsappDisplay}.
      </p>
    </>
  );
}
