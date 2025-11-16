"use client"

import { FaArrowDown, FaEnvelope, FaArrowRight } from "react-icons/fa6"
import { useEffect, useState } from "react"
import SectionReveal from "@/components/section-reveal"

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const scrollToNext = () => {
        const bannerSection = document.getElementById("tech-banner")
        bannerSection?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 pb-16">
            {/* Subtle floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-accent/20 rounded-full animate-float"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 30}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${4 + (i % 3)}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-4xl w-full">
                <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-10">
                    {/* Circular Icon */}
                    <SectionReveal animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent/30 dark:border-accent/25 shadow-2xl shadow-accent/20 group animate-float">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/20 dark:to-accent/10"></div>
                            <img
                                src="/images/omenPlain.png"
                                alt="Jared Karl Omen"
                                className="w-full h-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Animated glow border */}
                            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-accent/30 via-transparent to-accent/20 pointer-events-none animate-glow"></div>
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                    </SectionReveal>

                    {/* Content */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-4 md:space-y-6">
                            <SectionReveal as="div" className="inline-block" animation="up" delayMs={100} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-accent/10 dark:bg-accent/15 border border-accent/30 text-accent text-xs md:text-sm font-semibold">
                  UI/UX Designer & Frontend Developer
                </span>
                            </SectionReveal>
                            <SectionReveal as="h1" className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tighter" animation="up" delayMs={200} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                                <span className="gradient-text animate-gradient-shift">Jared</span>{" "}
                                <span className="text-foreground">Karl Omen</span>
                            </SectionReveal>
                            <SectionReveal as="div" className="flex justify-center" animation="up" delayMs={300} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                                <div className="h-1 w-20 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-full animate-pulse-slow"></div>
                            </SectionReveal>
                            <SectionReveal as="p" className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light" animation="up" delayMs={400} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                                IT student and freelance frontend developer. Passionate about building responsive, beautiful interfaces
                                with exceptional UX and clean code.
                            </SectionReveal>
                        </div>

                        <SectionReveal className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-4 md:pt-6" animation="up" delayMs={500} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} staggerChildren staggerStepMs={80}>
                            <button
                                onClick={() => {
                                    window.location.href = "mailto:hello@jaredomen.com"
                                }}
                                className="group relative px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 active:scale-95 text-sm md:text-base cursor-pointer flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30"
                                style={{ ["--stagger-index" as any]: 0 }}
                            >
                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="relative flex items-center gap-2 z-10">
                                    <FaEnvelope size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  Get In Touch
                </span>
                            </button>
                            <button
                                onClick={scrollToNext}
                                className="group relative px-6 md:px-8 py-2.5 md:py-3 border-2 border-accent text-accent rounded-lg font-semibold transition-all duration-300 active:scale-95 text-sm md:text-base cursor-pointer flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 hover:bg-accent/5 overflow-hidden"
                                style={{ ["--stagger-index" as any]: 1 }}
                            >
                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="flex items-center gap-2 relative z-10">
                  Explore Work
                  <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                            </button>
                        </SectionReveal>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToNext}
                className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-accent hover:text-accent/80 transition-colors duration-300 hover:scale-110"
                aria-label="Scroll to next section"
            >
                <FaArrowDown size={20} />
            </button>
        </section>
    )
}
