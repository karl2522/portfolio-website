"use client"
import SectionReveal from "@/components/section-reveal"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useRef, useState } from "react"
import ProjectsScrollStack from "./projects-scroll-stack"


export default function Projects() {
    const { ref: sectionRef, inView } = useInView({ threshold: 0.2, once: true })
    const headerRef = useRef<HTMLDivElement | null>(null)
    const [isStuck, setIsStuck] = useState(false)

    useEffect(() => {
        const handle = () => {
            if (!headerRef.current) return
            const top = headerRef.current.getBoundingClientRect().top
            // When sticky element touches the top, it is considered stuck
            setIsStuck(top <= 0)
        }
        handle()
        window.addEventListener("scroll", handle, { passive: true })
        window.addEventListener("resize", handle)
        return () => {
            window.removeEventListener("scroll", handle)
            window.removeEventListener("resize", handle)
        }
    }, [])

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
        >
            <div className="max-w-6xl mx-auto">
                <div
                    ref={headerRef}
                    className="z-30 mb-12 md:mb-16 py-6"
                    data-stack-anchor="projects"
                >
                    <div className="text-center">
                    <SectionReveal as="h2" className="text-4xl sm:text-5xl md:text-5xl font-bold mb-3" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <span className="gradient-text">Projects</span>
                    </SectionReveal>
                    <SectionReveal as="p" className="text-muted-foreground max-w-2xl mx-auto mb-4" animation="up" delayMs={100} durationMs={700} inViewOptions={{ threshold: 0.2, once: true }}>
                        Selected works and experiments I’ve built and shipped.
                    </SectionReveal>
                    <SectionReveal className="w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full mx-auto" animation="up" delayMs={150} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} />
                    </div>
                </div>

                <ProjectsScrollStack />
            </div>
        </section>
    )
}
