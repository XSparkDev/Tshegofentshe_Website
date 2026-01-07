"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const checklistItems = [
  "Common Hazardous Waste",
  "Chemicals, Fertilizers And Manufacturing",
  "Metals And Mining",
  "Paint, Coatings And Automotive",
  "Textile And Leather",
  "Food, Beverages And Retail",
  "Other Hazardous Waste",
]

const checklistVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
}

const checkIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: [0, 1.3, 1],
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
    },
  },
}

export function IndustriesSectionNew() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return

    // Check if already animated
    if (sectionRef.current.hasAttribute("data-animated")) return

    // Content slide in with blur
    if (contentRef.current && !contentRef.current.hasAttribute("data-animated")) {
      const contentAnim = gsap.from(contentRef.current, {
        x: -100,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          onEnter: () => {
            if (contentRef.current && !contentRef.current.hasAttribute("data-animated")) {
              contentRef.current.setAttribute("data-animated", "true")
            }
          },
        },
      })
    }

    // Image curtain wipe
    if (imageRef.current && !imageRef.current.hasAttribute("data-animated")) {
      const imageAnim = gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => {
              if (imageRef.current && !imageRef.current.hasAttribute("data-animated")) {
                imageRef.current.setAttribute("data-animated", "true")
              }
            },
          },
        }
      )
    }

    // Floating shapes parallax
    const shapes = sectionRef.current?.querySelectorAll(".floating-shape")
    shapes?.forEach((shape) => {
      gsap.to(shape, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerEl = trigger.vars?.trigger
        if (triggerEl === sectionRef.current || triggerEl === imageRef.current || triggerEl === contentRef.current) {
          trigger.kill()
        }
      })
    }
  }, [shouldReduceMotion])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || shouldReduceMotion) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(buttonRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
    })
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current || shouldReduceMotion) return
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.3,
    })
  }

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || shouldReduceMotion) return
    const button = buttonRef.current
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement("span")
    ripple.className = "absolute rounded-full bg-white/30 pointer-events-none"
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.width = "0px"
    ripple.style.height = "0px"
    ripple.style.transform = "translate(-50%, -50%)"
    button.appendChild(ripple)

    gsap.to(ripple, {
      width: 300,
      height: 300,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden industries-section"
      style={{
        background: "linear-gradient(to bottom right, #9DC13D, #9DC13D, #9DC13D)",
      }}
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="floating-shape absolute opacity-20"
          style={{
            width: "100px",
            height: "100px",
            top: "10%",
            left: "5%",
            background: "white",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />
        <div
          className="floating-shape absolute opacity-20 rounded-full"
          style={{
            width: "80px",
            height: "80px",
            top: "60%",
            left: "10%",
            background: "white",
          }}
        />
        <div
          className="floating-shape absolute opacity-20"
          style={{
            width: "120px",
            height: "120px",
            top: "30%",
            right: "8%",
            background: "white",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />
        <div
          className="floating-shape absolute opacity-20 rounded-full"
          style={{
            width: "60px",
            height: "60px",
            bottom: "15%",
            right: "15%",
            background: "white",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        {/* Left Column: Content */}
        <div ref={contentRef} className="industries-content">
          <motion.h2
            className="mb-6 uppercase"
            style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              color: "white",
            }}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.2 }}
          >
            INDUSTRIES AND WASTE TYPES
          </motion.h2>

          <motion.p
            className="mb-8"
            style={{
              fontSize: "1.25rem",
              fontWeight: 400,
              color: "white",
            }}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.4 }}
          >
            We service the following industries and waste types
          </motion.p>

          {/* Checklist */}
          <ul className="mb-10">
            {checklistItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 mb-4"
                custom={index}
                initial={shouldReduceMotion ? undefined : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.3 }}
                variants={checklistVariants}
              >
                <motion.div
                  className="flex-shrink-0 relative"
                  initial={shouldReduceMotion ? undefined : "hidden"}
                  whileInView={shouldReduceMotion ? undefined : "visible"}
                  viewport={{ once: true, amount: 0.3 }}
                  variants={checkIconVariants}
                >
                  <Check
                    className="w-6 h-6 text-white rounded-full p-1"
                    style={{ backgroundColor: "#9DC13D" }}
                  />
                  {/* Particle burst */}
                  {!shouldReduceMotion && (
                    <ParticleBurst delay={index * 0.1} />
                  )}
                </motion.div>
                <span
                  className="text-lg font-medium"
                  style={{ color: "white" }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Button */}
          <button
            ref={buttonRef}
            className="relative overflow-hidden"
            style={{
              backgroundColor: "#9DC13D",
              color: "white",
              padding: "16px 32px",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: 600,
              marginTop: "40px",
              border: "none",
              cursor: "pointer",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={createRipple}
            onMouseDown={(e) => {
              createRipple(e)
              if (buttonRef.current) {
                gsap.to(buttonRef.current, {
                  scale: 0.95,
                  duration: 0.1,
                  yoyo: true,
                  repeat: 1,
                })
              }
            }}
          >
            MORE ABOUT THE INDUSTRIES AND WASTE TYPES WE SERVICE
          </button>
        </div>

        {/* Right Column: Image */}
        <div ref={imageRef} className="industries-image relative">
          <Image
            src="/chemical-laboratory-barrels.jpg"
            alt="Hazardous waste drums with corrosive warning labels"
            width={600}
            height={600}
            className="rounded-2xl shadow-2xl w-full h-auto max-w-[600px]"
          />
        </div>
      </div>
    </section>
  )
}

function ParticleBurst({ delay }: { delay: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: "50%",
            top: "50%",
          }}
          initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [1, 0.5, 0],
            x: Math.cos((i * 45 * Math.PI) / 180) * 50,
            y: Math.sin((i * 45 * Math.PI) / 180) * 50,
          }}
          transition={{
            duration: 0.6,
            delay: delay + 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

