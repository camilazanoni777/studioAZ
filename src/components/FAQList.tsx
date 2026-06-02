import { faqs } from "@/lib/site";

export function FAQList() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl text-charcoal">
            {item.question}
            <span className="grid h-8 w-8 shrink-0 place-items-center border border-line text-sm text-gold transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pt-4 leading-8 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
