import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    q: "How much does it cost?",
    a: "Most tradies invest $2–4k/month with us for done-for-you marketing. That's less than one missed job for most trades. We build a plan in the free audit so you'll know the number before anything's signed. Prefer DIY? Playbooks start at $49.",
  },
  {
    q: "Am I locked in?",
    a: "No. Month-to-month. If we're not making your phone ring, you leave — and you keep your website, ad accounts, and Google Business Profile. We don't hold your marketing hostage.",
  },
  {
    q: "I tried marketing before and it didn't work. Why is this different?",
    a: "Because most 'marketing agencies' don't get trades. They sell vanity metrics. We only track one thing: booked jobs. If your cost-per-job isn't dropping month over month, we're not doing our job.",
  },
  {
    q: "Do you work with my trade?",
    a: "If your customers search Google to find someone like you — yes. Plumbers, sparkies, solar, builders, roofers, HVAC, painters, concreters, landscapers, carpenters, tilers, glaziers. 30+ trades and counting.",
  },
  {
    q: "How long until I see leads?",
    a: "Google Ads can bring leads in 48 hours. Local SEO builds over 3–6 months but pays back for years. We usually run both — fast wins while the long-term plays compound.",
  },
  {
    q: "What makes you different from hipages or Airtasker?",
    a: "Directories sell the same lead to 5 tradies. You race to the bottom on price. We build YOUR marketing, on YOUR website, bringing YOU exclusive leads. Once it's running, you don't pay per lead.",
  },
  {
    q: "What if I want to do everything myself?",
    a: "Buy the playbook. Same systems, written step-by-step, with templates and scripts. Most tradies who DIY need 5–10 hours/week. If that's too much, we're here when you're ready.",
  },
  {
    q: "Can you help me rank in Google Maps?",
    a: "That's literally step one. Most tradie searches happen in Google Maps — 'plumber near me', 'emergency electrician Wollongong'. We optimise your Google Business Profile, build local citations, and earn real reviews. That's how you win the map pack.",
  },
];

export function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
            Straight answers
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            What tradies usually ask.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-[var(--color-border)] bg-white p-0 shadow-sm transition-shadow open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[var(--color-primary)] [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{item.q}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-[var(--color-muted-foreground)] transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-6 pb-5 pt-0 text-[var(--color-muted-foreground)] leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* FAQPage JSON-LD for rich results in Google */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
