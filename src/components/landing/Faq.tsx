import { FAQS } from "@/lib/config";

export default function Faq() {
  return (
    <section id="faq" className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center text-xs font-bold tracking-widest text-honey-deep uppercase">
          FAQ
        </p>
        <h2 className="font-display mt-2 text-center text-3xl font-bold text-ink text-balance sm:text-4xl">
          Yang paling sering ditanyakan
        </h2>

        <div className="mt-10 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-line bg-cream/60 open:bg-cream"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-sm font-bold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden
                  className="text-lg text-leaf transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
