import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  rating: number;
  className?: string;
};

export function StarRating({ rating, className }: Props) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
          )}
        />
      ))}
    </div>
  );
}
