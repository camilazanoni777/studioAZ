import { testimonials } from "@/lib/site";

export function TestimonialGrid() {
  return (
    <div
      className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:thin] [scrollbar-color:rgba(169,134,74,0.45)_transparent] md:-mx-0 md:px-0"
      aria-label="Carrossel de depoimentos"
    >
      {testimonials.map((item) => (
        <article
          key={`${item.name}-${item.context}`}
          className="flex min-h-[260px] min-w-[82%] snap-start flex-col justify-between border border-line bg-surface p-6 transition duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-[0_18px_55px_rgba(31,33,29,0.07)] sm:min-w-[48%] lg:min-w-[31%]"
        >
          <p className="font-serif text-xl leading-8 text-charcoal md:text-2xl">&ldquo;{item.quote}&rdquo;</p>
          <div className="mt-6 border-t border-line pt-4">
            <p className="text-sm font-semibold text-charcoal md:text-base">{item.name}</p>
            <p className="mt-1 text-sm text-muted">{item.context}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
