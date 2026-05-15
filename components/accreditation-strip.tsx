"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type AccreditationVariant = "large" | "small"

const CERTS = [
  {
    id: "iso9001",
    label: "ISO 9001",
    iconSrc: "/OLD.9001.png",
    certHref: "/Tshegofentse certification Iso 9001 Waste management.jpeg",
  },
  {
    id: "iso14001",
    label: "ISO 14001",
    iconSrc: "/OLD.14001.png",
    certHref: "/Tshegofentse certification Iso 14001 Waste Management.jpeg",
  },
  {
    id: "iso45001",
    label: "ISO 45001",
    iconSrc: "/OLD.45001.png",
    certHref: "/Tshegofentse certification Iso 45001 waste management.jpeg",
  },
  {
    id: "sanas17025",
    label: "SANAS 17025",
    iconSrc: "/sanas-logo 17025.png",
    certHref:
      "/Tshegofentse Sanas accreditation T1128 Schedule of Analysis Jan 2030.pdf",
  },
]

interface AccreditationStripProps {
  variant?: AccreditationVariant
  className?: string
}

export function AccreditationStrip({
  variant = "large",
  className,
}: AccreditationStripProps) {
  const shouldReduceMotion = useReducedMotion()
  const isLarge = variant === "large"
  // Top strip (large) stays at current size; footer strip (small) is bigger
  const iconSize = isLarge ? 180 : 230

  return (
    <section
      className={cn(
        "w-full",
        isLarge
          ? "py-10 md:py-12 bg-muted/40 border-y border-border/40"
          : "py-6",
        className,
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {isLarge && (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                ISO &amp; SANAS Accredited
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Our company is ISO certified and SANAS accredited. Click any
                badge to view the official certificate.
              </p>
            </div>
          </div>
        )}

        <div
          className={cn(
            isLarge
              ? "grid gap-4 grid-cols-2 sm:grid-cols-4"
              : "flex flex-row items-center justify-center gap-6 md:gap-10",
          )}
        >
          {CERTS.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.certHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex flex-col items-center justify-center",
              )}
              initial={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, y: 12 }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.4 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 0.6,
                      delay: index * 0.1,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              whileHover={
                shouldReduceMotion ? undefined : { scale: 1.08 }
              }
            >
              <div
                className={cn(
                  "relative flex items-center justify-center overflow-hidden",
                  "w-full",
                  isLarge ? "max-w-[180px]" : "max-w-[240px]",
                  "aspect-[4/3]",
                )}
              >
                <Image
                  src={cert.iconSrc}
                  alt={cert.label}
                  fill
                  sizes={isLarge ? `${iconSize}px` : `${iconSize}px`}
                  className="object-contain"
                  priority={isLarge}
                />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-center text-foreground">
                {cert.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}


