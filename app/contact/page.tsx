import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";
import { buildWhatsAppUrl, contactEmail, whatsappDisplay } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book a Property Check",
  description:
    "Contact CasaMinder to book a property check, ask about keyholding, or arrange owner support in Lisbon, Setubal and nearby areas.",
};

export default function ContactPage() {
  const quickMessage = "Hello CasaMinder, I would like to book a property check for my property in Portugal.";

  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Book a property check."
              description="Tell us where your property is and what support you need. You can send the enquiry by email or continue on WhatsApp."
            />
            <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-card">
              <div className="relative aspect-[3/2] bg-sand">
                <Image
                  src="/images/book-property-check.png"
                  alt="Desk scene in a Portuguese home with keys, notebook and coffee ready for a property check booking"
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 bg-sea/60 p-6 text-sm leading-7 text-muted">
                <p>
                  Email:{" "}
                  <a href={`mailto:${contactEmail}`} className="font-semibold text-charcoal hover:text-coastal">
                    {contactEmail}
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a href="https://wa.me/351961747456" className="font-semibold text-charcoal hover:text-coastal">
                    {whatsappDisplay}
                  </a>
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent("Property check enquiry")}&body=${encodeURIComponent(quickMessage)}`}
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-stone-800"
                  >
                    Email CasaMinder
                  </a>
                  <ButtonLink href={buildWhatsAppUrl(quickMessage)} variant="secondary" className="w-full bg-white">
                    Message on WhatsApp
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
