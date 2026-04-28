import Link from "next/link";
import { ArrowRight, Megaphone, Zap, Repeat, Workflow } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Bring the right work in",
    benefit:
      "Local SEO, Google Ads and a website that converts — tuned to your trade and your patch.",
    outcomes: [
      "Rank in the Google map pack",
      "Ads that pay back from week one",
      "A site built to book jobs, not just look good",
    ],
  },
  {
    icon: Zap,
    title: "Win every lead",
    benefit:
      "AI replies in 60 seconds, qualifies the job, drafts the quote and chases till they say yes or no.",
    outcomes: [
      "Replies day or night, in your voice",
      "Same-day quotes, no more 10pm kitchen-table sessions",
      "Booked jobs straight to your calendar",
    ],
  },
  {
    icon: Repeat,
    title: "Keep customers coming back",
    benefit:
      "Review chases, follow-ups and seasonal nudges so the customer you won today rings you again next year.",
    outcomes: [
      "Auto Google review requests after every job",
      "Maintenance reminders that bring repeat work",
      "Referral loops that bring their mates in",
    ],
  },
  {
    icon: Workflow,
    title: "Smooth out the admin",
    benefit:
      "Quotes, invoices, scheduling and follow-ups handled in the background while you're on the tools.",
    outcomes: [
      "Invoices chased automatically until paid",
      "Bookings without the back-and-forth",
      "8–10 hours a week back, on average",
    ],
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
              The whole system
            </p>
            <h2
              id="services-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              Four parts. One running business.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-action)]"
          >
            See all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, benefit, outcomes }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl border border-[var(--color-border)] bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/5 ring-1 ring-inset ring-[var(--color-primary)]/10"
                aria-hidden="true"
              >
                <Icon className="h-6 w-6 text-[var(--color-primary)]" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[var(--color-primary)]">
                {title}
              </h3>
              <p className="mt-2 text-[var(--color-muted-foreground)]">
                {benefit}
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-[var(--color-secondary)]">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-action)]"
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--color-muted-foreground)]">
          Take all four, or just the bit that&apos;s broken. We won&apos;t push.
        </p>
      </div>
    </section>
  );
}
