"use client"

import SectionReveal from "@/components/section-reveal"
import { useInView } from "@/hooks/use-in-view"

const experiences = [
    {
        title: "Frontend Developer",
        company: "Freelance Projects",
        description: "Building responsive web applications with modern technologies",
        year: "2025",
        type: "current",
        skills: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    },
    {
        title: "UI/UX Design Enthusiast",
        company: "Personal Learning",
        description: "Mastering design systems and user experience principles",
        year: "2024",
        type: "past",
        skills: ["Figma", "Design Systems", "User Research"],
    },
    {
        title: "Student Developer",
        company: "Educational Projects",
        description: "Completed multiple capstone and academic projects",
        year: "2023 - 2024",
        type: "past",
        skills: ["Java", "Python", "React", "Database Design"],
    },
    {
        title: "Aspiring Software Engineer",
        company: "Self-Learning",
        description: "Foundations in programming and web development",
        year: "2022 - 2023",
        type: "past",
        skills: ["HTML", "CSS", "JavaScript", "Basics"],
    },
]

export default function Experience() {
    const { ref: sectionRef, inView } = useInView({ threshold: 0.2, once: true })

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                    <SectionReveal className="flex items-center justify-center mb-3" animation="left" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
                            <span className="gradient-text">Experience</span>
                        </h2>
                    </SectionReveal>
                    <SectionReveal as="p" className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 px-2" animation="up" delayMs={100} durationMs={700} inViewOptions={{ threshold: 0.2, once: true }}>
                        Roles, responsibilities, and milestones along my journey.
                    </SectionReveal>
                    <SectionReveal className="w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full mx-auto" animation="up" delayMs={150} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-3 sm:left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20"></div>

                    {/* Timeline Items */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                        {experiences.map((exp, index) => (
                            <SectionReveal key={index} animation="up" durationMs={800} delayMs={index * 100} inViewOptions={{ threshold: 0.2, once: true }}>
                                <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                                    {/* Timeline Circle */}
                                    <div className="relative flex items-start md:w-1/2 md:justify-end md:pr-6 lg:pr-8">
                                        <div className="flex-1 md:flex-none w-full md:w-auto">
                                            <div
                                                className={`absolute left-0 top-1.5 sm:top-2 md:left-auto md:right-0 md:translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-3 transition-all duration-500 ${
                                                    exp.type === "current"
                                                        ? "bg-accent border-accent shadow-lg shadow-accent/50 md:translate-x-1/2"
                                                        : "bg-background border-accent/40 hover:border-accent"
                                                }`}
                                            >
                                                {exp.type === "current" && (
                                                    <div className="absolute inset-0 rounded-full animate-pulse-slow bg-accent/20"></div>
                                                )}
                                            </div>
                                            <div className="pl-6 sm:pl-8 md:pl-0 md:text-right">
                                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 leading-tight">{exp.title}</h3>
                                                <p className="text-xs sm:text-sm md:text-base text-accent font-semibold mb-1 sm:mb-2">{exp.company}</p>
                                                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{exp.year}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="md:w-1/2 md:pl-6 lg:pl-8">
                                        <div className="group relative p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl border border-border bg-card/50 hover:bg-card hover:border-accent/40 transition-all duration-300 backdrop-blur-sm">
                                            <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground relative z-10 mb-3 sm:mb-4 leading-relaxed">{exp.description}</p>

                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {exp.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-accent/10 text-accent border border-accent/20 transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/40 whitespace-nowrap"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
