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
      <ul>
        <li><strong>Data pesanan:</strong> nama, nomor WhatsApp, dan alamat pengiriman — dipakai untuk memproses dan mengirim pesanan.</li>
        <li><strong>Data langganan:</strong> nomor WhatsApp yang kamu daftarkan untuk menerima e-book dan tips kesehatan.</li>
        <li><strong>Data teknis:</strong> statistik kunjungan anonim melalui alat analitik untuk memperbaiki situs.</li>
      </ul>

      <h2>Bagaimana data digunakan</h2>
      <ul>
        <li>Memproses pesanan, mengirim resi, dan memberi dukungan pelanggan.</li>
        <li>Mengirim konten yang kamu minta (e-book, tips) — kamu bisa berhenti kapan saja dengan membalas "STOP".</li>
        <li>Kami <strong>tidak menjual atau membagikan</strong> data pribadimu ke pihak ketiga, kecuali kurir untuk keperluan pengiriman.</li>
      </ul>

      <h2>Penyimpanan &amp; keamanan</h2>
      <p>
        Data disimpan di server kami dengan akses terbatas. Kamu dapat meminta
        penghapusan data kapan saja melalui WhatsApp {BRAND.whatsappDisplay}.
      </p>
    </>
  );
}
