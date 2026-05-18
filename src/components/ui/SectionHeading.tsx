import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  className,
  children,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-widest mb-3",
            light ? "text-brand-accent-hover/80" : "text-brand-accent"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight text-balance",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/70" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
