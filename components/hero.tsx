"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

type HeroSlideKey = "management" | "academy" | "lab"

const HERO_SLIDES: {
  key: HeroSlideKey
  imageSrc: string
  imageAlt: string
  headingTop: string
  headingMain: string
  description: string
  buttonLabel: string
  buttonHref: string
  durationMs: number
}[] = [
  {
    key: "management",
    imageSrc: "/nature-landscape-forest-clean-water2.jpg",
    imageAlt: "Sustainable Environment",
    headingTop: "Hazardous Waste",
    headingMain: "Management",
    description:
      "We can solve your waste management needs quickly and professionally.\nSave Your Community, Save Your Planet",
    buttonLabel: "Learn More",
    buttonHref: "/about",
    durationMs: 8000,
  },
  {
    key: "academy",
    imageSrc: "/academy.png",
    imageAlt: "Tshegofentse Academy",
    headingTop: "WELCOME",
    headingMain: "Tshegofentse Academy",
    description:
      'Tshegofentse Academy providing "Occupation Directed Training" with Results. Results being Productivity, Motivated staff, Customer satisfaction and Succession planning.',
    buttonLabel: "Learn More",
    buttonHref: "https://tshegofentse-academy.co.za",
    durationMs: 4000,
  },
  {
    key: "lab",
    imageSrc: "/lab.png",
    imageAlt: "Tshegofentse Water Testing Laboratory",
    headingTop: "We Are Committed to Your Health",
    headingMain: "Tshegofentse Water Testing Laboratory",
    description:
      "Waterways are polluted, water is expensive, yet we know it's life.\nTshegofentse Water Testing Laboratory – Your Water testing Specialist.",
    buttonLabel: "View our Lab",
    buttonHref: "https://vaalwaterlab.co.za",
    durationMs: 4000,
  },
]

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentSlide = HERO_SLIDES[currentIndex]
  const currentDuration = currentSlide.durationMs

  const goToNext = () => {
    setCurrentIndex((prev: number) => (prev + 1) % HERO_SLIDES.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev: number) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  useEffect(() => {
    if (shouldReduceMotion) return

    const timeout = setTimeout(goToNext, currentDuration)
    return () => clearTimeout(timeout)
  }, [currentIndex, shouldReduceMotion])

  return (
    <motion.section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center md:items-start overflow-hidden"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={currentSlide.imageSrc}
          alt={currentSlide.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60 hero-gradient-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 flex-1">
          <div className="max-w-5xl text-left flex-1 mt-12 md:mt-[4cm] mb-20 md:mb-0 relative -translate-y-[2cm] md:translate-y-0">
            <div className="space-y-6">
              <motion.h1
                key={`heading-${currentIndex}`}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-background"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
                }
              >
                <motion.span
                  className="block text-lg md:text-2xl font-normal mb-2 text-background"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={shouldReduceMotion ? undefined : { duration: 0.5, ease: "easeOut" }}
                >
                  {currentSlide.headingTop}
                </motion.span>
                <motion.span
                  className="block text-background"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.15 }
                  }
                >
                  {currentSlide.headingMain}
                </motion.span>
              </motion.h1>

              <motion.p
                key={`description-${currentIndex}`}
                className="text-lg md:text-xl text-background/90 max-w-2xl leading-relaxed"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                {currentSlide.description.split("\n").map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </motion.p>
            </div>
          </div>

          <motion.div
            className="relative hidden md:block md:flex-shrink-0"
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 40 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative w-[640px] h-[640px] md:w-[800px] md:h-[800px] mx-auto md:mx-0">
              <Image
                src="/Tshegofentse final logo-03.png"
                alt="Tshegofentse Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-[3cm] left-0 right-0 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <div className="max-w-5xl w-full md:w-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                {/* Lab and Academy buttons - only show on management slide */}
                {currentSlide.key === "management" && (
                  <>
                    <a
                      href="https://vaalwaterlab.co.za"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-[280px] md:w-auto order-1 md:order-none"
                    >
                      <Button
                        size="lg"
                        className="bg-background/20 hover:bg-background/30 backdrop-blur-sm text-background border-2 border-background/50 rounded-full px-8 h-12 min-h-[48px] w-full md:min-w-[140px] md:w-auto text-base font-medium transition-all flex items-center justify-center whitespace-nowrap"
                      >
                        Lab
                      </Button>
                    </a>
                    <a
                      href="https://tshegofentse-academy.co.za"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-[280px] md:w-auto order-2 md:order-none"
                    >
                      <Button
                        size="lg"
                        className="bg-background/20 hover:bg-background/30 backdrop-blur-sm text-background border-2 border-background/50 rounded-full px-8 h-12 min-h-[48px] w-full md:min-w-[140px] md:w-auto text-base font-medium transition-all flex items-center justify-center whitespace-nowrap"
                      >
                        Academy
                      </Button>
                    </a>
                  </>
                )}
                {currentSlide.buttonHref.startsWith("http") ? (
                  <a
                    href={currentSlide.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-[280px] md:w-auto order-3 md:order-none"
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 min-h-[48px] w-full md:min-w-[140px] md:w-auto text-base font-medium animated-btn flex items-center justify-center whitespace-nowrap"
                    >
                      {currentSlide.buttonLabel}
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                    </Button>
                  </a>
                ) : (
                  <Link
                    href={currentSlide.buttonHref}
                    className="inline-flex w-[280px] md:w-auto order-3 md:order-none"
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 min-h-[48px] w-full md:min-w-[140px] md:w-auto text-base font-medium animated-btn flex items-center justify-center whitespace-nowrap"
                    >
                      {currentSlide.buttonLabel}
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={goToPrev}
        className="absolute left-2 md:left-4 bottom-8 md:top-1/2 md:-translate-y-1/2 z-10 bg-background/20 hover:bg-background/30 backdrop-blur-sm text-background p-2 md:p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-2 md:right-4 bottom-8 md:top-1/2 md:-translate-y-1/2 z-10 bg-background/20 hover:bg-background/30 backdrop-blur-sm text-background p-2 md:p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.section>
  )
}
 