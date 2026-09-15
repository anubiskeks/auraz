import { Check, X } from 'lucide-react'
import { Reveal } from './reveal'

const others = [
  'Otydliga metoder',
  'Gör allt möjligt',
  'Oklara och dyra ersättningsmodeller',
  'Långa bindningstider',
  'Byrå äger konton och verktyg',
]

const auraz = [
  'Transparenta metoder',
  'Gör det vi är bäst på',
  'Enkel prissättning, fast retainer',
  'Helt valfri bindningstid',
  'Ni som kund har fullt ägarskap',
]

export function Compare() {
  return (
    <section id="varfor" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="font-mono-label text-xs text-teal">Jämför</span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Varför välja Auraz?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            På Auraz gör vi inte som andra performance marketing-byråer. Skillnaderna är
            stora, här är en överblick.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="py-8 lg:px-8">
            <span className="font-mono-label text-xs text-muted-foreground">
              Andra byråer
            </span>
            <ul className="mt-8 space-y-6">
              {others.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border">
                    <X className="size-3.5 text-muted-foreground" />
                  </span>
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="rounded-sm bg-card p-8 lg:p-10">
            <span className="font-mono-label text-xs text-teal">Auraz</span>
            <ul className="mt-8 space-y-6">
              {auraz.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/15">
                    <Check className="size-3.5 text-teal" />
                  </span>
                  <span className="text-lg font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src="/images/dashboard.png"
              alt="Auraz rapporteringsdashboard med live-data"
              className="h-full w-full object-cover"
            />
          </div>
          <a
            href="#kontakt"
            className="mt-10 inline-block bg-teal px-8 py-4 font-mono-label text-xs text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Boka ett möte
          </a>
        </Reveal>
      </div>
    </section>
  )
}
