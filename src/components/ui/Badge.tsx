import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "emerald" | "violet";
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Badge({
  children,
  variant = "cyan",
  icon,
  className = "",
  style,
}: BadgeProps) {
  const variantClass =
    variant === "emerald"
      ? "badge-pill-emerald"
      : variant === "violet"
      ? "badge-pill-violet"
      : "badge-pill";

  return (
    <div className={`${variantClass} ${className}`} style={style}>
      {icon}
      <span>{children}</span>
    </div>
  );
}
