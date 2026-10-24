"use client";

import { useCallback, useEffect, useRef, type CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import type { Dictionary } from "@/content/types";

const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

/**
 * Opening splash, adapted from the reference site's intro. It is server-rendered
 * but only displayed when the boot script sets html[data-intro="on"] (first page
 * of a session, motion allowed), so it covers the page from the first paint.
 */
export function Intro({ t, company, slogan }: { t: Dictionary["intro"]; company: string; slogan: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const finish = useCallback(() => document.documentElement.setAttribute("data-intro", "done"), []);

  useEffect(() => {
    const el = ref.current;
    if (!el || document.documentElement.getAttribute("data-intro") !== "on") return;
    const onEnd = (e: AnimationEvent) => {
      if (e.target === el && e.animationName === "intro-depart") finish();
    };
    el.addEventListener("animationend", onEnd);
    // Fallback if animation events never fire (e.g. a background tab).
    const timer = window.setTimeout(finish, 4500);
    return () => {
      el.removeEventListener("animationend", onEnd);
      window.clearTimeout(timer);
    };
  }, [finish]);

  const skip = () => {
    const el = ref.current;
    if (!el) return finish();
    el.setAttribute("data-leaving", "");
    // Hero entrance should not keep waiting for the full intro.
    document.documentElement.style.setProperty("--hero-delay", "300ms");
    document.getElementById("noi-dung")?.focus({ preventScroll: true });
  };

  return (
    <div ref={ref} className="intro" role="region" aria-label={t.label}>
      <div aria-hidden className="intro-grain" />
      <div aria-hidden className="intro-orbit" />

      <div aria-hidden className="relative flex flex-col items-center px-8 text-center">
        <svg viewBox="0 0 200 200" fill="none" className="mb-2 w-[clamp(150px,20vw,230px)] overflow-visible">
          {/* Circular loop with arrowhead (logo motif) */}
          <path
            className="intro-draw"
            pathLength={1}
            d="M100 22a78 78 0 1 1-67.5 39"
            stroke="#00c896"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            className="intro-draw"
            style={d(0.9)}
            pathLength={1}
            d="M27 51.5l5.5 9.7 10.7-4.6"
            stroke="#00c896"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Coconut-shell bowl */}
          <path
            className="intro-draw"
            style={d(0.25)}
            pathLength={1}
            d="M56 126c12 26 76 26 88 0"
            stroke="#c69c6d"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Seedling */}
          <path
            className="intro-draw"
            style={d(0.45)}
            pathLength={1}
            d="M100 124V86"
            stroke="#4caf50"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            className="intro-draw"
            style={d(0.6)}
            pathLength={1}
            d="M100 100c-5-14-19-21-34-17 4 15 19 22 34 17z"
            stroke="#4caf50"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            className="intro-draw"
            style={d(0.7)}
            pathLength={1}
            d="M100 92c6-17 23-24 39-18-4 17-22 25-39 18z"
            stroke="#4caf50"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          {/* Biochar granules */}
          {[
            [80, 121, 3.6, 0.55],
            [91, 124, 3, 0.65],
            [110, 124, 3.2, 0.7],
            [121, 120, 3.6, 0.6],
            [100, 127, 2.6, 0.8],
          ].map(([cx, cy, r, delay]) => (
            <circle key={`${cx}-${cy}`} className="intro-seed" style={d(delay)} cx={cx} cy={cy} r={r} fill="#fafaf5" />
          ))}
        </svg>

        <p className="intro-copy font-display text-[clamp(1.9rem,5.4vw,3.9rem)] leading-tight font-medium tracking-[-0.035em]">
          {company}
          <span className="text-mint">.</span>
        </p>
        <p className="intro-copy eyebrow mt-2 text-mint" style={d(0.7)}>
          {t.product}
        </p>
        <p className="intro-copy mt-3 text-sm tracking-[0.08em] text-cream/75" style={d(0.85)}>
          {slogan}
        </p>
        <div className="intro-rule mt-8 h-px w-24 overflow-hidden bg-coconut/20">
          <span className="bg-coconut" />
        </div>
      </div>

      <p aria-hidden className="eyebrow absolute top-9 left-[5.6%] text-cream/60">
        {t.cornerTop}
      </p>
      <p aria-hidden className="eyebrow absolute bottom-9 left-[5.6%] hidden text-cream/60 sm:block">
        {t.cornerBottom}
      </p>
      <button
        type="button"
        onClick={skip}
        className="group absolute right-[5.6%] bottom-6 flex min-h-11 items-center gap-3 text-xs tracking-[0.12em] text-cream uppercase focus-visible:outline-coconut"
      >
        {t.skip}
        <ArrowDown aria-hidden className="size-4 transition-transform group-hover:translate-y-0.5" strokeWidth={1.5} />
      </button>
    </div>
  );
}
