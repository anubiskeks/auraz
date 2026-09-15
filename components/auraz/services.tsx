import { Plus } from 'lucide-react'
import { Reveal } from './reveal'

const services = [
  {
    n: '01',
    title: 'Google Ads',
    body: 'Med expertis från att ha kört Google Ads för över 100 Mkr inom e-handel, B2B, lokala tjänster och mycket mer hjälper vi er att översätta era affärsmål till både strategi och struktur i Google Ads.',
  },
  {
    n: '02',
    title: 'Paid Social',
    body: 'Vi hjälper våra kunder skapa efterfrågan och synlighet på sociala plattformar som Facebook, Instagram, TikTok och LinkedIn. Från att skapa annonser till att bygga strukturer baserat på er affär.',
  },
  {
    n: '03',
    title: 'Spårning',
    body: 'För att lägga grunden för ett framgångsrikt samarbete börjar vi i regel alltid med att säkerställa en god spårningsuppsättning med Google Tag Manager. Vi ser det som att lägga grunden innan man bygger ett hus.',
  },
  {
    n: '04',
    title: 'Feedoptimering',
    body: 'Vi förbättrar produktflöden för att ge annonsplattformarna bättre förutsättningar att visa rätt produkt för rätt person och driva högre försäljning.',
  },
  {
    n: '05',
    title: 'Dynamiskt kreativ',
    body: 'Har du ett produktfeed? Då har du basen för att kunna arbeta med dynamiska produktannonser som tar produktinformation och skapar annonsbilder helt automatiskt.',
  },
  {
    n: '06',
    title: 'Rapportering',
    body: 'För att omsätta transparens i vårt arbete är rapporteringen vårt starkaste verktyg. Genom att visa alla siffror och grafer live, oavsett vilket håll de pekar åt, kan du som kund känna dig trygg med att du har koll på läget.',
  },
]

export function Services() {
  return (
    <section id="tjanster" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="font-mono-label text-xs text-teal">Tjänster</span>
          <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Performance marketing
            <br />
            på vårt sätt
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Istället för att göra lite av allt fokuserar vi på det vi är bäst på.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.n}
              delay={(i % 3) * 100}
              className="group -mt-px -ml-px border border-border p-8 transition-colors duration-300 hover:bg-card lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-label text-xs text-teal">{service.n}</span>
                <Plus className="size-5 text-muted-foreground transition-colors group-hover:text-teal" />
              </div>
              <h3 className="mt-8 text-2xl font-bold tracking-tight">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
