import { redirect } from "next/navigation";

// Redirect /services/google-ads to the main /services page until we ship
// a dedicated Google Ads sub-page.
export default function GoogleAdsRedirect() {
  redirect("/services");
}
