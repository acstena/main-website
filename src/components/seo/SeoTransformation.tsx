import React from "react";
import { TrendingUp } from "lucide-react";
import Badge from "@/components/ui/Badge";
import PillarsGrid from "./PillarsGrid";
import ComparisonTable from "./ComparisonTable";
import FaqAccordion from "./FaqAccordion";

export default function SeoTransformation() {
  return (
    <section id="seo-growth" className="section-spacing" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto 3.5rem" }}>
          <Badge variant="emerald" icon={<TrendingUp size={14} />} style={{ marginBottom: "1rem" }}>
            Search Dominance & Digital Transformation
          </Badge>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            How Small Businesses{" "}
            <span className="gradient-text-emerald">Go Digital & Outrank Market Competitors</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Organic search ranking is not magic—it is uncompromising engineering.
            We eliminate render-blocking bloat, structure your data with deep Schema.org microdata,
            and automate your business operations so you capture and convert traffic 24 hours a day.
          </p>
        </div>

        <PillarsGrid />
        <ComparisonTable />
        <FaqAccordion />
      </div>
    </section>
  );
}
