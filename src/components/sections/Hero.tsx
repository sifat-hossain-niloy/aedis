"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

// Specific coverage areas TBC — advertising London-wide for now

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-mid" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Decorative circle */}
      <div className="absolute -right-64 -top-64 w-[600px] h-[600px] rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-[400px] h-[400px] rounded-full bg-brand-mid/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-0.5 bg-brand-accent rounded-full" />
            <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
              Professional Property Maintenance
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight text-balance"
          >
            Comprehensive Property Maintenance.{" "}
            <span className="text-brand-accent">Delivered With Precision.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
          >
            Expert plumbing, electrical, carpentry, tiling and general
            maintenance across London — carried out to a consistently
            high standard, on time, every time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-accent text-white font-semibold rounded-lg text-base hover:bg-brand-accent-hover transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white font-semibold rounded-lg text-base hover:bg-white/20 transition-all duration-200 border border-white/20 backdrop-blur-sm"
            >
              View Our Services
            </Link>
          </motion.div>

          {/* Emergency badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shrink-0" />
              24-Hour Emergency Call-Outs Available
            </span>
          </motion.div>

          {/* Service areas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
              <span>Covering:</span>
            </div>
            {[
              "Central London",
              "North West London",
              "West London",
              "South West London",
              "North London",
            ].map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/15"
              >
                {area}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-6 sm:gap-12"
        >
          {/* Phone */}
          <a
            href="tel:02033766566"
            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-white/45 uppercase tracking-wider">
                Call Us
              </p>
              <p className="text-sm font-semibold">0203 376 6566</p>
            </div>
          </a>
          {/* Email */}
          <a
            href="mailto:hello@aedis.ltd"
            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-white/45 uppercase tracking-wider">
                Email Us
              </p>
              <p className="text-sm font-semibold">hello@aedis.ltd</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
