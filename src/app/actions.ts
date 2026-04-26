"use server";

import { sendAuditEmail, sendAuditEnrichment } from "@/lib/email";
import { ALLOWED_TRADES, PRIMARY_PROBLEMS } from "@/lib/audit-options";

/**
 * Two-step audit form.
 *
 * Step 1 — submitAudit:
 *   Required: name, email, phone, trade, suburb.
 *   Saves baseline, sends primary booking email, returns submitted email so
 *   Step 2 can reference the same lead.
 *
 * Step 2 — enrichAudit (optional):
 *   Optional: businessName, serviceArea, primaryProblem.
 *   Sends a follow-up "enrichment" email referencing the email submitted in
 *   Step 1. If the user skips, the lead is already captured from Step 1.
 *
 * Both actions log to console (Vercel logs are the lead-of-last-resort) and
 * still return success even if SMTP delivery fails — leads are never silently
 * lost.
 */

// ─────────────────────────────────────────────────────────────
// STEP 1 STATE
// ─────────────────────────────────────────────────────────────
export type AuditFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** echoed back to the client so Step 2 can reference the same lead */
  bookedEmail?: string;
  fieldErrors?: Partial<
    Record<"name" | "email" | "phone" | "trade" | "suburb", string>
  >;
};

// ─────────────────────────────────────────────────────────────
// STEP 2 STATE
// ─────────────────────────────────────────────────────────────
export type AuditEnrichmentState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<
    Record<"businessName" | "serviceArea" | "primaryProblem", string>
  >;
};

// ─────────────────────────────────────────────────────────────
// VALIDATION HELPERS
// ─────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateStep1(raw: FormData):
  | {
      ok: true;
      data: {
        name: string;
        email: string;
        phone: string;
        trade: string;
        suburb: string;
      };
    }
  | { ok: false; fieldErrors: NonNullable<AuditFormState["fieldErrors"]> } {
  const name = String(raw.get("name") ?? "").trim();
  const email = String(raw.get("email") ?? "").trim();
  const phone = String(raw.get("phone") ?? "").trim();
  const trade = String(raw.get("trade") ?? "").trim();
  const suburb = String(raw.get("suburb") ?? "").trim();

  const fieldErrors: NonNullable<AuditFormState["fieldErrors"]> = {};

  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  else if (name.length > 80) fieldErrors.name = "Name is too long.";

  if (!EMAIL_RE.test(email))
    fieldErrors.email = "Please enter a valid email address.";
  else if (email.length > 200) fieldErrors.email = "Email is too long.";

  const phoneDigits = phone.replace(/[^\d]/g, "");
  if (phoneDigits.length < 8)
    fieldErrors.phone = "Please enter a valid phone number.";
  else if (phoneDigits.length > 15)
    fieldErrors.phone = "Phone number is too long.";

  if (!ALLOWED_TRADES.includes(trade as (typeof ALLOWED_TRADES)[number]))
    fieldErrors.trade = "Pick your trade.";

  if (suburb.length < 2) fieldErrors.suburb = "Enter your suburb.";
  else if (suburb.length > 80) fieldErrors.suburb = "Suburb is too long.";

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };
  return { ok: true, data: { name, email, phone, trade, suburb } };
}

function validateStep2(raw: FormData):
  | {
      ok: true;
      data: {
        email: string; // for matching back to step 1
        businessName: string;
        serviceArea: string;
        primaryProblem: string;
      };
    }
  | {
      ok: false;
      fieldErrors: NonNullable<AuditEnrichmentState["fieldErrors"]>;
    } {
  const email = String(raw.get("email") ?? "").trim();
  const businessName = String(raw.get("businessName") ?? "").trim();
  const serviceArea = String(raw.get("serviceArea") ?? "").trim();
  const primaryProblem = String(raw.get("primaryProblem") ?? "").trim();

  const fieldErrors: NonNullable<AuditEnrichmentState["fieldErrors"]> = {};

  // All step-2 fields are optional but if provided we sanity-check length.
  if (businessName.length > 120)
    fieldErrors.businessName = "Business name is too long.";
  if (serviceArea.length > 200)
    fieldErrors.serviceArea = "Keep it under 200 characters.";
  if (
    primaryProblem &&
    !PRIMARY_PROBLEMS.includes(
      primaryProblem as (typeof PRIMARY_PROBLEMS)[number],
    )
  ) {
    fieldErrors.primaryProblem = "Pick one of the listed options.";
  }

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };

  return {
    ok: true,
    data: { email, businessName, serviceArea, primaryProblem },
  };
}

// ─────────────────────────────────────────────────────────────
// STEP 1 ACTION
// ─────────────────────────────────────────────────────────────
export async function submitAudit(
  _prev: AuditFormState,
  formData: FormData,
): Promise<AuditFormState> {
  const result = validateStep1(formData);

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

  console.log("[audit-form-submission-step1]", submission);

  const mailResult = await sendAuditEmail(submission);
  if (!mailResult.delivered) {
    console.warn("[audit-email-not-delivered]", {
      reason: mailResult.reason,
      submission,
    });
  }

  return {
    status: "success",
    message: "Got it — we'll reach out within 24 hours.",
    bookedEmail: submission.email,
  };
}

// ─────────────────────────────────────────────────────────────
// STEP 2 ACTION
// ─────────────────────────────────────────────────────────────
export async function enrichAudit(
  _prev: AuditEnrichmentState,
  formData: FormData,
): Promise<AuditEnrichmentState> {
  const result = validateStep2(formData);

  if (!result.ok) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: result.fieldErrors,
    };
  }

  const enrichment = {
    ...result.data,
    submittedAt: new Date().toISOString(),
  };

  console.log("[audit-form-submission-step2]", enrichment);

  const mailResult = await sendAuditEnrichment(enrichment);
  if (!mailResult.delivered) {
    console.warn("[audit-enrichment-email-not-delivered]", {
      reason: mailResult.reason,
      enrichment,
    });
  }

  return {
    status: "success",
    message: "Cheers — that'll save us 10 minutes on the call.",
  };
}
