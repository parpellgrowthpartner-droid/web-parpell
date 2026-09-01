import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Parpell — Brand & Growth Orchestrator",
    short_name: "Parpell",
    description:
      "Posicionamiento en IA (GEO), Rodaje con Cámara de Cine y Automatización de Ventas. Dos socios, cero intermediarios.",
    start_url: "/",
    display: "standalone",
    background_color: "#080306",
    theme_color: "#080306",
    lang: "es",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
