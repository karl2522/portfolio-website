"use client"
import SectionReveal from "@/components/section-reveal"
import { useInView } from "@/hooks/use-in-view"
import { FaCode, FaGamepad, FaLaptopCode, FaLightbulb, FaPaintbrush, FaPalette, FaRocket } from "react-icons/fa6"

const hobbies = [
    {
        title: "Design Exploration",
        description: "Diving deep into design trends, UI patterns, and creative tools to stay ahead of the curve.",
        icon: FaPalette,
    },
    {
        title: "Continuous Learning",
        description: "Always learning new technologies to grow as a full-stack developer and stay aligned with best practices.",
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
    const { ref: sectionRef } = useInView({ threshold: 0.2, once: true })

    return (
        <section id="about" ref={sectionRef} className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-16 text-center">
                    <SectionReveal as="h2" className="text-4xl sm:text-5xl md:text-5xl font-bold mb-3" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <span className="gradient-text">About Me</span>
                    </SectionReveal>
                    <SectionReveal as="p" className="text-muted-foreground max-w-2xl mx-auto mb-4" animation="up" delayMs={100} durationMs={700} inViewOptions={{ threshold: 0.2, once: true }}>
                        A snapshot of who I am and what drives my work.
                    </SectionReveal>
                    <SectionReveal className="w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full mx-auto" animation="up" delayMs={150} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} />
                </div>

                {/* Main About Content */}
                <div className="mb-16 md:mb-20">
                    <SectionReveal className="max-w-3xl mx-auto text-center mb-12 md:mb-16" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                            I'm a passionate developer and designer focused on creating accessible, pixel-perfect digital experiences.
                            With full-stack capabilities and a strong design perspective,
                            I build solutions that unite thoughtful design and solid engineering.
                        </p>
                    </SectionReveal>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <SectionReveal
                            className="group"
                            animation="up"
                            delayMs={100}
                            durationMs={800}
                            inViewOptions={{ threshold: 0.2, once: true }}
                        >
                            <div className="relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 backdrop-blur-sm h-full text-center hover:-translate-y-1 hover:shadow-lg">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                                        <FaLaptopCode className="text-accent text-2xl" />
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Frontend Development</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    Building responsive, performant interfaces with modern technologies
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal
                            className="group"
                            animation="up"
                            delayMs={200}
                            durationMs={800}
                            inViewOptions={{ threshold: 0.2, once: true }}
                        >
                            <div className="relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 backdrop-blur-sm h-full text-center hover:-translate-y-1 hover:shadow-lg">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                                        <FaPaintbrush className="text-accent text-2xl" />
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">UI/UX Design</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    Crafting intuitive, beautiful interfaces that users love to interact with
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal
                            className="group"
                            animation="up"
                            delayMs={300}
                            durationMs={800}
                            inViewOptions={{ threshold: 0.2, once: true }}
                        >
                            <div className="relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 backdrop-blur-sm h-full text-center hover:-translate-y-1 hover:shadow-lg">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                                        <FaLightbulb className="text-accent text-2xl" />
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Problem Solving</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    Turning complex challenges into elegant, user-friendly solutions
                                </p>
                            </div>
                        </SectionReveal>
                    </div>
                </div>

                {/* Beyond Coding Section */}
                <div>
                    <SectionReveal as="h3" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <span className="text-foreground">Beyond </span>
                        <span className="gradient-text">Coding</span>
                    </SectionReveal>

                    <SectionReveal className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6" animation="up" staggerChildren staggerStepMs={100} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        {hobbies.map((hobby, index) => {
                            const Icon = hobby.icon
                            return (
                                <div key={hobby.title} style={{ ["--stagger-index" as string]: index } as React.CSSProperties}>
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
                    </SectionReveal>
                </div>
            </div>
        </section>
    )
}
