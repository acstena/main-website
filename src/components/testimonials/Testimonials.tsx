import React from "react";
import { Sparkles } from "lucide-react";
import { testimonialsList } from "@/data/testimonialsData";
import Badge from "@/components/ui/Badge";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      className="section-spacing"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(248,250,252,0) 0%, rgba(241,245,249,0.7) 50%, rgba(248,250,252,0) 100%)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 3.5rem" }}>
          <Badge icon={<Sparkles size={14} />} style={{ marginBottom: "1rem" }}>
            Verified Client Impact
          </Badge>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Trusted By Founders &{" "}
            <span className="gradient-text-cyan-violet">Operations Directors</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Real results delivered for businesses that refused to let outdated legacy software dictate their bottom line.
          </p>
        </div>

        <div className="responsive-3col-grid">
          {testimonialsList.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
