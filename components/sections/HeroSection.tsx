import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { images } from "@/content/images";
import { ButtonLink } from "@/components/ui/Button";
import { CircularMark } from "@/components/ui/CircularMark";
import { Marquee } from "@/components/ui/Marquee";

/** Stagger offset for the hero entrance (added to --hero-delay in globals.css). */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function HeroSection({ t }: { t: Dictionary["hero"] }) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="grain relative overflow-x-clip bg-section-dark text-cream"
    >
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute -inset-[10%] bg-[radial-gradient(50%_45%_at_80%_30%,rgba(0,200,150,0.16),transparent_70%)]"
      />
      <div className="container-page relative pt-28 pb-14 md:pt-36 lg:pt-40 lg:pb-24">
        <p className="hero-rise eyebrow flex items-center gap-3 text-mint">
          <span aria-hidden className="hero-rule h-px w-8 shrink-0 bg-mint/60" />
          {t.eyebrow}
        </p>

        <h1
          id="hero-title"
          className="mt-5 max-w-[15ch] font-display md:mt-7 text-display font-medium tracking-[-0.03em] md:max-w-[17ch]"
        >
          <span className="hero-fade" style={delay(150)}>
            {t.title}
          </span>{" "}
          <span className="hero-fade font-light text-mint italic" style={delay(450)}>
            {t.accent}
          </span>
        </h1>

        {/* Below lg the product image comes first so it is visible in the first viewport. */}
        <div className="mt-8 grid gap-10 md:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between gap-10 lg:col-span-4">
            <div>
              <p className="hero-rise max-w-md text-lg leading-relaxed text-cream/80" style={delay(650)}>
                {t.body}
              </p>
              <div
                style={delay(800)}
                className="hero-rise mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6 lg:flex-col lg:items-start lg:gap-2"
              >
                <ButtonLink href="#san-pham" variant="light">
                  {t.ctaPrimary}
                </ButtonLink>
                <ButtonLink href="#hop-tac" variant="text-light" className="justify-start">
                  {t.ctaSecondary}
                </ButtonLink>
              </div>
            </div>

            <dl style={delay(950)} className="hero-rise grid grid-cols-2 gap-6 border-t border-line-light pt-6 text-sm">
              {t.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-cream/55">{f.label}</dt>
                  <dd className="mt-1 font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="relative order-first lg:order-none lg:col-span-8">
            <CircularMark className="hero-orbit absolute -top-20 -right-16 hidden size-72 text-mint/40 lg:block" />
            <div className="hero-unveil relative overflow-hidden rounded-t-[140px] rounded-b-[4px] bg-forest-deep sm:rounded-t-[220px] lg:rounded-t-[280px]">
              <Image
                src={images.packagingDuo.src}
                width={images.packagingDuo.width}
                height={images.packagingDuo.height}
                alt={t.imageAlt}
                priority
                sizes="(min-width: 1320px) 860px, (min-width: 1024px) 64vw, 100vw"
                className="hero-breathe aspect-[4/3] w-full object-cover object-center sm:aspect-[1420/847]"
              />
            </div>
            <figcaption
              style={delay(1200)}
              className="hero-rise mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-cream/55"
            >
              <span>{t.imageCaption}</span>
              <span>{t.imageNote}</span>
            </figcaption>
          </figure>
        </div>

        <a
          href="#ve-chung-toi"
          style={delay(1300)}
          className="hero-rise mt-14 hidden items-center gap-3 text-xs tracking-[0.2em] text-cream/60 uppercase transition-colors hover:text-mint lg:inline-flex"
        >
          <ArrowDown aria-hidden className="size-4 animate-bounce motion-reduce:animate-none" strokeWidth={1.5} />
          {t.scrollCue}
        </a>
      </div>

      <Marquee items={t.marquee} />
    </section>
  );
}
