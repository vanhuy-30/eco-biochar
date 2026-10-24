import Image from "next/image";
import { ExternalLink, Newspaper } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { images } from "@/content/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandStorySection({ t, logoAlt }: { t: Dictionary["story"]; logoAlt: string }) {
  return (
    <section id="ve-chung-toi" aria-labelledby="story-title" className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading id="story-title" {...t} />

        {/* Editorial figure: breaks the heading → content rhythm with one oversized, sourced number. */}
        <Reveal className="mt-16 grid gap-8 border-y border-line py-10 md:py-14 lg:mt-24 lg:grid-cols-12 lg:items-end lg:gap-12">
          <p className="flex flex-wrap items-baseline gap-x-4 lg:col-span-6">
            <span className="eyebrow w-full text-eyebrow">{t.statPrefix}</span>
            <span className="font-display text-[clamp(5rem,15vw,11rem)] leading-[0.85] font-light tracking-[-0.04em] text-heading">
              {t.statNumber}
            </span>
            <span className="font-display text-title text-accent">{t.statUnit}</span>
          </p>
          <div className="lg:col-span-6">
            <p className="font-display text-xl leading-snug font-light text-heading md:text-2xl">{t.statLabel}</p>
            {/* Citation: the whole card opens the original article in a new tab. */}
            <a
              href={t.statSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex items-start gap-4 rounded-[3px] border border-line p-4 transition-colors hover:border-accent md:p-5"
            >
              <Newspaper aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.6} />
              <span className="min-w-0 flex-1">
                <span className="eyebrow block text-eyebrow">{t.statSource.label}</span>
                <span className="mt-1.5 block font-medium text-heading underline-offset-4 group-hover:underline">
                  {t.statSource.title}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-ink-muted">{t.statSource.meta}</span>
                <span className="sr-only"> ({t.statSource.openHint})</span>
              </span>
              <ExternalLink
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-ink-muted transition-colors group-hover:text-accent"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            {/* Fixed light "paper card" in both themes: the raster logo is designed for a cream background. */}
            <figure className="grain relative overflow-hidden rounded-[4px] bg-[#e8dcc5]">
              <Image
                src={images.logoFull.src}
                width={images.logoFull.width}
                height={images.logoFull.height}
                alt={logoAlt}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="mx-auto w-4/5 max-w-md py-10 mix-blend-multiply"
              />
              <figcaption className="border-t border-char/10 px-6 py-5 text-sm leading-relaxed text-char/75">
                {t.logoCaption}
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <ol className="border-t border-line">
              {t.points.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 80}
                  className="grid gap-3 border-b border-line py-7 md:grid-cols-[4rem_1fr]"
                >
                  <span className="font-display text-2xl font-light text-eyebrow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-heading">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-muted">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <Reveal className="mt-16 lg:mt-24">
          <p className="eyebrow text-eyebrow">{t.chainLabel}</p>
          <ol className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3 font-display text-xl text-heading md:text-2xl">
            {t.chain.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className={i === t.chain.length - 1 ? "text-accent" : ""}>{step}</span>
                {i < t.chain.length - 1 ? (
                  <span aria-hidden className="text-mint">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
