"use client"

import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const certifications = [
    {
        title: "AWS Cloud Foundations",
        issuer: "Amazon Web Services",
        date: "September 2025",
        icon: "☁️",
        link: "https://www.credly.com/badges",
        color: "from-orange-400 to-orange-600",
    },
    {
        title: "PrompQuest Hackathon",
        issuer: "Proweaver",
        date: "September 2025",
        icon: "🏆",
        link: "#",
        color: "from-purple-400 to-purple-600",
    },
    {
        title: "Python Completion Certificate",
        issuer: "Codechum",
        date: "December 2024",
        icon: "🐍",
        link: "https://codechum.com/certificates",
        color: "from-blue-400 to-blue-600",
    },
    {
        title: "MySQL Completion Certificate",
        issuer: "Codechum",
        date: "December 2024",
        icon: "🗄️",
        link: "https://codechum.com/certificates",
        color: "from-green-400 to-green-600",
    },
]

export default function Certifications() {
    const { ref: sectionRef, isVisible } = useScrollAnimation(0.3)

    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card"
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2
                        className={`text-4xl sm:text-5xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <span className="gradient-text">Certifications</span>
                    </h2>
                    <div
                        className={`w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-1000 delay-200 ${
                            isVisible ? "opacity-100 w-12" : "opacity-0 w-0"
                        }`}
                    ></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group transition-all duration-1000 cursor-pointer ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                            }}
                        >
                            <div className="relative flex flex-col p-5 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-br from-background to-background/50 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:-translate-y-2 h-full">
                                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-gradient-to-r ${cert.color}`} />

                                <div className="relative flex-grow">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-3xl md:text-4xl">{cert.icon}</div>
                                        <FaArrowUpRightFromSquare className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg" />
                                    </div>

                                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground mb-3">{cert.issuer}</p>

                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                        <p className="text-xs sm:text-sm text-muted-foreground/70">{cert.date}</p>
                                        <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                      Verified
                    </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
