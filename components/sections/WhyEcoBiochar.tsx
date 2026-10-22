import Image from "next/image";
import type { Dictionary } from "@/content/types";
import { images } from "@/content/images";
import { Reveal } from "@/components/ui/Reveal";

export function WhyEcoBiochar({ t }: { t: Dictionary["why"] }) {
  return (
    <section id="khac-biet" aria-labelledby="why-title" className="section-pad bg-surface-alt">
      <div className="container-page">
        {/* Statement opening instead of the usual split heading, to vary the page rhythm. */}
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="eyebrow inline-flex items-center gap-3 text-eyebrow">
            <span aria-hidden className="h-px w-8 bg-eyebrow/50" />
            {t.index} / {t.eyebrow}
            <span aria-hidden className="h-px w-8 bg-eyebrow/50" />
          </p>
          <h2
            id="why-title"
            className="mt-8 font-display text-[clamp(2.2rem,1.2rem+3.6vw,4.75rem)] leading-[1.05] font-light tracking-[-0.025em] text-heading"
          >
            {t.title} <span className="text-accent italic">{t.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="grain sticky top-28 overflow-hidden rounded-[4px] bg-char p-8 text-cream md:p-10">
              <Image
                src={images.logoMark.src}
                width={images.logoMark.width}
                height={images.logoMark.height}
                alt=""
                className="h-20 w-auto"
              />
              <p className="eyebrow mt-10 text-mint">{t.strategyLabel}</p>
              <ol className="mt-6 space-y-1">
                {t.strategy.map((s, i) => (
                  <li key={s} className="flex items-baseline gap-4 font-display text-3xl font-light md:text-4xl">
                    <span className="font-sans text-sm font-semibold text-coconut">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={i === t.strategy.length - 1 ? "text-mint italic" : ""}>{s}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm leading-relaxed text-cream/60">{t.strategyBody}</p>
            </Reveal>
          </div>

          <ol className="border-t border-line lg:col-span-7">
            {t.items.map((d, i) => (
              <Reveal
                as="li"
                key={d.title}
                delay={i * 60}
                className="grid gap-4 border-b border-line py-9 md:grid-cols-[6rem_1fr] md:py-11"
              >
                <span className="font-display text-5xl leading-none font-light text-accent/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-heading">{d.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
