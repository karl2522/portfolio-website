"use client"
import SectionReveal from "@/components/section-reveal"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useRef, useState } from "react"
import ProjectsScrollStack from "./projects-scroll-stack"

const projects = [
    {
        title: "Studyboost",
        description:
            "An educational startup platform that connects students with study guides, tutors, and academic resources across various universities. Built with modern tech stack for seamless learning experience.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        link: "#",
        github: "#",
        image: "/images/studyboost.png",
    },
    {
        title: "Vocalyx",
        description:
            "A capstone project leveraging speech-to-text technology to streamline grading workflows. Features real-time voice input, Excel integration, and automated grade export for efficient educational assessment.",
        tech: ["Python", "Flask", "React", "Speech Recognition"],
        link: "#",
        github: "#",
        image: "/images/vocalyx.png",
    },
    {
        title: "Barangay360",
        description:
            "A school final project that digitalizes barangay services and community management. Handles announcements, events, emergencies, and streamlines online processing of forms, IDs, clearances, and permits.",
        tech: ["React", "Node.js", "MongoDB", "Firebase"],
        link: "#",
        github: "#",
        image: "/images/barangay360.png",
    },
    {
        title: "SavorSpace",
        description:
            "A restaurant management system developed as a school final project. Features responsive frontend design, Java backend architecture with user authentication, comprehensive menu management, and order processing.",
        tech: ["React", "Java", "MySQL", "REST API"],
        link: "#",
        github: "#",
        image: "/images/savorspace.png",
    },
]

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
                    className="sticky top-20 z-30 mb-12 md:mb-16 py-6"
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
