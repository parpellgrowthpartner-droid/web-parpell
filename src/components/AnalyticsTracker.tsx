"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function AnalyticsTracker() {
  useEffect(() => {
    // 1. Initialize dataLayer if not existing
    window.dataLayer = window.dataLayer || [];

    // Helper to safely dispatch custom conversion / telemetry events
    const trackEvent = (eventName: string, eventData: Record<string, unknown> = {}) => {
      window.dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        url: window.location.pathname,
        ...eventData,
      });
    };

    // 2. Click tracking for conversion actions (Calls, Contact Buttons, Mascots)
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const text = target.textContent?.trim() || "";

      if (href.startsWith("tel:")) {
        trackEvent("conversion_phone_call", { phone: href.replace("tel:", "") });
      } else if (href.includes("#contacto") || href === "/#contacto") {
        trackEvent("conversion_contact_cta_click", { buttonText: text });
      } else if (href.startsWith("mailto:")) {
        trackEvent("conversion_email_click", { email: href.replace("mailto:", "") });
      }
    };

    document.addEventListener("click", handleClick, { passive: true });

    // 3. Scroll depth reading tracker (25%, 50%, 75%, 90%)
    const milestones = new Set<number>();
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = Math.round((window.scrollY / docHeight) * 100);

      [25, 50, 75, 90].forEach((threshold) => {
        if (scrollPercent >= threshold && !milestones.has(threshold)) {
          milestones.add(threshold);
          trackEvent("reading_scroll_depth", { depth: `${threshold}%` });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 4. Native Performance & Core Web Vitals telemetry
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      try {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            trackEvent("web_vital_lcp", { valueMs: Math.round(lastEntry.startTime) });
          }
        });
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

        // Cumulative Layout Shift (CLS)
        let clsScore = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
              clsScore += (entry as PerformanceEntry & { value?: number }).value || 0;
            }
          }
          trackEvent("web_vital_cls", { value: Number(clsScore.toFixed(4)) });
        });
        clsObserver.observe({ type: "layout-shift", buffered: true });
      } catch {
        // Observers not supported or blocked, continue silently
      }
    }

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
