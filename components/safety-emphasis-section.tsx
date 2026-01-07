"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Trash2, Truck } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const safetyItems = [
  {
    id: 1,
    label: "Waste Legislation\nTraining",
    icon: <Trash2 className="w-16 h-16 text-white" strokeWidth={2} />,
  },
  {
    id: 2,
    label: "Handling of Haz\nWaste Training",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2">
        {/* Hand shape */}
        <path d="M30,60 L30,80 L40,85 L50,85 L55,80 L55,70" strokeWidth="3" />
        <path d="M30,60 L30,50 L35,45" strokeWidth="3" />
        <path d="M40,60 L40,40" strokeWidth="3" />
        <path d="M50,60 L50,45" strokeWidth="3" />
        {/* Small hazard symbol above hand */}
        <circle cx="50" cy="25" r="12" strokeWidth="2" />
        <path d="M50,18 L46,28 L54,28 Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Transport of\nHazardous Waste",
    icon: <Truck className="w-16 h-16 text-white" strokeWidth={2} />,
  },
]

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  },
}

const circleVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 120,
    },
  }),
}

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.6 + i * 0.2,
      duration: 0.5,
    },
  }),
}

const circleHover = {
  scale: 1.1,
  borderWidth: "4px",
  boxShadow: "0 0 30px rgba(255,255,255,0.8)",
  transition: {
    duration: 0.3,
    type: "spring",
  },
}

const iconHover = {
  y: -8,
  transition: {
    duration: 0.3,
    type: "spring",
    stiffness: 300,
  },
}

export function SafetyEmphasisSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return

    // Check if already animated
    if (sectionRef.current.hasAttribute("data-animated")) return

    // Section reveals with diagonal wipe effect
    const animation = gsap.from(sectionRef.current, {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          if (sectionRef.current && !sectionRef.current.hasAttribute("data-animated")) {
            sectionRef.current.setAttribute("data-animated", "true")
          }
        },
      },
    })

    // Image parallax on scroll
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    }

    // Pulsing border glow on circles
    const circles = sectionRef.current.querySelectorAll(".icon-circle")
    circles.forEach((circle, index) => {
      gsap.to(circle, {
        boxShadow: "0 0 20px rgba(255,255,255,0.5), inset 0 0 20px rgba(255,255,255,0.1)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      })
    })

    // Background gradient animation
    const gradient = sectionRef.current.querySelector(".safety-gradient")
    if (gradient) {
      gsap.to(gradient, {
        backgroundPosition: "100% 50%",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }

    return () => {
      if (animation?.scrollTrigger) {
        animation.scrollTrigger.kill()
      }
      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerEl = trigger.vars?.trigger
        if (triggerEl === sectionRef.current || triggerEl === imageRef.current) {
          trigger.kill()
        }
      })
    }
  }, [shouldReduceMotion])

  return (
    <motion.section
      ref={sectionRef}
      className="safety-emphasis-section relative h-[500px] md:h-[500px] sm:h-auto overflow-hidden"
      initial={shouldReduceMotion ? undefined : { opacity: 0 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left: Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-1/3 md:w-[40%] sm:relative sm:w-full sm:h-[250px]"
      >
        <Image
          src="/chemical-laboratory-barrels.jpg"
          alt="Industrial waste"
          fill
          className="object-cover"
        />
      </div>

      {/* White diagonal divider line */}
      <svg
        className="absolute left-1/3 md:left-[40%] sm:hidden top-0 h-full pointer-events-none z-10"
        width="20"
        height="100%"
        preserveAspectRatio="none"
      >
        <line x1="10" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="4" />
      </svg>

      {/* Right: Teal content with diagonal clip */}
      <div
        className="safety-gradient absolute right-0 top-0 w-2/3 md:w-[60%] sm:relative sm:w-full sm:h-auto sm:py-16 h-full flex items-center justify-center safety-diagonal-clip"
        style={{
          background: "linear-gradient(135deg, #9DC13D 0%, #9DC13D 50%, #9DC13D 100%)",
          backgroundSize: "200% 200%",
        }}
      >
        <div className="px-16 md:px-12 sm:px-6 py-12 sm:py-8 w-full">
          {/* Title */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-5xl md:text-4xl sm:text-3xl font-extrabold text-white text-center mb-16 sm:mb-12 uppercase tracking-wider"
            style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              letterSpacing: "2px",
              marginBottom: "60px",
            }}
          >
            SAFETY EMPHASIS
          </motion.h2>

          {/* 3 Icon Circles */}
          <div className="flex gap-16 md:gap-8 sm:flex-col sm:gap-12 justify-center items-start sm:items-center">
            {safetyItems.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={shouldReduceMotion ? undefined : circleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={shouldReduceMotion ? undefined : circleHover}
                className="flex flex-col items-center max-w-[200px] sm:max-w-none"
              >
                <motion.div
                  className="icon-circle w-36 h-36 md:w-[120px] md:h-[120px] sm:w-36 sm:h-36 rounded-full border-4 border-white flex items-center justify-center mb-5"
                  style={{
                    background: "transparent",
                  }}
                >
                  <motion.div
                    variants={shouldReduceMotion ? undefined : iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={shouldReduceMotion ? undefined : iconHover}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>

                <p
                  className="text-white text-xl md:text-base sm:text-xl font-semibold text-center leading-snug whitespace-pre-line"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </motion.section>
  )
}

