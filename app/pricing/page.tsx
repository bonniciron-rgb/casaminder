import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { ContactCTA } from "@/components/ContactCTA";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeader } from "@/components/SectionHeader";
import { guides, pricingPlans } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple monthly property care plans for second homes, landlords and absent owners across Lisbon and Setubal.",
};

export default function PricingPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple monthly care plans."
            description="Choose a starting point, then adjust the frequency and support around your property, location and how you use the home."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-sm leading-7 text-muted shadow-soft">
            Prices are starting prices and may vary depending on property size, location, frequency and scope.
            Cleaning, laundry, repairs and third-party supplier costs are quoted separately. CasaMinder does not
            provide legal, tax, insurance or brokerage advice.
          </div>

          <div className="mt-16 border-t border-stone-200 pt-12">
            <SectionHeader
              eyebrow="Related guides"
              title="Helpful reading before comparing plans."
              description="If you are deciding how much support your property needs, these guides give helpful context before you book."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {guides
                .filter((guide) =>
                  [
                    "/guides/empty-home-checklist-portugal",
                    "/guides/property-care-vs-airbnb-management",
                    "/guides/winter-empty-home-checks",
                  ].includes(guide.href),
                )
                .map((guide) => (
                  <BlogCard key={guide.href} {...guide} />
                ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
