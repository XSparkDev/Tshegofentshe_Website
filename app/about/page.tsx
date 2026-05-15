import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Tshegofentse Hazardous Waste & Analytical Services",
  description:
    "Learn more about Tshegofentse’s mission, values and innovative approach to hazardous waste management and environmental compliance in South Africa.",
}

export default function AboutPage() {
  return <AboutPageClient />
}

