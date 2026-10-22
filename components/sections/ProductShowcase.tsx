"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary, Product, ProductId } from "@/content/types";
import { images } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductDialog } from "@/components/ui/ProductDialog";
import { ProductComparison } from "./ProductComparison";

type Copy = Dictionary["products"];

export function ProductShowcase({ t, close }: { t: Copy; close: string }) {
  const [openId, setOpenId] = useState<ProductId | null>(null);
  const openProduct = t.items.find((p) => p.id === openId) ?? null;

  return (
    <section id="san-pham" aria-labelledby="products-title" className="section-pad bg-surface-alt">
      <div className="container-page">
        <SectionHeading id="products-title" {...t} />

        <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          {t.items.map((product, i) => (
            <Reveal key={product.id} delay={i * 120} className={i === 0 ? "lg:col-span-7" : "lg:col-span-5 lg:mt-40"}>
              <ProductPanel product={product} t={t} onOpen={() => setOpenId(product.id)} />
            </Reveal>
          ))}
        </div>

        <ProductComparison t={t} />
      </div>

      <ProductDialog product={openProduct} t={t} close={close} onClose={() => setOpenId(null)} />
    </section>
  );
}

function ProductPanel({ product, t, onOpen }: { product: Product; t: Copy; onOpen: () => void }) {
  const dark = product.tone === "char";
  const image = images[product.id];
  return (
    <article
      id={`san-pham-${product.id}`}
      aria-labelledby={`product-${product.id}-title`}
      className={`grain group overflow-hidden rounded-[4px] ${dark ? "bg-char text-cream" : "bg-kraft text-kraft-ink"}`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={t.imageAlt[product.id]}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`w-full object-cover object-[50%_30%] transition-transform duration-[1.2s] ease-(--ease-out-soft) group-hover:scale-[1.03] ${
            dark ? "aspect-[4/3.6]" : "aspect-[4/4.6]"
          }`}
        />
        <span
          className={`eyebrow absolute top-5 left-5 rounded-[2px] px-2.5 py-1.5 ${dark ? "bg-char/80 text-mint" : "bg-cream/85 text-forest"}`}
        >
          {product.index} / {product.formatLabel}
        </span>
      </div>

      <div className="p-6 md:p-10">
        <h3 id={`product-${product.id}-title`} className="font-display text-title font-medium tracking-[-0.01em]">
          {product.name}
        </h3>
        <p className={`mt-1 text-sm ${dark ? "text-cream/60" : "text-eyebrow"}`}>{product.localName}</p>
        <p className={`mt-5 max-w-xl leading-relaxed ${dark ? "text-cream/80" : "opacity-80"}`}>
          {product.description}
        </p>

        <p className={`eyebrow mt-8 ${dark ? "text-cream/50" : "text-eyebrow"}`}>{t.suitableLabel}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {product.suitableFor.map((s) => (
            <li
              key={s}
              className={`rounded-full border px-3 py-1 text-sm ${dark ? "border-cream/20 text-cream/85" : "border-kraft-ink/15 opacity-85"}`}
            >
              {s}
            </li>
          ))}
        </ul>

        <div
          className={`mt-8 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between ${dark ? "border-line-light" : "border-kraft-ink/10"}`}
        >
          <p className={`text-sm ${dark ? "text-cream/60" : "opacity-70"}`}>{t.specNote}</p>
          <Button
            variant={dark ? "outline-light" : "outline"}
            onClick={onOpen}
            aria-haspopup="dialog"
            className="shrink-0"
          >
            {t.cta}
          </Button>
        </div>
      </div>
    </article>
  );
}
