"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PtFooter } from "./PtFooter";
import { PtHeader } from "./PtHeader";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPortuguese = pathname.startsWith("/pt");

  return (
    <>
      {isPortuguese ? <PtHeader /> : <Header />}
      {children}
      {isPortuguese ? <PtFooter /> : <Footer />}
    </>
  );
}
