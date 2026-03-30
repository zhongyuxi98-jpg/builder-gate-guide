import { type ReactNode } from "react";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  variant?: "default" | "highlight";
}

export const InfoCard = ({ icon, title, children, variant = "default" }: InfoCardProps) => (
  <div
    className={`rounded-xl p-6 shadow-card transition-all hover:shadow-elevated ${
      variant === "highlight"
        ? "bg-secondary text-secondary-foreground border border-primary/20"
        : "bg-card border border-border"
    }`}
  >
    <div className="flex items-start gap-3 mb-3">
      {icon && <span className="text-primary mt-0.5">{icon}</span>}
      <h3 className="font-serif-cn text-lg font-semibold text-card-foreground">{title}</h3>
    </div>
    <div className="text-muted-foreground text-sm leading-relaxed pl-0">{children}</div>
  </div>
);
