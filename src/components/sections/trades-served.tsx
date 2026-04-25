import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Ordered by retainer potential, lifetime value and ClickSmith fit.
// Hub page: /trades. Each item links to /trades/[slug] for the unique playbook.
const trades = [
  { slug: "builders", name: "Builders" },
  { slug: "solar", name: "Solar Installers" },
  { slug: "pool-builders", name: "Pool Builders" },
  { slug: "renovators", name: "Renovators" },
  { slug: "hvac", name: "HVAC / Air Con" },
  { slug: "roofers", name: "Roofers" },
  { slug: "plumbers", name: "Plumbers" },
  { slug: "electricians", name: "Electricians" },
  { slug: "landscapers", name: "Landscapers" },
  { slug: "concreters", name: "Concreters" },
  { slug: "painters", name: "Painters" },
  { slug: "pest-control", name: "Pest Control" },
];

export function TradesServed() {
  return (
    <section
      aria-labelledby="trades-heading"
      className="bg-[var(--color-background)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
            Trades we serve
          </p>
          <h2
            id="trades-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            Built for how your trade actually wins work.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            Each trade has its own playbook. A sparky's buyer searches differently than a solar customer.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {trades.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/trades/${t.slug}`}
                className="group flex h-full items-center justify-between gap-2 rounded-lg border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition-all hover:border-[var(--color-primary)] hover:shadow-md"
              >
                <span>{t.name}</span>
                <ArrowRight
                  className="h-4 w-4 text-[var(--color-muted-foreground)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--color-action)]"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-[var(--color-muted-foreground)]">
          See all 12 trade playbooks?{" "}
          <Link
            href="/trades"
            className="font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
          >
            Browse the trades hub →
          </Link>
        </p>
      </div>
    </section>
  );
}
