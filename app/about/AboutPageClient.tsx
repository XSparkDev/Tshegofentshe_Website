 "use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPageClient() {
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              ABOUT US
            </motion.h1>
            <motion.div
              className="mx-auto mb-12 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-sky-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />

            {/* Why Choose Us Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Why Choose Us?</h2>
              <motion.div
                className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-emerald-400 mb-6"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Tshegofentse Hazardous Waste &amp; Analytical Services, we take an innovative approach to waste
                management solutions. By evaluating options for reuse and recycling, we aim to reduce waste going to
                landfill. We offer environmentally friendly and green methods for managing waste while reducing
                pollution. Using legal and effective disposal technologies suitable for the waste types collected, we
                constantly seek to recover and extract value from waste. Using green waste management practices, we
                prevent and reduce pollution. We offer this innovative approach in a systematic way:
              </p>

              {/* Features Grid */}
              <motion.div
                className="grid md:grid-cols-2 gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">QUICK COLLECTIONS</h3>
                    <p className="text-muted-foreground">
                      With Speedy Waste Collections, we avoid unhygienic and unsafe workplaces
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">RECORD KEEPING</h3>
                    <p className="text-muted-foreground">
                      Managing waste records, manifests, disposal records and weighbridge certificates properly
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">CUSTOMISED APPROACH</h3>
                    <p className="text-muted-foreground">
                      As we take a customised approach rather than a one-size-fits-all attitude, we provide consistent
                      excellence in waste management
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">SAFETY &amp; LEGAL COMPLIANCE</h3>
                    <p className="text-muted-foreground">
                      Through our tailored assessments and training programs, we increase employees&apos; understanding
                      of health and safety issues
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Our Values Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">OUR VALUES</h2>
              <motion.div
                className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-sky-400 mb-6"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We at Tshegofentse Hazardous Waste &amp; Analytical Services believe that by operating with our core
                values always front of mind, we consistently offer services with excellence. Our corporate values are:
              </p>

              {/* Values Grid */}
              <motion.div
                className="grid md:grid-cols-2 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="border-l-4 border-primary pl-6 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h3 className="font-bold text-xl mb-2 text-foreground">SAFETY</h3>
                  <p className="text-muted-foreground">Our number one priority is safety</p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-primary pl-6 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                >
                  <h3 className="font-bold text-xl mb-2 text-foreground">LEGAL COMPLIANCE</h3>
                  <p className="text-muted-foreground">
                    We are licensed to transport and recycle hazardous waste and comply with all waste legislation.
                  </p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-primary pl-6 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  <h3 className="font-bold text-xl mb-2 text-foreground">SUSTAINABILITY</h3>
                  <p className="text-muted-foreground">
                    We take steps to keep the environment protected at all times
                  </p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-primary pl-6 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                >
                  <h3 className="font-bold text-xl mb-2 text-foreground">COMPETENCY</h3>
                  <p className="text-muted-foreground">
                    Our staff are trained and competent in the transportation of hazardous waste
                  </p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-primary pl-6 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  <h3 className="font-bold text-xl mb-2 text-foreground">KNOWLEDGE BASE</h3>
                  <p className="text-muted-foreground">
                    An in-house team of industry experts offers the latest solutions to complex waste issues.
                  </p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-primary pl-6 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
                >
                  <h3 className="font-bold text-xl mb-2 text-foreground">INNOVATION</h3>
                  <p className="text-muted-foreground">
                    Our commitment to finding innovative solutions to waste problems drives us forward.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}


