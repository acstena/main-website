"use client";

import React, { useState, useEffect, useRef } from "react";
import { servicesData } from "@/data/servicesData";
import { FilterOption } from "@/types";
import { initGSAP } from "@/lib/gsap";
import Badge from "@/components/ui/Badge";
import FilterTabs from "./FilterTabs";
import ServiceCard from "./ServiceCard";

const filters: FilterOption[] = [
  { key: "all", label: "All Capabilities" },
  { key: "ai", label: "AI Voice & Chatbots" },
  { key: "web", label: "Web CRM & MVPs" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "design", label: "Figma & Canva" },
  { key: "animation", label: "Adobe Animate" },
  { key: "seo", label: "Go Digital & SEO" },
];

export default function ServicesMatrix() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredServices =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 35,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section id="services" ref={sectionRef} className="section-spacing">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem" }}>
          <Badge style={{ marginBottom: "1rem" }}>Comprehensive Solutions Portfolio</Badge>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Engineered For Market Dominance:{" "}
            <span className="gradient-text-cyan-violet">Every Service, Zero Fluff</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            We eliminate the gap between concept and high-yield production. Whether your business requires a real-time conversational voicebot, an enterprise CRM to retire manual spreadsheets, a logistics mobile app, or pixel-perfect Figma prototypes.
          </p>
        </div>

        <FilterTabs
          filters={filters}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        <div className="services-grid">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
