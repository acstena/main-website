import React from "react";
import { ProjectCaseStudy } from "@/types";

interface ProjectTabsProps {
  projects: ProjectCaseStudy[];
  activeId: string;
  onSelect: (project: ProjectCaseStudy) => void;
}

export default function ProjectTabs({
  projects,
  activeId,
  onSelect,
}: ProjectTabsProps) {
  return (
    <div className="filter-tabs-row">
      {projects.map((p) => {
        const isSelected = activeId === p.id;
        return (
          <button
            key={p.id}
            onClick={() => onSelect(p)}
            className={`filter-pill-btn ${isSelected ? "active" : ""}`}
          >
            {p.title.split(" ")[0]} ({p.category.split("&")[0].trim()})
          </button>
        );
      })}
    </div>
  );
}
