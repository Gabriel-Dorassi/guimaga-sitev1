import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { CONTACT, WHATSAPP_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Guimaga Empilhadeiras. WhatsApp, telefone, email e localização em Jundiaí – SP.',
}

export default function ContatoPage() {
  return (
    <>
      {/* ── BANNER ── */}
      <section className="relative overflow-hidden py-20 text-center text-white">
        <Image
          src="/images/hero-home.png"
          alt="Empilhadeira em operação em armazém"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
            Fale Conosco
          </span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">Contato</h1>
          <p className="mt-4 text-lg text-white/70">
            Estamos prontos para encontrar a melhor solução para a sua operação.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">

            {/* WhatsApp — full width, principal */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl bg-[#25D366] p-8 text-white transition-opacity hover:opacity-90 md:col-span-2"
            >
              <svg viewBox="0 0 24 24" fill="white" className="mt-1 h-8 w-8 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <div className="font-display text-xs font-bold uppercase tracking-widest text-white/70">
                  Principal — Atendimento rápido
                </div>
                <div className="mt-1 font-display text-2xl font-extrabold">
                  WhatsApp: (11) 94720-9899
                </div>
                <div className="mt-1 text-white/80">Clique para abrir uma conversa</div>
              </div>
            </a>

            {/* Phones */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                <Phone className="h-6 w-6 text-yellow" />
              </div>
              <h2 className="mb-4 font-display text-xl font-bold text-navy">Telefones</h2>
              <ul className="space-y-3">
                {CONTACT.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\D/g, '')}`}
                      className="text-gray-mid transition-colors hover:text-navy"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                <Mail className="h-6 w-6 text-yellow" />
              </div>
              <h2 className="mb-4 font-display text-xl font-bold text-navy">E-mail</h2>
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all text-gray-mid transition-colors hover:text-navy"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Address */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                <MapPin className="h-6 w-6 text-yellow" />
              </div>
              <h2 className="mb-4 font-display text-xl font-bold text-navy">Endereço</h2>
              <p className="text-gray-mid">{CONTACT.address}</p>
            </div>

            {/* Social */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 font-display text-xl font-bold text-navy">Redes Sociais</h2>
              <div className="flex flex-col gap-4">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-mid transition-colors hover:text-navy"
                >
                  <FaInstagram className="h-5 w-5 flex-shrink-0" />
                  <span>@guimaga.empilhadeiras</span>
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-mid transition-colors hover:text-navy"
                >
                  <FaLinkedinIn className="h-5 w-5 flex-shrink-0" />
                  <span>Guimaga Empilhadeiras</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="mt-8 overflow-hidden rounded-2xl shadow-sm">
            <iframe
              src={CONTACT.mapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Guimaga Empilhadeiras — Jundiaí/SP"
            />
          </div>
        </div>
      </section>
    </>
  )
}
