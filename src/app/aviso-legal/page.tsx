import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Scale, FileText, ArrowRight } from "lucide-react";
import { BackgroundMesh } from "@/components/BackgroundMesh";

export const metadata: Metadata = {
  title: "Aviso Legal | Parpell",
  description:
    "Información legal, condiciones de uso y propiedad intelectual del sitio web oficial de Parpell (Brand & Growth Orchestrator).",
  alternates: {
    canonical: "https://parpell.com/aviso-legal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalNoticePage() {
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
            <Scale className="w-3.5 h-3.5 text-[#C27A8A]" />
            <span>MARCO LEGAL Y CONDICIONES DE USO</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Aviso Legal
          </h1>
          <p className="text-xs font-mono text-zinc-400">
            Última actualización: 1 de Septiembre, 2026 · Cumplimiento Ley 34/2002 (LSSI-CE)
          </p>
        </div>

        <article className="liquid-glass rounded-3xl p-6 sm:p-9 space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans shadow-2xl border border-white/[0.08]">
          {/* 1. Datos Identificativos */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">01.</span>
              <span>Datos Identificativos del Responsable</span>
            </h2>
            <p>
              En cumplimiento del artículo 10 de la <strong>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</strong>, se ponen a disposición de los usuarios los datos identificativos del titular de este sitio web:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5 text-xs font-mono text-zinc-200">
              <p><strong className="text-[#F8F4F2]">Denominación Comercial:</strong> Parpell — Brand &amp; Growth Orchestrator</p>
              <p><strong className="text-[#F8F4F2]">Actividad:</strong> Consultoría de Posicionamiento en IA (GEO), Producción Audiovisual Cinematográfica, Arquitectura Web y Sistemas de Conversión</p>
              <p><strong className="text-[#F8F4F2]">Ámbito Territorial:</strong> España</p>
              <p><strong className="text-[#F8F4F2]">Sitio Web Oficial:</strong> https://parpell.com</p>
              <p><strong className="text-[#F8F4F2]">Contacto Directo:</strong> 603 625 946</p>
            </div>
          </section>

          {/* 2. Objeto y Ámbito de Aplicación */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">02.</span>
              <span>Objeto y Ámbito de Aplicación</span>
            </h2>
            <p>
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong>parpell.com</strong> (en adelante, «el Sitio Web»), así como las responsabilidades derivadas de la utilización de sus contenidos (textos, gráficos, códigos fuente, marcas, vídeos, infografías y diseños).
            </p>
            <p>
              El acceso o la mera utilización del Sitio Web por parte del usuario implica la adhesión plena y sin reservas a todas las condiciones que Parpell tenga publicadas en el momento en que acceda al mismo.
            </p>
          </section>

          {/* 3. Propiedad Intelectual e Industrial */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">03.</span>
              <span>Propiedad Intelectual e Industrial</span>
            </h2>
            <p>
              Todos los contenidos que integran este Sitio Web, incluyendo sin limitación su código fuente, arquitectura técnica, algoritmos de interfaz, logotipos, marcas comerciales, nombres de servicio, producción audiovisual, fotografías, artículos de divulgación técnica e ilustraciones (incluyendo el diseño del personaje y elementos gráficos), son propiedad exclusiva de Parpell o de terceros que han autorizado expresamente su inclusión.
            </p>
            <p>
              Queda expresamente prohibida la reproducción total o parcial, distribución, comunicación pública, transformación o descompilación de cualquier elemento de este sitio web con fines comerciales o de copia competitiva sin la previa autorización expresa y por escrito de Parpell.
            </p>
          </section>

          {/* 4. Condiciones de Uso y Responsabilidad */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">04.</span>
              <span>Condiciones de Uso y Responsabilidad</span>
            </h2>
            <p>
              El usuario se compromete a hacer un uso lícito, diligente y honesto del Sitio Web y de los servicios ofrecidos, absteniéndose de realizar actos que puedan dañar, inutilizar, sobrecargar o deteriorar el servidor o los sistemas informáticos de Parpell o de terceros.
            </p>
            <p>
              Parpell no se hace responsable de los daños y perjuicios que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos o desconexiones en el funcionamiento operativo de este sistema electrónico motivadas por causas ajenas a su control.
            </p>
          </section>

          {/* 5. Enlaces a Terceros */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">05.</span>
              <span>Enlaces a Terceros (Links)</span>
            </h2>
            <p>
              En el Sitio Web pueden incluirse enlaces a sitios web de terceros (como plataformas de redes sociales, herramientas de diagnóstico o medios de comunicación). Parpell no ejerce control sobre dichos sitios ni asume responsabilidad alguna respecto a sus contenidos, políticas de privacidad o prácticas operativas.
            </p>
          </section>

          {/* 6. Legislación Aplicable y Jurisdicción */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">06.</span>
              <span>Legislación Aplicable y Jurisdicción</span>
            </h2>
            <p>
              Las relaciones establecidas entre Parpell y el usuario se regirán por la normativa española vigente. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web, las partes se someten a los Juzgados y Tribunales competentes con arreglo a la legislación aplicable.
            </p>
          </section>
        </article>

        {/* Quick Links back to other legal texts */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
          <Link href="/privacidad" className="hover:text-white transition-colors flex items-center gap-1 text-[#C27A8A]">
            <span>→ Política de Privacidad</span>
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors flex items-center gap-1 text-[#C27A8A]">
            <span>→ Política de Cookies</span>
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
          <Link href="/aviso-legal" className="text-zinc-300">Aviso Legal</Link>
          <span>·</span>
          <Link href="/privacidad" className="hover:text-zinc-300 transition-colors">Privacidad</Link>
          <span>·</span>
          <Link href="/cookies" className="hover:text-zinc-300 transition-colors">Cookies</Link>
        </div>
      </footer>
    </div>
  );
}
