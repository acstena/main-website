import React from "react";
import { FilterOption } from "@/types";

interface FilterTabsProps {
  filters: FilterOption[];
  activeFilter: string;
  onSelectFilter: (key: string) => void;
}

export default function FilterTabs({
  filters,
  activeFilter,
  onSelectFilter,
}: FilterTabsProps) {
  return (
    <div className="filter-tabs-row">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onSelectFilter(f.key)}
          className={`filter-pill-btn ${activeFilter === f.key ? "active" : ""}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
