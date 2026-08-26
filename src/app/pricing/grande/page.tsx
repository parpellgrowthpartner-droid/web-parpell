import type { Metadata } from "next";
import { PricingLandingTemplate, PricingPack, ServiceItem } from "@/components/PricingLandingTemplate";

export const metadata: Metadata = {
  title: "Infraestructura Audiovisual & Dominio de Marca",
  description: "Infraestructura de producción cinematográfica continua, paid media a gran escala y consultoría de crecimiento.",
  robots: {
    index: false,
    follow: false,
  },
};

const packsGrande: PricingPack[] = [
  {
    id: "pack-corporate-brand",
    name: "Pack Corporate Brand",
    price: "2.900€",
    originalPrice: "4.300€",
    savings: "Ahorras 1.400€",
    period: "/mes",
    description: "3 jornadas de rodaje presencial, 12 piezas de cine y dirección de arte para compañías que exigen máxima excelencia estética.",
    includesSummary: ["3 Jornadas Rodaje", "12 Reels Cine", "Dirección Creativa", "Postproducción High-End"],
    features: [
      "Producción in situ multi-localización (3 jornadas de rodaje presencial al mes)",
      "Preproducción y dirección creativa (12 piezas de cine + 6 carruseles corporativos)",
      "Postproducción de alta gama (Color grading de cine + Sound design inmersivo)",
      "Identidad visual y portadas optimizadas para todos los canales",
      "Entrega de todos los archivos brutos y másteres en resolución 4K/6K",
    ],
    deliverables: "12 Reels de cine + 6 Carruseles corporativos + Portadas diseñadas",
  },
  {
    id: "pack-omnichannel-leader",
    name: "Pack Omnichannel Leader",
    badge: "MÁS SOLICITADO",
    isPopular: true,
    price: "3.800€",
    originalPrice: "6.350€",
    savings: "Ahorras 2.550€",
    period: "/mes",
    description: "El ecosistema corporativo completo: 16 vídeos de cine, stories continuas, Paid Media de gran escala y embudo ManyChat integral.",
    includesSummary: ["Pack Corporate Brand", "Stories Diarias", "Paid Media Gran Escala", "ManyChat Corporativo"],
    features: [
      "Todo lo incluido en el Pack Corporate Brand (Valor individual: 4.300€)",
      "Producción ampliada a 16 piezas de cine mensuales",
      "Estrategia continua de Stories (historias interactivas estructuradas a diario)",
      "Paid Media de gran escala (Meta Ads, TikTok Ads, YouTube y Google Ads)",
      "Automatización ManyChat avanzada para cualificar leads de alto ticket",
    ],
    deliverables: "16 Reels de cine + Contenido Diario + Paid Media Global + ManyChat Integral",
  },
  {
    id: "pack-custom-retainer",
    name: "Pack Custom Retainer",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "4.900€",
    originalPrice: "8.000€",
    savings: "Ahorras 3.100€",
    period: "/mes",
    description: "Departamento audiovisual y de crecimiento con dedicación prioritaria y consultoría de formación de equipos.",
    includesSummary: ["Omnichannel Leader", "4 Jornadas Rodaje", "Formación Comercial", "Exclusividad"],
    features: [
      "Todo lo incluido en el Pack Omnichannel Leader (Valor individual: 6.350€)",
      "Producción continua ampliada (hasta 4 jornadas de rodaje presencial al mes)",
      "Formación comercial para el equipo interno de ventas",
      "Optimización de workflows con Inteligencia Artificial interna en tu operativa",
      "Exclusividad en tu sector/área geográfica y soporte VIP prioritario",
    ],
    deliverables: "Infraestructura Audiovisual Ilimitada + Consultoría Operativa + Formación Comercial",
  },
];

const servicesGrande: ServiceItem[] = [
  {
    name: "Producción Cinematográfica Continua",
    detail: "3 a 4 jornadas de rodaje presencial al mes, iluminación de estudio y desplazamiento a múltiples localizaciones.",
    price: "1.600€",
  },
  {
    name: "Preproducción & Dirección Creativa",
    detail: "Estándares de producción cinematográfica y grandes eventos: escaletas, narrativa de autor y dirección de 12 a 16 piezas.",
    price: "700€",
  },
  {
    name: "Postproducción High-End & VFX",
    detail: "Colorimetría avanzada de autor, etalonaje, sound design envolvente y efectos visuales de alta precisión.",
    price: "1.800€",
  },
  {
    name: "Identidad Visual & Portadas",
    detail: "Adaptación gráfica corporativa, portadas de alto impacto y entregables multiplataforma.",
    price: "200€",
  },
  {
    name: "Estrategia de Stories Continuas",
    detail: "Publicación estructurada de historias diarias para dinamizar y retener a la comunidad.",
    price: "500€",
  },
  {
    name: "Paid Media de Gran Escala",
    detail: "Gestión de presupuestos publicitarios elevados, test A/B continuo de creatividades y escalado de conversiones.",
    price: "950€",
  },
  {
    name: "Automatización ManyChat & Funnel",
    detail: "Infraestructura automatizada de captura, segmentación y cualificación directa a CRM comercial.",
    price: "600€",
  },
  {
    name: "Consultoría & Formación Comercial",
    detail: "Sesiones de entrenamiento comercial para tu equipo de ventas y workflows de IA interna.",
    price: "800€",
  },
];

export default function PricingGrandePage() {
  return (
    <PricingLandingTemplate
      heroHeadline="Infraestructura Audiovisual & Dominio de Marca"
      heroDescription="Dirección cinematográfica de autor y estándares de producción de grandes eventos y cine aplicados a la narrativa de líderes de mercado."
      packs={packsGrande}
      servicesBreakdown={servicesGrande}
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa para asegurar que el resultado final sea impecable."
    />
  );
}
