import { ButtonLink } from "./ButtonLink";

export function ContactCTA() {
  return (
    <section className="bg-sea/60 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl bg-charcoal p-8 text-white shadow-card md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sea">Start with a check</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Book a first property check.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/75">
            Tell us where your property is and what you need. We will confirm availability, scope and the right next step.
          </p>
        </div>
        <ButtonLink href="/contact" variant="secondary" className="shrink-0 border-white/20 bg-white text-charcoal">
          Book a Property Check
        </ButtonLink>
      </div>
    </section>
  );
}
