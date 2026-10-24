/**
 * Central image registry. Every image on the page is referenced from here so
 * assets can be swapped for official photography without touching components.
 * Alt text lives in the locale dictionaries.
 *
 * Logo and packaging images are the company's own design files (the packaging
 * images are design renders, not photographs of production). `packagingDuo` is a
 * lower-resolution crop from the project report and is only used for social cards.
 */
export type SiteImage = { src: string; width: number; height: number };

export const images = {
  logoFull: { src: "/images/logo-full.png", width: 935, height: 830 },
  logoMark: { src: "/images/logo-mark.png", width: 557, height: 589 },
  packagingDuo: { src: "/images/packaging-duo.jpg", width: 1420, height: 847 },
  chunk: { src: "/images/pack-chunk.jpg", width: 720, height: 856 },
  powder: { src: "/images/pack-powder.jpg", width: 1150, height: 1368 },
} satisfies Record<string, SiteImage>;
