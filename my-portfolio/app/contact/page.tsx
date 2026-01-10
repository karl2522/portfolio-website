import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Work With Me",
    description: "Get in touch for freelance opportunities, collaborations, or just to say hi.",
}

export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 py-24 min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-6 gradient-text">Work With Me</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
                href="https://calendly.com/joredomen/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
                Book a Call
            </a>
        </main>
    )
}
