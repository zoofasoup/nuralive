import Link from "next/link";
import { BRAND, waLink } from "@/lib/config";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" aria-label="NuraLive Home" className="inline-block">
            <Logo className="h-12 sm:h-14 w-auto" />
          </Link>
          <p className="mt-3 max-w-sm text-sm text-ink-soft">
            Tetes herbal minyak habbatussauda &amp; zaitun extra virgin —
            membantu meredakan batuk dan memelihara daya tahan tubuh keluarga
            Indonesia.
          </p>
          <p className="mt-4 text-sm text-ink-soft">
            {BRAND.company} · {BRAND.city}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-ink uppercase">Belanja</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/#paket" className="text-ink-soft hover:text-leaf">Paket &amp; Harga</Link></li>
            <li><Link href="/#faq" className="text-ink-soft hover:text-leaf">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-ink uppercase">Bantuan</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={waLink("Halo NuraLive, saya butuh bantuan.")}
                target="_blank"
                rel="noopener"
                className="text-ink-soft hover:text-leaf"
              >
                WhatsApp CS: {BRAND.whatsappDisplay}
              </a>
            </li>
            <li className="text-ink-soft">{BRAND.csHours}</li>
            <li><Link href="/pengiriman" className="text-ink-soft hover:text-leaf">Pengiriman &amp; Retur</Link></li>
            <li><Link href="/syarat-ketentuan" className="text-ink-soft hover:text-leaf">Syarat &amp; Ketentuan</Link></li>
            <li><Link href="/kebijakan-privasi" className="text-ink-soft hover:text-leaf">Kebijakan Privasi</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p>© {new Date().getFullYear()} {BRAND.name}. Seluruh hak cipta.</p>
            <p className="mt-1 text-ink-soft/80">Managed by Musawara Creative</p>
          </div>
          <p>
            Suplemen kesehatan — bukan pengganti obat. Konsultasikan ke dokter
            bila keluhan berlanjut.
          </p>
        </div>
      </div>
    </footer>
  );
}
