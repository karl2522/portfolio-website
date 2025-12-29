"use client"

import { useEffect, useState } from "react"
import { FaArrowPointer, FaGithub } from "react-icons/fa6"
import ScrollStack, { ScrollStackItem } from "./scroll-stack"

const projects = [
    {
        title: "Audiora",
        category: "Personal Project",
        description:
            "A free AI-powered music player that acts as your personal DJ, learning from your listening history to create personalized mixes, smart genre blends, and effortless music discovery tailored to your taste.",
        tech: ["NextJS", "TypeScript", "NestJS", "Audius API", "Redis"],
        link: "https://audiora-bay.vercel.app/",
        github: "https://github.com/karl2522/Audiora",
        image: "/images/audiora-lg.png",
        domain: "audiora-bay.vercel.app",
    },
    {
        title: "Briefly",
        category: "Personal Project",
        description:
            "A free AI platform for students offering powerful educational tools including study guide generator, smart summarizer, quiz creator, and flashcard generator. Designed to help students learn faster and more effectively—completely free forever.",
        tech: ["NextJS", "NestJS", "Redis", "Gemini AI", "Railway"],
        link: "https://briefly-liard.vercel.app/",
        github: "https://github.com/karl2522/briefly",
        image: "/images/briefly.png",
        domain: "briefly-liard.vercel.app",
    },
    {
        title: "Studyboost",
        category: "Professional Work",
        description:
            "An educational startup platform that connects students with study guides, tutors, and academic resources across various universities. Built with modern tech stack for seamless learning experience.",
        tech: ["React", "Java", "Apache POI", "Stripe", "OCR"],
        link: "https://studyboost.com",
        github: "#",
        image: "/images/studyboost.png",
        domain: "studyboost.com",
    },
    {
        title: "Vocalyx",
        category: "School Project",
        description:
            "A capstone project leveraging speech-to-text technology to streamline grading workflows. Features real-time voice input, Excel integration, and automated grade export for efficient educational assessment.",
        tech: ["React", "Django", "PostgreSQL", "Firebase", "GCP"],
        link: "https://vocalyx.online",
        github: "https://github.com/karl2522/Vocalyx",
        image: "/images/vocalyx.png",
        domain: "vocalyx.online",
    },
    {
        title: "Barangay360",
        category: "School Project",
        description:
            "A school final project that digitalizes barangay services and community management. Handles announcements, events, emergencies, and streamlines online processing of forms, IDs, clearances, and permits.",
        tech: ["React", "Java", "PostgreSQL", "CSS"],
        link: "https://barangay360.vercel.app",
        github: "https://github.com/karl2522/IT342-G2-Barangay360",
        image: "/images/barangay360.png",
        domain: "barangay360.vercel.app",
    },
    {
        title: "SavorSpace",
        category: "School Project",
        description:
            "A restaurant management system developed as a school final project. Features responsive frontend design, Java backend architecture with user authentication, comprehensive menu management, and order processing.",
        tech: ["React", "Java", "MySQL", "REST API"],
        link: "https://savorspace-frontend.vercel.app",
        github: "#",
        image: "/images/savorspace.png",
        domain: "savorspace-frontend.vercel.app",
    },
]

export default function ProjectsScrollStack() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"))
        }

        checkTheme()

        // Watch for theme changes
        const observer = new MutationObserver(checkTheme)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        })

        return () => observer.disconnect()
    }, [])

    return (
        <ScrollStack
            stickyOffset={280}
            anchorSelector='[data-stack-anchor="projects"]'
            itemDistance={120}
        >
            {projects.map((project, index) => {
                const isLaptopLeft = index % 2 === 0

                // Use theme-specific image for Studyboost
                const getImageSrc = () => {
                    if (project.title === "Studyboost") {
                        return isDark ? "/images/studyboost.png" : "/images/studyboost-light.png"
                    }
                    return project.image || "/placeholder.svg"
                }

                return (
                    <ScrollStackItem
                        key={index}
                        cardClassName="group relative p-6 md:p-8 rounded-lg md:rounded-xl bg-card border border-border backdrop-blur-sm w-full"
                    >
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                            {/* Laptop Mockup */}
                            <div className={`w-full md:w-1/2 ${isLaptopLeft ? "md:order-1" : "md:order-2"}`}>
                                <div className="relative">
                                    {/* Laptop Base */}
                                    <div className="relative bg-gray-800 rounded-lg md:rounded-xl p-2 md:p-3 shadow-2xl">
                                        {/* Screen Bezel */}
                                        <div className="bg-black rounded-t-lg md:rounded-t-xl p-1 md:p-1.5">
                                            {/* Browser Window */}
                                            <div className="bg-gray-100 dark:bg-gray-900 rounded-t-md overflow-hidden">
                                                {/* Browser Bar */}
                                                <div className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                                                    <div className="flex gap-1.5">
                                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                    </div>
                                                    <div className="flex-1 mx-3 h-5 bg-white dark:bg-gray-700 rounded text-xs px-2 flex items-center text-gray-600 dark:text-gray-300">
                                                        {project.domain || `${project.title.toLowerCase().replace(/\s+/g, "-")}.vercel.app`}
                                                    </div>
                                                </div>
                                                {/* Screen Content - Project Image */}
                                                <div className="aspect-video bg-white dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                                                    <img
                                                        src={getImageSrc()}
                                                        alt={project.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Laptop Bottom/Keyboard Area */}
                                        <div className="h-2 md:h-3 bg-gray-800 rounded-b-lg md:rounded-b-xl">
                                            <div className="w-1/3 h-0.5 md:h-1 mx-auto mt-1 md:mt-1.5 bg-gray-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`w-full md:w-1/2 ${isLaptopLeft ? "md:order-2" : "md:order-1"}`}>
                                {/* Category Badge */}
                                <div className="mb-3">
                                    <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full border border-accent/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative inline-flex items-center gap-3 px-8 py-2 bg-accent text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 dark:hover:bg-accent/80 active:bg-blue-700 dark:active:bg-accent/70"
                                    >
                                        <span>View Demo</span>
                                        <FaArrowPointer
                                            size={16}
                                            className="animate-click-arrow -rotate-12"
                                        />
                                    </a>
                                    {project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn relative inline-flex items-center gap-2 px-6 py-2 border-2 border-accent text-accent text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-accent hover:text-white active:scale-95"
                                        >
                                            <FaGithub size={18} />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ScrollStackItem>
                )
            })}
        </ScrollStack>
    )
}
