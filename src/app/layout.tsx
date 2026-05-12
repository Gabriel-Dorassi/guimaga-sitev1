import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-barlow',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Guimaga Empilhadeiras | Locação de Empilhadeiras em Jundiaí',
    template: '%s | Guimaga Empilhadeiras',
  },
  description:
    'Especialistas em locação de empilhadeiras desde 2010. Empilhadeiras elétricas, a GLP e paleteiras elétricas em Jundiaí – SP.',
  keywords: [
    'locação de empilhadeiras',
    'aluguel de empilhadeiras',
    'Jundiaí',
    'empilhadeira elétrica',
    'empilhadeira GLP',
    'paleteira elétrica',
  ],
  openGraph: {
    siteName: 'Guimaga Empilhadeiras',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
