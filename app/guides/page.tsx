import type { Metadata } from "next";
import Image from "next/image";
import { BlogCard } from "@/components/BlogCard";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { guides } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical guides for absent owners, second-home owners and landlords caring for property in Portugal, Lisbon and Setubal.",
};

export default function GuidesPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Guides"
            title="Practical guides for owning property from abroad."
            description="Helpful articles for second-home owners in Portugal, busy landlords and anyone planning property checks Lisbon or keyholding support."
          />

          <div className="mt-12 grid gap-8 rounded-3xl bg-white p-5 shadow-card lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-sand">
              <Image
                src="/images/away-owner-checklist.png"
                alt="Away owner checklist flat lay with keys, notebook, linens and phone"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-2 lg:p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Checklist</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                A simple starting point for owners who want fewer surprises.
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Our guides are designed to help absent owners think clearly about access, utilities, housekeeping, seasonal checks and practical property care before small issues become expensive ones.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <BlogCard key={guide.href} {...guide} />
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-sea/45 p-6 shadow-soft sm:p-8">
            <SectionHeader
              eyebrow="Next step"
              title="Turn the guidance into a practical care plan."
              description="If a guide matches what you are dealing with, the next useful step is to review services, compare plans, confirm coverage and book a property check."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/services" variant="secondary">
                View services
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View pricing
              </ButtonLink>
              <ButtonLink href="/areas" variant="secondary">
                Check coverage
              </ButtonLink>
              <ButtonLink href="/contact">
                Book a property check
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
