"use server";

import { sendAuditEmail } from "@/lib/email";

/**
 * Server actions for the ClickSmith site.
 *
 * Audit form flow:
 *   1. Validate input server-side.
 *   2. Always console.log the submission (permanent backup, visible in
 *      Vercel > Deployments > Logs — never lose a lead).
 *   3. Send email notification via Hostinger SMTP. Needs these env vars:
 *        SMTP_HOST   smtp.hostinger.com
 *        SMTP_PORT   465
 *        SMTP_USER   discover@clicksmith.com.au
 *        SMTP_PASS   <hostinger mailbox password>
 *        SMTP_TO     discover@clicksmith.com.au (optional; defaults to SMTP_USER)
 *      If vars are missing or SMTP fails, we still show success to the user
 *      and rely on the console log so leads are never silently dropped.
 *
 * Future: persist to Supabase for long-term storage + dashboard. Not wired yet.
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

  const submission = {
    ...result.data,
    submittedAt: new Date().toISOString(),
  };

  // Always log — permanent backup. Visible in Vercel -> Deployments -> Logs.
  console.log("[audit-form-submission]", submission);

  // Try SMTP delivery. Failure is non-fatal; the user still sees success,
  // and the submission survives in the console log above.
  const mailResult = await sendAuditEmail(submission);
  if (!mailResult.delivered) {
    console.warn("[audit-email-not-delivered]", {
      reason: mailResult.reason,
      submission,
    });
  }

  return {
    status: "success",
    message: "Thanks — we'll reach out within 24 hours.",
  };
}
