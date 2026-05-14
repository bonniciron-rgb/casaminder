import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://casaminder.com"),
  title: {
    default: "CasaMinder | Property Care & Home Watch Services in Lisbon and Setubal",
    template: "%s | CasaMinder",
  },
  description:
    "Trusted property checks, keyholding, housekeeping and local support for absent owners, second-home owners and landlords in Lisbon, Setubal and surrounding areas.",
  keywords: [
    "property care Portugal",
    "home watch Lisbon",
    "property management Setubal",
    "keyholding Lisbon",
    "second home care Portugal",
    "absent owner property services",
    "housekeeping Setubal",
    "property checks Lisbon",
  ],
  openGraph: {
    title: "CasaMinder | Property Care in Portugal",
    description:
      "Property checks, keyholding, housekeeping and owner support for homes across Setubal and Lisbon.",
    url: "https://casaminder.com",
    siteName: "CasaMinder",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
