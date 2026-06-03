import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { href: "/services/plumbing", label: "Plumbing" },
  { href: "/services/electrical", label: "Electrical" },
  { href: "/services/carpentry", label: "Carpentry" },
  { href: "/services/general-maintenance", label: "General Maintenance" },
  { href: "/services/tiling-building-works", label: "Tiling & Building Works" },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-5" aria-label="Aedis Solutions Ltd — Home">
              {/* White logo on dark bg — use a white-tinted div or invert */}
              <div className="bg-white inline-block rounded-lg px-3 py-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
                  alt="Aedis Solutions Ltd"
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Professional property maintenance services across London.
              Quality workmanship, guaranteed.
            </p>
            {/* Social media — links to be added when profiles are live */}
            <p className="text-white/30 text-xs">Social profiles coming soon</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-accent" />
                  <span>Phone number coming soon</span>
                </div>
              </li>
              <li>
                <a
                  href="mailto:hello@aedissolutions.co.uk"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand-accent" />
                  <span>hello@aedissolutions.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-accent" />
                <span>Serving London &amp; Surrounding Areas</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-white rounded-lg text-sm font-semibold hover:bg-brand-accent-hover transition-colors"
            >
              Request a Callback
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Aedis Solutions Ltd. All rights reserved.
            Company No. 16401111
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
