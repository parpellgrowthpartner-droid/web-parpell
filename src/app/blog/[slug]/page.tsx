import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Home,
  BookOpen,
  User,
  Quote,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { BackgroundMesh } from "@/components/BackgroundMesh";
import { PurpBlogMascot } from "@/components/PurpBlogMascot";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | Parpell",
    };
  }

  const url = `https://parpell.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Blog Parpell`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | Parpell`,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.isoDate,
      modifiedTime: post.isoModified || post.isoDate,
      locale: "es_ES",
      siteName: "Parpell — Brand & Growth Orchestrator",
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
    other: {
      citation_title: post.title,
      citation_author: post.author.name,
      citation_publication_date: post.isoDate.split("T")[0],
      "dc.date": post.isoDate,
      "dc.creator": post.author.name,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (same category first, then newest)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.categorySlug === post.categorySlug ? -1 : 1))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://parpell.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://parpell.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://parpell.com/blog/${post.slug}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `https://parpell.com/blog/${post.slug}`,
        datePublished: post.isoDate,
        dateModified: post.isoModified || post.isoDate,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://parpell.com/blog/${post.slug}`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".article-intro-text", ".article-summary-box"],
        },
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
          description: post.author.bio,
          worksFor: {
            "@type": "Organization",
            name: "Parpell",
            url: "https://parpell.com",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Parpell",
          url: "https://parpell.com",
          logo: {
            "@type": "ImageObject",
            url: "https://parpell.com/icon.png",
          },
        },
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        about: post.tags.map((tag) => ({
          "@type": "Thing",
          name: tag,
        })),
        inLanguage: "es-ES",
      },
      ...(post.content.faqs && post.content.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.content.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="min-h-screen bg-[#080306] text-[#F8F4F2] font-sans relative overflow-x-hidden selection:bg-[#9E5C6A]/40 pb-28">
      {/* Ambient Background */}
      <BackgroundMesh />

      {/* Structured Data (Schema.org) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Floating Top Navigation */}
      <header className="sticky top-4 z-50 w-full max-w-4xl mx-auto px-4 sm:px-6">
        <nav className="liquid-glass rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 group transition-all shrink-0"
              title="Volver a la página principal de Parpell"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 relative flex items-center justify-center shrink-0">
                <Image
                  src="/logo-nuevo.png"
                  alt="Parpell Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(158,92,106,0.6)] group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-extrabold tracking-tight text-white text-xs sm:text-sm uppercase font-mono">
                PARPELL
              </span>
            </Link>

            <span className="text-zinc-600 hidden sm:inline">|</span>

            <Link
              href="/blog"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#C27A8A]" />
              <span className="hidden sm:inline">Todos los Artículos</span>
              <span className="sm:hidden">Blog</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-[11px] font-mono text-zinc-400 hover:text-white transition-colors hidden md:inline-block"
            >
              Home
            </Link>
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

      {/* Main Article Container */}
      <main id="main-content" className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[11px] font-mono text-zinc-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#C27A8A] truncate max-w-[200px] sm:max-w-none">
            {post.category}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#E598A8] mb-5 border border-[#9E5C6A]/40">
            <Tag className="w-3.5 h-3.5 text-[#C27A8A]" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans mb-8">
            {post.subtitle}
          </p>

          {/* Meta Byline */}
          <div className="liquid-glass rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 flex items-center justify-center text-[#C27A8A] shrink-0 font-bold font-mono">
                P
              </div>
              <div>
                <span className="block text-sm font-bold text-white">
                  {post.author.name}
                </span>
                <span className="block text-xs text-zinc-400 font-mono">
                  {post.author.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-8 sm:space-y-10 text-sm sm:text-base text-zinc-200 leading-relaxed font-sans">
          {/* Intro Box */}
          <div className="article-intro-text p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-[#9E5C6A]/15 to-white/[0.02] border-l-4 border-[#9E5C6A] text-zinc-100 font-medium leading-relaxed italic">
            «{post.content.intro}»
          </div>

          {/* Key Takeaways Box (Citation Engineering para IA & Lectura Rápida) */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="article-summary-box my-6 p-6 sm:p-7 rounded-2xl liquid-glass border border-[#9E5C6A]/50 bg-gradient-to-br from-[#1A0817]/90 via-[#120510]/80 to-[#1A0817]/90 shadow-[0_10px_35px_rgba(158,92,106,0.18)]">
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#9E5C6A]/30 border border-[#9E5C6A]/60 flex items-center justify-center text-[#F3B0BE]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#F8F4F2] uppercase">
                    Conclusiones Clave · Resumen Rápido
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#E598A8] bg-[#9E5C6A]/20 px-2 py-0.5 rounded-full border border-[#9E5C6A]/30">
                  Lectura en 30s
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200">
                {post.keyTakeaways.map((point, kIdx) => (
                  <li key={kIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#C27A8A] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sections */}
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-baseline gap-2">
                <span>{section.heading}</span>
              </h2>

              {section.subheading && (
                <h3 className="text-base sm:text-lg font-semibold text-[#E598A8]">
                  {section.subheading}
                </h3>
              )}

              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed text-zinc-300">
                  {paragraph}
                </p>
              ))}

              {/* Highlight Box */}
              {section.highlightBox && (
                <div className="my-6 p-5 sm:p-6 rounded-2xl liquid-glass border border-[#9E5C6A]/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E598A8] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#C27A8A]" />
                    <span>{section.highlightBox.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                    {section.highlightBox.text}
                  </p>
                </div>
              )}

              {/* Quote */}
              {section.quote && (
                <blockquote className="my-6 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative">
                  <Quote className="w-8 h-8 text-[#9E5C6A]/30 absolute top-4 right-4 pointer-events-none" />
                  <p className="text-sm sm:text-base italic text-zinc-100 font-medium mb-2">
                    &ldquo;{section.quote.text}&rdquo;
                  </p>
                  <cite className="block text-xs font-mono text-[#C27A8A] not-italic font-bold">
                    — {section.quote.author}
                  </cite>
                </blockquote>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white">Conclusión</h3>
            <p className="text-zinc-300 leading-relaxed">{post.content.conclusion}</p>
          </div>

          {/* Direct Post-Conclusion CTA Card */}
          <div className="my-8 p-6 sm:p-8 rounded-3xl liquid-glass border-2 border-[#9E5C6A]/50 relative overflow-hidden text-center sm:text-left space-y-4 shadow-[0_20px_50px_rgba(158,92,106,0.25)]">
            <div className="absolute -right-10 -top-10 w-44 h-44 bg-[#9E5C6A]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-1.5 max-w-xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E5C6A]/25 border border-[#9E5C6A]/50 text-[10px] font-mono font-bold text-[#F7EBED]">
                  <Sparkles className="w-3 h-3 text-[#C27A8A]" />
                  <span>CONTRATACIÓN DIRECTA CON LOS 2 SOCIOS</span>
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  ¿Quieres aplicar esta estrategia a tu empresa?
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Diseñamos tu posicionamiento en IA, producimos tus piezas de cine in situ y blindamos tu infraestructura web para multiplicar tus conversiones.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/#contacto"
                  className="w-full sm:w-auto h-11 px-5 rounded-full bg-[#9E5C6A] hover:bg-[#854b57] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#9E5C6A]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Contratar o Agendar</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/"
                  className="w-full sm:w-auto h-11 px-5 rounded-full liquid-glass hover:bg-white/[0.12] text-white text-xs sm:text-sm font-bold border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Home className="w-4 h-4 text-[#C27A8A]" />
                  <span>Ir al Home</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          {post.content.faqs && post.content.faqs.length > 0 && (
            <div className="pt-8 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C27A8A]" />
                <span>Preguntas Frecuentes Relacionadas</span>
              </h3>
              <div className="space-y-3">
                {post.content.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 sm:p-5 rounded-2xl liquid-glass border border-white/[0.08] space-y-2"
                  >
                    <h4 className="text-xs sm:text-sm font-bold text-[#F7EBED]">
                      {faq.q}
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio Box (E-E-A-T Authority) */}
          <div className="mt-10 p-6 sm:p-7 rounded-2xl liquid-glass border border-white/[0.1] bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9E5C6A] to-[#4A1525] p-[2px] shrink-0 shadow-lg shadow-[#9E5C6A]/30">
              <div className="w-full h-full rounded-[14px] bg-[#120510] flex items-center justify-center text-white font-mono font-black text-lg">
                P
              </div>
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm sm:text-base font-bold text-white">
                  {post.author.name}
                </span>
                <span className="text-[10px] font-mono text-[#E598A8] bg-[#9E5C6A]/20 px-2.5 py-0.5 rounded-full border border-[#9E5C6A]/40 w-fit">
                  {post.author.credentials}
                </span>
              </div>
              <span className="block text-xs font-mono text-zinc-400">
                {post.author.role}
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                {post.author.bio}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 mr-2">Temas:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles (Topical Clustering for SEO & UX) */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] font-mono text-[#9E5C6A] uppercase font-bold tracking-wider block">
                  Artículos Relacionados
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Continúa aprendiendo
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-mono text-[#C27A8A] hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Ver todos</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className="liquid-glass rounded-2xl p-5 flex flex-col justify-between group hover:border-[#C27A8A]/50 transition-all hover:scale-[1.02]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-[#E598A8] bg-[#9E5C6A]/20 px-2 py-0.5 rounded border border-[#9E5C6A]/30 truncate max-w-[140px]">
                        {rPost.category}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {rPost.readTime}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#F7EBED] transition-colors line-clamp-2 leading-snug">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>{rPost.date}</span>
                    <span className="text-[#C27A8A] group-hover:text-white flex items-center gap-0.5 font-bold">
                      Leer <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Next Articles / Conversion CTA Card */}
        <div className="mt-14 sm:mt-20 liquid-glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-56 h-56 bg-[#9E5C6A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono text-[#9E5C6A] font-bold uppercase tracking-wider block">
              Parpell Orchestration
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Listo para dar el siguiente salto?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Transformamos la presencia de tu negocio con IA, cine y sistemas de conversión directa.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contacto"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#9E5C6A] hover:bg-[#854b57] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#9E5C6A]/40 transition-all flex items-center justify-center gap-2"
              >
                <span>Reservar Conversión de 30 Minutos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-4xl mx-auto px-6 py-6 mt-16 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-zinc-500 font-mono">
        <div>
          <span>© {new Date().getFullYear()} Parpell — Brand &amp; Growth Orchestrator</span>
        </div>
        <div className="flex items-center flex-wrap gap-3 sm:gap-4">
          <Link href="/" className="hover:text-zinc-300 transition-colors">Inicio</Link>
          <span>·</span>
          <Link href="/blog" className="hover:text-zinc-300 transition-colors text-zinc-400">Blog</Link>
          <span>·</span>
          <Link href="/aviso-legal" className="hover:text-zinc-300 transition-colors">Aviso Legal</Link>
          <span>·</span>
          <Link href="/privacidad" className="hover:text-zinc-300 transition-colors">Privacidad</Link>
          <span>·</span>
          <Link href="/cookies" className="hover:text-zinc-300 transition-colors">Cookies</Link>
        </div>
      </footer>

      {/* Floating Purp.IA Mascot in Article Mode */}
      <PurpBlogMascot mode="article" />
    </div>
  );
}
