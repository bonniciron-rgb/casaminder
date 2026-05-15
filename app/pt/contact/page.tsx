import type { Metadata } from "next";
import Image from "next/image";
import { LeadFormPt } from "@/components/LeadFormPt";
import { SectionHeader } from "@/components/SectionHeader";
import { contactEmail, whatsappDisplay } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contacto em Português",
  description:
    "Fale com a CasaMinder para marcar uma verificação da propriedade ou pedir apoio local em Lisboa, Setúbal e arredores.",
};

export default function PortugueseContactPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contacto"
              title="Marcar uma verificação."
              description="Diga-nos onde fica o seu imóvel e que tipo de apoio precisa. Pode enviar o pedido por email ou continuar no WhatsApp."
            />
            <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-card">
              <div className="relative aspect-[3/2] bg-sand">
                <Image
                  src="/images/book-property-check.png"
                  alt="Mesa com chaves, caderno e café para pedido de verificação"
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 bg-sea/60 p-6 text-sm leading-7 text-muted">
                <p>
                  Email:{" "}
                  <a href={`mailto:${contactEmail}`} className="font-semibold text-charcoal hover:text-coastal">
                    {contactEmail}
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a href="https://wa.me/351961747456" className="font-semibold text-charcoal hover:text-coastal">
                    {whatsappDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <LeadFormPt />
        </div>
      </section>
    </main>
  );
}
