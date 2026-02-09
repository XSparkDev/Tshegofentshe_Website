"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, ExternalLink, Linkedin, Facebook } from "lucide-react"

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion()

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const baseTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: "easeOut",
  }

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
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground uppercase tracking-tight"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={baseTransition}
            >
              SERVICES
            </motion.h1>

            {/* Current Challenge Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Current Challenge</h2>
              <motion.div
                className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-emerald-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Non – Compliance in Hazardous Waste Disposal. Evident in Hazardous Waste found in General Waste
                Landfill sites and the persistent illegal dumping detrimental to humans, animals, and the ecosystem.
              </p>
            </motion.section>

            {/* Hazardous Waste Specialists Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Hazardous Waste Specialists</h2>
              <motion.div
                className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-sky-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team understands the nature and characteristics of hazardous waste. We often find that poor
                decisions are made about waste disposal due to businesses lacking the appropriate information,
                resulting in excessive amounts of waste being disposed of at landfills and wastewater treatment plants.
              </p>
            </motion.section>

            {/* Practical Solutions Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">PRACTICAL SOLUTIONS:</h2>
              <motion.div
                className="h-1 w-28 rounded-full bg-gradient-to-r from-primary to-lime-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-4"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ ...baseTransition }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Waste Assessment</h3>
                    <p className="text-muted-foreground">
                      Free assessment and characterization of Hazardous Waste.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.05 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Compliance Assist</h3>
                    <p className="text-muted-foreground">
                      Assisting waste generators with compliance through Training.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Waste Exchange</h3>
                    <p className="text-muted-foreground">
                      A platform to exchange waste by linking generators to processors.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.15 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Waste Advisory</h3>
                    <p className="text-muted-foreground">
                      Advisory service on treatment options, reducing disposal fees and exploring reuse.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Speedy Waste Collection Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Speedy Waste Collection</h2>
              <motion.div
                className="h-1 w-28 rounded-full bg-gradient-to-r from-primary to-amber-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                We promise our customers speedy collections with no delays. With Tshegofentse Hazardous Waste &amp;
                Analytical Services, you will never be kept waiting in an unsafe, unhygienic workplace while waste
                accumulates. Our turnaround time on waste collection after quote acceptance is unbeatable, and we go
                above and beyond to ensure no delays after you have called for a collection. We value communication,
                using a CRM system to keep records on a collection schedule.
              </p>
            </motion.section>

            {/* Waste Management CRM System Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">WASTE MANAGEMENT CRM SYSTEM</h2>
              <motion.div
                className="h-1 w-32 rounded-full bg-gradient-to-r from-primary to-cyan-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                By using CRM software, we keep our client waste records up to date, allowing us to efficiently plan
                and schedule timeous collections and proper route planning.
              </p>
            </motion.section>

            {/* Safety Emphasis Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Safety Emphasis</h2>
              <motion.div
                className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-rose-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="space-y-3 mb-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground">Waste Generator Record Management</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground">CRM System</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground">Plan &amp; SCHEDULE</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground">COMPLIANCE ASSISTANCE</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As part of our objective, we seek to repurpose waste and dispose of it safely and in an
                environmentally friendly way. We also assist our customers by evaluating their operations for safety
                and environmental hazards. We provide tailored assessments and training to increase employees&apos; knowledge
                of safety, risk, health and hygiene.
              </p>
            </motion.section>

            {/* Wash Bay Effluent Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">WASH BAY EFFLUENT</h2>
              <motion.div
                className="h-1 w-28 rounded-full bg-gradient-to-r from-primary to-indigo-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you are having persistent problems with your wash bay, such as clogged sludge pits, difficulty
                removing solids from oily water or excessive sludge removal costs, Tshegofentse Hazardous Waste &amp;
                Analytical Services has the solution for you. Is your sludge pit constantly clogged? Are you struggling
                to maintain your wash bay area or remove solids from oily water? Are you paying excessive amounts for
                Sludge disposal? With our comprehensive effluent treatment services, we assist your company in achieving
                Zero Liquid Discharge by reusing your wastewater. Moreover, you will save on disposal fees, potable water
                costs, as well as penalties paid to the municipality for off-spec discharge of effluent.
              </p>
            </motion.section>

            {/* Fat and Grease Traps Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">FAT AND GREASE TRAPS</h2>
              <motion.div
                className="h-1 w-32 rounded-full bg-gradient-to-r from-primary to-yellow-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Poor management and maintenance of fat and grease traps can lead to problems including sewer line
                blockages, bad odours, high COD load to local wastewater treatment plants, unhygienic workplaces and
                more. The services we provide lessen the impact of FOG, easing the burden on the wastewater infrastructure
                in big cities.
              </p>
            </motion.section>

            {/* Medical Waste Services (Biomed Waste / ThutoLab) */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Medical Waste Services</h2>
              <motion.div
                className="h-1 w-32 rounded-full bg-gradient-to-r from-primary to-emerald-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our medical waste operations are supported by dedicated partners focused on safe, compliant handling and
                treatment of healthcare risk waste. Connect with our medical waste unit online or visit the dedicated
                website for more information.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a
                  href="https://www.linkedin.com/company/thutolab/?originalSubdomain=za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>ThutoLab on LinkedIn</span>
                </a>
                <a
                  href="https://www.facebook.com/ThutoLab20f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  <span>ThutoLab on Facebook</span>
                </a>
                <a
                  href="https://biomedwaste.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <span>Visit biomedwaste.co.za</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.section>

            {/* Onsite Waste Sorting Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">ONSITE WASTE SORTING</h2>
              <motion.div
                className="h-1 w-32 rounded-full bg-gradient-to-r from-primary to-emerald-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many industries face the daily challenge of waste buildup and are uncertain how to dispose of it in an
                environmentally friendly way. By implementing a site plan and improving your site layout for waste
                sorting, we can help you create a safer, cleaner workplace waste collection system. Waste disposal
                containers of various types and sizes suitable for the workplace and type of waste generated allow you to
                save on disposal fees by sorting mixed waste.
              </p>
            </motion.section>

            {/* Training Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Training</h2>
              <motion.div
                className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-fuchsia-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Students at the Tshegofentse Training Academy are trained for practical jobs that have a significant
                positive effect on the environment. With this initiative, we can share our knowledge and skills so
                trainees can become proficient at managing waste challenges and securing the environment. At Tshegofentse
                Hazardous Waste &amp; Analytical Services, we believe that the advancement of knowledge and practical
                skills is what allows us as a society to grow. Visit{" "}
                <a
                  href="https://www.tshegofentse-academy.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.tshegofentse-academy.co.za
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:admin@tshegofentse.co.za"
                  className="text-primary hover:underline"
                >
                  admin@tshegofentse.co.za
                </a>{" "}
                to learn more.
              </p>
            </motion.section>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
