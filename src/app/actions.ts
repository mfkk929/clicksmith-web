"use server";

/**
 * Server actions for the ClickSmith site.
 *
 * Current state: audit form validates input server-side and logs the submission
 * to the runtime console (visible in Vercel -> Deployments -> Logs). It does NOT
 * yet persist to a database or send an email.
 *
 * To wire real persistence + email alerts, do these three things (in order):
 *   1. Create a Supabase project. Add a table:
 *        create table audit_requests (
 *          id uuid primary key default gen_random_uuid(),
 *          created_at timestamptz default now(),
 *          name text not null,
 *          phone text not null,
 *          trade text not null,
 *          suburb text not null,
 *          ip text,
 *          user_agent text
 *        );
 *      Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel env vars.
 *   2. Set up Resend, verify clicksmith.com.au sending domain, add RESEND_API_KEY.
 *   3. Un-stub the two TODO blocks below (persistSubmission + notifyByEmail).
 */

export type AuditFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "phone" | "trade" | "suburb", string>>;
};

const ALLOWED_TRADES = [
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
] as const;

function validate(raw: FormData): {
  ok: true;
  data: { name: string; phone: string; trade: string; suburb: string };
} | {
  ok: false;
  fieldErrors: NonNullable<AuditFormState["fieldErrors"]>;
} {
  const name = String(raw.get("name") ?? "").trim();
  const phone = String(raw.get("phone") ?? "").trim();
  const trade = String(raw.get("trade") ?? "").trim();
  const suburb = String(raw.get("suburb") ?? "").trim();

  const fieldErrors: NonNullable<AuditFormState["fieldErrors"]> = {};

  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (name.length > 80) fieldErrors.name = "Name is too long.";

  const phoneDigits = phone.replace(/[^\d]/g, "");
  if (phoneDigits.length < 8) {
    fieldErrors.phone = "Please enter a valid phone number.";
  } else if (phoneDigits.length > 15) {
    fieldErrors.phone = "Phone number is too long.";
  }

  if (!ALLOWED_TRADES.includes(trade as (typeof ALLOWED_TRADES)[number])) {
    fieldErrors.trade = "Pick your trade.";
  }

  if (suburb.length < 2) fieldErrors.suburb = "Enter your suburb.";
  if (suburb.length > 80) fieldErrors.suburb = "Suburb is too long.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }
  return { ok: true, data: { name, phone, trade, suburb } };
}

export async function submitAudit(
  _prev: AuditFormState,
  formData: FormData,
): Promise<AuditFormState> {
  const result = validate(formData);

  if (!result.ok) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: result.fieldErrors,
    };
  }

  // TODO: persist to Supabase once SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY are set.
  // TODO: send notification email via Resend once RESEND_API_KEY is set.
  console.log("[audit-form-submission]", {
    ...result.data,
    submittedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: "Thanks — we'll reach out within 24 hours.",
  };
}
