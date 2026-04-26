import nodemailer, { type Transporter } from "nodemailer";

/**
 * Email delivery via Hostinger SMTP.
 *
 * Required env vars (set in Vercel > Settings > Environment Variables):
 *   SMTP_HOST   e.g. smtp.hostinger.com
 *   SMTP_PORT   465 (SSL) or 587 (STARTTLS)
 *   SMTP_USER   full mailbox address, e.g. discover@clicksmith.com.au
 *   SMTP_PASS   mailbox password
 *   SMTP_TO     recipient; defaults to SMTP_USER if unset
 *
 * If any required var is missing, sender returns `{ delivered: false }`
 * without throwing. Callers should fall back to a console log so submissions
 * are never silently lost.
 */

export type AuditSubmission = {
  name: string;
  email: string;
  phone: string;
  trade: string;
  suburb: string;
  submittedAt: string;
};

export type AuditEnrichment = {
  email: string;
  businessName: string;
  serviceArea: string;
  primaryProblem: string;
  submittedAt: string;
};

export type MailResult =
  | { delivered: true; messageId: string }
  | { delivered: false; reason: string };

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) return null;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return cachedTransporter;
}

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ─────────────────────────────────────────────────────────────
// STEP 1 — INITIAL BOOKING EMAIL
// ─────────────────────────────────────────────────────────────
function renderAuditEmail(s: AuditSubmission) {
  const subject = `New lead: ${s.name} — ${s.trade}, ${s.suburb}`;

  const text = [
    `New ClickSmith audit request (Step 1)`,
    ``,
    `Name:    ${s.name}`,
    `Email:   ${s.email}`,
    `Mobile:  ${s.phone}`,
    `Trade:   ${s.trade}`,
    `Suburb:  ${s.suburb}`,
    ``,
    `Submitted: ${s.submittedAt}`,
    ``,
    `If they fill in Step 2, you'll get a follow-up email with their`,
    `business name, service area, and primary marketing pain.`,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0a0a0a;">
      <div style="display:inline-block;background:#FFEDD5;color:#C2410C;padding:4px 10px;border-radius:999px;font-size:11px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">
        New lead · Step 1
      </div>
      <h2 style="margin:12px 0 16px;font-size:20px;">${escapeHtml(s.name)} — ${escapeHtml(s.trade)} · ${escapeHtml(s.suburb)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        <tr><td style="padding:8px 0;color:#525252;width:90px;">Name</td><td style="padding:8px 0;"><strong>${escapeHtml(s.name)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(s.email)}" style="color:#0a0a0a;text-decoration:none;"><strong>${escapeHtml(s.email)}</strong></a></td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Mobile</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(s.phone)}" style="color:#0a0a0a;text-decoration:none;"><strong>${escapeHtml(s.phone)}</strong></a></td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Trade</td><td style="padding:8px 0;"><strong>${escapeHtml(s.trade)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Suburb</td><td style="padding:8px 0;"><strong>${escapeHtml(s.suburb)}</strong></td></tr>
      </table>
      <p style="margin:24px 0 0;font-size:13px;color:#525252;border-top:1px solid #e5e5e5;padding-top:14px;">
        Submitted: ${escapeHtml(s.submittedAt)}<br/>
        If Step 2 is filled in, you'll get a follow-up email with business name, service area, and their main marketing pain.
      </p>
    </div>
  `.trim();

  return { subject, text, html };
}

export async function sendAuditEmail(
  submission: AuditSubmission,
): Promise<MailResult> {
  const transporter = getTransporter();
  if (!transporter)
    return { delivered: false, reason: "SMTP env vars not configured" };

  const from = process.env.SMTP_USER!;
  const to = process.env.SMTP_TO || from;
  const { subject, text, html } = renderAuditEmail(submission);

  try {
    const info = await transporter.sendMail({
      from: `"ClickSmith Website" <${from}>`,
      to,
      replyTo: `${submission.name} <${submission.email}>`,
      subject,
      text,
      html,
    });
    return { delivered: true, messageId: info.messageId };
  } catch (err) {
    const reason = err instanceof Error ? err.message : "Unknown SMTP error";
    return { delivered: false, reason };
  }
}

// ─────────────────────────────────────────────────────────────
// STEP 2 — ENRICHMENT FOLLOW-UP EMAIL
// ─────────────────────────────────────────────────────────────
function renderEnrichmentEmail(e: AuditEnrichment) {
  const subject = `Lead detail: ${e.email} — ${e.primaryProblem || "(no problem stated)"}`;

  const text = [
    `Step 2 enrichment for lead: ${e.email}`,
    ``,
    `Business name:   ${e.businessName || "(not provided)"}`,
    `Service area:    ${e.serviceArea || "(not provided)"}`,
    `Primary problem: ${e.primaryProblem || "(not provided)"}`,
    ``,
    `Submitted: ${e.submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0a0a0a;">
      <div style="display:inline-block;background:#FEF3C7;color:#92400E;padding:4px 10px;border-radius:999px;font-size:11px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">
        Lead detail · Step 2 enrichment
      </div>
      <h2 style="margin:12px 0 16px;font-size:20px;">Follow-up details for ${escapeHtml(e.email)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        <tr><td style="padding:8px 0;color:#525252;width:140px;">Business name</td><td style="padding:8px 0;"><strong>${escapeHtml(e.businessName || "(not provided)")}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Service area</td><td style="padding:8px 0;"><strong>${escapeHtml(e.serviceArea || "(not provided)")}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#525252;">Primary problem</td><td style="padding:8px 0;"><strong>${escapeHtml(e.primaryProblem || "(not provided)")}</strong></td></tr>
      </table>
      <p style="margin:24px 0 0;font-size:13px;color:#525252;border-top:1px solid #e5e5e5;padding-top:14px;">
        Submitted: ${escapeHtml(e.submittedAt)}<br/>
        Match this back to the Step 1 booking email by ${escapeHtml(e.email)}.
      </p>
    </div>
  `.trim();

  return { subject, text, html };
}

export async function sendAuditEnrichment(
  enrichment: AuditEnrichment,
): Promise<MailResult> {
  const transporter = getTransporter();
  if (!transporter)
    return { delivered: false, reason: "SMTP env vars not configured" };

  const from = process.env.SMTP_USER!;
  const to = process.env.SMTP_TO || from;
  const { subject, text, html } = renderEnrichmentEmail(enrichment);

  try {
    const info = await transporter.sendMail({
      from: `"ClickSmith Website" <${from}>`,
      to,
      replyTo: enrichment.email
        ? `Lead <${enrichment.email}>`
        : from,
      subject,
      text,
      html,
    });
    return { delivered: true, messageId: info.messageId };
  } catch (err) {
    const reason = err instanceof Error ? err.message : "Unknown SMTP error";
    return { delivered: false, reason };
  }
}
