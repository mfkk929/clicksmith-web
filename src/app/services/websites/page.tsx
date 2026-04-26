import { redirect } from "next/navigation";

// Redirect /services/websites to the main /services page until we ship
// a dedicated Tradie Websites sub-page.
export default function WebsitesRedirect() {
  redirect("/services");
}
