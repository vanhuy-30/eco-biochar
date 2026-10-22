import type { Dictionary } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { CircularMark } from "@/components/ui/CircularMark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryChip } from "./InquiryChip";

export function PartnershipSection({ t }: { t: Dictionary["partnership"] }) {
  return (
    <section
      id="hop-tac"
      aria-labelledby="partnership-title"
      className="grain section-pad relative overflow-hidden bg-section-brand text-cream"
    >
      <CircularMark className="pointer-events-none absolute -right-40 -bottom-40 size-[36rem] text-cream/10" />
      <div className="container-page relative">
        <SectionHeading id="partnership-title" tone="dark" {...t} />

        <ul className="mt-16 grid border-t border-line-light md:grid-cols-2 lg:mt-20">
          {t.partners.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 80}
              className={`border-b border-line-light py-9 md:px-8 md:py-11 ${i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
            >
              <h3 className="font-display text-2xl font-medium">{p.title}</h3>
              <p className="mt-4 text-sm text-cream/55">
                <span className="eyebrow mr-2 text-mint">{t.needLabel}</span>
                {p.need}
              </p>
              <p className="mt-3 leading-relaxed text-cream/85">
                <span className="eyebrow mr-2 text-coconut">{t.offerLabel}</span>
                {p.offer}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-cream/60">{t.shortcutsLabel}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.shortcuts.map((s) => (
                <li key={s.type}>
                  <InquiryChip label={s.label} type={s.type} />
                </li>
              ))}
            </ul>
          </div>
          <ButtonLink href="#lien-he" variant="light" className="shrink-0">
            {t.cta}
          </ButtonLink>
        </Reveal>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-cream/50">{t.disclaimer}</p>
      </div>
    </section>
  );
}
