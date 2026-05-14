import { trustBullets } from "@/lib/site-data";

export function TrustBar() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {trustBullets.map((item) => (
        <div key={item} className="rounded-xl border border-white/70 bg-white/75 px-4 py-4 text-sm font-semibold text-charcoal shadow-soft">
          {item}
        </div>
      ))}
    </div>
  );
}
