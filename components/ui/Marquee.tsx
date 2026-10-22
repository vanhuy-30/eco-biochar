import { Asterisk } from "lucide-react";

export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center">
          <span className="px-6 font-display text-xl font-light italic whitespace-nowrap text-cream/85 md:px-10 md:text-2xl">
            {item}
          </span>
          <Asterisk aria-hidden className="size-4 text-mint" strokeWidth={1.5} />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-y border-line-light bg-section-dark py-5">
      <p className="sr-only">{items.join(" · ")}</p>
      <div className="flex w-max animate-marquee motion-reduce:animate-none" aria-hidden>
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}
