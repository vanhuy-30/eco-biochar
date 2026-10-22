import Image from "next/image";
import { images } from "@/content/images";

/** Brand lockup: official logo mark + "Eco Biochar" wordmark set in the display face. */
export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={images.logoMark.src}
        width={images.logoMark.width}
        height={images.logoMark.height}
        alt=""
        className="h-9 w-auto"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-semibold tracking-[-0.02em] ${tone === "light" ? "text-cream" : "text-forest-ink"}`}
        >
          Eco Biochar
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold tracking-[0.22em] uppercase ${tone === "light" ? "text-cream/60" : "text-earth"}`}
        >
          Agrichar Vĩnh Long
        </span>
      </span>
    </span>
  );
}
