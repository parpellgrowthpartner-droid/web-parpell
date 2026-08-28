"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const ARTICLE_PHRASES = [
  "¿A que es interesante? ¡En Parpell aplicamos esto todos los días!",
  "¿Qué te parece si hablas con Parpell para ponerlo en práctica en tu negocio?",
  "¡Vaya dato! La mayoría de tus competidores todavía no sabe nada de esto...",
  "Oye, si quieres que nos encarguemos nosotros de todo el código, solo tienes que avisarnos.",
  "¿Te imaginas tu marca con esta calidad de vídeo y posicionamiento en IA?",
  "Leer está genial, pero ver cómo suben las llamadas a tu empresa mola mucho más.",
  "Pssst... Los dos socios de Parpell se encargan de esto personalmente, sin intermediarios.",
  "¿Sabías que si aplicas esto antes que tu competencia, te quedas con todo el mercado local?",
  "¡No te quedes con dudas! Puedes escribirnos por WhatsApp en cualquier momento.",
  "Menuda joya de artículo. ¿Quieres que auditemos tu web gratis en 30 minutos?",
  "Esto que acabas de leer es justo lo que marca la diferencia entre vender o pasar desapercibido.",
  "¡Hola! Si necesitas una mano implementando esto, en Parpell nos encanta el barro técnico.",
  "¿Te ha gustado? Imagina tener al equipo de Parpell trabajando codo con codo contigo.",
  "La teoría está bien, pero los resultados con cámara de cine y GEO son de otro planeta.",
  "¡Hey! Recuerda que puedes congelar un 15% de descuento antes de agendar tu llamada.",
  "¿Tu web actual cumple con esto? Si quieres, le echamos un ojo juntos.",
  "Un buen contenido sin una web rápida es como un Ferrari sin motor. ¡Aquí unimos los dos!",
  "Si has llegado hasta aquí leyendo, significa que te importa la calidad de tu marca tanto como a nosotros.",
  "¡Que no te lo cuenten! Agenda una sesión de 30 min y te mostramos cómo quedaría en tu sector.",
  "Aquí aprendes, pero cuando contratas a Parpell... ¡aquí es donde se factura!",
];

interface PurpBlogMascotProps {
  mode?: "index" | "article";
}

export function PurpBlogMascot({ mode = "index" }: PurpBlogMascotProps) {
  const [mounted, setMounted] = useState(false);
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState("");

  useEffect(() => {
    setMounted(true);
    if (mode === "index") {
      setCurrentPhrase("¡Bienvenid@ al blog de Parpell , aquí aprenderás de todo!");
    } else {
      const randomIndex = Math.floor(Math.random() * ARTICLE_PHRASES.length);
      setCurrentPhrase(ARTICLE_PHRASES[randomIndex]);
    }
  }, [mode]);

  const handleMascotClick = () => {
    if (mode === "article") {
      // Pick a new random phrase different from the current one
      const remaining = ARTICLE_PHRASES.filter((p) => p !== currentPhrase);
      const nextPhrase = remaining[Math.floor(Math.random() * remaining.length)];
      setCurrentPhrase(nextPhrase);
    }
    setIsBubbleVisible(true);
  };

  if (!mounted) return null;

  return (
    <aside className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex items-end gap-2.5 sm:gap-3 select-none pointer-events-auto flex-row-reverse">
      {/* Animated Purp Mascot Button */}
      <motion.button
        type="button"
        onClick={handleMascotClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group cursor-pointer focus:outline-none shrink-0"
        title="Purp.IA · Pulsa para escuchar otro consejo"
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

      {/* Interactive Speech Bubble with Close Button */}
      <AnimatePresence>
        {isBubbleVisible && currentPhrase && (
          <motion.div
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
                <span>Purp.IA</span>
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
              {currentPhrase}
            </p>

            {/* Speech Tail pointing to Purp */}
            <div className="absolute bottom-4 -right-1.5 w-3 h-3 bg-[#160812] border-r-2 border-b-2 border-[#9E5C6A]/70 rotate-[-45deg] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
