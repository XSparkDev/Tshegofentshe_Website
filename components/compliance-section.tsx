"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const complianceCards = [
  {
    id: 1,
    title: "Licensed transporter & PDP Licensed drivers",
    icon: (
      <svg className="w-20 h-20 mb-6 compliance-icon" viewBox="0 0 100 100">
        {/* ID card outline - teal dashed border */}
        <rect
          x="15"
          y="25"
          width="70"
          height="50"
          rx="4"
          stroke="#9DC13D"
          strokeWidth="3"
          strokeDasharray="5,3"
          fill="none"
        />
        {/* Person icon inside */}
        <circle cx="35" cy="45" r="8" fill="#9DC13D" />
        <path d="M35,55 L30,65 L40,65 Z" fill="#9DC13D" />
        {/* Lines representing text */}
        <line x1="50" y1="40" x2="75" y2="40" stroke="#9DC13D" strokeWidth="2" />
        <line x1="50" y1="48" x2="75" y2="48" stroke="#9DC13D" strokeWidth="2" />
        <line x1="50" y1="56" x2="70" y2="56" stroke="#9DC13D" strokeWidth="2" />
      </svg>
    ),
    textColor: "#9DC13D",
  },
  {
    id: 2,
    title: "Record keeping: weighbridge certificates",
    icon: (
      <svg className="w-20 h-20 mb-6 compliance-icon" viewBox="0 0 100 100">
        {/* Clipboard outline */}
        <rect x="25" y="20" width="50" height="65" rx="3" stroke="#6b7280" strokeWidth="3" fill="none" />
        {/* Clip at top */}
        <rect x="40" y="15" width="20" height="8" rx="2" fill="#6b7280" />
        {/* Checkmark items */}
        <path d="M35,35 L40,40 L50,30" stroke="#6b7280" strokeWidth="2" fill="none" />
        <path d="M35,48 L40,53 L50,43" stroke="#6b7280" strokeWidth="2" fill="none" />
        <path d="M35,61 L40,66 L50,56" stroke="#6b7280" strokeWidth="2" fill="none" />
        {/* Lines */}
        <line x1="55" y1="35" x2="70" y2="35" stroke="#6b7280" strokeWidth="2" />
        <line x1="55" y1="48" x2="70" y2="48" stroke="#6b7280" strokeWidth="2" />
        <line x1="55" y1="61" x2="70" y2="61" stroke="#6b7280" strokeWidth="2" />
      </svg>
    ),
    textColor: "#374151",
  },
  {
    id: 3,
    title: "Quality Control: waste manifest control document",
    icon: (
      <svg className="w-20 h-20 mb-6 compliance-icon" viewBox="0 0 100 100">
        {/* Document */}
        <rect x="30" y="20" width="40" height="55" rx="2" stroke="#6b7280" strokeWidth="3" fill="none" />
        {/* Lines on document */}
        <line x1="38" y1="30" x2="58" y2="30" stroke="#6b7280" strokeWidth="2" />
        <line x1="38" y1="38" x2="62" y2="38" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="38" y1="44" x2="62" y2="44" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="38" y1="50" x2="55" y2="50" stroke="#6b7280" strokeWidth="1.5" />
        {/* Badge/seal with checkmark */}
        <circle cx="60" cy="60" r="12" fill="#6b7280" />
        <path d="M55,60 L58,63 L65,56" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
    textColor: "#374151",
  },
  {
    id: 4,
    title: "Quality assurance: waste disposal certificate",
    icon: (
      <svg className="w-20 h-20 mb-6 compliance-icon" viewBox="0 0 100 100">
        {/* Certificate/document */}
        <rect x="25" y="25" width="50" height="50" rx="2" stroke="#6b7280" strokeWidth="3" fill="none" />
        {/* Checkmark on document */}
        <path d="M35,40 L42,47 L60,30" stroke="#6b7280" strokeWidth="3" fill="none" />
        {/* Gear/cog overlay */}
        <circle cx="60" cy="60" r="10" stroke="#6b7280" strokeWidth="2" fill="white" />
        {/* Gear teeth (simple version) */}
        <circle cx="60" cy="50" r="2" fill="#6b7280" />
        <circle cx="70" cy="60" r="2" fill="#6b7280" />
        <circle cx="60" cy="70" r="2" fill="#6b7280" />
        <circle cx="50" cy="60" r="2" fill="#6b7280" />
      </svg>
    ),
    textColor: "#374151",
  },
]

const cardVariants = {
  hidden: {
    y: 80,
    opacity: 0,
    scale: 0.9,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
}

const cardHover = {
  y: -12,
  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)",
  transition: {
    duration: 0.3,
    type: "spring",
  },
}

function ComplianceCard({
  card,
  index,
  shouldReduceMotion,
}: {
  card: (typeof complianceCards)[0]
  index: number
  shouldReduceMotion: boolean | null
}) {
  return (
    <motion.div
      className="bg-white rounded-xl p-10 shadow-lg flex flex-col items-center text-center min-h-80"
      style={{
        minHeight: "320px",
        gap: "20px",
      }}
      custom={index}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={shouldReduceMotion ? undefined : cardHover}
    >
      {card.icon}
      <p
        className="text-lg font-semibold leading-relaxed"
        style={{
          color: card.textColor,
        }}
      >
        {card.id === 1 ? (
          <>
            Licensed transporter &<br />
            PDP Licensed drivers
          </>
        ) : card.title.includes(": ") ? (
          <>
            {card.title.split(": ")[0]}:<br />
            {card.title.split(": ")[1]}
          </>
        ) : (
          card.title
        )}
      </p>
    </motion.div>
  )
}

export function ComplianceSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

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

    // Icons gently float up and down (continuous animation, no flag needed)
    const icons = sectionRef.current.querySelectorAll(".compliance-icon")
    icons.forEach((icon, index) => {
      gsap.to(icon, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      })
    })

    // Line draws in from left (one-time animation)
    const underline = sectionRef.current.querySelector(".title-underline")
    if (underline && !underline.hasAttribute("data-animated")) {
      const animation = gsap.from(underline, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          onEnter: () => {
            if (underline && !underline.hasAttribute("data-animated")) {
              underline.setAttribute("data-animated", "true")
            }
          },
        },
      })

      return () => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill()
        }
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars?.trigger === sectionRef.current) {
            trigger.kill()
          }
        })
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === sectionRef.current) {
          trigger.kill()
        }
      })
    }
  }, [shouldReduceMotion])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 compliance-section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="mb-6 uppercase"
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            color: "#374151",
            marginBottom: "24px",
            textAlign: "left",
          }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
        >
          SAFETY & LEGAL COMPLIANCE
        </motion.h2>

        {/* Decorative line */}
        <div
          className="title-underline mb-16"
          style={{
            width: "270px",
            height: "4px",
            backgroundColor: "#9DC13D",
            marginBottom: "64px",
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-6 lg:gap-8">
          {complianceCards.map((card, index) => (
            <ComplianceCard
              key={card.id}
              card={card}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

