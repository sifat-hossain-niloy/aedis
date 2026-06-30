"use client";

import { Wrench, Droplets, Zap, LayoutGrid, Hammer, LucideIcon } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Slug → custom illustrated icon (must exist in /public/service-icons/)
const customIconMap: Record<string, string> = {
  "plumbing":              `${BASE}/service-icons/plumbing.png`,
  "electrical":            `${BASE}/service-icons/electrical.png`,
  "carpentry":             `${BASE}/service-icons/carpentry.png`,
  "tiling-building-works": `${BASE}/service-icons/building.png`,
};

const lucideIconMap: Record<string, LucideIcon> = {
  Droplets, Zap, Hammer, Wrench, LayoutGrid,
};

type Props = {
  slug: string;
  icon: string;        // lucide icon name (fallback)
  accentColor: string; // tailwind classes for fallback badge bg+text
  /** card  — large image, left-aligned, used in service cards
   *  hero  — medium badge next to page title
   *  list  — medium badge in services listing
   *  mini  — small badge in related-services row */
  variant?: "card" | "hero" | "list" | "mini";
};

const variantStyles = {
  card: { wrap: "h-20 mb-5",                   img: "h-full w-auto object-contain",   badge: "w-14 h-14 rounded-xl mb-5", lucide: "w-6 h-6" },
  hero: { wrap: "w-16 h-16 rounded-2xl shrink-0", img: "w-full h-full object-contain p-1", badge: "w-16 h-16 rounded-2xl shrink-0", lucide: "w-7 h-7" },
  list: { wrap: "w-14 h-14 rounded-xl shrink-0",  img: "w-full h-full object-contain p-1", badge: "w-14 h-14 rounded-xl shrink-0",  lucide: "w-6 h-6" },
  mini: { wrap: "w-10 h-10 rounded-lg shrink-0",  img: "w-full h-full object-contain p-1", badge: "w-10 h-10 rounded-lg shrink-0",  lucide: "w-4 h-4" },
};

export function ServiceIcon({ slug, icon, accentColor, variant = "card" }: Props) {
  const customSrc = customIconMap[slug];
  const LucideIcon = lucideIconMap[icon] ?? Wrench;
  const s = variantStyles[variant];

  if (customSrc) {
    return (
      <div className={`${s.wrap} flex items-center bg-white`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={customSrc} alt="" className={s.img} />
      </div>
    );
  }

  return (
    <div className={`${s.badge} ${accentColor} flex items-center justify-center`}>
      <LucideIcon className={s.lucide} />
    </div>
  );
}
