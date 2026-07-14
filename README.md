# nuralive.id

Website jualan NuraLive — tetes herbal habbatussauda + zaitun extra virgin.
Full stack: **Next.js 16 (App Router, Turbopack) + Tailwind v4 + SQLite (better-sqlite3)**.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Database SQLite dibuat otomatis di `data/nuralive.db` saat pertama diakses
(stok awal 120 botol). Folder `data/` sudah di-gitignore.

## Halaman

| Route | Isi |
|---|---|
| `/` | Landing single-page (hero, urgency bar real-time, persona, pricing 3 paket, komposisi, testimoni, perbandingan, garansi, FAQ, lead magnet) |
| `/checkout?paket=coba-1\|hemat-3\|keluarga-6` | Order form 1 halaman + order bump + ongkir per zona |
| `/terima-kasih/[id]` | Konfirmasi order + tombol WA |
| `/lacak` | Lacak pesanan (ID + 4 digit terakhir WA) |
| `/admin` | Dashboard pesanan (kunci: env `ADMIN_KEY`, default dev `nuralive-dev`) |
| `/pengiriman`, `/syarat-ketentuan`, `/kebijakan-privasi` | Legal |

## API

- `POST /api/orders` — buat pesanan (harga divalidasi ulang di server, stok dikurangi)
- `GET /api/orders` + `PATCH /api/orders/[id]` — admin, header `x-admin-key`
- `GET /api/lacak?id=&phone=` — status pesanan
- `POST /api/leads` — simpan nomor WA lead magnet

## Konfigurasi

Semua angka bisnis di **`src/lib/config.ts`**: harga paket, order bump, zona
ongkir, metode bayar, testimoni, FAQ, nomor WA, nama PT.

Env (`.env.example`): `ADMIN_KEY`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`
(GA4 & Meta Pixel hanya dirender kalau env-nya terisi — tidak ada placeholder palsu).

## Sebelum launch (wajib)

1. Ganti `BRAND.whatsapp` dengan nomor CS asli di `src/lib/config.ts`.
2. Isi `BRAND.bpomNumber` / `halalNumber` **hanya setelah nomor resmi keluar** —
   selama `null`, badge sertifikasi otomatis disembunyikan (jangan tiru Habi
   yang menampilkan "POM TR XXX XXX XXX").
3. Ganti ilustrasi botol SVG (`src/components/Bottle.tsx`) dengan foto produk asli.
4. Isi pixel GA4 + Meta di `.env.local`, verifikasi event Purchase.
5. Set `ADMIN_KEY` yang kuat di environment produksi.
6. Integrasi Midtrans: hook-nya sudah disiapkan di `POST /api/orders`
   (cari `TODO(payment-gateway)`).
7. Deploy: Vercel perlu ganti SQLite → Turso/Postgres (ubah `src/lib/db.ts`),
   atau deploy ke VPS (mis. Coolify/Dokku) agar SQLite tetap jalan.
