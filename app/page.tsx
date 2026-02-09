import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AccreditationStrip } from "@/components/accreditation-strip"
import { WasteStrategy } from "@/components/waste-strategy"
import { ServicesSectionNew } from "@/components/services-section-new"
import { IndustriesSectionNew } from "@/components/industries-section-new"
import { CircularProcessFlow } from "@/components/circular-process-flow"
import { SafetySection } from "@/components/safety-section"
import { ValueAddedServices } from "@/components/value-added-services"
import { ComplianceSection } from "@/components/compliance-section"
import { StepwiseProcess } from "@/components/stepwise-process"
import { ContactSection } from "@/components/contact-section"
import { InteractiveMap } from "@/components/interactive-map"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Hazardous Waste Management & Analytical Services | Tshegofentse",
  description:
    "Tshegofentse provides hazardous waste management, water testing laboratory services, and training across South Africa, helping businesses stay compliant and protect the environment.",
  openGraph: {
    title: "Hazardous Waste Management & Analytical Services | Tshegofentse",
    description:
      "End-to-end hazardous waste solutions, laboratory analysis and training services for safer, compliant operations in South Africa.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazardous Waste Management & Analytical Services | Tshegofentse",
    description:
      "Hazardous waste management, laboratory analysis and training services provided by Tshegofentse.",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <AccreditationStrip variant="large" />
      <WasteStrategy />
      <StepwiseProcess />
      <ServicesSectionNew />
      <IndustriesSectionNew />
      <CircularProcessFlow />
      <SafetySection />
      <ValueAddedServices />
      <ComplianceSection />
      <ContactSection />
      <AccreditationStrip variant="large" />
      <InteractiveMap />
      <Footer />
    </main>
  )
}
