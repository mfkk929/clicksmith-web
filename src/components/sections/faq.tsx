import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    q: "What does \"we don't just bring leads\" actually mean?",
    a: "Most agencies stop the moment a lead lands in your inbox. We bring the lead AND install the AI that replies in 60 seconds, drafts the quote in your voice, follows up till they say yes or no, then keeps that customer on a string so they ring you again next year. Marketing is one part. The system around it is the rest.",
  },
  {
    q: "Do I have to take everything, or can I pick parts?",
    a: "Pick what's broken. If your marketing's fine but leads die in your inbox, we just install the follow-up. If your admin is killing you but your phone's quiet, we fix both. We won't push you to buy bits you don't need.",
  },
  {
    q: "What's the AI part — is it complicated to use?",
    a: "You don't use it. We install it, train it on your voice and your prices, and it runs inside the tools you already have (Gmail, ServiceM8, Tradify, Xero, etc.). Most clients never touch a new app. Their week just gets quieter.",
  },
  {
    q: "How much does it cost?",
    a: "Done-for-you setups generally sit between $2–4k/month depending on what you take. We work out the exact number in the free audit so you'll know before signing anything. Prefer to do it yourself? The playbooks are free while we're early.",
  },
  {
    q: "Am I locked in?",
    a: "No. Month-to-month. You own your website, ad accounts, Google Business Profile and every workflow we build. If we're not earning our keep, you walk and keep the lot.",
  },
  {
    q: "You're a startup. Why should I trust you?",
    a: "Honest answer: because we'll tell you what's actually wrong with your business in the audit even if you don't hire us, because we don't lock you in, because the founder's name is on it, and because we're picking our first wave of clients carefully — we'd rather have one happy plumber than ten so-so ones. If you want a 200-person agency with a glossy deck, we're not it.",
  },
  {
    q: "Do you work with my trade?",
    a: "If your customers Google to find someone like you — yes. Plumbers, sparkies, builders, solar, roofers, HVAC, painters, concreters, landscapers, renovators, pest control. Each trade gets the system tuned for how its customers actually search and decide.",
  },
  {
    q: "I'm not techy. Will I be able to handle this?",
    a: "Yes. Everything's installed for you. You get one simple dashboard and a number to text when you want anything changed. No new apps to learn, no training, no \"strategy decks.\" If something needs your input, it's a one-tap approval on your phone.",
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
