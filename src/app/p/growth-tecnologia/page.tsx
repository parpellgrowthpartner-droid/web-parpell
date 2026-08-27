import type { Metadata } from "next";
import { ShieldCheck, Sparkles, LineChart, Code2 } from "lucide-react";
import { PricingLandingTemplate, PricingPack, ServiceItem, ValuePillar } from "@/components/PricingLandingTemplate";

export const metadata: Metadata = {
  title: "Packs & Tarifas de Escalado Tecnológico y Motor GEO",
  description: "Tarifas de ingeniería web, optimización de motores generativos de IA (GEO), analítica avanzada y auditorías de huella digital.",
  robots: {
    index: false,
    follow: false,
  },
};

const techPillars: ValuePillar[] = [
  {
    title: "Hosting & SSL Pro",
    subtitle: "Velocidad y blindaje",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  {
    title: "Motor GEO (IA)",
    subtitle: "ChatGPT, Claude y Google",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    title: "Analítica & CTR",
    subtitle: "Visitas reales y posiciones",
    icon: <LineChart className="w-4 h-4" />,
  },
  {
    title: "Código 100% Tuyo",
    subtitle: "Sin ataduras ni plantillas",
    icon: <Code2 className="w-4 h-4" />,
  },
];

const packsMediana: PricingPack[] = [
  {
    id: "pack-tech-core",
    name: "Tech Core & SEO Continuo",
    price: "790€",
    originalPrice: "1.150€",
    savings: "Ahorras 360€",
    period: "/mes",
    description: "Infraestructura cloud gestionada, copias de seguridad redundantes y posicionamiento SEO continuo para empresas en crecimiento.",
    includesSummary: ["Infraestructura Cloud", "Auditoría Quincenal", "SEO Transaccional", "Dashboard BI"],
    features: [
      "Infraestructura cloud de alta disponibilidad, SSL dedicado y copias redundantes",
      "Auditoría técnica quincenal (salud de indexación, arquitectura de enlaces y Schema)",
      "Estrategia de keywords transaccionales y optimización on-page continua",
      "Dashboard analítico en tiempo real: tráfico orgánico, impresiones, rankings y CTR",
      "2 horas mensuales de soporte técnico y mejoras evolutivas",
    ],
    deliverables: "Infraestructura Cloud + SEO continuo + Dashboard BI en tiempo real",
  },
  {
    id: "pack-dominio-seo-geo",
    name: "Dominio SEO & Motor GEO (IA)",
    badge: "MÁS RECOMENDADO",
    isPopular: true,
    price: "1.250€",
    originalPrice: "1.850€",
    savings: "Ahorras 600€",
    period: "/mes",
    description: "El sistema integral: optimización para aparecer citado en ChatGPT, Claude y Perplexity, análisis de rivales y landing pages de captación.",
    includesSummary: ["Tech Core", "Motor GEO (IA)", "Análisis Competidores", "Landing Pages"],
    features: [
      "Todo lo incluido en Tech Core & SEO Continuo (Valor individual: 1.150€)",
      "Optimización GEO (Generative Engine Optimization) multimodelo (ChatGPT, Claude, Perplexity y Gemini)",
      "Análisis mensual de competencia: gaps de palabras clave y debilidades detectadas",
      "Creación y optimización continua de Landing Pages de alta conversión",
      "Automatizaciones de contacto y sincronización directa con tu CRM",
      "Reunión estratégica mensual de análisis de métricas y nuevos objetivos",
    ],
    deliverables: "Tech Core + Motor GEO / IA + Optimización de Landings + Conexión CRM",
  },
  {
    id: "pack-autoridad-total",
    name: "Autoridad Digital Total",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "1.750€",
    originalPrice: "2.500€",
    savings: "Ahorras 750€",
    period: "/mes",
    description: "Dominio absoluto del sector: auditoría de ciberseguridad, integraciones a medida y soporte técnico con dedicación prioritaria.",
    includesSummary: ["Dominio SEO & GEO", "Ciberseguridad", "Integraciones CRM/APIs", "Soporte Prioritario"],
    features: [
      "Todo lo incluido en Dominio SEO & Motor GEO (Valor individual: 1.850€)",
      "Auditoría mensual avanzada de huella digital y revisión de ciberseguridad",
      "Integraciones a medida (APIs, webhooks, sistemas de cualificación automática)",
      "4 horas mensuales de desarrollo técnico evolutivo prioritario",
      "Canal prioritario directo con el socio de software (soporte sin esperas)",
    ],
    deliverables: "Dominio SEO & GEO + Ciberseguridad + Integraciones CRM + Soporte Prioritario",
  },
];

const servicesMediana: ServiceItem[] = [
  {
    name: "Infraestructura Cloud & Alta Disponibilidad",
    detail: "Despliegue gestionado en servidores cloud de alto rendimiento, balanceo, SSL corporativo y backups continuos.",
    price: "220€",
  },
  {
    name: "Auditoría Técnica Quincenal de Huella Digital",
    detail: "Revisión profunda de indexación en Google, arquitectura de datos Schema y salud de enlaces.",
    price: "280€",
  },
  {
    name: "Estrategia SEO Transaccional & Keywords",
    detail: "Investigación continua de palabras clave de alto valor comercial y optimización de contenido on-page.",
    price: "350€",
  },
  {
    name: "Optimización GEO Avanzada (Inteligencia Artificial)",
    detail: "Estrategia técnica para ser citado por modelos LLM líderes: ChatGPT, Claude, Gemini y Perplexity.",
    price: "450€",
  },
  {
    name: "Dashboard BI & Reportes de Rankings y CTR",
    detail: "Panel interactivo con evolución semanal de rankings, clics, impresiones y tasa de clics (CTR).",
    price: "200€",
  },
  {
    name: "Optimización CRO & Landing Pages de Captación",
    detail: "Diseño y desarrollo de páginas de aterrizaje optimizadas técnicamente para maximizar conversiones.",
    price: "350€",
  },
  {
    name: "Integraciones CRM & Automatizaciones Web",
    detail: "Conexión de formularios y captación web directa a CRM con alertas instantáneas de leads.",
    price: "250€",
  },
];

export default function PricingGrowthTecnologiaPage() {
  return (
    <PricingLandingTemplate
      heroHeadline="Escalado Tecnológico, SEO & Motor GEO (IA)"
      heroDescription="Aplicamos ingeniería de software de alto nivel para blindar tu infraestructura web, dominar el posicionamiento en Google y colocar a tu negocio como respuesta recomendada en las principales Inteligencias Artificiales."
      packs={packsMediana}
      servicesBreakdown={servicesMediana}
      valuePillars={techPillars}
      footerTitle="Tarifas Oficiales de Escalado Tecnológico & Motor GEO"
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa técnica para asegurar que el resultado final sea impecable."
    />
  );
}
