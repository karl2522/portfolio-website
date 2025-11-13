"use client"

import { FaArrowPointer } from "react-icons/fa6"
import ScrollStack, { ScrollStackItem } from "./scroll-stack"

const projects = [
    {
        title: "Studyboost",
        description:
            "An educational startup platform that connects students with study guides, tutors, and academic resources across various universities. Built with modern tech stack for seamless learning experience.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        link: "#",
        github: "#",
        image: "/portfolio-website.jpg",
        domain: "studyboost.com",
    },
    {
        title: "Vocalyx",
        description:
            "A capstone project leveraging speech-to-text technology to streamline grading workflows. Features real-time voice input, Excel integration, and automated grade export for efficient educational assessment.",
        tech: ["Python", "Flask", "React", "Speech Recognition"],
        link: "#",
        github: "#",
        image: "/task-management-app.jpg",
        domain: "vocalyx-frontend.vercel.app",
    },
    {
        title: "Barangay360",
        description:
            "A school final project that digitalizes barangay services and community management. Handles announcements, events, emergencies, and streamlines online processing of forms, IDs, clearances, and permits.",
        tech: ["React", "Node.js", "MongoDB", "Firebase"],
        link: "#",
        github: "#",
        image: "/portfolio-website.jpg",
        domain: "barangay360.vercel.app",
    },
    {
        title: "SavorSpace",
        description:
            "A restaurant management system developed as a school final project. Features responsive frontend design, Java backend architecture with user authentication, comprehensive menu management, and order processing.",
        tech: ["React", "Java", "MySQL", "REST API"],
        link: "#",
        github: "#",
        image: "/task-management-app.jpg",
        domain: "savorspace-frontend.vercel.app",
    },
]

export default function ProjectsScrollStack() {
    return (
        <ScrollStack
            stickyOffset={140}
            anchorSelector='[data-stack-anchor="projects"]'
            itemDistance={120}
        >
            {projects.map((project, index) => {
                const isLaptopLeft = index % 2 === 0

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
                                                <div className="aspect-video bg-white dark:bg-gray-800 overflow-hidden">
                                                    <img
                                                        src={project.image || "/placeholder.svg"}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
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
                                        className="group/btn relative inline-flex items-center gap-3 px-8 py-2 bg-accent text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 dark:hover:bg-accent/80 active:bg-blue-700 dark:active:bg-accent/70"
                                    >
                                        <span>View Site</span>
                                        <FaArrowPointer 
                                            size={16} 
                                            className="animate-click-arrow -rotate-12" 
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollStackItem>
                )
            })}
        </ScrollStack>
    )
}
