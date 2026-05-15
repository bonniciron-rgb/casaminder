import type { Metadata } from "next";
import Image from "next/image";
import { AreaGrid } from "@/components/AreaGrid";
import { BlogCard } from "@/components/BlogCard";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBar } from "@/components/TrustBar";
import { areas, contactEmail, faqs, guides, pricingPlans, services, whatsappDisplay } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Property Care & Home Watch Services in Lisbon and Setubal",
  description:
    "Trusted property care in Portugal for absent owners, including property checks, keyholding, housekeeping and owner support across Lisbon and Setubal.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://casaminder.com/#business",
        name: "CasaMinder",
        legalName: "LUCIDA ORIGEM, UNIPESSOAL, LDA",
        description: "Property care, home watch, keyholding, housekeeping and owner support in Lisbon and Setubal.",
        url: "https://casaminder.com",
        email: contactEmail,
        telephone: whatsappDisplay,
        areaServed: areas.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": "https://casaminder.com/#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Empty homes need more than a locked door."
            description="When a property is left unattended, small issues can become expensive problems. Damp, leaks, pests, power issues, post, access problems and last-minute cleaning can all create stress for owners who live away. CasaMinder gives you reliable local eyes on the ground, with clear updates after every visit."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Safety & condition checks", "Housekeeping & arrival preparation", "Local access & maintenance support"].map((item, index) => (
              <ServiceCard key={item} title={item} description="Practical, owner-focused support designed around the way you use your Portuguese home." index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Flexible care for the way you use your property." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Simple, transparent and easy to start." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              "Tell us about your property",
              "We complete an initial property check",
              "Choose your care plan",
              "Receive clear updates after every visit",
              "Add cleaning, maintenance or guest-ready support when needed",
            ].map((step, index) => (
              <div key={step} className="rounded-2xl bg-white p-5 text-center shadow-soft">
                <p className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sand text-sm font-bold">{index + 1}</p>
                <p className="text-sm font-semibold leading-6 text-charcoal">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sea/45 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader title="Simple monthly care plans." description="Starting prices for property care Portugal owners can understand before they book." />
            <ButtonLink href="/pricing" variant="secondary">View all pricing</ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            Prices are starting prices and may vary depending on property size, location, frequency and scope. Cleaning, laundry, repairs and third-party supplier costs are quoted separately.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            title="Covering Setubal, Lisbon and surrounding areas."
            description="If your property is nearby but not listed, contact us and we will confirm availability."
          />
          <AreaGrid />
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

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl bg-white p-6 shadow-card lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand">
            <Image
              src="/images/away-owner-checklist.png"
              alt="Away owner checklist with keys, notebook, phone and folded linens"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Free checklist</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">Not sure what your empty property needs?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Download our free "Away Owner Property Checklist" or book a first property check.
            </p>
            <ButtonLink href="/contact" className="mt-7">Request the checklist</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Frequently asked questions." align="center" />
          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Guides for absent owners." description="Practical notes for second-home owners, landlords and investors caring for property from abroad." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {guides.slice(0, 3).map((guide) => (
              <BlogCard key={guide.href} {...guide} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
