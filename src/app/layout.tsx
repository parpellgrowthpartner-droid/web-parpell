import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

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
  title: {
    default: "Parpell | Brand & Growth Orchestrator | Posicionamiento en IA (GEO) & Cine",
    template: "%s | Parpell",
  },
  description:
    "Que la inteligencia artificial te recomiende. Que el contenido te haga elegible. Que tu equipo lo convierta en ventas. Posicionamiento en IA (GEO), rodaje con cámara de cine y sistemas de ventas. Dos socios, cero intermediarios.",
  keywords: [
    "Parpell",
    "GEO",
    "Generative Engine Optimization",
    "Posicionamiento en IA",
    "Posicionamiento en ChatGPT",
    "Posicionamiento en Perplexity",
    "Agencia de marketing digital España",
    "Producción audiovisual con cámara de cine",
    "Vídeo corporativo alta conversión",
    "Brand & Growth Orchestrator",
    "Automatización de ventas ManyChat",
    "Auditoría de presencia digital",
    "SEO Semántico para Inteligencia Artificial",
  ],
  authors: [{ name: "Parpell", url: "https://parpell.com" }],
  creator: "Parpell",
  publisher: "Parpell",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://parpell.com/",
  },
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Parpell | Brand & Growth Orchestrator",
    description:
      "Posicionamiento en IA (GEO), contenido audiovisual de cine y máquina de ventas. Todo conectado. Dos socios, cero intermediarios.",
    url: "https://parpell.com",
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
  verification: {
    google: "S8m9pIjAFGIYCEsA3fxRXuI9pUc6yxxUypoDQ1HVncQ",
  },
  other: {
    "google-site-verification": "S8m9pIjAFGIYCEsA3fxRXuI9pUc6yxxUypoDQ1HVncQ",
    "geo.region": "ES",
    "geo.placename": "España",
    "geo.position": "40.4168;-3.7038",
    "ICBM": "40.4168, -3.7038",
    "ai-content-declaration":
      "This is the official business website for Parpell, a Brand & Growth Orchestrator based in Spain. Parpell specializes in Generative Engine Optimization (GEO) for ChatGPT, Claude, Gemini and Perplexity, cinema-grade video production, and commercial conversion workflows for businesses.",
  },
};

const jsonLdGlobal = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://parpell.com/#organization",
      name: "Parpell",
      alternateName: ["Parpell Brand & Growth", "Parpell Growth Partner"],
      url: "https://parpell.com",
      logo: "https://parpell.com/icon.png",
      image: "https://parpell.com/og-image.png",
      description:
        "Brand & Growth Orchestrator especializado en Posicionamiento en Inteligencia Artificial (GEO), Producción Audiovisual con Cámara de Cine y Automatización de Ventas.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "España",
        },
      ],
      knowsAbout: [
        "Generative Engine Optimization (GEO)",
        "Posicionamiento en ChatGPT y Claude",
        "SEO para Motores de Inteligencia Artificial",
        "Producción Audiovisual con Cámara de Cine",
        "Automatización Comercial con ManyChat",
        "Core Web Vitals y Arquitectura Web",
        "Brand & Growth Strategy",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Socio Comercial",
          jobTitle: "Director de Comunicación Audiovisual & Ventas",
        },
        {
          "@type": "Person",
          name: "Socio Técnico",
          jobTitle: "Especialista en Arquitectura Web & GEO",
        },
      ],
      serviceType: [
        "Posicionamiento en IA (GEO)",
        "Producción Audiovisual Cinematográfica",
        "Automatización de Ventas y Respuestas en RRSS",
        "Auditoría y Consultoría Digital de Empresa",
      ],
      sameAs: [
        "https://www.instagram.com/parpell",
        "https://www.linkedin.com/company/parpell",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://parpell.com/#website",
      url: "https://parpell.com",
      name: "Parpell",
      description: "Brand & Growth Orchestrator — Posicionamiento en IA (GEO) & Cine",
      publisher: {
        "@id": "https://parpell.com/#organization",
      },
      inLanguage: "es-ES",
    },
    {
      "@type": "FAQPage",
      "@id": "https://parpell.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto tiempo tengo que dedicarle yo o mi equipo al mes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solo 1 jornada al mes para el rodaje presencial en tu negocio. Toda la parte técnica de optimización para ChatGPT, la edición de los vídeos y la configuración del sistema de leads la ejecutamos nosotros al 100%.",
          },
        },
        {
          "@type": "Question",
          name: "¿Hay permanencia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, hay una permanencia de 3 meses para que puedas empezar a ver resultados (lo normal en este sector es 8 a 10 semanas para ver resultados en los motores de búsqueda de Google e IA).",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué ocurre exactamente en la llamada de 30 minutos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Te mostramos una auditoría real de qué dice la IA de tu negocio frente a tus 3 principales competidores de la zona. Te quedas el informe gratis aunque decidas no trabajar con nosotros.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <link rel="preload" href="/logo-nuevo.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGlobal) }}
        />
      </head>
      <body className="min-h-screen bg-[#080306] text-[#F8F4F2] antialiased overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
