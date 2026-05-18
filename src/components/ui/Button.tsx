import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-accent text-white hover:bg-brand-accent-hover shadow-md hover:shadow-lg",
  secondary:
    "bg-white text-brand hover:bg-slate-50 shadow-md hover:shadow-lg border border-white/20",
  outline:
    "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white",
  ghost: "text-brand hover:bg-brand/5",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
