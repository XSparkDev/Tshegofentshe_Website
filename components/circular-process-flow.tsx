"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw, Check } from "lucide-react"

// Process steps with exact specifications
const steps = [
  {
    id: 1,
    number: 1,
    title: "Waste Assessment",
    solid: true,
    color: "#ef4444", // Red
    subLabels: [],
  },
  {
    id: 2,
    number: 2,
    title: "Waste Analysis",
    solid: true,
    color: "#f97316", // Orange
    subLabels: [{ text: "In House Laboratory", position: "below" }],
  },
  {
    id: 3,
    number: 3,
    title: "Options",
    solid: true,
    color: "#84cc16", // Yellow-green
    subLabels: [
      { text: "Reuse", position: "above" },
      { text: "Recycle", position: "above" },
    ],
  },
  {
    id: 4,
    number: 4,
    title: "Beneficiation",
    solid: true,
    color: "#22c55e", // Green
    subLabels: [{ text: "Waste Exchange", position: "below" }],
  },
  {
    id: 5,
    number: 5,
    title: "Chemical Treatment",
    solid: true,
    color: "#06b6d4", // Cyan
    subLabels: [],
  },
  {
    id: 6,
    number: 6,
    title: "SAFE Disposal",
    solid: true,
    color: "#3b82f6", // Blue
    subLabels: [],
  },
]

// Tagline and bullet points
const tagline =
  "Our strategy leaves Waste Disposal always as the last Option to ensure all green solutions and opportunities are exhausted first."

const bulletPoints = [
  "We Only do SAFE & LEGAL compliance disposals.",
  "We do Speedy NO Delay Waste Collections – this is our promise to our customers.",
  "We will not keep you waiting while your waste accumulates.",
  "We provide smart interventions to the handling, treatment, and reuse of Waste",
]

interface StepPosition {
  x: number
  y: number
  angle: number
}

// Calculate step positions in a circle (clock positions: 12, 2, 4, 6, 8, 10)
function getStepPosition(index: number, radius: number, centerX: number, centerY: number): StepPosition {
  // Start at 12 o'clock (top), then 2, 4, 6, 8, 10
  // 12 o'clock = -90°, then add 60° for each step
  const angle = (-90 + index * 60) * (Math.PI / 180)
  return {
    x: centerX + Math.cos(angle) * radius,
    y: centerY + Math.sin(angle) * radius,
    angle: angle,
  }
}

