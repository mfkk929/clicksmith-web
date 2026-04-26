/**
 * Shared option lists for the audit form. Lives outside the "use server"
 * file because server-action files can only export async functions in
 * Next.js — exporting plain consts from there throws at module load.
 */

export const ALLOWED_TRADES = [
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

export type AllowedTrade = (typeof ALLOWED_TRADES)[number];

export const PRIMARY_PROBLEMS = [
  "Not enough leads coming in",
  "Leads coming in, but mostly bad quality",
  "Spending too much per lead",
  "Don't really know what's working",
  "Other (tell us in a follow-up)",
] as const;

export type PrimaryProblem = (typeof PRIMARY_PROBLEMS)[number];
