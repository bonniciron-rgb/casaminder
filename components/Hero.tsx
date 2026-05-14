import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden coastal-grid">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sea/70 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative z-10">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-coastal">
            Property care in Portugal, for owners who live away
          </p>
          <h1 className="text-balance font-serif text-5xl font-semibold leading-tight text-charcoal sm:text-6xl lg:text-7xl">
            Your home in Portugal, looked after while you&apos;re away.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-muted">
            CasaMinder provides trusted property checks, keyholding, housekeeping and local support for absent owners across Setúbal and Lisbon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Book a Property Check</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              View Care Plans
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm font-medium text-muted">For second-home owners, expats, landlords and property investors.</p>
        </div>
        <div className="relative z-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand shadow-card">
            <Image
              src="/images/hero-portugal-home-care.png"
              alt="Portuguese coastal home interior prepared and checked for an absent owner"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-charcoal/5 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/70 bg-white/82 p-5 shadow-soft backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Visit update</p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">All secure. Airing completed. Photos sent.</h2>
              <p className="mt-4 leading-7 text-muted">
                Quiet, practical oversight for owners who need someone local to check the details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
