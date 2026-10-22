import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

type Copy = Dictionary["products"];

/**
 * Chunk vs Powder table. Below md each row becomes a two-column card
 * (criterion on its own line), so nothing scrolls sideways on phones.
 */
export function ProductComparison({ t }: { t: Copy }) {
  const [chunk, powder] = t.items;
  const cell = "px-4 py-4 align-top text-sm leading-relaxed md:px-6 md:py-5 md:text-[0.95rem]";

  return (
    <Reveal className="mt-20 lg:mt-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-eyebrow">{t.compare.eyebrow}</p>
          <h3 className="mt-3 font-display text-title font-medium text-heading">{t.compare.title}</h3>
        </div>
      </div>

      {/* Rounded frame lives on a wrapper: border-radius has no effect on a collapsed table. */}
      <div className="mt-8 overflow-hidden rounded-[4px] border border-line bg-surface">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{t.compare.caption}</caption>
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-line">
              <th scope="col" className={`${cell} w-[22%] eyebrow text-ink-muted`}>
                {t.compare.criterion}
              </th>
              <th scope="col" className={`${cell} w-[39%]`}>
                <span className="flex items-center gap-3 font-display text-lg font-medium text-heading">
                  <span aria-hidden className="size-3 rounded-full bg-char ring-1 ring-ink/20" />
                  {chunk.name}
                </span>
              </th>
              <th scope="col" className={`${cell} w-[39%]`}>
                <span className="flex items-center gap-3 font-display text-lg font-medium text-heading">
                  <span aria-hidden className="size-3 rounded-full bg-coconut" />
                  {powder.name}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {t.compare.rows.map((row) => (
              <tr key={row.label} className="grid grid-cols-2 border-b border-line last:border-b-0 md:table-row">
                <th scope="row" className={`${cell} col-span-2 pb-1 font-semibold text-heading md:pb-5`}>
                  {row.label}
                </th>
                {"both" in row ? (
                  <td colSpan={2} className={`${cell} col-span-2 pt-1 text-ink/80 md:pt-5`}>
                    <span className="rounded-[2px] bg-tint px-2 py-1 text-tint-ink">{row.both}</span>
                  </td>
                ) : (
                  <>
                    <td className={`${cell} pt-1 text-ink/80 md:pt-5`}>
                      <span className="mb-1 block text-xs font-semibold text-ink-muted md:hidden">{chunk.name}</span>
                      {row.chunk}
                    </td>
                    <td className={`${cell} pt-1 text-ink/80 md:pt-5`}>
                      <span className="mb-1 block text-xs font-semibold text-ink-muted md:hidden">{powder.name}</span>
                      {row.powder}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a
        href="#lien-he"
        className="group mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-accent underline-offset-[6px] hover:underline"
      >
        {t.compare.note}
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
          strokeWidth={1.75}
        />
      </a>
    </Reveal>
  );
}
