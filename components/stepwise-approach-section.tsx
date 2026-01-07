"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Process boxes data structure - keeping exact same content
const processBoxes = [
  {
    id: 1,
    text: ["Waste", "Assessment"],
    borderColor: "#9DC13D",
    borderStyle: "dashed",
  },
  {
    id: 2,
    text: ["Waste", "Analysis"],
    borderColor: "#9DC13D",
    borderStyle: "solid",
    subLabel: "In House Laboratory",
    subLabelPosition: "below",
  },
  {
    id: 3,
    text: ["Options"],
    borderColor: "#9DC13D",
    borderStyle: "solid",
    subLabels: ["Reuse", "Recycle"],
    subLabelPosition: "above",
  },
  {
    id: 4,
    text: ["Beneficiation"],
    borderColor: "#9DC13D",
    borderStyle: "dashed",
    subLabel: "Waste Exchange",
    subLabelPosition: "below",
  },
  {
    id: 5,
    text: ["Chemical", "Treatment"],
    borderColor: "#9DC13D",
    borderStyle: "dashed",
  },
  {
    id: 6,
    text: ["SAFE", "Disposal"],
    borderColor: "#9DC13D",
    borderStyle: "solid",
  },
]

// Checkpoints - exact same text
const checkpoints = [
  "We Only do SAFE & LEGAL compliance disposals.",
  "We do Speedy NO Delay Waste Collections – this is our promise to our customers.",
  "We will not keep you waiting while your waste accumulates.",
  "We provide smart interventions to the handling, treatment, and reuse of Waste",
]

// Animation variants for checkpoints
const checkpointVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15 + 2.5,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

// Animation variants for check icons
const checkIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: [0, 1.2, 1],
    rotate: 0,
    transition: {
      scale: {
        duration: 0.5,
        times: [0, 0.5, 1],
        ease: [0.34, 1.56, 0.64, 1],
      },
      rotate: {
        duration: 0.5,
        ease: "easeOut",
      },
      delay: 2.5,
    },
  },
}

