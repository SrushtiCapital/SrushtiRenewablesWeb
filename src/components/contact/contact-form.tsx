"use client";

import { motion } from "framer-motion";
import { CONTACT_EMAIL } from "./contact-data";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-lg border border-outline-variant/30 bg-white px-3.5 py-2.5 text-sm text-on-surface outline-none transition-colors placeholder:text-outline/80 focus:border-surface-tint/50 focus:ring-2 focus:ring-surface-tint/15";

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const org = String(data.get("organisation") ?? "");
    const role = String(data.get("role") ?? "");
    const email = String(data.get("email") ?? "");
    const type = String(data.get("enquiryType") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `[${type}] ${org || name}`.trim();
    const body = [
      `Name: ${name}`,
      `Organisation: ${org}`,
      `Role: ${role}`,
      `Email: ${email}`,
      `Enquiry type: ${type}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.06 }}
      className="min-w-0 rounded-2xl border border-outline-variant/20 bg-white p-6 shadow-[0_8px_40px_rgba(6,78,59,0.05)] sm:p-8"
    >
      <h2 className="font-headline-sm text-2xl font-semibold text-primary sm:text-[1.75rem]">
        Send an enquiry
      </h2>
      <p className="mt-2 text-sm text-on-surface-variant">
        Substantive enquiries only — we respond within two UK business days.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Doe"
              className={inputClass}
            />
          </Field>
          <Field label="Organisation" htmlFor="organisation">
            <input
              id="organisation"
              name="organisation"
              type="text"
              placeholder="Company / fund / sponsor"
              className={inputClass}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Role" htmlFor="role">
            <select id="role" name="role" required className={cn(inputClass, "appearance-none")}>
              <option value="Sponsor / Promoter">Sponsor / Promoter</option>
              <option value="Institutional lender">Institutional lender</option>
              <option value="DFI / ECA">DFI / ECA</option>
              <option value="Advisor / Intermediary">Advisor / Intermediary</option>
              <option value="Other">Other</option>
            </select>
          </Field>
          <Field label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@firm.com"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Enquiry type" htmlFor="enquiryType">
          <select
            id="enquiryType"
            name="enquiryType"
            required
            className={cn(inputClass, "appearance-none")}
          >
            <option value="FDI structuring">FDI structuring</option>
            <option value="ECB / offshore debt">ECB / offshore debt</option>
            <option value="HoldCo structuring">HoldCo structuring</option>
            <option value="Capital modelling">Capital modelling</option>
            <option value="Green bond framework">Green bond framework</option>
            <option value="Institutional engagement">Institutional engagement</option>
            <option value="General enquiry">General enquiry</option>
          </select>
        </Field>

        <Field label="Tell us about the transaction" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Sector, scale, geography, timing, and where you are in the process."
            className={cn(inputClass, "min-h-[120px] resize-y")}
          />
        </Field>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-brand bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-shadow hover:shadow-md"
        >
          Send enquiry →
        </button>
      </form>
    </motion.div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="font-mono text-[10px] tracking-[0.14em] text-outline uppercase">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
