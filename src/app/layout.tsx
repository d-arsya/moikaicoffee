import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moikai Coffee",
  description:
    "Moikai Coffee - Coffee shop cozy di Yogyakarta dengan menu kopi spesial & suasana hangat. Kunjungi cabang CDT & Tamsis kami!",

  // SEO
  alternates: {
    canonical: "https://www.moikaicoffee.com/",
  },

  openGraph: {
    title: "Moikai Coffee",
    description:
      "Nikmati kopi nikmat & suasana hangat di Moikai Coffee - cabang CDT & Tamsis Yogyakarta. Signature brews & tempat cozy untuk bersantai.",
    url: "https://www.moikaicoffee.com/",
    siteName: "Moikai Coffee",
    images: [
      {
        url: "https://www.moikaicoffee.com/front-thumb-og.jpg",
        width: 853,
        height: 640,
        alt: "Moikai Coffee Yogyakarta",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Moikai Coffee | Coffee Shop Cozy di Yogyakarta",
    description:
      "Moikai Coffee - tempat ngopi cozy di Yogyakarta. Signature brews & suasana hangat menanti kamu di cabang CDT & Tamsis!",
    images: ["https://www.moikaicoffee.com/front-thumb-og.jpg"],
  },

  keywords: [
    "Moikai Coffee",
    "coffee shop Jogja",
    "kopi Yogyakarta",
    "cozy café Jogja",
    "espresso",
    "latte",
    "cappuccino",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
