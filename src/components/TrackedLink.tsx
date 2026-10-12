"use client";

import { trackMeta, type MetaEvent, type MetaParams } from "@/lib/meta-track";

// Link keluar (WhatsApp, marketplace, webstore) yang menembak event Meta saat
// diklik. Semua tujuan di sini membuka tab baru, jadi halaman tetap hidup dan
// sinyal browser sempat terkirim sebelum pengunjung berpindah.
export default function TrackedLink({
  event,
  params,
  children,
  ...anchor
}: {
  event: MetaEvent;
  params: MetaParams;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">) {
  return (
    <a
      {...anchor}
      target="_blank"
      rel="noopener"
      onClick={(e) => {
        anchor.onClick?.(e);
        trackMeta(event, params);
      }}
    >
      {children}
    </a>
  );
}
