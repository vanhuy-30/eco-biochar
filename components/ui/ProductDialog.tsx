"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import type { Product } from "@/content/products";
import { requestInquiry } from "@/lib/inquiry";
import { Button } from "./Button";

/** Native <dialog> (focus handling, Esc and inert background come from the browser). */
export function ProductDialog({ product, onClose }: { product: Product | null; onClose: () => void }) {
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
    const inquiryType = product.id === "chunk" ? "product-chunk" : "product-powder";
    restoreFocus.current = false;
    ref.current?.close();
    requestInquiry({
      inquiryType,
      message: `Tôi muốn nhận thông số kỹ thuật và thông tin mẫu thử cho ${product.name}.`,
    });
  };

  return (
    <dialog
      ref={ref}
      onClose={handleClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-labelledby="product-dialog-title"
      className="m-auto w-[min(56rem,calc(100vw-2rem))] max-h-[calc(100svh-2rem)] overflow-y-auto rounded-[4px] bg-cream p-0 text-char shadow-2xl backdrop:bg-forest-ink/70 backdrop:backdrop-blur-sm"
    >
      {product ? (
        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className={`relative ${product.tone === "char" ? "bg-char" : "bg-kraft"}`}>
            <Image
              src={product.image.src}
              width={product.image.width}
              height={product.image.height}
              alt={product.image.alt}
              sizes="(min-width: 768px) 360px, 100vw"
              className="h-56 w-full object-cover md:h-full"
            />
          </div>
          <div className="relative p-6 md:p-10">
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Đóng"
              className="absolute top-3 right-3 grid size-11 place-items-center rounded-[3px] text-char/70 hover:bg-char/5 hover:text-char"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
            <p className="eyebrow text-earth">EcoBiochar Base · {product.index}</p>
            <h2
              id="product-dialog-title"
              className="mt-3 font-display text-3xl font-medium text-forest-ink md:text-4xl"
            >
              {product.name}
            </h2>
            <p className="mt-1 text-sm text-earth">{product.vietnameseName}</p>
            <p className="mt-5 leading-relaxed text-char/80">
              {product.summary} {product.description}
            </p>

            <h3 className="eyebrow mt-8 text-forest">Hướng sử dụng</h3>
            <ul className="mt-3 space-y-2.5">
              {product.uses.map((u) => (
                <li key={u} className="flex gap-3 text-char/85">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-mint" strokeWidth={2} />
                  {u}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[3px] bg-soft p-4 text-sm leading-relaxed text-forest-ink">
              <strong className="font-semibold">Thông số kỹ thuật:</strong> đang được chuẩn hóa trong giai đoạn thử
              nghiệm. Quy cách theo nhu cầu — liên hệ để nhận thông số và trao đổi mẫu thử. Hiệu quả sử dụng phụ thuộc
              vào loại đất, cây trồng và cách phối trộn.
            </div>

            <Button onClick={askForSpecs} className="mt-8 w-full sm:w-auto">
              Yêu cầu thông số &amp; mẫu thử
            </Button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
