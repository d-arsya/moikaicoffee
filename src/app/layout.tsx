import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moikaicoffee.com"),
  title: "Moikai Coffee | Coffee Shop Cozy di Yogyakarta",
  description:
    "Moikai Coffee - Coffee shop cozy di Yogyakarta dengan menu kopi spesial & suasana hangat. Kunjungi cabang CDT & Tamsis kami!",
  authors: [{ name: "Moikai Coffee" }],
  generator: "Next.js",
  publisher: "Moikai Coffee",
  keywords: [
    "Moikai Coffee",
    "coffee shop Jogja",
    "kopi Yogyakarta",
    "cozy café Jogja",
    "espresso",
    "latte",
    "cappuccino",
    "tempat nongkrong jogja",
    "cafe hits jogja"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Moikai Coffee | Coffee Shop Cozy di Yogyakarta",
    description:
      "Nikmati kopi nikmat & suasana hangat di Moikai Coffee - cabang CDT & Tamsis Yogyakarta. Signature brews & tempat cozy untuk bersantai.",
    url: "/",
    siteName: "Moikai Coffee",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/front-thumb-og.jpg",
        width: 853,
        height: 640,
        alt: "Moikai Coffee Yogyakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moikai Coffee | Coffee Shop Cozy di Yogyakarta",
    description:
      "Moikai Coffee - tempat ngopi cozy di Yogyakarta. Signature brews & suasana hangat menanti kamu di cabang CDT & Tamsis!",
    images: ["/front-thumb-og.jpg"],
    creator: "@moikaicoffee",
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
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
