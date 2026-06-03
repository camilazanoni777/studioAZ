import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PhotoPanel } from "@/components/PhotoPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Serviços de Arquitetura e Interiores",
  "Consultoria, projetos de arquitetura, interiores, reformas, ambientação e acompanhamento personalizado para residências.",
  "/servicos",
);

export default function ServicosPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Serviços"
            title="Soluções para cada etapa da transformação do seu espaço."
            text="Da consultoria inicial ao acompanhamento personalizado, o atendimento é desenhado para oferecer clareza, sofisticação e segurança em cada decisão."
          />
          <PhotoPanel src="/images/services-interior.png" alt="Interior residencial sofisticado com cozinha e sala integradas" priority />
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6">
          {services.map((service) => (
            <article
              id={service.slug}
              key={service.slug}
              className="grid gap-8 border border-line bg-surface p-7 transition duration-300 hover:border-gold/70 hover:shadow-[0_24px_70px_rgba(31,33,29,0.08)] lg:grid-cols-[0.75fr_1fr]"
            >
              <div>
                <p className="mb-4 text-sm font-medium text-gold">Studio Andrea Zanoni</p>
                <h2 className="font-serif text-4xl font-medium leading-tight text-charcoal">{service.title}</h2>
                <p className="mt-5 leading-8 text-muted">{service.description}</p>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(service.whatsappText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex bg-moss px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-charcoal"
                  aria-label={`Conversar pelo WhatsApp sobre ${service.title}`}
                >
                  Solicitar pelo WhatsApp
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border-t border-gold pt-5">
                  <h3 className="font-serif text-2xl text-charcoal">Para quem é indicado</h3>
                  <p className="mt-4 leading-7 text-muted">{service.indicatedFor}</p>
                </div>
                <div className="border-t border-gold pt-5">
                  <h3 className="font-serif text-2xl text-charcoal">Beneficios</h3>
                  <ul className="mt-4 space-y-3 text-muted">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 leading-7">
                        <span className="mt-3 h-px w-5 shrink-0 bg-gold" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA
        title="Vamos escolher o melhor formato para o seu momento?"
        text="Uma primeira conversa ajuda a entender escopo, prioridades e o caminho mais adequado para transformar seu espaço."
      />
    </>
  );
}
