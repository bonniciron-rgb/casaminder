"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl, contactEmail, whatsappDisplay } from "@/lib/site-data";

type ContactQuickActionsProps = {
  quickMessage: string;
};

export function ContactQuickActions({ quickMessage }: ContactQuickActionsProps) {
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Property check enquiry")}&body=${encodeURIComponent(quickMessage)}`;
  const whatsappHref = buildWhatsAppUrl(quickMessage);

  return (
    <div className="space-y-3 bg-sea/60 p-6 text-sm leading-7 text-muted">
      <p>
        Email:{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="font-semibold text-charcoal hover:text-coastal"
          onClick={() => trackEvent("contact_email_click", { location: "contact_page_details" })}
        >
          {contactEmail}
        </a>
      </p>
      <p>
        WhatsApp:{" "}
        <a
          href="https://wa.me/351961747456"
          className="font-semibold text-charcoal hover:text-coastal"
          onClick={() => trackEvent("contact_whatsapp_click", { location: "contact_page_details" })}
        >
          {whatsappDisplay}
        </a>
      </p>
      <div className="flex flex-col gap-3 pt-2">
        <a
          href={emailHref}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-stone-800"
          onClick={() => trackEvent("contact_email_click", { location: "contact_page_primary_cta" })}
        >
          Email CasaMinder
        </a>
        <ButtonLink
          href={whatsappHref}
          variant="secondary"
          className="w-full bg-white"
          onClick={() => trackEvent("contact_whatsapp_click", { location: "contact_page_primary_cta" })}
        >
          Message on WhatsApp
        </ButtonLink>
      </div>
    </div>
  );
}
