import { areas } from "@/lib/site-data";

export function AreaGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {areas.map((area) => (
        <div key={area} className="rounded-xl border border-stone-200 bg-white px-4 py-4 text-sm font-semibold text-charcoal shadow-soft">
          {area}
        </div>
      ))}
    </div>
  );
}
