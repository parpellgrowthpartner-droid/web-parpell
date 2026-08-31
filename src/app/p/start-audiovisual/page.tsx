import type { Metadata } from "next";
import { PricingLandingTemplate, PricingPack, ServiceItem } from "@/components/PricingLandingTemplate";

export const metadata: Metadata = {
  title: "Packs & Tarifas de Producción Audiovisual | Parpell",
  description: "Tarifas y packs de producción cinematográfica, preproducción y crecimiento.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

const packsPequena: PricingPack[] = [
  {
    id: "pack-esencial",
    name: "Pack Esencial",
    price: "750€",
    originalPrice: "1.050€",
    savings: "Ahorras 300€",
    period: "/mes",
    description: "La base sólida de legitimación visual y contenido de cine mensual para tu negocio.",
    includesSummary: ["Grabación", "Guionización", "Edición Avanzada"],
    features: [
      "Grabación presencial (1 jornada de rodaje + equipo de cine completo)",
      "Guionización y preproducción estratégica (4 Reels + 2 Carruseles)",
      "Edición Avanzada (Corte + Colorimetría + Sound Design)",
      "Preproducción profesional y dirección de rodaje con estándares de cine",
      "Material 100% en propiedad de tu empresa",
      "Informe mensual de salud técnica web y velocidad de carga (Core Web Vitals)",
    ],
    deliverables: "4 Reels de cine + 2 Carruseles listos para publicar",
  },
  {
    id: "pack-growth",
    name: "Pack Growth",
    badge: "MÁS POPULAR",
    isPopular: true,
    price: "900€",
    originalPrice: "1.300€",
    savings: "Ahorras 400€",
    period: "/mes",
    description: "El pack idóneo para alimentar el feed mensual y mantener presencia diaria activa con stories.",
    includesSummary: ["Pack Esencial", "Stories", "Thumbnails"],
    features: [
      "Todo lo incluido en el Pack Esencial (Valor individual: 1.050€)",
      "Gestión de Stories (10 stories interactivas al mes)",
      "Diseño de Thumbnails profesionales (Miniaturas de alto CTR)",
      "Narrativa visual forjada en el sector cinematográfico y de eventos",
      "Estrategia de retención visual y posicionamiento",
      "Informe mensual de posicionamiento SEO y oportunidades de palabras clave nicho",
      "Informe mensual de velocidad web y salud técnica",
    ],
    deliverables: "4 Reels + 2 Carruseles + 10 Stories + Portadas diseñadas",
  },
  {
    id: "pack-authority",
    name: "Pack Authority",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "Solicita tu presupuesto",
    period: "",
    description: "Producción cinematográfica + distribución publicitaria pagada y atención a prospectos.",
    includesSummary: ["Pack Growth", "Paid Media", "Community Management"],
    features: [
      "Todo lo incluido en el Pack Growth (Valor individual: 1.300€)",
      "Paid Media (Gestión y optimización de campañas de anuncios)",
      "Community Management (Interacción activa y respuesta a comentarios)",
      "Supervisión mensual de métricas y retorno",
      "Informe mensual de visibilidad en IA (GEO: ChatGPT y Claude)",
      "Informe mensual de palabras clave de tus competidores directos",
      "Soporte prioritario y canal directo de comunicación",
    ],
    deliverables: "Pack Growth + Gestión publicitaria continua + Interacción de comunidad",
  },
];

const servicesPequena: ServiceItem[] = [
  {
    name: "Grabación In Situ",
    detail: "1 jornada de rodaje presencial con cámara de cine, iluminación y audio profesional.",
    price: "400€",
  },
  {
    name: "Guionización & Preproducción",
    detail: "Preproducción cinematográfica: escaletas, guiones y dirección de 4 Reels + 2 Carruseles.",
    price: "200€",
  },
  {
    name: "Edición Cinematográfica Avanzada",
    detail: "Corte dinámico, colorimetría profesional y diseño sonoro envolvente (Sound Design).",
    price: "450€",
  },
  {
    name: "Diseño de Thumbnails & Portadas",
    detail: "Miniaturas visuales de alto impacto diseñadas para maximizar el ratio de clics.",
    price: "70€",
  },
  {
    name: "Gestión de Stories Activas",
    detail: "10 stories al mes estructuradas para generar conversación y cercanía con tu público.",
    price: "180€",
  },
  {
    name: "Paid Media (Meta / Instagram Ads)",
    detail: "Gestión técnica de campañas publicitarias para amplificar el contenido hacia clientes ideales.",
    price: "350€",
  },
  {
    name: "Community Management",
    detail: "Interacción activa, atención y respuesta a comentarios y dudas de la comunidad.",
    price: "150€",
  },
];

export default function PricingStartPage() {
  return (
    <PricingLandingTemplate
      heroHeadline="Packs de Producción & Crecimiento Audiovisual"
      heroDescription="Trasladamos nuestra experiencia en producción de cine y eventos de gran formato a tu negocio. Preproducción rigurosa, rodaje con cámara de cine in situ y edición de autor para posicionarte con la máxima autoridad."
      packs={packsPequena}
      servicesBreakdown={servicesPequena}
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa para asegurar que el resultado final sea impecable."
    />
  );
}
