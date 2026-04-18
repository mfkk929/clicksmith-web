import { Star } from "lucide-react";

const proofItems = [
  { label: "Rated 5.0 on Google", stars: 5 },
  { label: "200+ tradies served", stars: null },
  { label: "Based in Sydney · Serving all of NSW", stars: null },
];

export function ProofBand() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="border-y border-[var(--color-border)] bg-white"
    >
      <h2 id="proof-heading" className="sr-only">
        Social proof
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-[var(--color-muted-foreground)]">
          {proofItems.map((item, i) => (
            <li
              key={item.label}
              className={
                "inline-flex items-center gap-2 " +
                (i > 0
                  ? "before:mr-6 before:hidden before:h-1 before:w-1 before:rounded-full before:bg-[var(--color-border)] sm:before:inline-block"
                  : "")
              }
            >
              {item.stars !== null && (
                <span
                  className="inline-flex items-center gap-0.5"
                  aria-hidden="true"
                >
                  {Array.from({ length: item.stars }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-[var(--color-warning)] text-[var(--color-warning)]"
                    />
                  ))}
                </span>
              )}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
