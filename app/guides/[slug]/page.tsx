import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { guides } from "@/lib/site-data";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.href.split("/").pop() as string }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.href.endsWith(slug));

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guides.find((item) => item.href.endsWith(slug));

  if (!guide) {
    notFound();
  }

  return (
    <main>
      <article className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Guide</p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 text-xl leading-8 text-muted">{guide.excerpt}</p>

          <div className="mt-10 space-y-6 rounded-3xl bg-white p-8 leading-8 text-muted shadow-card">
            <p>
              This guide is a placeholder for CasaMinder&apos;s owner resources. It will be expanded with practical, location-aware advice for property care Portugal owners, including preparation checklists, maintenance coordination notes and home watch Lisbon considerations.
            </p>
            <p>
              CasaMinder can help with property checks, keyholding, housekeeping, access coordination and clear photo updates, while specialist repairs and third-party supplier costs remain separately quoted.
            </p>
            <p>
              Rental-related support is optional and depends on the owner&apos;s legal and compliance status. CasaMinder does not provide legal, tax, insurance or real estate brokerage advice.
            </p>
          </div>

          <ButtonLink href="/contact" className="mt-8">Book a Property Check</ButtonLink>
        </div>
      </article>
    </main>
  );
}
