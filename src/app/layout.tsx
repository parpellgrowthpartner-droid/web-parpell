import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parpell.com"),
  title: "Parpell | Brand & Growth Orchestrator",
  description:
    "Que la inteligencia artificial te recomiende. Que el contenido te haga elegible. Que tu equipo lo convierta en ventas.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Parpell | Brand & Growth Orchestrator",
    description:
      "Posicionamiento en IA (GEO), contenido audiovisual de cine y máquina de ventas. Todo conectado. Dos socios, cero intermediarios.",
    locale: "es_ES",
    type: "website",
    siteName: "Parpell",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parpell | Brand & Growth Orchestrator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parpell | Brand & Growth Orchestrator",
    description:
      "Posicionamiento en IA (GEO), contenido audiovisual de cine y máquina de ventas. Todo conectado. Dos socios, cero intermediarios.",
    images: ["/og-image.png"],
  },
  other: {
    "ai-content-declaration": "This is a business website for Parpell, a Brand & Growth Orchestrator based in Spain. Services include GEO (Generative Engine Optimization), cinema-quality video production, and sales system setup for local businesses.",
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <link rel="preload" href="/logo-nuevo.png" as="image" />
      </head>
      <body className="min-h-screen bg-[#080306] text-[#F8F4F2] antialiased overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
