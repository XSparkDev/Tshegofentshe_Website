"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const services = [
  {
    id: 1,
    title: "Waste Assessment",
    description: "Capacity to do Waste assessments and characterization to offer proper advise.",
    color: "from-teal-500 to-teal-600",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "In House Laboratory",
    description: "Hazardous Waste needs proper chemical assessment to identify Options in Reuse or Treatment",
    color: "from-teal-600 to-cyan-600",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Waste Exchange",
    description: "Access to database of potential users of waste for exchange.",
    color: "from-lime-400 to-lime-500",
    textColor: "text-gray-900",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <motion.div
      ref={ref}
      className={`relative p-8 md:p-12 overflow-hidden group cursor-pointer flex-1`}
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      {/* Gradient Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated Shine Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 200%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />

      {/* Content */}
      <div className="relative z-10 pr-20 pb-20">
        <motion.h3
          className={`text-3xl md:text-4xl font-bold mb-6 ${service.textColor}`}
          initial={{ opacity: 0, x: -20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className={`text-lg md:text-xl leading-relaxed ${service.textColor} opacity-90`}
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 0.9 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        >
          {service.description}
        </motion.p>

        {/* Decorative Corner Element */}
        <motion.div
          className={`absolute bottom-6 right-6 w-16 h-16 border-4 ${service.textColor} opacity-20 group-hover:opacity-40`}
          style={{
            borderTop: "none",
            borderLeft: "none",
          }}
          initial={{ scale: 0, rotate: -45 }}
          animate={hasAnimated ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
        />
      </div>
    </motion.div>
  )
}

export function ValueAddedServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            VALUE ADDED SERVICES
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            To us, waste is a resource; we call it "dirty gold" that needs to be treated and refined. We are willing to
            get our hands dirty to recover value from waste, reduce pollution, and create jobs. Our primary services are:
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <div className="flex flex-col md:flex-row gap-0 shadow-2xl overflow-hidden rounded-xl">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}


