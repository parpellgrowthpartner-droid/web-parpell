import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://parpell.com";

  // Individual blog posts with exact post dates
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.isoModified || post.isoDate),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "daily",
      priority: 0.95,
    },
    ...blogEntries,
  ];
}
