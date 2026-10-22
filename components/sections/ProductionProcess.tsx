"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { processStages, type ProcessStage } from "@/content/process";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductionProcess() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = processStages.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? (i + 1) % processStages.length
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? (i - 1 + processStages.length) % processStages.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  };

  const current = processStages[active];

  return (
    <section id="quy-trinh" aria-labelledby="process-title" className="grain section-pad bg-forest-ink text-cream">
      <div className="container-page">
        <SectionHeading
          id="process-title"
          index="03"
          eyebrow="Quy trình tuần hoàn"
          title="Từ gáo dừa"
          accent="trở về với đất."
          intro="Chín công đoạn sản xuất được nhóm thành sáu giai đoạn — từ thu gom nguyên liệu đến ứng dụng và phản hồi thực tế."
          tone="dark"
        />

        <Reveal className="mt-16 lg:mt-24">
          <ol className="relative grid gap-0 lg:grid-cols-6 lg:gap-4">
            <span
              aria-hidden
              className="absolute top-[1.375rem] right-[8%] left-[8%] hidden h-px bg-line-light lg:block"
            />
            {processStages.map((stage, i) => {
              const isActive = i === active;
              return (
                <li key={stage.number} className="relative border-b border-line-light lg:border-0">
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
                      className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-full border text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? "border-mint bg-mint text-forest-ink"
                          : "border-cream/30 bg-forest-ink text-cream/80 group-hover:border-mint group-hover:text-mint"
                      }`}
                    >
                      {stage.number}
                    </span>
                    <span className="flex flex-col gap-1">
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
                    <div className="pb-6 pl-16 lg:hidden">
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

        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-cream/50">
          Quy trình và thông số được xây dựng trong giai đoạn pilot; nhiệt độ, độ ẩm và các chỉ tiêu chất lượng sẽ tiếp
          tục được chuẩn hóa qua các lô sản xuất thực tế.
        </p>
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
