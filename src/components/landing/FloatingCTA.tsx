"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/config";

// Tombol WA melayang (selalu) + sticky "Beli Sekarang" di mobile
// setelah pengunjung scroll melewati hero.
export default function FloatingCTA() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={waLink("Halo NurAlive, saya mau tanya tentang produknya.")}
        target="_blank"
        rel="noopener"
        aria-label="Chat WhatsApp"
        className="fixed right-4 bottom-20 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-lg transition hover:scale-105 sm:bottom-6"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden>
          <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.1.6 4.1 1.6 5.9L4 29l8.4-1.5c1.7.9 3.6 1.4 5.6 1.4 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.3l-.4-.2-5 .9.9-4.8-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.5-9.8 10.1-9.8s10.1 4.4 10.1 9.8-4.5 10-10 10zm5.6-7.3c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1c-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5s0-.4 0-.5c0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1-1.1 2.5 1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4l-.6-.4z" />
        </svg>
      </a>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 backdrop-blur transition-transform sm:hidden ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Link
          href="/#paket"
          className="block rounded-full bg-leaf py-3.5 text-center text-sm font-bold text-white shadow-lg"
        >
          Beli Sekarang — mulai Rp 175rb
        </Link>
      </div>
    </>
  );
}
