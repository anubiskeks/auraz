'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Tjänster', href: '#tjanster' },
  { label: 'Varför Auraz', href: '#varfor' },
  { label: 'Vision', href: '#vision' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" aria-label="Auraz start">
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono-label text-xs text-foreground/80 transition-colors hover:text-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden border border-teal px-6 py-3 font-mono-label text-xs text-teal transition-colors hover:bg-teal hover:text-accent-foreground sm:inline-block"
          >
            Boka möte
          </a>
          <button
            type="button"
            className="text-foreground md:hidden"
            aria-label={open ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono-label text-sm text-foreground/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 block border border-teal px-6 py-3 text-center font-mono-label text-xs text-teal"
              >
                Boka möte
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
