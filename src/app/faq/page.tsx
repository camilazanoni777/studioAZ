import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { FAQList } from "@/components/FAQList";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Perguntas Frequentes",
  "Perguntas e respostas sobre consultoria de arquitetura, interiores, reformas, acompanhamento de obra e orcamentos.",
  "/faq",
);

export default function FAQPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Perguntas frequentes antes de iniciar seu projeto."
            text="Reunimos as principais duvidas sobre formatos de atendimento, consultoria, prazos, orcamento e preparacao para a primeira conversa."
          />
          <FAQList />
        </div>
      </section>
      <CTA title="Ainda ficou alguma duvida sobre o processo?" buttonLabel="Perguntar pelo WhatsApp" />
    </>
  );
}
