import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SeoTransformation from "@/components/seo/SeoTransformation";

export const metadata: Metadata = {
  title: "Small Business 'Go Digital' & Google Search Growth",
  description:
    "Dominate local Google search and modernize your business operations. Fast-loading websites, Google Maps optimization, and 24/7 automated call capture.",
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
            Google Search Growth
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
              Go Digital & Outrank Competitors
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Getting found on Google brings steady customers. We build lightning-fast modern websites that load instantly on mobile phones, highlight your reviews and services, and convert website searchers into booked clients around the clock.
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
            Free Growth Review
          </Badge>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Request A Free Website & Google Ranking Review
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
            We will inspect your current website speed, check where you rank on Google compared to local competitors, and give you a free action plan to get more client calls.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ background: "var(--obsidian-dark)" }}>
              <span>Request Free Review</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/planner" className="btn-secondary">
              <span>View Estimated Timelines</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
