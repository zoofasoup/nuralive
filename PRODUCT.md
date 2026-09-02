# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Orang tua/keluarga Indonesia mencari solusi herbal praktis untuk kesehatan
pernapasan sehari-hari: ibu dengan anak yang gampang batuk (terutama musim
hujan), orang yang sering di luar ruangan/terpapar polusi, dan orang dengan
jadwal padat yang butuh menjaga stamina. Mereka biasanya menemukan produk
lewat media sosial atau marketplace, lalu mampir ke situs ini untuk
pertimbangan sebelum memutuskan membeli lewat kanal pilihan mereka sendiri.

## Product Purpose

NurAlive adalah tetes herbal (drops) berbasis minyak habbatussauda (jintan
hitam) dan zaitun extra virgin, diformulasikan untuk membantu meredakan
batuk dan memelihara daya tahan tubuh sekeluarga — dari anak usia 2 tahun
sampai lansia. Situs ini berfungsi sebagai hub informasi + pengantar
pembelian, bukan toko/checkout sendiri: visitor mempelajari produk di sini,
lalu diarahkan untuk menyelesaikan pembelian di Shopee, Tokopedia, website
mitra (Jubelio), atau chat WhatsApp langsung.

## Positioning

Dibanding sirup obat batuk kimia atau madu biasa, NurAlive diposisikan
sebagai solusi herbal praktis (tinggal tetes, tanpa takar sendok) yang bisa
dipakai satu produk untuk seluruh anggota keluarga, berbasis dua bahan yang
sudah dipakai secara tradisional (habbatussauda + zaitun EV) tanpa campuran
kimia. Bahasa klaim kesehatan dijaga dalam koridor suplemen
("membantu"/"memelihara"), bukan klaim menyembuhkan atau mengobati.

## Operating Context

Transaksi terjadi di luar situs (Shopee, Tokopedia, website mitra Jubelio,
atau WhatsApp) — situs sendiri adalah Next.js static export tanpa
backend/database/checkout internal. CS merespons pertanyaan dan pemesanan
manual lewat WhatsApp (nomor resmi: 0851-3937-2490). Footer menyebut
"Managed by Musawara Creative"; entitas produksi PT Setunggal Syifa Semesta.

## Capabilities and Constraints

- Next.js (App Router, Turbopack) + Tailwind v4, di-deploy sebagai static
  export (`output: "export"`) — tidak ada server runtime: tidak bisa API
  routes, checkout internal, database, atau fetch data live dari
  marketplace (Shopee Open Platform / Tokopedia Partner API didesain untuk
  seller yang login OAuth ke toko sendiri, bukan untuk situs pihak ketiga
  menampilkan harga live).
- Harga & paket dikelola manual di `src/lib/config.ts` (`PACKAGES`) — **5
  bundle resmi** (isi 1/2/3/6/12), harga dikonfirmasi dari listing
  marketplace asli (Shopee/Tokopedia/TikTok Shop): harga normal konsisten
  Rp185.000/botol untuk semua ukuran, dengan diskon volume bertingkat di
  harga jual (Rp150rb/285rb/417rb/810rb/1.530rb). Kalau harga marketplace
  berubah, update di sini dulu — jangan biarkan situs beda dari listing.
- Halal: nomor resmi dikonfirmasi dari aset desain tim sendiri (slide 2
  hero carousel, folder Drive "022A - Deliverables/Website/Design") — ID
  35410035265411125, sudah dimasukkan ke `BRAND.halalNumber`.
- BPOM: nomor resmi **TR266032421** dikonfirmasi pemilik, sudah dimasukkan
  ke `BRAND.bpomNumber`. (Sebelumnya sempat ditahan sampai ada nomor asli —
  pelajaran dari kompetitor "Habi" yang menampilkan nomor placeholder —
  sekarang sudah aman karena nomornya nyata.)
- Kanal jual aktif: Shopee, Tokopedia, TikTok Shop, website mitra (Jubelio)
  — keempatnya sudah ada URL asli di `SALES_CHANNELS`.
