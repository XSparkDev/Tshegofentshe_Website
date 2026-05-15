"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

const contactInfoItems = [
  {
    icon: Mail,
    title: "Email",
    details: ["sales@tshegofentse.co.za"],
  },
  {
    icon: Phone,
    title: "Medical Waste",
    details: ["082 696 5298"],
  },
  {
    icon: Phone,
    title: "Hazardous Waste",
    details: ["061 513 7249"],
  },
  {
    icon: Phone,
    title: "Training Academy",
    details: ["081 273 2070"],
  },
  {
    icon: Phone,
    title: "Laboratory",
    details: ["061 335 8281"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["064 533 5422"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "20 Fortuna Ave, Bedworthpark, Vereeniging",
      "Van Till Road Alrode Transnet Dry Dock, Alberton",
      "Foreshore Duncan Dock Waterfront, Cape Town",
    ],
  },
]

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-background"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
      animate={shouldReduceMotion || hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Contact Us</h2>
          <p className="text-muted-foreground text-lg">
            Ready to improve your environmental footprint? Contact us for a waste assessment or to learn more about our
            services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {contactInfoItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion || hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                }}
              >
                <motion.div
                  className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0 cursor-pointer"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <item.icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground">
                      {item.title === "WhatsApp" ? (
                        <a 
                          href="https://api.whatsapp.com/send/?phone=+270645335422&text=Hi!&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {detail}
                        </a>
                      ) : item.title === "Email" ? (
                        <a 
                          href={`mailto:${detail}`}
                          className="text-primary hover:underline"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-muted/30 p-8 rounded-lg border border-border/50"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion || hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Jabulani Sibiya"
                    className="bg-background transition-all duration-300 focus-visible:!border-primary focus-visible:!shadow-md focus-visible:!shadow-primary/20 focus-visible:!ring-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jabulani@company.co.za"
                    className="bg-background transition-all duration-300 focus-visible:!border-primary focus-visible:!shadow-md focus-visible:!shadow-primary/20 focus-visible:!ring-primary/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Waste Assessment Inquiry"
                  className="bg-background transition-all duration-300 focus-visible:!border-primary focus-visible:!shadow-md focus-visible:!shadow-primary/20 focus-visible:!ring-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your waste management needs..."
                  className="min-h-[150px] bg-background transition-all duration-300 focus-visible:!border-primary focus-visible:!shadow-md focus-visible:!shadow-primary/20 focus-visible:!ring-primary/30"
                />
              </div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, filter: "brightness(1.1)" }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Button
                  type="submit"
                  className="w-full rounded-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
