import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Headphones, DollarSign, Zap, Handshake } from 'lucide-react'
import { WHATSAPP_LINK, EQUIPMENT, WHY_GUIMAGA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Locação de Empilhadeiras em Jundiaí',
  description:
    'Especialistas em locação de empilhadeiras desde 2010. Sua parceira ideal em movimentação de cargas em Jundiaí – SP.',
}

const ICON_MAP: Record<string, React.ElementType> = {
  Headphones,
  DollarSign,
  Zap,
  Handshake,
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-home.png"
          alt="Empilhadeira em operação em armazém"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="mb-4 inline-block rounded-full border border-yellow px-4 py-1 font-display text-sm font-bold uppercase tracking-widest text-yellow">
            Desde 2010 · Jundiaí/SP
          </span>
          <h1 className="mb-6 font-display text-5xl font-extrabold leading-tight md:text-7xl">
            Especialistas em<br />
            <span className="text-yellow">Locação de</span><br />
            Empilhadeiras
          </h1>
          <p className="mb-8 text-lg text-white/80 md:text-xl">
            Sua parceira ideal em movimentação de cargas.
            Equipamentos novos e seminovos para a sua operação.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow px-8 py-4 font-display text-lg font-bold text-navy transition-opacity hover:opacity-90"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </section>

      {/* ── NUMBERS BAR ── */}
      <section className="bg-navy py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 text-center text-white sm:grid-cols-3">
          {[
            { value: 'Est. 2010', label: 'Anos no mercado' },
            { value: 'Jundiaí/SP', label: 'Atendimento regional' },
            { value: 'Novas e Seminovas', label: 'Frotas disponíveis' },
          ].map((stat) => (
            <div key={stat.value}>
              <div className="font-display text-3xl font-extrabold text-yellow md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EQUIPMENT PREVIEW ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              Catálogo
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-navy md:text-5xl">
              Nossos Equipamentos
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {EQUIPMENT.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-display text-xl font-bold text-navy">
                    {item.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-mid">{item.description}</p>
                  <Link
                    href="/equipamentos"
                    className="text-sm font-semibold text-navy underline underline-offset-4 transition-colors hover:text-yellow"
                  >
                    Ver mais →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/equipamentos"
              className="inline-block rounded-full border-2 border-navy px-8 py-3 font-display font-bold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Ver todos os equipamentos
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY GUIMAGA ── */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              Diferenciais
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-navy md:text-5xl">
              Por que a Guimaga?
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_GUIMAGA.map((item) => {
              const Icon = ICON_MAP[item.icon]
              return (
                <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                    <Icon className="h-6 w-6 text-yellow" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-mid">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL TEXT ── */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-lg leading-relaxed text-gray-mid md:text-xl">
            A Guimaga Empilhadeiras, fundada em 2010, construiu sua trajetória com foco
            no suporte contínuo e na excelência do atendimento durante todo o contrato.
            Nosso objetivo é garantir soluções ágeis e eficazes a um preço justo,
            consolidando verdadeiras parcerias com os nossos clientes.
          </p>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-yellow py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-extrabold text-navy md:text-4xl">
            Pronto para otimizar sua operação?
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-navy px-8 py-4 font-display text-lg font-bold text-white transition-opacity hover:opacity-90"
          >
            Fale com a Guimaga no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
