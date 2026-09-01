"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type WordsPullUpProps = {
  text: string
  className?: string
  showAsterisk?: boolean
}

const EASE = [0.16, 1, 0.3, 1] as const

export function WordsPullUp({
  text,
  className,
  showAsterisk = false,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(" ")

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden">
            <motion.span
              className="relative inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            >
              {word}
              {showAsterisk && isLast ? (
                <span className="absolute top-[0.65em] right-[-0.3em] text-[0.31em]">
                  *
                </span>
              ) : null}
              {i < words.length - 1 ? "\u00A0" : null}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
