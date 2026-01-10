"use client"

import type React from "react"

import { Children, cloneElement, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from "react"
import "./scroll-stack.css"

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ")

export interface ScrollStackItemProps {
    children: React.ReactNode
    className?: string
    cardClassName?: string
    index?: number
    isLast?: boolean
}

export const ScrollStackItem = ({ children, className, cardClassName, index = 0, isLast = false }: ScrollStackItemProps) => {
    const itemStyle = useMemo<React.CSSProperties>(() => {
        if (isLast) {
            return {
                position: "relative",
                zIndex: 40,
            }
        }
        return {
            position: "sticky",
            top: `calc(var(--stack-sticky-offset) + ${index * 5}px)`,
            zIndex: 1 + index,
        }
    }, [index, isLast])

    return (
        <div
            className={cx("scroll-stack-item", isLast && "scroll-stack-item-last", className)}
            style={itemStyle}
        >
            <div className={cx("scroll-stack-card", cardClassName)}>{children}</div>
        </div>
    )
}

export interface ScrollStackProps {
    children: React.ReactNode
    className?: string
    stickyOffset?: number
    anchorSelector?: string
    itemDistance?: number
    onStackComplete?: () => void
}

const ScrollStack = ({
    children,
    className,
    stickyOffset = 140,
    anchorSelector,
    itemDistance = 120,
    onStackComplete,
}: ScrollStackProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [stickyTopPx, setStickyTopPx] = useState<number>(stickyOffset)
    const [sectionMaxHeight, setSectionMaxHeight] = useState<number>(0)

    const rootStyle = useMemo<React.CSSProperties>(
        () => ({
            ["--stack-sticky-offset" as any]: `${stickyTopPx}px`,
            ["--stack-item-distance" as any]: `${itemDistance}px`,
            ["--stack-gap" as any]: "5px",
        }),
        [stickyTopPx, itemDistance],
    )

    const measureStickyOffset = useCallback(() => {
        const el = containerRef.current
        if (!el) return

        if (anchorSelector) {
            const anchor =
                el.closest("section")?.querySelector(anchorSelector) ??
                document.querySelector(anchorSelector)
            if (anchor instanceof HTMLElement) {
                const rect = anchor.getBoundingClientRect()
                const computedStyle = window.getComputedStyle(anchor)
                const topValue = computedStyle.top
                // Extract numeric value from top (e.g., "80px" -> 80)
                const topOffset = topValue.includes('px') ? parseFloat(topValue) : 0
                const h = rect.height
                // Account for both the top offset and the header height
                setStickyTopPx(Math.max(0, Math.round(topOffset + h + 20)))
                return
            }
        }
        setStickyTopPx(stickyOffset)
    }, [anchorSelector, stickyOffset])

    const calculateSectionHeight = useCallback(() => {
        const container = containerRef.current
        if (!container) return

        const cards = Array.from(container.querySelectorAll(".scroll-stack-card")) as HTMLElement[]
        if (cards.length === 0) return

        const cardCount = cards.length
        const viewportHeight = window.innerHeight

        // Calculate heights of all cards
        const cardHeights: number[] = []
        cards.forEach((card) => {
            const height = card.getBoundingClientRect().height || card.offsetHeight || 400
            cardHeights.push(height)
        })

        const lastCardHeight = cardHeights[cardCount - 1]

        // Calculate base height: all cards + gaps between them
        let baseHeight = 0
        cardHeights.forEach((height, i) => {
            baseHeight += height
            if (i < cardHeights.length - 1) {
                baseHeight += itemDistance
            }
        })

        // Critical: We need enough height so that:
        // 1. Sticky cards can remain sticky at their positions
        // 2. Last card can scroll from its position, OVER the sticky cards, and out of viewport
        // 3. The section doesn't end until last card is completely gone

        // Minimal calculation - just add a tiny amount for last card to scroll over sticky cards
        const maxHeight = baseHeight + viewportHeight * 0.12

        setSectionMaxHeight(maxHeight)
    }, [itemDistance, stickyTopPx])

    useEffect(() => {
        measureStickyOffset()
        calculateSectionHeight()

        const handleResize = () => {
            measureStickyOffset()
            // Delay height calculation to ensure cards are rendered
            setTimeout(calculateSectionHeight, 100)
        }

        window.addEventListener("resize", handleResize)

        // Recalculate after a short delay to ensure cards are rendered
        const timeoutId = setTimeout(calculateSectionHeight, 100)

        return () => {
            window.removeEventListener("resize", handleResize)
            clearTimeout(timeoutId)
        }
    }, [measureStickyOffset, calculateSectionHeight])

    const containerStyle = useMemo<React.CSSProperties>(
        () => ({
            minHeight: sectionMaxHeight > 0 ? `${sectionMaxHeight}px` : undefined,
        }),
        [sectionMaxHeight],
    )

    const childArray = Children.toArray(children)
    const totalItems = childArray.length

    const renderedChildren = useMemo(
        () =>
            childArray.map((child, index) => {
                if (!isValidElement(child)) return child
                const isLast = index === totalItems - 1
                return cloneElement(child as React.ReactElement<ScrollStackItemProps>, {
                    index,
                    isLast,
                })
            }),
        [childArray, totalItems],
    )

    return (
        <div className={cx("scroll-stack", className)} style={rootStyle} ref={containerRef}>
            <div className="scroll-stack-container" style={containerStyle}>
                {renderedChildren}
            </div>
        </div>
    )
}

export default ScrollStack
