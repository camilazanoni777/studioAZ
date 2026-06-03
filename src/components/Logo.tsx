import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Studio Andrea Zanoni">
      <Image
        src="/images/andrea-zanoni-symbol-transparent.png"
        alt=""
        width={512}
        height={512}
        className="h-11 w-11 object-contain"
        priority
      />
      <Image
        src="/images/andrea-zanoni-logo-transparent.png"
        alt="Studio Andrea Zanoni Arquitetura + Interiores"
        width={1981}
        height={793}
        className="h-auto w-[170px] object-contain sm:w-[210px]"
        priority
      />
    </Link>
  );
}
