import type { Metadata } from "next";
import { ShieldCheck, Sparkles, LineChart, Code2 } from "lucide-react";
import {
  PricingLandingTemplate,
  PricingPack,
  ServiceItem,
  ValuePillar,
  FaqItem,
} from "@/components/PricingLandingTemplate";

export const metadata: Metadata = {
  title: "Packs & Tarifas de Escalado Tecnológico y Motor GEO | Parpell",
  description: "Tarifas de ingeniería web, optimización de motores generativos de IA (GEO), analítica avanzada y auditorías de huella digital.",
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

const techFaqs: FaqItem[] = [
  {
    q: "¿Cómo funciona el mantenimiento y qué ocurre ante una incidencia?",
    a: "Monitorizamos la salud de tu web de forma continua. Si surge cualquier problema técnico, caída de servidor o fallo de seguridad, actuamos de inmediato con copias de seguridad redundantes y restauración garantizada.",
  },
  {
    q: "¿En qué consiste el posicionamiento en IA (GEO) y cómo ayuda a mi negocio?",
    a: "Optimizamos la arquitectura técnica, datos estructurados (Schema) y la huella digital de tu web para que modelos como ChatGPT, Claude, Perplexity y Google te reconozcan y te recomienden cuando los usuarios buscan tus servicios.",
  },
  {
    q: "¿De quién es el código, la web y los datos generados?",
    a: "El 100% del código fuente, configuraciones, bases de datos y accesos pertenecen exclusivamente a tu empresa. No aplicamos ningún tipo de permanencia ni bloqueo técnico.",
  },
  {
    q: "¿Cómo solicito cambios técnicos o mejoras en la web?",
    a: "Dispones de canal directo con el socio técnico para solicitar ajustes, evolutivos o revisiones de analítica según las horas incluidas en tu pack, sin tickets lentos ni intermediarios.",
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
      "Auditoría técnica mensual (salud de indexación, arquitectura de enlaces y Schema)",
      "Estrategia de keywords transaccionales y optimización on-page continua",
      "Dashboard analítico en tiempo real: tráfico orgánico, impresiones, rankings y CTR",
      "2 horas mensuales de soporte técnico y mejoras evolutivas",
      "Informe mensual de impacto visual de marca y engagement en redes sociales",
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
      "Informe mensual de estadísticas en redes sociales y evolución de seguidores",
      "Informe mensual de oportunidades de narrativa audiovisual y guionización",
    ],
    deliverables: "Tech Core + Motor GEO / IA + Optimización de Landings + Conexión CRM",
  },
  {
    id: "pack-autoridad-total",
    name: "Autoridad Digital Total",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "Solicita tu presupuesto",
    period: "",
    description: "Dominio absoluto del sector: auditoría de ciberseguridad, integraciones a medida y soporte técnico con dedicación prioritaria.",
    includesSummary: ["Dominio SEO & GEO", "Ciberseguridad", "Integraciones CRM/APIs", "Soporte Prioritario"],
    features: [
      "Todo lo incluido en Dominio SEO & Motor GEO (Valor individual: 1.850€)",
      "Auditoría mensual avanzada de huella digital y revisión de ciberseguridad",
      "Integraciones a medida (APIs, webhooks, sistemas de cualificación automática)",
      "Auditoría mensual de autoridad de marca audiovisual y conversión de publicaciones",
      "Informe mensual de retención y calidad de vídeo frente a competidores",
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
      faqs={techFaqs}
      footerTitle="Tarifas Oficiales de Escalado Tecnológico & Motor GEO"
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa técnica para asegurar que el resultado final sea impecable."
    />
  );
}
