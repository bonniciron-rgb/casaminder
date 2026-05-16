import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Sobre a CasaMinder",
  description:
    "Conheça a abordagem da CasaMinder ao cuidado de propriedades para proprietários ausentes em Lisboa, Setúbal e arredores.",
};

const trustBulletsPt = [
  "Atualizações claras com fotos",
  "Coordenação com fornecedores locais",
  "Planos simples e transparentes",
  "Apoio em inglês e português",
  "Sem upselling desnecessário",
  "Adequado para imóveis vazios, segundas habitações e uso ocasional",
];

export default function PortugueseAboutPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Sobre a CasaMinder"
            title="Olhos de confiança no terreno para proprietários que nem sempre podem estar presentes."
            description="A CasaMinder foi criada para proprietários estrangeiros, portugueses a viver no estrangeiro, expatriados, senhorios e proprietários de segunda habitação que precisam de apoio local estável. O serviço é deliberadamente prático: verificar o imóvel, comunicar com clareza, coordenar acessos e ajudar a tomar decisões calmas à distância."
          />
          <div className="overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="relative aspect-[4/5] bg-sand">
              <Image
                src="/images/trusted-local-property-support.png"
                alt="Profissional de apoio local a verificar uma propriedade em Portugal"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal">Premium, próximo e claro.</h2>
              <p className="mt-4 leading-8 text-muted">
                O foco está no cuidado da propriedade, guarda de chaves, verificações, coordenação de limpeza e apoio
                ao proprietário em toda a região de Lisboa e Setúbal. O apoio ligado a arrendamento pode existir como
                camada opcional, mas não é o centro do negócio.
              </p>
              <p className="mt-4 leading-8 text-muted">
                O objetivo é simples: tornar mais leve a experiência de ter uma casa em Portugal quando a vida, o
                trabalho ou a família o mantêm noutro lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Pensado para tranquilidade." align="center" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustBulletsPt.map((item) => (
              <div key={item} className="rounded-xl border border-white/70 bg-white/75 px-4 py-4 text-sm font-semibold text-charcoal shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-card sm:p-8">
          <SectionHeader
            eyebrow="Fale connosco"
            title="Se quiser perceber como funcionaria no seu imóvel, começamos por uma primeira verificação."
            description="Assim conseguimos avaliar a propriedade, o tipo de utilização, as necessidades práticas e o nível de acompanhamento mais adequado."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/pt/contact">
              Marcar verificação
            </ButtonLink>
            <ButtonLink href="/pt/services" variant="secondary">
              Ver serviços
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
