"use client"

import { useEffect, useState } from "react"

interface Star {
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
    type: "dot" | "twinkle" | "cross"
}

interface GradientOrb {
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
}

interface Nebula {
    id: number
    x: number
    y: number
    width: number
    height: number
    duration: number
    delay: number
    rotation: number
}

interface StarCluster {
    id: number
    x: number
    y: number
    size: number
    starCount: number
}

export default function AnimatedBackground() {
    const [stars, setStars] = useState<Star[]>([])
    const [orbs, setOrbs] = useState<GradientOrb[]>([])
    const [nebulas, setNebulas] = useState<Nebula[]>([])
    const [starClusters, setStarClusters] = useState<StarCluster[]>([])
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

        const generateStars = () => {
            const newStars: Star[] = []
            const starCount = 60

            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 0.5,
                    duration: Math.random() * 4 + 2,
                    delay: Math.random() * 5,
                    type: ["dot", "twinkle", "cross"][Math.floor(Math.random() * 3)] as "dot" | "twinkle" | "cross",
                })
            }
            setStars(newStars)
        }

        const generateOrbs = () => {
            const newOrbs: GradientOrb[] = []
            const orbCount = 3

            for (let i = 0; i < orbCount; i++) {
                newOrbs.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 300 + 200,
                    duration: Math.random() * 20 + 15,
                    delay: Math.random() * 5,
                })
            }
            setOrbs(newOrbs)
        }

        const generateNebulas = () => {
            const newNebulas: Nebula[] = []
            const nebulaCount = 3

            for (let i = 0; i < nebulaCount; i++) {
                newNebulas.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    width: Math.random() * 400 + 300,
                    height: Math.random() * 200 + 150,
                    duration: Math.random() * 25 + 20,
                    delay: Math.random() * 5,
                    rotation: Math.random() * 360,
                })
            }
            setNebulas(newNebulas)
        }

        const generateStarClusters = () => {
            const newClusters: StarCluster[] = []
            const clusterCount = 4

            for (let i = 0; i < clusterCount; i++) {
                newClusters.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 80 + 60,
                    starCount: Math.floor(Math.random() * 8 + 5),
                })
            }
            setStarClusters(newClusters)
        }

        generateStars()
        generateOrbs()
        generateNebulas()
        generateStarClusters()

        return () => observer.disconnect()
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0">
                {orbs.map((orb, index) => (
                    <div
                        key={orb.id}
                        className="absolute rounded-full blur-3xl animate-float-orb opacity-30 dark:opacity-20"
                        style={{
                            left: `${orb.x}%`,
                            top: `${orb.y}%`,
                            width: `${orb.size}px`,
                            height: `${orb.size}px`,
                            animationDuration: `${orb.duration}s`,
                            animationDelay: `${orb.delay}s`,
                            background: isDark
                                ? `radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)`
                                : index % 2 === 0
                                    ? `radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(147, 197, 253, 0.15) 50%, transparent 70%)`
                                    : `radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)`,
                            transform: `translate(-50%, -50%)`,
                        }}
                    />
                ))}
            </div>

            {/* Nebula Clouds */}
            <div className="absolute inset-0">
                {nebulas.map((nebula, index) => (
                    <div
                        key={nebula.id}
                        className="absolute rounded-full blur-3xl animate-nebula-drift opacity-25 dark:opacity-15"
                        style={{
                            left: `${nebula.x}%`,
                            top: `${nebula.y}%`,
                            width: `${nebula.width}px`,
                            height: `${nebula.height}px`,
                            animationDuration: `${nebula.duration}s`,
                            animationDelay: `${nebula.delay}s`,
                            transform: `translate(-50%, -50%) rotate(${nebula.rotation}deg)`,
                            transformOrigin: 'center center',
                            background: isDark
                                ? index % 2 === 0
                                    ? `radial-gradient(ellipse, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.1) 40%, transparent 70%)`
                                    : `radial-gradient(ellipse, rgba(139, 92, 246, 0.18) 0%, rgba(167, 139, 250, 0.08) 40%, transparent 70%)`
                                : index % 2 === 0
                                    ? `radial-gradient(ellipse, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.08) 40%, transparent 70%)`
                                    : `radial-gradient(ellipse, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.06) 40%, transparent 70%)`,
                        }}
                    />
                ))}
            </div>

            {/* Star Clusters */}
            {starClusters.map((cluster) => (
                <div
                    key={cluster.id}
                    className="absolute animate-pulse-slow opacity-60 dark:opacity-40"
                    style={{
                        left: `${cluster.x}%`,
                        top: `${cluster.y}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {Array.from({ length: cluster.starCount }).map((_, i) => {
                        const angle = (360 / cluster.starCount) * i
                        const distance = (cluster.size / 2) * (0.3 + Math.random() * 0.7)
                        const x = Math.cos((angle * Math.PI) / 180) * distance
                        const y = Math.sin((angle * Math.PI) / 180) * distance
                        return (
                            <div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    left: `${x}px`,
                                    top: `${y}px`,
                                    width: `${Math.random() * 1.5 + 0.5}px`,
                                    height: `${Math.random() * 1.5 + 0.5}px`,
                                    transform: 'translate(-50%, -50%)',
                                    background: isDark
                                        ? 'rgba(96, 165, 250, 0.6)'
                                        : 'rgba(59, 130, 246, 0.5)',
                                    boxShadow: isDark
                                        ? `0 0 ${Math.random() * 3 + 2}px rgba(96, 165, 250, 0.4)`
                                        : `0 0 ${Math.random() * 2 + 1}px rgba(59, 130, 246, 0.3)`,
                                    animationDelay: `${Math.random() * 2}s`,
                                }}
                            />
                        )
                    })}
                </div>
            ))}

            {/* Subtle Light Rays */}
            <div className="absolute inset-0 overflow-hidden">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="absolute animate-light-ray opacity-10 dark:opacity-5"
                        style={{
                            left: `${20 + i * 30}%`,
                            top: `${10 + i * 25}%`,
                            width: '2px',
                            height: '300px',
                            animationDuration: `${8 + i * 2}s`,
                            animationDelay: `${i * 2}s`,
                            transform: `translate(-50%, -50%) rotate(${15 + i * 20}deg)`,
                            transformOrigin: 'center center',
                            background: isDark
                                ? `linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.3), transparent)`
                                : `linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.2), transparent)`,
                            filter: `blur(${1 + i * 0.5}px)`,
                        }}
                    />
                ))}
            </div>

            {/* Enhanced Stars/Particles */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className={`absolute ${star.type === "twinkle" ? "animate-shimmer" : "animate-pulse-slow"}`}
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size * 2}px`,
                        height: `${star.size * 2}px`,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    }}
                >
                    {star.type === "dot" && (
                        <div className={`w-full h-full rounded-full blur-[0.5px] ${isDark
                                ? "bg-gradient-to-br from-accent/80 to-accent/30 shadow-lg shadow-accent/30"
                                : "bg-gradient-to-br from-accent/60 to-accent/40 shadow-md shadow-accent/20"
                            }`} />
                    )}
                    {star.type === "twinkle" && (
                        <div className={`w-full h-full rounded-full shadow-lg ${isDark
                                ? "bg-accent/70 shadow-accent/50"
                                : "bg-accent/50 shadow-accent/30"
                            }`} />
                    )}
                    {star.type === "cross" && (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className={`w-[1px] h-full bg-gradient-to-b from-transparent ${isDark ? "via-accent/70" : "via-accent/50"
                                } to-transparent`} />
                            <div className={`w-full h-[1px] absolute bg-gradient-to-r from-transparent ${isDark ? "via-accent/70" : "via-accent/50"
                                } to-transparent`} />
                        </div>
                    )}
                </div>
            ))}

            {/* Flowing Gradient Overlay */}
            <div
                className="absolute inset-0 opacity-40 dark:opacity-15"
                style={{
                    backgroundImage: isDark
                        ? `radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                           radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`
                        : `radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
                           radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
                    backgroundSize: '200% 200%',
                    animation: 'gradient-flow 20s ease infinite',
                }}
            />
        </div>
    )
}
