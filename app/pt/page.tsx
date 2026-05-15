import type { Metadata } from "next";
import Image from "next/image";
import { BlogCard } from "@/components/BlogCard";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { guides } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "CasaMinder em Portugues",
  description:
    "Cuidado de propriedades em Portugal para proprietarios ausentes, com verificacoes, guarda de chaves, limpeza e apoio local em Lisboa e Setubal.",
};

const servicesPt = [
  {
    title: "Visitas de verificacao",
    description: "Inspecoes regulares com fotografias, notas sobre o estado da casa e comunicacao clara.",
  },
  {
    title: "Guarda de chaves e acessos",
    description: "Guarda segura de chaves e acesso controlado para limpeza, manutencao ou familiares.",
  },
  {
    title: "Limpeza e preparacao",
    description: "Areamento, limpeza, troca de roupa e preparacao antes da chegada do proprietario.",
  },
  {
    title: "Coordenacao de manutencao",
    description: "Ajudamos a articular fornecedores locais e a acompanhar o que precisa de atencao.",
  },
];

const plansPt = [
  {
    name: "Essential Care",
    price: "desde 89 EUR/mes",
    items: [
      "Uma visita agendada por mes",
      "Relatorio fotografico base",
      "Verificacao de portas, janelas, fugas e humidade",
      "Areamento do imovel",
      "Verificacao do correio",
    ],
  },
  {
    name: "Safe Home Plus",
    price: "desde 149 EUR/mes",
    items: [
      "Duas visitas agendadas por mes",
      "Atualizacao detalhada com fotos ou video",
      "Verificacao de contadores e utilidades",
      "Torneiras e autoclismos testados",
      "Coordenacao de uma visita de fornecedor",
    ],
  },
];

const areasPt = [
  "Lisboa",
  "Setubal",
  "Azeitao",
  "Palmela",
  "Sesimbra",
  "Almada",
  "Costa da Caparica",
  "Montijo",
  "Alcochete",
  "Seixal",
];

const faqsPt = [
  {
    question: "A CasaMinder so trabalha com alojamento local?",
    answer:
      "Nao. O foco principal e apoiar proprietarios ausentes, segundas habitacoes, expatriados e senhorios que querem o imovel acompanhado enquanto estao fora.",
  },
  {
    question: "Podem guardar chaves?",
    answer:
      "Sim. Disponibilizamos guarda segura de chaves e coordenacao de acessos para proprietarios, familiares autorizados, equipas de limpeza e fornecedores.",
  },
  {
    question: "Recebo fotos depois de cada visita?",
    answer:
      "Sim. As visitas podem incluir atualizacoes com fotografias e notas praticas para que saiba o estado da propriedade.",
  },
  {
    question: "Trabalham em Lisboa e Setubal?",
    answer:
      "Sim. A area inicial inclui Lisboa, Setubal e zonas envolventes como Azeitao, Palmela, Sesimbra, Almada, Montijo e Alcochete.",
  },
];

export default function PortugueseHomePage() {
  return (
    <main>
      <section className="relative overflow-hidden coastal-grid">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sea/70 to-transparent" aria-hidden="true" />
        <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-coastal">
              Cuidado de propriedades em Portugal, para proprietarios que vivem fora
            </p>
            <h1 className="text-balance font-serif text-5xl font-semibold leading-tight text-charcoal sm:text-6xl lg:text-7xl">
              A sua casa em Portugal, acompanhada enquanto esta fora.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-muted">
              A CasaMinder presta um apoio local de confianca com verificacoes da propriedade, guarda de chaves, limpeza e coordenacao pratica em Lisboa e Setubal.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/pt/contact">Marcar verificacao</ButtonLink>
              <ButtonLink href="/pt#precos" variant="secondary">
                Ver planos
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm font-medium text-muted">
              Para proprietarios de segunda habitacao, expatriados, senhorios e investidores.
            </p>
          </div>
          <div className="relative z-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand shadow-card">
              <Image
                src="/images/hero-portugal-home-care.png"
                alt="Interior de casa em Portugal preparado e verificado para um proprietario ausente"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-charcoal/5 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/70 bg-white/82 p-5 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Atualizacao da visita</p>
                <h2 className="mt-3 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
                  Tudo seguro. Areamento feito. Fotografias enviadas.
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  Supervisao calma e pratica para proprietarios que precisam de alguem no terreno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Imoveis vazios precisam de mais do que uma porta fechada."
            description="Quando uma casa fica sem uso durante semanas ou meses, pequenos problemas podem crescer sem serem detetados. A CasaMinder oferece olhos no terreno, atualizacoes claras e apoio local para decisoes mais tranquilas."
          />
        </div>
      </section>

      <section id="servicos" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Servicos flexiveis para a forma como usa a sua propriedade." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      <section id="precos" className="bg-sea/45 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Planos mensais simples."
            description="Pontos de partida claros, ajustados ao tamanho do imovel, localizacao, frequencia e nivel de apoio necessario."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {plansPt.map((plan) => (
              <article key={plan.name} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
                <h3 className="text-2xl font-semibold text-charcoal">{plan.name}</h3>
                <p className="mt-3 text-2xl font-bold text-charcoal">{plan.price}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coastal" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/pt/contact" className="mt-7 w-full">
                  Pedir contacto
                </ButtonLink>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            Os valores apresentados sao base e podem variar conforme dimensao do imovel, localizacao, frequencia e ambito do servico.
          </p>
        </div>
      </section>

      <section id="zonas" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            title="Cobertura em Lisboa, Setubal e zonas envolventes."
            description="Se a sua propriedade estiver perto destas zonas mas nao estiver listada, fale connosco e confirmamos disponibilidade."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {areasPt.map((area) => (
              <div key={area} className="rounded-xl border border-stone-200 bg-white px-4 py-4 text-sm font-semibold text-charcoal shadow-soft">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Perguntas frequentes." align="center" />
          <div className="mx-auto mt-10 max-w-4xl divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white shadow-soft">
            {faqsPt.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-charcoal">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand text-charcoal transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Guias uteis para proprietarios ausentes."
            description="Enquanto terminamos a traducao completa, estes guias continuam disponiveis em ingles com informacao pratica sobre verificacoes, guarda de chaves e cuidados sazonais."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {guides.slice(0, 3).map((guide) => (
              <BlogCard key={guide.href} {...guide} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
