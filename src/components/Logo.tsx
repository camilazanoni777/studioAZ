import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Studio Andrea Zanoni">
      <span className="logo-mark grid h-10 w-10 place-items-center border border-gold/50 bg-surface text-sm font-medium text-moss">
        AZ
      </span>
      <span className="leading-none">
        <span className="block font-serif text-xl font-medium text-charcoal">Studio Andrea Zanoni</span>
        <span className="block text-xs text-muted">Arquitetura e interiores</span>
      </span>
    </Link>
  );
}
