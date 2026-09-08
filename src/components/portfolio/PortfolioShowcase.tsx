"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioProjects } from "@/data/portfolioData";
import { ProjectCaseStudy } from "@/types";
import { initGSAP } from "@/lib/gsap";
import Badge from "@/components/ui/Badge";
import ProjectTabs from "./ProjectTabs";
import CaseStudyCard from "./CaseStudyCard";

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy>(
    portfolioProjects[0]
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="case-studies" ref={sectionRef} className="section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="portfolio-header" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
          <Badge style={{ marginBottom: "1rem" }}>Proven Commercial Deployments</Badge>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Engineering In Action:{" "}
            <span className="gradient-text-cyan-violet">Measurable Business ROI</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Every project we deploy is built for tangible commercial outcomes: zero missed leads, extreme velocity, high user retention, and organic search superiority.
          </p>
        </div>

        <ProjectTabs
          projects={portfolioProjects}
          activeId={activeProject.id}
          onSelect={setActiveProject}
        />

        <CaseStudyCard project={activeProject} />
      </div>
    </section>
  );
}
