import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Property checks, keyholding, housekeeping and owner support for absent owners in Lisbon and Setubal.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Property care that keeps you close, even from abroad."
            description="CasaMinder supports owners who need home watch Lisbon services, keyholding Lisbon support, housekeeping Setubal coordination and practical absent owner property services without full rental management."
          />

          <div className="mt-12 grid gap-8 rounded-3xl bg-white p-5 shadow-card lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
              <Image
                src="/images/property-check-visit.png"
                alt="Property check visit in a Portuguese home with window inspection and owner update"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-2 lg:p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Property Check Visits</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                Clear checks, photos and practical notes after every visit.
              </h2>
              <p className="mt-5 leading-8 text-muted">
                We check the things absent owners worry about: doors, windows, signs of leaks or damp, post, utilities, airing and visible condition changes. If something needs attention, you receive a calm update and agreed next steps.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 rounded-3xl bg-sea/45 p-5 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-8">
            <div className="p-2 lg:p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Keyholding & Access</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                Secure local access, handled carefully and clearly.
              </h2>
              <p className="mt-5 leading-8 text-muted">
                We provide secure keyholding and controlled access for owners, approved family, cleaners and contractors. It is a simple way to avoid last-minute stress when you are away and need someone local to open up, check in or coordinate a visit.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
              <Image
                src="/images/secure-keyholding.png"
                alt="Secure keyholding setup with house keys, notebook and linen pouch in a Portuguese home"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-8 rounded-3xl bg-white p-5 shadow-card lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
              <Image
                src="/images/housekeeping-arrival-prep.png"
                alt="Prepared bedroom in a Portuguese home with fresh linen and towels ready for arrival"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-2 lg:p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Housekeeping</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                Fresh, calm arrival preparation for owners and guests.
              </h2>
              <p className="mt-5 leading-8 text-muted">
                We can arrange cleaning, airing, linen changes and pre-arrival preparation so the property feels cared for and ready when you arrive. It is practical support for second homes, holiday homes and occasional-use properties.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 rounded-3xl bg-sea/45 p-5 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-8">
            <div className="p-2 lg:p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Maintenance Coordination</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                Trusted supplier coordination without the chasing from abroad.
              </h2>
              <p className="mt-5 leading-8 text-muted">
                When something needs attention, we help coordinate trusted local suppliers, provide updates and keep you informed from first visit to follow-up. It is practical owner support designed to reduce delays, confusion and avoidable stress.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
              <Image
                src="/images/maintenance-coordination.png"
                alt="Maintenance coordination in a Portuguese home with tools, utility checks and owner updates"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