// Generate curved SVG path between two points
function getCurvedPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  centerX: number,
  centerY: number,
  radius: number
): string {
  // Calculate control point for smooth curve
  const midX = (startX + endX) / 2
  const midY = (startY + endY) / 2
  const dx = midX - centerX
  const dy = midY - centerY
  const distance = Math.sqrt(dx * dx + dy * dy)
  const scale = radius * 0.3 // Curve depth
  const controlX = centerX + (dx / distance) * scale
  const controlY = centerY + (dy / distance) * scale

  return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`
}

interface ProcessStepProps {
  step: typeof steps[0]
  position: StepPosition
  index: number
  isActive: boolean
  isHighlighted: number | null
  shouldReduceMotion: boolean | null
  onStepClick: (id: number) => void
  animationDelay: number
  radius: number
}

function ProcessStep({
  step,
  position,
  index,
  isActive,
  isHighlighted,
  shouldReduceMotion,
  onStepClick,
  animationDelay,
  radius,
}: ProcessStepProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isHighlightedStep = isHighlighted === step.id

  return (
    <g>
      {/* Sub-labels above */}
      {step.subLabels
        .filter((label) => label.position === "above")
        .map((label, i) => {
          const labelX = position.x + (i === 0 ? -radius * 0.15 : radius * 0.15)
          const labelY = position.y - radius * 0.35
          return (
            <motion.g
              key={i}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                delay: animationDelay + 0.3,
                duration: 0.4,
              }}
            >
              <rect
                x={labelX - radius * 0.12}
                y={labelY - radius * 0.05}
                width={radius * 0.24}
                height={radius * 0.1}
                rx={6}
                fill="white"
                stroke={step.color}
                strokeWidth={1.5}
                strokeDasharray="4,3"
                className="drop-shadow-sm"
              />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={radius * 0.04}
                className="font-semibold fill-gray-600"
              >
                {label.text}
              </text>
            </motion.g>
          )
        })}

      {/* Main step group */}
      <g
        role="button"
        aria-label={`${step.title} - Step ${step.number}${step.subLabels.length > 0 ? `, ${step.subLabels.map((l) => l.text).join(", ")}` : ""}`}
        tabIndex={0}
        onClick={() => onStepClick(step.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onStepClick(step.id)
          }
        }}
        style={{ cursor: "pointer", outline: "none" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect on hover/highlight */}
        <AnimatePresence>
          {(isHovered || isHighlightedStep) && (
            <motion.circle
              cx={position.x}
              cy={position.y}
              r={radius * 0.2}
              fill={step.color}
              opacity={0.15}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 0.15 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Numbered circle badge */}
        <motion.g
          initial={shouldReduceMotion ? undefined : { scale: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: isHighlightedStep ? 1.05 : 1,
                  opacity: 1,
                }
          }
          transition={{
            scale: {
              delay: animationDelay,
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
            },
            opacity: { delay: animationDelay, duration: 0.4 },
          }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
        >
          {/* Gradient for number circle */}
          <defs>
            <linearGradient id={`gradient-${step.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={step.color} stopOpacity="1" />
              <stop offset="100%" stopColor={step.color} stopOpacity="0.8" />
            </linearGradient>
          </defs>

          <circle
            cx={position.x}
            cy={position.y - radius * 0.25}
            r={radius * 0.08}
            fill={`url(#gradient-${step.id})`}
            className="drop-shadow-lg"
            style={{
              filter: isHovered || isHighlightedStep ? `drop-shadow(0 0 15px ${step.color})` : undefined,
            }}
          />
          <text
            x={position.x}
            y={position.y - radius * 0.25}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={radius * 0.07}
            className="font-bold fill-white"
          >
            {step.number}
          </text>
        </motion.g>

        {/* Step card */}
        <motion.rect
          x={position.x - radius * 0.22}
          y={position.y - radius * 0.12}
          width={radius * 0.44}
          height={radius * 0.24}
          rx={12}
          fill="white"
          stroke={step.color}
          strokeWidth={step.solid ? 3 : 2}
          strokeDasharray={step.solid ? "none" : "6,4"}
          className="drop-shadow-lg"
          initial={shouldReduceMotion ? undefined : { scale: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: isHovered || isHighlightedStep ? 1.05 : 1,
                  opacity: 1,
                }
          }
          transition={{
            scale: {
              delay: animationDelay,
              duration: 0.3,
            },
            opacity: { delay: animationDelay, duration: 0.4 },
          }}
          style={{
            filter: isHovered || isHighlightedStep ? `drop-shadow(0 0 20px ${step.color}40)` : undefined,
          }}
        />

        {/* Step title - properly centered with good padding */}
        <text
          x={position.x}
          y={position.y - radius * 0.02}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={radius * 0.05}
          className="font-bold fill-gray-800"
        >
          {step.title.split(" ")[0]}
        </text>
        {step.title.split(" ").length > 1 && (
          <text
            x={position.x}
            y={position.y + radius * 0.05}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={radius * 0.05}
            className="font-bold fill-gray-800"
          >
            {step.title.split(" ")[1]}
          </text>
        )}
      </g>

      {/* Sub-labels below */}
      {step.subLabels
        .filter((label) => label.position === "below")
        .map((label, i) => {
          const labelY = position.y + radius * 0.3
          return (
            <motion.g
              key={i}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                delay: animationDelay + 0.3,
                duration: 0.4,
              }}
            >
              <rect
                x={position.x - radius * 0.25}
                y={labelY - radius * 0.05}
                width={radius * 0.5}
                height={radius * 0.1}
                rx={6}
                fill="white"
                stroke={step.color}
                strokeWidth={1.5}
                strokeDasharray="4,3"
                className="drop-shadow-sm"
              />
              <text
                x={position.x}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={radius * 0.04}
                className="font-semibold fill-gray-600"
              >
                {label.text}
              </text>
            </motion.g>
          )
        })}
    </g>
  )
}

// Animated particle that flows along the path
function FlowParticle({
  startPos,
  endPos,
  centerX,
  centerY,
  radius,
  color,
  shouldReduceMotion,
  animationDelay,
  pathIndex,
}: {
  startPos: StepPosition
  endPos: StepPosition
  centerX: number
  centerY: number
  radius: number
  color: string
  shouldReduceMotion: boolean | null
  animationDelay: number
  pathIndex: number
}) {
  if (shouldReduceMotion) return null

  // Calculate control point for the curve
  const midX = (startPos.x + endPos.x) / 2
  const midY = (startPos.y + endPos.y) / 2
  const dx = midX - centerX
  const dy = midY - centerY
  const distance = Math.sqrt(dx * dx + dy * dy)
  const scale = radius * 0.3
  const controlX = centerX + (dx / distance) * scale
  const controlY = centerY + (dy / distance) * scale

  // Calculate position on quadratic bezier curve at time t
  const getPointOnCurve = (t: number) => {
    const x = (1 - t) * (1 - t) * startPos.x + 2 * (1 - t) * t * controlX + t * t * endPos.x
    const y = (1 - t) * (1 - t) * startPos.y + 2 * (1 - t) * t * controlY + t * t * endPos.y
    return { x, y }
  }

  // Create keyframes for smooth curve animation
  const keyframes = Array.from({ length: 21 }, (_, i) => {
    const t = i / 20
    return getPointOnCurve(t)
  })

  return (
    <motion.circle
      r={radius * 0.015}
      fill={color}
      initial={{ opacity: 0, cx: startPos.x, cy: startPos.y }}
      animate={{
        cx: keyframes.map((p) => p.x),
        cy: keyframes.map((p) => p.y),
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        cx: {
          delay: animationDelay,
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          times: keyframes.map((_, i) => i / 20),
        },
        cy: {
          delay: animationDelay,
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          times: keyframes.map((_, i) => i / 20),
        },
        opacity: {
          delay: animationDelay,
          duration: 2,
          repeat: Infinity,
          times: [0, 0.1, 0.9, 1],
        },
      }}
    />
  )
}

