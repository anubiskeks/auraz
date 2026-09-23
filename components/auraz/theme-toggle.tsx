'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Undvik hydreringsfel genom att vänta tills komponenten renderats i webbläsaren
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center p-2 rounded-full border border-border bg-background text-foreground transition-colors hover:border-teal"
      aria-label="Växla färgtema"
    >
      {theme === 'dark' ? (
        <Sun className="size-4 text-teal" />
      ) : (
        <Moon className="size-4 text-teal" />
      )}
    </button>
  )
}
