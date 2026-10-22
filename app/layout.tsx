import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Fraunces } from "next/font/google";
import { brand } from "@/content/site";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "vietnamese"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = "Eco Biochar — Than sinh học tuần hoàn từ gáo dừa";
const description =
  "Eco Biochar chuyển hóa gáo dừa từ Bến Tre và Đồng bằng sông Cửu Long thành than sinh học dạng cục và dạng bột cho nông nghiệp. Tái sinh giá trị – Xanh hóa nông nghiệp.";

export const metadata: Metadata = {
  // Production URL is not decided yet; set NEXT_PUBLIC_SITE_URL when deploying.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  applicationName: brand.name,
  authors: [{ name: brand.company }],
  keywords: ["Eco Biochar", "than sinh học", "biochar gáo dừa", "Agrichar Vĩnh Long", "nông nghiệp tuần hoàn"],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "vi_VN",
    siteName: brand.name,
    images: [
      {
        url: "/images/packaging-duo.jpg",
        width: 1420,
        height: 847,
        alt: "Bao bì Biochar Chunk và Biochar Powder của AGRICHAR VĨNH LONG",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/packaging-duo.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#0b5d38",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
