import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustBar } from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "About",
  description: "CasaMinder provides calm, human property care and owner support for people who live away from their homes in Portugal.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="About CasaMinder"
            title="Trusted eyes on the ground for owners who cannot always be there."
            description="CasaMinder was created for foreign property owners, Portuguese owners abroad, expats, landlords and second-home owners who need steady local support. The service is deliberately practical: check the home, report clearly, coordinate access and help owners make calm decisions from wherever they are."
          />
          <div className="overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="relative aspect-[4/5] bg-sand">
              <Image
                src="/images/trusted-local-property-support.png"
                alt="Local property support professional in a Portuguese home carrying keys and checking updates"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal">Premium, warm and clear.</h2>
              <p className="mt-4 leading-8 text-muted">
                We focus on property care, keyholding, inspections, housekeeping and owner support across the Setubal and Lisbon region. Rental-related help is available as an optional layer, but CasaMinder is not built around income promises or high-pressure rental management.
              </p>
              <p className="mt-4 leading-8 text-muted">
                The aim is simple: make it easier to own a home in Portugal when life, work or family keeps you somewhere else.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sand/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Built for peace of mind." align="center" />
          <div className="mt-10">
            <TrustBar />
          </div>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
