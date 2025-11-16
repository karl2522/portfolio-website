"use client"

import SectionReveal from "@/components/section-reveal"
import { useInView } from "@/hooks/use-in-view"
import { FaArrowUpRightFromSquare, FaCertificate, FaCloud, FaDatabase, FaMedal, FaTrophy } from "react-icons/fa6"

const certifications = [
    {
        title: "AWS Cloud Foundations",
        issuer: "Amazon Web Services",
        date: "October 2025",
        icon: FaCloud,
        link: "https://drive.google.com/file/d/1Z-MQrbf6qumuGTjha2MjE2edW0-uYqGc/view?usp=drive_link",
        color: "from-orange-400 to-orange-600",
    },
    {
        title: "PrompQuest Hackathon",
        issuer: "Proweaver",
        date: "September 2025",
        icon: FaTrophy,
        link: "https://drive.google.com/file/d/1zsflIO8BbxAJuWI4OVkMh5-tVHIfqCU7/view?usp=drive_link",
        color: "from-purple-400 to-purple-600",
    },
    {
        title: "Python Completion Certificate",
        issuer: "Codechum",
        date: "December 2024",
        icon: FaMedal,
        link: "https://citu.codechum.com/certificates/4651",
        color: "from-blue-400 to-blue-600",
    },
    {
        title: "MySQL Completion Certificate",
        issuer: "Codechum",
        date: "December 2024",
        icon: FaDatabase,
        link: "https://citu.codechum.com/certificates/4446",
        color: "from-green-400 to-green-600",
    },
    {
        title: "Information Representation and Data Organization",
        issuer: "Huawei",
        date: "April 2023",
        icon: FaCertificate,
        link: "https://drive.google.com/file/d/1RQZN__hHD8Y3-sXJetwCzGlHSfWA_JmS/view?usp=drive_link",
        color: "from-red-400 to-red-600",
    },
    {
        title: "Data Storage Technology",
        issuer: "Huawei",
        date: "March 2023",
        icon: FaDatabase,
        link: "https://drive.google.com/file/d/1D-xRU6-n31OAsVeK2OuCLqu9j_Fl0IQw/view?usp=drive_link",
        color: "from-red-500 to-red-700",
    },
]

export default function Certifications() {
    const { ref: sectionRef } = useInView({ threshold: 0.2, once: true })

    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background"
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-16 text-center">
                    <SectionReveal as="h2" className="text-4xl sm:text-5xl md:text-5xl font-bold mb-3" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <span className="gradient-text">Certifications</span>
                    </SectionReveal>
                    <SectionReveal as="p" className="text-muted-foreground max-w-2xl mx-auto mb-4" animation="up" delayMs={100} durationMs={700} inViewOptions={{ threshold: 0.2, once: true }}>
                        Proof of skills and accomplishments I’ve earned along the way.
                    </SectionReveal>
                    <SectionReveal className="w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full mx-auto" animation="up" delayMs={150} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} />
                </div>

                <SectionReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" animation="up" staggerChildren staggerStepMs={120} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                    {certifications.map((cert, index) => (
                        <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer" style={{ ["--stagger-index" as any]: index }}>
                            <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-accent/20 bg-card/30 dark:bg-card/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent/40">
                                {/* decorative glow */}
                                <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${cert.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                {/* content */}
                                <div className="relative p-5 md:p-6">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="relative flex-shrink-0">
                                            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group">
                                                {(() => { const Icon = cert.icon; return <Icon className="text-accent text-xl md:text-2xl" /> })()}
                                                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-accent/30 via-transparent to-accent/20 pointer-events-none animate-glow"></div>
                                            </div>
                                        </div>
                                        <FaArrowUpRightFromSquare className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg md:text-xl" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                                    <div className="mt-3 flex flex-wrap items-center gap-2">
                                        <span className="text-[11px] md:text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                                            {cert.issuer}
                                        </span>
                                        <span className="text-[11px] md:text-xs px-2 py-1 rounded-full bg-muted text-foreground/70">
                                            {cert.date}
                                        </span>
                                        <span className={`text-[11px] md:text-xs px-2 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white/90`}>
                                            Certified
                    </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </SectionReveal>
            </div>
        </section>
    )
}
