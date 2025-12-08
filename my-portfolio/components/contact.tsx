"use client"

import SectionReveal from "@/components/section-reveal"
import { useInView } from "@/hooks/use-in-view"
import { FaArrowUpRightFromSquare, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6"

export default function Contact() {
    const { ref: sectionRef } = useInView({ threshold: 0.2, once: true })
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
        <section id="contact" ref={sectionRef} className="w-full pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 bg-background">
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
                                    className="block p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                                            <Icon className={`${method.color} text-xl`} />
                                        </div>
                                        <h3 className="font-semibold text-foreground">{method.label}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{method.value}</p>
                                </a>
                            </SectionReveal>
                        )
                    })}
                </div>

                {/* Main CTA Card */}
                <SectionReveal className="max-w-6xl mx-auto" animation="up" durationMs={800} delayMs={500} inViewOptions={{ threshold: 0.2, once: true }}>
                    <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
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
                                    className="group relative w-full md:w-auto px-8 md:px-10 py-3 md:py-3.5 bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 active:scale-95 text-base flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 cursor-pointer"
                                >
                                    <FaEnvelope className="relative z-10" size={18} />
                                    <span className="relative z-10">Contact Me</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}
