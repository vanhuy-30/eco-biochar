"use client";

import { useEffect, useState } from "react";
import { navItems, primaryCta } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const light = !scrolled; // transparent over the dark hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? "border-b border-line bg-cream/92 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#noi-dung"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-[3px] focus:bg-cream focus:px-4 focus:py-2 focus:text-forest-ink"
      >
        Bỏ qua điều hướng
      </a>
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#top" aria-label="Eco Biochar — về đầu trang" className="shrink-0">
          <Logo tone={light ? "light" : "dark"} />
        </a>

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative py-2 text-[0.92rem] font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                      isActive ? "after:scale-x-100" : ""
                    } ${light ? "text-cream/85 hover:text-cream" : "text-char/75 hover:text-forest"} ${
                      isActive ? (light ? "text-cream" : "text-forest") : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={primaryCta.href}
            className={`hidden min-h-11 items-center rounded-[3px] px-5 text-sm font-medium transition-colors duration-300 md:inline-flex ${
              light ? "bg-cream text-forest-ink hover:bg-mint" : "bg-forest text-cream hover:bg-forest-deep"
            }`}
          >
            {primaryCta.label}
          </a>
          <MobileNavigation light={light} />
        </div>
      </div>
    </header>
  );
}
