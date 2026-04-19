"use client";

import { useActionState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { submitAudit, type AuditFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";

const trades = [
  "Plumber",
  "Electrician",
  "Solar installer",
  "Builder",
  "Roofer",
  "HVAC / Air Con",
  "Painter",
  "Concreter",
  "Landscaper",
  "Carpenter",
  "Tiler",
  "Glazier",
  "Other",
];

const initialState: AuditFormState = { status: "idle" };

export function AuditForm() {
  const [state, formAction, isPending] = useActionState(
    submitAudit,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        id="audit-form"
        className="rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center shadow-sm"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-success)]/10">
          <Check className="h-6 w-6 text-[var(--color-success)]" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
          Got it.
        </h3>
        <p className="mt-2 text-[var(--color-muted-foreground)]">
          {state.message}
        </p>
      </div>
    );
  }

  const fe = state.fieldErrors;

  return (
    <form
      id="audit-form"
      action={formAction}
      noValidate
      className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm md:p-7"
    >
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-muted)] px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-action)]" />
          Free · 30 minutes
        </span>
        <h2 className="mt-3 text-xl font-semibold text-[var(--color-primary)] md:text-2xl">
          Book your lead audit
        </h2>
        <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
          Tell us about your patch. We&rsquo;ll show you exactly where leads are leaking.
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <Field
          label="Your name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Chris"
          error={fe?.name}
        />
        <Field
          label="Mobile"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="04XX XXX XXX"
          error={fe?.phone}
        />
        <SelectField
          label="Trade"
          name="trade"
          options={trades}
          error={fe?.trade}
        />
        <Field
          label="Suburb"
          name="suburb"
          type="text"
          autoComplete="address-level2"
          placeholder="e.g. Wollongong"
          error={fe?.suburb}
        />
      </div>

      {state.status === "error" && !fe && state.message && (
        <p
          role="alert"
          className="mt-3 text-sm text-[var(--color-destructive)]"
        >
          {state.message}
        </p>
      )}

      <Button
        type="submit"
        variant="action"
        size="lg"
        disabled={isPending}
        className="mt-6 w-full"
      >
        {isPending ? "Sending…" : "Send it through"}
        {!isPending && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
      </Button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[var(--color-muted-foreground)]">
        <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
        No lock-ins. We reply within 24 hours.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  placeholder?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  error?: string;
};

function Field({
  label,
  name,
  type,
  autoComplete,
  placeholder,
  inputMode,
  error,
}: FieldProps) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[var(--color-primary)]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        required
        className={`mt-1 block h-11 w-full rounded-lg border bg-white px-3.5 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)]/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] ${
          error
            ? "border-[var(--color-destructive)]"
            : "border-[var(--color-border)]"
        }`}
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1 text-sm text-[var(--color-destructive)]"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[var(--color-primary)]"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        required
        className={`mt-1 block h-11 w-full rounded-lg border bg-white px-3 text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] ${
          error
            ? "border-[var(--color-destructive)]"
            : "border-[var(--color-border)]"
        }`}
      >
        <option value="" disabled>
          Pick your trade…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1 text-sm text-[var(--color-destructive)]"
        >
          {error}
        </p>
      )}
    </div>
  );
}
