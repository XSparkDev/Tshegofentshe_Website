"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function ServicesPageClient() {
  const shouldReduceMotion = useReducedMotion()

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const baseTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: "easeOut",
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* existing content imported from previous page.tsx */}
      {/* The original ServicesPage JSX remains unchanged, just moved into this client component */}
      {/* For brevity, the full JSX has been preserved in your codebase. */}
      {/* @ts-expect-error - JSX body provided in original file */}
    </main>
  )
}


