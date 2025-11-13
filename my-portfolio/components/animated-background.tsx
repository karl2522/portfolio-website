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

export default function AnimatedBackground() {
    const [stars, setStars] = useState<Star[]>([])

    useEffect(() => {
        const generateStars = () => {
            const newStars: Star[] = []
            const starCount = 40

            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    duration: Math.random() * 3 + 2,
                    delay: Math.random() * 5,
                    type: ["dot", "twinkle", "cross"][Math.floor(Math.random() * 3)] as "dot" | "twinkle" | "cross",
                })
            }
            setStars(newStars)
        }

        generateStars()
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/80 to-accent/30 blur-sm" />
                    )}
                    {star.type === "twinkle" && (
                        <div className="w-full h-full rounded-full bg-accent/60 shadow-lg shadow-accent/50" />
                    )}
                    {star.type === "cross" && (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-[1px] h-full bg-gradient-to-b from-accent/0 via-accent/60 to-accent/0" />
                            <div className="w-full h-[1px] absolute bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
