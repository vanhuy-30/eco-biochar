"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import type { Dictionary, Product } from "@/content/types";
import { images } from "@/content/images";
import { requestInquiry } from "@/lib/inquiry";
import { Button } from "./Button";

type Props = {
  product: Product | null;
  t: Dictionary["products"];
  close: string;
  onClose: () => void;
};

/** Native <dialog> (focus handling, Esc and inert background come from the browser). */
export function ProductDialog({ product, t, close, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const restoreFocus = useRef(true);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (product && !dialog.open) {
      triggerRef.current = document.activeElement as HTMLElement | null;
      restoreFocus.current = true;
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!product && dialog.open) {
      dialog.close();
    }
  }, [product]);

  const handleClose = () => {
    document.body.style.overflow = "";
    onClose();
    if (restoreFocus.current) triggerRef.current?.focus({ preventScroll: true });
  };

  const askForSpecs = () => {
    if (!product) return;
    restoreFocus.current = false;
    ref.current?.close();
    requestInquiry({
      inquiryType: product.id === "chunk" ? "product-chunk" : "product-powder",
      message: t.dialog.prefill.replace("{product}", product.name),
    });
  };

  const image = product ? images[product.id] : null;

  return (
    <dialog
      ref={ref}
      onClose={handleClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-labelledby="product-dialog-title"
      className="m-auto max-h-[calc(100svh-2rem)] w-[min(56rem,calc(100vw-2rem))] overflow-y-auto rounded-[4px] bg-surface p-0 text-ink shadow-2xl backdrop:bg-forest-ink/70 backdrop:backdrop-blur-sm"
    >
      {product && image ? (
        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className={`relative ${product.tone === "char" ? "bg-char" : "bg-kraft"}`}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={t.imageAlt[product.id]}
              sizes="(min-width: 768px) 360px, 100vw"
              className="h-56 w-full object-cover md:h-full"
            />
          </div>
          <div className="relative p-6 md:p-10">
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label={close}
              className="absolute top-3 right-3 grid size-11 place-items-center rounded-[3px] text-ink/70 hover:bg-ink/5 hover:text-ink"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
            <p className="eyebrow text-eyebrow">
              {t.dialog.eyebrow} · {product.index}
            </p>
            <h2 id="product-dialog-title" className="mt-3 font-display text-3xl font-medium text-heading md:text-4xl">
              {product.name}
            </h2>
            <p className="mt-1 text-sm text-eyebrow">{product.localName}</p>
            <p className="mt-5 leading-relaxed text-ink/80">
              {product.summary} {product.description}
            </p>

            <h3 className="eyebrow mt-8 text-accent">{t.dialog.usesLabel}</h3>
            <ul className="mt-3 space-y-2.5">
              {product.uses.map((u) => (
                <li key={u} className="flex gap-3 text-ink/85">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-mint" strokeWidth={2} />
                  {u}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[3px] bg-tint p-4 text-sm leading-relaxed text-tint-ink">
              <strong className="font-semibold">{t.dialog.specTitle}</strong> {t.dialog.specBody}
            </div>

            <Button onClick={askForSpecs} className="mt-8 w-full sm:w-auto">
              {t.dialog.cta}
            </Button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
