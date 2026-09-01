import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Cookie, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { BackgroundMesh } from "@/components/BackgroundMesh";

export const metadata: Metadata = {
  title: "Política de Cookies | Parpell",
  description:
    "Información sobre el uso de cookies en el sitio web oficial de Parpell (Brand & Growth Orchestrator).",
  alternates: {
    canonical: "https://parpell.com/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-[#080306] text-[#F8F4F2] font-sans relative overflow-x-hidden selection:bg-[#9E5C6A]/40 pb-24">
      <BackgroundMesh />

      {/* Header */}
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
              href="/"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#C27A8A]" />
              <span>Volver a Inicio</span>
            </Link>
          </div>

          <Link
            href="/#contacto"
            className="h-8 px-4 rounded-full text-xs font-bold text-white bg-[#9E5C6A] hover:bg-[#854b57] shadow-lg shadow-[#9E5C6A]/30 flex items-center gap-1.5 transition-all"
          >
            <span>Contacto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content" className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill text-xs font-mono text-[#E598A8] mb-4 border border-[#9E5C6A]/40">
            <Cookie className="w-3.5 h-3.5 text-[#C27A8A]" />
            <span>TRANSPARENCIA Y NAVEGACIÓN LIMPIA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Política de Cookies
          </h1>
          <p className="text-xs font-mono text-zinc-400">
            Última actualización: 1 de Septiembre, 2026 · Cumplimiento Guía de Cookies AEPD y LSSI-CE
          </p>
        </div>

        <article className="liquid-glass rounded-3xl p-6 sm:p-9 space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans shadow-2xl border border-white/[0.08]">
          {/* Highlight Badge */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#1A0A16] to-white/[0.02] border border-emerald-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Navegación sin Rastreo Invasivo</span>
            </div>
            <p className="text-xs text-zinc-200 leading-relaxed">
              En Parpell creemos en la privacidad por diseño. <strong>Este sitio web NO utiliza cookies de publicidad comportamental, ni píxeles invasivos de seguimiento entre sitios, ni cede historiales de navegación a terceros.</strong>
            </p>
          </div>

          {/* 1. Qué es una Cookie */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">01.</span>
              <span>¿Qué es una Cookie?</span>
            </h2>
            <p>
              Una cookie es un pequeño archivo de texto que un sitio web descarga en tu navegador cuando lo visitas. Las cookies permiten a las páginas web funcionar de manera eficiente, recordar preferencias de interfaz (como el idioma o modo oscuro) y garantizar la seguridad técnica de la navegación.
            </p>
          </section>

          {/* 2. Qué Cookies utiliza este Sitio Web */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">02.</span>
              <span>Tipos de Cookies Utilizadas en Parpell.com</span>
            </h2>
            <p>
              Conforme a las directrices oficiales de la <strong>Agencia Española de Protección de Datos (AEPD)</strong>, nuestro sitio web únicamente hace uso de:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">1. Cookies Técnicas y Estrictamente Necesarias</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">Exentas de consentimiento</span>
                </div>
                <p className="text-xs text-zinc-300">
                  Son aquellas indispensables para permitirte navegar por el sitio web, utilizar sus funciones esenciales y mantener la integridad de seguridad del servidor. No recopilan información personal identificable.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">2. Cookies de Preferencias de Interfaz</span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.1]">Técnicas locales</span>
                </div>
                <p className="text-xs text-zinc-300">
                  Permiten recordar elementos de estado visual de la página (como el cierre de modales informativos o el estado de interacción con animaciones).
                </p>
              </div>
            </div>
          </section>

          {/* 3. Ausencia de Cookies Publicitarias de Terceros */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">03.</span>
              <span>Ausencia de Cookies Publicitarias o de Perfilado</span>
            </h2>
            <p>
              Parpell no instala cookies de redes publicitarias externas (como trackers de retargeting invasivo) en tu dispositivo. Toda la información introducida en nuestros formularios se envía directamente a nuestros canales de atención sin pasar por intermediarios de compraventa de datos.
            </p>
          </section>

          {/* 4. Cómo Gestionar o Desactivar Cookies */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">04.</span>
              <span>Cómo Gestionar o Desactivar las Cookies en tu Navegador</span>
            </h2>
            <p>
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de internet:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-200">
              <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
              <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</li>
              <li><strong>Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.</li>
              <li><strong>Microsoft Edge:</strong> Configuración &gt; Privacidad, búsqueda y servicios &gt; Cookies.</li>
            </ul>
          </section>
        </article>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
          <Link href="/aviso-legal" className="hover:text-white transition-colors flex items-center gap-1 text-[#C27A8A]">
            <span>→ Aviso Legal</span>
          </Link>
          <Link href="/privacidad" className="hover:text-white transition-colors flex items-center gap-1 text-[#C27A8A]">
            <span>→ Política de Privacidad</span>
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-4xl mx-auto px-6 py-6 mt-16 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-zinc-500 font-mono">
        <div>
          <span>© {new Date().getFullYear()} Parpell — Brand &amp; Growth Orchestrator</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-zinc-300 transition-colors">Inicio</Link>
          <span>·</span>
          <Link href="/aviso-legal" className="hover:text-zinc-300 transition-colors">Aviso Legal</Link>
          <span>·</span>
          <Link href="/privacidad" className="hover:text-zinc-300 transition-colors">Privacidad</Link>
          <span>·</span>
          <Link href="/cookies" className="text-zinc-300">Cookies</Link>
        </div>
      </footer>
    </div>
  );
}
