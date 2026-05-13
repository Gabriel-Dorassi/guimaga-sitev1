import type { Metadata } from 'next'
import Image from 'next/image'
import { EQUIPMENT, WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Equipamentos',
  description:
    'Conheça nossa frota: empilhadeiras a GLP, contrabalançada, retrátil, paleteira elétrica, transpaleteira e patolada para locação em Jundiaí – SP.',
}

export default function EquipamentosPage() {
  return (
    <>
      {/* ── BANNER ── */}
      <section className="bg-navy py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
            Catálogo
          </span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">
            Nossos Equipamentos
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Locação de empilhadeiras novas e seminovas, oferecendo os melhores
            equipamentos para a sua operação.
          </p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {EQUIPMENT.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-md">
                <div className="relative h-64 bg-white">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-6" />
                </div>
                <div className="p-8">
                  <h2 className="mb-3 font-display text-2xl font-extrabold text-navy">
                    {item.name}
                  </h2>
                  <p className="mb-6 text-gray-mid">{item.description}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-yellow px-6 py-3 font-display font-bold text-navy transition-opacity hover:opacity-90"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-offwhite py-14 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-display text-3xl font-extrabold text-navy">
            Não encontrou o que procura?
          </h2>
          <p className="mb-6 text-gray-mid">
            Entre em contato e vamos encontrar a melhor solução para a sua operação.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-navy px-8 py-4 font-display font-bold text-white transition-opacity hover:opacity-90"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
