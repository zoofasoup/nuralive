import { PERSONAS, BRAND, PROBLEMS } from "@/lib/config";

// Kumpulan section statis landing: urgency, trust, masalah, solusi,
// komposisi, persona, perbandingan, jaminan.

export function UrgencyBar({
  stock,
  weeklyOrders,
}: {
  stock: number;
  weeklyOrders: number;
}) {
  // Angka di bar ini NYATA dari database — bukan counter animasi.
  const items: string[] = [];
  if (weeklyOrders > 0) items.push(`${weeklyOrders} pesanan minggu ini`);
  else items.push("Batch perdana sudah dibuka");
  if (stock > 0 && stock <= 150) items.push(`Stok batch ini: ${stock} botol`);
  items.push("Order sebelum 15.00 WIB dikirim hari ini");

  return (
    <div className="bg-leaf-deep py-2.5 text-center text-sm font-medium text-white">
      <p className="mx-auto max-w-6xl px-4">
        {items.map((t, i) => (
          <span key={t}>
            {i > 0 && <span className="mx-2 text-honey" aria-hidden>·</span>}
            {t}
          </span>
        ))}
      </p>
    </div>
  );
}

const TRUST = [
  { icon: "Leaf", title: "100% Bahan Alami", desc: "Habbatussauda & zaitun EV, tanpa pengawet" },
  { icon: "Truck", title: "Kirim Seluruh Indonesia", desc: "Same-day dispatch sebelum 15.00 WIB" },
  { icon: "Cash", title: "COD Tersedia", desc: "Bayar di tempat saat paket tiba" },
  { icon: "Chat", title: "Konsultasi Gratis", desc: `CS ahli via WhatsApp, ${BRAND.csHours}` },
];

