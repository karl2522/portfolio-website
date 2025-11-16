"use client"

import { useInView } from "@/hooks/use-in-view"
import React, { ElementType } from "react"

type AnimationKind = "fade" | "up" | "down" | "left" | "right" | "scale"

type SectionRevealProps = {
    as?: ElementType
    className?: string
    children?: React.ReactNode
    animation?: AnimationKind
    durationMs?: number
    delayMs?: number
    easing?: string
    staggerChildren?: boolean
    staggerStepMs?: number
    inViewOptions?: {
        threshold?: number | number[]
        rootMargin?: string
        once?: boolean
    }
}

export default function SectionReveal(props: SectionRevealProps) {
    const {
        as,
        className,
        children,
        animation = "up",
        durationMs = 700,
        delayMs = 0,
        easing = "cubic-bezier(0.22, 1, 0.36, 1)",
        staggerChildren = false,
        staggerStepMs = 90,
        inViewOptions,
        ...rest
    } = props

    const Component = (as ?? "div") as ElementType
    const { ref, inView } = useInView(inViewOptions)

    const dataState = inView ? "in" : "out"

    const style = {
        ["--reveal-duration"]: `${durationMs}ms`,
        ["--reveal-ease"]: `${easing}`,
        ["--reveal-delay"]: `${delayMs}ms`,
        ["--stagger-step"]: `${staggerStepMs}ms`,
    } as React.CSSProperties

    const animationClass =
        animation === "fade"
            ? "reveal"
            : animation === "up"
                ? "reveal reveal--up"
                : animation === "down"
                    ? "reveal reveal--down"
                    : animation === "left"
                        ? "reveal reveal--left"
                        : animation === "right"
                            ? "reveal reveal--right"
                            : "reveal reveal--scale"

    return (
        <Component
            ref={ref}
            data-state={dataState}
            className={`${animationClass}${staggerChildren ? " reveal--stagger" : ""}${className ? ` ${className}` : ""}`}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    )
}



