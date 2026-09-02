import { TESTIMONIALS } from "@/lib/config";
import Icon from "@/components/Icon";

function Stars() {
  return (
    <div aria-hidden className="flex gap-0.5 text-clay">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const heroTestimonial = TESTIMONIALS[0];
  const otherTestimonials = TESTIMONIALS.slice(1);

  return (
    <section id="testimoni" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="font-display max-w-2xl text-3xl font-bold text-ink text-balance sm:text-4xl">
        Cerita dari keluarga yang sudah coba NurAlive
      </h2>

      {heroTestimonial && (
        <div className="mt-10 rounded-xl bg-cream p-8 sm:p-12">
          <Stars />
          <blockquote className="font-display mt-5 text-xl leading-snug font-semibold text-ink sm:text-2xl">
            &ldquo;{heroTestimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <span
              aria-hidden
              className="font-display flex h-12 w-12 items-center justify-center rounded-full bg-forest text-lg font-bold text-white"
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

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {otherTestimonials.map((t) => (
          <figure key={t.name} className="border-t border-line pt-5">
            <Stars />
            <blockquote className="mt-3 text-sm leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4">
              <p className="text-sm font-bold text-ink">{t.name}</p>
              <p className="text-xs text-ink-soft">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-xs text-ink-soft">
        Testimoni adalah pengalaman pribadi pengguna; hasil dapat berbeda pada
        tiap orang.
      </p>
    </section>
  );
}
