import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({ children, className, narrow }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-4xl" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
