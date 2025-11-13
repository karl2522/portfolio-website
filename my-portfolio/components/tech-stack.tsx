"use client"

import { useEffect, useState } from "react"
import { FaReact, FaGit, FaFigma } from "react-icons/fa6"
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVite, SiStorybook, SiRadixui, SiFramer } from "react-icons/si"

const technologies = [
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Vite", icon: SiVite, color: "#646cff" },
    { name: "Git", icon: FaGit, color: "#f1502f" },
    { name: "Figma", icon: FaFigma, color: "#f24e1e" },
    { name: "Storybook", icon: SiStorybook, color: "#ff4785" },
    { name: "Radix UI", icon: SiRadixui, color: "#0066ff" },
    { name: "Framer", icon: SiFramer, color: "#0055ff" },
]

export default function TechStack() {
    const [isVisible, setIsVisible] = useState(false)
    const [rotation1, setRotation1] = useState(0)
    const [rotation2, setRotation2] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const element = document.getElementById("tech-stack")
        if (element) observer.observe(element)
        return () => observer.disconnect()
    }, [])

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
        <section id="tech-stack" className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background relative">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2
                        className={`text-4xl sm:text-5xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <span className="gradient-text">Tech Stack</span>
                    </h2>
                    <div
                        className={`w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-1000 delay-200 ${
                            isVisible ? "opacity-100 w-12" : "opacity-0 w-0"
                        }`}
                    ></div>
                </div>

                <div className="relative w-full h-96 md:h-[28rem] flex items-center justify-center">
                    {/* Orbit circles - 2 rings for spacing */}
                    <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-accent/20 rounded-full"></div>
                    <div className="absolute w-96 h-96 md:w-[28rem] md:h-[28rem] border border-accent/10 rounded-full"></div>

                    {/* Center dot */}
                    <div className="absolute w-3 h-3 bg-accent rounded-full z-10"></div>

                    {technologies.map((tech, index) => {
                        const Icon = tech.icon
                        // Split technologies into 2 rings
                        const isInnerRing = index < 5
                        const ringIndex = isInnerRing ? index : index - 5
                        const totalInRing = isInnerRing ? 5 : 5

                        const angle = (ringIndex / totalInRing) * 360 + (isInnerRing ? rotation1 : rotation2)
                        const radius = isInnerRing ? 110 : 160

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
