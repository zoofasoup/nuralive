import type { Metadata } from "next";
import Link from "next/link";
import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = { title: "Checkout" };

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ paket?: string }>;
}) {
  const { paket } = await searchParams;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Link href="/" className="text-sm font-semibold text-leaf hover:underline">
        ← Kembali ke beranda
      </Link>
      <h1 className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">
        Checkout
      </h1>
      <p className="mt-2 text-ink-soft">
        Isi data di bawah — pesanan langsung kami proses, konfirmasi lewat
        WhatsApp.
      </p>
      <div className="mt-8">
        <CheckoutForm initialPackage={paket ?? "hemat-3"} />
      </div>
    </main>
  );
}
