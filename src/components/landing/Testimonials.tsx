import { TESTIMONIALS } from "@/lib/config";

export default function Testimonials() {
  return (
    <section id="testimoni" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-bold tracking-widest text-honey-deep uppercase">
        Kata mereka
      </p>
      <h2 className="font-display mt-2 max-w-2xl text-3xl font-bold text-ink text-balance sm:text-4xl">
        Cerita dari dapur & meja kerja pelanggan kami
      </h2>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="break-inside-avoid rounded-2xl border border-line bg-paper p-6"
          >
            <div aria-hidden className="text-honey">★★★★★</div>
            <blockquote className="mt-3 text-sm leading-relaxed text-ink">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf/10 font-display font-bold text-leaf"
              >
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-ink-soft">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-6 text-xs text-ink-soft">
        Testimoni adalah pengalaman pribadi pengguna; hasil dapat berbeda pada
        tiap orang.
      </p>
    </section>
  );
}
