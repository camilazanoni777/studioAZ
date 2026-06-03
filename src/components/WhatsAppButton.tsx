import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Ol%C3%A1,%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20do%20Studio%20Andrea%20Zanoni.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-moss text-sm font-semibold text-white shadow-[0_18px_40px_rgba(20,20,19,0.24)] transition hover:-translate-y-1 hover:bg-charcoal focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      WA
    </a>
  );
}
