"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextType {
    theme: "dark"
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider")
    }
    return context
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Always set dark mode
        const html = document.documentElement
        html.classList.add("dark")
        localStorage.setItem("theme", "dark")
        setMounted(true)
    }, [])

    if (!mounted) return <>{children}</>

    return (
        <ThemeContext.Provider value={{ theme: "dark" }}>
            {children}
        </ThemeContext.Provider>
    )
}
