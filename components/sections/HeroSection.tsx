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

type Props = {
  t: Dictionary["hero"];
  brand: Dictionary["brand"];
  productAlt: Dictionary["products"]["imageAlt"];
};

export function HeroSection({ t, brand, productAlt }: Props) {
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
      <div className="container-page relative pt-28 pb-14 md:pt-36 lg:pt-36 lg:pb-20">
        {/*
          Desktop: text on the left, the two products beside it from the very top, so they are in the first
          viewport. Below lg the order is lockup + headline, products, then copy and calls to action.
        */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-14 lg:gap-y-10">
          <div className="lg:col-span-6 lg:row-start-1">
            {/* The company comes first: logo mark on a cream seal, company name, product line smaller. */}
            <div className="hero-rise flex items-center gap-4 md:gap-5">
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-cream ring-1 ring-cream/25 md:size-[4.5rem]">
                <Image
                  src={images.logoMark.src}
                  width={images.logoMark.width}
                  height={images.logoMark.height}
                  alt=""
                  priority
                  className="h-[68%] w-auto"
                />
              </span>
              <div>
                <p className="eyebrow text-mint">{t.companyLabel}</p>
                <p className="mt-1 font-display text-[clamp(1.4rem,1.1rem+1.5vw,2.25rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-balance">
                  {brand.company}
                </p>
                <p className="mt-2 text-sm text-cream/70">{t.productLine}</p>
              </div>
            </div>

            <h1 id="hero-title" className="mt-8 font-display text-display font-medium tracking-[-0.03em] md:mt-10">
              <span className="hero-fade" style={delay(150)}>
                {t.title}
              </span>{" "}
              <span className="hero-fade font-light text-mint italic" style={delay(450)}>
                {t.accent}
              </span>
            </h1>
          </div>

          <figure className="relative lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
            <CircularMark className="hero-orbit absolute -top-16 -right-12 hidden size-64 text-mint/40 lg:block" />
            {/* Two sharp packaging shots in matching arches, aligned on the same top edge. */}
            <div className="relative mx-auto grid max-w-[42rem] grid-cols-2 gap-3 sm:gap-5">
              {(["chunk", "powder"] as const).map((id, i) => (
                <div
                  key={id}
                  style={delay(i * 180)}
                  className="hero-unveil overflow-hidden rounded-t-[999px] rounded-b-[4px] bg-forest-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] ring-1 ring-cream/15"
                >
                  <Image
                    src={images[id].src}
                    width={images[id].width}
                    height={images[id].height}
                    alt={productAlt[id]}
                    priority
                    sizes="(min-width: 1320px) 330px, (min-width: 1024px) 26vw, 46vw"
                    className="hero-breathe aspect-[720/856] w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <figcaption
              style={delay(1200)}
              className="hero-rise mx-auto mt-4 flex max-w-[42rem] flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-cream/55"
            >
              <span>{t.imageCaption}</span>
              <span>{t.imageNote}</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-6 lg:row-start-2">
            <p className="hero-rise max-w-md text-lg leading-relaxed text-cream/80" style={delay(650)}>
              {t.body}
            </p>
            <div
              style={delay(800)}
              className="hero-rise mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6"
            >
              <ButtonLink href="#san-pham" variant="light">
                {t.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="#hop-tac" variant="text-light" className="justify-start">
                {t.ctaSecondary}
              </ButtonLink>
            </div>

            <dl
              style={delay(950)}
              className="hero-rise mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-line-light pt-6 text-sm"
            >
              {t.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-cream/55">{f.label}</dt>
                  <dd className="mt-1 font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <a
          href="#ve-chung-toi"
          style={delay(1300)}
          className="hero-rise mt-12 hidden items-center gap-3 text-xs tracking-[0.2em] text-cream/60 uppercase transition-colors hover:text-mint lg:inline-flex"
        >
          <ArrowDown aria-hidden className="size-4 animate-bounce motion-reduce:animate-none" strokeWidth={1.5} />
          {t.scrollCue}
        </a>
      </div>

      <Marquee items={t.marquee} />
    </section>
  );
}
