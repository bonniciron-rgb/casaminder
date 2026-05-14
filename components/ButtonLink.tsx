import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ href, children, variant = "primary", className = "", ...props }: ButtonLinkProps) {
  const styles = {
    primary: "bg-charcoal text-white shadow-soft hover:bg-stone-800",
    secondary: "border border-charcoal/15 bg-white text-charcoal hover:border-coastal hover:text-coastal",
    ghost: "text-charcoal hover:text-coastal",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
