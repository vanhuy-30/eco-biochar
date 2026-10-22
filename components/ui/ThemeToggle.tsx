"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/**
 * Icons are swapped with CSS (`dark:` variant on data-theme), so server and
 * client markup are identical and nothing flashes on hydration.
 */
export function ThemeToggle({ label, className = "" }: { label: string; className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next: Theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("eco-theme", next);
    } catch {
      // Storage unavailable (private mode): theme still applies for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`grid size-11 place-items-center rounded-[3px] transition-colors ${className}`}
    >
      <Moon aria-hidden className="size-[1.15rem] dark:hidden" strokeWidth={1.6} />
      <Sun aria-hidden className="hidden size-[1.15rem] dark:block" strokeWidth={1.6} />
    </button>
  );
}
