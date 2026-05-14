import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import Script from 'next/script'
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
        {/* Google Ads — tag global */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16456397896"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16456397896');
        `}</Script>
        {/* Google Ads — rastreamento de conversão: clique no WhatsApp */}
        <Script id="gtag-conversion" strategy="afterInteractive">{`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-16456397896/Tf9MCKvEjK0cEMjogqc9',
              'event_callback': callback
            });
            return false;
          }
          document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function(el) {
              el.addEventListener('click', function() {
                gtag_report_conversion(el.href);
              });
            });
          });
        `}</Script>
      </body>
    </html>
  )
}
