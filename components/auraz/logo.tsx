import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label="Auraz"
    >
      <Image
        src="/images/auraz-logo.png"
        alt="Auraz"
        width={96}
        height={96}
        className="h-9 w-auto"
        priority
      />
      <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold uppercase tracking-[0.2em] text-white">
        Auraz
      </span>
    </span>
  )
}
