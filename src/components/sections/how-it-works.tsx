import { Search, Wrench, BellRing } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free lead audit",
    body: "30-minute call. We dig into your current marketing, your trade, and your patch. You leave with a clear plan — even if you don't hire us.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "We build the system",
    body: "Website, local SEO, Google Ads, Google Business Profile, AI-powered lead follow-up. Set up in 2–3 weeks. Nothing held hostage on our server.",
  },
  {
    number: "03",
    icon: BellRing,
    title: "Jobs land on your phone",
    body: "Real leads — not directory tyre-kickers. Weekly report shows what's working. Scale up the wins, cut the duds.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="bg-[var(--color-background)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
            How it works
          </p>
          <h2
            id="how-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            Three steps from chasing jobs to booking them.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            No jargon. No long contracts. No "strategy decks" you'll never read.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(({ number, icon: Icon, title, body }) => (
            <li
              key={number}
              className="relative flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6 text-[var(--color-action)]" />
                </span>
                <span className="font-display text-4xl font-bold tabular-nums text-[var(--color-muted)]">
                  {number}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--color-primary)]">
                {title}
              </h3>
              <p className="mt-3 text-[var(--color-muted-foreground)]">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
