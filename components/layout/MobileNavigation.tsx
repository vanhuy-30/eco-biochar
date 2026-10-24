"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";

type Props = {
  onDark: boolean;
  locale: Locale;
  common: Dictionary["common"];
  nav: Dictionary["nav"];
  cta: Dictionary["primaryCta"];
  brand: Dictionary["brand"];
};

/**
 * Full-screen menu below xl. The panel is portalled to <body> because the
 * header uses backdrop-filter, which would otherwise contain fixed children.
 */
export function MobileNavigation({ onDark, locale, common, nav, cta, brand }: Props) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusables = [...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1280 && close(false);

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close]);

  return (
    <div className="xl:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={common.openMenu}
        onClick={() => setOpen(true)}
        className={`grid size-11 place-items-center rounded-[3px] transition-colors ${
          onDark ? "text-cream hover:bg-cream/10" : "text-heading hover:bg-ink/5"
        }`}
      >
        <Menu className="size-6" strokeWidth={1.5} />
      </button>

      {open
        ? createPortal(
            <div
              id="mobile-nav"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={common.menuDialog}
              className="grain fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-section-dark text-cream"
            >
              <div className="container-page flex h-[4.5rem] shrink-0 items-center justify-between">
                <Logo company={brand.company} product={brand.product} onDark />
                <button
                  type="button"
                  aria-label={common.closeMenu}
                  onClick={() => close()}
                  className="grid size-11 place-items-center rounded-[3px] text-cream hover:bg-cream/10"
                >
                  <X className="size-6" strokeWidth={1.5} />
                </button>
              </div>
              <div className="container-page flex flex-1 flex-col pt-8 pb-10">
                <nav aria-label={common.mobileNav}>
                  <ol className="divide-y divide-line-light border-y border-line-light">
                    {nav.map((item, i) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => close(false)}
                          className="flex items-baseline gap-5 py-5 font-display text-3xl font-light transition-colors hover:text-mint sm:text-4xl"
                        >
                          <span className="eyebrow text-mint/80">{String(i + 1).padStart(2, "0")}</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <a
                  href={cta.href}
                  onClick={() => close(false)}
                  className="mt-10 inline-flex min-h-12 items-center justify-center rounded-[3px] bg-cream px-6 font-medium text-forest-ink transition-colors hover:bg-mint"
                >
                  {cta.label}
                </a>
                <div className="mt-8 flex items-center justify-between border-t border-line-light pt-4">
                  <LanguageSwitch locale={locale} label={common.languageLabel} />
                  <ThemeToggle label={common.themeToggle} className="hover:bg-cream/10" />
                </div>
                <p className="mt-auto pt-12 font-display text-lg font-light text-cream/60 italic">{brand.slogan}</p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
