import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Lock, UserCheck, ArrowRight, FileCheck2 } from "lucide-react";
import { BackgroundMesh } from "@/components/BackgroundMesh";

export const metadata: Metadata = {
  title: "Política de Privacidad | Parpell",
  description:
    "Información sobre el tratamiento y protección de datos personales conforme al RGPD y la LOPDGDD en Parpell (Brand & Growth Orchestrator).",
  alternates: {
    canonical: "https://parpell.com/privacidad",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5 text-[#C27A8A]" />
            <span>PROTECCIÓN DE DATOS PERSONALES · RGPD &amp; LOPDGDD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Política de Privacidad
          </h1>
          <p className="text-xs font-mono text-zinc-400">
            Última actualización: 1 de Septiembre, 2026 · Cumplimiento Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 (LOPDGDD)
          </p>
        </div>

        <article className="liquid-glass rounded-3xl p-6 sm:p-9 space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans shadow-2xl border border-white/[0.08]">
          {/* Summary Box Layer 1 */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#9E5C6A]/20 to-white/[0.02] border border-[#9E5C6A]/40 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F7EBED] uppercase tracking-wider">
              <Lock className="w-4 h-4 text-[#C27A8A]" />
              <span>Resumen Informativo Básico (Capa 1)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-200">
              <li><strong>Responsable:</strong> Parpell (Brand &amp; Growth Orchestrator).</li>
              <li><strong>Finalidad:</strong> Gestionar tu solicitud de llamada de 30 min, enviar el informe de auditoría digital y resolver consultas comerciales.</li>
              <li><strong>Legitimación:</strong> Tu consentimiento expreso al enviar el formulario o contactar por teléfono/WhatsApp.</li>
              <li><strong>Destinatarios:</strong> No se ceden datos a terceros bajo ninguna circunstancia ajena a la prestación del servicio.</li>
              <li><strong>Derechos:</strong> Acceso, rectificación, supresión, limitación y oposición en cualquier momento.</li>
            </ul>
          </div>

          {/* 1. Responsable del Tratamiento */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">01.</span>
              <span>Responsable del Tratamiento de tus Datos</span>
            </h2>
            <p>
              El responsable del tratamiento de los datos recabados en este sitio web es <strong>Parpell</strong>, con actividad en consultoría estratégica digital, posicionamiento en inteligencia artificial y producción audiovisual con sede operativa en España.
            </p>
            <p>
              Para cualquier consulta, ejercicio de derechos o aclaración relativa a tu privacidad, puedes dirigirte directamente a nuestro equipo a través del teléfono <strong>603 625 946</strong> o mediante el formulario de contacto del Sitio Web.
            </p>
          </section>

          {/* 2. Datos Recabados y Finalidad */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">02.</span>
              <span>Qué Datos Recabamos y para Qué Finalidad</span>
            </h2>
            <p>
              A través de los formularios de contacto y solicitud de videollamada de 30 minutos disponibles en el Sitio Web, recabamos los siguientes datos personales estrictamente necesarios:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-200">
              <li>Nombre y apellidos o nombre de tu empresa.</li>
              <li>Dirección de correo electrónico corporativo o personal.</li>
              <li>Número de teléfono de contacto o WhatsApp.</li>
              <li>Dirección de página web o perfil de Instagram para la elaboración del diagnóstico previo.</li>
            </ul>
            <p>
              <strong>Finalidades del tratamiento:</strong>
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-zinc-300">
              <li>Coordinar y confirmar contigo la sesión de videollamada de 30 minutos.</li>
              <li>Elaborar y remitirte el informe técnico de presencia en motores de IA (GEO) y comparativa de competidores.</li>
              <li>Atender dudas, presupuestos o solicitudes de información comercial relativas a nuestros servicios.</li>
            </ol>
          </section>

          {/* 3. Base Jurídica y Legitimación */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">03.</span>
              <span>Base Jurídica que Legítima el Tratamiento</span>
            </h2>
            <p>
              La base legal para el tratamiento de tus datos es tu <strong>consentimiento expreso e inequívoco</strong> manifestado mediante la marcación de la casilla de aceptación previa al envío de cualquiera de nuestros formularios, así como la aplicación de medidas precontractuales a tu solicitud.
            </p>
          </section>

          {/* 4. Conservación de los Datos */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">04.</span>
              <span>Plazo de Conservación</span>
            </h2>
            <p>
              Tus datos se conservarán durante el tiempo estrictamente necesario para dar respuesta a tu solicitud o auditoría, y mientras se mantenga la relación profesional o comercial. Si no se formaliza una contratación, tus datos serán eliminados o bloqueados conforme a los plazos legalmente exigibles.
            </p>
          </section>

          {/* 5. Destinatarios y Cesión de Datos */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">05.</span>
              <span>Destinatarios y Transferencias Internacionales</span>
            </h2>
            <p>
              <strong>Parpell no vende, alquila ni cede tus datos personales a terceras empresas bajo ningún concepto.</strong>
            </p>
            <p>
              Únicamente tendrán acceso a tus datos los proveedores de infraestructura tecnológica estrictamente necesarios para el funcionamiento del servicio (como proveedores de alojamiento web y servidores de correo), todos ellos ubicados dentro del Espacio Económico Europeo o amparados bajo marcos de adecuación y cláusulas contractuales tipo homologadas por la Comisión Europea.
            </p>
          </section>

          {/* 6. Derechos del Usuario */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">06.</span>
              <span>Tus Derechos (Acceso, Rectificación, Supresión y Oposición)</span>
            </h2>
            <p>
              En cualquier momento puedes ejercer gratuitamente los siguientes derechos garantizados por la normativa de protección de datos:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-200">
              <li><strong>Acceso:</strong> Conocer qué datos personales tuyos estamos tratando.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Supresión (Derecho al Olvido):</strong> Solicitar que eliminemos tus datos personales cuando ya no sean necesarios.</li>
              <li><strong>Limitación del Tratamiento:</strong> Solicitar que suspendamos temporalmente el tratamiento de tus datos.</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado y legible por máquina.</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos por motivos derivados de tu situación particular.</li>
            </ul>
            <p>
              Asimismo, tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> a través de su sede electrónica (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#C27A8A] underline">www.aepd.es</a>) si consideras que el tratamiento de tus datos no se ajusta a la legalidad.
            </p>
          </section>

          {/* 7. Medidas de Seguridad Técnicas */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#C27A8A] font-mono">07.</span>
              <span>Medidas de Seguridad Técnicas y Organizativas</span>
            </h2>
            <p>
              En Parpell aplicamos estrictos estándares de seguridad informática acordes al estado de la técnica: comunicaciones cifradas mediante protocolo HTTPS/SSL de 256 bits, cabeceras HSTS de blindaje, servidores perimetrales seguros y principio de minimización de datos en todas nuestras bases de código.
            </p>
          </section>
        </article>

        {/* Quick Links back */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
          <Link href="/aviso-legal" className="hover:text-white transition-colors flex items-center gap-1 text-[#C27A8A]">
            <span>→ Aviso Legal</span>
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
          <Link href="/aviso-legal" className="hover:text-zinc-300 transition-colors">Aviso Legal</Link>
          <span>·</span>
          <Link href="/privacidad" className="text-zinc-300">Privacidad</Link>
          <span>·</span>
          <Link href="/cookies" className="hover:text-zinc-300 transition-colors">Cookies</Link>
        </div>
      </footer>
    </div>
  );
}