// Enhanced Arrow component with drawing animation
function Arrow({
  color = "#9DC13D",
  isDashed = false,
  index,
  shouldReduceMotion,
}: {
  color?: string
  isDashed?: boolean
  index: number
  shouldReduceMotion: boolean | null
}) {
  const arrowRef = useRef<SVGSVGElement>(null)
  const lineRef = useRef<SVGLineElement>(null)

  useEffect(() => {
    if (shouldReduceMotion || !lineRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay arrow animation until after boxes appear
            setTimeout(() => {
              if (lineRef.current) {
                gsap.to(lineRef.current, {
                  strokeDashoffset: 0,
                  opacity: 1,
                  duration: 0.4,
                  ease: "power2.out",
                })
              }
            }, 500 + index * 200)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (arrowRef.current) {
      observer.observe(arrowRef.current)
    }

    return () => observer.disconnect()
  }, [shouldReduceMotion, index])

  return (
    <svg
      ref={arrowRef}
      width="60"
      height="20"
      className="arrow-line mx-2 flex-shrink-0 md:w-[30px] sm:rotate-90 sm:h-[40px] sm:w-[20px]"
      style={{ cursor: "default" }}
    >
      <defs>
        <marker
          id={`arrowhead-${color.replace("#", "")}-${index}`}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill={color} />
        </marker>
        <linearGradient id={`arrowGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      <line
        ref={lineRef}
        x1="0"
        y1="10"
        x2="50"
        y2="10"
        stroke={isDashed ? color : `url(#arrowGradient-${index})`}
        strokeWidth="3"
        strokeDasharray={isDashed ? "5,5" : "50"}
        strokeDashoffset={shouldReduceMotion ? 0 : 50}
        opacity={shouldReduceMotion ? 1 : 0}
        markerEnd={`url(#arrowhead-${color.replace("#", "")}-${index})`}
      />
    </svg>
  )
}

// Enhanced Process Box component
function ProcessBox({
  box,
  index,
  shouldReduceMotion,
}: {
  box: (typeof processBoxes)[0]
  index: number
  shouldReduceMotion: boolean | null
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`process-box process-box-${box.id} w-[180px] h-[140px] md:w-[140px] md:h-[110px] sm:w-full sm:max-w-[280px] rounded-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden cursor-pointer`}
      style={{
        border: `3px ${box.borderStyle} ${box.borderColor}`,
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(157, 193, 61, 0.3)"
          : "0 4px 12px rgba(0, 0, 0, 0.08)",
        willChange: "transform, box-shadow",
      }}
      initial={shouldReduceMotion ? undefined : { scale: 0, opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 150,
              damping: 20,
            }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.03,
              y: -5,
              boxShadow: "0 20px 40px rgba(157, 193, 61, 0.4)",
              transition: { duration: 0.3, ease: "easeOut" },
            }
      }
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: isHovered
            ? "linear-gradient(135deg, rgba(157, 193, 61, 0.1) 0%, rgba(157, 193, 61, 0.05) 100%)"
            : "transparent",
          transition: "background 0.3s ease",
        }}
      />
      {/* Glow effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            boxShadow: "inset 0 0 20px rgba(157, 193, 61, 0.2)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {box.text.map((line, i) => (
        <div
          key={i}
          className="relative z-10"
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#374151",
          }}
        >
          {line}
        </div>
      ))}
    </motion.div>
  )
}

// Enhanced SubLabel component
function SubLabel({
  text,
  color,
  shouldReduceMotion,
  delay,
}: {
  text: string
  color: string
  shouldReduceMotion: boolean | null
  delay: number
}) {
  return (
    <motion.div
      className="sub-label"
      style={{
        padding: "8px 16px",
        border: `2px dashed ${color}`,
        borderRadius: "8px",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        marginTop: "16px",
        display: "inline-block",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      }}
      initial={shouldReduceMotion ? undefined : { y: -20, opacity: 0, scale: 0.9 }}
      whileInView={shouldReduceMotion ? undefined : { y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.4,
              delay: delay + 0.1,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
            }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(157, 193, 61, 0.2)",
              transition: { duration: 0.2 },
            }
      }
    >
      <span
        style={{
          fontSize: "0.875rem",
          fontWeight: 600,
          color: color === "#9DC13D" ? "#374151" : color,
        }}
      >
        {text}
      </span>
    </motion.div>
  )
}

export function StepwiseApproachSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const flowchartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      gsap.registerPlugin(ScrollTrigger)
    } catch (e) {
      // Plugin already registered, ignore error
    }

    if (shouldReduceMotion || !flowchartRef.current) return

    // Check if already animated
    if (flowchartRef.current.hasAttribute("data-animated")) return

    // Enhanced arrow drawing animation
    const arrows = flowchartRef.current.querySelectorAll(".arrow-line")
    arrows.forEach((arrow, index) => {
      const line = arrow.querySelector("line")
      if (line && !line.hasAttribute("data-animated")) {
        const arrowAnim = gsap.fromTo(
          line,
          {
            strokeDasharray: "0, 1000",
            opacity: 0,
          },
          {
            strokeDasharray: "1000, 0",
            opacity: 1,
            duration: 0.4,
            delay: 0.5 + index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: flowchartRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
              onEnter: () => {
                if (line && !line.hasAttribute("data-animated")) {
                  line.setAttribute("data-animated", "true")
                }
                if (flowchartRef.current && !flowchartRef.current.hasAttribute("data-animated")) {
                  flowchartRef.current.setAttribute("data-animated", "true")
                }
              },
            },
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerEl = trigger.vars?.trigger
        if (triggerEl === flowchartRef.current) {
          trigger.kill()
        }
      })
    }
  }, [shouldReduceMotion])

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
      }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #9DC13D 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Title */}
        <motion.h2
          className="text-center mb-[60px] uppercase"
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            color: "#374151",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: -20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5, ease: "easeOut" }}
        >
          OUR STEPWISE APPROACH TO WASTE MANAGEMENT
        </motion.h2>

        {/* Enhanced Flowchart */}
        <div
          ref={flowchartRef}
          className="flowchart-container flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 flex-wrap"
        >
          {processBoxes.map((box, index) => (
            <div key={box.id} className="flex items-center">
              <div className="flex flex-col items-center">
                {/* Sub-labels above (for Options box) */}
                {box.subLabelPosition === "above" && box.subLabels && (
                  <div className="flex gap-2 mb-2">
                    {box.subLabels.map((label, i) => (
                      <SubLabel
                        key={i}
                        text={label}
                        color={box.borderColor}
                        shouldReduceMotion={shouldReduceMotion}
                        delay={index * 0.2 + i * 0.1}
                      />
                    ))}
                  </div>
                )}

                {/* Main process box */}
                <ProcessBox box={box} index={index} shouldReduceMotion={shouldReduceMotion} />

                {/* Sub-label below */}
                {box.subLabelPosition === "below" && box.subLabel && (
                  <SubLabel
                    text={box.subLabel}
                    color={box.borderColor}
                    shouldReduceMotion={shouldReduceMotion}
                    delay={index * 0.2}
                  />
                )}
              </div>

              {/* Enhanced Arrow (except for last box) */}
              {index < processBoxes.length - 1 && (
                <Arrow
                  color={box.borderColor}
                  isDashed={box.borderStyle === "dashed"}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Description text */}
        <motion.p
          className="text-center max-w-4xl mx-auto my-12 leading-relaxed"
          style={{
            fontSize: "1.125rem",
            color: "#374151",
            maxWidth: "900px",
            margin: "48px auto",
            lineHeight: 1.75,
            fontWeight: 500,
          }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 2.0, ease: "easeOut" }}
        >
          Our strategy leaves Waste Disposal always as the last Option to ensure all green solutions
          and opportunities are exhausted first.
        </motion.p>

        {/* Enhanced 4 Checkpoints */}
        <div className="max-w-4xl mx-auto">
          {checkpoints.map((checkpoint, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 mb-6"
              custom={index}
              initial={shouldReduceMotion ? undefined : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={checkpointVariants}
            >
              <motion.div
                className="flex-shrink-0 mt-1"
                initial={shouldReduceMotion ? undefined : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.3 }}
                variants={checkIconVariants}
                custom={index}
              >
                <Check
                  className="w-6 h-6 text-white rounded p-1"
                  style={{
                    backgroundColor: "#9DC13D",
                    boxShadow: "0 2px 8px rgba(157, 193, 61, 0.3)",
                  }}
                />
              </motion.div>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#374151",
                  fontWeight: 500,
                }}
              >
                {checkpoint}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
