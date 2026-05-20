import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://www.aedis.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aedis Solutions Ltd | Professional Property Maintenance London",
    template: "%s | Aedis Solutions Ltd",
  },
  description:
    "Professional property maintenance services across London. Plumbing, electrical, tiling, carpentry, alarms, CCTV and general maintenance — delivered to a consistently high standard.",
  keywords: [
    "property maintenance London",
    "property maintenance company London",
    "plumber London",
    "electrician London",
    "CCTV installation London",
    "carpentry London",
    "property maintenance services",
    "Aedis Solutions",
  ],
  authors: [{ name: "Aedis Solutions Ltd" }],
  creator: "Aedis Solutions Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Aedis Solutions Ltd",
    title: "Aedis Solutions Ltd | Professional Property Maintenance London",
    description:
      "Professional property maintenance across London. Plumbing, electrical, tiling, carpentry, alarms, CCTV and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aedis Solutions Ltd — Professional Property Maintenance London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aedis Solutions Ltd | Professional Property Maintenance London",
    description:
      "Professional property maintenance across London.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${jakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
