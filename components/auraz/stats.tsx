'use client'

import { useEffect, useRef, useState } from 'react'
import { Reveal } from './reveal'

type Stat = {
  value: number
  decimals: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 2.37, decimals: 2, suffix: 'Mkr', label: 'Total annonskostnad Google Ads' },
  { value: 25.4, decimals: 1, suffix: 'M', label: 'Visningar över alla konton' },
  { value: 332.7, decimals: 1, suffix: 'K', label: 'Klick' },
  { value: 16.9, decimals: 1, suffix: 'K', label: 'Konverteringar' },
]

function formatSv(n: number, decimals: number) {
  return n.toLocaleString('sv-SE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()
        const duration = 1600
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(stat.value * eased)
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [stat.value])

  return (
    <div ref={ref} className="px-2">
      <div className="flex items-baseline gap-1 text-teal">
        <span className="text-5xl font-bold tracking-tight md:text-6xl">
          {formatSv(display, stat.decimals)}
        </span>
        <span className="text-xl font-bold md:text-2xl">{stat.suffix}</span>
      </div>
      <p className="mt-4 max-w-[14ch] font-mono-label text-[0.65rem] leading-relaxed text-muted-foreground">
        {stat.label}
      </p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-teal pulse-dot" />
            <span className="font-mono-label text-xs text-teal">Live</span>
          </div>
          <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Transparens genomsyrar <span className="text-teal">allt</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Här är siffrorna från ett slumpmässigt utvalt förvaltarkonto i Google Ads,
            senaste 30 dagarna.
          </p>
        </Reveal>

        <Reveal
          delay={150}
          className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={i > 0 ? 'lg:border-l lg:border-border lg:pl-8' : 'lg:pl-2'}
            >
              <Counter stat={stat} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
