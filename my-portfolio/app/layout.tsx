import AnimatedBackground from "@/components/animated-background"
import ThemeProvider from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
    title: "Jared Karl Omen | UI/UX Designer & Developer",
    icons: {
        icon: "/images/omenLogo.png",
        apple: "/images/omenLogo.png",
    }
}



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head></head>
        <body className="font-sans antialiased">
        <AnimatedBackground />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        </body>
        </html>
    )
}
