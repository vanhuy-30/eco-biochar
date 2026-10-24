import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Be_Vietnam_Pro, Fraunces } from "next/font/google";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale, locales } from "@/content/types";
import { InlineScript } from "@/components/ui/InlineScript";
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

/**
 * Runs before first paint (no flash):
 * - theme: saved choice, else the system preference;
 * - intro: shown on the first page of a session unless reduced motion is requested.
 * See node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md
 */
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("eco-theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.setAttribute("data-theme",t)}catch(e){}try{var seen=sessionStorage.getItem("eco-intro");var calm=matchMedia("(prefers-reduced-motion: reduce)").matches;d.setAttribute("data-intro",seen||calm?"off":"on");sessionStorage.setItem("eco-intro","1")}catch(e){d.setAttribute("data-intro","off")}})()`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    // Production URL is not decided yet; set NEXT_PUBLIC_SITE_URL when deploying.
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: meta.title,
    description: meta.description,
    applicationName: "Agrichar Vĩnh Long",
    authors: [{ name: "Công ty Cổ phần Agrichar Vĩnh Long" }],
    icons: { icon: "/icon.png" },
    alternates: { languages: { vi: "/vi", en: "/en", "x-default": "/vi" } },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      alternateLocale: lang === "vi" ? "en_US" : "vi_VN",
      siteName: "Agrichar Vĩnh Long — Eco Biochar",
      images: [{ url: "/images/packaging-duo.jpg", width: 1420, height: 847, alt: meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/packaging-duo.jpg"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b5d38" },
    { media: "(prefers-color-scheme: dark)", color: "#07110c" },
  ],
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} suppressHydrationWarning className={`${beVietnam.variable} ${fraunces.variable}`}>
      <head>
        <InlineScript html={bootScript} />
      </head>
      <body>{children}</body>
    </html>
  );
}
