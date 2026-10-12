// Satu pintu untuk semua event Meta. Setiap panggilan menembak dua sinyal
// dengan event_id yang sama supaya Meta men-dedup: (1) pixel browser (fbq)
// untuk sinyal cepat, (2) /api/capi (Cloudflare Pages Function) untuk sinyal
// server-side yang tahan iOS/ad-blocker.
//
// Transaksi terjadi di luar situs (WhatsApp, marketplace, webstore Jubelio),
// jadi Purchase tidak mungkin ditembak dari sini. Sinyal terkuat yang ada
// adalah klik keluar untuk memesan:
//   Lead    = pengunjung mau memesan (WA order, webstore, marketplace).
//             Dikonsolidasikan ke satu event karena kampanye mengoptimasi
//             Lead; memecah ke event lain menahan learning phase. Jangan
//             ganti artinya tanpa memberi tahu pengelola iklan.
//   Contact = pengunjung bertanya via WhatsApp, belum tentu membeli.
// Perbedaan kanal dibaca dari parameter `channel`, bukan nama event.

export type MetaEvent = "Lead" | "Contact";
export type Channel = "whatsapp" | "webstore" | "shopee" | "tokopedia" | "tiktok";
export type MetaParams = Record<string, string | number | string[]>;

type Fbq = (...args: unknown[]) => void;

function readCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

// Parameter standar untuk semua Lead supaya skemanya tidak bisa melenceng
// antar-tombol: nilai & mata uang untuk optimasi nilai, content_ids untuk
// membedakan paket, channel + placement untuk membaca tombol mana yang kerja.
export function orderParams(o: {
  channel: Channel;
  placement: string;
  value: number;
  packageId: string;
  contentName: string;
}): MetaParams {
  return {
    value: o.value,
    currency: "IDR",
    content_type: "product",
    content_ids: [o.packageId],
    content_name: o.contentName,
    channel: o.channel,
    placement: o.placement,
  };
}

// Tap ganda di HP membuka dua tab dan menembak dua event untuk satu niat.
// Paket ikut masuk kunci: lima kartu harga berbagi channel + placement yang
// sama, jadi tanpa itu klik di kartu kedua dibuang sebagai "duplikat".
const DEDUP_WINDOW_MS = 2000;
const lastFired = new Map<string, number>();

export function trackMeta(eventName: MetaEvent, params: MetaParams) {
  const key = [eventName, params.channel, params.placement, params.content_ids].join("|");
  const now = Date.now();
  if (now - (lastFired.get(key) ?? 0) < DEDUP_WINDOW_MS) return;
  lastFired.set(key, now);

  const eventId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${eventName}-${now}-${Math.random().toString(36).slice(2)}`;

  const w = window as typeof window & { fbq?: Fbq };
  w.fbq?.("track", eventName, params, { eventID: eventId });

  // ?test_event_code=TESTxxxx di URL meneruskan kode dari Events Manager >
  // Test Events ke sinyal server, supaya dedup browser+server bisa dicek.
  const testEventCode = new URLSearchParams(window.location.search).get("test_event_code");

  fetch("/api/capi", {
    method: "POST",
    keepalive: true,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
      custom_data: params,
      ...(testEventCode ? { test_event_code: testEventCode } : {}),
    }),
  }).catch(() => {
    // Sinyal server bersifat best-effort - jangan pernah blokir kunjungan
    // visitor hanya karena relay tracking gagal.
  });
}
