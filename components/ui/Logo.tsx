import Image from "next/image";
import { images } from "@/content/images";

/**
 * Brand lockup: official logo mark + "Eco Biochar" wordmark.
 * `onDark` forces light text (header over the hero, mobile menu); otherwise it follows the theme.
 */
export function Logo({ onDark = false, className = "" }: { onDark?: boolean; className?: string }) {
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
          className={`font-display text-[1.35rem] font-semibold tracking-[-0.02em] ${onDark ? "text-cream" : "text-heading"}`}
        >
          Eco Biochar
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold tracking-[0.22em] uppercase ${onDark ? "text-cream/60" : "text-eyebrow"}`}
        >
          Agrichar Vĩnh Long
        </span>
      </span>
    </span>
  );
}
