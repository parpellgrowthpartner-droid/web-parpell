"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Video,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Layers,
  Calendar,
  Zap,
  Star,
  FileText,
  Clock,
  ExternalLink,
  Target,
  Clapperboard,
  FolderCheck,
} from "lucide-react";
import confetti from "canvas-confetti";
import { BackgroundMesh } from "@/components/BackgroundMesh";

export interface ServiceItem {
  name: string;
  detail: string;
  price: string;
}

export interface PricingPack {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  isUltimate?: boolean;
  price: string;
  originalPrice?: string;
  savings?: string;
  period: string;
  description: string;
  includesSummary: string[];
  features: string[];
  deliverables: string;
  highlightText?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PricingTemplateProps {
  heroHeadline: string;
  heroDescription: string;
  packs: PricingPack[];
  servicesBreakdown: ServiceItem[];
  faqs?: FaqItem[];
  footerNote?: string;
}

export function PricingLandingTemplate({
  heroHeadline,
  heroDescription,
  packs,
  servicesBreakdown,
  faqs,
  footerNote = "Packs sujetos a reconfiguración según los requerimientos del proyecto. El alcance de cada propuesta es flexible, permitiéndonos priorizar áreas o escalar la operativa para asegurar que el resultado final sea impecable.",
}: PricingTemplateProps) {
  const [selectedPack, setSelectedPack] = useState<string>(
    packs.find((p) => p.isPopular)?.id || packs[0]?.id || ""
  );
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const currentPackObj = packs.find((p) => p.id === selectedPack) || packs[0];

  const handleSelectPack = (packId: string) => {
    setSelectedPack(packId);
    const formSection = document.getElementById("confirmar-plan");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.correo || !form.nombre) return;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    confetti({
      particleCount: isMobile ? 65 : 130,
      spread: isMobile ? 60 : 85,
      origin: { y: 0.7 },
      colors: ["#9E5C6A", "#C27A8A", "#F8F4F2", "#D946EF"],
    });
    setSubmitted(true);
  };

