/**
 * Central image registry. Every image on the page is referenced from here so
 * assets can be swapped for official photography without touching components.
 * Alt text lives in the locale dictionaries.
 *
 * Current assets are taken from the brand-identity figures in the project
 * report (Hình 1.1 and Hình 1.3). The packaging images are design renders,
 * not photographs of production.
 */
export type SiteImage = { src: string; width: number; height: number };

export const images = {
  logoFull: { src: "/images/logo-full.png", width: 640, height: 560 },
  logoMark: { src: "/images/logo-mark.png", width: 370, height: 395 },
  packagingDuo: { src: "/images/packaging-duo.jpg", width: 1420, height: 847 },
  chunk: { src: "/images/pack-chunk.jpg", width: 640, height: 827 },
  powder: { src: "/images/pack-powder.jpg", width: 680, height: 827 },
} satisfies Record<string, SiteImage>;
