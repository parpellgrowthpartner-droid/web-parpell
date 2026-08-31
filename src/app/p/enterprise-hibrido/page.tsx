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
  title: "Packs & Tarifas Híbridas Enterprise: Infraestructura Audiovisual & CTO as a Service | Parpell",
  description: "Tarifas corporativas de máxima escala: producción cinematográfica continua, arquitectura cloud dedicada, optimización multimodelo en IA y consultoría.",
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
    a: "Nuestros dos socios en persona. El socio comercial y filmmaker realiza el rodaje, guiones y dirección; el socio técnico especialista en desarrollo y sistemas programa tu web y posicionamiento GEO en IA. No hay becarios ni subcontratas.",
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

const packsGrande: PricingPack[] = [
  {
    id: "pack-hibrido-corporate-cloud",
    name: "Pack Híbrido Corporate Cloud",
    price: "3.900€",
    originalPrice: "6.500€",
    savings: "Ahorras 2.600€",
    period: "/mes",
    description: "3 jornadas de rodaje presencial (12 vídeos de cine) combinadas con arquitectura cloud corporativa, staging y SEO/GEO multisede.",
    includesSummary: ["3 Jornadas Rodaje", "12 Reels Cine", "Arquitectura Cloud", "GEO Multisede"],
    features: [
      "Producción in situ multi-localización (3 jornadas de rodaje presencial al mes)",
      "Preproducción y dirección creativa (12 piezas de cine + 6 carruseles corporativos)",
      "Postproducción de alta gama (Color grading cine + Sound design) y entrega en 4K/6K",
      "Arquitectura web escalable y blindada con entorno de Staging y alta disponibilidad",
      "Estrategia SEO & GEO omnicanal multisede con Schema Markup corporativo",
      "Dashboard BI con telemetría de captación, rankings, impresiones y CTR",
    ],
    deliverables: "12 Reels cine + 6 Carruseles + Arquitectura Cloud + Staging + Dashboard BI Corporativo",
  },
  {
    id: "pack-hibrido-omnichannel-ia",
    name: "Pack Híbrido Omnichannel & Ecosistema IA",
    badge: "MÁS SOLICITADO",
    isPopular: true,
    price: "5.400€",
    originalPrice: "8.900€",
    savings: "Ahorras 3.500€",
    period: "/mes",
    description: "El ecosistema corporativo definitivo: 16 vídeos de cine, Paid Media global, embudo ManyChat, integraciones de marketing y optimización IA continua.",
    includesSummary: ["16 Reels Cine", "Paid Media Global", "Integraciones & APIs", "Motor IA Multimodelo"],
    features: [
      "Todo lo incluido en el Pack Corporate Cloud (Valor individual: 6.500€)",
      "Producción ampliada a 16 piezas de cine y estrategia diaria de Stories estructuradas",
      "Paid Media de gran escala (Meta Ads, TikTok Ads, YouTube y Google Ads)",
      "Optimización y monitorización continua en modelos de IA (ChatGPT, Claude, Gemini, SearchGPT)",
      "Integraciones ligeras vía APIs y conectores existentes (formularios, CRM, herramientas de marketing) — sin desarrollo de software interno a medida",
      "Optimización continua de conversión mediante tests A/B y CRO avanzado",
      "Consultoría estratégica mensual directa con los 2 socios de Parpell",
    ],
    deliverables: "16 Reels cine + Paid Media Global + ManyChat Integral + Integraciones de Marketing + Motor IA",
  },
  {
    id: "pack-hibrido-retainer-exclusivo",
    name: "Retainer Integral Exclusivo (Brand & CTO as a Service)",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "Solicita tu presupuesto",
    period: "",
    description: "Departamento audiovisual y tecnológico completo con dedicación prioritaria, exclusividad sectorial total y dirección ejecutiva directa.",
    includesSummary: ["Producción Ilimitada", "Formación Comercial", "CTO Dedicado", "Exclusividad Total"],
    features: [
      "Todo lo incluido en Omnichannel & Ecosistema IA (Valor individual: 8.900€)",
      "Producción continua in situ ampliada (hasta 4 jornadas de rodaje presencial al mes)",
      "Formación comercial continua para tu equipo interno de ventas",
      "Dedicación técnica continua para tu infraestructura web, landing pages y flujos de captación",
      "Hardening y auditoría de seguridad continua + gestión de pentesting certificado a través de partner especializado",
      "Exclusividad sectorial y geográfica total: no trabajamos con tus competidores directos",
      "Soporte prioritario en horario extendido (L-V + fines de semana bajo aviso)",
    ],
    deliverables: "Infraestructura Audiovisual y Tecnológica Total + CTO Dedicado + Exclusividad de Sector",
  },
];

const servicesGrande: ServiceItem[] = [
  {
    name: "Producción Cinematográfica Continua",
    detail: "3 a 4 jornadas de rodaje presencial al mes, desplazamiento y equipo de cine completo.",
    price: "1.600€",
  },
  {
    name: "Preproducción & Dirección Creativa",
    detail: "Escaletas, narrativa de autor y dirección estratégica de 12 a 16 piezas corporativas.",
    price: "700€",
  },
  {
    name: "Postproducción High-End & VFX",
    detail: "Colorimetría avanzada de autor, etalonaje, sound design envolvente y efectos visuales.",
    price: "1.800€",
  },
  {
    name: "Arquitectura Web Corporativa & Staging",
    detail: "Infraestructura cloud redundante, entornos de pruebas y despliegues sin interrupción.",
    price: "700€",
  },
  {
    name: "Dominio GEO & SEO Multisede Corporativo",
    detail: "Posicionamiento en buscadores tradicionales y modelos generativos de IA (LLMs).",
    price: "900€",
  },
  {
    name: "Paid Media de Gran Escala",
    detail: "Gestión de presupuestos publicitarios elevados, test A/B y escalado de conversiones.",
    price: "950€",
  },
  {
    name: "Integraciones de Marketing (APIs / CRM / Webhooks)",
    detail: "Conexión de herramientas y formularios para sincronizar leads, clientes y flujos de marketing.",
    price: "850€",
  },
  {
    name: "Consultoría Estratégica & Formación Comercial",
    detail: "Sesiones de entrenamiento comercial de ventas y optimización de flujos de captación.",
    price: "800€",
  },
];

export default function PricingEnterpriseHibridoPage() {
  return (
    <PricingLandingTemplate
      heroHeadline="Infraestructura Híbrida Enterprise: Cine, IA & Ecosistema de Ventas"
      heroDescription="Dirección cinematográfica de autor e ingeniería de software dedicada para marcas líderes. Los 2 socios de Parpell orquestando tu producción audiovisual, tu plataforma digital y tu posicionamiento en IA."
      packs={packsGrande}
      servicesBreakdown={servicesGrande}
      valuePillars={hybridPillars}
      faqs={hybridFaqs}
      footerTitle="Tarifas Oficiales de Ecosistema Híbrido Enterprise (Audiovisual & Tecnología)"
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa técnica y audiovisual para asegurar que el resultado final sea impecable."
    />
  );
}
