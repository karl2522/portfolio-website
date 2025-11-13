"use client"

import { FaArrowDown, FaEnvelope, FaArrowRight } from "react-icons/fa6"
import { useEffect, useState } from "react"

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
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 pb-16">
            {/* Background orbital elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent to-accent/40 opacity-3 dark:opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-accent opacity-2 dark:opacity-3 rounded-full blur-3xl animate-float"></div>
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div
                        className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <div className="space-y-4 md:space-y-6">
                            <div className="inline-block">
                <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-accent/10 dark:bg-accent/15 border border-accent/30 text-accent text-xs md:text-sm font-semibold">
                  UI/UX Designer & Frontend Developer
                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tighter">
                                <span className="gradient-text">Jared</span>
                                <br />
                                <span className="text-foreground">Karl Omen</span>
                            </h1>
                            <div className="h-1 w-20 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-full"></div>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md font-light">
                                IT student and freelance frontend developer. Passionate about building responsive, beautiful interfaces
                                with exceptional UX and clean code.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
                            <button
                                onClick={() => {
                                    window.location.href = "mailto:hello@jaredomen.com"
                                }}
                                className="group relative px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 active:scale-95 text-sm md:text-base cursor-pointer flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg"
                            >
                <span className="relative flex items-center gap-2">
                  <FaEnvelope size={16} />
                  Get In Touch
                </span>
                            </button>
                            <button
                                onClick={scrollToNext}
                                className="group px-6 md:px-8 py-2.5 md:py-3 border-2 border-accent text-accent rounded-lg font-semibold transition-all duration-300 active:scale-95 text-sm md:text-base cursor-pointer flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
                            >
                <span className="flex items-center gap-2">
                  Explore Work
                  <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Hero Image with Orbital Background */}
                    <div
                        className={`relative h-80 sm:h-96 lg:h-full lg:min-h-96 transition-all duration-1000 delay-300 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                    >
                        {/* Orbital background container */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Outer orbit rings */}
                            <div className="absolute w-full h-full border border-accent/15 dark:border-accent/25 rounded-full opacity-40"></div>
                            <div className="absolute w-4/5 h-4/5 border border-accent/12 dark:border-accent/20 rounded-full opacity-30"></div>
                            <div className="absolute w-3/5 h-3/5 border border-accent/8 dark:border-accent/15 rounded-full opacity-20"></div>

                            {/* Orbiting particles */}
                            <div className="absolute w-full h-full">
                                <div
                                    className="absolute w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full animate-orbit"
                                    style={{ top: "15%", left: "50%" }}
                                ></div>
                                <div
                                    className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-accent opacity-70 rounded-full animate-orbit-slow"
                                    style={{ top: "50%", right: "15%", animationDelay: "10s" }}
                                ></div>
                                <div
                                    className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-accent opacity-60 rounded-full animate-orbit"
                                    style={{ bottom: "15%", left: "20%", animationDelay: "5s" }}
                                ></div>
                            </div>

                            {/* Central glow */}
                            <div className="absolute inset-1/4 bg-gradient-radial from-accent/15 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
                        </div>

                        {/* Hero image card */}
                        <div className="absolute inset-0 glass rounded-2xl md:rounded-3xl border border-accent/30 dark:border-accent/25 overflow-hidden group shadow-xl shadow-accent/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-accent/1 dark:from-accent/8 dark:to-accent/3"></div>

                            <img
                                src="/images/omenPlain.png"
                                alt="Portfolio showcase"
                                className="w-full h-full object-cover opacity-95 transition-all duration-500"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>

                            {/* Animated blue accent border */}
                            <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent bg-gradient-to-r from-accent/25 via-transparent to-accent/15 pointer-events-none animate-glow"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToNext}
                className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-accent hover:text-accent/80 transition-colors duration-300"
                aria-label="Scroll to next section"
            >
                <FaArrowDown size={20} />
            </button>
        </section>
    )
}
