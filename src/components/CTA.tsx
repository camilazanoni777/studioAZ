import Link from "next/link";
import { siteConfig } from "@/lib/site";

type CTAProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  buttonLabel?: string;
};

export function CTA({
  eyebrow = "Atendimento personalizado",
  title = "Vamos transformar seu espaco com intencao, beleza e seguranca.",
  text,
  buttonLabel = "Chamar no WhatsApp",
}: CTAProps) {
  return (
    <section className="bg-moss px-5 py-20 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-white/70">{eyebrow}</p>
          <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">{title}</h2>
          {text ? <p className="mt-5 max-w-2xl leading-8 text-white/72">{text}</p> : null}
        </div>
        <Link
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com o Studio Andrea Zanoni pelo WhatsApp"
          className="inline-flex w-fit border border-white/70 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-moss focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moss"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
