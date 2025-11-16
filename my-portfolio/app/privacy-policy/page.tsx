"use client"

import SectionReveal from "@/components/section-reveal"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

export default function PrivacyPolicy() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 mb-8 group"
                    >
                        <FaArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>
                    <SectionReveal as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <span className="gradient-text">Privacy Policy</span>
                    </SectionReveal>
                    <SectionReveal as="p" className="text-muted-foreground text-base md:text-lg mb-2" animation="up" delayMs={100} durationMs={700} inViewOptions={{ threshold: 0.2, once: true }}>
                        Last updated: January 2025
                    </SectionReveal>
                    <SectionReveal className="w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full" animation="up" delayMs={150} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} />
                </div>

                {/* Content */}
                <div className="space-y-8 md:space-y-12">
                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={200} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Jared Karl Omen (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our portfolio website.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={300} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Information We Collect</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                                    <p>We may collect personal information that you voluntarily provide to us when you:</p>
                                    <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                                        <li>Contact us through email or contact forms</li>
                                        <li>Subscribe to newsletters or updates</li>
                                        <li>Interact with our website features</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                                    <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
                                    <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                                        <li>IP address and browser type</li>
                                        <li>Pages visited and time spent on pages</li>
                                        <li>Referring website addresses</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={400} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Improve and optimize our website experience</li>
                                <li>Send you updates and communications (with your consent)</li>
                                <li>Analyze website usage and trends</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={500} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={600} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                                <li>Access and receive a copy of your personal data</li>
                                <li>Request correction of inaccurate personal data</li>
                                <li>Request deletion of your personal data</li>
                                <li>Object to processing of your personal data</li>
                                <li>Request restriction of processing your personal data</li>
                            </ul>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={700} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                            </p>
                            <div className="mt-4">
                                <a
                                    href="mailto:joredomen@gmail.com"
                                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 font-semibold"
                                >
                                    joredomen@gmail.com
                                </a>
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </main>
    )
}

