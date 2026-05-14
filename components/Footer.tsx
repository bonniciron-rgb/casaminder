import Link from "next/link";
import { contactEmail, whatsappDisplay } from "@/lib/site-data";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Areas", href: "/areas" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="font-serif text-3xl font-semibold">
            CasaMinder
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/75">Property care in Portugal, for owners who live away.</p>
          <div className="mt-6 space-y-2 text-sm text-white/75">
            <p>
              <a href={`mailto:${contactEmail}`} className="hover:text-white">
                {contactEmail}
              </a>
            </p>
            <p>
              <a href="https://wa.me/351961747456" className="hover:text-white">
                WhatsApp: {whatsappDisplay}
              </a>
            </p>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-6 text-white/60">
            CasaMinder provides property care, housekeeping coordination and owner support. We do not provide legal, tax, insurance or real estate brokerage advice. Rental-related support is subject to applicable local rules and owner responsibility.
          </p>
          <p className="mt-4 text-xs leading-6 text-white/50">Website designed by OnPoint Consultancy.</p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/75 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
