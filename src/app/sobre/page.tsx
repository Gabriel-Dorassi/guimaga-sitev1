import type { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, MapPin, Headphones, DollarSign, Zap, Handshake } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a Guimaga Empilhadeiras, fundada em 2010 em Jundiaí/SP. Nossa história, valores e compromisso com a excelência.',
}

const VALUES = [
  {
    Icon: Headphones,
    title: 'Suporte Contínuo',
    description: 'Atendimento dedicado durante todo o contrato de locação, do início ao fim.',
  },
  {
    Icon: DollarSign,
    title: 'Preço Justo',
    description: 'Soluções competitivas sem abrir mão da qualidade dos equipamentos.',
  },
  {
    Icon: Zap,
    title: 'Agilidade',
    description: 'Respostas rápidas e eficazes para manter sua operação funcionando.',
  },
  {
    Icon: Handshake,
    title: 'Parceria Verdadeira',
    description: 'Construímos relações de longo prazo baseadas em confiança e resultados.',
  },
]

export default function SobrePage() {
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
            Nossa História
          </span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">
            Sobre a Guimaga
          </h1>
        </div>
      </section>

      {/* ── HISTORY ── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 font-display text-4xl font-extrabold text-navy">
                Uma trajetória construída com parceria
              </h2>
              <p className="mb-4 leading-relaxed text-gray-mid">
                A Guimaga Empilhadeiras, fundada em 2010, construiu sua trajetória com foco
                no suporte contínuo e na excelência do atendimento durante todo o contrato.
                Nosso objetivo é garantir soluções ágeis e eficazes a um preço justo,
                consolidando verdadeiras parcerias com os nossos clientes.
              </p>
              <p className="leading-relaxed text-gray-mid">
                Fundada em Jundiaí, a Guimaga edificou-se com base na agilidade do atendimento
                e acompanhamento rigoroso de sua frota, promovendo uma relação de parceria
                que vai além do simples aluguel de equipamentos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-navy p-6 text-center text-white">
                <Calendar className="mx-auto mb-3 h-8 w-8 text-yellow" />
                <div className="font-display text-3xl font-extrabold text-yellow">2010</div>
                <div className="mt-1 text-sm text-white/70">Ano de fundação</div>
              </div>
              <div className="rounded-2xl bg-yellow p-6 text-center">
                <MapPin className="mx-auto mb-3 h-8 w-8 text-navy" />
                <div className="font-display text-2xl font-extrabold text-navy">Jundiaí</div>
                <div className="mt-1 text-sm text-navy/70">São Paulo</div>
              </div>
              <div className="col-span-2 rounded-2xl bg-offwhite p-6 text-center">
                <div className="font-display text-lg font-extrabold text-navy">
                  Novas e Seminovas
                </div>
                <div className="mt-1 text-sm text-gray-mid">Frotas disponíveis para locação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              Nossa Essência
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-navy md:text-5xl">
              Nossos Valores
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                  <Icon className="h-6 w-6 text-yellow" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-navy">{title}</h3>
                <p className="text-sm text-gray-mid">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-yellow py-14 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-display text-3xl font-extrabold text-navy">
            Vamos construir uma parceria?
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-navy px-8 py-4 font-display font-bold text-white transition-opacity hover:opacity-90"
          >
            Fale com a Guimaga no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
