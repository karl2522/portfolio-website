"use client"

import { useEffect, useState } from "react"
import { FaReact, FaGit, FaFigma } from "react-icons/fa6"
import { FaJava } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVite, SiSpring, SiRadixui, SiDjango, SiHtml5, SiCss3, SiJavascript, SiPython, SiNodedotjs } from "react-icons/si"
import SectionReveal from "@/components/section-reveal"
import { useInView } from "@/hooks/use-in-view"

const technologies = [
    // Inner ring (8 icons)
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "HTML", icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", icon: SiCss3, color: "#1572b6" },
    { name: "Python", icon: SiPython, color: "#3776ab" },
    { name: "Java", icon: FaJava, color: "#ed8b00" },
    // Outer ring (8 icons)
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Vite", icon: SiVite, color: "#646cff" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Git", icon: FaGit, color: "#f1502f" },
    { name: "Figma", icon: FaFigma, color: "#f24e1e" },
    { name: "Spring Boot ", icon: SiSpring, color: "#6db33f" },
    { name: "Radix UI", icon: SiRadixui, color: "#0066ff" },
    { name: "Django", icon: SiDjango, color: "#092e20" },
]

export default function TechStack() {
    const { ref: sectionRef, inView } = useInView({ threshold: 0.2, once: true })
    const [isVisible, setIsVisible] = useState(false)
    const [rotation1, setRotation1] = useState(0)
    const [rotation2, setRotation2] = useState(0)
    const [isDesktop, setIsDesktop] = useState(false)
    const [scrollOffset, setScrollOffset] = useState(0)
    const [horizontalOffset, setHorizontalOffset] = useState(0)
    const [verticalOffset, setVerticalOffset] = useState(0)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768) // md breakpoint
        }
        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)
        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])

    useEffect(() => {
        if (inView) {
                    setIsVisible(true)
                }
    }, [inView])

    useEffect(() => {
        const handleScroll = () => {
            const sectionElement = sectionRef.current
            if (!sectionElement) return
            
            const rect = sectionElement.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const windowWidth = window.innerWidth
            const sectionTop = rect.top
            const sectionHeight = rect.height
            const sectionLeft = rect.left
            const sectionRight = rect.right
            const sectionCenter = sectionLeft + (rect.width / 2)
            
            // Calculate scroll progress through the section (0 to 1)
            // When section enters viewport, progress starts at 0
            // When section exits viewport, progress reaches 1
            const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))
            
            // Convert to offset (-1 to 1 range for subtle movement)
            // Center the effect around the middle of the scroll
            const offset = (progress - 0.5) * 2 // -1 to 1
            setScrollOffset(offset)
            
            // Calculate offset for slide-out effect to top-right
            // When section scrolls out of view (up), move the satellite component to top-right
            let horizontalMove = 0
            let verticalMove = 0
            
            // Calculate how far the section has scrolled past the viewport
            // Negative sectionTop means section is above viewport (scrolled out)
            if (sectionTop < windowHeight) {
                // Start moving when section starts leaving viewport
                if (sectionTop < 0) {
                    // Section is scrolling out above viewport
                    const outAmount = Math.abs(sectionTop)
                    const maxHorizontalMove = windowWidth * 0.5 // 50% of viewport width max
                    const maxVerticalMove = windowHeight * 0.4 // 40% of viewport height max
                    // Smooth easing - starts moving gradually
                    const moveRatio = Math.min(1, outAmount / (windowHeight * 0.8))
                    // Apply movement (positive = move right, negative = move up)
                    horizontalMove = moveRatio * maxHorizontalMove
                    verticalMove = -moveRatio * maxVerticalMove
                } else {
                    // Section is still in viewport but might be leaving soon
                    // Keep it centered
                    horizontalMove = 0
                    verticalMove = 0
                }
            } else {
                // Section is below viewport - keep centered
                horizontalMove = 0
                verticalMove = 0
            }
            
            setHorizontalOffset(horizontalMove)
            setVerticalOffset(verticalMove)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll, { passive: true })
        handleScroll() // Initial call
        
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [])

    useEffect(() => {
        if (!isVisible) return

        let animationFrame: number
        let currentDirection = 1
        let rotationAmount = 0
        const maxRotation = 120
        const speed = 0.5

        const animate = () => {
            rotationAmount += speed * currentDirection

            if (Math.abs(rotationAmount) >= maxRotation) {
                currentDirection *= -1
                rotationAmount = Math.max(-maxRotation, Math.min(maxRotation, rotationAmount))
            }

            setRotation1(rotationAmount)
            setRotation2(-rotationAmount * 0.7)

            animationFrame = requestAnimationFrame(animate)
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [isVisible])

    return (
        <section ref={sectionRef} id="tech-stack" className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-16 text-center">
                    <SectionReveal as="h2" className="text-4xl sm:text-5xl md:text-5xl font-bold mb-3" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <span className="gradient-text">Tech Stack</span>
                    </SectionReveal>
                    <SectionReveal as="p" className="text-muted-foreground max-w-2xl mx-auto mb-4" animation="up" delayMs={100} durationMs={700} inViewOptions={{ threshold: 0.2, once: true }}>
                        Tools and technologies I use to build fast, modern apps.
                    </SectionReveal>
                    <SectionReveal className="w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full mx-auto" animation="up" delayMs={150} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} />
                </div>

                <div 
                    className="relative w-full h-96 md:h-[28rem] flex items-center justify-center"
                    style={{
                        transform: `translate(${horizontalOffset}px, ${verticalOffset}px)`,
                        transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                        willChange: "transform",
                    }}
                >
                    {/* Orbit circles - 2 rings for spacing */}
                    <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-accent/50 dark:border-accent/20 rounded-full"></div>
                    <div className="absolute w-96 h-96 md:w-[28rem] md:h-[28rem] border border-accent/40 dark:border-accent/10 rounded-full"></div>

                    {/* Center dot with subtle glow */}
                    <div className="absolute w-3 h-3 bg-accent rounded-full z-10 shadow-lg shadow-accent/30 dark:shadow-accent/20"></div>

                    {/* Subtle connection lines */}
                    <svg 
                        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08] dark:opacity-[0.05]" 
                        style={{ zIndex: 1 }}
                        viewBox="0 0 500 500"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {technologies.map((tech, index) => {
                            const isInnerRing = index < 8
                            const ringIndex = isInnerRing ? index : index - 8
                            const totalInRing = 8
                            const angle = (ringIndex / totalInRing) * 360 + (isInnerRing ? rotation1 : rotation2)
                            const innerRadius = isDesktop ? 160 : 128
                            const outerRadius = isDesktop ? 224 : 192
                            const radius = isInnerRing ? innerRadius : outerRadius
                            const radian = (angle * Math.PI) / 180
                            const x = Math.cos(radian) * radius
                            const y = Math.sin(radian) * radius
                            
                            // SVG center (250, 250) and scale coordinates to viewBox
                            const centerX = 250
                            const centerY = 250
                            const scale = 500 / (isDesktop ? 448 : 384)
                            const satX = centerX + (x * scale)
                            const satY = centerY + (y * scale)
                            
                            return (
                                <line
                                    key={`line-${index}`}
                                    x1={centerX}
                                    y1={centerY}
                                    x2={satX}
                                    y2={satY}
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-accent"
                                />
                            )
                        })}
                    </svg>

                    {technologies.map((tech, index) => {
                        const Icon = tech.icon
                        // Split technologies into 2 rings (8 icons each)
                        const isInnerRing = index < 8
                        const ringIndex = isInnerRing ? index : index - 8
                        const totalInRing = 8

                        const angle = (ringIndex / totalInRing) * 360 + (isInnerRing ? rotation1 : rotation2)
                        // Radius values match the circle sizes:
                        // Inner: w-64 (256px) = 128px radius, md:w-80 (320px) = 160px radius
                        // Outer: w-96 (384px) = 192px radius, md:w-[28rem] (448px) = 224px radius
                        const innerRadius = isDesktop ? 160 : 128 // 80 * 4 / 2 (desktop) or 64 * 4 / 2 (mobile)
                        const outerRadius = isDesktop ? 224 : 192 // 28 * 16 / 2 (desktop) or 96 * 4 / 2 (mobile)
                        
                        const radius = isInnerRing ? innerRadius : outerRadius

                        const radian = (angle * Math.PI) / 180
                        const x = Math.cos(radian) * radius
                        const y = Math.sin(radian) * radius

                        // Subtle parallax effect based on scroll and position
                        // Inner ring moves less, outer ring moves more (like satellites at different distances)
                        const parallaxMultiplier = isInnerRing ? 0.3 : 0.5
                        const parallaxX = Math.sin(radian) * scrollOffset * parallaxMultiplier * 8
                        const parallaxY = Math.cos(radian) * scrollOffset * parallaxMultiplier * 8
                        
                        // Subtle rotation based on scroll (very minimal)
                        const rotationOffset = scrollOffset * parallaxMultiplier * 2

                        return (
                            <div
                                key={tech.name}
                                className={`absolute transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: `translate(calc(-50% + ${x + parallaxX}px), calc(-50% + ${y + parallaxY}px)) rotate(${rotationOffset}deg)`,
                                    transitionDelay: isVisible ? `${index * 30}ms` : "0ms",
                                    willChange: "transform",
                                }}
                            >
                                <div className="flex flex-col items-center gap-2 relative">
                                    {/* Subtle glow effect */}
                                    <div 
                                        className="absolute inset-0 rounded-lg opacity-20 dark:opacity-15 blur-md transition-opacity duration-300"
                                        style={{
                                            background: tech.color,
                                            filter: 'blur(8px)',
                                            transform: 'scale(1.3)',
                                        }}
                                    />
                                    
                                    <div className="p-3 md:p-4 rounded-lg bg-card border border-accent/30 transition-all duration-300 relative z-10 shadow-sm">
                                        <Icon
                                            className="text-2xl md:text-3xl transition-transform duration-300 relative z-10"
                                            style={{ color: tech.color }}
                                        />
                                    </div>
                                    <span className="text-xs font-semibold text-foreground/70 text-center whitespace-nowrap">
                    {tech.name}
                  </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
