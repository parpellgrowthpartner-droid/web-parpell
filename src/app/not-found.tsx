import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, BookOpen, MessageCircle } from "lucide-react";
import { BackgroundMesh } from "@/components/BackgroundMesh";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080306] text-[#F8F4F2] font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden text-center selection:bg-[#9E5C6A]/40">
      <BackgroundMesh />

      {/* Ambient Halo */}
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#9E5C6A]/25 via-[#C27A8A]/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <main className="relative z-10 max-w-lg w-full liquid-glass rounded-3xl p-8 sm:p-10 border border-[#9E5C6A]/40 shadow-2xl space-y-6">
        {/* Parpell Floating Brand Logo */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto relative flex items-center justify-center">
          <Image
            src="/logo-nuevo.png"
            alt="Parpell Logo"
            width={96}
            height={96}
            priority
            className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(158,92,106,0.6)]"
          />
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 text-xs font-mono text-[#E598A8] font-bold">
            ERROR 404 · PÁGINA NO ENCONTRADA
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            La ruta solicitada no existe
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Es posible que el enlace haya cambiado o haya sido movido. Puedes volver al inicio o consultar nuestros recursos.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto h-11 px-6 rounded-full bg-[#9E5C6A] hover:bg-[#854b57] text-white text-xs font-bold shadow-lg shadow-[#9E5C6A]/40 flex items-center justify-center gap-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Volver a Inicio</span>
          </Link>

          <Link
            href="/blog"
            className="w-full sm:w-auto h-11 px-6 rounded-full liquid-glass hover:bg-white/[0.1] text-white text-xs font-bold border border-white/20 flex items-center justify-center gap-2 transition-all"
          >
            <BookOpen className="w-4 h-4 text-[#C27A8A]" />
            <span>Ver el Blog</span>
          </Link>
        </div>
      </main>

      <footer className="relative z-10 mt-8 text-[11px] font-mono text-zinc-500">
        © {new Date().getFullYear()} Parpell · Brand &amp; Growth Orchestrator
      </footer>
    </div>
  );
}
