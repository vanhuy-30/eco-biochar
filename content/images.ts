/**
 * Central image registry. Every image on the page is referenced from here so
 * assets can be swapped for official photography without touching components.
 *
 * Current assets are taken from the brand-identity figures in the project
 * report (Hình 1.1 and Hình 1.3). The packaging images are design renders,
 * not photographs of production.
 */
export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  note?: string;
};

export const images = {
  logoFull: {
    src: "/images/logo-full.png",
    width: 640,
    height: 560,
    alt: "Logo AGRICHAR VĨNH LONG",
  },
  logoMark: {
    src: "/images/logo-mark.png",
    width: 370,
    height: 395,
    alt: "",
    note: "Biểu tượng mầm cây trên than sinh học trong gáo dừa, bao quanh bởi vòng tuần hoàn.",
  },
  packagingDuo: {
    src: "/images/packaging-duo.jpg",
    width: 1420,
    height: 847,
    alt: "Thiết kế bao bì Biochar Chunk và Biochar Powder của AGRICHAR VĨNH LONG đặt cạnh gáo dừa và than sinh học",
    note: "Thiết kế bao bì định hướng",
  },
  packChunk: {
    src: "/images/pack-chunk.jpg",
    width: 640,
    height: 827,
    alt: "Thiết kế bao bì Biochar Chunk – than sinh học dạng cục, có ô cửa sổ nhìn thấy những mảnh than đen",
    note: "Thiết kế bao bì định hướng",
  },
  packPowder: {
    src: "/images/pack-powder.jpg",
    width: 680,
    height: 827,
    alt: "Thiết kế bao bì Biochar Powder – than sinh học dạng bột, có ô cửa sổ nhìn thấy than nghiền mịn",
    note: "Thiết kế bao bì định hướng",
  },
} satisfies Record<string, SiteImage>;
