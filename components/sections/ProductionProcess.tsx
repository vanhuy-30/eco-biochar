"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Filter, FlaskConical, Flame, Package, Sprout, Truck, type LucideIcon } from "lucide-react";
import type { Dictionary, ProcessStage } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** One icon per stage, in the same order as `process.stages` in the dictionaries. */
const stageIcons: LucideIcon[] = [Truck, Filter, Flame, FlaskConical, Package, Sprout];

/** Track runs between the centres of the first and last of six columns (gap 1rem). */
const TRACK_INSET = "calc((100% - 5rem) / 12)";

export function ProductionProcess({ t }: { t: Dictionary["process"] }) {
  const stages = t.stages;
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = stages.length;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? (i + 1) % n
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? (i - 1 + n) % n
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? n - 1
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  };

  const current = stages[active];

  return (
    <section id="quy-trinh" aria-labelledby="process-title" className="grain section-pad bg-section-dark text-cream">
      <div className="container-page">
        <SectionHeading id="process-title" tone="dark" {...t} />

        <Reveal className="mt-16 lg:mt-24">
          <ol className="relative grid gap-0 lg:grid-cols-6 lg:gap-4">
            {/* Desktop progress track: base line + mint fill up to the selected stage. */}
            <span
              aria-hidden
              className="absolute top-6 hidden h-px bg-line-light lg:block"
              style={{ left: TRACK_INSET, right: TRACK_INSET }}
            >
              <span
                className="absolute inset-y-0 left-0 bg-mint transition-[width] duration-700 ease-(--ease-out-soft)"
                style={{ width: `${(active / (stages.length - 1)) * 100}%` }}
              />
            </span>
            {stages.map((stage, i) => {
              const isActive = i === active;
              const isDone = i < active;
              const Icon = stageIcons[i] ?? Sprout;
              return (
                <li key={stage.number} className="relative">
                  {/* Mobile timeline segment, from this circle's centre down to the next one. */}
                  {i < stages.length - 1 ? (
                    <span
                      aria-hidden
                      className={`absolute top-11 bottom-[-2.75rem] left-6 w-px transition-colors duration-500 lg:hidden ${
                        isDone ? "bg-mint" : "bg-line-light"
                      }`}
                    />
                  ) : null}
                  <button
                    ref={(el) => {
                      buttons.current[i] = el;
                    }}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="process-detail"
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className="group flex w-full items-center gap-5 py-5 text-left lg:flex-col lg:items-center lg:gap-4 lg:py-0 lg:text-center"
                  >
                    <span
                      className={`relative z-10 grid size-12 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-300 ${
                        isActive
                          ? "scale-110 border-mint bg-mint text-forest-ink"
                          : isDone
                            ? "border-mint/70 bg-section-dark text-mint"
                            : "border-cream/30 bg-section-dark text-cream/75 group-hover:border-mint group-hover:text-mint"
                      }`}
                    >
                      <Icon aria-hidden className="size-5" strokeWidth={1.6} />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-mint/70">{stage.number}</span>
                      <span
                        className={`font-display text-lg leading-snug transition-colors lg:text-[1.1rem] ${
                          isActive ? "text-cream" : "text-cream/70 group-hover:text-cream"
                        }`}
                      >
                        {stage.title}
                      </span>
                      <span className="text-xs tracking-wide text-cream/45">{stage.keyword}</span>
                    </span>
                  </button>
                  {isActive ? (
                    <div className="pb-6 pl-[4.25rem] lg:hidden">
                      <StageDetail stage={stage} />
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div
          id="process-detail"
          aria-live="polite"
          className="mt-14 hidden grid-cols-12 gap-10 border-t border-line-light pt-10 lg:grid"
        >
          <div className="col-span-4">
            <p className="font-display text-[7rem] leading-none font-light text-mint/80">{current.number}</p>
            {current.highlight ? (
              <p className="mt-4 inline-block rounded-full border border-coconut/50 px-3 py-1 text-sm text-coconut">
                {current.highlight}
              </p>
            ) : null}
          </div>
          <div className="col-span-8">
            <h3 className="font-display text-title text-cream">{current.title}</h3>
            <StageDetail stage={current} />
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-cream/50">{t.disclaimer}</p>
      </div>
    </section>
  );
}

function StageDetail({ stage }: { stage: ProcessStage }) {
  return (
    <div>
      <p className="mt-3 max-w-2xl leading-relaxed text-cream/75">{stage.summary}</p>
      <ul className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {stage.steps.map((s) => (
          <li key={s} className="border-l border-mint/50 pl-4 text-sm leading-relaxed text-cream/70">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
