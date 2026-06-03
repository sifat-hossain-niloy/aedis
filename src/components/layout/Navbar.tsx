"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-white shadow-sm border-b border-slate-100"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          {/* Logo — always the real image; white pill backdrop on dark hero */}
          <Link
            href="/"
            className={cn(
              "shrink-0 transition-all duration-300",
              transparent ? "bg-white rounded-xl px-4 py-2 shadow-lg" : ""
            )}
            aria-label="Aedis Solutions Ltd — Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
              alt="Aedis Solutions Ltd"
              className="h-14 w-auto"
            />
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
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
