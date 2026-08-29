"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ParpellFloatingLogoProps {
  className?: string;
}

export function ParpellFloatingLogo({ className = "" }: ParpellFloatingLogoProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none py-2 sm:py-4 ${className}`}>
      {/* Dynamic Ambient Backlight Glow (Expands & breathes in sync with levitation) */}
      <motion.div
        animate={{
          scale: [0.92, 1.15, 0.92],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 rounded-full bg-gradient-to-tr from-[#9E5C6A]/30 via-[#C27A8A]/20 to-transparent blur-3xl pointer-events-none -z-10"
      />

      {/* Floating Logo with Organic Levitation Physics */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [0, 1.2, -0.8, 0],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
          y: -18,
          transition: { duration: 0.35, ease: "easeOut" },
        }}
        className="relative z-10 w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center cursor-default filter drop-shadow-[0_16px_36px_rgba(158,92,106,0.4)]"
      >
        <Image
          src="/logo-nuevo.png"
          alt="Parpell Logo"
          width={500}
          height={500}
          priority
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 290px, 340px"
          className="w-full h-full object-contain pointer-events-none transition-transform duration-500 will-change-transform"
        />
      </motion.div>

      {/* Dynamic Floating Ground Shadow (Contracts and fades organically as the logo floats up) */}
      <motion.div
        animate={{
          scaleX: [1, 0.72, 1],
          scaleY: [1, 0.65, 1],
          opacity: [0.55, 0.22, 0.55],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-28 sm:w-40 md:w-52 h-3.5 sm:h-4 rounded-[100%] bg-gradient-to-r from-transparent via-[#9E5C6A]/60 to-transparent blur-md mt-1 pointer-events-none"
      />
    </div>
  );
}
