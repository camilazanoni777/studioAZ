import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PhotoPanel } from "@/components/PhotoPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Sobre o Studio Andrea Zanoni",
  "Conheça a abordagem consultiva, humana e sofisticada do Studio Andrea Zanoni para arquitetura e interiores residenciais.",
  "/sobre",
);

export default function SobrePage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-gold">Sobre</p>
            <h1 className="font-serif text-5xl font-medium leading-tight text-charcoal md:text-7xl">
              Um studio para criar casas elegantes, acolhedoras e profundamente pessoais.
            </h1>
            <p className="mt-7 text-lg leading-8 text-muted">
              O Studio Andrea Zanoni atua com arquitetura e interiores para famílias que desejam transformar
              seus espaços em lugares de presença, conforto e identidade. Cada projeto começa pela escuta:
              entender quem mora, como vive, o que deseja preservar e o que precisa evoluir.
            </p>
          </div>
          <PhotoPanel src="/images/studio-materials.png" alt="Amostras de materiais e desenho tecnico para projeto residencial" priority />
        </div>
      </section>

      <section className="bg-surface px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {[
            [
              "Atendimento personalizado",
              "Cada família recebe um olhar individual, com orientações coerentes com rotina, prioridades e estilo de vida.",
            ],
            [
              "Elegancia funcional",
              "A estética e pensada junto com conforto, circulação, praticidade, iluminação e uso real dos ambientes.",
            ],
            [
              "Experiência consultiva",
              "O processo aproxima o cliente das decisões certas, com clareza, criterio e cuidado em cada etapa.",
            ],
          ].map(([title, text]) => (
            <article key={title} className="border-t border-gold pt-6">
              <h2 className="font-serif text-3xl text-charcoal">{title}</h2>
              <p className="mt-4 leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1fr]">
          <SectionHeading
            eyebrow="Filosofia"
            title="Ambientes devem refletir a identidade dos moradores, não apenas uma tendência."
          />
          <div className="space-y-6 text-lg leading-9 text-muted">
            <p>
              A casa de alto padrão não é definida apenas por materiais nobres. Ela se revela na proporção
              correta, na fluidez da rotina, na sensação de acolhimento e na capacidade de traduzir a história
              de quem vive ali.
            </p>
            <p>
              Por isso, o Studio Andrea Zanoni une estética, funcionalidade e conforto em uma experiência proxima,
              consultiva e organizada. O resultado são ambientes sofisticados sem excessos, pensados para viver
              bem todos os dias.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Sua casa pode expressar melhor quem você e e como deseja viver."
        text="Uma conversa inicial ajuda a compreender o momento do projeto e o melhor formato de atendimento."
      />
    </>
  );
}
