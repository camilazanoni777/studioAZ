import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { LeadForm } from "@/components/LeadForm";
import { PhotoPanel } from "@/components/PhotoPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { siteConfig } from "@/lib/site";

const homeServices = [
  {
    title: "Consultoria de Arquitetura",
    text: "Orientação estratégica para layout, materiais, acabamentos e decisões pontuais do projeto.",
  },
  {
    title: "Projeto de Arquitetura",
    text: "Concepção completa para construir, reformar ou transformar espaços com técnica e sofisticação.",
  },
  {
    title: "Interiores",
    text: "Ambientes personalizados com curadoria de mobiliário, iluminação, texturas e detalhes.",
  },
  {
    title: "Reformas e Ambientação",
    text: "Transformação de espaços existentes com planejamento, bom gosto e foco na experiência de uso.",
  },
  {
    title: "Acompanhamento Personalizado",
    text: "Suporte próximo para orientar escolhas, manter coerência e trazer segurança durante o processo.",
  },
];

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

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1fr] lg:items-center">
          <div className="[&>div]:min-h-[320px] md:[&>div]:min-h-[380px] lg:[&>div]:min-h-[460px]">
            <PhotoPanel src="/images/studio-materials.png" alt="Materiais de arquitetura e interiores sobre mesa" />
          </div>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium text-gold">Sobre Andrea Zanoni</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-charcoal md:text-5xl">
              Um olhar atento para transformar espaços em lugares que fazem sentido.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-muted">
              <p>
                Sou Andrea Zanoni, arquiteta à frente do Studio Andrea Zanoni, em Brasília. Minha forma de projetar
                parte da ideia de que a arquitetura não deve apenas impressionar visualmente. Ela precisa fazer sentir.
              </p>
              <p>
                Os espaços influenciam diretamente a forma como as pessoas vivem, descansam, convivem e experimentam
                o dia a dia. Por isso, antes de pensar apenas em estética, penso em atmosfera, circulação, conforto,
                funcionalidade e na sensação que aquele ambiente deve transmitir.
              </p>
              <p>
                Meu trabalho é transformar imóveis antigos ou recém-entregues em espaços mais coerentes, acolhedores
                e conectados à forma como as pessoas desejam viver.
              </p>
            </div>
            <div className="mt-7 max-w-xl border-l border-gold bg-surface px-5 py-4 shadow-[0_18px_50px_rgba(31,33,29,0.05)]">
              <p className="font-serif text-xl leading-8 text-charcoal md:text-2xl">
                Mais do que impressionar visualmente, um bom projeto precisa melhorar a forma como a vida acontece
                dentro dos espaços.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-gold">Serviços</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-charcoal md:text-5xl">
              Soluções para transformar seu espaço com clareza, estética e funcionalidade.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Do primeiro olhar ao projeto completo, o Studio Andrea Zanoni oferece soluções para tornar ambientes
              mais bonitos, coerentes e prazerosos de viver.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {homeServices.map((service, index) => (
              <article
                key={service.title}
                className={`border border-line bg-surface p-6 transition duration-300 hover:border-gold/70 hover:shadow-[0_18px_55px_rgba(31,33,29,0.06)] ${
                  index > 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <h3 className="font-serif text-2xl font-medium leading-snug text-charcoal">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted md:text-base">{service.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-2xl text-charcoal">Não sabe por onde começar?</p>
            <Link
              href="/contato"
              className="inline-flex border border-moss px-5 py-3 text-sm font-semibold text-moss transition duration-300 hover:-translate-y-0.5 hover:bg-moss hover:text-white"
            >
              Agendar uma conversa
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-gold">Depoimentos</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-charcoal md:text-5xl">
              Experiências conduzidas com cuidado, segurança e atenção ao detalhe.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Relatos de clientes que buscaram transformar seus espaços com clareza, escuta e sensibilidade.
            </p>
          </div>
          <div className="mt-9">
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
