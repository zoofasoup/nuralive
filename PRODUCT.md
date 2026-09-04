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
manual lewat WhatsApp (nomor resmi: 0851-3937-2490). Entitas produksi PT
Setunggal Syifa Semesta. (Footer sempat menyebut "Managed by Musawara
Creative" - dihapus atas permintaan pemilik; jangan tambahkan kembali.)

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
- 3 testimoni di `src/lib/config.ts` (`TESTIMONIALS`) **adalah kutipan
  asli** dari poster marketplace (Slide 7) — Fitri Y (41th), Nurlitha
  (28th), Thia (39th), semua "Ibu rumah tangga". Placeholder lama (6 nama
  fiktif) sudah dihapus total atas konfirmasi pemilik. Kalau butuh
  testimoni tambahan nanti, harus tetap kutipan asli, bukan kembali ke
  placeholder.
- Nomor BPOM (TR266032421) dikonfirmasi dari 2 sumber independen (pemilik
  langsung + dokumen resmi di poster marketplace) — cocok, aman dipakai.
- Nomor Halal **resmi: ID32110022727310625** (dikonfirmasi pemilik,
  sesuai dokumen sertifikat asli di poster marketplace Slide 6). Grafis
  hero carousel slide 2 (`public/hero/slide-2-*.jpg`) masih menampilkan
  nomor yang KELIRU (ID35410035265411125) karena itu teks yang di-bake ke
  dalam gambar, bukan teks HTML — **perlu diminta desain ulang ke tim
  desain**, tidak bisa diperbaiki lewat kode.
- **Dosis resmi (sumber otoritatif: "Petunjuk Penggunaan NurAlive" PDF dari
  pemilik, bukan poster marketplace atau FAQ lama)** — 1 pipet penuh = 1 mL,
  kocok dulu sebelum pakai:
  - Penggunaan harian: usia 2-12 th → 1 mL 3× sehari; usia >12 th → 1,5 mL
    3× sehari.
  - Meredakan batuk: usia 2-12 th → 2,5 mL 3× sehari; usia >12 th → 5 mL
    3× sehari (angka ini yang cocok dengan poster marketplace Slide 5).
  - FAQ di `src/lib/config.ts` sudah diupdate mengikuti angka ini,
    menggantikan framing "tetes" yang lama dan tidak akurat.
- Komposisi resmi dari PDF yang sama: **80% Black Seed Oil (Habbatussauda,
  cold-pressed) : 20% Olive Oil** — dipakai di copy situs. Poster
  marketplace Slide 4 sempat menyebut rasio berbeda (83%:17%); PDF resmi
  dari pemilik dijadikan sumber utama sesuai instruksi pemilik.
- 3 testimoni real dari poster marketplace **sudah dipakai** menggantikan
  placeholder (lihat atas) — dikonfirmasi pemilik.
- 5 bundle harga resmi dari listing marketplace — lihat Constraints.
- 8 poster marketplace asli (1200×1200) di `public/marketplace/`, dipakai
  di section "Tampilan NurAlive di Marketplace".
- PDF resmi "Petunjuk Penggunaan NurAlive" (dari pemilik, `~/Downloads/
  Petunjuk Penggunaan Nuralive (3).pdf`) juga menyebut produk pendamping
  "NurAlive Madu Trigona" yang disarankan dipakai bersama untuk pemulihan
  batuk — belum ada section untuk produk ini di situs, catat sebagai
  potensi pengembangan, jangan tambahkan tanpa diminta.
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
