"use client"

import { useEffect, useState } from "react"
import SectionReveal from "@/components/section-reveal"
import { useInView } from "@/hooks/use-in-view"
import { FaArrowUpRightFromSquare, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6"

interface Star {
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
}

export default function Contact() {
    const { ref: sectionRef } = useInView({ threshold: 0.2, once: true })
    const [stars, setStars] = useState<Star[]>([])

    useEffect(() => {
        // Generate stars for contact cards
        const generateStars = () => {
            const newStars: Star[] = []
            const starCount = 20

            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 0.5,
                    delay: Math.random() * 3,
                    duration: Math.random() * 3 + 2,
                })
            }
            setStars(newStars)
        }

        generateStars()
    }, [])

    const mailto = () => {
        const subject = encodeURIComponent("Project Inquiry from Portfolio")
        const body = encodeURIComponent("Hi Jared,\n\nI'd love to discuss a project or collaboration.\n\nBest,\n")
        window.location.href = `mailto:joredomen@gmail.com?subject=${subject}&body=${body}`
    }

    const contactMethods = [
        {
            icon: FaEnvelope,
            label: "Email",
            value: "joredomen@gmail.com",
            href: "mailto:joredomen@gmail.com",
            color: "text-accent",
        },
        {
            icon: FaGithub,
            label: "GitHub",
            value: "@karl2522",
            href: "https://github.com/karl2522",
            color: "text-foreground",
        },
        {
            icon: FaLinkedin,
            label: "LinkedIn",
            value: "Connect with me",
            href: "https://www.linkedin.com/in/jared-karl-omen-11131a386/",
            color: "text-foreground",
        },
    ]

    return (
        <section id="contact" ref={sectionRef} className="w-full pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 md:mb-20 text-center">
                    <SectionReveal as="h2" className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <span className="gradient-text">Let&apos;s Connect</span>
                    </SectionReveal>
                    <SectionReveal as="p" className="text-muted-foreground max-w-2xl mx-auto mb-6 text-base md:text-lg leading-relaxed" animation="up" delayMs={100} durationMs={700} inViewOptions={{ threshold: 0.2, once: true }}>
                        I&apos;m always open to discussing new projects, creative opportunities, and potential collaborations. Whether you have a specific project in mind or just want to explore possibilities, I&apos;d love to hear from you.
                    </SectionReveal>
                    <SectionReveal className="w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full mx-auto" animation="up" delayMs={150} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} />
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon
                        return (
                            <SectionReveal
                                key={method.label}
                                className="group"
                                animation="up"
                                delayMs={200 + index * 100}
                                durationMs={800}
                                inViewOptions={{ threshold: 0.2, once: true }}
                            >
                                <a
                                    href={method.href}
                                    target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                    className="group/card relative block p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 overflow-hidden"
                                >
                                    {/* Subtle nebula gradient background */}
                                    <div className="absolute inset-0 opacity-20 dark:opacity-10 group-hover/card:opacity-30 dark:group-hover/card:opacity-15 transition-opacity duration-300"
                                        style={{
                                            background: `radial-gradient(ellipse at ${30 + index * 20}% ${40 + index * 15}%, rgba(59, 130, 246, 0.2) 0%, transparent 60%)`,
                                        }}
                                    />
                                    
                                    {/* Floating stars */}
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        {stars.slice(index * 6, (index + 1) * 6).map((star) => (
                                            <div
                                                key={star.id}
                                                className="absolute rounded-full animate-pulse-slow opacity-40 dark:opacity-30"
                                                style={{
                                                    left: `${star.x}%`,
                                                    top: `${star.y}%`,
                                                    width: `${star.size}px`,
                                                    height: `${star.size}px`,
                                                    animationDuration: `${star.duration}s`,
                                                    animationDelay: `${star.delay}s`,
                                                    background: 'rgba(96, 165, 250, 0.6)',
                                                    boxShadow: `0 0 ${star.size * 2}px rgba(96, 165, 250, 0.4)`,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="relative p-3 rounded-lg bg-accent/10 group-hover/card:bg-accent/20 transition-colors duration-300">
                                                {/* Icon glow effect */}
                                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover/card:opacity-50 transition-opacity duration-300 blur-md"
                                                    style={{
                                                        background: method.color === "text-accent" 
                                                            ? "rgba(96, 165, 250, 0.5)" 
                                                            : "rgba(96, 165, 250, 0.3)",
                                                    }}
                                                />
                                                <Icon className={`${method.color} text-xl relative z-10`} />
                                            </div>
                                            <h3 className="font-semibold text-foreground">{method.label}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground group-hover/card:text-foreground transition-colors duration-300">{method.value}</p>
                                    </div>

                                    {/* Subtle border glow on hover */}
                                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            boxShadow: 'inset 0 0 20px rgba(96, 165, 250, 0.1)',
                                        }}
                                    />
                                </a>
                            </SectionReveal>
                        )
                    })}
                </div>

                {/* Main CTA Card */}
                <SectionReveal className="max-w-6xl mx-auto" animation="up" durationMs={800} delayMs={500} inViewOptions={{ threshold: 0.2, once: true }}>
                    <div className="group/cta relative rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 md:p-10 overflow-hidden">
                        {/* Animated nebula background */}
                        <div className="absolute inset-0 opacity-20 dark:opacity-10 group-hover/cta:opacity-30 dark:group-hover/cta:opacity-15 transition-opacity duration-500"
                            style={{
                                background: `
                                    radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
                                    radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
                                `,
                                backgroundSize: '200% 200%',
                                animation: 'gradient-flow 15s ease infinite',
                            }}
                        />

                        {/* More stars for CTA card */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {stars.slice(18).map((star) => (
                                <div
                                    key={star.id}
                                    className="absolute rounded-full animate-shimmer opacity-50 dark:opacity-30"
                                    style={{
                                        left: `${star.x}%`,
                                        top: `${star.y}%`,
                                        width: `${star.size * 1.5}px`,
                                        height: `${star.size * 1.5}px`,
                                        animationDuration: `${star.duration}s`,
                                        animationDelay: `${star.delay}s`,
                                        background: 'rgba(96, 165, 250, 0.7)',
                                        boxShadow: `0 0 ${star.size * 3}px rgba(96, 165, 250, 0.5)`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Subtle connection lines effect */}
                        <div className="absolute inset-0 opacity-5 dark:opacity-3 pointer-events-none">
                            <svg className="w-full h-full">
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(96, 165, 250, 0.5)" />
                                        <stop offset="100%" stopColor="rgba(139, 92, 246, 0.5)" />
                                    </linearGradient>
                                </defs>
                                <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse-slow" />
                                <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
                            </svg>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                                    Ready to start your next project?
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0 mb-6">
                                    Let&apos;s discuss how we can bring your vision to life with thoughtful design and robust development. I&apos;m here to help turn your ideas into exceptional digital experiences.
                                </p>
                                {/* Resume Link */}
                                <div className="flex items-center justify-center md:justify-start gap-3">
                                    <a
                                        href="https://drive.google.com/file/d/1dve8Yyr25zadWArHJl6VgY728IAQADuc/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-foreground hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
                                        aria-label="Resume"
                                    >
                                        <span className="text-sm font-semibold">View Resume</span>
                                        <FaArrowUpRightFromSquare size={14} />
                                    </a>
                                </div>
                            </div>
                            {/* CTA Button */}
                            <div className="w-full md:w-auto">
                                <button
                                    onClick={mailto}
                                    className="group/btn relative w-full md:w-auto px-8 md:px-10 py-3 md:py-3.5 bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 active:scale-95 text-base flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 cursor-pointer"
                                >
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300 blur-xl bg-accent"></div>
                                    
                                    <FaEnvelope className="relative z-10" size={18} />
                                    <span className="relative z-10">Contact Me</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                                    
                                    {/* Subtle star particles on button */}
                                    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute rounded-full animate-shimmer"
                                                style={{
                                                    left: `${20 + i * 30}%`,
                                                    top: `${30 + i * 20}%`,
                                                    width: '3px',
                                                    height: '3px',
                                                    background: 'rgba(255, 255, 255, 0.8)',
                                                    boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
                                                    animationDuration: `${1.5 + i * 0.5}s`,
                                                    animationDelay: `${i * 0.3}s`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}
