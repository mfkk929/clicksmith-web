import { redirect } from "next/navigation";

// Redirect /services/ai-automation to the main /services page until we ship
// a dedicated AI Automation sub-page.
export default function AiAutomationRedirect() {
  redirect("/services");
}
