// Semua foto sementara diganti kotak abu-abu polos atas permintaan pemilik,
// supaya layout bisa dinilai tanpa gangguan gambar. Abu-abu netral dipakai
// sengaja (bukan warna palet) supaya jelas terbaca sebagai placeholder, bukan
// keputusan desain.
//
// File asli masih utuh di public/ - yang diganti hanya pemanggilannya, jadi
// mengembalikan foto cukup dengan membalik perubahan di titik pakainya.
// Logo brand dan logo sertifikat BPOM/Halal TIDAK termasuk: itu penanda
// legalitas, bukan foto.
export default function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`bg-neutral-300 ${className}`} />;
}
