import { Megaphone, Zap, Repeat } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Megaphone,
    title: "Bring the right work in",
    body: "Local SEO, Google Ads and a website built to convert — tuned to bring you the kind of jobs you actually want, not the price-shoppers and tyre-kickers.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Win it before the next bloke does",
    body: "AI replies to every lead in under 60 seconds, drafts the quote in your voice, and chases until they say yes or no. The fastest tradie wins. We make sure that's you.",
  },
  {
    number: "03",
    icon: Repeat,
    title: "Keep them coming back",
    body: "Automated follow-ups, review chases and seasonal nudges so the customer you won today rings you again next year — and sends a mate too.",
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
            Bring it. Win it. Keep it.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            That&apos;s the whole game. Most agencies stop at the first one. We do all three.
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
