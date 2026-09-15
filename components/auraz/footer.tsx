'use client'

import { useEffect, useState } from 'react'
import { Logo } from './logo'

function useClock(timeZone: string) {
  const [time, setTime] = useState('--:--:--')
  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('sv-SE', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone,
        }).format(new Date()),
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [timeZone])
  return time
}

export function Footer() {
  const stockholm = useClock('Europe/Stockholm')
  const panama = useClock('America/Panama')

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <a href="#top" aria-label="Auraz start">
          <Logo />
        </a>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-teal" />
            Stockholm {stockholm}
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-teal" />
            Panama {panama}
          </span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="#"
            className="font-mono-label text-[0.65rem] text-muted-foreground transition-colors hover:text-teal"
          >
            Integritetspolicy
          </a>
          <a
            href="#"
            className="font-mono-label text-[0.65rem] text-muted-foreground transition-colors hover:text-teal"
          >
            Villkor
          </a>
          <span className="font-mono-label text-[0.65rem] text-muted-foreground">
            © 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
