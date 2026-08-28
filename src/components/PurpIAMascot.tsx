"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

interface SectionDialogue {
  id: string;
  tag: string;
  message: string;
}

const sectionDialogues: Record<string, SectionDialogue> = {
  inicio: {
    id: "inicio",
    tag: "Bienvenido",
    message: "Hola, soy Purp.IA. Te acompaño a descubrir cómo multiplicamos tus clientes con inteligencia artificial.",
  },
  problema: {
    id: "problema",
    tag: "El Cambio",
    message: "vaya que si no sales el primero, mucha gente ni te va a conocer....",
  },
  areas: {
    id: "areas",
    tag: "El Ecosistema",
    message: "Tres motores interconectados: posicionamiento GEO, producción audiovisual de cine y automatizaciones a medida.",
  },
  comparativa: {
    id: "comparativa",
    tag: "Transparencia",
    message: "Compara con criterio , aquí no hay plantillas ni soluciones genéricas",
  },
  stack: {
    id: "stack",
    tag: "Mi Terreno",
    message: "eeeh! ese soy yo!",
  },
  equipo: {
    id: "equipo",
    tag: "Los Fundadores",
    message: "Conoce a los que me han dado vida!! Saben un montón del sector",
  },
  sectores: {
    id: "sectores",
    tag: "Casos Reales",
    message: "Clinicas , restaurantes , despachos y comercios... y el siguiente eres tú!",
  },
  contacto: {
    id: "contacto",
    tag: "Siguiente Paso",
    message: "¿Hablamos 30 minutos? Te entregamos el diagnóstico de visibilidad de tu empresa sin coste alguno.",
  },
};

const sectionOrder = [
  "inicio",
  "problema",
  "areas",
  "comparativa",
  "stack",
  "equipo",
  "sectores",
  "contacto",
];

interface PurpIAMascotProps {
  isSecretChamberOpen?: boolean;
}

export function PurpIAMascot({ isSecretChamberOpen = false }: PurpIAMascotProps) {
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [isBubbleVisible, setIsBubbleVisible] = useState<boolean>(true);
  const [customQuoteIdx, setCustomQuoteIdx] = useState<number | null>(null);

  const funQuotes = [
    "Más del sesenta por ciento de las decisiones locales ya se toman mediante consultas en ChatGPT y Gemini.",
    "Si quieres agendar una sesión, puedes pulsar en cualquier momento el botón de Contacto directo.",
    "Nuestros rodajes se realizan con cámaras de cine profesional y corrección de color en DaVinci Resolve.",
    "Purp.IA optimiza tu presencia digital para que los motores generativos recomienden tu marca en primer lugar.",
  ];

  // Auto show bubble and reset quotes when secret chamber opens
  useEffect(() => {
    if (isSecretChamberOpen) {
      setIsBubbleVisible(true);
      setCustomQuoteIdx(null);
    }
  }, [isSecretChamberOpen]);

  // IntersectionObserver to update active section dialogue (zero reflows, silky smooth scroll)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const secId = entry.target.id;
            setActiveSection(secId);
            setCustomQuoteIdx(null);
            setIsBubbleVisible(true);
          }
        });
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 }
    );

    sectionOrder.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentDialogue = isSecretChamberOpen
    ? {
        tag: "Top Secret",
        message: "oye! que se supone que esto era secreto",
      }
    : customQuoteIdx !== null
    ? {
        tag: "Tip de Purp.IA",
        message: funQuotes[customQuoteIdx],
      }
    : sectionDialogues[activeSection] || sectionDialogues.inicio;

  const handleMascotClick = () => {
    setIsBubbleVisible(true);
    setCustomQuoteIdx((prev) =>
      prev === null ? 0 : (prev + 1) % funQuotes.length
    );
  };

  return (
    <aside
      className={`fixed bottom-4 sm:bottom-6 right-3 sm:right-6 flex items-end gap-2.5 sm:gap-3 select-none pointer-events-auto flex-row-reverse transition-all ${
        isSecretChamberOpen ? "z-[100002]" : "z-[9999]"
      }`}
    >
      {/* Animated Purp Mascot Button */}
      <motion.button
        type="button"
        onClick={handleMascotClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group cursor-pointer focus:outline-none shrink-0"
      >
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full liquid-glass border border-[#9E5C6A]/50 p-2 shadow-[0_10px_30px_rgba(158,92,106,0.35)] flex items-center justify-center overflow-hidden">
          <Image
            src="/bloub-default-cycle.gif"
            alt="Purp.IA Mascot"
            width={64}
            height={64}
            unoptimized
            className="w-full h-full object-contain pointer-events-none drop-shadow-[0_2px_8px_rgba(158,92,106,0.5)]"
          />
        </div>

        {/* Status Indicator Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#080306] shadow-sm animate-pulse" />
      </motion.button>

      {/* Dynamic Floating Speech Bubble (100% Solid & Opaque) */}
      <AnimatePresence mode="wait">
        {isBubbleVisible && (
          <motion.div
            key={customQuoteIdx !== null ? `quote-${customQuoteIdx}` : activeSection}
            initial={{ opacity: 0, scale: 0.88, y: 15, x: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="relative max-w-[260px] sm:max-w-[320px] p-3.5 sm:p-4 rounded-2xl bg-[#160812] border-2 border-[#9E5C6A]/70 shadow-[0_25px_60px_rgba(0,0,0,0.98),0_0_30px_rgba(158,92,106,0.35)] text-left"
          >
            {/* Header: Tag + Close (X) */}
            <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-white/[0.1]">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#E598A8] uppercase tracking-wider">
                <Sparkles className="w-2.5 h-2.5 text-[#C27A8A]" />
                <span>{currentDialogue.tag}</span>
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBubbleVisible(false);
                }}
                className="w-5 h-5 rounded-full bg-white/[0.08] hover:bg-white/[0.2] text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Cerrar mensaje"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Message Body */}
            <p className="text-xs sm:text-[13px] text-white font-sans leading-snug font-medium">
              {currentDialogue.message}
            </p>

            {/* Speech Tail pointing to Purp */}
            <div className="absolute bottom-4 -right-1.5 w-3 h-3 bg-[#160812] border-r-2 border-b-2 border-[#9E5C6A]/70 rotate-[-45deg] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
