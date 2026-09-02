import { FAQS } from "@/lib/config";
import Icon from "@/components/Icon";

export default function Faq() {
  return (
    <section id="faq" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-center text-3xl font-bold text-ink text-balance sm:text-4xl">
          Yang paling sering ditanyakan
        </h2>

        <div className="mt-10 divide-y divide-line rounded-xl border border-line bg-paper">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-6 open:pb-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-sm font-bold text-ink focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-forest-deep [&::-webkit-details-marker]:hidden">
                {f.q}
                <Icon
                  name="chevron"
                  className="h-4 w-4 shrink-0 text-ink-soft transition group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
