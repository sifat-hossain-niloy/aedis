"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Service options (kept in sync with data/services.ts) ───────────────────
const SERVICE_OPTIONS = [
  "Plumbing",
  "Electrical",
  "Carpentry",
  "General Maintenance",
  "Tiling & Building Works",
  "Other / Not Sure",
];

// ─── Form schema ─────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Please describe your project (at least 10 characters)"),
  consent: z.literal(true, {
    message: "You must consent to be contacted",
  }),
  // honeypot — must stay empty; bots fill it, humans don't see it
  _honey: z.string().max(0, "").optional(),
});

type FormData = z.infer<typeof schema>;
type Status = "idle" | "submitting" | "success" | "error";

// ─── Shared input classes ─────────────────────────────────────────────────────
const inputBase =
  "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200";
const inputError = "border-red-300 focus:ring-red-400";

// ─── Component ───────────────────────────────────────────────────────────────
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    // Guard: honeypot filled → silent reject (bot)
    if (data._honey) return;

    setStatus("submitting");
    setErrorMsg("");

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!key) {
      // Fallback if key isn't configured yet — direct mailto
      const subject = encodeURIComponent(
        `Enquiry from ${data.name} — ${data.service}`
      );
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nService: ${data.service}\n\n${data.message}`
      );
      window.location.href = `mailto:hello@aedissolutions.co.uk?subject=${subject}&body=${body}`;
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          // Email delivered to: set in Web3Forms dashboard (hello@aedissolutions.co.uk)
          subject: `New Enquiry — ${data.service} | ${data.name}`,
          from_name: "Aedis Solutions Website",
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          service: data.service,
          message: data.message,
          // Redirects / branding
          botcheck: "",
        }),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
        reset();
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  }

  // ── Success state ──
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-green-50 rounded-2xl border border-green-200">
        <CheckCircle2 className="w-14 h-14 text-green-500 mb-5" />
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Enquiry Received!
        </h3>
        <p className="text-slate-600 leading-relaxed max-w-sm mb-6">
          Thank you for getting in touch. We will review your enquiry and
          respond to{" "}
          <span className="font-semibold">hello@aedissolutions.co.uk</span>{" "}
          — usually within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 bg-brand text-white rounded-lg font-semibold text-sm hover:bg-brand-mid transition-colors cursor-pointer"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  // ── Form ──
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot — hidden from users, traps bots */}
      <input
        {...register("_honey")}
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-0.5">Something went wrong</p>
            <p>
              {errorMsg} Please try again or email us directly at{" "}
              <a
                href="mailto:hello@aedissolutions.co.uk"
                className="font-semibold underline"
              >
                hello@aedissolutions.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your full name"
            className={cn(inputBase, errors.name && inputError)}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={cn(inputBase, errors.email && inputError)}
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Phone Number{" "}
          <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="07XXX XXX XXX"
          className={inputBase}
          autoComplete="tel"
        />
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          {...register("service")}
          defaultValue=""
          className={cn(inputBase, "cursor-pointer", errors.service && inputError)}
        >
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1.5 text-xs text-red-600">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Tell Us About Your Project <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Describe what you need — the more detail you can provide, the better we can help…"
          className={cn(inputBase, "resize-none", errors.message && inputError)}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* GDPR consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            {...register("consent")}
            type="checkbox"
            className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-accent focus:ring-brand-accent cursor-pointer"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I consent to Aedis Solutions Ltd contacting me regarding this
            enquiry. Your data will not be shared with third parties. See our{" "}
            <a href="/privacy" className="text-brand-accent hover:underline">
              Privacy Policy
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-red-600">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-accent text-white font-semibold rounded-lg hover:bg-brand-accent-hover transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-base"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Enquiry
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        We aim to respond within one business day.
      </p>
    </form>
  );
}
