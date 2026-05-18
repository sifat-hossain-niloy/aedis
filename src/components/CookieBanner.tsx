"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-dark border-t border-white/10 shadow-2xl">
      <div className="container-custom py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/80 flex-1">
          We use cookies to improve your experience and analyse site traffic. By
          accepting, you consent to our use of analytics cookies. View our{" "}
          <a href="/privacy" className="underline text-white hover:text-brand-accent transition-colors">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={accept}
            className="px-4 py-2 bg-brand-accent text-white text-sm font-semibold rounded-lg hover:bg-brand-accent-hover transition-colors cursor-pointer"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={decline}
            aria-label="Close cookie banner"
            className="text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
