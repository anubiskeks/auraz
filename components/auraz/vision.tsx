import { Reveal } from './reveal'

export function Vision() {
  return (
    <section id="vision" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="font-mono-label text-xs text-teal">Vision</span>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Radikal transparens
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              För oss handlar transparens om mer än ärlighet. Det handlar om att bygga ett
              oslagbart förtroende. Vi väljer uppriktighet även när försköning hade varit
              lättast.
            </p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Med Auraz som partner har du någon att lita på i alla lägen.
            </p>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="overflow-hidden rounded-sm border border-border">
              <img
                src="/images/network.png"
                alt="Abstrakt visualisering av dataflöden och transparens"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 rounded-sm border border-border bg-background/80 px-5 py-4 backdrop-blur-md">
              <p className="font-mono-label text-[0.6rem] text-teal">Koordinater</p>
              <p className="mt-1 font-mono text-sm text-foreground">
                59.3293° N, 18.0686° E
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Stockholm, Sverige</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
