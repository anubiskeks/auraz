'use client'

import { useEffect, useState } from 'react'
import { Logo } from './logo'
import { X } from 'lucide-react'

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
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <>
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
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="font-mono-label text-[0.65rem] text-muted-foreground transition-colors hover:text-teal"
            >
              Integritet & Cookies
            </button>
            <span className="font-mono-label text-[0.65rem] text-muted-foreground">
              © 2026 Auraz
            </span>
          </div>
        </div>
      </footer>

      {/* Modal för Integritetspolicy & Cookies */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-lg border border-border bg-background p-6 shadow-xl sm:p-8">
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
              aria-label="Stäng"
            >
              <X className="size-5" />
            </button>

            <h3 className="font-mono-label text-base text-foreground mb-4">
              Integritet & Cookies
            </h3>

            <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
              <div>
                <strong className="block text-foreground mb-1">
                  1. Inga cookies eller spårning
                </strong>
                Vi använder inga kakor (cookies) för spårning, annonsering eller profileringsändamål på den här webbplatsen. Vår besöksstatistik samlas in utan cookies och är helt anonymiserad.
              </div>

              <div>
                <strong className="block text-foreground mb-1">
                  2. Kontaktformulär & Personuppgifter
                </strong>
                När du skickar ett meddelande via vårt kontaktformulär sparar vi de uppgifter du själv uppger (namn, e-post, telefonnummer och företag) uteslutande för att besvara din förfrågan och hantera vår affärsrelation.
              </div>

              <div>
                <strong className="block text-foreground mb-1">
                  3. Dina rättigheter (GDPR)
                </strong>
                Du har när som helst rätt att begära ett utdrag av de uppgifter vi sparat om dig, eller be oss radera din information permanent.
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="mt-6 w-full border border-teal py-2 font-mono-label text-xs text-teal hover:bg-teal hover:text-accent-foreground transition-colors"
            >
              Jag förstår
            </button>
          </div>
        </div>
      )}
    </>
  )
}
