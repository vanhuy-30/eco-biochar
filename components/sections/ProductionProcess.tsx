"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  Cog,
  Filter,
  Flame,
  FlaskConical,
  Layers,
  Package,
  Snowflake,
  Truck,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary, ProcessStage } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** One icon per step, in the same order as `process.stages` (the nine steps of the report). */
const stageIcons: LucideIcon[] = [Truck, Filter, Cog, Wind, Flame, Snowflake, Layers, FlaskConical, Package];

/**
 * The nine steps as a vertical timeline. From lg a sticky panel on the left shows the
 * selected step in detail; below lg the detail opens inline under the selected step.
 */
export function ProductionProcess({ t }: { t: Dictionary["process"] }) {
  const stages = t.stages;
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = stages.length;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? (i + 1) % n
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
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
  const CurrentIcon = stageIcons[active] ?? Package;

  return (
    <section id="quy-trinh" aria-labelledby="process-title" className="grain section-pad bg-section-dark text-cream">
      <div className="container-page">
        <SectionHeading id="process-title" tone="dark" {...t} />

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          {/* Detail panel (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div
              id="process-detail"
              aria-live="polite"
              className="sticky top-28 rounded-[4px] border border-line-light bg-cream/[0.04] p-8 xl:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-display text-[6.5rem] leading-[0.85] font-light text-mint/80">{current.number}</p>
                <span className="grid size-14 place-items-center rounded-full border border-mint/50 text-mint">
                  <CurrentIcon aria-hidden className="size-6" strokeWidth={1.5} />
                </span>
              </div>
              <h3 className="mt-8 font-display text-title text-cream">{current.title}</h3>
              {current.highlight ? (
                <p className="mt-4 inline-block rounded-full border border-coconut/50 px-3 py-1 text-sm text-coconut">
                  {current.highlight}
                </p>
              ) : null}
              <StageDetail stage={current} />
            </div>
          </div>

          {/* Timeline */}
          <Reveal className="lg:col-span-7">
            <ol>
              {stages.map((stage, i) => {
                const isActive = i === active;
                const isDone = i < active;
                const Icon = stageIcons[i] ?? Package;
                return (
                  <li key={stage.number} className="relative">
                    {/* Connector from this circle to the next; fills mint up to the selected step. */}
                    {i < stages.length - 1 ? (
                      <span
                        aria-hidden
                        className={`absolute top-16 -bottom-4 left-6 w-px transition-colors duration-500 ${
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
                      className="group flex w-full items-center gap-5 py-4 text-left"
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
                      <span className="flex flex-col gap-0.5">
                        <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-mint/70">
                          {stage.number}
                        </span>
                        <span
                          className={`font-display text-lg leading-snug transition-colors lg:text-xl ${
                            isActive ? "text-cream" : "text-cream/70 group-hover:text-cream"
                          }`}
                        >
                          {stage.title}
                        </span>
                        <span className="text-xs tracking-wide text-cream/45">{stage.keyword}</span>
                      </span>
                    </button>
                    {isActive ? (
                      <div className="pb-4 pl-[4.25rem] lg:hidden">
                        {stage.highlight ? (
                          <p className="mt-1 inline-block rounded-full border border-coconut/50 px-3 py-1 text-sm text-coconut">
                            {stage.highlight}
                          </p>
                        ) : null}
                        <StageDetail stage={stage} />
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line-light pt-8 sm:flex-row sm:items-center sm:gap-6">
          <p className="eyebrow text-mint">{t.outputsLabel}</p>
          <ul className="flex flex-wrap gap-2">
            {t.outputs.map((o) => (
              <li key={o} className="rounded-full border border-coconut/50 px-4 py-1.5 text-sm text-coconut">
                {o}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-cream/50">{t.disclaimer}</p>
      </div>
    </section>
  );
}

function StageDetail({ stage }: { stage: ProcessStage }) {
  return (
    <div>
      <p className="mt-4 max-w-2xl leading-relaxed text-cream/75">{stage.summary}</p>
      <ul className="mt-5 space-y-3">
        {stage.steps.map((s) => (
          <li key={s} className="border-l border-mint/50 pl-4 text-sm leading-relaxed text-cream/70">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
