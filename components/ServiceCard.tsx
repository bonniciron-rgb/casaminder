type ServiceCardProps = {
  title: string;
  description: string;
  index?: number;
};

export function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      {index !== undefined ? (
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-sand text-sm font-bold text-charcoal">
          {String(index + 1).padStart(2, "0")}
        </div>
      ) : null}
      <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </article>
  );
}
