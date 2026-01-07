"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Trash2, HeartPulse, Droplets, Scale, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const services = [
  {
    icon: Trash2,
    color: "#9DC13D",
    line1: "General",
    line2: "waste",
  },
  {
    icon: HeartPulse,
    color: "#9DC13D",
    line1: "Medical",
    line2: "waste",
  },
  {
    icon: Droplets,
    color: "#9DC13D",
    line1: "Fat/grease",
    line2: "trap waste",
  },
  {
    icon: Scale,
    color: "#9DC13D",
    line1: "Waste legal",
    line2: "compliance",
  },
  {
    icon: Users,
    color: "#9DC13D",
    line1: "Waste & wastewater",
    line2: "training",
  },
]

const cardVariants = {
  hidden: {
    rotateY: 90,
    opacity: 0,
    scale: 0.8,
  },
  visible: (i: number) => ({
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.25,
      duration: 1.0,
      type: "spring",
      damping: 25,
      stiffness: 80,
    },
  }),
}

const cardHover = {
  scale: 1.05,
  y: -10,
  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)",
  transition: { duration: 0.3 },
}

export function ServicesSectionNew() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const iconsRef = useRef<HTMLDivElement[]>([])
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    
    try {
      gsap.registerPlugin(ScrollTrigger)
    } catch (e) {
      // Plugin already registered, ignore error
    }

    if (shouldReduceMotion || !sectionRef.current) return

    // Check if already animated
    if (sectionRef.current.hasAttribute("data-animated")) return

    const icons = iconsRef.current.filter(Boolean)
    if (icons.length === 0) return

    const animation = gsap.from(icons, {
      scale: 0,
      rotation: 180,
      opacity: 0,
      duration: 1.5,
      stagger: 0.25,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          if (!sectionRef.current?.hasAttribute("data-animated")) {
            sectionRef.current?.setAttribute("data-animated", "true")
          }
        },
      },
    })

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill()
      }
    }
  }, [shouldReduceMotion])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100 services-section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-center mb-[60px]"
          style={{
            fontSize: "2.23125rem",
            fontWeight: 800,
            color: "#374151",
          }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? undefined : { duration: 1.0 }}
          style={{ willChange: shouldReduceMotion ? "auto" : "opacity, transform" }}
        >
          SERVICES
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm service-card"
              style={{ perspective: "1000px" }}
              custom={index}
              initial={shouldReduceMotion ? undefined : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : cardHover}
              style={{ willChange: shouldReduceMotion ? "auto" : "transform, opacity" }}
            >
              <div
                ref={(el) => {
                  if (el) iconsRef.current[index] = el
                }}
                className="service-icon flex justify-center mb-6"
              >
                <service.icon
                  size={68}
                  strokeWidth={1.5}
                  style={{ color: service.color }}
                />
              </div>
              <div className="text-center">
                <div
                  className="font-semibold"
                  style={{
                    color: "#374151",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                  }}
                >
                  <div>{service.line1}</div>
                  <div>{service.line2}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

