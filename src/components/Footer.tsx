import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="brightness-0 invert">
            <Logo />
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Arquitetura e interiores com olhar personalizado para familias que desejam viver melhor em
            espacos sofisticados, funcionais e atemporais.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl">Mapa do site</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/72">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl">Contato</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-white/72">
            <p>{siteConfig.location}</p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </p>
            <p>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} className="transition hover:text-white">
                WhatsApp {siteConfig.whatsappDisplay}
              </a>
            </p>
            <p>
              <a
                href={`https://instagram.com/${siteConfig.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                @{siteConfig.instagram}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/55">
        © {new Date().getFullYear()} Studio Andrea Zanoni. Todos os direitos reservados.
      </div>
    </footer>
  );
}
