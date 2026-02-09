"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Navigation, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LOCATIONS = [
  {
    id: 1,
    name: "Tshegofentse Hazardous Waste & Analytical Services",
    address: "20 Fortuna Ave, Bedworthpark, Vereeniging, South Africa",
    lat: -26.6736,
    lng: 27.9269,
  },
  {
    id: 2,
    name: "Van Till Road Alrode Transnet Dry Dock Alberton",
    address: "Van Till Road Alrode Transnet Dry Dock, Alberton, South Africa",
    lat: -26.3025,
    lng: 28.139445,
  },
  {
    id: 3,
    name: "Foreshore Duncan Dock Waterfront Cape Town",
    address: "Foreshore Duncan Dock Waterfront, Cape Town, South Africa",
    lat: -33.912181,
    lng: 18.426997,
  },
]

export function InteractiveMap() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedLocationId, setSelectedLocationId] = useState(1)
  
  const selectedLocation = LOCATIONS.find(loc => loc.id === selectedLocationId) || LOCATIONS[0]
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedLocation.address)}`
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const tiltX = useTransform(scrollYProgress, [0, 1], [-2, 2])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-foreground"
      style={{
        opacity: shouldReduceMotion ? 1 : opacity,
      }}
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(164, 210, 51, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(164, 210, 51, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Topographic Lines Overlay */}
      <div className="absolute inset-0 opacity-[0.02] z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${100 + i * 120} Q 500 ${80 + i * 120} 1000 ${100 + i * 120}`}
              fill="none"
              stroke="#a4d233"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>

      {/* Google Maps iframe */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: shouldReduceMotion ? 0 : parallaxY,
          rotateX: shouldReduceMotion ? 0 : tiltX,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.iframe
          key={selectedLocationId}
          src={`https://maps.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Dark Overlay with Company Info */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80 z-20 pointer-events-none"
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      />

      {/* Bottom sheet-style place card with tabs (non-floating, scoped to map section) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-30 pointer-events-auto"
        initial={shouldReduceMotion ? undefined : { y: 100, opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="bg-background/95 backdrop-blur-md rounded-t-xl shadow-2xl border-t border-[#a4d233]/20 max-h-[50vh] overflow-y-auto">
          {/* Tabs directly above the place card content */}
          <div className="flex border-b border-border/30">
            {LOCATIONS.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocationId(location.id)}
                className={cn(
                  "flex-1 px-2 md:px-4 py-3 text-xs md:text-sm font-medium transition-colors border-b-2",
                  selectedLocationId === location.id
                    ? "border-[#a4d233] text-[#a4d233] bg-[#a4d233]/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-background/50",
                )}
              >
                <span className="line-clamp-1">{location.name}</span>
              </button>
            ))}
          </div>

          {/* Place card content */}
          <div className="p-6">
            <motion.div
              key={selectedLocationId}
              className="flex items-start gap-3 mb-4"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-2 bg-[#a4d233]/20 rounded-lg flex-shrink-0">
                <MapPin className="h-6 w-6 text-[#a4d233]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {selectedLocation.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedLocation.address}
                </p>
              </div>
            </motion.div>

            {/* Live Location indicator */}
            <div className="relative flex items-center gap-2 mb-4">
              <motion.div
                className="absolute left-0 w-3 h-3 bg-[#a4d233] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute left-0 w-3 h-3 bg-[#a4d233] rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <span className="ml-4 text-xs text-muted-foreground">Live Location</span>
            </div>

            {/* In-card Get Directions button */}
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-[#a4d233] hover:bg-[#a4d233]/90 text-foreground rounded-full px-6 py-6 shadow-lg border-2 border-[#a4d233]/50"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Get Directions
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Animated Direction Lines */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.path
            d="M 200 300 Q 500 400 800 500"
            fill="none"
            stroke="#a4d233"
            strokeWidth="2"
            strokeDasharray="10 5"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.path
            d="M 300 600 Q 500 500 700 400"
            fill="none"
            stroke="#a4d233"
            strokeWidth="2"
            strokeDasharray="10 5"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
        </motion.svg>
      </div>

      {/* Distance Indicators */}
      <motion.div
        className="absolute bottom-8 left-4 md:left-8 z-30 pointer-events-auto hidden md:block"
        initial={shouldReduceMotion ? undefined : { y: 50, opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <div className="bg-background/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-[#a4d233]/20">
          <p className="text-xs text-muted-foreground mb-2">Approximate Travel Time</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-[#a4d233] rounded-full" />
              <span className="text-foreground">From Johannesburg: ~45 min</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-[#a4d233] rounded-full" />
              <span className="text-foreground">From Pretoria: ~1h 15min</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

