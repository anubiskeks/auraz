'use client'

import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const fields = [
  { name: 'namn', label: 'Namn', type: 'text', full: false },
  { name: 'foretag', label: 'Företag', type: 'text', full: false },
  { name: 'epost', label: 'E-post', type: 'email', full: false },
  { name: 'telefon', label: 'Telefon', type: 'tel', full: false },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const payload = {
      name: formData.get('namn') as string,
      company: formData.get('foretag') as string,
      email: formData.get('epost') as string,
      phone: formData.get('telefon') as string,
      message: formData.get('mal') as string,
    }

    try {
      const response = await fetch('https://hook.eu1.make.com/3incm3srywp19lq5afmy4gg63vox8t46', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSent(true)
      } else {
        alert('Det uppstod ett fel när meddelandet skickades. Försök igen.')
      }
    } catch (error) {
      console.error('Fel vid sändning till Webhook:', error)
      alert('Det uppstod ett nätverksfel. Försök igen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontakt" className="relative overflow-hidden border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-full">
          <img
            src="/images/network.png"
            alt="Abstrakt nätverk av dataflöden"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-background" />
          <div className="absolute bottom-8 left-8">
            <span className="font-mono-label text-xs text-teal">Auraz</span>
            <p className="mt-2 font-mono text-sm text-foreground">59.3293° N, 18.0686° E</p>
            <p className="mt-1 text-xs text-muted-foreground">Stockholm, Sverige</p>
          </div>
        </div>

        <div className="px-6 py-24 lg:px-16 lg:py-32">
          <Reveal>
            <span className="font-mono-label text-xs text-teal">Kontakt</span>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Redo att ta nästa steg?
            </h2>
            <p className="mt-6 text-lg text-foreground/90">
              Full transparens. Alltid. Bara med Auraz.
            </p>
            <p className="mt-2 text-muted-foreground">
              Berätta om era mål. Vi återkommer inom 24 timmar.
            </p>

            {sent ? (
              <div className="mt-12 flex items-center gap-4 border border-teal/40 bg-teal/10 px-6 py-8">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal">
                  <Check className="size-5 text-accent-foreground" />
                </span>
                <p className="text-foreground">
                  Tack! Vi har tagit emot ditt meddelande och återkommer inom 24 timmar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-12">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                  {fields.map((field) => (
                    <label key={field.name} className="block">
                      <span className="font-mono-label text-[0.65rem] text-muted-foreground">
                        {field.label}
                      </span>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.name === 'namn' || field.name === 'epost'}
                        className="mt-2 w-full border-0 border-b border-input bg-transparent pb-2 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-teal"
                      />
                    </label>
                  ))}
                </div>

                <label className="mt-8 block">
                  <span className="font-mono-label text-[0.65rem] text-muted-foreground">
                    Berätta om era mål
                  </span>
                  <textarea
                    name="mal"
                    rows={3}
                    className="mt-2 w-full resize-none border-0 border-b border-input bg-transparent pb-2 text-foreground outline-none transition-colors focus:border-teal"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-12 w-full bg-teal py-5 font-mono-label text-xs text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {loading ? 'Skickar...' : 'Boka möte'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
