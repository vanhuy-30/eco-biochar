"use client";

import { useState } from "react";
import Image from "next/image";
import { products, type Product, type ProductId } from "@/content/products";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductDialog } from "@/components/ui/ProductDialog";

export function ProductShowcase() {
  const [openId, setOpenId] = useState<ProductId | null>(null);
  const openProduct = products.find((p) => p.id === openId) ?? null;

  return (
    <section id="san-pham" aria-labelledby="products-title" className="section-pad bg-paper">
      <div className="container-page">
        <SectionHeading
          id="products-title"
          index="02"
          eyebrow="Sản phẩm"
          title="Hai quy cách."
          accent="Một nguồn gáo dừa."
          intro="Dòng EcoBiochar Base được cung cấp dưới hai dạng để phục vụ các nhu cầu sử dụng khác nhau, từ cải tạo đất trực tiếp đến phối trộn giá thể và phân bón."
        />

        <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 120} className={i === 0 ? "lg:col-span-7" : "lg:col-span-5 lg:mt-40"}>
              <ProductPanel product={product} onOpen={() => setOpenId(product.id)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProductDialog product={openProduct} onClose={() => setOpenId(null)} />
    </section>
  );
}

function ProductPanel({ product, onOpen }: { product: Product; onOpen: () => void }) {
  const dark = product.tone === "char";
  return (
    <article
      id={`san-pham-${product.id}`}
      aria-labelledby={`product-${product.id}-title`}
      className={`grain group overflow-hidden rounded-[4px] ${dark ? "bg-char text-cream" : "bg-kraft text-char"}`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={product.image.src}
          width={product.image.width}
          height={product.image.height}
          alt={product.image.alt}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`w-full object-cover transition-transform duration-[1.2s] ease-(--ease-out-soft) group-hover:scale-[1.03] ${
            dark ? "aspect-[4/3.6] object-[50%_30%]" : "aspect-[4/4.6] object-[50%_30%]"
          }`}
        />
        <span
          className={`eyebrow absolute top-5 left-5 rounded-[2px] px-2.5 py-1.5 ${dark ? "bg-char/80 text-mint" : "bg-cream/85 text-forest"}`}
        >
          {product.index} / {product.id === "chunk" ? "Dạng cục" : "Dạng bột"}
        </span>
      </div>

      <div className="p-6 md:p-10">
        <h3 id={`product-${product.id}-title`} className="font-display text-title font-medium tracking-[-0.01em]">
          {product.name}
        </h3>
        <p className={`mt-1 text-sm ${dark ? "text-cream/60" : "text-earth"}`}>{product.vietnameseName}</p>
        <p className={`mt-5 max-w-xl leading-relaxed ${dark ? "text-cream/80" : "text-char/80"}`}>
          {product.description}
        </p>

        <p className={`eyebrow mt-8 ${dark ? "text-cream/50" : "text-earth"}`}>Phù hợp với</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {product.suitableFor.map((s) => (
            <li
              key={s}
              className={`rounded-full border px-3 py-1 text-sm ${dark ? "border-cream/20 text-cream/85" : "border-char/15 text-char/80"}`}
            >
              {s}
            </li>
          ))}
        </ul>

        <div
          className={`mt-8 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between ${dark ? "border-line-light" : "border-char/10"}`}
        >
          <p className={`text-sm ${dark ? "text-cream/60" : "text-char/65"}`}>{product.specNote}</p>
          <Button
            variant={dark ? "outline-light" : "outline"}
            onClick={onOpen}
            aria-haspopup="dialog"
            className="shrink-0"
          >
            Tìm hiểu sản phẩm
          </Button>
        </div>
      </div>
    </article>
  );
}
