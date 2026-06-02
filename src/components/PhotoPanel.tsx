import Image from "next/image";

type PhotoPanelProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function PhotoPanel({ src, alt, priority = false }: PhotoPanelProps) {
  return (
    <div className="relative min-h-[420px] overflow-hidden bg-sand">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}