export function TrustBar() {
  return (
    <section className="bg-cream-deep border-b border-line/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {TRUST.map((t) => (
          <div key={t.title} className="flex items-start gap-3">
            <span aria-hidden className="text-2xl">{t.icon}</span>
            <div>
              <p className="text-sm font-bold text-ink">{t.title}</p>
              <p className="mt-0.5 text-xs text-ink-soft">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-bold tracking-widest text-honey-deep uppercase">
        Terasa familiar?
      </p>
      <h2 className="font-display mt-2 max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
        Musim hujan, polusi, dan jadwal padat menguji daya tahan keluarga setiap hari
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p, i) => (
          <div
            key={p.title}
            className="flex flex-col border-t border-line/60 pt-5"
          >
            <p className="font-display text-lg font-semibold text-leaf-deep">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-bold text-ink">{p.title}</p>
            <p className="mt-1.5 text-sm text-ink-soft">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const INGREDIENTS = [
  {
    name: "Minyak Habbatussauda",
    sub: "Nigella sativa — jintan hitam",
    points: [
      "Mengandung senyawa aktif thymoquinone",
      "Dikenal lama dalam tradisi herbal untuk daya tahan tubuh",
      "Membantu melegakan tenggorokan dan pernapasan",
    ],
    emoji: "🖤",
  },
  {
    name: "Minyak Zaitun Extra Virgin",
    sub: "Perasan pertama, kualitas tertinggi",
    points: [
      "Kaya antioksidan alami",
      "Menghaluskan rasa & menenangkan tenggorokan",
      "Membantu penyerapan nutrisi minyak habbatussauda",
    ],
    emoji: "🫒",
  },
];

export function Ingredients() {
  return (
    <section id="komposisi" className="bg-leaf-deep py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-bold tracking-widest text-honey uppercase">
          Komposisi
        </p>
        <h2 className="font-display mt-2 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          Kebaikan murni dari alam
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
           Hanya dua bahan utama: minyak habbatussauda yang kaya thymoquinone dan minyak zaitun extra‑virgin. Kedua bahan ini sudah dipakai secara tradisional sejak ribuan tahun, tanpa tambahan bahan kimia.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {INGREDIENTS.map((ing) => (
            <div key={ing.name} className="rounded-xl bg-white/5 p-8 border border-white/10">
              <span aria-hidden className="text-3xl">{ing.emoji}</span>
              <h3 className="font-display mt-4 text-xl font-bold text-white">
                {ing.name}
              </h3>
              <p className="mt-1 text-sm italic text-white/70">{ing.sub}</p>
              <ul className="mt-5 space-y-3">
                {ing.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm text-white/90">
                    <span aria-hidden className="mt-0.5 font-bold text-honey">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/60">
          NurAlive adalah suplemen kesehatan, bukan obat, dan tidak dimaksudkan
          untuk mendiagnosis atau menyembuhkan penyakit. Bila keluhan berlanjut,
          hubungi dokter.
        </p>
      </div>
    </section>
  );
}

export function ForWho() {
  return (
    <section id="untuk-siapa" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-bold tracking-widest text-honey-deep uppercase">
        Cocok untuk
      </p>
      <h2 className="font-display mt-2 max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
        Satu botol kecil, dipakai seisi rumah
      </h2>
      <p className="mt-3 max-w-xl text-ink-soft">
        Dari anak usia 2 tahun sampai lansia — cukup diteteskan langsung, atau
        dicampur sesendok madu murni untuk anak-anak.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PERSONAS.map((p) => (
          <div
            key={p.title}
            className="flex flex-col items-center text-center p-4"
          >
            <span aria-hidden className="text-3xl">{p.icon}</span>
            <p className="mt-3 text-sm font-bold text-ink">{p.title}</p>
            <p className="mt-1 text-xs text-ink-soft">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const COMPARE = [
  { label: "Bahan alami tanpa tambahan kimia", nura: true, sirup: false, madu: true },
  { label: "Praktis — tinggal tetes, tanpa takar sendok", nura: true, sirup: false, madu: false },
  { label: "Satu produk untuk anak 2th s.d. lansia", nura: true, sirup: false, madu: true },
  { label: "Kandungan habbatussauda + zaitun EV terstandar", nura: true, sirup: false, madu: false },
  { label: "Untuk pemeliharaan harian, bukan hanya saat sakit", nura: true, sirup: false, madu: true },
];

export function Comparison() {
  return (
    <section className="bg-cream-deep py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-center text-3xl font-bold text-ink text-balance sm:text-4xl">
          Kenapa keluarga memilih NurAlive?
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm text-left">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="p-4 font-semibold text-ink-soft">&nbsp;</th>
                <th className="p-4 text-center font-display text-base font-bold text-leaf-deep">
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
                <tr key={row.label} className="border-b border-line/60 last:border-0">
                  <td className="p-4 text-ink">{row.label}</td>
                  <td className="bg-leaf/5 p-4 text-center font-bold text-leaf" aria-label={row.nura ? "ya" : "tidak"}>
                    {row.nura ? "Ya" : <span className="text-ink-soft/40">—</span>}
                  </td>
                  <td className="p-4 text-center text-ink" aria-label={row.sirup ? "ya" : "tidak"}>
                    {row.sirup ? "Ya" : <span className="text-ink-soft/40">—</span>}
                  </td>
                  <td className="p-4 text-center text-ink" aria-label={row.madu ? "ya" : "tidak"}>
                    {row.madu ? "Ya" : <span className="text-ink-soft/40">—</span>}
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
  const certs: { title: string; desc: string }[] = [];
  if (BRAND.bpomNumber) {
    certs.push({ title: "BPOM Terdaftar", desc: BRAND.bpomNumber });
  }
  if (BRAND.halalNumber) {
    certs.push({ title: "Halal Indonesia", desc: BRAND.halalNumber });
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-honey-pale p-8">
          <span aria-hidden className="text-3xl">🛡️</span>
          <h3 className="font-display mt-3 text-xl font-bold text-ink">
            Garansi Pecah / Rusak, Ganti Baru
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            Botol pecah di jalan atau paket tidak sesuai? Foto & kirim ke CS
            dalam 1×24 jam — kami kirim penggantinya tanpa ribet.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-paper p-8">
          <span aria-hidden className="text-3xl">🇮🇩</span>
          <h3 className="font-display mt-3 text-xl font-bold text-ink">
            Diracik &amp; Dikemas di Indonesia
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            Diproduksi {BRAND.company} dengan standar kebersihan pangan, diawasi
            di setiap batch.
          </p>
        </div>
        {certs.length > 0 ? (
          certs.map((c) => (
            <div key={c.title} className="rounded-xl border border-line bg-paper p-8">
              <span aria-hidden className="text-3xl">✅</span>
              <h3 className="font-display mt-3 text-xl font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{c.desc}</p>
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-line bg-paper p-8">
            <span aria-hidden className="text-3xl">💬</span>
            <h3 className="font-display mt-3 text-xl font-bold text-ink">
              Ragu? Tanya Dulu, Gratis
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              CS kami menjawab pertanyaan takaran, kondisi khusus, dan cara
              konsumsi — tanpa harus beli dulu. {BRAND.csHours}.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
