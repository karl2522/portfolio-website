"use client"

import { useEffect, useState } from "react"
import { FaGit, FaReact } from "react-icons/fa6"
import { SiDjango, SiNextdotjs, SiRadixui, SiRedis, SiTailwindcss, SiTypescript } from "react-icons/si"

const techItems = [
    { name: "NEXTJS", icon: SiNextdotjs },
    { name: "REDIS", icon: SiRedis },
    { name: "TAILWIND", icon: SiTailwindcss },
    { name: "TYPESCRIPT", icon: SiTypescript },
    { name: "DJANGO", icon: SiDjango },
    { name: "GITHUB", icon: FaGit },
    { name: "REACT", icon: FaReact },
    { name: "RADIX UI", icon: SiRadixui },
]

export default function TechBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const element = document.getElementById("tech-banner")
        if (element) observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="tech-banner"
            className="w-full py-8 md:py-10 px-4 sm:px-6 md:px-8 bg-card/50 border-y border-accent/10 backdrop-blur-sm"
        >
            <div className="overflow-hidden">
                <div className="flex gap-8 md:gap-12 animate-scroll whitespace-nowrap">
                    {[...techItems, ...techItems].map((tech, index) => {
                        const Icon = tech.icon
                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                {Icon && <Icon className="text-accent text-lg md:text-xl flex-shrink-0" />}
                                <span className="text-sm md:text-base font-bold text-foreground/70 hover:text-accent transition-colors duration-300">
                                    {tech.name}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
