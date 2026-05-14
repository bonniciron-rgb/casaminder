import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "CasaMinder terms placeholder.",
};

export default function TermsPage() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-card">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Placeholder</p>
        <h1 className="font-serif text-4xl font-semibold text-charcoal">Terms</h1>
        <p className="mt-5 leading-8 text-muted">
          This page is a placeholder for CasaMinder&apos;s future terms. Before launch, replace this text with service terms covering scope, access, keyholding, third-party supplier costs, cancellations and owner responsibilities.
        </p>
      </div>
    </main>
  );
}
