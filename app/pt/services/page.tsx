import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Verificações da propriedade, guarda de chaves, limpeza e apoio ao proprietário em Lisboa, Setúbal e arredores.",
};

const servicesPt = [
  {
    title: "Visitas de verificação",
    description: "Visitas regulares com fotografias, notas sobre o estado do imóvel e sinalização de problemas visíveis.",
  },
  {
    title: "Guarda de chaves e acessos",
    description: "Guarda segura de chaves e acesso controlado para proprietários, familiares, equipas de limpeza e fornecedores autorizados.",
  },
  {
    title: "Limpeza e preparação",
    description: "Limpeza, arejamento, troca de roupa e preparação antes da chegada do proprietário ou convidados aprovados.",
  },
  {
    title: "Coordenação de manutenção",
    description: "Acompanhamos necessidades práticas e ajudamos a articular fornecedores locais com atualizações claras.",
  },
  {
    title: "Correio e utilidades",
    description: "Recolha de correio, verificação básica de contadores, água e eletricidade durante as visitas.",
  },
  {
    title: "Preparação para arrendamento",
    description: "Apoio opcional para proprietários que precisem de preparar o imóvel de forma responsável para ocupação.",
  },
];

export default function PortugueseServicesPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Serviços"
            title="Cuidado de propriedades para quem precisa de apoio local com confiança."
            description="A CasaMinder ajuda proprietários ausentes com verificações, guarda de chaves, limpeza, coordenação prática e atualizações claras sem transformar o imóvel numa operação de alojamento local."
          />

          <div className="mt-12 grid gap-8 rounded-3xl bg-white p-5 shadow-card lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
              <Image
                src="/images/property-check-visit.png"
                alt="Verificação da propriedade com atualização para o proprietário"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-2 lg:p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Visitas de verificação</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                Verificações claras, fotos e notas práticas depois de cada visita.
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Verificamos portas, janelas, sinais de fugas ou humidade, correio, utilidades, arejamento e alterações
                visíveis no estado do imóvel. Se algo precisar de atenção, recebe uma atualização calma com próximos
                passos combinados.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicesPt.map((service, index) => (
              <article key={service.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-sand text-sm font-bold text-charcoal">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-sea/45 p-6 shadow-soft sm:p-8">
            <SectionHeader
              eyebrow="Próximo passo"
              title="Vamos perceber qual o nível de apoio mais adequado."
              description="Se quiser confirmar a frequência ideal, o tipo de acompanhamento e a cobertura para o seu imóvel, o melhor próximo passo é marcar um primeiro contacto."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/pt/pricing" variant="secondary">
                Ver preços
              </ButtonLink>
              <ButtonLink href="/pt/areas" variant="secondary">
                Ver zonas
              </ButtonLink>
              <ButtonLink href="/pt/contact">
                Marcar verificação
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
