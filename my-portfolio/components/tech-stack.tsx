"use client"

import { useEffect, useState } from "react"
import { FaReact, FaGit, FaFigma } from "react-icons/fa6"
import { FaJava } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVite, SiStorybook, SiRadixui, SiFramer, SiHtml5, SiCss3, SiJavascript, SiPython, SiNodedotjs } from "react-icons/si"
import SectionReveal from "@/components/section-reveal"
import { useInView } from "@/hooks/use-in-view"

const technologies = [
    // Inner ring (8 icons)
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "HTML", icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", icon: SiCss3, color: "#1572b6" },
    { name: "Python", icon: SiPython, color: "#3776ab" },
    { name: "Java", icon: FaJava, color: "#ed8b00" },
    // Outer ring (8 icons)
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Vite", icon: SiVite, color: "#646cff" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Git", icon: FaGit, color: "#f1502f" },
    { name: "Figma", icon: FaFigma, color: "#f24e1e" },
    { name: "Storybook", icon: SiStorybook, color: "#ff4785" },
    { name: "Radix UI", icon: SiRadixui, color: "#0066ff" },
    { name: "Framer", icon: SiFramer, color: "#0055ff" },
]

export default function TechStack() {
    const { ref: sectionRef, inView } = useInView({ threshold: 0.2, once: true })
    const [isVisible, setIsVisible] = useState(false)
    const [rotation1, setRotation1] = useState(0)
    const [rotation2, setRotation2] = useState(0)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768) // md breakpoint
        }
        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)
        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])

    useEffect(() => {
        if (inView) {
                    setIsVisible(true)
                }
    }, [inView])

    useEffect(() => {
        if (!isVisible) return

        let animationFrame: number
        let currentDirection = 1
        let rotationAmount = 0
        const maxRotation = 120
        const speed = 0.5

        const animate = () => {
            rotationAmount += speed * currentDirection

            if (Math.abs(rotationAmount) >= maxRotation) {
                currentDirection *= -1
                rotationAmount = Math.max(-maxRotation, Math.min(maxRotation, rotationAmount))
            }

            setRotation1(rotationAmount)
            setRotation2(-rotationAmount * 0.7)

            animationFrame = requestAnimationFrame(animate)
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [isVisible])

    return (
        <section ref={sectionRef} id="tech-stack" className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background relative">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-16 text-center">
                    <SectionReveal as="h2" className="text-4xl sm:text-5xl md:text-5xl font-bold mb-3" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <span className="gradient-text">Tech Stack</span>
                    </SectionReveal>
                    <SectionReveal as="p" className="text-muted-foreground max-w-2xl mx-auto mb-4" animation="up" delayMs={100} durationMs={700} inViewOptions={{ threshold: 0.2, once: true }}>
                        Tools and technologies I use to build fast, modern apps.
                    </SectionReveal>
                    <SectionReveal className="w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full mx-auto" animation="up" delayMs={150} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} />
                </div>

                <div className="relative w-full h-96 md:h-[28rem] flex items-center justify-center">
                    {/* Orbit circles - 2 rings for spacing */}
                    <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-accent/50 dark:border-accent/20 rounded-full"></div>
                    <div className="absolute w-96 h-96 md:w-[28rem] md:h-[28rem] border border-accent/40 dark:border-accent/10 rounded-full"></div>

                    {/* Center dot */}
                    <div className="absolute w-3 h-3 bg-accent rounded-full z-10"></div>

                    {technologies.map((tech, index) => {
                        const Icon = tech.icon
                        // Split technologies into 2 rings (8 icons each)
                        const isInnerRing = index < 8
                        const ringIndex = isInnerRing ? index : index - 8
                        const totalInRing = 8

                        const angle = (ringIndex / totalInRing) * 360 + (isInnerRing ? rotation1 : rotation2)
                        // Radius values match the circle sizes:
                        // Inner: w-64 (256px) = 128px radius, md:w-80 (320px) = 160px radius
                        // Outer: w-96 (384px) = 192px radius, md:w-[28rem] (448px) = 224px radius
                        const innerRadius = isDesktop ? 160 : 128 // 80 * 4 / 2 (desktop) or 64 * 4 / 2 (mobile)
                        const outerRadius = isDesktop ? 224 : 192 // 28 * 16 / 2 (desktop) or 96 * 4 / 2 (mobile)
                        
                        const radius = isInnerRing ? innerRadius : outerRadius

                        const radian = (angle * Math.PI) / 180
                        const x = Math.cos(radian) * radius
                        const y = Math.sin(radian) * radius

                        return (
                            <div
                                key={tech.name}
                                className={`absolute transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                    transitionDelay: isVisible ? `${index * 30}ms` : "0ms",
                                }}
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <div className="p-3 md:p-4 rounded-lg bg-card border border-accent/30 transition-all duration-300">
                                        <Icon
                                            className="text-2xl md:text-3xl transition-transform duration-300"
                                            style={{ color: tech.color }}
                                        />
                                    </div>
                                    <span className="text-xs font-semibold text-foreground/70 text-center whitespace-nowrap">
                    {tech.name}
                  </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
