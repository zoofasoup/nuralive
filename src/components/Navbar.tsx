"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { href: "/#untuk-siapa", label: "Untuk Siapa?" },
  { href: "/#paket", label: "Paket & Harga" },
  { href: "/#komposisi", label: "Komposisi" },
  { href: "/#testimoni", label: "Testimoni" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="NurAlive Home">
          <Logo className="h-10 sm:h-12 w-auto" />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink-soft transition hover:text-leaf"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/#paket"
            className="rounded-full bg-gradient-to-r from-leaf to-leaf-deep px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:from-leaf-deep hover:to-leaf-deep"
          >
            Beli Sekarang
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream px-4 pb-4 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line/60 py-3 text-sm font-medium text-ink"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/#paket"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-gradient-to-r from-leaf to-leaf-deep px-5 py-3 text-center text-sm font-bold text-white"
          >
            Beli Sekarang
          </Link>
        </div>
      )}
    </header>
  );
}
