import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Depoimentos de Clientes",
  "Avaliacoes e relatos de clientes sobre projetos residenciais, consultoria, interiores e reformas do Studio Andrea Zanoni.",
  "/depoimentos",
);

export default function DepoimentosPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Relatos de quem buscou uma transformação conduzida com cuidado."
            text="Os depoimentos abaixo são placeholders com linguagem natural e refinada. Eles podem ser substituídos por avaliações reais, imagens de projeto e autorizações de uso."
          />
          <div className="mt-12">
            <TestimonialGrid />
          </div>
        </div>
      </section>

      <section className="bg-sand px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {[
            ["Clareza", "Orientação para decidir com mais segurança durante todo o processo."],
            ["Cuidado", "Atendimento próximo, com atenção ao contexto de cada família."],
            ["Resultado", "Ambientes sofisticados, funcionais e coerentes com a vida real."],
          ].map(([title, text]) => (
            <article key={title} className="border-t border-gold pt-6">
              <h2 className="font-serif text-3xl text-charcoal">{title}</h2>
              <p className="mt-4 leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA title="Quer construir uma experiência positiva para o seu projeto?" />
    </>
  );
}
