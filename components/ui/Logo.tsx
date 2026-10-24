import Image from "next/image";
import { images } from "@/content/images";

type Props = {
  /** Company name, shown as the dominant line. */
  company: string;
  /** Product line, shown smaller underneath. */
  product: string;
  /** Forces light text (header over the hero, mobile menu); otherwise the text follows the theme. */
  onDark?: boolean;
  size?: "md" | "lg";
  className?: string;
};

/** Brand lockup: official logo mark + company name (large) + product line (small). */
export function Logo({ company, product, onDark = false, size = "md", className = "" }: Props) {
  const lg = size === "lg";
  return (
    <span className={`inline-flex items-center ${lg ? "gap-4" : "gap-3"} ${className}`}>
      <Image
        src={images.logoMark.src}
        width={images.logoMark.width}
        height={images.logoMark.height}
        alt=""
        className={lg ? "h-14 w-auto" : "h-9 w-auto"}
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-[-0.02em] ${lg ? "text-[1.65rem]" : "text-[1.3rem]"} ${
            onDark ? "text-cream" : "text-heading"
          }`}
        >
          {company}
        </span>
        <span
          className={`font-semibold tracking-[0.22em] uppercase ${lg ? "mt-2 text-[0.66rem]" : "mt-1.5 text-[0.58rem]"} ${
            onDark ? "text-mint" : "text-eyebrow"
          }`}
        >
          {product}
        </span>
      </span>
    </span>
  );
}
