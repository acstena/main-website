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

  const isInitialMount = useRef(true);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      if (isInitialMount.current) {
        gsap.fromTo(
          ".service-card",
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all",
          }
        );
        isInitialMount.current = false;
      } else {
        gsap.fromTo(
          ".service-card",
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section id="services" ref={sectionRef} className="section-spacing">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem" }}>
          <Badge style={{ marginBottom: "1rem" }}>Full Suite Of Digital Services</Badge>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Built To Grow Your Business:{" "}
            <span className="gradient-text-cyan-violet">Every Solution You Need, Under One Roof</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            We turn your vision into working, high-quality software. Whether your business needs an AI phone receptionist to capture every call, a custom web portal to replace messy spreadsheets, a mobile app for your field team, or modern website design.
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
