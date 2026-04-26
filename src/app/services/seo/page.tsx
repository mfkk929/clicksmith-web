import { redirect } from "next/navigation";

// Redirect /services/seo to the main /services page until we ship a
// dedicated Local SEO sub-page.
export default function SeoRedirect() {
  redirect("/services");
}
