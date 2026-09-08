"use client";

// Tombol WA utama halaman promo - satu-satunya CTA di surface ini. Setiap
// klik menembak dua sinyal dengan event_id yang sama supaya Meta men-dedup:
// (1) pixel browser (fbq) untuk sinyal cepat, (2) /api/capi (Cloudflare
// Pages Function) untuk sinyal server-side yang tahan iOS/ad-blocker.

function readCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function fireLeadEvent(value: number) {
  const eventId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
  w.fbq?.(
    "track",
    "Lead",
    { value, currency: "IDR" },
    { eventID: eventId }
  );

  fetch("/api/capi", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      event_name: "Lead",
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
      custom_data: { value, currency: "IDR" },
    }),
  }).catch(() => {
    // Sinyal server bersifat best-effort - jangan pernah blokir kunjungan
    // WA visitor hanya karena relay tracking gagal.
  });
}

export default function PromoWhatsAppButton({
  href,
  value,
  className,
  children,
}: {
  href: string;
  value: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onClick={() => fireLeadEvent(value)}
      className={className}
    >
      {children}
    </a>
  );
}
