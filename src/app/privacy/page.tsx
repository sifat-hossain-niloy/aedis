import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Aedis Solutions Ltd — how we collect, use and protect your personal information.",
  alternates: { canonical: "https://www.aedis.ltd/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <Container narrow>
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700">
            <p className="text-slate-500 text-xs">Last updated: May 2026</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">1. Who We Are</h2>
            <p>
              Aedis Solutions Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a property maintenance company registered in England and Wales (Company No. 16401111) at 3rd Floor, 86-90 Paul Street, London, EC2A 4NE. We operate the website{" "}
              <a href="https://www.aedis.ltd" className="text-brand-accent hover:underline">www.aedis.ltd</a>.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, email address, and phone number (via contact form)</li>
              <li>Details of your property maintenance enquiry</li>
              <li>Analytics data (page views, traffic sources) — only with your consent</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your enquiries and provide quotes</li>
              <li>Communicate with you about your project</li>
              <li>Improve our website and services (analytics, with consent)</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">4. Cookies</h2>
            <p>
              We use Google Analytics to understand how visitors use our website. This is only activated with your explicit consent via the cookie banner. You can withdraw consent at any time by clearing your browser&apos;s local storage or cookies.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">5. Data Sharing</h2>
            <p>
              We do not sell, rent, or share your personal data with third parties for marketing purposes. We may share data with service providers (such as EmailJS for form processing) solely to operate our website.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">6. Your Rights</h2>
            <p>
              Under UK GDPR, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at{" "}
              <a href="mailto:hello@aedissolutions.co.uk" className="text-brand-accent hover:underline">hello@aedissolutions.co.uk</a>.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">7. Contact</h2>
            <p>
              For privacy-related queries, contact us at{" "}
              <a href="mailto:hello@aedissolutions.co.uk" className="text-brand-accent hover:underline">hello@aedissolutions.co.uk</a>{" "}
              or write to us at our registered address.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
