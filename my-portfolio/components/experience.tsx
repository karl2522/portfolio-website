"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
    {
        title: "Full-Stack Developer",
        company: "Freelance Projects",
        description: "Building responsive web applications with modern technologies",
        year: "2024",
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
    const { ref: sectionRef, isVisible } = useScrollAnimation(0.3)

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <div
                        className={`flex items-center gap-3 mb-6 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/40">
                            <span className="text-accent text-lg">📅</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold">
                            <span className="gradient-text">Experience</span>
                        </h2>
                    </div>
                    <div
                        className={`w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-1000 delay-200 ${
                            isVisible ? "opacity-100 w-12" : "opacity-0 w-0"
                        }`}
                    ></div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-1000 ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                                style={{
                                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                                }}
                            >
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                    {/* Timeline Circle */}
                                    <div className="relative flex items-start md:w-1/2 md:justify-end md:pr-8">
                                        <div className="flex-1 md:flex-none">
                                            <div
                                                className={`absolute left-0 top-2 md:left-auto md:right-0 md:translate-x-1/2 w-4 h-4 rounded-full border-3 transition-all duration-500 ${
                                                    exp.type === "current"
                                                        ? "bg-accent border-accent shadow-lg shadow-accent/50 md:translate-x-1/2"
                                                        : "bg-background border-accent/40 hover:border-accent"
                                                }`}
                                            >
                                                {exp.type === "current" && (
                                                    <div className="absolute inset-0 rounded-full animate-pulse-slow bg-accent/20"></div>
                                                )}
                                            </div>
                                            <div className="pl-8 md:pl-0 md:text-right">
                                                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                                                <p className="text-sm md:text-base text-accent font-semibold mb-2">{exp.company}</p>
                                                <p className="text-xs md:text-sm text-muted-foreground">{exp.year}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="md:w-1/2 md:pl-8">
                                        <div className="group relative p-4 md:p-5 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/40 transition-all duration-300 backdrop-blur-sm">
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <p className="text-sm md:text-base text-muted-foreground relative z-10 mb-3">{exp.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/40"
                                                    >
                            {skill}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
