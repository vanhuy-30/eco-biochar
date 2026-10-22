"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Info } from "lucide-react";
import { applications } from "@/content/applications";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ApplicationsSection() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = applications.length;
    const next =
      e.key === "ArrowRight"
        ? (i + 1) % n
        : e.key === "ArrowLeft"
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
    <section id="ung-dung" aria-labelledby="applications-title" className="section-pad bg-cream">
      <div className="container-page">
        <SectionHeading
          id="applications-title"
          index="04"
          eyebrow="Ứng dụng"
          title="Phù hợp từng nhu cầu,"
          accent="không hứa hẹn chung chung."
          intro="Hiệu quả của Biochar thay đổi theo loại đất, đặc tính sản phẩm và cách sử dụng. Vì vậy Eco Biochar giới thiệu từng hướng ứng dụng kèm điều kiện cụ thể."
        />

        <Reveal className="mt-14 lg:mt-20">
          <div
            role="tablist"
            aria-label="Hướng ứng dụng"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {applications.map((app, i) => {
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
                  className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                    selected
                      ? "border-forest bg-forest text-cream"
                      : "border-char/15 text-char/75 hover:border-forest hover:text-forest"
                  }`}
                >
                  {app.label}
                </button>
              );
            })}
          </div>

          {applications.map((app, i) => (
            <div
              key={app.id}
              role="tabpanel"
              id={`panel-${app.id}`}
              aria-labelledby={`tab-${app.id}`}
              hidden={i !== active}
              tabIndex={0}
              className="mt-10 grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16"
            >
              <div className="lg:col-span-7">
                <p className="font-display text-6xl font-light text-coconut">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-title font-medium text-forest-ink">{app.title}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-char/80">{app.description}</p>
              </div>
              <dl className="grid content-start gap-6 lg:col-span-5">
                <div className="border-b border-line pb-5">
                  <dt className="eyebrow text-earth">Dạng sản phẩm</dt>
                  <dd className="mt-2 text-char/85">{app.format}</dd>
                </div>
                <div className="border-b border-line pb-5">
                  <dt className="eyebrow text-earth">Dành cho</dt>
                  <dd className="mt-2 text-char/85">{app.audience}</dd>
                </div>
                <div className="flex gap-3 rounded-[3px] bg-soft p-4 text-sm leading-relaxed text-forest-ink">
                  <dt className="sr-only">Lưu ý</dt>
                  <Info aria-hidden className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} />
                  <dd>{app.note}</dd>
                </div>
              </dl>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
