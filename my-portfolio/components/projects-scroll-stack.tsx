"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { useEffect, useState } from "react"
import { FaArrowPointer, FaBookOpen, FaGithub, FaXmark } from "react-icons/fa6"
import ScrollStack, { ScrollStackItem } from "./scroll-stack"

const projects = [
    {
        title: "Aiva",
        category: "Personal Project",
        type: "Systems & SaaS Projects",
        description:
            "Aiva is a minimalist, offline-first todo app with AI-powered task prioritization and intelligent suggestions. Features include Kanban and calendar views with drag-and-drop task management, PWA support for offline use, and optional backend sync for multi-device access.",
        tech: ["NextJS", "TypeScript", "TailwindCSS", "Shadcn", "DexieJS"],
        link: "https://aiva-app.vercel.app/dashboard",
        github: "https://github.com/karl2522/Aiva.git",
        image: "/images/aiva.png",
        domain: "aiva-app.vercel.app",
        caseStudy: {
            overview: "A SaaS-style task management system designed for teams that need both calendar-based and Kanban workflows.",
            problem: "Many teams struggle to manage tasks across time-based deadlines and progress-based workflows using a single tool.",
            goal: "The goal was to design a flexible task management system that supports multiple views without sacrificing performance or usability.",
            solution: "I built a web application that allows users to switch between calendar and Kanban views, with real-time updates and clean UI interactions.",
            features: [
                "Dual calendar and Kanban views",
                "Drag-and-drop task management",
                "Role-ready data models",
                "Scalable backend structure",
            ],
            tech: {
                Frontend: "React / Next.js",
                Backend: "NestJS / Django / Spring Boot",
                Database: "PostgreSQL / MySQL",
                Hosting: "Vercel / Cloud",
            },
            challenges: "One challenge was maintaining performance when switching views. I solved this by separating task state from presentation logic.",
            outcome: "The project is production-ready and structured to support real users, authentication, and future feature expansion.",
            demonstrates: ["SaaS architecture design", "Clean state management", "Scalable backend planning", "UI/UX for productivity tools"],
        },
    },
    {
        title: "ChainProof",
        category: "Personal Project",
        type: "Concepts & Experiments",
        description:
            "ChainProof is a decentralized application that leverages blockchain technology to provide cryptographic proof of file authenticity and integrity.",
        tech: ["NextJS", "NestJS", "Shadcn", "EtherJS", "Hardhat"],
        link: "https://chain-proof-red.vercel.app/",
        github: "https://github.com/karl2522/ChainProof.git",
        image: "/images/chainproof.png",
        domain: "chain-proof-red.vercel.app",
    },
    {
        title: "SwiftShip",
        category: "Personal Project",
        type: "UI & Frontend Explorations",
        description:
            "A modern, static landing page for a fictional logistics and shipping company, built with a focus on exceptional UI/UX design and smooth animations.",
        tech: ["NextJS", "TypeScript", "TailwindCSS", "Shadcn", "Vercel"],
        link: "https://swift-ship-bay.vercel.app",
        github: "https://github.com/karl2522/SwiftShip.git",
        image: "/images/swiftship.png",
        domain: "swift-ship-bay.vercel.app",
    },
    {
        title: "Audiora",
        category: "Personal Project",
        type: "Concepts & Experiments",
        description:
            "A free AI-powered music player that acts as your personal DJ, learning from your listening history to create personalized mixes, smart genre blends, and effortless music discovery tailored to your taste.",
        tech: ["NextJS", "NestJS", "Shadcn", "Audius API", "Redis"],
        link: "https://audiora-bay.vercel.app/",
        github: "https://github.com/karl2522/Audiora",
        image: "/images/audiora-lg.png",
        domain: "audiora-bay.vercel.app",
    },
    {
        title: "Briefly",
        category: "Personal Project",
        type: "Systems & SaaS Projects",
        description:
            "A free AI platform for students offering powerful educational tools including study guide generator, smart summarizer, quiz creator, and flashcard generator. Designed to help students learn faster and more effectively—completely free forever.",
        tech: ["NextJS", "NestJS", "Redis", "Gemini AI", "Railway"],
        link: "https://briefly-liard.vercel.app/",
        github: "https://github.com/karl2522/briefly",
        image: "/images/briefly.png",
        domain: "briefly-liard.vercel.app",
        caseStudy: {
            overview: "An AI-powered educational platform that transforms static learning materials into interactive study aids.",
            problem: "Students spend more time organizing notes than actually studying, leading to inefficient learning and burnout.",
            goal: "To create a tool that automates the creation of study materials, allowing students to focus on retention and understanding.",
            solution: "Developed an AI engine that parses text and generates summaries, quizzes, and flashcards instantly.",
            features: [
                "AI Text Summarization",
                "Automated Quiz Generation",
                "Flashcard Creator",
                "Progress Tracking",
            ],
            tech: {
                Frontend: "Next.js / React",
                Backend: "NestJS / Redis",
                AI: "Gemini AI API",
                Infra: "Railway / Vercel",
            },
            challenges: "Ensuring the accuracy of AI-generated quizzes was difficult. I implemented a review layer to refine the prompts.",
            outcome: "The platform helps students cut study prep time by 70%, with positive feedback on the accuracy of generated materials.",
            demonstrates: ["AI integration", "Prompt engineering", "Full-stack development", "Product design"],
        },
    },
    {
        title: "Studyboost",
        category: "Professional Work",
        type: "Systems & SaaS Projects",
        description:
            "An educational startup platform that connects students with study guides, tutors, and academic resources across various universities. Built with modern tech stack for seamless learning experience.",
        tech: ["React", "Java", "Apache POI", "Stripe", "OCR"],
        link: "https://studyboost.com",
        github: "#",
        image: "/images/studyboost.png",
        domain: "studyboost.com",
        caseStudy: {
            overview: "A comprehensive marketplace connecting students with academic resources and tutoring services.",
            problem: "Educational resources are fragmented across different platforms, making it hard for students to find reliable help.",
            goal: "Build a centralized hub where students can access verified study guides and connect with expert tutors.",
            solution: "A multi-tenant platform with roles for students, tutors, and admins, featuring secure payments and document verification.",
            features: [
                "Marketplace for study guides",
                "Tutor booking system",
                "Document verification via OCR",
                "Secure Stripe payments",
            ],
            tech: {
                Frontend: "React",
                Backend: "Java / Spring",
                Database: "MySQL",
                Services: "Stripe / OCR API",
            },
            challenges: "Handling secure file previews and preventing unauthorized downloads required a custom DRM-like implementation.",
            outcome: "Successfully launched with a growing user base, providing a safe and efficient environment for academic exchange.",
            demonstrates: ["E-commerce flow", "Java backend architecture", "Third-party API integration", "Security practices"],
        },
    },
    {
        title: "Vocalyx",
        category: "School Project",
        type: "Systems & SaaS Projects",
        description:
            "A capstone project leveraging speech-to-text technology to streamline grading workflows. Features real-time voice input, Excel integration, and automated grade export for efficient educational assessment.",
        tech: ["React", "Django", "PostgreSQL", "Firebase", "GCP"],
        link: "https://vocalyx.online",
        github: "https://github.com/karl2522/Vocalyx",
        image: "/images/vocalyx.png",
        domain: "vocalyx.online",
        caseStudy: {
            overview: "A voice-enabled grading assistant designed to speed up the assessment process for educators.",
            problem: "Teachers spend hours manually entering grades and comments, which is repetitive and prone to error.",
            goal: "To allow teachers to input grades and feedback using natural voice commands, directly updating spreadsheets.",
            solution: "An intelligent speech-to-text system that recognizes student names and scores, populating a digital gradebook automatically.",
            features: [
                "Real-time voice recognition",
                "Excel sheet sync",
                "Automated report generation",
                "Offline support",
            ],
            tech: {
                Frontend: "React",
                Backend: "Django / Python",
                Database: "PostgreSQL",
                Cloud: "Google Cloud Platform",
            },
            challenges: "Accurately capturing numerical grades amidst background noise was tough. I used fuzzy logic to map spoken words to numbers.",
            outcome: "Reduced grading time significantly for pilot users and demonstrated the potential of voice UI in education.",
            demonstrates: ["Speech recognition implementation", "Python data processing", "UX for accessibility", "API design"],
        },
    },
    {
        title: "Barangay360",
        category: "School Project",
        type: "Systems & SaaS Projects",
        description:
            "A school final project that digitalizes barangay services and community management. Handles announcements, events, emergencies, and streamlines online processing of forms, IDs, clearances, and permits.",
        tech: ["React", "Java", "PostgreSQL", "CSS"],
        link: "https://barangay360.vercel.app",
        github: "https://github.com/karl2522/IT342-G2-Barangay360",
        image: "/images/barangay360.png",
        domain: "barangay360.vercel.app",
        caseStudy: {
            overview: "A digital governance portal for local communities (barangays) to manage services and communication.",
            problem: "Local government processes are often manual, paper-based, and slow, leading to long queues and lost records.",
            goal: "To digitize the issuance of permits, managing of incidents, and dissemination of community announcements.",
            solution: "A centralized web portal where residents can request documents and officials can manage requests and records.",
            features: [
                "Online permit application",
                "Incident reporting dashboard",
                "Resident database management",
                "Event announcements",
            ],
            tech: {
                Frontend: "React",
                Backend: "Java",
                Database: "PostgreSQL",
                Styling: "CSS / Bootstrap",
            },
            challenges: "Designing an interface that is accessible to less tech-savvy users while maintaining powerful admin features.",
            outcome: "Streamlined community operations and improved transparency between officials and residents.",
            demonstrates: ["Public sector software design", "Database normalization", "Role-based access control", "Form digitisation"],
        },
    },
    {
        title: "SavorSpace",
        category: "School Project",
        type: "Systems & SaaS Projects",
        description:
            "A restaurant management system developed as a school final project. Features responsive frontend design, Java backend architecture with user authentication, comprehensive menu management, and order processing.",
        tech: ["React", "Java", "MySQL", "REST API"],
        link: "https://savorspace-frontend.vercel.app",
        github: "#",
        image: "/images/savorspace.png",
        domain: "savorspace-frontend.vercel.app",
        caseStudy: {
            overview: "An end-to-end restaurant management system handling menu curation, ordering, and kitchen workflows.",
            problem: "Traditional pen-and-paper ordering leads to communication errors between the dining area and the kitchen.",
            goal: "Create a digital loop where orders are instantly transmitted to the kitchen display system.",
            solution: "A tablet-friendly frontend for waiters and a robust backend for managing inventory and order status.",
            features: [
                "Digital menu management",
                "Kitchen Display System (KDS)",
                "Order status tracking",
                "Sales reporting",
            ],
            tech: {
                Frontend: "React",
                Backend: "Java",
                Database: "MySQL",
                API: "RESTful Architecture",
            },
            challenges: "Ensuring real-time synchronization between the waiter's device and the kitchen screen without lag.",
            outcome: "A fully functional prototype that demonstrates the efficiency of digital kitchen management.",
            demonstrates: ["Real-time data flow", "Relational database design", "Enterprise Java development", "System analysis"],
        },
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
                                {/* Category and Type Badges */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                                        {project.category}
                                    </span>
                                    {project.type && (
                                        <span
                                            className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full border ${project.type === "UI & Frontend Explorations"
                                                ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                                : project.type === "Systems & SaaS Projects"
                                                    ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
                                                    : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                                }`}
                                        >
                                            {project.type}
                                        </span>
                                    )}
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
                                {/* Case Study Modal */}
                                {project.caseStudy && (
                                    <Dialog.Root>
                                        <Dialog.Trigger asChild>
                                            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mt-6 group">
                                                <FaBookOpen className="group-hover:scale-110 transition-transform" />
                                                <span>Read Case Study</span>
                                            </button>
                                        </Dialog.Trigger>
                                        <Dialog.Portal>
                                            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                                            <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-xl md:w-full max-h-[90vh] overflow-hidden flex flex-col">
                                                {/* Header */}
                                                <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur z-10">
                                                    <div>
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <span className="text-xs font-semibold px-2 py-1 rounded bg-accent/10 text-accent uppercase tracking-wider">
                                                                Case Study
                                                            </span>
                                                            <span className="text-sm text-muted-foreground">{project.title}</span>
                                                        </div>
                                                        <h2 className="text-2xl font-bold">{project.caseStudy.goal}</h2>
                                                    </div>
                                                    <Dialog.Close className="rounded-full p-2 hover:bg-accent/10 transition-colors text-muted-foreground hover:text-accent">
                                                        <FaXmark size={20} />
                                                        <span className="sr-only">Close</span>
                                                    </Dialog.Close>
                                                </div>

                                                {/* Scrollable Content */}
                                                <div className="p-6 overflow-y-auto custom-scrollbar">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                                        {/* Sidebar / Meta */}
                                                        <div className="md:col-span-1 space-y-8">
                                                            <div>
                                                                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Project Overview</h4>
                                                                <p className="text-sm leading-relaxed">{project.caseStudy.overview}</p>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Tech Stack Strategy</h4>
                                                                <div className="space-y-3">
                                                                    {Object.entries(project.caseStudy.tech).map(([key, value]) => (
                                                                        <div key={key}>
                                                                            <div className="text-[10px] text-muted-foreground uppercase">{key}</div>
                                                                            <div className="font-medium text-sm">{value}</div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">What This Demonstrates</h4>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {project.caseStudy.demonstrates.map((item, i) => (
                                                                        <span key={i} className="px-2 py-1 rounded border border-border text-[10px] bg-secondary/50">
                                                                            {item}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Main Content */}
                                                        <div className="md:col-span-2 space-y-8">
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                                                                    <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-2">The Problem</h4>
                                                                    <p className="text-sm text-muted-foreground">{project.caseStudy.problem}</p>
                                                                </div>
                                                                <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                                                                    <h4 className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2">The Solution</h4>
                                                                    <p className="text-sm text-muted-foreground">{project.caseStudy.solution}</p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Key Features</h4>
                                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                    {project.caseStudy.features.map((feature, i) => (
                                                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                                            <span>{feature}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            <div className="space-y-4">
                                                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Challenges & Decisions</h4>
                                                                <p className="text-muted-foreground leading-relaxed">{project.caseStudy.challenges}</p>
                                                            </div>

                                                            <div className="space-y-4">
                                                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Outcome & Status</h4>
                                                                <p className="text-muted-foreground leading-relaxed">{project.caseStudy.outcome}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Dialog.Content>
                                        </Dialog.Portal>
                                    </Dialog.Root>
                                )}
                            </div>
                        </div>
                    </ScrollStackItem>
                )
            })}
        </ScrollStack>
    )
}
