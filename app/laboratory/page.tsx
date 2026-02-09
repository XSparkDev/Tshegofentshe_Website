"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, FlaskConical, Droplets, TestTube, GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function LaboratoryPage() {
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
              className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground uppercase tracking-tight"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={baseTransition}
            >
              OUR LABORATORY
            </motion.h1>
            <motion.div
              className="mx-auto mb-12 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-sky-400"
              initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />

            {/* Introduction Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">In-House Analytical Services</h2>
              <motion.div
                className="h-1 w-28 rounded-full bg-gradient-to-r from-primary to-emerald-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Tshegofentse offers comprehensive in-house analytical services through our state-of-the-art laboratory facility. 
                Established in 2017, our laboratory has been providing exceptional testing services for various waste streams, 
                wastewater, potable water, borehole water, industrial effluent, and sewage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strategically located in Bedworthpark, Vereeniging, our laboratory provides reliable analytical services 
                to companies and individuals across South Africa. We combine advanced equipment with expert analysis to deliver 
                accurate, timely results that support informed decision-making.
              </p>
            </motion.section>

            {/* Services Offered Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Our Testing Capabilities</h2>
              <motion.div
                className="h-1 w-32 rounded-full bg-gradient-to-r from-primary to-sky-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="flex items-start gap-4"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ ...baseTransition }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <Droplets className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Waste Stream Analysis</h3>
                    <p className="text-muted-foreground">
                      Comprehensive testing and characterization of various waste streams to determine composition, 
                      hazardous properties, and appropriate disposal methods.
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
                    <TestTube className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Water Quality Testing</h3>
                    <p className="text-muted-foreground">
                      Analysis of potable water, borehole water, and industrial effluent to ensure compliance 
                      with quality standards and regulatory requirements.
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
                    <FlaskConical className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Wastewater & Sewage Analysis</h3>
                    <p className="text-muted-foreground">
                      Detailed testing of wastewater and sewage to assess treatment requirements and ensure 
                      environmental compliance.
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
                    <h3 className="font-bold text-xl mb-2 text-foreground">Industrial Effluent Testing</h3>
                    <p className="text-muted-foreground">
                      Specialized analysis of industrial effluent to identify contaminants and determine 
                      appropriate treatment and disposal solutions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Image Gallery Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Lab Equipment */}
                <motion.div
                  className="text-left"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...baseTransition }}
                >
                  <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden group cursor-pointer">
                    <Image
                      src="/lab_equipment.jpg"
                      alt="Lab Equipment"
                      fill
                      className="object-cover transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Lab Equipment</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Photometer Hanna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>COD Reactor Hanna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Conductivity meter Hanna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Thermo Discrete Analyser</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Turbidity meter Hanna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Dissolved Oxygen meter Hanna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Auto-titrator Hanna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Colilert Sealer & Incubator Idexx</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Discrete Analyser Analyses */}
                <motion.div
                  className="text-left"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
                >
                  <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden group cursor-pointer">
                    <Image
                      src="/lab_Discrete.jpg"
                      alt="Discrete Analyser Analyses"
                      fill
                      className="object-cover transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Discrete Analyser Analyses</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Chloride (Cl)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Sulphate (SO4)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Phosphate (PO4)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Total Alkalinity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Nitrates as (NO3)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Nitrites as (NO2)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Fluoride (F)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ammonium (NH4)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Hexavalent Chromium (Cr6+)</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Auto-titrator Analyses */}
                <motion.div
                  className="text-left"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
                >
                  <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden group cursor-pointer">
                    <Image
                      src="/lab_auto.jpg"
                      alt="Auto-titrator Analyses"
                      fill
                      className="object-cover transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Auto-titrator Analyses</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Carbonate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Chlorine free</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Alkalinity / Acidity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Nitrate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Chromium total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Cyanide dissolved</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Lead total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Nickel total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Silver total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Organic carbon total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Volatile fatty acids (VFA)</span>
                    </li>
                  </ul>
                </motion.div>

                {/* IDEXX Colilert Microbiological Analyses */}
                <motion.div
                  className="text-left"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
                >
                  <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden group cursor-pointer">
                    <Image
                      src="/lab_idexx.jpg"
                      alt="IDEXX Colilert Microbiological Analyses"
                      fill
                      className="object-cover transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">IDEXX Colilert Microbiological Analyses</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>E Coli</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Total Coliforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Faecal Coliforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Legionella</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Other Inorganic Analyses */}
                <motion.div
                  className="text-left"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.4 }}
                >
                  <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden group cursor-pointer">
                    <Image
                      src="/lab_other.jpg"
                      alt="Other Inorganic Analyses"
                      fill
                      className="object-cover transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Other Inorganic Analyses</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>COD - Chemical Oxygen Demand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Turbidity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Conductivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>pH @25°C</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Dissolved Oxygen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Total Suspended Solids</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Total Dissolved Solids</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            {/* Laboratory Manager Profile Card */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <motion.div
                className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 rounded-xl p-6 md:p-8 shadow-lg border border-slate-200/50 overflow-hidden relative"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
              >
                {/* Decorative left border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-emerald-400 to-sky-400" />
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                  {/* Image Section */}
                  <div className="flex-shrink-0 w-full md:w-80">
                    <div className="relative w-full md:w-80 h-96 md:h-96 rounded-lg overflow-hidden shadow-md border-2 border-slate-200 bg-slate-100">
                      <Image
                        src="/lab_neo.png"
                        alt="Neo Mosholi - Laboratory Manager"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 320px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          if (target.parentElement) {
                            target.parentElement.style.backgroundColor = '#e0e0e0'
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    {/* Name & Title */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Neo Mosholi
                      </h3>
                      <p className="text-lg font-semibold text-primary">Laboratory Manager</p>
                    </div>

                    {/* Education Section */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-lg text-foreground">Education</h4>
                      </div>
                      <div className="pl-7 space-y-1">
                        <p className="text-muted-foreground">BSc Microbiology</p>
                        <p className="text-muted-foreground">Post Graduate Diploma in Public Health</p>
                      </div>
                    </div>

                    {/* Qualifications Section 1 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-lg text-foreground">Laboratory and Auditing Qualifications</h4>
                      </div>
                      <ul className="pl-7 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">SANAS Iso 17025, Laboratory Management Systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">SANAS Iso 17025, Internal Auditing Course</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">SANAS Iso 17020, Inspection Body Systems Course</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">Iso 9001 QMS Implementation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">Iso 9001 Lead Auditing</span>
                        </li>
                      </ul>
                    </div>

                    {/* Qualifications Section 2 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-lg text-foreground">Environmental and Waste Management Training</h4>
                      </div>
                      <ul className="pl-7 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">Environmental Law</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">IWMSA Hazardous waste management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">IWMSA Healthcare Risk Waste Management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* Equipment & Scope Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Equipment & Scope of Analysis</h2>
              <motion.div
                className="h-1 w-36 rounded-full bg-gradient-to-r from-primary to-lime-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our laboratory is equipped with modern analytical instruments and staffed by qualified technicians 
                who ensure accurate and reliable results. Below is a comprehensive overview of our equipment and 
                the scope of analyses we can perform internally:
              </p>

              {/* Equipment List */}
              <motion.div
                className="grid md:grid-cols-2 gap-6 mb-8"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="font-bold text-xl mb-2 text-foreground">Advanced Analytical Instruments</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art equipment for precise chemical and physical analysis
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="font-bold text-xl mb-2 text-foreground">Quality Assurance Systems</h3>
                  <p className="text-muted-foreground">
                    Comprehensive quality control measures ensuring reliable and accurate results
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="font-bold text-xl mb-2 text-foreground">Sample Processing Capabilities</h3>
                  <p className="text-muted-foreground">
                    Efficient sample preparation and handling for various material types
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="font-bold text-xl mb-2 text-foreground">Certified Testing Methods</h3>
                  <p className="text-muted-foreground">
                    Standardized testing procedures following industry best practices and regulations
                  </p>
                </div>
              </motion.div>

              {/* Scope of Analyses */}
              <motion.div
                className="bg-muted/30 rounded-lg p-6"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <h3 className="font-bold text-xl mb-4 text-foreground">Internal Analysis Capabilities</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Chemical composition analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Physical property testing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Contaminant identification and quantification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Hazardous waste characterization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Water quality parameter analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Environmental compliance testing</p>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* Location & Contact Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Laboratory Location</h2>
              <motion.div
                className="h-1 w-28 rounded-full bg-gradient-to-r from-primary to-cyan-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our laboratory is conveniently located in <strong className="text-foreground">Bedworthpark, Vereeniging</strong>, 
                making it easily accessible for clients throughout the region. We welcome both companies and individuals 
                seeking reliable analytical services. For inquiries about our testing capabilities or to schedule a consultation, 
                please contact us through our standard channels.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For a full overview of laboratory services, certifications, and sample submission guidelines, you can also
                visit our dedicated laboratory site, Vaal Water Lab.
              </p>
            </motion.section>

            {/* External Laboratory Website CTA */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              whileInView={shouldReduceMotion ? undefined : itemVariants.visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={baseTransition}
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-between rounded-xl border border-border/60 bg-muted/40 px-6 py-5">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-1">Visit Vaal Water Lab</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore our dedicated laboratory website for detailed information on methods, pricing, and sample logistics.
                  </p>
                </div>
                <a
                  href="https://vaalwaterlab.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    vaalwaterlab.co.za
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}

