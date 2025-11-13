"use client"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import ProjectsScrollStack from "./projects-scroll-stack"
import { useEffect, useRef, useState } from "react"

const projects = [
    {
        title: "Studyboost",
        description:
            "An educational startup platform that connects students with study guides, tutors, and academic resources across various universities. Built with modern tech stack for seamless learning experience.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        link: "#",
        github: "#",
        image: "/portfolio-website.jpg",
    },
    {
        title: "Vocalyx",
        description:
            "A capstone project leveraging speech-to-text technology to streamline grading workflows. Features real-time voice input, Excel integration, and automated grade export for efficient educational assessment.",
        tech: ["Python", "Flask", "React", "Speech Recognition"],
        link: "#",
        github: "#",
        image: "/task-management-app.jpg",
    },
    {
        title: "Barangay360",
        description:
            "A school final project that digitalizes barangay services and community management. Handles announcements, events, emergencies, and streamlines online processing of forms, IDs, clearances, and permits.",
        tech: ["React", "Node.js", "MongoDB", "Firebase"],
        link: "#",
        github: "#",
        image: "/portfolio-website.jpg",
    },
    {
        title: "SavorSpace",
        description:
            "A restaurant management system developed as a school final project. Features responsive frontend design, Java backend architecture with user authentication, comprehensive menu management, and order processing.",
        tech: ["React", "Java", "MySQL", "REST API"],
        link: "#",
        github: "#",
        image: "/task-management-app.jpg",
    },
]

export default function Projects() {
    const { ref: sectionRef, isVisible } = useScrollAnimation(0.3)
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
            className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background"
        >
            <div className="max-w-6xl mx-auto">
                <div
                    ref={headerRef}
                    className="sticky top-0 z-30 mb-12 md:mb-16 py-4 bg-background"
                    data-stack-anchor="projects"
                >
                    <h2
                        className={`text-4xl sm:text-5xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <div
                        className={`w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-1000 delay-200 ${
                            isVisible ? "opacity-100 w-12" : "opacity-0 w-0"
                        }`}
                    ></div>
                </div>

                <ProjectsScrollStack />
            </div>
        </section>
    )
}
