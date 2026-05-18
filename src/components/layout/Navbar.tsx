"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div
                className={cn(
                  "w-9 h-9 rotate-45 flex items-center justify-center transition-colors duration-300",
                  transparent ? "bg-white" : "bg-brand"
                )}
              >
                <Home
                  className={cn(
                    "-rotate-45 w-4 h-4 transition-colors duration-300",
                    transparent ? "text-brand" : "text-white"
                  )}
                />
              </div>
            </div>
            <div className="leading-none">
              <span
                className={cn(
                  "font-extrabold text-[15px] tracking-wide transition-colors duration-300 block",
                  transparent ? "text-white" : "text-brand"
                )}
              >
                AEDIS SOLUTIONS
              </span>
              <span
                className={cn(
                  "text-[10px] tracking-[0.2em] font-medium transition-colors duration-300",
                  transparent ? "text-white/70" : "text-slate-400"
                )}
              >
                LTD
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                  pathname === href
                    ? transparent
                      ? "text-white bg-white/15"
                      : "text-brand bg-brand/8"
                    : transparent
                      ? "text-white/85 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-brand hover:bg-slate-50"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                transparent
                  ? "bg-white text-brand hover:bg-white/90 shadow-md"
                  : "bg-brand-accent text-white hover:bg-brand-accent-hover shadow-md"
              )}
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                transparent
                  ? "text-white hover:bg-white/15"
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  pathname === href
                    ? "text-brand bg-brand/8 font-semibold"
                    : "text-slate-700 hover:text-brand hover:bg-slate-50"
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-brand-accent text-white rounded-lg font-semibold text-base hover:bg-brand-accent-hover transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
