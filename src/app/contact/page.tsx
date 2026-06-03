import type { Metadata } from "next";
import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact Aedis Solutions Ltd for a free, no-obligation property maintenance quote. Serving London and surrounding areas.",
  alternates: { canonical: "https://www.aedis.ltd/contact" },
  openGraph: {
    title: "Contact Aedis Solutions Ltd — Free Quote",
    description:
      "Get a free property maintenance quote. Serving London and surrounding areas.",
    url: "https://www.aedis.ltd/contact",
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@aedissolutions.co.uk",
    href: "mailto:hello@aedissolutions.co.uk",
    description: "We respond to all enquiries promptly",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "London & Surrounding Areas",
    href: null,
    description: "Get in touch to confirm coverage for your area",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Fri, 8am – 6pm",
    href: null,
    description: "Emergency enquiries considered outside these hours",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight text-balance">
              Request a Free Quote
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
              Fill in the form below and we will get back to you promptly with a
              free, no-obligation quote. No pushy sales — just straight answers.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Contact section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection direction="left">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  How to Reach Us
                </h2>
                <div className="space-y-5">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div
                        key={detail.label}
                        className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200"
                      >
                        <div className="w-10 h-10 rounded-lg bg-brand/8 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-brand" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-0.5">
                            {detail.label}
                          </p>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="font-semibold text-slate-900 hover:text-brand-accent transition-colors text-sm block"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="font-semibold text-slate-900 text-sm">
                              {detail.value}
                            </p>
                          )}
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            {detail.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.15}>
                <div className="bg-brand rounded-xl p-6 text-white">
                  <MessageSquare className="w-8 h-8 text-brand-accent mb-4" />
                  <h3 className="font-bold text-base mb-2">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-brand-accent shrink-0">1.</span>
                      We review your enquiry and may follow up with questions
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-brand-accent shrink-0">2.</span>
                      We provide a free, no-obligation quote
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-brand-accent shrink-0">3.</span>
                      If you are happy, we agree a date and get started
                    </li>
                  </ol>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Send Us an Enquiry
                  </h2>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Address */}
      <section className="py-10 bg-white border-t border-slate-100">
        <Container>
          <AnimatedSection className="text-center">
            <p className="text-sm text-slate-500">
              Aedis Solutions Ltd · Registered in England &amp; Wales ·
              Company No. 16401111 · 3rd Floor, 86-90 Paul Street, London, EC2A 4NE
            </p>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
