import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Contato",
  "Fale com o Studio Andrea Zanoni pelo WhatsApp, Instagram, e-mail ou formulario para arquitetura e interiores.",
  "/contato",
);

export default function ContatoPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Contato"
              title="Vamos conversar sobre o seu projeto?"
              text="Compartilhe seu momento, o tipo de transformacao desejada e os primeiros detalhes do espaco. O studio entrara em contato para entender sua necessidade."
            />
            <div className="mt-10 space-y-5 border-y border-line py-8 text-muted">
              <p>
                <strong className="text-charcoal">WhatsApp:</strong>{" "}
                <a href={`https://wa.me/${siteConfig.whatsapp}`} className="hover:text-gold">
                  {siteConfig.whatsappDisplay}
                </a>
              </p>
              <p>
                <strong className="text-charcoal">Instagram:</strong>{" "}
                <a
                  href={`https://instagram.com/${siteConfig.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  @{siteConfig.instagram}
                </a>
              </p>
              <p>
                <strong className="text-charcoal">E-mail:</strong>{" "}
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                "Ola, gostaria de conversar sobre um projeto com o Studio Andrea Zanoni.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex bg-moss px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-charcoal"
              aria-label="Falar diretamente com o Studio Andrea Zanoni pelo WhatsApp"
            >
              Falar diretamente pelo WhatsApp
            </Link>
          </div>
          <div className="border border-line bg-surface p-6 shadow-[0_24px_80px_rgba(31,33,29,0.06)] md:p-9">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
