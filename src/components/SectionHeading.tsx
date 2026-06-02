type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-4 text-sm font-medium text-gold">{eyebrow}</p> : null}
      <h2 className="font-serif text-4xl font-medium leading-tight text-charcoal md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-muted md:text-lg">{text}</p> : null}
    </div>
  );
}
