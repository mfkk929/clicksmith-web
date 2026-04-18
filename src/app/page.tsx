import { Hero } from "@/components/sections/hero";
import { ProofBand } from "@/components/sections/proof-band";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TradesServed } from "@/components/sections/trades-served";
import { CaseStudies } from "@/components/sections/case-studies";
import { PlaybooksStrip } from "@/components/sections/playbooks-strip";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <ProofBand />
      <HowItWorks />
      <ServicesGrid />
      <TradesServed />
      <CaseStudies />
      <PlaybooksStrip />
      <Faq />
      <FinalCta />
    </main>
  );
}
