import type { Metadata } from "next";
import Image from "next/image";
import { ContactQuickActions } from "@/components/ContactQuickActions";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";

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
              <ContactQuickActions quickMessage={quickMessage} />
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
