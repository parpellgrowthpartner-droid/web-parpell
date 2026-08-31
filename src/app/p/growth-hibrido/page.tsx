import type { Metadata } from "next";
import { Video, Sparkles, ShieldCheck, Users } from "lucide-react";
import {
  PricingLandingTemplate,
  PricingPack,
  ServiceItem,
  ValuePillar,
  FaqItem,
} from "@/components/PricingLandingTemplate";

export const metadata: Metadata = {
  title: "Packs & Tarifas Híbridas de Escalado: Audiovisual, Paid Media & GEO (IA) | Parpell",
  description: "Tarifas de escalado integral para empresas: doble jornada de rodaje, campañas multicanal, optimización en IA y automatizaciones comerciales.",
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

const hybridPillars: ValuePillar[] = [
  {
    title: "Cámara de Cine",
    subtitle: "Rodaje in situ pro",
    icon: <Video className="w-4 h-4" />,
  },
  {
    title: "Motor GEO (IA)",
    subtitle: "ChatGPT, Claude y Google",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    title: "Web & Blindaje",
    subtitle: "Hosting, SSL y velocidad",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  {
    title: "Los 2 Socios",
    subtitle: "Cero intermediarios",
    icon: <Users className="w-4 h-4" />,
  },
];

const hybridFaqs: FaqItem[] = [
  {
    q: "¿Por qué contratar audiovisual y tecnología juntos en lugar de agencias separadas?",
    a: "Porque trabajar con dos agencias distintas crea teléfono roto. Aquí el contenido audiovisual está optimizado para la conversión de tu web, y tu web está estructurada técnicamente para que los algoritmos de IA recomienden el contenido de tu marca.",
  },
  {
    q: "¿Quién ejecuta cada parte del trabajo?",
    a: "Nuestros dos socios en persona. El socio comercial y filmmaker realiza el rodaje, guiones y dirección; el socio ingeniero de software programa tu web, sistemas y posicionamiento GEO en IA. No hay becarios ni subcontratas.",
  },
  {
    q: "¿De quién es el material y el código?",
    a: "El 100% de los vídeos brutos, másteres en alta definición, código web, accesos y bases de datos son propiedad exclusiva de tu empresa desde el primer día.",
  },
  {
    q: "¿Los planes son flexibles si necesito más horas de rodaje o más desarrollo?",
    a: "Totalmente. La estructura es modular y podemos reajustar los entregables según la prioridad mensual de tu negocio.",
  },
];

const packsMediana: PricingPack[] = [
  {
    id: "pack-hibrido-scale-pro",
    name: "Pack Híbrido Scale Pro",
    price: "1.950€",
    originalPrice: "3.100€",
    savings: "Ahorras 1.150€",
    period: "/mes",
    description: "Doble jornada de rodaje in situ (8 piezas de cine) combinada con infraestructura cloud, SEO continuo y dashboard en tiempo real.",
    includesSummary: ["2 Jornadas Rodaje", "8 Reels Cine", "Infraestructura Cloud", "SEO Continuo"],
    features: [
      "Grabación presencial ampliada (2 jornadas de rodaje al mes con cámara de cine)",
      "Preproducción y guiones de autor (8 Reels de cine + 4 Carruseles)",
      "Edición Cinematográfica Avanzada (Color grading cine + Sound design inmersivo)",
      "Infraestructura cloud gestionada, copias de seguridad redundantes y SSL corporativo",
      "Auditoría técnica mensual (indexación, enlaces, Schema y rendimiento web)",
      "Dashboard analítico interactivo con tráfico orgánico, impresiones, rankings y CTR",
    ],
    deliverables: "8 Reels de cine + 4 Carruseles + Infraestructura Cloud + Dashboard BI en tiempo real",
  },
  {
    id: "pack-hibrido-market-dominance",
    name: "Pack Híbrido Market Dominance",
    badge: "MÁS RECOMENDADO",
    isPopular: true,
    price: "2.650€",
    originalPrice: "4.500€",
    savings: "Ahorras 1.850€",
    period: "/mes",
    description: "El sistema integral: 8 Reels, 25 Stories, Paid Media Multicanal, ManyChat y optimización multimodelo en IA (GEO).",
    includesSummary: ["Pack Scale Pro", "Paid Media Ads", "Motor GEO (IA)", "ManyChat & CRM"],
    features: [
      "Todo lo incluido en el Pack Híbrido Scale Pro (Valor individual: 3.100€)",
      "Gestión de Stories interactivas (25 stories al mes con narrativa diaria)",
      "Paid Media Multicanal (Meta Ads + TikTok Ads con gestión y optimización de conversiones)",
      "Optimización GEO (Generative Engine Optimization) multimodelo (ChatGPT, Claude, Perplexity y Gemini)",
      "Automatización ManyChat en Instagram/TikTok sincronizada con tu CRM",
      "Reunión estratégica mensual con los 2 socios para análisis de ventas, ROAS y objetivos",
    ],
    deliverables: "Pack Scale Pro + 25 Stories + Campañas Ads + Motor GEO + ManyChat & CRM",
  },
  {
    id: "pack-hibrido-autoridad-total",
    name: "Pack Híbrido Autoridad Total",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "Solicita tu presupuesto",
    period: "",
    description: "Dominio absoluto del sector: embudo publicitario completo, retargeting avanzado, ciberseguridad y soporte técnico prioritario.",
    includesSummary: ["Market Dominance", "Retargeting Avanzado", "Ciberseguridad", "Soporte Prioritario VIP"],
    features: [
      "Todo lo incluido en Market Dominance (Valor individual: 4.500€)",
      "Community Management proactivo y atención cualificada a comentarios y prospectos",
      "Embudo de retargeting publicitario y audiencias personalizadas de alta conversión",
      "Revisión técnica de seguridad y buenas prácticas (accesos, backups, actualizaciones) + optimización de arquitectura de datos",
      "4 horas mensuales de desarrollo técnico evolutivo prioritario",
      "Canal de comunicación VIP y soporte directo con los 2 socios de Parpell",
    ],
    deliverables: "Dominio 360°: Cine + Paid Media + Retargeting + Motor GEO + Ciberseguridad + Soporte VIP",
  },
];

const servicesMediana: ServiceItem[] = [
  {
    name: "Producción Audiovisual Multi-Jornada",
    detail: "2 jornadas de rodaje presencial al mes con cámaras de cine, iluminación y audio profesional.",
    price: "800€",
  },
  {
    name: "Preproducción & Guionización Avanzada",
    detail: "Desglose de escenas y guiones estratégicos para 8 Reels y 4 Carruseles de autoridad.",
    price: "350€",
  },
  {
    name: "Edición Cinematográfica (8 Piezas)",
    detail: "Corte rítmico, corrección de color de autor, subtitulación y sound design envolvente.",
    price: "850€",
  },
  {
    name: "Infraestructura Cloud & Alta Disponibilidad",
    detail: "Despliegue gestionado en servidores cloud de alto rendimiento con backups y monitorización.",
    price: "220€",
  },
  {
    name: "Optimización GEO Avanzada (Inteligencia Artificial)",
    detail: "Estrategia técnica para ser citado por ChatGPT, Claude, Gemini y Perplexity.",
    price: "450€",
  },
  {
    name: "Paid Media Multicanal (Meta & TikTok)",
    detail: "Gestión de campañas de captación, segmentación y optimización de coste por lead.",
    price: "500€",
  },
  {
    name: "Automatización ManyChat & Conexión CRM",
    detail: "Flujos automatizados de respuesta por mensaje directo (DM) y sincronización de leads.",
    price: "300€",
  },
];

export default function PricingGrowthHibridoPage() {
  return (
    <PricingLandingTemplate
      heroHeadline="Escalado Híbrido: Producción de Cine & Motor GEO (IA)"
      heroDescription="Unimos rodajes presenciales con cámara de cine y dirección narrativa con ingeniería web de alto rendimiento y optimización en motores de IA para acelerar la captación de tu empresa."
      packs={packsMediana}
      servicesBreakdown={servicesMediana}
      valuePillars={hybridPillars}
      faqs={hybridFaqs}
      footerTitle="Tarifas Oficiales de Escalado Híbrido (Audiovisual & Tecnología)"
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa técnica y audiovisual para asegurar que el resultado final sea impecable."
    />
  );
}
