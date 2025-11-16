"use client"

import FuzzyText from "@/components/fuzzy-text"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaArrowLeft, FaHouse } from "react-icons/fa6"

export default function NotFound() {
    const [textColor, setTextColor] = useState("#ffffff")

    useEffect(() => {
        // Get the computed text color from the actual rendered element
        const updateColor = () => {
            // Create a temporary element to get the computed color
            const temp = document.createElement("div")
            temp.className = "text-foreground"
            temp.style.position = "absolute"
            temp.style.visibility = "hidden"
            document.body.appendChild(temp)
            const computedColor = window.getComputedStyle(temp).color
            document.body.removeChild(temp)

            // Convert rgb/rgba to hex if needed
            const rgbMatch = computedColor.match(/\d+/g)
            if (rgbMatch && rgbMatch.length >= 3) {
                const r = parseInt(rgbMatch[0])
                const g = parseInt(rgbMatch[1])
                const b = parseInt(rgbMatch[2])
                const hex = `#${[r, g, b].map(x => x.toString(16).padStart(2, "0")).join("")}`
                setTextColor(hex)
            } else {
                setTextColor(computedColor)
            }
        }

        updateColor()

        // Watch for theme changes
        const observer = new MutationObserver(updateColor)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        })

        return () => observer.disconnect()
    }, [])

    return (
        <main className="bg-background text-foreground min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                {/* 404 Text with Fuzzy Effect */}
                <div className="mb-8 sm:mb-12 flex items-center justify-center">
                    <FuzzyText
                        fontSize="clamp(4rem, 15vw, 12rem)"
                        fontWeight={900}
                        color={textColor}
                        enableHover={true}
                        baseIntensity={0.18}
                        hoverIntensity={0.5}
                    >
                        404
                    </FuzzyText>
                </div>

                {/* Error Message */}
                <div className="mb-8 sm:mb-12 space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or
                        you entered the wrong URL.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <Link
                        href="/"
                        className="group relative px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 active:scale-95 text-sm sm:text-base flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <FaHouse className="relative z-10" size={18} />
                        <span className="relative z-10">Go Home</span>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="group relative px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-accent text-accent rounded-lg font-semibold transition-all duration-300 active:scale-95 text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 hover:bg-accent/5 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <FaArrowLeft className="relative z-10" size={18} />
                        <span className="relative z-10">Go Back</span>
                    </button>
                </div>
            </div>
        </main>
    )
}

