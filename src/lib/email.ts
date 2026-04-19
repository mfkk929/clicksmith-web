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
 * If any required var is missing, sendMail() returns `{ delivered: false }`
 * without throwing. Callers should fall back to a console log in that case
 * so submissions are never silently lost.
 */

export type AuditSubmission = {
  name: string;
  phone: string;
  trade: string;
  suburb: string;
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
    secure: port === 465, // SSL for 465, STARTTLS for 587
    auth: { user, pass },
  });

  return cachedTransporter;
}

function renderAuditEmail(s: AuditSubmission) {
  const subject = `New lead: ${s.name} — ${s.trade}, ${s.suburb}`;

  const text = [
    `New ClickSmith audit request`,
    ``,
    `Name:    ${s.name}`,
    `Mobile:  ${s.phone}`,
    `Trade:   ${s.trade}`,
    `Suburb:  ${s.suburb}`,
    ``,
    `Submitted: ${s.submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width:560px; margin:0 auto; padding:24px; color:#0a0a0a;">
      <h2 style="margin:0 0 16px; font-size:20px;">New ClickSmith audit request</h2>
      <table style="width:100%; border-collapse:collapse; font-size:15px;">
        <tr><td style="padding:8px 0; color:#525252; width:90px;">Name</td><td style="padding:8px 0;"><strong>${escapeHtml(s.name)}</strong></td></tr>
        <tr><td style="padding:8px 0; color:#525252;">Mobile</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(s.phone)}" style="color:#0a0a0a; text-decoration:none;"><strong>${escapeHtml(s.phone)}</strong></a></td></tr>
        <tr><td style="padding:8px 0; color:#525252;">Trade</td><td style="padding:8px 0;"><strong>${escapeHtml(s.trade)}</strong></td></tr>
        <tr><td style="padding:8px 0; color:#525252;">Suburb</td><td style="padding:8px 0;"><strong>${escapeHtml(s.suburb)}</strong></td></tr>
      </table>
      <p style="margin:24px 0 0; font-size:13px; color:#525252;">Submitted: ${escapeHtml(s.submittedAt)}</p>
    </div>
  `.trim();

  return { subject, text, html };
}

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendAuditEmail(
  submission: AuditSubmission,
): Promise<MailResult> {
  const transporter = getTransporter();
  if (!transporter) {
    return { delivered: false, reason: "SMTP env vars not configured" };
  }

  const from = process.env.SMTP_USER!;
  const to = process.env.SMTP_TO || from;
  const { subject, text, html } = renderAuditEmail(submission);

  try {
    const info = await transporter.sendMail({
      from: `"ClickSmith Website" <${from}>`,
      to,
      replyTo: submission.phone ? `${submission.name} <${from}>` : from,
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
