"use client";

import type { InquiryType } from "@/lib/contact";
import { requestInquiry } from "@/lib/inquiry";

export function InquiryChip({ label, type }: { label: string; type: InquiryType }) {
  return (
    <button
      type="button"
      onClick={() => requestInquiry({ inquiryType: type })}
      className="min-h-11 rounded-full border border-cream/25 px-4 text-sm text-cream/90 transition-colors duration-300 hover:border-mint hover:bg-mint hover:text-forest-ink"
    >
      {label}
    </button>
  );
}
