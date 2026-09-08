import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SeoTransformation from "@/components/seo/SeoTransformation";

export const metadata: Metadata = {
  title: "Small Business 'Go Digital' & Search Dominance",
  description:
    "Dominate Google organic search and transform your small business operations. Uncompromising technical SEO, 99+ Core Web Vitals, Schema.org microdata, and 24/7 conversion automation.",
  alternates: {
    canonical: "https://acstena.com/seo-growth",
  },
};

export default function SeoGrowthPage() {
  return (
    <main style={{ paddingTop: "7.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem" }}>
          <Badge variant="emerald" icon={<TrendingUp size={14} />} style={{ marginBottom: "1rem" }}>
            Commercial Intent Search Dominance
          </Badge>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.6rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            How Growing Businesses{" "}
            <span className="gradient-text-emerald">
              Go Digital & Outrank Market Incumbents
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Organic search ranking is uncompromising engineering. We build lightning-fast, server-rendered Next.js web systems that eliminate render-blocking bloat, inject deep semantic microdata, and convert inbound visitors into booked clients around the clock.
          </p>
        </div>

        {/* SEO Transformation Pillars, Comparison Table & FAQ Accordion */}
        <SeoTransformation />

        {/* Audit CTA Card */}
        <div
          className="glass-card"
          style={{
            marginTop: "4.5rem",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.06) 0%, rgba(2, 132, 199, 0.06) 100%)",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <Badge variant="emerald" icon={<Sparkles size={14} />} style={{ marginBottom: "1rem" }}>
            Complimentary Architecture Review
          </Badge>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Request A Technical SEO & Conversion Audit
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            We will inspect your existing web stack, diagnose missed voice leads, and generate a customized technical roadmap to capture top commercial rankings in your market.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ background: "var(--obsidian-dark)" }}>
              <span>Request Technical Audit</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/planner" className="btn-secondary">
              <span>View Sprint Timelines</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
