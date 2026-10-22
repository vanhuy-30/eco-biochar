"use client";

import type { InquiryType } from "./contact";

const EVENT = "eco:prefill-inquiry";

export type PrefillDetail = { inquiryType: InquiryType; message?: string };

/** Prefill the contact form and scroll to it. Used by product, partner and FAQ CTAs. */
export function requestInquiry(detail: PrefillDetail) {
  window.dispatchEvent(new CustomEvent<PrefillDetail>(EVENT, { detail }));
  const target = document.getElementById("lien-he");
  target?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}

export function onInquiryRequest(handler: (detail: PrefillDetail) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<PrefillDetail>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
