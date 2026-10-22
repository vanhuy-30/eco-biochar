/** Circular arrow motif taken from the logo's "vòng tuần hoàn". Decorative only. */
export function CircularMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className={className}>
      <path d="M100 12a88 88 0 1 1-76.2 44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path
        d="M16 46l7.8 10.2 11.4-5.6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 5" />
    </svg>
  );
}
