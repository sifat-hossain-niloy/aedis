"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "General Property Maintenance",
  "Plumbing",
  "Electrical",
  "Tiling",
  "Alarms",
  "CCTV",
  "Carpentry",
  "Other / Not Sure",
];

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide a brief description (min. 10 characters)"),
  consent: z.literal(true, { message: "You must consent to be contacted" }),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200";

const errorClasses = "border-red-300 focus:ring-red-400";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("submitting");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          service: data.service,
          message: data.message,
          to_email: "hello@aedis.ltd",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-green-50 rounded-2xl border border-green-200">
        <CheckCircle2 className="w-14 h-14 text-green-500 mb-5" />
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Message Sent!
        </h3>
        <p className="text-slate-600 leading-relaxed max-w-sm mb-6">
          Thank you for getting in touch. We will review your enquiry and
          respond promptly — usually within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 bg-brand text-white rounded-lg font-semibold text-sm hover:bg-brand-mid transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>
            Something went wrong. Please try again or email us directly at{" "}
            <a href="mailto:hello@aedis.ltd" className="font-semibold underline">
              hello@aedis.ltd
            </a>
            .
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your full name"
            className={cn(inputClasses, errors.name && errorClasses)}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={cn(inputClasses, errors.email && errorClasses)}
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
          className={inputClasses}
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
          className={cn(
            inputClasses,
            "cursor-pointer",
            errors.service && errorClasses
          )}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service...
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1.5 text-xs text-red-600">
            {errors.service.message}
          </p>
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
          placeholder="Please describe what you need — the more detail, the better we can help..."
          className={cn(
            inputClasses,
            "resize-none",
            errors.message && errorClasses
          )}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* GDPR consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("consent")}
            type="checkbox"
            className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-accent focus:ring-brand-accent cursor-pointer"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I consent to Aedis Solutions Ltd using my details to respond to
            this enquiry. Your information will not be shared with third parties.
            View our{" "}
            <a href="/privacy" className="text-brand-accent hover:underline">
              Privacy Policy
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-accent text-white font-semibold rounded-lg hover:bg-brand-accent-hover transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
