import { TESTIMONIALS } from "@/lib/config";

export default function Testimonials() {
  const heroTestimonial = TESTIMONIALS[0];
  const otherTestimonials = TESTIMONIALS.slice(1);

  return (
    <section id="testimoni" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 border-t border-line/50">
      <p className="text-xs font-bold tracking-widest text-honey-deep uppercase">
        Kata mereka
      </p>
      <h2 className="font-display mt-2 max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
        Cerita dari dapur & meja kerja pelanggan kami
      </h2>

      {heroTestimonial && (
        <div className="mt-12 bg-cream-deep p-8 sm:p-12 rounded-xl">
          <div aria-hidden className="text-honey text-xl">★★★★★</div>
          <blockquote className="mt-5 font-display text-xl sm:text-2xl leading-relaxed text-ink font-semibold">
            “{heroTestimonial.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <span
              aria-hidden
              className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf font-display font-bold text-white text-lg"
            >
              {heroTestimonial.name.charAt(0)}
            </span>
            <div>
              <p className="font-bold text-ink">{heroTestimonial.name}</p>
              <p className="text-sm text-ink-soft">{heroTestimonial.role}</p>
            </div>
          </figcaption>
        </div>
      )}

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {otherTestimonials.map((t) => (
          <figure
            key={t.name}
            className="pl-5 border-l-2 border-line"
          >
            <div aria-hidden className="text-honey text-sm">★★★★★</div>
            <blockquote className="mt-3 text-sm leading-relaxed text-ink">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4">
              <p className="text-sm font-bold text-ink">{t.name}</p>
              <p className="text-xs text-ink-soft">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-12 text-xs text-ink-soft">
        Testimoni adalah pengalaman pribadi pengguna; hasil dapat berbeda pada
        tiap orang.
      </p>
    </section>
  );
}
