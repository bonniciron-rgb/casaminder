import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CasaMinder privacy policy placeholder.",
};

export default function PrivacyPage() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-card">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Placeholder</p>
        <h1 className="font-serif text-4xl font-semibold text-charcoal">Privacy Policy</h1>
        <p className="mt-5 leading-8 text-muted">
          This page is a placeholder for CasaMinder&apos;s future privacy policy. Before launch, replace this text with a policy that explains what information is collected, how enquiries are handled and how owners can contact CasaMinder about their data.
        </p>
      </div>
    </main>
  );
}
