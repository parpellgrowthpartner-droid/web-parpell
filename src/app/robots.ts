import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/blog/*"],
        disallow: ["/p/", "/p/*", "/api/*"],
      },
      {
        userAgent: [
          // OpenAI & SearchGPT
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          // Perplexity & Claude
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Anthropic-AI",
          // Google & Apple Generative Agents
          "Googlebot",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          // Meta & Social / Research bots
          "Meta-ExternalAgent",
          "FacebookBot",
          "cohere-ai",
          "Bytespider",
          "CCBot",
          "Amazonbot",
        ],
        allow: ["/", "/blog", "/blog/*"],
        disallow: ["/p/", "/p/*", "/api/*"],
      },
    ],
    sitemap: "https://parpell.com/sitemap.xml",
    host: "https://parpell.com",
  };
}
