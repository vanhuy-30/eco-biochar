"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Info } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Split layout: heading + tab list on the left (vertical from lg), panel on the right.
 * Below lg the tabs become a horizontally scrollable row of pills.
 */
export function ApplicationsSection({ t }: { t: Dictionary["applications"] }) {
  const items = t.items;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = items.length;
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
    tabs.current[next]?.focus();
  };

  return (
    <section id="ung-dung" aria-labelledby="applications-title" className="section-pad bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="min-w-0 lg:col-span-5 xl:col-span-4">
          <p className="eyebrow flex items-center gap-3 text-eyebrow">
            <span aria-hidden className="h-px w-8 bg-eyebrow/50" />
            {t.index} / {t.eyebrow}
          </p>
          <h2
            id="applications-title"
            className="mt-6 font-display text-[clamp(2rem,1.5rem+1.6vw,2.85rem)] leading-[1.08] font-medium tracking-[-0.02em] text-heading"
          >
            {t.title} <span className="font-light text-accent">{t.accent}</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ink-muted">{t.intro}</p>

          <div
            role="tablist"
            aria-label={t.tablistLabel}
            className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 lg:mt-12 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-line lg:pb-0"
          >
            {items.map((app, i) => {
              const selected = i === active;
              return (
                <button
                  key={app.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${app.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${app.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium whitespace-nowrap transition-colors duration-300 lg:flex lg:items-center lg:gap-5 lg:rounded-none lg:border-0 lg:border-b lg:border-line lg:bg-transparent lg:px-0 lg:py-5 lg:text-left lg:font-display lg:text-xl lg:font-normal ${
                    selected
                      ? "border-primary bg-primary text-on-primary lg:text-accent"
                      : "border-ink/15 text-ink/75 hover:border-accent hover:text-accent lg:text-ink/60"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`hidden font-sans text-xs font-semibold tracking-[0.12em] lg:inline ${selected ? "text-accent" : "text-ink-muted"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="lg:flex-1">{app.label}</span>
                  <span
                    aria-hidden
                    className={`hidden h-px bg-accent transition-[width] duration-500 ease-(--ease-out-soft) lg:block ${selected ? "w-10" : "w-0"}`}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0 lg:col-span-7 xl:col-span-8">
          {items.map((app, i) => (
            <div
              key={app.id}
              role="tabpanel"
              id={`panel-${app.id}`}
              aria-labelledby={`tab-${app.id}`}
              hidden={i !== active}
              tabIndex={0}
              className="grain relative overflow-hidden rounded-[4px] bg-surface-alt p-6 md:p-10 lg:min-h-full lg:p-12"
            >
              <p
                aria-hidden
                className="pointer-events-none absolute -top-6 right-4 font-display text-[9rem] leading-none font-light text-coconut/25 select-none md:text-[12rem]"
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="relative">
                <h3 className="max-w-xl font-display text-title font-medium text-heading">{app.title}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">{app.description}</p>
                <dl className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="border-t border-line pt-5">
                    <dt className="eyebrow text-eyebrow">{t.formatLabel}</dt>
                    <dd className="mt-2 text-ink/85">{app.format}</dd>
                  </div>
                  <div className="border-t border-line pt-5">
                    <dt className="eyebrow text-eyebrow">{t.audienceLabel}</dt>
                    <dd className="mt-2 text-ink/85">{app.audience}</dd>
                  </div>
                  <div className="flex gap-3 rounded-[3px] bg-tint p-4 text-sm leading-relaxed text-tint-ink md:col-span-2">
                    <dt className="sr-only">{t.noteLabel}</dt>
                    <Info aria-hidden className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} />
                    <dd>{app.note}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
