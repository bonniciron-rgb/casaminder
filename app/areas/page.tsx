import type { Metadata } from "next";
import Image from "next/image";
import { AreaGrid } from "@/components/AreaGrid";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description: "CasaMinder covers Setubal, Lisbon, Azeitao, Palmela, Sesimbra, Almada, Caparica, Montijo, Alcochete and nearby areas.",
};

export default function AreasPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-card">
          <div className="relative aspect-[16/9] bg-sand">
            <Image
              src="/images/setubal-lisbon-coastal-region.png"
              alt="Coastal homes and sea view representing the Setubal and Lisbon region"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-10 p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <SectionHeader
              eyebrow="Areas"
              title="Covering Setubal, Lisbon and surrounding areas."
              description="Our initial service area includes Setubal, Azeitao, Palmela, Sesimbra, Almada, Caparica, Montijo, Alcochete, Seixal and Lisbon. If your property is nearby but not listed, contact us and we will confirm availability."
            />
            <AreaGrid />
          </div>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
