"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, Recycle, ArrowRight, Zap, Trash2, Leaf } from "lucide-react"
import Image from "next/image"

export default function IndustriesPage() {
  const shouldReduceMotion = useReducedMotion()

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const baseTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: "easeOut",
  }

  const wasteHierarchy = [
    {
      number: "1",
      title: "Avoid",
      description: "Maximum conservation of resources",
      icon: Leaf,
    },
    {
      number: "2",
      title: "Reuse",
      description: "Reusing Materials",
      icon: Recycle,
    },
    {
      number: "3",
      title: "Recycle",
      description: "Recycling & reprocessing materials",
      icon: Recycle,
    },
    {
      number: "4",
      title: "Waste to Energy",
      description: "Energy recovery prior to disposal",
      icon: Zap,
    },
    {
      number: "5",
      title: "Disposal of Waste",
      description: "Zero conversion of resources",
      icon: Trash2,
    },
  ]

  const industryGrid = [
    {
      image: "/in_metal.png",
      heading: "Metals & Mining",
      items: [
        "Heavy metal effluent",
        "Tailings",
        "Slag",
        "Filter cake",
        "Spent acids",
        "Millscale",
        "Contamined fuels",
      ],
    },
    {
      image: "/in_com.png",
      heading: "Common hazardous waste",
      items: [
        "Sludge",
        "Oily rags",
        "Used oils & grease",
        "Contaminated ppe",
        "Lead acid batteries",
      ],
    },
    {
      image: "/in_paint.jpg",
      heading: "Paint, coatings & Automotive",
      items: [
        "Inks, additives and pigments",
        "Solvents",
        "Aerosols",
        "Used packaging",
        "Lubricants & greases",
        "Oil filters",
      ],
    },
    {
      image: "/in_chem.png",
      heading: "Chemicals, fertilizers & manufacturing",
      items: [
        "Expired chemicals",
        "Acidic waste",
        "High COD effluent",
        "Low pH effluent",
        "Catalyst",
        "Pesticides",
      ],
    },
    {
      image: "/in_tex.jpg",
      heading: "Textile & Leather",
      items: [
        "Tannery leather shavings",
        "Wood pulp",
        "Animal waste",
        "Dyes & pigments",
        "Glue",
      ],
    },
    {
      image: "/in_foo.jpg",
      heading: "Food, beverages & retail",
      items: [
        "Off spec produce",
        "Abattoir waste",
        "Fat trap waste",
        "Pharmaceuticals",
      ],
    },
    {
      image: "/in_oth.png",
      heading: "Other hazardous waste",
      items: [
        "Sandblasting grit",
        "Oil filters",
        "Ash",
        "Asbestos",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <motion.section
        className="py-20 md:py-24"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground uppercase tracking-tight"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              INDUSTRIES
            </motion.h1>
            <motion.div
              className="mx-auto mb-12 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-sky-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />

            {/* Waste Exchange Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              animate={shouldReduceMotion ? undefined : itemVariants.visible}
              transition={{ ...baseTransition, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">WASTE EXCHANGE</h2>
              <motion.div
                className="h-1 w-28 rounded-full bg-gradient-to-r from-primary to-emerald-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Leveraging our extensive knowledge of waste generators and users across various industries, we facilitate strategic waste exchange programs that transform waste streams into valuable resources. Our expertise enables us to identify specific waste streams and by-products with significant potential for reuse or recycling by other companies. What may be waste to one organization can become a valuable resource for another—your waste could be someone's gold.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The benefits of waste exchange are immense: avoiding landfill disposal, reducing disposal costs, creating employment opportunities, and promoting environmental sustainability. Waste beneficiation is a well-established practice embedded in South Africa's Waste Act, reflecting our commitment to sustainable resource management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                According to the waste management hierarchy, waste must first be avoided. Where avoidance is not possible, it must be reduced, reused, recycled, or recovered. Disposal should only be considered as a last resort when no other viable options exist. This principle guides our approach to waste exchange and resource recovery.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For more information, visit{" "}
                <a
                  href="https://www.wastebenefit.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline font-medium"
                >
                  www.wastebenefit.co.za
                </a>
              </p>
            </motion.section>

            {/* Waste Hierarchy Section */}
            <motion.section
              className="mb-0"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              animate={shouldReduceMotion ? undefined : itemVariants.visible}
              transition={{ ...baseTransition, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">The Waste Hierarchy</h2>
              <motion.div
                className="h-1 w-32 rounded-full bg-gradient-to-r from-primary to-sky-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The waste management hierarchy provides a framework for prioritizing waste management strategies, from most to least preferred options:
              </p>

              {/* Waste Hierarchy Grid */}
              <motion.div
                className="grid md:grid-cols-1 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              >
                {wasteHierarchy.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={item.number}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 + index * 0.1 }}
                    >
                      <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-primary">{item.number}.</span>
                          <h3 className="font-bold text-xl text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.section>
          </div>
        </div>
      </motion.section>

      {/* Industries Image Grid Section */}
      <motion.section
        className="pt-4 pb-16 md:pt-6 md:pb-20 bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              {industryGrid.map((industry, index) => (
                <motion.div
                  key={industry.heading}
                  className="text-center"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                >
                  {/* Image Container - Circular */}
                  <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 rounded-full overflow-hidden group cursor-pointer">
                    <Image
                      src={industry.image}
                      alt={industry.heading}
                      fill
                      className="object-cover transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
                      sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 224px"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
                      {industry.heading}
                    </h3>
                    <ul className="space-y-1.5">
                      {industry.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm md:text-base text-muted-foreground leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
