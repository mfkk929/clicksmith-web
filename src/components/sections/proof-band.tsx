const pillars = [
  "Marketing that brings the work in",
  "AI that wins the lead before the next bloke does",
  "Systems that keep customers coming back",
];

export function ProofBand() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="border-y border-[var(--color-border)] bg-white"
    >
      <h2 id="proof-heading" className="sr-only">
        What ClickSmith does
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-[var(--color-muted-foreground)]">
          {pillars.map((label, i) => (
            <li
              key={label}
              className={
                "inline-flex items-center gap-2 " +
                (i > 0
                  ? "before:mr-6 before:hidden before:h-1 before:w-1 before:rounded-full before:bg-[var(--color-border)] sm:before:inline-block"
                  : "")
              }
            >
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
