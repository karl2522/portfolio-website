import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ThemeProvider from "@/components/theme-provider"
import AnimatedBackground from "@/components/animated-background"

export const metadata: Metadata = {
    title: "Jared Karl Omen | UI/UX Designer & Developer",
    description: "Premium portfolio showcasing exceptional design and development work",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <style>{`
          @font-face {
            font-family: 'Certia-Medium';
            src: url('/fonts/certia-medium.otf') format('opentype');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Certia-Medium';
            src: url('/fonts/certia-medium.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
        </head>
        <body className="font-sans antialiased">
        <AnimatedBackground />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        </body>
        </html>
    )
}
