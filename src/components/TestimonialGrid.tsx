import { testimonials } from "@/lib/site";

export function TestimonialGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((item) => (
        <article
          key={`${item.name}-${item.context}`}
          className="border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_24px_70px_rgba(31,33,29,0.08)]"
        >
          <p className="font-serif text-2xl leading-8 text-charcoal">&ldquo;{item.quote}&rdquo;</p>
          <div className="mt-8 border-t border-line pt-5">
            <p className="font-medium text-charcoal">{item.name}</p>
            <p className="mt-1 text-sm text-muted">{item.context}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
