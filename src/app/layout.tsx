import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ornn Studio — Links",
  description:
    "Dijital Büyüme Ortağınız. Web tasarım, dijital pazarlama ve marka stratejisi için Ornn Studio ile iletişime geçin.",
  metadataBase: new URL("https://links.ornn.studio"),
  openGraph: {
    title: "Ornn Studio — Links",
    description: "Dijital Büyüme Ortağınız. Tüm bağlantılarımız tek bir yerde.",
    url: "https://links.ornn.studio",
    siteName: "Ornn Studio",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ornn Studio — Links",
    description: "Dijital Büyüme Ortağınız. Tüm bağlantılarımız tek bir yerde.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