export function CircularProcessFlow() {
  const shouldReduceMotion = useReducedMotion()
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [highlightedStep, setHighlightedStep] = useState<number | null>(null)
  const [animationKey, setAnimationKey] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = Math.min(containerRef.current.offsetWidth, 800)
        setDimensions({ width, height: width })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2
  const radius = dimensions.width * 0.32

  const stepPositions = steps.map((_, index) => getStepPosition(index, radius, centerX, centerY))

  const handlePlayAnimation = () => {
    setAnimationKey((prev: number) => prev + 1)
    setIsAnimating(true)
    setActiveStep(null)
    setHighlightedStep(null)

    // Sequential activation
    steps.forEach((step, index) => {
      setTimeout(() => {
        setActiveStep(step.id)
        setTimeout(() => {
          if (index === steps.length - 1) {
            setActiveStep(null)
            setIsAnimating(false)
          }
        }, 300)
      }, index * 200)
    })
  }

  useEffect(() => {
    // Initial animation on mount
    if (!shouldReduceMotion) {
      const timer = setTimeout(() => {
        handlePlayAnimation()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [shouldReduceMotion])

  const handleStepClick = (stepId: number) => {
    setHighlightedStep(stepId === highlightedStep ? null : stepId)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-8 md:mb-12 px-4"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: -20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 leading-tight">
            OUR STEPWISE APPROACH TO WASTE MANAGEMENT
          </h2>
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-primary mb-3">
            WASTE MANAGEMENT: A STEPWISE APPROACH
          </p>
        </motion.div>

        {/* Play Animation Button - Hidden on mobile */}
        <div className="hidden md:flex justify-center mb-6 md:mb-8 px-4">
          <motion.button
            onClick={handlePlayAnimation}
            className="px-5 py-2.5 md:px-6 md:py-3 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg text-sm md:text-base"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          >
            {isAnimating ? (
              <>
                <RotateCcw className="w-5 h-5" />
                Restart Process
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Restart Process
              </>
            )}
          </motion.button>
        </div>

        {/* Circular Process Flow - Desktop */}
        <div className="hidden md:block">
          <div ref={containerRef} className="relative w-full max-w-4xl mx-auto aspect-square">
            <svg
              viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
              className="w-full h-full"
              style={{ overflow: "visible" }}
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Waste Management Process Flow Diagram"
            >
              <defs>
                {/* Rotating gradient for center ring */}
                <radialGradient id="centerGradient">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                  <stop offset="20%" stopColor="#f97316" stopOpacity="0.2" />
                  <stop offset="40%" stopColor="#84cc16" stopOpacity="0.2" />
                  <stop offset="60%" stopColor="#22c55e" stopOpacity="0.2" />
                  <stop offset="80%" stopColor="#06b6d4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </radialGradient>
              </defs>

              {/* Center rotating gradient ring */}
              <motion.circle
                cx={centerX}
                cy={centerY}
                r={radius * 0.3}
                fill="none"
                stroke="url(#centerGradient)"
                strokeWidth={4}
                opacity={0.6}
                initial={shouldReduceMotion ? undefined : { opacity: 0 }}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 0.6,
                        rotate: 360,
                      }
                }
                transition={{
                  opacity: { delay: 0, duration: 0.5 },
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{ transformOrigin: `${centerX}px ${centerY}px` }}
              />

              {/* Center hub */}
              <circle cx={centerX} cy={centerY} r={radius * 0.2} fill="white" className="drop-shadow-lg" />
              <text
                x={centerX}
                y={centerY - radius * 0.05}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={radius * 0.06}
                className="font-bold fill-gray-700"
              >
                PROCESS
              </text>
              <text
                x={centerX}
                y={centerY + radius * 0.05}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={radius * 0.06}
                className="font-bold fill-gray-700"
              >
                FLOW
              </text>

              {/* Connecting paths with arrows */}
              {stepPositions.map((startPos, index) => {
                const endIndex = (index + 1) % stepPositions.length
                const endPos = stepPositions[endIndex]
                const path = getCurvedPath(startPos.x, startPos.y, endPos.x, endPos.y, centerX, centerY, radius)

                return (
                  <g key={`path-${index}`}>
                    {/* Invisible path for animateMotion */}
                    <path
                      id={`path-${index}`}
                      d={path}
                      fill="none"
                      stroke="transparent"
                      strokeWidth={2}
                    />
                    {/* Visible path */}
                    <motion.path
                      d={path}
                      fill="none"
                      stroke={steps[index].color}
                      strokeWidth={3}
                      strokeDasharray={steps[index].solid ? "none" : "8,4"}
                      opacity={highlightedStep === steps[index].id || highlightedStep === steps[endIndex].id ? 0.8 : 0.3}
                      initial={shouldReduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              pathLength: 1,
                              opacity: highlightedStep === steps[index].id || highlightedStep === steps[endIndex].id ? 0.8 : 0.3,
                            }
                      }
                      transition={{
                        pathLength: {
                          delay: 0.5 + index * 0.15,
                          duration: 0.8,
                          ease: "easeInOut",
                        },
                        opacity: { duration: 0.3 },
                      }}
                    />
                    {/* Arrow marker */}
                    <motion.circle
                      cx={endPos.x}
                      cy={endPos.y}
                      r={4}
                      fill={steps[index].color}
                      initial={shouldReduceMotion ? undefined : { opacity: 0 }}
                      animate={shouldReduceMotion ? undefined : { opacity: 1 }}
                      transition={{
                        delay: 0.5 + index * 0.15 + 0.8,
                        duration: 0.3,
                      }}
                    />
                  </g>
                )
              })}

              {/* Process steps */}
              {steps.map((step, index) => (
                <ProcessStep
                  key={`${step.id}-${animationKey}`}
                  step={step}
                  position={stepPositions[index]}
                  index={index}
                  isActive={activeStep === step.id}
                  isHighlighted={highlightedStep}
                  shouldReduceMotion={shouldReduceMotion}
                  onStepClick={handleStepClick}
                  animationDelay={0.5 + index * 0.2}
                  radius={radius}
                />
              ))}

              {/* Flow particles */}
              {!shouldReduceMotion &&
                stepPositions.map((startPos, index) => {
                  const endIndex = (index + 1) % stepPositions.length
                  const endPos = stepPositions[endIndex]
                  return (
                    <FlowParticle
                      key={`particle-${index}-${animationKey}`}
                      startPos={startPos}
                      endPos={endPos}
                      centerX={centerX}
                      centerY={centerY}
                      radius={radius}
                      color={steps[index].color}
                      shouldReduceMotion={shouldReduceMotion}
                      animationDelay={0.5 + index * 0.15 + 0.8}
                      pathIndex={index}
                    />
                  )
                })}
            </svg>
          </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="md:hidden space-y-6 max-w-md mx-auto px-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="w-full"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              {/* Step card - full width */}
              <div
                className={`w-full p-5 rounded-lg bg-white shadow-md ${
                  step.solid ? "border-2" : "border-2 border-dashed"
                }`}
                style={{
                  borderColor: step.color,
                }}
              >
                {/* Number and title row */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg flex-1">{step.title}</h3>
                </div>

                {/* Sub-labels above */}
                {step.subLabels
                  .filter((l) => l.position === "above")
                  .length > 0 && (
                  <div className="mb-2">
                    {step.subLabels
                      .filter((l) => l.position === "above")
                      .map((label, i) => (
                        <span
                          key={i}
                          className="text-xs text-gray-600 font-medium mr-2 px-2 py-1 bg-gray-100 rounded"
                        >
                          {label.text}
                        </span>
                      ))}
                  </div>
                )}

                {/* Sub-labels below */}
                {step.subLabels
                  .filter((l) => l.position === "below")
                  .map((label, i) => (
                    <p key={i} className="text-sm text-gray-600 mt-2">
                      {label.text}
                    </p>
                  ))}
              </div>

              {/* Arrow (except last) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="flex justify-center my-2"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M19 12l-7 7-7-7"
                      stroke={step.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="text-center max-w-4xl mx-auto mt-12 md:mt-16 mb-6 md:mb-8 text-base md:text-lg text-gray-700 leading-relaxed px-4"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          {tagline}
        </motion.p>

        {/* Bullet Points */}
        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4 px-4">
          {bulletPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 md:gap-4"
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="flex-shrink-0 mt-1">
                <motion.div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: steps[index % steps.length].color }}
                  initial={shouldReduceMotion ? undefined : { scale: 0, rotate: -180 }}
                  whileInView={shouldReduceMotion ? undefined : { scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 2.2 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
              </div>
              <p className="text-sm md:text-base text-gray-700 pt-0.5 leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
