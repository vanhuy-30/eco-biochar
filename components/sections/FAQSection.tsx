"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

export function FAQSection({ t }: { t: Dictionary["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="hoi-dap" aria-labelledby="faq-title" className="section-pad bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow flex items-center gap-3 text-eyebrow">
            <span aria-hidden className="h-px w-8 bg-eyebrow/50" />
            {t.index} / {t.eyebrow}
          </p>
          <h2 id="faq-title" className="mt-6 font-display text-headline font-medium tracking-[-0.02em] text-heading">
            {t.title} <span className="font-light text-accent">{t.accent}</span>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-ink-muted">
            {t.introBefore}{" "}
            <a href="#lien-he" className="text-accent underline underline-offset-4 hover:opacity-80">
              {t.introLink}
            </a>
            .
          </p>
        </Reveal>

        <div className="border-t border-line lg:col-span-8">
          {t.items.map((item, i) => {
            const expanded = open === i;
            const id = `faq-${i}`;
            return (
              <div key={item.question} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    id={`${id}-button`}
                    aria-expanded={expanded}
                    aria-controls={`${id}-panel`}
                    onClick={() => setOpen(expanded ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl text-heading transition-colors group-hover:text-accent md:text-2xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden
                      className={`grid size-10 shrink-0 place-items-center rounded-full border transition-[transform,background-color,border-color] duration-500 ease-(--ease-out-soft) ${
                        expanded ? "rotate-45 border-primary bg-primary text-on-primary" : "border-ink/20 text-accent"
                      }`}
                    >
                      <Plus className="size-4" strokeWidth={1.75} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-button`}
                  inert={!expanded}
                  className={`grid transition-[grid-template-rows] duration-500 ease-(--ease-out-soft) ${
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-14 pb-7 leading-relaxed text-ink/75">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
