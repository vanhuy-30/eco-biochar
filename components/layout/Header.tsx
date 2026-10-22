"use client";

import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/content/types";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { MobileNavigation } from "./MobileNavigation";

type Props = {
  locale: Locale;
  common: Dictionary["common"];
  nav: Dictionary["nav"];
  cta: Dictionary["primaryCta"];
  slogan: string;
};

export function Header({ locale, common, nav, cta, slogan }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Deep links (e.g. /en#quy-trinh, or after a language switch): the browser's own
  // anchor jump can run before streamed content exists, so repeat it once mounted.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const jump = () =>
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" }), 50);
    if (document.readyState === "complete") jump();
    else window.addEventListener("load", jump, { once: true });
    return () => window.removeEventListener("load", jump);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
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
  }, [nav]);

  const onDark = !scrolled; // transparent over the dark hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? "border-b border-line bg-surface/92 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#noi-dung"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-[3px] focus:bg-cream focus:px-4 focus:py-2 focus:text-forest-ink"
      >
        {common.skipLink}
      </a>
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#top" aria-label={common.homeLabel} className="shrink-0">
          <Logo onDark={onDark} />
        </a>

        <nav aria-label={common.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative py-2 text-[0.92rem] font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                      isActive ? "after:scale-x-100" : ""
                    } ${
                      onDark
                        ? `hover:text-cream ${isActive ? "text-cream" : "text-cream/80"}`
                        : `hover:text-accent ${isActive ? "text-accent" : "text-ink/75"}`
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={`flex items-center gap-1 ${onDark ? "text-cream" : "text-ink"}`}>
          <LanguageSwitch locale={locale} label={common.languageLabel} className="hidden sm:flex" />
          <ThemeToggle
            label={common.themeToggle}
            className={`hidden sm:grid ${onDark ? "hover:bg-cream/10" : "hover:bg-ink/5"}`}
          />
          <a
            href={cta.href}
            className={`ml-2 hidden min-h-11 items-center rounded-[3px] px-5 text-sm font-medium whitespace-nowrap transition-colors duration-300 md:inline-flex ${
              onDark ? "bg-cream text-forest-ink hover:bg-mint" : "bg-primary text-on-primary hover:bg-primary-hover"
            }`}
          >
            {cta.label}
          </a>
          <MobileNavigation onDark={onDark} locale={locale} common={common} nav={nav} cta={cta} slogan={slogan} />
        </div>
      </div>
    </header>
  );
}
