import Link from "next/link";
import Footer from "@/components/landing/Footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <Link href="/" className="text-sm font-semibold text-leaf hover:underline">
          ← Kembali ke beranda
        </Link>
        <article className="prose-sm mt-6 [&_h1]:font-display [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-ink [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-ink-soft [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5 [&_li]:text-sm [&_li]:text-ink-soft">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
