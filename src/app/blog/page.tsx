import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles, Tag, Layers, ChevronRight, Home } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { BackgroundMesh } from "@/components/BackgroundMesh";
import { PurpBlogMascot } from "@/components/PurpBlogMascot";

export const metadata: Metadata = {
  title: "Blog & Recursos de Estrategia Digital | Parpell",
  description:
    "Artículos técnicos y estratégicos sobre Posicionamiento en Inteligencia Artificial (GEO), Producción Audiovisual de Cine, Core Web Vitals y Conversión Web.",
  alternates: {
    canonical: "https://parpell.com/blog",
  },
  openGraph: {
    title: "Blog & Recursos de Estrategia Digital | Parpell",
    description:
      "Guías y análisis sobre GEO (IA), producción audiovisual con cámara de cine y arquitectura web de alta conversión.",
    url: "https://parpell.com/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Parpell — Brand & Growth Orchestrator",
    description:
      "Publicaciones sobre GEO (Generative Engine Optimization), producción audiovisual de cine, Core Web Vitals y sistemas de ventas.",
    url: "https://parpell.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Parpell",
      url: "https://parpell.com",
      logo: "https://parpell.com/icon.png",
    },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://parpell.com/blog/${post.slug}`,
      datePublished: "2026-08-28",
      dateModified: "2026-08-28",
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#080306] text-[#F8F4F2] font-sans relative overflow-x-hidden selection:bg-[#9E5C6A]/40 pb-28">
      {/* Background Ambience */}
      <BackgroundMesh />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header / Navbar */}
      <header className="sticky top-4 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6">
        <nav className="liquid-glass rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl">
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-colors"
            title="Volver a la página principal de Parpell"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 relative flex items-center justify-center shrink-0">
              <Image
                src="/logo-parpell-perfect.png"
                alt="Parpell 3D Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(158,92,106,0.6)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-xs sm:text-sm uppercase font-mono leading-none">
                PARPELL
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#9E5C6A] hidden sm:block">
                Brand &amp; Growth
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-3 py-1 rounded-full liquid-glass-pill text-[11px] font-mono text-[#F7EBED] border border-[#9E5C6A]/30">
              RECURSOS &amp; ARTÍCULOS
            </span>
            <Link
              href="/#contacto"
              className="h-8 px-4 rounded-full text-xs font-bold text-white bg-[#9E5C6A] hover:bg-[#854b57] shadow-lg shadow-[#9E5C6A]/30 flex items-center gap-1.5 transition-all"
            >
              <span>Contacto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
            <BookOpen className="w-3.5 h-3.5 text-[#C27A8A]" />
            <span>BLOG &amp; ESTRATEGIA TÉCNICA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Conocimiento real para dominar tu mercado.
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Guías prácticas, análisis de algoritmos de Inteligencia Artificial (GEO), producción audiovisual cinematográfica y arquitectura web de alto rendimiento escritas directamente por los 2 socios.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {BLOG_POSTS.map((post, idx) => (
            <article
              key={post.slug}
              className="liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative transition-all duration-300 hover:scale-[1.02] hover:border-[#C27A8A]/50"
            >
              <div>
                {/* Top Category Badge & Read Time */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 text-[10px] sm:text-[11px] font-mono font-bold text-[#E598A8]">
                    <Tag className="w-2.5 h-2.5" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
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
            </article>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 sm:mt-24 liquid-glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-56 h-56 bg-[#9E5C6A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-[#9E5C6A] font-bold uppercase tracking-wider block">
              Ecosistema Parpell
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Quieres que apliquemos esta estrategia a tu negocio?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Hablemos directamente sobre tu presencia en IA, contenido de cine y máquina de ventas. Dos socios, cero intermediarios.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contacto"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#9E5C6A] hover:bg-[#854b57] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#9E5C6A]/40 transition-all flex items-center justify-center gap-2"
              >
                <span>Solicitar Conversión de 30 Minutos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 mt-16 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-zinc-500 font-mono">
        <div>
          <span>© {new Date().getFullYear()} Parpell — Brand &amp; Growth Orchestrator</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-zinc-300 transition-colors">Inicio</Link>
          <span>·</span>
          <Link href="/blog" className="hover:text-zinc-300 transition-colors text-zinc-400">Blog</Link>
          <span>·</span>
          <a href="tel:603625946" className="hover:text-zinc-300 transition-colors">603 625 946</a>
        </div>
      </footer>

      {/* Floating Purp.IA Mascot */}
      <PurpBlogMascot mode="index" />
    </div>
  );
}
