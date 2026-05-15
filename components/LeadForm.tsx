"use client";

import { FormEvent, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl, contactEmail, whatsappDisplay } from "@/lib/site-data";

const supportOptions = [
  "Property checks",
  "Keyholding",
  "Cleaning",
  "Maintenance",
  "Guest-ready preparation",
  "Rental support",
  "Not sure",
];

export function LeadForm() {
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const services = selected.length ? selected.join(", ") : "[services]";
  const place = location.trim() || "[location]";
  const message = `Hello CasaMinder, I would like to book a property check. My property is in ${place}. I need help with ${services}.`;

  const whatsappUrl = useMemo(() => buildWhatsAppUrl(message), [message]);
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent("Property check enquiry")}&body=${encodeURIComponent(message)}`;

  function toggleService(option: string) {
    setSelected((current) => (current.includes(option) ? current.filter((item) => item !== option) : [...current, option]));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackEvent("contact_form_email_click", {
      location: place,
      selected_services: services,
    });
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Full name
          <input required name="name" className="rounded-xl border border-stone-200 px-4 py-3 font-normal outline-none focus:border-coastal" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Email
          <input required type="email" name="email" className="rounded-xl border border-stone-200 px-4 py-3 font-normal outline-none focus:border-coastal" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          WhatsApp number
          <input name="whatsapp" className="rounded-xl border border-stone-200 px-4 py-3 font-normal outline-none focus:border-coastal" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Property location
          <input
            required
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="rounded-xl border border-stone-200 px-4 py-3 font-normal outline-none focus:border-coastal"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Property type
          <select name="propertyType" className="rounded-xl border border-stone-200 px-4 py-3 font-normal outline-none focus:border-coastal">
            <option>Apartment</option>
            <option>Villa</option>
            <option>Townhouse</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-charcoal">What support do you need?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {supportOptions.map((option) => (
            <label key={option} className="flex items-center gap-3 rounded-xl border border-stone-200 px-4 py-3 text-sm text-muted">
              <input type="checkbox" name="support" value={option} checked={selected.includes(option)} onChange={() => toggleService(option)} className="h-4 w-4 accent-coastal" />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 grid gap-2 text-sm font-semibold text-charcoal">
        Message
        <textarea name="message" rows={5} className="rounded-xl border border-stone-200 px-4 py-3 font-normal outline-none focus:border-coastal" />
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-muted">
        <input required type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-coastal" />I agree to be contacted about my enquiry.
      </label>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-stone-800">
          Send by email
        </button>
        <a
          href={whatsappUrl}
          onClick={() =>
            trackEvent("contact_form_whatsapp_click", {
              location: place,
              selected_services: services,
            })
          }
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-charcoal/15 bg-white px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:border-coastal hover:text-coastal"
        >
          Continue on WhatsApp
        </a>
      </div>
      <p className="mt-4 text-xs leading-5 text-muted">
        Enquiries go to {contactEmail} or WhatsApp {whatsappDisplay}.
      </p>
    </form>
  );
}
