import { PERSONAS, BRAND, PROBLEMS, waLink } from "@/lib/config";
import Icon, { IconName } from "@/components/Icon";
import { BpomLogo, HalalIndonesiaLogo, BanggaBuatanIndonesiaLogo } from "@/components/CertLogos";

// Kumpulan section statis landing: urgency, trust, masalah, solusi,
// komposisi, persona, perbandingan, jaminan.

export function UrgencyBar() {
  // Klaim evergreen saja - tidak ada angka stok/pesanan yang dikarang.
  // Situs ini static export tanpa backend, jadi angka apa pun di sini akan
  // beku selamanya; jangan tampilkan sesuatu yang terlihat live padahal tidak.
  const items: string[] = [
    "Kirim seluruh Indonesia",
    "COD tersedia",
    "Order sebelum 15.00 WIB dikirim hari ini",
  ];

  return (
    <div className="bg-forest-deep py-2.5 text-center text-sm font-medium text-white">
      <p className="mx-auto max-w-6xl px-4">
        {items.map((t, i) => (
          <span key={t}>
            {i > 0 && (
              <span className="mx-2 text-white/40" aria-hidden>
                ·
              </span>
            )}
            {t}
          </span>
        ))}
      </p>
    </div>
  );
}

const TRUST = [
  { icon: "leaf" as IconName, title: "100% Bahan Alami", desc: "Habbatussauda & zaitun EV, tanpa pengawet" },
  { icon: "truck" as IconName, title: "Kirim Seluruh Indonesia", desc: "Same-day dispatch sebelum 15.00 WIB" },
  { icon: "cash" as IconName, title: "COD Tersedia", desc: "Bayar di tempat saat paket tiba" },
  { icon: "chat" as IconName, title: "Konsultasi Gratis", desc: `CS ahli via WhatsApp, ${BRAND.csHours}` },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.title} className="flex items-start gap-3 py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <Icon name={t.icon} className="h-6 w-6 shrink-0 text-forest" aria-hidden />
              <div>
                <p className="text-sm font-bold text-ink">{t.title}</p>
                <p className="mt-0.5 text-xs text-ink-soft">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <h2 className="font-display max-w-md text-3xl font-bold text-ink text-balance sm:text-4xl">
          Musim hujan, polusi, dan jadwal padat menguji daya tahan keluarga
          setiap hari
        </h2>
        <ul className="divide-y divide-line">
          {PROBLEMS.map((p) => (
            <li key={p.title} className="flex gap-4 py-5 first:pt-0">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" aria-hidden />
              <div>
                <p className="font-bold text-ink">{p.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{p.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const INGREDIENTS = [
  {
    name: "Minyak Habbatussauda",
    sub: "Nigella sativa, jintan hitam",
    points: [
      "Mengandung senyawa aktif thymoquinone",
      "Dikenal lama dalam tradisi herbal untuk daya tahan tubuh",
      "Membantu melegakan tenggorokan dan pernapasan",
    ],
    icon: "seed" as IconName,
  },
  {
    name: "Minyak Zaitun Extra Virgin",
    sub: "Perasan pertama, kualitas tertinggi",
    points: [
      "Kaya antioksidan alami",
      "Menghaluskan rasa & menenangkan tenggorokan",
      "Membantu penyerapan nutrisi minyak habbatussauda",
    ],
    icon: "drop" as IconName,
  },
];

export function Ingredients() {
  return (
    <section id="komposisi" className="bg-forest-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display max-w-2xl text-3xl font-bold text-white text-balance sm:text-4xl">
          Kebaikan murni dari alam
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
          Hanya dua bahan utama: 80% minyak habbatussauda (cold-pressed,
          kaya thymoquinone) dan 20% minyak zaitun extra-virgin. Kedua bahan
          ini sudah dipakai secara tradisional sejak ribuan tahun, tanpa
          tambahan bahan kimia.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-2">
          {INGREDIENTS.map((ing) => (
            <div key={ing.name} className="bg-forest-deep p-8">
              <Icon name={ing.icon} className="h-8 w-8 text-clay-pale" aria-hidden />
              <h3 className="font-display mt-4 text-xl font-bold text-white">
                {ing.name}
              </h3>
              <p className="mt-1 text-sm text-white/60">{ing.sub}</p>
              <ul className="mt-5 space-y-3">
                {ing.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm text-white/85">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-clay-pale" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/50">
          NurAlive adalah suplemen kesehatan, bukan obat, dan tidak dimaksudkan
          untuk mendiagnosis atau menyembuhkan penyakit. Bila keluhan
          berlanjut, hubungi dokter.
        </p>
      </div>
    </section>
  );
}

export function ForWho() {
  return (
    <section id="untuk-siapa" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="font-display max-w-2xl text-3xl font-bold text-ink text-balance sm:text-4xl">
        Satu botol kecil, dipakai seisi rumah
      </h2>
      <p className="mt-3 max-w-xl text-ink-soft">
        Dari anak usia 2 tahun sampai lansia, cukup diteteskan langsung atau
        dicampur sesendok madu murni untuk anak-anak.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {PERSONAS.map((p) => (
          <div
            key={p.title}
            className="flex items-center gap-3 rounded-full border border-line bg-cream py-3 pr-5 pl-3.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-pale">
              <Icon name={p.icon as IconName} className="h-4.5 w-4.5 text-forest-deep" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">{p.title}</p>
              <p className="text-xs text-ink-soft">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const COMPARE = [
  { label: "Bahan alami tanpa tambahan kimia", nura: true, sirup: false, madu: true },
  { label: "Praktis, tinggal tetes tanpa takar sendok", nura: true, sirup: false, madu: false },
  { label: "Satu produk untuk anak 2th s.d. lansia", nura: true, sirup: false, madu: true },
  { label: "Kandungan habbatussauda + zaitun EV terstandar", nura: true, sirup: false, madu: false },
  { label: "Untuk pemeliharaan harian, bukan hanya saat sakit", nura: true, sirup: false, madu: true },
];

function CompareMark({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-forest-pale" aria-label="ya">
      <Icon name="check" className="h-3.5 w-3.5 text-forest-deep" aria-hidden />
    </span>
  ) : (
    <span className="text-ink-soft/40" aria-label="tidak">
      —
    </span>
  );
}

export function Comparison() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-center text-3xl font-bold text-ink text-balance sm:text-4xl">
          Kenapa keluarga memilih NurAlive?
        </h2>
        <div className="mt-10 overflow-x-auto rounded-xl border border-line bg-paper">
          <table className="w-full min-w-[560px] text-sm text-left">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="p-4 font-semibold text-ink-soft">&nbsp;</th>
                <th className="p-4 text-center font-display text-base font-bold text-forest-deep">
                  NurAlive
                </th>
                <th className="p-4 text-center font-semibold text-ink-soft">
                  Sirup batuk kimia
                </th>
                <th className="p-4 text-center font-semibold text-ink-soft">
                  Madu biasa
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <td className="p-4 text-ink">{row.label}</td>
                  <td className="bg-forest-pale/30 p-4 text-center">
                    <CompareMark value={row.nura} />
                  </td>
                  <td className="p-4 text-center">
                    <CompareMark value={row.sirup} />
                  </td>
                  <td className="p-4 text-center">
                    <CompareMark value={row.madu} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid grid-cols-2 gap-6 rounded-xl border border-line bg-paper p-8 sm:grid-cols-3 sm:p-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <BpomLogo className="h-14 w-auto" />
          {BRAND.bpomNumber && <p className="text-xs text-ink-soft">{BRAND.bpomNumber}</p>}
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <HalalIndonesiaLogo className="h-14 w-auto" />
          {BRAND.halalNumber && <p className="text-xs text-ink-soft">{BRAND.halalNumber}</p>}
        </div>
        <div className="col-span-2 flex flex-col items-center gap-2 text-center sm:col-span-1">
          <BanggaBuatanIndonesiaLogo className="h-14 w-auto" />
          <p className="text-xs text-ink-soft">Diproduksi {BRAND.company}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-paper p-8">
          <Icon name="shield" className="h-8 w-8 text-forest" aria-hidden />
          <h3 className="font-display mt-4 text-xl font-bold text-ink">
            Garansi Pecah / Rusak, Ganti Baru
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            Botol pecah di jalan atau paket tidak sesuai? Foto & kirim ke CS
            dalam 1×24 jam, kami kirim penggantinya tanpa ribet.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-paper p-8">
          <Icon name="badge" className="h-8 w-8 text-forest" aria-hidden />
          <h3 className="font-display mt-4 text-xl font-bold text-ink">
            Diracik &amp; Dikemas di Indonesia
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            Diproduksi {BRAND.company} dengan standar kebersihan pangan,
            diawasi di setiap batch.
          </p>
        </div>
      </div>

      <a
        href={waLink("Halo NurAlive, saya mau tanya-tanya dulu sebelum beli.")}
        target="_blank"
        rel="noopener"
        className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-line bg-cream p-8 transition hover:border-forest sm:flex-row sm:items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep"
      >
        <div className="flex items-start gap-4">
          <Icon name="chat" className="h-8 w-8 shrink-0 text-forest" aria-hidden />
          <div>
            <h3 className="font-display text-xl font-bold text-ink">
              Ragu? Tanya Dulu, Gratis
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              CS kami menjawab pertanyaan takaran, kondisi khusus, dan cara
              konsumsi, tanpa harus beli dulu. {BRAND.csHours}.
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-lg bg-forest px-5 py-3 text-sm font-bold text-white">
          Chat WhatsApp
        </span>
      </a>
    </section>
  );
}
