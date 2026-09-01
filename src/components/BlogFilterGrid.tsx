"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Tag, ChevronRight, Sparkles, Cpu, Film, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { BlogPost } from "@/data/blogPosts";

type FilterType = "all" | "tecnologia" | "audiovisual";

interface Props {
  posts: BlogPost[];
}

export function BlogFilterGrid({ posts }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredPosts = posts.filter((post) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "tecnologia") {
      return post.categorySlug === "ia-geo" || post.categorySlug === "arquitectura";
    }
    if (activeFilter === "audiovisual") {
      return post.categorySlug === "audiovisual";
    }
    return true;
  });

  const countTecnologia = posts.filter(
    (p) => p.categorySlug === "ia-geo" || p.categorySlug === "arquitectura"
  ).length;
  const countAudiovisual = posts.filter((p) => p.categorySlug === "audiovisual").length;

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      {/* 3 Main Filter Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
        {/* Todas */}
        <button
          onClick={() => setActiveFilter("all")}
          className={`w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeFilter === "all"
              ? "bg-[#9E5C6A] text-white border-[#C27A8A] font-bold shadow-[0_0_25px_rgba(158,92,106,0.5)] scale-105"
              : "liquid-glass text-zinc-300 hover:text-white hover:bg-white/[0.08] border-white/10"
          }`}
          aria-label="Ver todas las entradas de blog"
        >
          <Layers className="w-4 h-4 text-[#F8F4F2]" />
          <span>Todas</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeFilter === "all"
                ? "bg-white/20 text-white"
                : "bg-white/[0.06] text-zinc-400"
            }`}
          >
            {posts.length}
          </span>
        </button>

        {/* Tecnología & IA */}
        <button
          onClick={() => setActiveFilter("tecnologia")}
          className={`w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeFilter === "tecnologia"
              ? "bg-[#9E5C6A] text-white border-[#C27A8A] font-bold shadow-[0_0_25px_rgba(158,92,106,0.5)] scale-105"
              : "liquid-glass text-zinc-300 hover:text-white hover:bg-white/[0.08] border-white/10"
          }`}
          aria-label="Filtrar por Tecnología, GEO e Inteligencia Artificial"
        >
          <Cpu className="w-4 h-4 text-[#F8F4F2]" />
          <span>Tecnología &amp; IA</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeFilter === "tecnologia"
                ? "bg-white/20 text-white"
                : "bg-white/[0.06] text-zinc-400"
            }`}
          >
            {countTecnologia}
          </span>
        </button>

        {/* Audiovisual & Cine */}
        <button
          onClick={() => setActiveFilter("audiovisual")}
          className={`w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeFilter === "audiovisual"
              ? "bg-[#9E5C6A] text-white border-[#C27A8A] font-bold shadow-[0_0_25px_rgba(158,92,106,0.5)] scale-105"
              : "liquid-glass text-zinc-300 hover:text-white hover:bg-white/[0.08] border-white/10"
          }`}
          aria-label="Filtrar por Producción Audiovisual y Cine"
        >
          <Film className="w-4 h-4 text-[#F8F4F2]" />
          <span>Audiovisual</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeFilter === "audiovisual"
                ? "bg-white/20 text-white"
                : "bg-white/[0.06] text-zinc-400"
            }`}
          >
            {countAudiovisual}
          </span>
        </button>
      </div>

      {/* Counter bar */}
      <div className="flex items-center justify-between px-2 text-xs font-mono text-zinc-400">
        <span>
          Mostrando <strong className="text-white">{filteredPosts.length}</strong> de{" "}
          {posts.length} artículos
        </span>
        <span className="text-[11px] text-[#C27A8A]">
          {activeFilter === "all"
            ? "Catálogo completo"
            : activeFilter === "tecnologia"
            ? "Filtrado por Tecnología & IA"
            : "Filtrado por Producción Audiovisual"}
        </span>
      </div>

      {/* Grid with animation */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              key={post.slug}
              className="liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative transition-all duration-300 hover:scale-[1.02] hover:border-[#C27A8A]/50 shadow-lg"
            >
              <div>
                {/* Top Category Badge & Read Time */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 text-[10px] sm:text-[11px] font-mono font-bold text-[#E598A8] truncate max-w-[170px]">
                    <Tag className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate">{post.category}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 shrink-0">
                    <Clock className="w-3 h-3 text-zinc-500" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[#F7EBED] transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-6 line-clamp-4">
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom Byline & Action */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <span className="block text-[11px] font-bold text-zinc-200">
                    {post.author.name}
                  </span>
                  <span className="block text-[10px] font-mono text-zinc-400">
                    {post.date}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#C27A8A] group-hover:text-white transition-colors"
                >
                  <span>Leer artículo</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
