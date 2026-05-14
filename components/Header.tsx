import Link from "next/link";
import { navItems } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-2xl font-semibold text-charcoal" aria-label="CasaMinder home">
          CasaMinder
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-charcoal md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-coastal">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" className="hidden sm:inline-flex">
            Book a Property Check
          </ButtonLink>
          <details className="relative md:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-stone-200 bg-white text-2xl font-bold leading-none shadow-soft"
              aria-label="Open navigation menu"
            >
              <span aria-hidden="true">≡</span>
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-stone-200 bg-white p-3 shadow-card">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-charcoal hover:bg-sand/50">
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/contact" className="mt-2 w-full">
                Book a Property Check
              </ButtonLink>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
