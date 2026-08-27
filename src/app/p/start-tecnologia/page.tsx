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
  title: "Packs & Tarifas de Mantenimiento Web y Posicionamiento IA",
  description: "Tarifas de hosting de alta velocidad, mantenimiento técnico, auditorías de huella digital y posicionamiento en buscadores e IA.",
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

const packsPequena: PricingPack[] = [
  {
    id: "pack-mantenimiento-base",
    name: "Mantenimiento & Huella Base",
    price: "290€",
    originalPrice: "420€",
    savings: "Ahorras 130€",
    period: "/mes",
    description: "Cuidado técnico total de tu web, máxima velocidad, seguridad garantizada y métricas claras de rendimiento.",
    includesSummary: ["Hosting & SSL", "Backups Diarios", "Dashboard Analítico"],
    features: [
      "Hosting gestionado de alta velocidad con certificado SSL y uptime 99.9%",
      "Copias de seguridad diarias redundantes y revisiones de seguridad continuas",
      "Monitorización técnica ligera y actualización proactiva de componentes",
      "Dashboard analítico: gráficas de visitas reales, impresiones y CTR en Google Search Console",
      "1 hora mensual de soporte técnico o pequeños ajustes visuales",
      "Informe mensual de visión de marca y coherencia visual en canales digitales",
    ],
    deliverables: "Infraestructura web blindada + Panel de visitas y CTR mensual",
  },
  {
    id: "pack-local-seo-ia",
    name: "Local SEO & Posicionamiento IA",
    badge: "MÁS POPULAR",
    isPopular: true,
    price: "490€",
    originalPrice: "700€",
    savings: "Ahorras 210€",
    period: "/mes",
    description: "El pack idóneo para negocios locales que quieren destacar en Google Maps y ser recomendados por inteligencias artificiales.",
    includesSummary: ["Pack Base", "Auditoría Huella Digital", "GEO / IA", "Google Maps"],
    features: [
      "Todo lo incluido en Mantenimiento & Huella Base (Valor individual: 420€)",
      "Auditoría mensual de huella digital: indexación, consistencia de datos y autoridad",
      "Optimización de Google Business Profile y Schema Markup para motores de búsqueda",
      "Posicionamiento en IA (GEO): preparación técnica para ser recomendado en ChatGPT, Perplexity y Claude",
      "Estudio de keywords locales y oportunidades de competencia directa",
      "Informe mensual detallado de rankings por palabras clave, CTR y evolución",
      "Informe mensual de visión de marca y presencia audiovisual vs competidores locales",
      "Informe mensual de oportunidades de contenido en vídeo y engagement",
    ],
    deliverables: "Pack Base + Auditoría mensual + Optimización GEO/IA + Informe de rankings",
  },
  {
    id: "pack-crecimiento-conversion",
    name: "Crecimiento Digital & Conversión",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "790€",
    originalPrice: "1.100€",
    savings: "Ahorras 310€",
    period: "/mes",
    description: "Visibilidad integral en IA, optimización continua de velocidad de carga y soporte directo para captar más clientes.",
    includesSummary: ["Local SEO & IA", "CRO & Velocidad", "Análisis Competencia", "Soporte Directo"],
    features: [
      "Todo lo incluido en Local SEO & Posicionamiento IA (Valor individual: 700€)",
      "Optimización continua de velocidad web (Core Web Vitals) y conversión (CRO)",
      "Monitorización exhaustiva de competidores locales y captura de términos clave",
      "Informe mensual de métricas en redes sociales y análisis de seguidores",
      "Auditoría mensual de retención visual y calidad de contenidos publicados",
      "2 horas mensuales de soporte técnico prioritario y evolutivos",
      "Canal de comunicación directo con el socio de software (cero intermediarios)",
    ],
    deliverables: "Local SEO & IA + CRO + Auditoría de competencia + Soporte técnico prioritario",
  },
];

const servicesPequena: ServiceItem[] = [
  {
    name: "Hosting Gestionado & Certificado SSL",
    detail: "Alojamiento optimizado de alto rendimiento, configuración SSL, HTTP/3 y CDN global.",
    price: "80€",
  },
  {
    name: "Copias de Seguridad & Monitorización 24/7",
    detail: "Backups diarios automáticos, monitorización de caídas (uptime) y restauración inmediata ante incidencias.",
    price: "70€",
  },
  {
    name: "Dashboard de Rendimiento & Analítica Real",
    detail: "Configuración y panel con métricas verídicas de Google Search Console: visitas, posiciones y CTR.",
    price: "120€",
  },
  {
    name: "Auditoría de Huella Digital & Técnica",
    detail: "Revisión mensual de indexación, salud técnica web, enlaces rotos y datos estructurados Schema.",
    price: "180€",
  },
  {
    name: "Posicionamiento en IA (GEO) & Motores de Búsqueda",
    detail: "Optimización de arquitectura para aparecer en las respuestas de ChatGPT, Claude, Perplexity y Google.",
    price: "250€",
  },
  {
    name: "Estudio de Keywords & Oportunidades SEO",
    detail: "Búsqueda periódica de palabras clave de intención comercial y análisis de brechas frente a competidores.",
    price: "150€",
  },
  {
    name: "Bolsa de Horas Técnicas & Evolutivos",
    detail: "Soporte técnico, cambios en la web, ajustes de diseño o nuevas secciones según necesidad.",
    price: "60€/h",
  },
];

export default function PricingStartTecnologiaPage() {
  return (
    <PricingLandingTemplate
      heroHeadline="Mantenimiento Web, Huella Digital & Posicionamiento IA"
      heroDescription="Cuidamos cada línea de código de tu web, aseguramos máxima velocidad y blindaje técnico, y optimizamos tu huella para que Google y las inteligencias artificiales recomienden tu negocio a clientes reales."
      packs={packsPequena}
      servicesBreakdown={servicesPequena}
      valuePillars={techPillars}
      faqs={techFaqs}
      footerTitle="Tarifas Oficiales de Mantenimiento Web, SEO & Posicionamiento IA"
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa técnica para asegurar que el resultado final sea impecable."
    />
  );
}
