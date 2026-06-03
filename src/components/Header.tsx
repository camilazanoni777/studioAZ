import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm text-charcoal lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-gold focus-visible:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={`https://wa.me/${siteConfig.whatsapp}`}
          aria-label="Agendar conversa pelo WhatsApp"
          className="hidden border border-moss px-5 py-3 text-sm font-medium text-moss transition duration-300 hover:-translate-y-0.5 hover:bg-moss hover:text-white focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:inline-flex"
          target="_blank"
          rel="noreferrer"
        >
          Agendar conversa
        </Link>
      </div>
      <nav
        className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 pb-4 text-sm text-muted lg:hidden"
        aria-label="Navegação mobile"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 border border-line bg-surface px-3 py-2 transition hover:border-gold hover:text-moss"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
