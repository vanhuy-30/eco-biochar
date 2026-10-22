import type { SectionCopy } from "@/content/types";
import { Reveal } from "./Reveal";

type Props = SectionCopy & { id: string; tone?: "light" | "dark" };

/** Eyebrow "01 / LABEL", two-tone serif headline on the left, short intro on the right. */
export function SectionHeading({ id, index, eyebrow, title, accent, intro, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
      <Reveal className="lg:col-span-8">
        <p className={`eyebrow flex items-center gap-3 ${dark ? "text-mint" : "text-eyebrow"}`}>
          <span aria-hidden className={`h-px w-8 ${dark ? "bg-mint/60" : "bg-eyebrow/50"}`} />
          {index} / {eyebrow}
        </p>
        <h2
          id={id}
          className={`mt-6 font-display text-headline font-medium tracking-[-0.02em] ${dark ? "text-cream" : "text-heading"}`}
        >
          {title}
          {accent ? (
            <>
              {" "}
              <span className={`font-light ${dark ? "text-mint" : "text-accent"}`}>{accent}</span>
            </>
          ) : null}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={120} className="lg:col-span-4">
          <p className={`max-w-md text-base leading-relaxed md:text-lg ${dark ? "text-cream/75" : "text-ink-muted"}`}>
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
