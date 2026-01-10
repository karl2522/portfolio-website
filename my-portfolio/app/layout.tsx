import AnimatedBackground from "@/components/animated-background"
import JsonLd from "@/components/json-ld"
import ThemeProvider from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
    metadataBase: new URL("https://jaredomen.com"),
    title: {
        default: "Jared Karl Omen | Full-Stack Developer",
        template: "%s | Jared Karl Omen",
    },
    description:
        "Full-Stack Developer specializing in modern web technologies. Explore my portfolio of projects, case studies, and technical experiments.",
    keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Node.js", "Portfolio", "Software Engineer"],
    authors: [{ name: "Jared Karl Omen", url: "https://jaredomen.com" }],
    creator: "Jared Karl Omen",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jaredomen.com",
        title: "Jared Karl Omen | Full-Stack Developer",
        description:
            "Full-Stack Developer to build pixel-perfect, performant, and accessible web experiences.",
        siteName: "Jared Karl Omen Portfolio",
        images: [
            {
                url: "/images/og-image.png", // We will need to ensure this exists or use a default
                width: 1200,
                height: 630,
                alt: "Jared Karl Omen Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Jared Karl Omen | Full-Stack Developer",
        description:
            "Full-Stack Developer building modern web experiences. Check out my latest projects and case studies.",
        images: ["/images/og-image.png"],
        creator: "@jaredomen", // Placeholder, user can update
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/images/omenLogo.png",
        apple: "/images/omenLogo.png",
    },
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
                <JsonLd />
                <AnimatedBackground />
                <ThemeProvider>{children}</ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}
