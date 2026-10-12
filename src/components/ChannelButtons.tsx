import { SALES_CHANNELS, waLink, type Pkg, type SalesChannel } from "@/lib/config";
import { orderParams, type Channel } from "@/lib/meta-track";
import TrackedLink from "@/components/TrackedLink";

// Glyph merek resmi dari Simple Icons (CC0) - dipakai secara nominatif untuk
// menunjukkan di kanal mana produk dijual, selalu disertai label teks nama
// platform. Tokopedia belum ada di Simple Icons dan belum ada aset resmi dari
// tim, jadi sementara memakai ikon keranjang netral - JANGAN gambar ulang
// lambang Tokopedia dari perkiraan, tunggu file aslinya.
function ShopeeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden>
      <path
        d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z"
        fill="currentColor"
      />
    </svg>
  );
}

function TokopediaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden>
      <path
        d="M4 10 5 4h14l1 6M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9M4 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const ICON: Record<string, () => React.ReactElement> = {
  shopee: ShopeeIcon,
  tokopedia: TokopediaIcon,
  tiktok: TikTokIcon,
  website: StoreIcon,
};

// Warna resmi tiap platform digelapkan sedikit dari brand asli supaya teks
// tombolnya tetap lolos kontras AA 4.5:1 di atas latar putih (diverifikasi).
const CHANNEL_STYLE: Record<string, string> = {
  shopee: "border-[#EE4D2D]/30 text-[#d83d0e] hover:bg-[#EE4D2D]/10",
  tokopedia: "border-[#03AC0E]/30 text-[#148802] hover:bg-[#03AC0E]/10",
  tiktok: "border-black/25 text-black hover:bg-black/5",
  website: "border-forest/40 text-forest-deep hover:bg-forest/10",
};

// id kanal di SALES_CHANNELS -> nama kanal di event Meta. "website" diganti
// "webstore" supaya di Events Manager tidak ambigu (semua ini juga "website").
const CHANNEL_KEY: Record<SalesChannel["id"], Channel> = {
  shopee: "shopee",
  tokopedia: "tokopedia",
  tiktok: "tiktok",
  website: "webstore",
};

/**
 * Baris tombol "beli di mana saja" - situs ini adalah hub, bukan checkout
 * sendiri. Nama paket disisipkan ke pesan WhatsApp supaya CS tahu paket apa
 * yang sedang dilihat pengunjung, dan setiap klik menembak Lead berisi paket
 * + nilainya (satu-satunya tempat di situs utama yang tahu paket mana).
 */
export default function ChannelButtons({
  pkg,
  className = "",
}: {
  pkg: Pkg;
  className?: string;
}) {
  const lead = (channel: Channel) =>
    orderParams({
      channel,
      placement: "pricing-card",
      value: pkg.price,
      packageId: pkg.id,
      contentName: pkg.label,
    });

  return (
    <div className={`grid grid-cols-2 gap-2.5 ${className}`}>
      {SALES_CHANNELS.map((c) => {
        const Icon = ICON[c.id];
        return (
          <TrackedLink
            key={c.id}
            href={c.url}
            event="Lead"
            params={lead(CHANNEL_KEY[c.id])}
            className={`flex items-center justify-center gap-2 rounded-lg border-2 bg-paper px-3 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep ${CHANNEL_STYLE[c.id]}`}
          >
            <Icon />
            {c.label}
          </TrackedLink>
        );
      })}
      <TrackedLink
        href={waLink(`Halo NurAlive, saya mau tanya/pesan ${pkg.label} lewat WhatsApp.`)}
        event="Lead"
        params={lead("whatsapp")}
        className="col-span-full flex items-center justify-center gap-2 rounded-lg border-2 border-[#25D366]/30 bg-paper px-3 py-3 text-sm font-bold text-[#148543] transition hover:bg-[#25D366]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep"
      >
        <WhatsAppIcon />
        WhatsApp
      </TrackedLink>
    </div>
  );
}
