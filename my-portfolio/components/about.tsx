"use client"
import { FaPalette, FaCode, FaRocket, FaGamepad } from "react-icons/fa6"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const hobbies = [
    {
        title: "Design Exploration",
        description: "Diving deep into design trends, UI patterns, and creative tools to stay ahead of the curve.",
        icon: FaPalette,
    },
    {
        title: "Open Source",
        description: "Contributing to projects and building tools that help the developer community grow and thrive.",
        icon: FaCode,
    },
    {
        title: "Building Side Projects",
        description: "Creating experimental apps and tools to push my technical boundaries and learn new technologies.",
        icon: FaRocket,
    },
    {
        title: "Gaming & Creative Play",
        description: "Unwinding with gaming or engaging in creative activities that inspire new design ideas.",
        icon: FaGamepad,
    },
]

export default function About() {
    const { ref: sectionRef, isVisible } = useScrollAnimation(0.3)

    return (
        <section id="about" ref={sectionRef} className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2
                        className={`text-4xl sm:text-5xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <span className="gradient-text">About</span>
                    </h2>
                    <div
                        className={`w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-1000 delay-200 ${
                            isVisible ? "opacity-100 w-12" : "opacity-0 w-0"
                        }`}
                    ></div>
                </div>

                {/* Main About Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
                    <div
                        className={`space-y-4 md:space-y-6 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                            I'm a passionate developer and designer focused on creating accessible, pixel-perfect digital experiences
                            that blend thoughtful design with robust engineering.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                            My expertise spans frontend development, UI/UX design, and performance optimization. I believe that
                            understanding the intersection of design and development leads to better user experiences.
                        </p>
                    </div>

                    <div
                        className={`space-y-4 md:space-y-6 transition-all duration-1000 delay-200 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                    >
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                            I've worked on projects ranging from startups to established companies, helping teams deliver high-quality
                            digital products. Each project is an opportunity to solve interesting problems and create something
                            meaningful.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                            I'm constantly learning and evolving my craft, whether it's mastering new technologies, exploring design
                            systems, or understanding the latest web development trends.
                        </p>
                    </div>
                </div>

                {/* Beyond Coding Section */}
                <div>
                    <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <span className="text-foreground">Beyond </span>
                        <span className="gradient-text">Coding</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                        {hobbies.map((hobby, index) => {
                            const Icon = hobby.icon
                            return (
                                <div
                                    key={hobby.title}
                                    className={`relative transition-all duration-1000 ${
                                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
                                    style={{
                                        transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                                    }}
                                >
                                    <div className="relative p-5 md:p-6 rounded-lg md:rounded-xl bg-card border border-border transition-all duration-300 backdrop-blur-sm h-full">
                                        <div className="flex gap-4 items-start">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-lg bg-accent/10 transition-colors duration-300">
                                                    <Icon className="text-accent text-lg md:text-xl" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{hobby.title}</h4>
                                                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                                                    {hobby.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
