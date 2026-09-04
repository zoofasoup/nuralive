import Link from "next/link";
import { formatRupiah } from "@/lib/config";

// Harga launching sama seperti bundle "Paket Coba" (Isi 1) di Pricing -
// pakai angka literal di sini karena ini teks kampanye baku dari tim
// desain (bukan turunan dinamis dari PACKAGES), tapi nilainya sudah
// dicek cocok satu sama lain.
const LAUNCH_COMPARE_AT = 185_000;
const LAUNCH_PRICE = 150_000;
const MESSAGE = `#JagaYangJagain. NurAlive Launch Special Price! Harga launching ${formatRupiah(LAUNCH_PRICE)}, dari ${formatRupiah(LAUNCH_COMPARE_AT)}.`;

function TickerContent() {
  return (
    <>
      <span className="font-display font-bold tracking-wide">#JagaYangJagain</span>
      <span aria-hidden className="mx-4 opacity-50">
        ✦
      </span>
      <span>NurAlive Launch Special Price!</span>
      <span aria-hidden className="mx-4 opacity-50">
        ✦
      </span>
      <span>
        <s className="opacity-70">{formatRupiah(LAUNCH_COMPARE_AT)}</s>{" "}
        <span className="font-bold">{formatRupiah(LAUNCH_PRICE)}</span>
      </span>
      <span aria-hidden className="mx-4 opacity-50">
        ✦
      </span>
    </>
  );
}

export default function PromoTicker() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-9 overflow-hidden bg-clay text-sm text-white">
      <Link
        href="/#paket"
        aria-label={MESSAGE}
        className="animate-marquee flex h-9 w-max items-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} aria-hidden className="flex items-center px-4">
            <TickerContent />
          </span>
        ))}
      </Link>
    </div>
  );
}
