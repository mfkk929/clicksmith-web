"use client";

import { useActionState, useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  submitAudit,
  enrichAudit,
  type AuditFormState,
  type AuditEnrichmentState,
} from "@/app/actions";
import { PRIMARY_PROBLEMS } from "@/lib/audit-options";
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

const initialStep1: AuditFormState = { status: "idle" };
const initialStep2: AuditEnrichmentState = { status: "idle" };

type Stage = "step1" | "step2" | "final";

export function AuditForm() {
  const [stage, setStage] = useState<Stage>("step1");

  const [s1State, s1Action, s1Pending] = useActionState(
    submitAudit,
    initialStep1,
  );
  const [s2State, s2Action, s2Pending] = useActionState(
    enrichAudit,
    initialStep2,
  );

  // Auto-advance to step 2 when step 1 succeeds
  useEffect(() => {
    if (s1State.status === "success" && stage === "step1") setStage("step2");
  }, [s1State.status, stage]);

  // Auto-advance to final when step 2 succeeds
  useEffect(() => {
    if (s2State.status === "success" && stage === "step2") setStage("final");
  }, [s2State.status, stage]);

  if (stage === "final") {
    return <FinalCard message={s2State.message ?? s1State.message} />;
  }

  if (stage === "step2") {
    return (
      <Step2
        bookedEmail={s1State.bookedEmail ?? ""}
        action={s2Action}
        state={s2State}
        pending={s2Pending}
        onSkip={() => setStage("final")}
      />
    );
  }

  return <Step1 action={s1Action} state={s1State} pending={s1Pending} />;
}

// ─────────────────────────────────────────────────────────────
// STEP 1
// ─────────────────────────────────────────────────────────────
function Step1({
  action,
  state,
  pending,
}: {
  action: (formData: FormData) => void;
  state: AuditFormState;
  pending: boolean;
}) {
  const fe = state.fieldErrors;

  return (
    <form
      id="audit-form"
      action={action}
      noValidate
      className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm md:p-7"
    >
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-muted)] px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-action)]" />
          Step 1 of 2 · Free · 30 min
        </span>
        <h2 className="mt-3 text-xl font-semibold text-[var(--color-primary)] md:text-2xl">
          Book your lead audit
        </h2>
        <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
          Tell us where you&rsquo;re based. Step 2 (optional) helps us prep a
          better audit.
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <Field
          label="Your name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Chris"
          required
          error={fe?.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@business.com.au"
          required
          error={fe?.email}
        />
        <Field
          label="Mobile"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="04XX XXX XXX"
          required
          error={fe?.phone}
        />
        <SelectField
          label="Trade"
          name="trade"
          options={trades}
          placeholder="Pick your trade…"
          required
          error={fe?.trade}
        />
        <Field
          label="Suburb"
          name="suburb"
          type="text"
          autoComplete="address-level2"
          placeholder="e.g. Wollongong"
          required
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
        disabled={pending}
        className="mt-6 w-full"
      >
        {pending ? "Sending…" : "Continue to Step 2"}
        {!pending && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
      </Button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[var(--color-muted-foreground)]">
        <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
        No lock-ins · We reply within 24 hours
      </p>
    </form>
  );
}