  const defaultFaqs: FaqItem[] = faqs || [
    {
      q: "¿Cómo se organiza la jornada de rodaje presencial?",
      a: "Nos desplazamos con equipo de cine, ópticas profesionales, iluminación y audio de estudio a tus instalaciones. Preparamos los guiones con antelación para que la sesión sea ágil y no interfiera en la actividad diaria de tu negocio.",
    },
    {
      q: "¿De quién es la propiedad de los vídeos y archivos?",
      a: "Todo el material audiovisual en bruto, vídeos editados finales, guiones estratégicos y piezas gráficas son propiedad 100% de tu empresa con derechos de uso ilimitados.",
    },
    {
      q: "¿Cuáles son los plazos de entrega del contenido?",
      a: "Tras el rodaje, el primer bloque de piezas editadas con colorimetría y diseño sonoro se entrega en un plazo habitual de 5 a 7 días hábiles para su revisión y programación.",
    },
    {
      q: "¿Se pueden reconfigurar los servicios de los packs?",
      a: "Por supuesto. La estructura de cada propuesta es modular: si necesitas mayor número de stories, más días de rodaje o reforzar la parte de Paid Media, adaptamos la entrega exactamente a tus prioridades.",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en el ${currentPackObj?.name} (${currentPackObj?.price}) para mi negocio. Me gustaría coordinar los detalles.`
  );

  return (
    <div className="min-h-screen bg-[#080306] text-[#F8F4F2] font-sans relative overflow-x-hidden selection:bg-[#9E5C6A]/40 pb-28">
      <BackgroundMesh />

      {/* ========================================================================= */}
      {/* NAVBAR (ONLY: Desglose, Garantías & Dudas, Contacto Directo) */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 w-full flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pb-2">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl h-12 sm:h-14 px-3.5 sm:px-8 rounded-full border bg-[#14080F]/90 border-[#9E5C6A]/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-between gap-2"
        >
          {/* Navigation Links */}
          <div className="flex items-center gap-2.5 sm:gap-6 min-w-0">
            <a
              href="#desglose"
              className="text-[11px] sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1 shrink-0"
            >
              <span className="hidden sm:inline">Desglose de Servicios</span>
              <span className="sm:hidden">Servicios</span>
            </a>
            <a
              href="#faq"
              className="text-[11px] sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1 shrink-0"
            >
              <span className="hidden sm:inline">Garantías &amp; Dudas</span>
              <span className="sm:hidden">Dudas</span>
            </a>
          </div>

          {/* Contacto Directo Action */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={`https://wa.me/34603625946?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 sm:h-9 px-3 sm:px-4 rounded-full text-[11px] sm:text-xs font-bold text-white bg-[#9E5C6A] hover:bg-[#854b57] shadow-lg shadow-[#9E5C6A]/30 flex items-center gap-1.5 transition-all shrink-0 touch-manipulation"
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Contacto Directo</span>
            <span className="sm:hidden">Contacto</span>
          </motion.a>
        </motion.nav>
      </header>

      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 pt-8 sm:pt-14 pb-8 sm:pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-[1.15] sm:leading-[1.12]">
            {heroHeadline}
          </h1>

          <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal px-1 sm:px-0">
            {heroDescription}
          </p>

          {/* 4 Clean Value Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto text-center">
            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-center space-y-1">
              <Video className="w-4 h-4 text-[#C27A8A] mb-0.5 shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">Cámara de Cine</span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 leading-tight">Rodaje in situ pro</span>
            </div>

            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-center space-y-1">
              <Clapperboard className="w-4 h-4 text-[#C27A8A] mb-0.5 shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">Preproducción</span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 leading-tight">Cine y eventos</span>
            </div>

            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-center space-y-1">
              <Zap className="w-4 h-4 text-[#C27A8A] mb-0.5 shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">Listo para Publicar</span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 leading-tight">Edición y sonido</span>
            </div>

            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-center space-y-1">
              <FolderCheck className="w-4 h-4 text-[#C27A8A] mb-0.5 shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">Material 100% Tuyo</span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 leading-tight">Brutos y másteres</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* PACKS BENTO GRID */}
      {/* ========================================================================= */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packs.map((pack) => {
            const isSelected = selectedPack === pack.id;
            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
                  pack.isUltimate
                    ? "bg-gradient-to-b from-[#180A2E] via-[#100620] to-[#090214] border-2 border-[#8B5CF6] shadow-[0_0_75px_rgba(139,92,246,0.45)] md:-translate-y-2"
                    : pack.isPopular
                    ? "bg-gradient-to-b from-[#240C1D] via-[#160612] to-[#0A0208] border-2 border-[#C27A8A] shadow-[0_0_65px_rgba(194,122,138,0.45)] md:-translate-y-2"
                    : "apple-glass border-white/[0.09] hover:border-white/[0.2]"
                }`}
              >
                {/* Ambient Glow Flares */}
                {pack.isUltimate && (
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-52 h-28 bg-[#8B5CF6]/30 rounded-full blur-2xl pointer-events-none" />
                )}
                {pack.isPopular && !pack.isUltimate && (
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#C27A8A]/25 rounded-full blur-2xl pointer-events-none" />
                )}

                {/* Ultimate Badge (Electric Bluish Purple) */}
                {pack.isUltimate && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-3.5 py-0.5 rounded-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] text-white text-[9px] sm:text-[11px] font-black tracking-wider uppercase shadow-[0_0_25px_rgba(139,92,246,0.7)] flex items-center gap-1 sm:gap-1.5 max-w-[92%] sm:max-w-none text-center truncate sm:whitespace-nowrap z-20">
                    <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-amber-300 animate-pulse shrink-0" />
                    <span className="truncate">{pack.badge || "EL MODELO DEFINITIVO · MÁXIMO ESTATUS"}</span>
                  </div>
                )}

                {/* Popular Badge (Velvet Rose) */}
                {pack.isPopular && !pack.isUltimate && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-3.5 py-0.5 rounded-full bg-gradient-to-r from-[#9E5C6A] via-[#C27A8A] to-[#D48B9B] text-white text-[9px] sm:text-[11px] font-black tracking-wider uppercase shadow-[0_0_20px_rgba(194,122,138,0.5)] flex items-center gap-1 sm:gap-1.5 max-w-[92%] sm:max-w-none text-center truncate sm:whitespace-nowrap z-20">
                    <Star className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-amber-200 fill-amber-200 shrink-0" />
                    <span className="truncate">{pack.badge || "MÁS RECOMENDADO"}</span>
                  </div>
                )}

                <div>
                  {/* Pack Name & Description */}
                  <div className="mb-4">
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-widest block mb-1 ${
                        pack.isUltimate ? "text-indigo-300" : "text-[#C27A8A]"
                      }`}
                    >
                      {pack.name}
                    </span>
                    <div className="flex items-baseline gap-2 sm:gap-2.5 my-2 flex-wrap">
                      <span className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono shrink-0">
                        {pack.price}
                      </span>
                      {pack.originalPrice && (
                        <div className="relative flex items-center shrink-0">
                          <span className="relative text-lg sm:text-2xl font-bold font-mono text-zinc-500/50 select-none">
                            {pack.originalPrice}
                            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-zinc-400/40 -rotate-[18deg] pointer-events-none rounded-full" />
                          </span>
                        </div>
                      )}
                      <span className="text-xs font-medium text-zinc-400 font-mono shrink-0">
                        {pack.period}
                      </span>
                      {pack.savings && (
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 ${
                            pack.isUltimate
                              ? "bg-indigo-500/20 border border-indigo-400/35 text-indigo-300"
                              : "bg-[#9E5C6A]/20 border border-[#9E5C6A]/35 text-[#C27A8A]"
                          }`}
                        >
                          {pack.savings}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed min-h-[36px]">
                      {pack.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/[0.08] my-4" />

                  {/* Summary Bullets */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block font-bold">
                      QUÉ INCLUYE ESTE PACK:
                    </span>
                    {pack.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            pack.isUltimate
                              ? "bg-indigo-500/20 border border-indigo-400/50"
                              : "bg-[#9E5C6A]/20 border border-[#9E5C6A]/50"
                          }`}
                        >
                          <Check
                            className={`w-2.5 h-2.5 ${
                              pack.isUltimate ? "text-[#A78BFA]" : "text-[#C27A8A]"
                            }`}
                          />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 mt-auto border-t border-white/[0.06]">
                  <button
                    onClick={() => handleSelectPack(pack.id)}
                    className={`w-full py-3 sm:py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer touch-manipulation min-h-[44px] ${
                      pack.isUltimate
                        ? "bg-gradient-to-r from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white shadow-lg shadow-indigo-900/50 hover:shadow-indigo-600/60"
                        : pack.isPopular
                        ? "bg-[#9E5C6A] hover:bg-[#854b57] text-white shadow-lg shadow-[#9E5C6A]/50"
                        : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]"
                    }`}
                  >
                    <span>{isSelected ? "Pack Seleccionado ✓" : `Elegir ${pack.name}`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Guarantee / Flexibility Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center max-w-3xl mx-auto">
          <p className="text-xs text-zinc-400 italic leading-relaxed">
            &ldquo;{footerNote}&rdquo;
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DESGLOSE DETALLADO DE SERVICIOS (Acordeón) */}
      {/* ========================================================================= */}
      <section id="desglose" className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 text-left scroll-mt-20 sm:scroll-mt-24">
        <div className="apple-glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/[0.09]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono text-[#C27A8A] font-bold uppercase tracking-wider block mb-1">
                Transparencia &amp; Flexibilidad
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-white">
                Desglose Unitario de Servicios
              </h2>
            </div>
            <button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="px-4 py-2.5 sm:py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-zinc-200 hover:text-white flex items-center justify-center gap-2 self-stretch sm:self-auto transition-all cursor-pointer touch-manipulation min-h-[40px]"
            >
              <span>{showBreakdown ? "Ocultar Desglose" : "Ver Valores Individuales"}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showBreakdown ? "rotate-180" : ""}`} />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 mt-3 mb-4 leading-relaxed">
            Los packs integrados ofrecen una optimización de costes y unificación de producción frente a la contratación individual de cada servicio suelto.
          </p>

          <AnimatePresence>
            {showBreakdown && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="divide-y divide-white/[0.06] mt-2">
                  {servicesBreakdown.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] px-2 rounded-lg transition-colors"
                    >
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-white block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-zinc-400">
                          {item.detail}
                        </span>
                      </div>
                      <span className="text-sm font-mono font-bold text-[#C27A8A] self-start sm:self-auto shrink-0">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONFIRMACIÓN Y CONTACTO DIRECTO */}
      {/* ========================================================================= */}
      <section id="confirmar-plan" className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-10 scroll-mt-20 sm:scroll-mt-24">
        <div
          className={`rounded-2xl sm:rounded-3xl p-5 sm:p-9 text-left grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 shadow-2xl transition-all duration-500 ${
            currentPackObj.isUltimate
              ? "bg-gradient-to-br from-[#16082A] via-[#110520] to-[#0C0318] border-2 border-[#8B5CF6]/50 shadow-[0_0_60px_rgba(139,92,246,0.3)]"
              : currentPackObj.isPopular
              ? "bg-gradient-to-br from-[#1A0C16] via-[#140812] to-[#0E050C] border-2 border-[#C27A8A]/50 shadow-[0_0_50px_rgba(194,122,138,0.25)]"
              : "bg-gradient-to-br from-[#141114] via-[#100E10] to-[#0B090B] border border-white/[0.12]"
          }`}
        >
          {/* Left Summary Box */}
          <div className="space-y-4 sm:space-y-5 flex flex-col justify-between">
            <div>
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mb-3 ${
                  currentPackObj.isUltimate
                    ? "bg-indigo-500/15 border border-indigo-400/30 text-indigo-300"
                    : currentPackObj.isPopular
                    ? "bg-[#9E5C6A]/15 border border-[#9E5C6A]/30 text-[#C27A8A]"
                    : "bg-white/[0.06] border border-white/[0.1] text-zinc-400"
                }`}
              >
                <span>Pack Elegido:</span>
                <span className="text-white font-black">{currentPackObj.name}</span>
              </div>

              <div className="flex items-baseline gap-2 sm:gap-2.5 mb-2 flex-wrap">
                <h3 className="text-2xl sm:text-3xl font-black text-white font-mono shrink-0">
                  {currentPackObj.price}
                </h3>
                {currentPackObj.originalPrice && (
                  <span className="relative text-lg sm:text-xl font-bold font-mono text-zinc-500/50 select-none shrink-0">
                    {currentPackObj.originalPrice}
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-zinc-400/40 -rotate-[18deg] pointer-events-none rounded-full" />
                  </span>
                )}
                <span className="text-xs font-normal text-zinc-400 font-mono shrink-0">
                  {currentPackObj.period}
                </span>
                {currentPackObj.savings && (
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                      currentPackObj.isUltimate
                        ? "bg-indigo-500/20 border border-indigo-400/35 text-indigo-300"
                        : "bg-[#9E5C6A]/20 border border-[#9E5C6A]/35 text-[#C27A8A]"
                    }`}
                  >
                    {currentPackObj.savings}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
                {currentPackObj.description}
              </p>

              <div className="space-y-2 text-xs text-zinc-300">
                {currentPackObj.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 shrink-0 ${
                        currentPackObj.isUltimate ? "text-indigo-400" : "text-[#9E5C6A]"
                      }`}
                    />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Clock className={`w-3.5 h-3.5 ${currentPackObj.isUltimate ? "text-indigo-400" : "text-[#C27A8A]"}`} />
                <span>Tiempo de respuesta: Menos de 24h</span>
              </div>
              <a
                href={`https://wa.me/34603625946?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 sm:py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-bold flex items-center justify-center gap-2 transition-all touch-manipulation min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Confirmar directamente por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div>
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto ${
                  currentPackObj.isUltimate ? "bg-indigo-100 border border-indigo-300/50 text-indigo-500" : "bg-rose-100 border border-rose-300/40 text-[#9E5C6A]"
                }`}>
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900">¡Propuesta Solicitada!</h4>
                <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed">
                  Hemos recibido tu interés en el <strong>{currentPackObj.name}</strong>. Nos pondremos en contacto contigo en breve para coordinar fecha de rodaje y detalles de entrega.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <span className="text-xs font-mono text-zinc-500 font-bold uppercase block mb-1">
                  Datos para coordinar el servicio
                </span>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1">NOMBRE DE CONTACTO</label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre y apellidos"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-base sm:text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors ${
                      currentPackObj.isUltimate ? "border-zinc-200 focus:border-indigo-400" : "border-zinc-200 focus:border-[#9E5C6A]"
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1">NOMBRE DE LA EMPRESA / NEGOCIO</label>
                  <input
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="Tu empresa o marca"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-base sm:text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors ${
                      currentPackObj.isUltimate ? "border-zinc-200 focus:border-indigo-400" : "border-zinc-200 focus:border-[#9E5C6A]"
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1">CORREO ELECTRÓNICO</label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="contacto@empresa.com"
                      value={form.correo}
                      onChange={(e) => setForm({ ...form, correo: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-base sm:text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors ${
                        currentPackObj.isUltimate ? "border-zinc-200 focus:border-indigo-400" : "border-zinc-200 focus:border-[#9E5C6A]"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1">TELÉFONO / WHATSAPP</label>
                    <input
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+34 600 000 000"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-base sm:text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors ${
                        currentPackObj.isUltimate ? "border-zinc-200 focus:border-indigo-400" : "border-zinc-200 focus:border-[#9E5C6A]"
                      }`}
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg transition-all mt-2 cursor-pointer touch-manipulation min-h-[48px] ${
                    currentPackObj.isUltimate
                      ? "bg-gradient-to-r from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] shadow-indigo-400/30"
                      : "bg-[#9E5C6A] hover:bg-[#854b57] shadow-[#9E5C6A]/30"
                  }`}
                >
                  Solicitar este Pack ({currentPackObj.price}) →
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PREGUNTAS FRECUENTES (FAQ) */}
      {/* ========================================================================= */}
      <section id="faq" className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-10 text-center scroll-mt-20 sm:scroll-mt-24">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9E5C6A] block mb-2">
          Garantías &amp; Dudas
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
          Preguntas Frecuentes
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mb-6 sm:mb-8">
          Transparencia y claridad en la metodología de trabajo.
        </p>

        <div className="space-y-3 text-left">
          {defaultFaqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="apple-glass rounded-2xl border border-white/[0.08] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer touch-manipulation min-h-[48px]"
                >
                  <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#9E5C6A] text-white border-transparent" : "text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <footer className="relative z-10 w-full max-w-4xl mx-auto px-6 py-6 mt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-zinc-500 font-mono">
        <div>
          <span>Tarifas Oficiales de Producción Audiovisual &amp; Crecimiento</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:603625946" className="hover:text-zinc-300 transition-colors">603 625 946</a>
          <span>·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
