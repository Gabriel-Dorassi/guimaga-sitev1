import type { Metadata } from 'next'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
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
      <section className="bg-navy py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
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
              <MessageCircle className="mt-1 h-8 w-8 flex-shrink-0 fill-white" />
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