// ─────────────────────────────────────────────────────────────
// STEP 2
// ─────────────────────────────────────────────────────────────
function Step2({
  bookedEmail,
  action,
  state,
  pending,
  onSkip,
}: {
  bookedEmail: string;
  action: (formData: FormData) => void;
  state: AuditEnrichmentState;
  pending: boolean;
  onSkip: () => void;
}) {
  const fe = state.fieldErrors;

  return (
    <form
      id="audit-form"
      action={action}
      noValidate
      className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm md:p-7"
    >
      <input type="hidden" name="email" value={bookedEmail} />

      <div className="mb-5 flex items-start gap-3 rounded-lg border border-[var(--color-success)]/30 bg-[var(--color-success)]/5 p-3">
        <Check
          className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-success)]"
          aria-hidden="true"
        />
        <div className="text-sm">
          <div className="font-semibold text-[var(--color-primary)]">
            Step 1 in. We&rsquo;ll be in touch within 24 hours.
          </div>
          <div className="mt-0.5 text-[var(--color-muted-foreground)]">
            Confirmation sent to {bookedEmail || "your inbox"}.
          </div>
        </div>
      </div>

      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-action)]">
          <Sparkles className="h-3 w-3" />
          Step 2 of 2 · Optional
        </span>
        <h2 className="mt-3 text-xl font-semibold text-[var(--color-primary)] md:text-2xl">
          Help us prep a sharper audit
        </h2>
        <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
          Three quick fields — saves us 10 minutes of warm-up on the call.
          Skip if you&rsquo;re short on time.
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <Field
          label="Business name"
          name="businessName"
          type="text"
          autoComplete="organization"
          placeholder="e.g. Coastal Plumbing Co"
          required={false}
          error={fe?.businessName}
        />
        <Field
          label="Service area / where do you actually work?"
          name="serviceArea"
          type="text"
          autoComplete="off"
          placeholder="e.g. Illawarra + Southern Sydney"
          required={false}
          error={fe?.serviceArea}
          help="Different from your home suburb — the area you actually drive to."
        />
        <RadioGroup
          label="What's costing you most right now?"
          name="primaryProblem"
          options={[...PRIMARY_PROBLEMS]}
          error={fe?.primaryProblem}
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

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3">
        <Button
          type="submit"
          variant="action"
          size="lg"
          disabled={pending}
          className="w-full"
        >
          {pending ? "Sending…" : "Send details"}
          {!pending && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="lg"
          onClick={onSkip}
          disabled={pending}
          className="w-full sm:w-auto"
        >
          Skip — I&rsquo;m done
        </Button>
      </div>
    </form>
  );
}

// ─────────────────────────────────────────────────────────────
// FINAL CONFIRMATION
// ─────────────────────────────────────────────────────────────
function FinalCard({ message }: { message?: string }) {
  return (
    <div
      id="audit-form"
      className="rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center shadow-sm"
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-success)]/10">
        <Check
          className="h-6 w-6 text-[var(--color-success)]"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
        You&rsquo;re booked.
      </h3>
      <p className="mt-2 text-[var(--color-muted-foreground)]">
        {message ?? "We'll reach out within 24 hours to confirm a slot."}
      </p>
      <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
        While you wait, browse our{" "}
        <a
          href="/playbooks"
          className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
        >
          playbooks
        </a>{" "}
        or your{" "}
        <a
          href="/trades"
          className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
        >
          trade-specific guide
        </a>
        .
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FIELD COMPONENTS
// ─────────────────────────────────────────────────────────────
type FieldProps = {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  placeholder?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  error?: string;
  required?: boolean;
  help?: string;
};

function Field({
  label,
  name,
  type,
  autoComplete,
  placeholder,
  inputMode,
  error,
  required = true,
  help,
}: FieldProps) {
  const errorId = `${name}-error`;
  const helpId = `${name}-help`;
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[var(--color-primary)]"
      >
        {label}
        {!required && (
          <span className="ml-1 text-xs font-normal text-[var(--color-muted-foreground)]">
            (optional)
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={
          error ? errorId : help ? helpId : undefined
        }
        required={required}
        className={`mt-1 block h-11 w-full rounded-lg border bg-white px-3.5 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)]/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] ${
          error
            ? "border-[var(--color-destructive)]"
            : "border-[var(--color-border)]"
        }`}
      />
      {help && !error && (
        <p
          id={helpId}
          className="mt-1 text-xs text-[var(--color-muted-foreground)]"
        >
          {help}
        </p>
      )}
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
  placeholder,
  error,
  required = true,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  error?: string;
  required?: boolean;
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
        required={required}
        className={`mt-1 block h-11 w-full rounded-lg border bg-white px-3 text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] ${
          error
            ? "border-[var(--color-destructive)]"
            : "border-[var(--color-border)]"
        }`}
      >
        <option value="" disabled>
          {placeholder}
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

function RadioGroup({
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
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="block text-sm font-medium text-[var(--color-primary)]">
        {label}
        <span className="ml-1 text-xs font-normal text-[var(--color-muted-foreground)]">
          (optional)
        </span>
      </legend>
      <div className="mt-2 space-y-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex cursor-pointer items-start gap-2.5 rounded-lg border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-primary)] hover:border-[var(--color-action)]"
          >
            <input
              type="radio"
              name={name}
              value={opt}
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-action)] focus:ring-[var(--color-ring)]"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1 text-sm text-[var(--color-destructive)]"
        >
          {error}
        </p>
      )}
    </fieldset>
  );
}