- Font brand mengikat dari pemilik (bukan opsi desain): **headline =
  Parkinsans, body = SN Pro.**
- Tidak ada lead-magnet/e-book — sengaja dihapus atas permintaan pemilik;
  jangan menambahkannya kembali tanpa diminta ulang.

## Brand Commitments

- Nama: NurAlive. Tagline yang sudah dipakai: "Tetes herbal untuk napas
  lega sekeluarga".
- Campaign line baru dari pemilik: **"Jagain Keluarga Indonesia"** /
  tagar **#JagaYangJagain** — nada hangat, protektif, keluarga Indonesia.
- Font mengikat: Parkinsans (headline), SN Pro (body).
- WhatsApp CS resmi: 0851-3937-2490.
- **Arah visual (standing preference, dipilih eksplisit atas roll
  "Iklan Jamu Jadul" yang di-assign):** genre DTC wellness/supplement
  modern standar — bersih, banyak white space, ilustrasi flat/line-art
  halus, tipografi rapi, tidak folk/vintage. **Quality bar: ritual.com**
  (Ritual vitamin) — palet lembut-terkontrol, ilustrasi ingredient flat,
  hierarki tipografi jelas, banyak napas antar-elemen, trust mark minimal
  bukan seal berat. Redesign berikutnya dieksekusi di genre ini dengan
  fidelity setinggi mungkin, bukan versi aman/bland dari genre ini.

## Evidence on Hand

- Foto produk asli (kemasan + botol): `public/product-hero.png` (800×533)
  dan varian mobile `public/product-hero-480.png` (480w) — nyata, boleh
  dipakai apa adanya.
- 6 testimoni di `src/lib/config.ts` (`TESTIMONIALS`) **dikonfirmasi
  pemilik sebagai placeholder/contoh, bukan kutipan asli dari pembeli.**
  Desain baru harus memperlakukan ini sebagai draft ilustratif, bukan
  bukti sosial final — jangan menambah detail palsu di sekitarnya (foto
  profil, jumlah review, tanggal spesifik, dll).
- Nomor Halal (ID 35410035265411125) dan BPOM (TR266032421) resmi — lihat
  Constraints.
- 5 bundle harga resmi dari listing marketplace — lihat Constraints.
- 8 aset banner hero carousel (4 slide × desktop 1920×720 + mobile 750×900)
  diambil dari Google Drive tim desain, disimpan di `public/hero/` sebagai
  JPEG. Berisi headline "Jagain Keluarga Indonesia" (#JagaYangJagain),
  badge legalitas, promo launching "Jaga 1000 Rumah Pertama" (Rp185.000 →
  Rp150.000 — dikonfirmasi pemilik sebagai copy marketing, bukan kuota
  yang dilacak sistem, dan cocok persis dengan harga resmi bundle isi-1),
  dan ringkasan kanal beli.

## Product Principles

1. Situs adalah etalase/hub, bukan toko — setiap ajakan beli mengarahkan
   keluar (marketplace/WA), bukan ke checkout internal.
2. Kejujuran konten non-negotiable. Proyek ini punya riwayat insiden
   konten palsu (popup penjualan fiktif, angka stok dikarang, form yang
   menjanjikan sesuatu yang tidak bisa dipenuhi) yang sudah diperbaiki;
   redesign tidak boleh mengulang pola itu.
3. Bahasa klaim kesehatan tetap dalam koridor suplemen, tidak pernah
   "menyembuhkan/mengobati".
4. "Satu produk untuk seluruh keluarga" (anak 2 tahun–lansia) adalah
   pesan inti yang harus tetap terbaca jelas di desain manapun.
5. Semua kanal pembelian (Shopee/Tokopedia/TikTok Shop/Website/WA) punya
   bobot visual setara — situs tidak memihak satu kanal.

## Accessibility & Inclusion

WCAG AA sudah diperbaiki di iterasi sebelumnya (kontras teks, focus-visible
di semua CTA, ukuran target sentuh ≥44px). Redesign harus mempertahankan
standar ini, tidak boleh menurunkannya.
