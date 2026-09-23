'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="size-9" /> // Förhindrar layout-hopp innan sidan laddats i webbläsaren
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-teal"
      aria-label="Växla tema"
      type="button"
    >
      {theme === 'dark' ? (
        <Sun className="size-4 text-teal" />
      ) : (
        <Moon className="size-4 text-teal" />
      )}
    </button>
  )
}
