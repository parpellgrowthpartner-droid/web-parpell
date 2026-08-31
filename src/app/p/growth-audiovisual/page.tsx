import type { Metadata } from "next";
import { PricingLandingTemplate, PricingPack, ServiceItem } from "@/components/PricingLandingTemplate";

export const metadata: Metadata = {
  title: "Packs & Tarifas de Escalado Audiovisual | Parpell",
  description: "Tarifas y packs de producción cinematográfica, paid media y automatización multicanal.",
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

const packsMediana: PricingPack[] = [
  {
    id: "pack-scale-pro",
    name: "Pack Scale Pro",
    price: "1.450€",
    originalPrice: "2.120€",
    savings: "Ahorras 670€",
    period: "/mes",
    description: "Doble jornada de rodaje in situ y 8 piezas de cine para empresas con catálogo amplio o múltiples áreas de servicio.",
    includesSummary: ["2 Jornadas Rodaje", "8 Reels Cine", "4 Carruseles", "Edición Avanzada"],
    features: [
      "Grabación in situ ampliada (2 jornadas de rodaje presencial al mes + equipo cine)",
      "Preproducción profesional (8 Reels con narrativa de autor + 4 Carruseles)",
      "Edición Cinematográfica Avanzada (Color grading cine + Sound design inmersivo)",
      "Diseño de Thumbnails de alto CTR para todas las piezas",
      "Planificación y dirección técnica forjada en cine y eventos de gran escala",
      "Informe mensual de salud técnica web, indexación y velocidad de carga",
    ],
    deliverables: "8 Reels de cine + 4 Carruseles + Portadas diseñadas",
  },
  {
    id: "pack-market-growth",
    name: "Pack Market Growth",
    badge: "MÁS RECOMENDADO",
    isPopular: true,
    price: "1.850€",
    originalPrice: "3.220€",
    savings: "Ahorras 1.370€",
    period: "/mes",
    description: "El sistema integral: 8 Reels, 25 Stories, Paid Media y automatización ManyChat para cualificar leads en automático.",
    includesSummary: ["Pack Scale Pro", "25 Stories", "Paid Media Multicanal", "ManyChat"],
    features: [
      "Todo lo incluido en el Pack Scale Pro (Valor individual: 2.120€)",
      "Gestión de Stories interactivas (25 stories al mes con narrativa diaria)",
      "Paid Media Multicanal (Meta Ads + TikTok Ads con gestión y optimización)",
      "Automatización ManyChat en Instagram/TikTok para captura de leads",
      "Reunión estratégica mensual de análisis de ventas y ROAS",
      "Informe mensual de visibilidad en motores de IA (ChatGPT, Claude, Perplexity)",
      "Informe mensual de brechas de palabras clave vs competidores del sector",
    ],
    deliverables: "Pack Scale Pro + 25 Stories + Campañas Ads + Sistema ManyChat",
  },
  {
    id: "pack-dominance",
    name: "Pack Dominance",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "Solicita tu presupuesto",
    period: "",
    description: "Dominio integral de mercado: embudo completo de conversión, retargeting avanzado y atención a prospectos.",
    includesSummary: ["Pack Market Growth", "Community Management", "Retargeting", "Auditoría IA"],
    features: [
      "Todo lo incluido en el Pack Market Growth (Valor individual: 3.220€)",
      "Community Management proactivo y respuesta a dudas de clientes",
      "Embudo de retargeting publicitario y audiencias personalizadas",
      "Auditoría mensual GEO & SEO: reporte completo de visibilidad en IA y recomendaciones",
      "Informe mensual de tráfico orgánico, CTR y oportunidades de captación técnica",
      "Canal prioritario de soporte y seguimiento continuo",
    ],
    deliverables: "Pack Market Growth + Community Management + Retargeting + Auditoría GEO",
  },
];

const servicesMediana: ServiceItem[] = [
  {
    name: "Grabación Multi-Jornada In Situ",
    detail: "2 jornadas de rodaje presencial al mes con cámaras de cine, iluminación y micrófonos de solapa inalámbricos.",
    price: "800€",
  },
  {
    name: "Preproducción & Guionización Avanzada",
    detail: "Preproducción exhaustiva: desglose de escenas, guiones de 8 Reels + 4 Carruseles de autoridad.",
    price: "350€",
  },
  {
    name: "Edición Cinematográfica (8 Piezas)",
    detail: "Corte rítmico, corrección de color avanzada, subtitulado estilizado y diseño sonoro profesional.",
    price: "850€",
  },
  {
    name: "Thumbnails & Portadas Corporativas",
    detail: "Diseño gráfico de miniaturas a medida optimizadas para maximizar el CTR en feed y explorador.",
    price: "120€",
  },
  {
    name: "Gestión de Stories Activas (25 Stories)",
    detail: "25 stories interactivas mensuales para activar al público templado y dirigir tráfico a ventas.",
    price: "300€",
  },
  {
    name: "Paid Media Multicanal (Meta & TikTok)",
    detail: "Gestión de campañas de prospección y retargeting, segmentación de audiencias y optimización de costes por lead.",
    price: "500€",
  },
  {
    name: "Automatización ManyChat & CM",
    detail: "Flujos automatizados de respuesta por mensaje directo (DM) y gestión de interacciones.",
    price: "300€",
  },
];

export default function PricingGrowthPage() {
  return (
    <PricingLandingTemplate
      heroHeadline="Escalado Audiovisual & Estrategia Multicanal"
      heroDescription="Aplicamos nuestra trayectoria en el sector del cine y la producción de grandes eventos a tu marca. Preproducción milimétrica, calidad cinematográfica in situ y sistemas multicanal para consolidar tu liderazgo."
      packs={packsMediana}
      servicesBreakdown={servicesMediana}
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa para asegurar que el resultado final sea impecable."
    />
  );
}
