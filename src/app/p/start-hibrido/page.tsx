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
  title: "Packs & Tarifas Híbridas: Producción Audiovisual & Infraestructura IA",
  description: "Tarifas integrales que combinan producción de cine in situ, posicionamiento en IA (GEO), mantenimiento web y máquina de ventas.",
  robots: {
    index: false,
    follow: false,
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

const packsPequena: PricingPack[] = [
  {
    id: "pack-hibrido-esencial",
    name: "Pack Híbrido Esencial",
    price: "950€",
    originalPrice: "1.450€",
    savings: "Ahorras 500€",
    period: "/mes",
    description: "La base sólida de contenido de cine mensual combinada con mantenimiento web, máxima velocidad y seguridad técnica.",
    includesSummary: ["Rodaje In Situ", "4 Reels Cine", "Hosting & SSL", "Mantenimiento Web"],
    features: [
      "Grabación presencial (1 jornada de rodaje con cámara de cine + ópticas pro)",
      "Guionización y preproducción estratégica (4 Reels + 2 Carruseles)",
      "Edición Avanzada (Corte dinámico + Colorimetría cine + Sound Design)",
      "Hosting gestionado de alta velocidad con certificado SSL y copias de seguridad diarias",
      "Monitorización técnica, parches de seguridad y panel analítico con visitas y CTR",
      "Material audiovisual y código 100% en propiedad de tu empresa",
    ],
    deliverables: "4 Reels de cine + 2 Carruseles + Web blindada y optimizada + Panel analítico mensual",
  },
  {
    id: "pack-hibrido-growth-geo",
    name: "Pack Híbrido Growth & GEO",
    badge: "MÁS POPULAR",
    isPopular: true,
    price: "1.290€",
    originalPrice: "1.950€",
    savings: "Ahorras 660€",
    period: "/mes",
    description: "Contenido audiovisual continuo, dinamización en Stories y posicionamiento técnico para ser recomendado en ChatGPT y Google.",
    includesSummary: ["Pack Esencial", "10 Stories", "Motor GEO (IA)", "Google Maps & SEO"],
    features: [
      "Todo lo incluido en el Pack Híbrido Esencial (Valor individual: 1.450€)",
      "Gestión de Stories interactivas (10 stories al mes) y diseño de portadas de alto CTR",
      "Posicionamiento en IA (GEO): optimización para que ChatGPT, Claude y Perplexity recomienden tu negocio",
      "Optimización de Google Business Profile, SEO local y Schema Markup estructurado",
      "Auditoría mensual unificada: evolución en redes sociales, rankings por keywords y tasa de clics (CTR)",
    ],
    deliverables: "Pack Esencial + 10 Stories + Portadas + Motor GEO en IA + Optimización Maps",
  },
  {
    id: "pack-hibrido-authority-dominio",
    name: "Pack Híbrido Authority & Dominio",
    badge: "EL MODELO DEFINITIVO · MÁXIMO ESTATUS",
    isUltimate: true,
    price: "1.690€",
    originalPrice: "2.500€",
    savings: "Ahorras 810€",
    period: "/mes",
    description: "El ecosistema integral de autoridad: cine, distribución publicitaria pagada, motor de IA y soporte técnico prioritario.",
    includesSummary: ["Growth & GEO", "Paid Media (Ads)", "CRO & Velocidad", "Soporte Directo 2 Socios"],
    features: [
      "Todo lo incluido en el Pack Híbrido Growth & GEO (Valor individual: 1.950€)",
      "Paid Media (Gestión y optimización continua de campañas en Meta/Instagram Ads)",
      "Community Management (Interacción activa y atención a consultas de prospectos)",
      "Optimización continua de velocidad web (Core Web Vitals) y conversión (CRO)",
      "2 horas mensuales de soporte técnico y desarrollos evolutivos prioritarios",
      "Canal prioritario directo de comunicación con los 2 socios de Parpell (cero intermediarios)",
    ],
    deliverables: "Ecosistema completo: Cine + Paid Media + CM + Motor GEO/IA + CRO + Soporte VIP",
  },
];

const servicesPequena: ServiceItem[] = [
  {
    name: "Producción Audiovisual In Situ (1 Jornada)",
    detail: "Rodaje presencial con cámara de cine, iluminación de estudio y microfonía inalámbrica.",
    price: "400€",
  },
  {
    name: "Guionización & Preproducción Estratégica",
    detail: "Escaletas y guiones orientados a conversión para 4 Reels y 2 Carruseles.",
    price: "200€",
  },
  {
    name: "Edición Cinematográfica & Sound Design",
    detail: "Montaje de autor, color grading profesional y diseño sonoro inmersivo.",
    price: "450€",
  },
  {
    name: "Hosting Gestionado, SSL & Backups Diarios",
    detail: "Infraestructura de alta velocidad con copias de seguridad redundantes y monitorización.",
    price: "120€",
  },
  {
    name: "Posicionamiento en IA (GEO) & SEO Local",
    detail: "Estructuración técnica para ser recomendado en ChatGPT, Claude, Perplexity y Google Maps.",
    price: "350€",
  },
  {
    name: "Gestión de Paid Media (Meta Ads)",
    detail: "Configuración, optimización y segmentación de campañas de anuncios hacia clientes potenciales.",
    price: "350€",
  },
  {
    name: "Bolsa Técnica & Asesoría Estratégica",
    detail: "Horas de soporte técnico en web o consultoría comercial directa con los socios.",
    price: "60€/h",
  },
];

export default function PricingStartHibridoPage() {
  return (
    <PricingLandingTemplate
      heroHeadline="Ecosistema Híbrido: Audiovisual, IA & Máquina de Ventas"
      heroDescription="Unimos dirección cinematográfica de autor con ingeniería de software y posicionamiento en Inteligencia Artificial. Los 2 socios ejecutando directamente en tu negocio para que el contenido atraiga y la tecnología convierta."
      packs={packsPequena}
      servicesBreakdown={servicesPequena}
      valuePillars={hybridPillars}
      faqs={hybridFaqs}
      footerTitle="Tarifas Oficiales de Ecosistema Híbrido (Audiovisual & Tecnología)"
      footerNote="Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa técnica y audiovisual para asegurar que el resultado final sea impecable."
    />
  );
}
