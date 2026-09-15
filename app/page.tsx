import { Navbar } from '@/components/auraz/navbar'
import { Hero } from '@/components/auraz/hero'
import { Stats } from '@/components/auraz/stats'
import { Services } from '@/components/auraz/services'
import { Compare } from '@/components/auraz/compare'
import { Vision } from '@/components/auraz/vision'
import { Contact } from '@/components/auraz/contact'
import { Footer } from '@/components/auraz/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Compare />
      <Vision />
      <Contact />
      <Footer />
    </main>
  )
}
