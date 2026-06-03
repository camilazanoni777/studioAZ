import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { LeadForm } from "@/components/LeadForm";
import { PhotoPanel } from "@/components/PhotoPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { services, siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[86vh] overflow-hidden bg-charcoal text-white">
        <Image
          src="/images/hero-interior.png"
          alt="Interior residencial sofisticado em tons neutros"
          fill
          priority
          className="object-cover opacity-72"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,19,0.78),rgba(20,20,19,0.36),rgba(20,20,19,0.18))]" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col items-center justify-center px-5 py-28 text-center lg:px-8">
          <div className="mx-auto w-full max-w-[320px] min-w-0 sm:max-w-2xl md:max-w-3xl">
            <p className="mb-5 text-sm font-medium text-white/78">Arquitetura e interiores de alto padrão</p>
            <h1 className="sr-only">Andrea Zanoni Arquitetura + Interiores</h1>
            <Image
              src="/images/andrea-zanoni-logo-transparent.png"
              alt="Andrea Zanoni Arquitetura + Interiores"
              width={1400}
              height={270}
              priority
              className="mx-auto h-auto w-full max-w-[320px] brightness-0 invert sm:max-w-[520px] md:max-w-[720px]"
            />
            <p className="mx-auto mt-7 max-w-[320px] text-lg leading-8 text-white/82 sm:max-w-2xl">
              A arquitetura precisa fazer sentir, contar histórias e transformar espaços em cenário
              para uma vida com mais prazer, beleza e significado.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex justify-center bg-white px-6 py-4 text-sm font-semibold text-charcoal transition hover:bg-sand"
              >
                Iniciar projeto
              </Link>
              <Link
                href="/servicos"
                className="inline-flex justify-center border border-white/60 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-charcoal"
              >
                Ver serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-background px-5 py-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 text-sm text-muted md:grid-cols-3">
          <p>Atendimento consultivo e personalizado</p>
          <p>Projetos para morar melhor, receber melhor e viver melhor</p>
          <p>Arquitetura, interiores, reformas e ambientação</p>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PhotoPanel src="/images/studio-materials.png" alt="Materiais de arquitetura e interiores sobre mesa" />
          <div>
            <SectionHeading
              eyebrow="Sobre o studio"
              title="Um olhar refinado para casas que precisam refletir quem vive nelas."
              text="O Studio Andrea Zanoni combina sensibilidade estética, planejamento e escuta ativa para transformar desejos em ambientes elegantes, acolhedores e funcionais."
            />
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {["Curadoria de materiais", "Layout inteligente", "Acompanhamento próximo", "Decisões com clareza"].map(
                (item) => (
                  <div key={item} className="border-l border-gold pl-5 text-sm font-medium text-charcoal">
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Serviços"
            title="Soluções para cada etapa da transformação do seu espaço."
            text="Da consultoria pontual ao projeto completo, o atendimento é desenhado para reduzir dúvidas, evitar escolhas desalinhadas e elevar o resultado final."
          />
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="bg-surface p-8">
                <h3 className="font-serif text-3xl font-medium text-charcoal">{service.title}</h3>
                <p className="mt-5 leading-7 text-muted">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Processo"
              title="Um caminho organizado para transformar ideias em ambientes prontos para viver."
            />
            <div className="mt-10 space-y-7">
              {[
                ["01", "Diagnóstico", "Entendimento do momento, estilo de vida, objetivos e prioridades."],
                ["02", "Direção criativa", "Definição de linguagem, materiais, layout e sensação desejada."],
                ["03", "Projeto e orientação", "Entrega de soluções visuais e técnicas para guiar decisões."],
                ["04", "Acompanhamento", "Apoio para que a execução mantenha coerência com o projeto."],
              ].map(([number, title, text]) => (
                <div key={number} className="grid gap-4 border-t border-line pt-6 sm:grid-cols-[80px_1fr]">
                  <span className="font-serif text-3xl text-gold">{number}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
                    <p className="mt-2 leading-7 text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PhotoPanel src="/images/services-interior.png" alt="Cozinha e sala de jantar sofisticadas" />
        </div>
      </section>

      <section className="bg-sand px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Experiências conduzidas com cuidado, segurança e atenção ao detalhe."
          />
          <div className="mt-12">
            <TestimonialGrid />
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Capte sua ideia"
              title="Conte sobre o espaço que você deseja transformar."
              text={`Prefere falar direto? Chame pelo WhatsApp ${siteConfig.whatsappDisplay}.`}
            />
          </div>
          <div className="border border-line bg-surface p-6 md:p-9">
            <LeadForm />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
