"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HERO_SLIDES } from "@/lib/config";
import Icon from "@/components/Icon";

const AUTOPLAY_MS = 6000;
const COUNT = HERO_SLIDES.length;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Functional updaters throughout - two clicks fired in the same tick (or a
  // manual click racing the autoplay tick) must never read a stale `index`
  // from a stale closure.
  const step = useCallback((delta: number) => {
    setIndex((i) => (i + delta + COUNT) % COUNT);
  }, []);
  const goToIndex = useCallback((target: number) => {
    setIndex(((target % COUNT) + COUNT) % COUNT);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion) return;
    timerRef.current = setInterval(() => step(1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // Restarting the interval on every manual nav (via `index` in deps) means
    // a manual click always buys a full fresh cycle before autoplay resumes.
  }, [paused, index, step]);

  return (
    <section
      aria-label="Promo NurAlive"
      className="relative mt-16 w-full overflow-hidden bg-forest-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[750/900] w-full sm:aspect-[1920/720]">
        {HERO_SLIDES.map((slide, i) => (
          <Link
            key={slide.id}
            href="/#paket"
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            className={`absolute inset-0 block transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <picture>
              <source media="(min-width: 640px)" srcSet={slide.desktopSrc} />
              <img
                src={slide.mobileSrc}
                alt={slide.alt}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            </picture>
          </Link>
        ))}
      </div>

      {/* live region for screen readers, separate from the hidden slides above */}
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} dari {COUNT}: {HERO_SLIDES[index].alt}
      </p>

      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Slide sebelumnya"
        className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5 sm:h-10 sm:w-10"
      >
        <Icon name="chevron" className="h-5 w-5 rotate-90" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Slide berikutnya"
        className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 sm:h-10 sm:w-10"
      >
        <Icon name="chevron" className="h-5 w-5 -rotate-90" aria-hidden />
      </button>

      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2 sm:bottom-5">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToIndex(i)}
            aria-label={`Ke slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
