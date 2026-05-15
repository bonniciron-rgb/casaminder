import Link from "next/link";
import { ButtonLink } from "./ButtonLink";

const navItems = [
  { label: "Servicos", href: "/pt#servicos" },
  { label: "Precos", href: "/pt#precos" },
  { label: "Zonas", href: "/pt#zonas" },
  { label: "Sobre", href: "/pt#sobre" },
  { label: "Contacto", href: "/pt/contact" },
];

export function PtHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/pt" className="font-serif text-2xl font-semibold text-charcoal" aria-label="CasaMinder inicio">
          CasaMinder
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-charcoal md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-coastal">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/" className="hidden rounded-full border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-charcoal sm:inline-flex">
            EN
          </Link>
          <ButtonLink href="/pt/contact" className="hidden sm:inline-flex">
            Marcar verificacao
          </ButtonLink>
          <details className="relative md:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-stone-200 bg-white text-2xl font-bold leading-none shadow-soft"
              aria-label="Abrir menu"
            >
              <span aria-hidden="true">≡</span>
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-stone-200 bg-white p-3 shadow-card">
              <Link href="/" className="mb-2 block rounded-xl px-4 py-3 text-sm font-semibold text-charcoal hover:bg-sand/50">
                English version
              </Link>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-charcoal hover:bg-sand/50">
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/pt/contact" className="mt-2 w-full">
                Marcar verificacao
              </ButtonLink>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
