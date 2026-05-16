import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Zonas de Cobertura",
  description:
    "A CasaMinder presta apoio em Lisboa, Setúbal, Azeitão, Palmela, Sesimbra, Almada, Montijo, Alcochete e zonas próximas.",
};

const areasPt = [
  "Lisboa",
  "Setúbal",
  "Azeitão",
  "Palmela",
  "Sesimbra",
  "Almada",
  "Costa da Caparica",
  "Seixal",
  "Barreiro",
  "Montijo",
  "Alcochete",
];

export default function PortugueseAreasPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-card">
          <div className="relative aspect-[16/9] bg-sand">
            <Image
              src="/images/setubal-lisbon-coastal-region.png"
              alt="Vista costeira da região de Lisboa e Setúbal"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-10 p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <SectionHeader
              eyebrow="Zonas"
              title="Cobertura em Lisboa, Setúbal e arredores."
              description="A nossa área inicial inclui Lisboa, Setúbal, Azeitão, Palmela, Sesimbra, Almada, Costa da Caparica, Seixal, Barreiro, Montijo e Alcochete. Se o seu imóvel estiver perto destas zonas, confirme connosco a disponibilidade."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {areasPt.map((area) => (
                <div key={area} className="rounded-xl border border-stone-200 bg-white px-4 py-4 text-sm font-semibold text-charcoal shadow-soft">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 rounded-3xl bg-sea/45 p-6 shadow-soft sm:max-w-7xl sm:p-8">
          <SectionHeader
            eyebrow="Próximo passo"
            title="Confirme se a sua propriedade está dentro da nossa cobertura."
            description="Se estiver numa zona próxima mas não listada, podemos avaliar a logística e confirmar se conseguimos apoiar o imóvel de forma consistente."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/pt/services" variant="secondary">
              Ver serviços
            </ButtonLink>
            <ButtonLink href="/pt/contact">
              Pedir confirmação
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
