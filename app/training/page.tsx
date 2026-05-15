"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useReducedMotion } from "framer-motion"
import {
  CheckCircle2,
  GraduationCap,
  Users,
  BookOpen,
  ExternalLink,
  Target,
  TrendingUp,
  Lightbulb,
  Linkedin,
  Facebook,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TrainingPage() {
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
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              TRAINING
            </motion.h1>
            <motion.div
              className="mx-auto mb-12 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-sky-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
          </div>
        </div>
      </motion.section>

      {/* Core Values Three-Card Section */}
      <motion.section
        className="py-20 md:py-24 bg-[#F8F9FA]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Optional Section Heading */}
            <motion.div
              className="text-center mb-12"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Our Core Values</h2>
              <motion.div
                className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-emerald-400"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              />
            </motion.div>

            {/* Three-Card Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
              {/* Card 1 - PLAN (Teal/Turquoise) */}
              <motion.div
                className="bg-[#4ECDC4] rounded-xl p-6 md:p-8 text-center min-h-[240px] flex flex-col items-center justify-start shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <Target className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-[#333] uppercase">PLAN</h3>
                <p className="text-sm leading-relaxed text-[#333]">
                  By constantly aligning our training with occupation needs and technological changes in the workplace.
                </p>
              </motion.div>

              {/* Card 2 - CULTURE (Lime Green) */}
              <motion.div
                className="bg-[#8BC34A] rounded-xl p-6 md:p-8 text-center min-h-[240px] flex flex-col items-center justify-start shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-[#333] uppercase">CULTURE</h3>
                <p className="text-sm leading-relaxed text-[#333]">
                  Continuous Improvement.
                </p>
              </motion.div>

              {/* Card 3 - HOW (Dark Gray/Charcoal) */}
              <motion.div
                className="bg-[#4A4A4A] rounded-xl p-6 md:p-8 text-center min-h-[240px] flex flex-col items-center justify-start shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white uppercase">HOW</h3>
                <p className="text-sm leading-relaxed text-white">
                  Working with Industry subject matter experts → Developing relevant training material → Using Technology → Improving training methods.
                </p>
              </motion.div>
            </div>

            {/* Two Paragraphs Below Cards */}
            <motion.div
              className="max-w-3xl mx-auto mt-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-base md:text-lg leading-relaxed text-[#555] mb-6 text-center">
                TSHEGOFENTSE TRAINING ACADEMY is a value adding and occupation aligned training provider. For us Training is not about just getting that certificate, but what you are able to do with it. We provide both unit standard based accredited training and customized training as per client requirements.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#555] text-center">
                Our organization is run by technically inclined personnel who are able to provide valuable advisory services to clients. Our team of facilitators consists of ECSA registered Engineers, Scientists, Experienced Educators and Industry subject matter experts.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 md:py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              animate={shouldReduceMotion ? undefined : itemVariants.visible}
              transition={{ ...baseTransition, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">TSHEGOFENTSE TRAINING ACADEMY</h2>
              <motion.div
                className="h-1 w-28 rounded-full bg-gradient-to-r from-primary to-emerald-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                TSHEGOFENTSE TRAINING ACADEMY is a value-adding and occupation-aligned training provider. For us, training is not merely about obtaining a certificate, but about what you can accomplish with it. We are committed to empowering individuals and organizations with practical knowledge and skills that translate directly into workplace excellence and professional growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We provide both unit standard-based accredited training and customized training programs tailored to meet specific client requirements. Our flexible approach ensures that whether you need formal certification or specialized skills development, we deliver solutions that align with your organizational objectives and industry standards.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our organization is led by technically inclined personnel who provide valuable advisory services to clients. Our distinguished team of facilitators consists of ECSA registered Engineers, accomplished Scientists, experienced Educators, and industry subject matter experts. This diverse expertise enables us to deliver comprehensive, practical, and industry-relevant training that bridges the gap between theoretical knowledge and real-world application.
              </p>
            </motion.section>

            {/* Training Approach Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              animate={shouldReduceMotion ? undefined : itemVariants.visible}
              transition={{ ...baseTransition, delay: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Our Training Approach</h2>
              <motion.div
                className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-sky-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
              />

              {/* Features Grid */}
              <motion.div
                className="grid md:grid-cols-2 gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
              >
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">ACCREDITED TRAINING</h3>
                    <p className="text-muted-foreground">
                      Unit standard-based accredited programs that meet national qualifications framework requirements
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1.15 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">CUSTOMIZED PROGRAMS</h3>
                    <p className="text-muted-foreground">
                      Tailored training solutions designed to address your specific organizational needs and challenges
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">EXPERT FACILITATORS</h3>
                    <p className="text-muted-foreground">
                      Learn from ECSA registered Engineers, Scientists, Educators, and industry subject matter experts
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1.25 }}
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">PRACTICAL APPLICATION</h3>
                    <p className="text-muted-foreground">
                      Focus on real-world skills and competencies that deliver measurable workplace impact
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.section>

            {/* Advisory Services Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : itemVariants.hidden}
              animate={shouldReduceMotion ? undefined : itemVariants.visible}
              transition={{ ...baseTransition, delay: 1.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Technical Advisory Services</h2>
              <motion.div
                className="h-1 w-32 rounded-full bg-gradient-to-r from-primary to-lime-400 mb-6"
                initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond training, our technically inclined personnel provide valuable advisory services to clients. Our team's deep industry knowledge and technical expertise enable us to offer strategic guidance, process optimization recommendations, and technical consulting that supports your organization's growth and compliance objectives.
              </p>
            </motion.section>

            {/* Learn More Button + Social Links */}
            <motion.div
              className="flex flex-col items-center gap-4 mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
            >
              <a
                href="https://tshegofentse-academy.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium flex items-center gap-2"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>

              <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Connect with Tshegofentse Training Academy</span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/tshegofentse-training-academy/?originalSubdomain=za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.facebook.com/tshegofentsetraining"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="hidden sm:inline">Facebook</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}

