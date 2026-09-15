export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Abstrakt datavisualisering av digitala flöden"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-teal pulse-dot" />
          <span className="font-mono-label text-xs text-teal-dim">
            Stockholm · Performance Marketing
          </span>
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold uppercase leading-[0.92] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Performance
          <br />
          Marketing drivet
          <br />
          av <span className="text-teal">transparens</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Vi hjälper ditt företag uppnå era affärsmål med effektfull och transparent
          performance marketing.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#kontakt"
            className="bg-teal px-8 py-4 font-mono-label text-xs text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Boka ett möte
          </a>
          <a
            href="#tjanster"
            className="font-mono-label text-xs text-foreground/80 transition-colors hover:text-teal"
          >
            Se våra tjänster →
          </a>
        </div>
      </div>
    </section>
  )
}
