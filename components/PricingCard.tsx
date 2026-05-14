import { ButtonLink } from "./ButtonLink";

type PricingCardProps = {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    featured?: boolean;
  };
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft ${
        plan.featured ? "border-coastal/40 ring-4 ring-coastal/10" : "border-stone-200"
      }`}
    >
      {plan.featured ? (
        <p className="mb-4 w-fit rounded-full bg-coastal/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-coastal">
          Most popular
        </p>
      ) : null}
      <h3 className="text-2xl font-semibold text-charcoal">{plan.name}</h3>
      <p className="mt-3 text-2xl font-bold text-charcoal">{plan.price}</p>
      <p className="mt-3 leading-7 text-muted">{plan.description}</p>
      <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coastal" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonLink href="/contact" className="mt-7 w-full" variant={plan.featured ? "primary" : "secondary"}>
        Book a Property Check
      </ButtonLink>
    </article>
  );
}
