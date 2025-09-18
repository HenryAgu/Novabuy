import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NovaBuy – Seamless & Authentic Online Shopping",
  description:
    "NovaBuy is a modern e-commerce platform built for mid to high-income shoppers in Nigeria. It delivers fast, reliable shopping with secure payments, transparent pricing, and trusted reviews.",
  keywords: [
    "NovaBuy",
    "online shopping",
    "Nigeria",
    "secure payment",
    "authentic products",
    "fast delivery",
    "e-commerce",
    "transparent pricing",
    "product reviews",
  ],
  openGraph: {
    title: "NovaBuy – Seamless & Authentic Online Shopping",
    description:
      "Shop with confidence on NovaBuy. Enjoy secure payments, detailed product info, and fast delivery across Nigeria.",
    url: "https://novabuy-sm1t.vercel.app", 
    siteName: "NovaBuy",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaBuy – Seamless & Authentic Online Shopping",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaBuy – Seamless & Authentic Online Shopping",
    description:
      "Fast, reliable, and secure online shopping experience in Nigeria with NovaBuy.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased w-full mx-auto [@media(min-width:1920px)]:max-w-[1440px]`}
      >
        {children}
      </body>
    </html>
  );
}
