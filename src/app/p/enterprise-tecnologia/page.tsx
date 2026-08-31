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
  title: "Infraestructura Crítica, SEO Corporativo & Dominio GEO (IA) | Parpell",
  description: "Ingeniería de software dedicada, arquitectura cloud corporativa, optimización multimodelo en IA y consultoría técnica continua.",
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

const packsGrande: PricingPack[] = [
  {
    id: "pack-infraestructura-critica",
    name: "Infraestructura Crítica & SEO Corporativo",
    price: "1.950€",
    originalPrice: "2.900€",
    savings: "Ahorras 950€",
    period: "/mes",
    description: "Arquitectura web de máxima exigencia, alta disponibilidad, entorno de staging y posicionamiento SEO y GEO multisede.",
    includesSummary: ["Arquitectura Cloud", "Entorno Staging", "SEO & GEO Multisede", "Dashboard BI"],
    features: [
      "Arquitectura web escalable y blindada, entornos de Staging/Producción y alta disponibilidad",
      "Estrategia SEO & GEO omnicanal a nivel nacional o multisede con Schema corporativo",
      "Dashboard BI a medida con atribución de leads, volumen de impresiones, rankings y CTR",
      "Mantenimiento proactivo 24/7 con monitorización continua y resolución de incidencias",
      "6 horas mensuales de desarrollos evolutivos e implementaciones técnicas",
      "Informe mensual de percepción e impacto audiovisual corporativo en el sector",
    ],
    deliverables: "Infraestructura Crítica + Staging + SEO/GEO Multisede + Dashboard BI Corporativo",
  },
  {
    id: "pack-ecosistema-corporativo",
    name: "Ecosistema Digital Corporativo",
    badge: "MÁS SOLICITADO",
    isPopular: true,
    price: "2.900€",
    originalPrice: "4.300€",
    savings: "Ahorras 1.400€",
    period: "/mes",
    description: "El ecosistema completo: optimización multimodelo en IA continua, integraciones de marketing y CRO avanzado.",
    includesSummary: ["Infraestructura Crítica", "IA Multimodelo", "Integraciones & APIs", "CRO & Tests A/B"],
    features: [
      "Todo lo incluido en Infraestructura Crítica (Valor individual: 2.900€)",
      "Optimización y monitorización continua en modelos de IA (ChatGPT, Claude, Gemini, SearchGPT)",
      "Integraciones ligeras vía APIs y conectores existentes (formularios, CRM, herramientas de marketing) — sin desarrollo de software interno a medida",
      "Optimización continua de conversión mediante tests A/B y análisis de mapas de calor",
      "Consultoría técnica mensual de arquitectura e inteligencia artificial aplicada al negocio",
      "Informe mensual de métricas de comunidad, alcance audiovisual y retención multicanal",
      "Auditoría mensual de narrativa de marca y coherencia visual en todos los canales",
    ],
    deliverables: "Infraestructura Crítica + IA Multimodelo + Integraciones de Marketing + CRO Continuo",
  },
  {
    id: "pack-retainer-tecnologico",
    name: "Retainer Tecnológico Exclusivo (CTO as a Service)",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "Solicita tu presupuesto",
    period: "",
    description: "Departamento técnico y web con dedicación prioritaria, exclusividad sectorial y dirección técnica directa.",
    includesSummary: ["Ecosistema Corporativo", "Dedicación Prioritaria", "Exclusividad Sectorial", "CTO as a Service"],
    features: [
      "Todo lo incluido en Ecosistema Digital Corporativo (Valor individual: 4.300€)",
      "Dedicación técnica continua para tu infraestructura web, landing pages y flujos de captación",
      "Hardening y auditoría de seguridad continua + gestión de pentesting certificado a través de partner especializado",
      "Optimización y automatización de flujos de captación y herramientas de IA",
      "Auditoría mensual integral de autoridad de marca, narrativa audiovisual y resonancia",
      "Informe mensual estratégico de producción audiovisual y diferenciación corporativa",
      "Exclusividad sectorial y geográfica total: no trabajamos con tus competidores directos",
      "Soporte prioritario en horario extendido (L-V + fines de semana bajo aviso) y asesoramiento técnico directo",
    ],
    deliverables: "Departamento Técnico Integral + CTO Dedicado + Exclusividad de Sector",
  },
];

const servicesGrande: ServiceItem[] = [
  {
    name: "Arquitectura Web Corporativa & Staging",
    detail: "Diseño y mantenimiento de infraestructura cloud redundante, entornos de pruebas y despliegues sin interrupción.",
    price: "700€",
  },
  {
    name: "Auditoría de Ciberseguridad & Salud Técnica",
    detail: "Supervisión continua de vulnerabilidades, cabeceras de seguridad, certificados SSL y buenas prácticas.",
    price: "500€",
  },
  {
    name: "Dominio GEO & SEO Multisede Corporativo",
    detail: "Estrategia integral de posicionamiento en buscadores tradicionales y posicionamiento en modelos generativos de IA.",
    price: "900€",
  },
  {
    name: "Dashboard BI de Inteligencia de Negocio",
    detail: "Panel centralizado con telemetría de rendimiento, posiciones por keywords, análisis de CTR y conversión de leads.",
    price: "450€",
  },
  {
    name: "Integraciones de Marketing (APIs / CRM / Webhooks)",
    detail: "Conectores y formularios para sincronizar flujos de clientes, agendas y bases de datos.",
    price: "850€",
  },
  {
    name: "Optimización CRO & Experimentación A/B",
    detail: "Mejora continua de la tasa de conversión en la web mediante hipótesis cuantitativas y optimización de UX.",
    price: "600€",
  },
  {
    name: "Consultoría de IA & Automatizaciones de Captación",
    detail: "Sesiones estratégicas para integrar herramientas de IA en la captación y operaciones del equipo.",
    price: "650€",
  },
];

export default function PricingEnterpriseTecnologiaPage() {
  return (
    <PricingLandingTemplate
      heroHeadline="Infraestructura Crítica, SEO & Dominio GEO (IA)"
      heroDescription="Ingeniería de software dedicada, arquitectura cloud corporativa y optimización avanzada para consolidar tu liderazgo tecnológico y convertir a tu negocio en la referencia digital y de inteligencia artificial de tu sector."
      packs={packsGrande}
      servicesBreakdown={servicesGrande}
      valuePillars={techPillars}
      faqs={techFaqs}
      footerTitle="Tarifas Oficiales de Infraestructura Crítica & Dominio GEO"
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa técnica para asegurar que el resultado final sea impecable."
    />
  );
}
