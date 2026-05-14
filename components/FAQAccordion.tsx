import { faqs } from "@/lib/site-data";

export function FAQAccordion() {
  return (
    <div className="mx-auto max-w-4xl divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white shadow-soft">
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-charcoal">
            {faq.question}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand text-charcoal transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
