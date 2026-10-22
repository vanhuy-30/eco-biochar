import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Variant = "solid" | "light" | "outline" | "outline-light" | "text" | "text-light";

const base =
  "group inline-flex items-center justify-center gap-3 font-medium whitespace-nowrap tracking-[0.01em] transition-[background-color,color,border-color,transform] duration-300 ease-(--ease-out-soft) disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  solid: "min-h-12 px-6 rounded-[3px] bg-forest text-cream hover:bg-forest-deep active:translate-y-px",
  light: "min-h-12 px-6 rounded-[3px] bg-cream text-forest-ink hover:bg-soft active:translate-y-px",
  outline: "min-h-12 px-6 rounded-[3px] border border-char/25 text-char hover:border-forest hover:text-forest",
  "outline-light": "min-h-12 px-6 rounded-[3px] border border-cream/30 text-cream hover:border-mint hover:text-mint",
  text: "min-h-11 text-forest underline-offset-[6px] hover:underline",
  "text-light": "min-h-11 text-cream underline-offset-[6px] hover:text-mint",
};

type Common = { variant?: Variant; icon?: "arrow" | "up" | "none"; children: ReactNode; className?: string };

function Icon({ kind }: { kind: Common["icon"] }) {
  if (kind === "none") return null;
  const Cmp = kind === "up" ? ArrowUpRight : ArrowRight;
  return (
    <Cmp
      aria-hidden
      className="size-4 shrink-0 transition-transform duration-300 ease-(--ease-out-soft) group-hover:translate-x-1"
      strokeWidth={1.75}
    />
  );
}

export function ButtonLink({
  variant = "solid",
  icon = "arrow",
  children,
  className = "",
  ...rest
}: Common & Omit<ComponentPropsWithoutRef<"a">, "children">) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      <Icon kind={icon} />
    </a>
  );
}

export function Button({
  variant = "solid",
  icon = "arrow",
  children,
  className = "",
  type = "button",
  ...rest
}: Common & Omit<ComponentPropsWithoutRef<"button">, "children">) {
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      <Icon kind={icon} />
    </button>
  );
}
