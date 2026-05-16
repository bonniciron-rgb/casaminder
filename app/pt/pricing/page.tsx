import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Planos mensais simples para verificações da propriedade, guarda de chaves e apoio ao proprietário em Lisboa e Setúbal.",
};

const plansPt = [
  {
    name: "Essential Care",
    price: "desde 89 EUR/mês",
    description: "Um ritmo mensal simples para imóveis vazios ou usados apenas ocasionalmente.",
    features: [
      "Uma visita agendada por mês",
      "Relatório fotográfico base",
      "Verificação de portas, janelas e sinais de humidade",
      "Areamento do imóvel",
      "Verificação do correio",
      "Atualização por WhatsApp ou email",
    ],
  },
  {
    name: "Safe Home Plus",
    price: "desde 149 EUR/mês",
    description: "Mais frequência, mais detalhe e apoio prioritário ao proprietário.",
    features: [
      "Duas visitas agendadas por mês",
      "Atualização detalhada com fotos ou vídeo",
      "Verificação de utilidades e contadores",
      "Torneiras e autoclismos testados",
      "Coordenação de uma visita de fornecedor",
      "Apoio prioritário",
    ],
  },
  {
    name: "Guest Ready",
    price: "desde 249 EUR/mês + limpeza/roupa",
    description: "Preparação do imóvel antes da chegada do proprietário, família ou hóspedes aprovados.",
    features: [
      "Verificação pré-chegada",
      "Coordenação da limpeza",
      "Preparação de roupa e toalhas",
      "Coordenação de acessos",
      "Confirmação visual de que está tudo pronto",
    ],
  },
];

export default function PortuguesePricingPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Preços"
            title="Planos mensais simples."
            description="Escolha um ponto de partida e depois ajustamos a frequência e o nível de apoio ao tamanho do imóvel, localização e forma de utilização."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {plansPt.map((plan, index) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft ${
                  index === 1 ? "border-coastal/40 ring-4 ring-coastal/10" : "border-stone-200"
                }`}
              >
                {index === 1 ? (
                  <p className="mb-4 w-fit rounded-full bg-coastal/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-coastal">
                    Mais escolhido
                  </p>
                ) : null}
                <h3 className="text-2xl font-semibold text-charcoal">{plan.name}</h3>
                <p className="mt-3 text-2xl font-bold text-charcoal">{plan.price}</p>
                <p className="mt-3 leading-7 text-muted">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coastal" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/pt/contact" className="mt-7 w-full" variant={index === 1 ? "primary" : "secondary"}>
                  Pedir contacto
                </ButtonLink>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-sm leading-7 text-muted shadow-soft">
            Os preços apresentados são valores base e podem variar conforme dimensão do imóvel, localização,
            frequência, acessos e âmbito do serviço. Limpeza, roupa, reparações e custos de terceiros são cobrados
            separadamente.
          </div>

          <div className="mt-16 rounded-3xl bg-sea/45 p-6 shadow-soft sm:p-8">
            <SectionHeader
              eyebrow="Antes de decidir"
              title="Podemos ajudar a escolher o plano certo."
              description="Se não tiver a certeza sobre a frequência ideal ou sobre o nível de apoio mais adequado, vale a pena pedir uma primeira verificação."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/pt/services" variant="secondary">
                Ver serviços
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
