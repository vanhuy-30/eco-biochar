"use client";

import type { MouseEvent } from "react";
import { locales, type Locale } from "@/content/types";

/**
 * VI / EN pill. Keeps the current section hash when switching language.
 * Uses a full document load on purpose: the locale is the root-layout param, and a
 * client transition re-renders <html> and drops the data-theme set by the inline script.
 */
export function LanguageSwitch({
  locale,
  label,
  className = "",
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const keepHash = (e: MouseEvent<HTMLAnchorElement>, target: Locale) => {
    if (target === locale || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- see comment above
    window.location.assign(`/${target}${window.location.hash}`);
  };

  return (
    <nav aria-label={label} className={`flex items-center text-xs font-semibold tracking-[0.12em] ${className}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 ? (
            <span aria-hidden className="px-1 opacity-40">
              /
            </span>
          ) : null}
          <a
            href={`/${l}`}
            hrefLang={l}
            lang={l}
            aria-current={l === locale ? "page" : undefined}
            onClick={(e) => keepHash(e, l)}
            className={`grid min-h-11 min-w-8 place-items-center uppercase transition-opacity ${
              l === locale ? "opacity-100" : "opacity-55 hover:opacity-100"
            }`}
          >
            {l}
          </a>
        </span>
      ))}
    </nav>
  );
}
