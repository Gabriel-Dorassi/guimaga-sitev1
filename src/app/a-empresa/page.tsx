import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Star, Shield, Users, Award, Heart } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'A Empresa',
  description:
    'Conheça a missão, visão e valores da Guimaga Empilhadeiras. Referência em locação de empilhadeiras desde 2010 em Jundiaí/SP.',
}

const MVV = [
  {
    Icon: Target,
    title: 'Missão',
    text: 'Ser referência na manutenção, vendas e locação de máquinas e equipamentos de movimentação, primando pela excelência e zelando pela qualidade, através de profissionais qualificados e comprometidos.',
  },
  {
    Icon: Eye,
    title: 'Visão',
    text: 'Ampliar as atividades com qualidade, formar parcerias fortes e ser reconhecida no mercado.',
  },
  {
    Icon: Star,
    title: 'Valores',
    text: 'Confiança · Respeito · Excelência · Humildade e Integridade.',
  },
]

const VALUES = [
  { Icon: Shield, title: 'Confiança',                        description: 'Base de toda relação duradoura com clientes e colaboradores.' },
  { Icon: Users,  title: 'Respeito',                         description: 'Respeito aos clientes e colaboradores em cada interação.' },
  { Icon: Award,  title: 'Busca pela Excelência',            description: 'Qualidade e melhoria contínua em serviços e equipamentos.' },
  { Icon: Heart,  title: 'Humildade e Integridade',          description: 'Agir com transparência e simplicidade em tudo que fazemos.' },
]

export default function AEmpresaPage() {
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
            Guimaga Empilhadeiras
          </span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">
            A Empresa
          </h1>
        </div>
      </section>

      {/* ── QUEM SOMOS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
                Quem Somos
              </span>
              <h2 className="mb-6 mt-2 font-display text-4xl font-extrabold text-navy">
                Uma trajetória construída com parceria
              </h2>
              <p className="leading-relaxed text-gray-mid">
                A Guimaga Empilhadeiras, fundada em 2010, construiu sua trajetória com foco
                no suporte contínuo e na excelência do atendimento durante todo o contrato.
                Nosso objetivo é garantir soluções ágeis e eficazes a um preço justo,
                consolidando verdadeiras parcerias com os nossos clientes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-navy p-6 text-center text-white">
                <div className="font-display text-3xl font-extrabold text-yellow">2010</div>
                <div className="mt-1 text-sm text-white/70">Ano de fundação</div>
              </div>
              <div className="rounded-2xl bg-yellow p-6 text-center">
                <div className="font-display text-2xl font-extrabold text-navy">Jundiaí</div>
                <div className="mt-1 text-sm text-navy/70">São Paulo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSÃO, VISÃO E VALORES ── */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              Nossa Essência
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-navy md:text-5xl">
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MVV.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                  <Icon className="h-7 w-7 text-yellow" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-navy">{title}</h3>
                <p className="leading-relaxed text-gray-mid">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID DE VALORES ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              O que nos guia
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
