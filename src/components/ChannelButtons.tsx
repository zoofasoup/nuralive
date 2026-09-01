import { SALES_CHANNELS, waLink } from "@/lib/config";

// Ikon sederhana per platform - bukan logo resmi (menghindari reproduksi
// merek dagang persis), tapi warna & bentuk cukup dikenali + selalu
// disertai label teks nama platform.
function ShopeeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M6 8V6.5a6 6 0 1 1 12 0V8h2.2l1 13H2.8l1-13H6Zm2 0h8V6.5a4 4 0 1 0-8 0V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TokopediaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect x="3" y="9" width="18" height="12" rx="2.5" fill="currentColor" />
      <path
        d="M8 9V7a4 4 0 1 1 8 0v2"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <circle cx="12" cy="15" r="2.2" fill="white" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const ICON: Record<string, () => React.ReactElement> = {
  shopee: ShopeeIcon,
  tokopedia: TokopediaIcon,
  website: StoreIcon,
};

// Warna resmi tiap platform digelapkan sedikit dari brand asli supaya teks
// tombolnya tetap lolos kontras AA 4.5:1 di atas latar putih (diverifikasi).
const CHANNEL_STYLE: Record<string, string> = {
  shopee: "border-[#EE4D2D]/30 text-[#d83d0e] hover:bg-[#EE4D2D]/10",
  tokopedia: "border-[#03AC0E]/30 text-[#148802] hover:bg-[#03AC0E]/10",
  website: "border-leaf/40 text-leaf-deep hover:bg-leaf/10",
};

/**
 * Baris tombol "beli di mana saja" - situs ini adalah hub, bukan checkout
 * sendiri. `context` disisipkan ke pesan WhatsApp supaya CS tahu produk/paket
 * apa yang sedang dilihat pengunjung.
 */
export default function ChannelButtons({
  context,
  className = "",
}: {
  context: string;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-2.5 sm:grid-cols-4 ${className}`}>
      {SALES_CHANNELS.map((c) => {
        const Icon = ICON[c.id];
        return (
          <a
            key={c.id}
            href={c.url}
            target="_blank"
            rel="noopener"
            className={`flex items-center justify-center gap-2 rounded-lg border-2 bg-paper px-3 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-deep ${CHANNEL_STYLE[c.id]}`}
          >
            <Icon />
            {c.label}
          </a>
        );
      })}
      <a
        href={waLink(`Halo NurAlive, saya mau tanya/pesan ${context} lewat WhatsApp.`)}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#25D366]/30 bg-paper px-3 py-3 text-sm font-bold text-[#148543] transition hover:bg-[#25D366]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-deep"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </div>
  );
}
